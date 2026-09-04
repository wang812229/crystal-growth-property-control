/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-04.json';

export const metadata: Metadata = {title:'2026-09-04 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
  <figure className="data-figure"><figcaption><b>原创图解 1｜EuIn₂Sb₂：外延把“预测结构”改写成“实测结构”</b><span>根据 arXiv:2609.02114 Methods 与 Fig.2–4 数值重绘，并非论文原图</span></figcaption>
    <div className="growth-map"><article><i>MBE / Al₂O₃(0001)</i><strong>550 ℃</strong><b>Eu:In:Sb = 1:2.5:3.5</b><p>约 70 nm；12 Å min⁻¹；同温退火约 30 h</p></article><article><i>结构筛选</i><strong>ABC / R3m</strong><b>主相：In-on-In 三层堆垛</b><p>局部 AB / P6₃/mmc 双层区是潜在并行通道</p></article><article><i>物性闭环</i><strong>T<sub>N</sub>=10.5 K</strong><b>电阻与磁化共同异常</b><p>3.7 K 仅有电阻异常，不能先验解释为拓扑边界态</p></article></div>
    <p className="figure-analysis"><b>怎样读：</b>这条链最可靠的部分是“束流与退火→新堆垛→反铁磁转变”；“轴子绝缘体”仍需表面能带或量子输运。复现实验首先要控制 ABC/AB 面积分数，而不是只追求更低电阻。</p>
  </figure>
  <figure className="data-figure dark-data"><figcaption><b>原创图解 2｜CVD 魔角石墨烯：平带证据与器件瓶颈</b><span>根据 arXiv:2609.02403 的 STM、nano-ARPES 与空间拟合重绘，并非论文原图</span></figcaption>
    <div className="pressure-chart"><div className="phase-axis"><span>低压 CVD</span><span>grow-and-stack</span><span>STM</span><span>nano-ARPES</span></div><div className="phase-bar"><i>同一 Cu 晶粒、同取向</i><i>约 30 nm hBN</i><i>12.9 nm → 1.11°</i></div><div className="plasma-row"><span>近魔角域</span><b>84±41 μm²</b><em>松弛长度</em><b>4.1±1.1 μm</b></div><div className="temp-row"><span>直接观察</span><b>ω 形低能平带</b><em>尚未观察</em><b>低温关联绝缘/超导</b></div></div>
    <p className="figure-analysis"><b>怎样读：</b>STM 给几何扭角、ARPES 给能带，两者闭合；但 hBN 皱褶附近会向 Bernal 堆垛松弛。下一步的材料问题是降低转移应力并把栅极/接触集成到同一近魔角域。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 3｜Bi₂WO₆：把随机氧空位变成可逆“缺陷晶格”</b><span>根据 arXiv:2609.02629 的 I–V、XRD/RSM、iDPC-STEM 与循环结果重绘，并非论文原图</span></figcaption>
    <div className="device-stack"><div className="layers"><i>PLD 外延 Bi₂WO₆：透明、5 V &lt; 1 pA</i><i>N₂ 等离子体：W–O 层空位长程有序</i><i>黑色导电态：5 V 到 mA，提升 &gt; 9 数量级</i><i>O₂ 等离子体：结构与高电阻态恢复，可循环</i></div><div className="polarization"><span>骨架<b>XRD/RSM 不变</b></span><i>局域结构由三晶带轴 iDPC-STEM 支撑</i><span>低温输运<b>2D Mott VRH</b></span><small>仍需深度定量排除仅表面导电</small></div></div>
    <p className="figure-analysis"><b>怎样读：</b>宏观九数量级开关、原子分辨空位序和氧/氮可逆循环互相支撑。最关键的后续控制变量是 PLD 初始氧压、等离子体剂量和膜厚，三者可能共同决定空位有序阈值。</p>
  </figure>
  <p className="version-note"><b>图片使用说明：</b>以上均为本站依据论文公开信息制作的原创信息图，不复制论文版式或受限图像。原始数据、坐标和显微图请点击各论文 arXiv 全文核对。</p>
</section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-04">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
<div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 010</p><h1>每日文献简报</h1><p>2026 年 9 月 4 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文精读</span><span>5 个研究板块</span></div></div></div>
<div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
<section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与来源说明</h2><p>{report.hotspot}</p><ol><li><b>检索以正式期刊为先。</b>APS/PR、Nature/Science、Wiley、ACS、Crystal Growth &amp; Design 与 Journal of Crystal Growth 均已核查；当天没有用较早或低相关稿件凑数。</li><li><b>今天的有效新增来自北京时间当天 arXiv 批次。</b>所有条目均直接读取官方 PDF，而不是仅根据二次摘要。</li><li><b>13 篇逐条区分直接观察、模型拟合与作者推断。</b>论文未给出的生长参数明确保留为“正文未报告”。</li></ol></section>
<EvidenceFigures/>
{report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>全文精读 · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>制备 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div></div><p className="links"><a href={p.doi}>arXiv 条目 ↗</a><a href={p.fullText}>公开全文 PDF ↗</a></p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>针对这篇论文的阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
<section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>制备 / 方法</th><th>全文状态</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.access}</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
<section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索范围：</b>{report.searchTerms.join('；')}。</p><p><b>访问结果：</b>13 篇均下载并阅读 arXiv PDF；正式期刊当天未发现符合主题且不重复的新增。没有把只读到摘要的论文标为全文精读。</p></section>
</article></div></main>}
