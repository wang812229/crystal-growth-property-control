/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-08.json';

export const metadata: Metadata = {title:'2026-09-08 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
  <figure className="data-figure dark-data"><figcaption><b>原创图解 1｜BaTiO₃：电场—极化—声子角动量闭环</b><span>根据 Nature Materials 主文、Methods 与 SI 数值重绘，并非论文原图</span></figcaption>
    <div className="growth-map"><article><i>生长</i><strong>700 → 725 °C</strong><b>LSMO牺牲层 → BTO</b><p>100 mtorr O₂，PLD 200 mJ、10 Hz；760 torr O₂冷却</p></article><article><i>极化控制</i><strong>±3.5 V</strong><b>±0.2 V 保持读出</b><p>PFM约180°翻转，3 V已完全开关；80 nm自支撑膜</p></article><article><i>CD–RIXS</i><strong>20 · 40 · 100 meV</strong><b>总信号二色性约5%</b><p>295 K、q=[−0.12,0.20,0.42] Å⁻¹；极化与光子手性反转均使符号翻转</p></article></div>
    <p className="figure-analysis"><b>图解分析：</b>最强证据不是单个峰，而是两种独立“翻转旋钮”都让圆二色差分反号，且动量纹理与 C4v 的 g-wave 对称性一致。15 meV 分辨率仍限制相邻声子模逐峰指认，因此“角动量可控”比“每个峰的精确身份”更稳固。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 2｜Bi₂Te₃₋ₓSeₓ：窄成分窗口同时优化力学与热电</b><span>根据 Nature Communications SI 与审稿记录重绘，并非论文原图</span></figcaption>
    <div className="pressure-chart"><div className="phase-axis"><span>指标</span><span>Bi₂Te₃</span><span>Bi₂Te₂.₇Se₀.₃</span><span>解释</span></div><div className="phase-bar"><i>反位缺陷</i><i>2.0×10²⁰ cm⁻³</i><i>1.4×10²⁰ cm⁻³</i></div><div className="plasma-row"><span>弯曲强度</span><b>9.2 MPa</b><em>54.3 MPa</em><b>临界半径 5.3→3.4 mm</b></div><div className="temp-row"><span>空气老化30天</span><b>PF 保留约50%</b><em>PF 保留88.7%</em><b>348 K</b></div></div>
    <p className="figure-analysis"><b>图解分析：</b>x=0.3同时降低反位缺陷、提高强度并减慢空气退化，但x=0.6使PF从50.9降至32.0 μW cm⁻¹ K⁻²、ZT从1.02降至0.62。真正的生长启示是寻找窄窗口并做锭轴向映射，而不是把“加Se”当成单调优化。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 3｜Fe(Te,Se)：零偏峰的排他性判据</b><span>根据 Communications Physics SI 与同行评议记录整理，并非论文原图</span></figcaption>
    <div className="device-stack"><div className="layers"><i>零偏峰</i><i>空间色散/劈裂</i><i>自旋不对称</i><i>YSR模型复现</i></div><div className="polarization"><span>直接观察<b>台阶、线缺陷、埋藏点缺陷</b></span><i>1.1 K 自旋极化 STM/STS</i><span>结论边界<b>缺陷态不等于MZM</b></span><small>零偏自旋极化本身也不是Majorana充分条件；P2仍无法完全归类</small></div></div>
    <p className="figure-analysis"><b>图解分析：</b>证据链的价值在于逐层排除：峰位靠近零能只是起点，缺陷相关空间演化与自旋结构才把台阶/线缺陷归入YSR。论文没有否认该材料的涡旋MZM候选，而是收紧“什么样的零峰不能算证据”。</p>
  </figure>
  <p className="version-note"><b>图片许可说明：</b>以上三图均由本站依据可访问的一手材料自主绘制，没有复制论文插图；数值与条件已在对应条目中标出来源层级。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;const si=report.papers.filter(p=>p.access.includes('补充材料精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-08">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
  <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 014</p><h1>每日文献简报</h1><p>2026 年 9 月 8 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇主文全文</span><span>{si} 篇补充材料精读</span></div></div></div>
  <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
   <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与访问概况</h2><p>{report.hotspot}</p><ol><li><b>先查当天，再回溯三日。</b>9月8日当天有1篇高相关正式期刊论文；为了覆盖全部关联主题，按规则回溯9月6–8日，纳入12篇未在历史简报出现的正式论文。</li><li><b>正式期刊为主。</b>本期13篇均为 Nature Portfolio、Advanced Functional Materials、Nano Letters 或 Chemistry of Materials 正式版本；arXiv页面仍停留在9月7日批次，去重后无新增。</li><li><b>阅读层级分开。</b>2篇取得完整主文和SI，5篇取得完整SI/审稿记录但主文受限，6篇仅有摘要和元数据。缺失的生长、结构和测量参数均明确保留为“未报告/未取得”。</li></ol></section>
   <EvidenceFigures/>
   {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.includes('全文精读')?'全文精读':p.access.includes('补充材料精读')?'SI精读 / 主文受限':'摘要 / 元数据'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div></div><p className="links"><a href={p.doi}>DOI / 论文条目 ↗</a><a href={p.fullText}>正文 / 公开入口 ↗</a></p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
   <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>阅读状态</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.access}</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
   <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索词：</b>{report.searchTerms.join('；')}。</p><p><b>逐刊结果：</b>Nature Portfolio 7篇、Advanced Functional Materials 2篇、Nano Letters 2篇、Chemistry of Materials 2篇；APS/PR、Science、Advanced Materials、ACS Nano、JACS、npj Quantum Materials、Crystal Growth &amp; Design、Journal of Crystal Growth在该窗口未发现新的高相关且未收录论文。</p><p><b>arXiv：</b>官方new页截至检索时仍显示Monday, 7 September 2026；该批次已在9月7日简报处理，按arXiv ID和题目去重后0篇新增。</p><p><b>全文访问：</b>Nature Materials BaTiO₃和Nature Electronics选择器取得完整主文；5篇Nature文章取得公开SI和审稿记录但静态主文只返回摘要。Wiley/ACS入口返回403，当前运行环境未建立浙江大学机构访问会话；因此6篇严格按摘要/元数据标注。</p></section>
  </article></div>
 </main>}
