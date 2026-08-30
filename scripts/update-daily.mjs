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
    papers:{type:'array',items:{type:'object',additionalProperties:false,required:['material','title','authors','journal','date','doi','fullText','access','rating','method','sections'],properties:{
      material:{type:'string'},title:{type:'string'},authors:{type:'string'},journal:{type:'string'},date:{type:'string'},doi:{type:'string'},fullText:{type:'string'},access:{type:'string'},rating:{type:'string'},method:{type:'string'},
      sections:{type:'array',items:{type:'object',additionalProperties:false,required:['title','text'],properties:{title:{type:'string'},text:{type:'string'}}}}
    }}}
  }
};

const prompt = `你是“晶体生长和物性调控”每日文献简报的科研编辑。今天是北京时间 ${date}，期号 ${nextIssue}。

请使用网页搜索，优先检索今天上线或发表的论文；如果今天没有高度相关结果，再回溯最近三个自然日。必须纳入 arXiv，并优先查看 PRL、PRB、Nature Communications、Nature Physics、Nature、Science 及同等级期刊。主题聚焦单晶生长，尤其 Flux growth 和 chemical vapor transport/CVT，并覆盖这些晶体的磁性、超导、电输运、热输运、光谱、量子振荡、压力或场调控。精选 3–5 篇；确实没有相关论文时可以为 0 篇，并如实说明，不得用过旧或低相关论文填数。

已经收录的 DOI：${seenDois.length ? seenDois.join(', ') : '无'}。按 DOI 去重，除非存在重要修订或新的后续物性结果，并在对应段落解释重复原因。

每篇必须先访问出版社/DOI/arXiv/作者公开稿等一手来源。只有实际获得并阅读正文或公开全文时，access 才写“全文精读”；否则写“仅摘要/元数据”。不得虚构作者、配比、温区、输运剂、测量条件或数值。未给出的实验参数明确写“正文未报告”。

每篇 sections 至少包含六个逻辑完整部分：
1. 研究背景、核心问题、热点原因与作者的因果判断链；
2. 晶体成分、结构、样品形态与研究对象；
3. 生长方法：原料纯度/配比、助熔剂或输运剂、安瓿和气氛、冷热端、温程、时间、降温、分离、后处理、尺寸和收率；
4. 结构、成分、缺陷和质量表征，以及这些指标为何足以或不足；
5. 物性测量：仪器或方法、几何、温度/磁场/压力范围、关键原始现象、数据、拟合模型和替代解释；
6. 核心结论、创新、局限、可复现性风险、下一轮生长/测量建议和阅读优先级。

全文精读条目每个 section 尽量写 180–350 个中文字，总体做到细致、连贯并有证据层级；仅摘要条目也要详细解释已知逻辑，但反复标明信息边界。doi 必须是可点击 URL；没有公开全文时 fullText 使用空字符串。headline 和 hotspot 用中文。searchTerms 记录实际使用的检索词。只返回符合给定结构的 JSON。`;

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
