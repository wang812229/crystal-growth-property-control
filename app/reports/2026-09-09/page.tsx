/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-09.json';

export const metadata: Metadata={title:'2026-09-09 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
 <figure className="data-figure dark-data"><figcaption><b>原创图解 1｜三个“生长窗口”为什么都很窄</b><span>依据三篇论文 Methods 与结构数据重绘，并非论文原图</span></figcaption>
  <div className="growth-map"><article><i>GdAlGe · MBE</i><strong>≤ 5 ML</strong><b>Ge(111) · 190 °C</b><p>厚度或反应温度上升即出现旁相；界面稳定与化学反应共同限窗</p></article><article><i>FeTe · MBE</i><strong>10–30 min</strong><b>280 °C · Te 束流退火</b><p>间隙Fe约0.015→接近0；T<sub>c</sub>随化学计量出现至约12 K</p></article><article><i>Ce₅MGe₂ · Flux</i><strong>2 °C h⁻¹</strong><b>1150 °C / 24 h</b><p>Rh/Ir分别在750/700 °C离心；配比和产率仍需作者补全</p></article></div>
  <p className="figure-analysis"><b>图解分析：</b>三项工作都说明“材料名称”不是实验样品的充分描述。GdAlGe 由厚度决定多型，FeTe 由分钟级退火决定间隙 Fe，Ce₅MGe₂ 则由慢冷与离心温度决定结晶窗口。最实用的记录方式是把温度、时间、厚度和同批结构/成分质量写进每一块物性样品的身份卡。</p>
 </figure>
 <figure className="data-figure"><figcaption><b>原创图解 2｜FeTe：从化学计量到节点超导的证据链</b><span>依据 arXiv:2609.08116 主文与补充材料重绘，并非论文原图</span></figcaption>
  <div className="device-stack"><div className="layers"><i>280 °C Te 退火</i><i>间隙 Fe：约 0.06 → 接近 0</i><i>T<sub>c</sub>：无 → 约 12 K</i><i>扫描 SQUID：Δλ(T) 幂律</i><i>STM：V 形低能 DOS</i></div><div className="polarization"><span>最强结论<b>存在节点证据</b></span><i>0.02 T<sub>c</sub>仍不饱和</i><span>仍待区分<b>d 波 / 节点 s 波</b></span><small>不同衬底上的STM与SQUID并非同片共定位；退火还可能改变应变、氧和表面结构</small></div></div>
  <p className="figure-analysis"><b>图解分析：</b>化学计量序列建立了“少量间隙 Fe 抑制超导”的强相关；低温穿透深度与 STM 态密度再从体积分量和局域谱学两侧支持节点。最后一步的配对对称性仍依赖模型，不能从幂律指数单独宣布 d 波。</p>
 </figure>
 <figure className="data-figure"><figcaption><b>原创图解 3｜两类“漂亮信号”的解释边界</b><span>依据 PdTe 与 LSCO 预印本重绘，并非论文原图</span></figcaption>
  <div className="pressure-chart"><div className="phase-axis"><span>现象</span><span>直接观察</span><span>排他性检验</span><span>较稳结论</span></div><div className="phase-bar"><i>PdTe</i><i>LMR + PHE</i><i>B<sub>c</sub>∝1/μ；无负纵向MR</i></div><div className="plasma-row"><span>拓扑磁输运</span><b>看起来像手征异常</b><em>几何与迁移率缩放</em><b>经典无序/轨道机制</b></div><div className="temp-row"><span>LSCO 高阶峰</span><b>1、2、4声子候选</b><em>缺少3声子；随掺杂选择性消失</em><b>模式选择已证，双极化子未定</b></div></div>
  <p className="figure-analysis"><b>图解分析：</b>一条曲线的名称不等于机制。PdTe 用正纵向磁阻和迁移率缩放削弱手征异常解释；LSCO 清楚观测到“缺三保四”，但仍缺氧同位素与完整截面计算来证明双极化子。两篇最值得学习的是如何把“直接观察”与“作者故事”分层。</p>
 </figure>
 <p className="version-note"><b>图片说明：</b>三张图均由本站基于可访问全文中的方法和数值原创绘制，没有复制论文图形；适合解释证据关系，不替代原文原始数据。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-09">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
 <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 015</p><h1>每日文献简报</h1><p>2026 年 9 月 9 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文精读</span><span>5 个主板块</span></div></div></div>
 <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
  <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与阅读边界</h2><p>{report.hotspot}</p><ol><li><b>当天优先、三日回溯。</b>目标正式期刊没有新的未收录高相关论文；回溯结果与昨日条目重合，因此不重复填充。</li><li><b>9篇均为新全文。</b>今天纳入 arXiv 9月8日UTC新提交、北京时间今天可见的9篇预印本，已逐份取得PDF并阅读正文和可用附录。</li><li><b>实验与理论分开。</b>5篇包含晶体/薄膜生长，1篇是磁场ARPES仪器，3篇以计算或既有晶体测量为主；没有把理论预测表述为实验实现。</li><li><b>每篇新增故事式 Conclusion。</b>先用一段话说明论文从什么问题出发、取得什么证据、得出什么结论以及还缺哪一步，再进入详细证据链。</li></ol></section>
  <EvidenceFigures/>
  {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>全文精读 · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div></div><p className="links"><a href={p.doi}>arXiv 条目 ↗</a><a href={p.fullText}>PDF 全文 ↗</a></p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p><div className="paper-conclusion"><span>CONCLUSION</span><h3>这篇论文讲了什么故事</h3><p>{p.conclusion}</p></div>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
  <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>主要结论</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.conclusion.slice(0,72)}…</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
  <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索记录：</b>{report.searchTerms.join('；')}。</p><p><b>正式期刊结果：</b>Crossref逐刊核对 APS、Nature Portfolio、Wiley、ACS、Crystal Growth &amp; Design 与 Journal of Crystal Growth；三日窗口的高相关项与9月8日简报重合，故本期没有重复。</p><p><b>全文状态：</b>9篇均取得arXiv PDF全文。GdAlGe、Ce₅MGe₂、PdTe、FeTe、磁场ARPES与Sr₂CuO₃按实验正文/Methods阅读；LSCO记录了生长信息缺失；SrTiO₃/Sr₂TiO₄和LaN明确标为理论工作。</p></section>
 </article></div>
 </main>}
