import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const reportsDir = join(root, 'content', 'reports');
const apiKey = process.env.OPENAI_API_KEY;
const model = process.env.OPENAI_MODEL || 'gpt-5';
if (!apiKey) throw new Error('缺少 OPENAI_API_KEY。请在 GitHub 仓库 Secrets 中设置。');

const now = new Date(Date.now() + 8 * 60 * 60 * 1000);
const date = now.toISOString().slice(0, 10);
const existingFiles = (await readdir(reportsDir)).filter(file => file.endsWith('.json'));
const existingReports = await Promise.all(existingFiles.map(async file => JSON.parse(await readFile(join(reportsDir, file), 'utf8'))));
const seenDois = existingReports.flatMap(report => report.papers || []).map(paper => paper.doi).filter(Boolean);
const nextIssue = Math.max(0, ...existingReports.map(report => Number(report.issue) || 0)) + 1;

const schema = {
  type:'object', additionalProperties:false,
  required:['date','issue','searchWindow','headline','hotspot','searchTerms','papers'],
  properties:{
    date:{type:'string'}, issue:{type:'integer'}, searchWindow:{type:'string'}, headline:{type:'string'}, hotspot:{type:'string'},
    searchTerms:{type:'array',items:{type:'string'}},
    papers:{type:'array',items:{type:'object',additionalProperties:false,required:['material','title','authors','journal','date','doi','fullText','access','rating','method','conclusion','sections'],properties:{
      material:{type:'string'},title:{type:'string'},authors:{type:'string'},journal:{type:'string'},date:{type:'string'},doi:{type:'string'},fullText:{type:'string'},access:{type:'string'},rating:{type:'string'},method:{type:'string'},conclusion:{type:'string'},
      sections:{type:'array',items:{type:'object',additionalProperties:false,required:['title','text'],properties:{title:{type:'string'},text:{type:'string'}}}}
    }}}
  }
};

const prompt = `你是“晶体生长和物性调控”每日文献简报的科研编辑。今天是北京时间 ${date}，期号 ${nextIssue}。

请使用网页搜索，优先检索今天上线或发表的论文；如果今天没有高度相关结果，再回溯最近三个自然日。必须把 arXiv 作为独立轨道，并逐项检索 APS/Physical Review 全系列、Nature 系列、Science、Advanced Materials、Advanced Functional Materials、Nano Letters、ACS Nano、JACS、Chemistry of Materials、npj Quantum Materials、Crystal Growth & Design、Journal of Crystal Growth 及同等级相关期刊。主题覆盖单晶生长（尤其 Flux 与 CVT）、结构/缺陷/物性调控，同时纳入高温或非常规超导、重费米子/量子临界、磁性拓扑、自旋与二维器件。凡与这些主题有明确证据关联的论文均可收录，不限制篇数；不得用过旧或低相关论文填数。记录每条期刊轨道的命中、入选和排除原因。

已经收录的 DOI：${seenDois.length ? seenDois.join(', ') : '无'}。按 DOI 去重，除非存在重要修订或新的后续物性结果，并在对应段落解释重复原因。

每篇必须先访问出版社/DOI/arXiv/作者公开稿等一手来源。只有实际获得并阅读正文或公开全文时，access 才写“全文精读”；否则写“仅摘要/元数据”。不得虚构作者、配比、温区、输运剂、测量条件或数值。未给出的实验参数明确写“正文未报告”。

每篇 sections 至少包含六个逻辑完整部分：
1. 研究背景、核心问题、热点原因与作者的因果判断链；
2. 晶体成分、结构、样品形态与研究对象；
3. 生长方法：原料纯度/配比、助熔剂或输运剂、安瓿和气氛、冷热端、温程、时间、降温、分离、后处理、尺寸和收率；
4. 结构、成分、缺陷和质量表征，以及这些指标为何足以或不足；
5. 物性测量：仪器或方法、几何、温度/磁场/压力范围、关键原始现象、数据、拟合模型和替代解释；
6. 核心结论、创新、局限、可复现性风险、下一轮生长/测量建议和阅读优先级。

每篇还必须单独生成 conclusion，标题语义固定为“Conclusion｜这篇论文讲了什么故事”。用 4–6 句、约 180–300 个中文字写成一段连贯叙事，依次回答：研究从什么矛盾或缺口出发；作者采用了什么独特样品/方法；哪组关键证据推动故事发生转折；最终建立了什么结论；这个结论对晶体生长、物性理解或后续实验有什么直接意义。它不是摘要改写，也不能复制通用模板。必须使用该论文特有的材料名、测量或生长方法和至少一个关键结果；只能访问摘要时要在 conclusion 中明确证据边界。

全文精读条目原则上每篇总计不少于1500个中文字，重点论文可达2500–4000字；建立“问题—样品—生长—质量—测量—证据—结论—复现建议”链条，并区分直接观察、模型拟合、作者推断和编辑判断。仅摘要条目也要解释已知逻辑与信息边界，但不凑字数。doi 必须是可点击 URL；没有公开全文时 fullText 使用空字符串。headline 和 hotspot 用中文。searchTerms 记录实际日期、数据库、逐刊结果、访问状态与去重。只返回符合给定结构的 JSON。`;

const response = await fetch('https://api.openai.com/v1/responses', {
  method:'POST',
  headers:{'Authorization':`Bearer ${apiKey}`,'Content-Type':'application/json'},
  body:JSON.stringify({
    model,
    tools:[{type:'web_search',search_context_size:'high',user_location:{type:'approximate',country:'CN',timezone:'Asia/Shanghai'}}],
    input:prompt,
    max_output_tokens:30000,
    text:{format:{type:'json_schema',name:'daily_crystal_report',strict:true,schema}}
  })
});
if (!response.ok) throw new Error(`OpenAI API 请求失败 ${response.status}: ${await response.text()}`);
const payload = await response.json();
const outputText = payload.output_text || payload.output?.flatMap(item => item.content || []).find(item => item.type === 'output_text')?.text;
if (!outputText) throw new Error('API 没有返回结构化报告。');
const report = JSON.parse(outputText);
report.date = date;
report.issue = nextIssue;
await mkdir(reportsDir, {recursive:true});
await writeFile(join(reportsDir, `${date}.json`), `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(`已写入 ${date}：${report.papers.length} 篇论文。`);
