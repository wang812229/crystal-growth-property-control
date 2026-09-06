/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-06.json';

export const metadata: Metadata = {title:'2026-09-06 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
  <figure className="data-figure dark-data"><figcaption><b>原创图解 1｜MnTe：生长倾角如何进入自旋极化</b><span>根据 Nature Communications 补充材料中的结构与转矩数据重绘，并非论文原图</span></figcaption>
    <div className="growth-map"><article><i>界面起点</i><strong>MgO(111)</strong><b>晶格失配约 28%</b><p>界面位错和几何配准使 MnTe(0001) 不再与衬底严格平行</p></article><article><i>结构旋钮</i><strong>晶面倾斜约 5°</strong><b>模型值 5.3°</b><p>Pt/Co/Pt 总厚 3.94±0.01 nm 且无楔形，倾角来自 MnTe</p></article><article><i>器件结果</i><strong>ξy=0.580</strong><b>ξz=0.070</b><p>小的面外极化破除对称性，支持无外场翻转</p></article></div>
    <p className="figure-analysis"><b>图解分析：</b>这条证据链的关键不是“倾斜与翻转同时出现”，而是作者还用自由层易轴、厚度楔形和交换偏置对照排除了三种常见替代解释。剩余弱点是 Pt 对 ξy 的贡献没有完全拆开；ξz 随 Pt 厚度较稳定，才是更干净的 MnTe 倾斜指纹。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 2｜α-Fe₂O₃：两支磁振子的室温速度窗口</b><span>根据补充材料数值重绘，并非论文原图；k=38.8–43.9 μm⁻¹</span></figcaption>
    <div className="pressure-chart"><div className="phase-axis"><span>模式</span><span>频率</span><span>群速度</span><span>证据含义</span></div><div className="phase-bar"><i>q-AFM</i><i>270–292 GHz</i><i>25.3–26.6 km/s</i></div><div className="plasma-row"><span>q-FM</span><b>207–236 GHz</b><em>32.7–33.0 km/s</em><b>最快传播</b></div><div className="temp-row"><span>功率热校准</span><b>1.5 mW</b><em>频移约 3.5 GHz</em><b>升温约 3 K</b></div></div>
    <p className="figure-analysis"><b>图解分析：</b>33 km/s 是由 Bragg 选择的多个波矢点建立色散后得到的群速度，不是单点传播时间的直接读数。泵浦功率校准把简单加热限制在约 3 K；但“非互易”主要表现为正反向振幅不同，模型频率劈裂仅约 10⁻² GHz，不能混为一谈。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 3｜表面声子 Hall 黏滞：磁构型选择响应</b><span>根据 npj Quantum Materials 作者稿的对称性结果重绘，并非论文原图</span></figcaption>
    <div className="device-stack"><div className="layers"><i>FM：ηtop = ηbottom</i><i>声子有净手性 / Berry 曲率</i><i>色散仍互易</i><i>κxy≠0，低温 ∝T²</i></div><div className="polarization"><span>切换上下磁化<b>同一薄膜的可逆对照</b></span><i>对称性而非绝对参数给出最强判据</i><span>AFM：ηtop = −ηbottom<b>非互易；净手性与 κxy 抵消</b></span><small>PHV 含截止依赖，并非量子化常数</small></div></div>
    <p className="figure-analysis"><b>图解分析：</b>最值得实验检验的是三种观测量的组合关系，而不是模型给出的某个绝对数值。若同片器件从 FM 切到 AFM 后出现“热 Hall 消失而色散非互易增强”，会比只测到一个 κxy 信号更能排除普通声子散射背景。</p>
  </figure>
  <p className="version-note"><b>图片许可说明：</b>以上均为本站根据公开正文或补充材料自主绘制的逻辑图，没有复制付费论文插图、微照片或受限图形表达。数值与结论请以链接中的原文为准。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')||p.access.includes('补充材料精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-06">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
  <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 012</p><h1>每日文献简报</h1><p>2026 年 9 月 6 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文/SI 精读</span><span>3 个主板块</span></div></div></div>
  <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
   <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与来源说明</h2><p>{report.hotspot}</p><ol><li><b>正式期刊优先。</b>本期逐轨检索 APS/PR、Nature、Wiley Advanced、ACS/JACS、Crystal Growth &amp; Design 与 Journal of Crystal Growth；9 篇均为正式期刊新记录，未用旧 arXiv 凑数。</li><li><b>全文分级真实标注。</b>5 篇读取作者公开全文，2 篇读取完整补充材料和出版社摘要；Advanced Materials 与 JACS 的正文在自动环境中返回 403，只按摘要分析。</li><li><b>周末时间窗。</b>北京时间 9 月 6 日检索时，arXiv 官方 new 页最新仍是周五 9 月 4 日批次；当天没有独立新提交，因此回溯到上一期截稿后上线的 9 月 5 日正式期刊论文。</li></ol></section>
   <EvidenceFigures/>
   {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.includes('全文精读')||p.access.includes('补充材料精读')?'全文 / SI 精读':'摘要 / 元数据'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div></div><p className="links"><a href={p.doi}>论文条目 ↗</a><a href={p.fullText}>全文 / 来源页 ↗</a></p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
   <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>全文状态</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.access}</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
   <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索范围：</b>{report.searchTerms.join('；')}。</p><p><b>轨道结果：</b>APS/PR 3 篇、Nature Portfolio 4 篇、Advanced Materials 1 篇、JACS 1 篇；Science、AFM、Nano Letters、ACS Nano、Chemistry of Materials、Crystal Growth &amp; Design 与 Journal of Crystal Growth 在实际窗口内未发现明确高相关新增。按主板块计：晶体生长和物性调控 2 篇，重费米子与量子临界 2 篇，磁性、拓扑与自旋 5 篇；高温/非常规超导和二维器件本期无独立主条目。</p><p><b>机构访问：</b>已尝试出版社正文入口；当前自动任务无法继承已登录的 aTrust 浏览器会话，Wiley/ACS 返回 403。未绕过权限，也未保存或发布订阅 PDF。Nature 两篇为出版社尚未发布主文 PDF 的早期页面，但完整 SI 可合法访问。</p></section>
  </article></div>
 </main>}
