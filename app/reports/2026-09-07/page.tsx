/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-07.json';

export const metadata: Metadata = {title:'2026-09-07 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
  <figure className="data-figure dark-data"><figcaption><b>原创图解 1｜CFM：线性拟合仍可能系统出错</b><span>根据 arXiv:2609.04291v1 公开方法与图3–7重绘，并非论文原图</span></figcaption>
    <div className="growth-map"><article><i>时间约束</i><strong>τ ≥ 3 ps</strong><b>0.5 ps 采样间隔</b><p>慢模要有足够独立样本；最低 k 模误差过大也必须剔除</p></article><article><i>空间约束</i><strong>0.005 &lt; k² &lt; 0.03 Å⁻²</strong><b>LOP + 6 Å 平滑</b><p>高 k 混入原子尺度噪声，R²&gt;0.97 仍可能系统漂移</p></article><article><i>厚度验证</i><strong>24 Å → 86 Å</strong><b>主晶向差 0.6–1.1%</b><p>二维 ky=0 表示收敛；完全横向平均的 1D 表示不可靠</p></article></div>
    <p className="figure-analysis"><b>图解分析：</b>最重要的不是 Al 的单个 87.0 mJ m⁻² 数值，而是把采样、界面定义和模型厚度串成三重验收。任一项未通过，即使谱线笔直、R²很高，也不能把结果直接送入相场模型。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 2｜镍酸盐：相同化学式，不同层序给出不同低能谱</b><span>根据 arXiv:2609.04532v1 公开正文与 RIXS 图注重绘，并非论文原图</span></figcaption>
    <div className="pressure-chart"><div className="phase-axis"><span>样品</span><span>层架构</span><span>磁激发</span><span>判断</span></div><div className="phase-bar"><i>LNO-2222</i><i>均匀双层</i><i>强层间二聚体</i></div><div className="plasma-row"><span>LNO-1313</span><b>单层/三层交替</b><em>≈60 meV</em><b>谱更像三层</b></div><div className="temp-row"><span>La₄Ni₃O₁₀</span><b>均匀三层</b><em>≈60 meV</em><b>与1313相近</b></div></div>
    <p className="figure-analysis"><b>图解分析：</b>Ni L₃/O K 边在同一几何中比较电子、磁和声子自由度，使“1313 更像三层相”不只依靠一条谱线。限制是样品有近等比例正交孪晶，测量在常压、22–80 K完成，并未直接观测高压超导态。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 3｜Sm 单原子：局域晶场、变价与 Kondo 的三个能标</b><span>根据 arXiv:2609.05394v1 公开 STS 数据重绘，并非论文原图</span></figcaption>
    <div className="device-stack"><div className="layers"><i>晶场激发：35 meV</i><i>第二激发：54 meV</i><i>g=4.8±0.6</i><i>TK=18.6±1.8 K</i></div><div className="polarization"><span>邻居与尖端电场<b>控制 Sm⁺/Sm²⁺近简并态</b></span><i>直接观察：台阶、零偏峰、场劈裂、温度展宽</i><span>模型推断<b>晶场参数、价态与 TK</b></span><small>TK 仅由两个温度点估算，是最需补强的环节</small></div></div>
    <p className="figure-analysis"><b>图解分析：</b>35/54 meV 台阶和随场劈裂的零偏峰是最强原始证据；Sm⁺基态、Sm²⁺近邻态和 TK 依赖共隧穿/Fano 模型。它是单原子 Kondo，不应与晶格重费米子直接等同。</p>
  </figure>
  <p className="version-note"><b>图片许可说明：</b>以上均为本站依据公开 arXiv 正文数值自主绘制，没有复制论文插图。数值以链接中的 v1 正文为准。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-07">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
  <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 013</p><h1>每日文献简报</h1><p>2026 年 9 月 7 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文/SI 精读</span><span>3 个主板块</span></div></div></div>
  <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
   <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与访问概况</h2><p>{report.hotspot}</p><ol><li><b>当天优先。</b>9 月 7 日正式期刊官网截至检索时没有新的强相关记录；arXiv 周一 new listing 已更新，因此不回溯旧论文。</li><li><b>宽筛后不机械全收。</b>cond-mat 共151条，关键词宽筛89条；剔除交叉列表、替换稿和不属于本站主题的泛关键词命中，最终纳入13篇。</li><li><b>全文分级。</b>8篇读取公开 HTML 正文、方法和图注；5篇暂未生成 HTML，严格按摘要/元数据分析。</li></ol></section>
   <EvidenceFigures/>
   {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.includes('全文精读')?'全文精读':'摘要 / 元数据'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div></div><p className="links"><a href={p.doi}>论文条目 ↗</a><a href={p.fullText}>公开全文 / PDF ↗</a></p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
   <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>全文状态</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.access}</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
   <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索词：</b>{report.searchTerms.join('；')}。</p><p><b>逐刊结果：</b>APS/PR、Nature Portfolio、Science/AAAS、Advanced Materials/AFM、Nano Letters/ACS Nano/JACS/Chemistry of Materials、Crystal Growth &amp; Design、Journal of Crystal Growth 均已检查；北京时间9月7日截至检索时均为零条新的强相关当日上线记录。9月4–6日记录已在往期收录，不重复。</p><p><b>arXiv：</b>官方 cond-mat new 页151条；宽关键词命中89条，纳入13条：晶体生长2，高温/非常规超导3，重费米子/Kondo2，磁性/拓扑5，二维器件1。</p><p><b>机构访问：</b>今日入选均为公开 arXiv，不需要机构订阅；正式期刊轨道零新增，因此未触发 aTrust 订阅 PDF 下载。</p></section>
  </article></div>
 </main>}
