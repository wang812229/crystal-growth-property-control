/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-10.json';

export const metadata: Metadata={title:'2026-09-10 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
 <figure className="data-figure"><figcaption><b>原创图解 1｜Fe₃GeTe₂：从CVT配方到拓扑纹理写入</b><span>根据正式论文对应公开稿Methods与场冷结果重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-10/fgt-cvt-topology.svg" alt="Fe3GeTe2的TeCl4-CVT温区、薄片封装和不同场冷纹理示意"/>
  <p className="figure-analysis"><b>图解分析：</b>左侧把可复现的生长身份压缩为配比、运输剂、真空、温区和时间；右侧强调迷宫、混合和孤立skyrmion不是三块不同样品，而是在同一1.9 μm视场中由0、−8、−16 mT场冷写入。130 K与194 K的差别说明温度并非只改变磁矩大小，还决定纹理能否跨过能垒互换。</p>
 </figure>
 <figure className="data-figure dark-data"><figcaption><b>原创图解 2｜NbN：厚度压低超导，但Δ₀阶梯暴露BCS遗漏</b><span>根据表I与TDS/FDS拟合重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-10/nbn-dynes-map.svg" alt="NbN厚度、临界温度、能隙和Dynes吸收的原创图解"/>
  <p className="figure-analysis"><b>图解分析：</b>4.5→20 nm时T<sub>c</sub>、能隙和超流密度系统恢复，证明厚度/无序是有效控制轴；真正改变机制判断的是20 nm膜在约Δ₀处出现额外吸收。时域与频域两套THz测量均由Γ≈0.036Δ₀解释，使“Dynes形式成立”很强，但Γ的微观来源仍未唯一。</p>
 </figure>
 <figure className="data-figure"><figcaption><b>原创图解 3｜镍酸盐：换一条芯能级，才能比较真正的Ni–O杂化</b><span>根据HAXPES与DFT+DMFT判断链重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-10/nickelate-spectroscopy.svg" alt="Ni 2p受La 3d污染而Ni 1s更干净的证据链图"/>
  <p className="figure-analysis"><b>图解分析：</b>La 3d主峰和能量损失卫星跨入Ni 2p区，所以简单相减会把La化学环境差异写进Ni谱。Ni 1s牺牲部分线宽却避开重叠；La₃Ni₂O₇的“主峰更宽+卫星更强”与降低杂化的DMFT趋势一致。应变解释仍需同成分、多衬底且等氧含量的样品矩阵验证。</p>
 </figure>
 <p className="version-note"><b>图片许可与来源：</b>三张SVG均为本站依据公开全文中的Methods、表格和定量结果原创重绘，未复制论文图形表达；源论文链接见各条目。图解用于解释证据关系，不替代原始数据。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-10">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
 <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 016</p><h1>每日文献简报</h1><p>2026 年 9 月 10 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文精读</span><span>5 个主板块</span></div></div></div>
 <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
  <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与阅读边界</h2><p>{report.hotspot}</p><ol><li><b>当天无入选，回溯三日。</b>本期实际窗口为9月8—10日，入选9篇正式期刊在线论文；没有用更早论文填数。</li><li><b>正式期刊优先。</b>9篇全部有正式DOI，覆盖PRL/PRB/PR Materials、Advanced Materials、ACS AMI与Crystal Growth &amp; Design；5篇另找到对应公开作者稿并阅读全文。</li><li><b>访问等级逐篇标注。</b>5篇全文精读、3篇摘要级、1篇仅元数据。机构订阅正文没有被猜测补写，金刚石条目只保留获取全文后的核查清单。</li><li><b>图片解释进入正文。</b>三张原创SVG分别解释FGT的CVT—场冷路径、NbN的Dynes证据和镍酸盐的谱学污染；它们不是论文原图。</li><li><b>arXiv检索如实记录。</b>三日窗口API初查0条，扩展查询遇到429；本期没有用旧预印本充当新投稿。</li></ol></section>
  <EvidenceFigures/>
  {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.startsWith('全文精读')?'全文精读':p.access.startsWith('仅基于APS')?'摘要级':p.access.startsWith('仅基于PubMed')?'摘要级':'仅元数据'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div></div><p className="links"><a href={p.doi}>DOI / 出版社 ↗</a>{p.fullText&&<a href={p.fullText}>公开全文 ↗</a>}</p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p><div className="paper-conclusion"><span>CONCLUSION</span><h3>这篇论文讲了什么故事</h3><p>{p.conclusion}</p></div>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
  <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>主要结论</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.conclusion.slice(0,72)}…</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
  <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索记录：</b>{report.searchTerms.join('；')}。</p><p><b>逐刊结果：</b>APS 664条在线日期记录/181关键词候选；Nature 890/46；Science 1/0；Wiley 1347/92；ACS 656/78；Crystal Growth &amp; Design 10/10；Journal of Crystal Growth 0/0。数字是Crossref日期命中/关键词候选，不等于最终相关论文数；人工按样品、生长和物性证据筛选。</p><p><b>全文状态：</b>FGT、NbN、镍酸盐、铁电skyrmion和声-磁耦合共5篇取得公开PDF并精读；Yb磁体、Cs₃Cu₂I₅和BiSbSe₃只基于摘要；HPHT金刚石仅元数据。ZJU机构订阅会话未在自动化进程中形成可复用认证，因此没有把受限正文写成“已读”。</p></section>
 </article></div>
 </main>}
