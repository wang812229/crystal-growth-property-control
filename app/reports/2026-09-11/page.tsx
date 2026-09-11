/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-11.json';

export const metadata: Metadata={title:'2026-09-11 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
 <figure className="data-figure"><figcaption><b>原创图解 1｜NbSe₂：CVT温区选择多型，冷却路径锁定3R</b><span>根据PRL对应公开稿Methods与物性结果重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-11/nbse2-growth-window.svg" alt="2H和3R NbSe2的CVT温区、冷却路径和超导证据对比"/>
  <p className="figure-analysis"><b>图解分析：</b>2H与3R的源区/生长区分别为825/795 °C和1050/1020 °C，均保持250 h；真正区分3R身份的是高温窗口、Nb略过量与冰水淬火的组合。比热T<sub>c</sub>=5.95 K和接近100%的体积分数排除少量丝状相，而T<sub>c</sub>随RRR近线性、随厚度不单调，说明下一轮优化应先压低无序。</p>
 </figure>
 <figure className="data-figure dark-data"><figcaption><b>原创图解 2｜(Fe,Ni)₅₊δGeTe₂：478 K铁磁性来自纳米析出而非均匀掺杂</b><span>根据arXiv:2609.11862的XRD、XMCD与DFT定量信息重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-11/feniget-precipitate.svg" alt="Fe富集纳米析出相、XRD晶格参数、XMCD相关长度和位点磁矩证据链"/>
  <p className="figure-analysis"><b>图解分析：</b>Fe富集相c≈9.96 Å、Ni富集相c≈9.76 Å，晶格差超过2%；109 K的Fe-L₃ XMCD给约50 nm条纹相关长度，Ni-L₃没有对应磁纹理。DFT再把局域矩分配到不同Fe位点。三层证据共同把“Ni均匀提高T<sub>c</sub>”改写成“Ni促成应变稳定Fe₆GeTe₂析出相”。</p>
 </figure>
 <figure className="data-figure"><figcaption><b>原创图解 3｜TlYbS₂：从TlCl Flux到弱序—QSL边界</b><span>根据arXiv:2609.11881的生长与低温相图重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-11/tlybs2-field-map.svg" alt="TlYbS2助熔剂生长、530毫开异常、三分之一平台和完全极化场图解"/>
  <p className="figure-analysis"><b>图解分析：</b>TlCl助熔剂在最高690 °C生长约2×2 mm²片晶；零场约530 mK弱异常和C<sub>m</sub>∝T<sup>1.8</sup>把基态放在弱有序/QSL边界。面内5–8 T的1/3平台与约17 T完全极化约束交换模型，但没有中子或μSR仍不能给零场基态最终命名。</p>
 </figure>
 <p className="version-note"><b>图片许可与来源：</b>三张SVG均由本站依据公开全文中的Methods和定量结果原创重绘，未复制论文图形表达；源论文链接见条目。图解只解释证据关系，不替代原始数据。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-11">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
 <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 017</p><h1>每日文献简报</h1><p>2026 年 9 月 11 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文精读</span><span>5 个主板块</span></div></div></div>
 <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
  <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与阅读边界</h2><p>{report.hotspot}</p><ol><li><b>当天优先，必要时回溯三日。</b>9月11日当天仅检出1篇高相关Nano Letters条目，因此实际窗口扩展为9月9—11日。</li><li><b>10篇按证据等级全部收录。</b>5篇正式期刊论文中2篇追溯到公开全文；5篇新arXiv均读取正文与补充材料。</li><li><b>访问失败不补写。</b>CsV₃Sb₅、CsPbBr₃纳米晶与2.0 eV钙钛矿按摘要/元数据级标注；全文上线后再按同一DOI更新。</li><li><b>图解聚焦因果。</b>三张原创SVG解释NbSe₂多型窗口、Fe₆GeTe₂纳米析出和TlYbS₂低温相图。</li><li><b>去重完成。</b>按DOI、arXiv ID和标准化题目对8月28日至9月10日简报比对，未发现重复入选。</li></ol></section>
  <EvidenceFigures/>
  {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.startsWith('全文精读')?'全文精读':p.access.startsWith('仅基于APS')?'摘要级':p.access.startsWith('仅基于PubMed')?'摘要级':'仅元数据'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div><div className="meta-item institution-item"><span>主要单位</span><b>{p.institutions}</b></div></div><p className="links"><a href={p.doi}>DOI / 出版社 ↗</a>{p.fullText&&<a href={p.fullText}>公开全文 ↗</a>}</p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p><div className="paper-conclusion"><span>CONCLUSION</span><h3>这篇论文讲了什么故事</h3><p>{p.conclusion}</p></div>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
  <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>主要结论</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.conclusion.slice(0,72)}…</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
  <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索记录：</b>{report.searchTerms.join('；')}。</p><p><b>逐刊结果：</b>APS 447条在线日期记录/129关键词候选；Nature 897/48；Science 3/1；Wiley Advanced 1580/98；ACS 677/68；Crystal Growth &amp; Design 0/0；Journal of Crystal Growth 0/0；arXiv三日窗口194条/138关键词候选。数字是初筛命中，不等于最终相关论文数。</p><p><b>全文状态：</b>PRL 3R-NbSe₂、AFM USe₃和5篇新arXiv取得公开PDF并精读，共7篇；CsV₃Sb₅仅出版社摘要，CsPbBr₃纳米晶核对正式元数据与Zenodo数据仓库，Nature Energy钙钛矿仅正式元数据。受限正文没有被经验补写。</p></section>
 </article></div>
 </main>}

