/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-12.json';

export const metadata: Metadata={title:'2026-09-12 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
 <figure className="data-figure"><figcaption><b>原创图解 1｜Si₂Te₂：从CVT衬底到拓扑边缘态</b><span>根据Nature Communications开放全文Methods与图3–5数值原创重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-12/si2te2-evidence.svg" alt="Si2Te2的HfTe2 CVT、MBE生长、体带隙和边缘态证据链"/>
  <p className="figure-analysis"><b>图解分析：</b>HfTe₂母晶先以900→800 °C、I₂ 5 mg mL⁻¹、两周CVT获得；Si₂Te₂再以200 °C共蒸发、Te:Si&gt;20:1、385 °C退火5 min形成。STS的约300 meV体带隙与1.5–2.0 nm边缘局域态相互支持，但图解也明确：局域谱加计算尚不能替代量子化边缘输运。</p>
 </figure>
 <figure className="data-figure dark-data"><figcaption><b>原创图解 2｜6层CrI₃：机械量热定位三临界点</b><span>根据PRL对应公开稿图1–4定量信息原创重绘，并非论文原图</span></figcaption>
  <img className="report-figure-image" src="/reports/2026-09-12/cri3-phase-map.svg" alt="六层CrI3三临界点、临界终点和两级自旋翻转相图"/>
  <p className="figure-analysis"><b>图解分析：</b>零场λ异常给T<sub>N</sub>=55.9 K；连续边界与内部层一级翻转边界在47.5 K、1.3 T相遇，表面层边界在43 K、0.70 T止于临界终点。ρ≈0.43来自幂律拟合，不是直接观察；热容由频率导数反演，背景扣除仍需多器件检验。</p>
 </figure>
 <p className="version-note"><b>图片许可与来源：</b>两张SVG均为本站依据合法公开全文数值原创重绘，没有复制论文图形表达；用于解释证据层级，不替代原始数据。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-12">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
 <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 018</p><h1>每日文献简报</h1><p>2026 年 9 月 12 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文精读</span><span>3 个主板块</span></div></div></div>
 <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
  <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与阅读边界</h2><p>{report.hotspot}</p><ol><li><b>按三日窗口回溯。</b>9月12日为周六，当天无高相关新上线；实际检索窗口为9月10—12日。</li><li><b>正式期刊优先。</b>9篇均为正式期刊或Accepted/ASAP论文，其中4篇找到合法公开全文并完成正文精读。</li><li><b>arXiv不凑数。</b>近三日64条关键词候选与9月11日已收录内容或本期正式版重合，独立新增为0。</li><li><b>机构访问边界。</b>本次没有可复用的已登录aTrust/CARSI正文会话；订阅页只按摘要/元数据整理，所有未知参数均明确保留。</li><li><b>窄窗口问题已修复。</b>报告页在1280 px以下提前折叠为单列，正文和图解不再被压成半宽并留下右侧空白。</li></ol></section>
  <EvidenceFigures/>
  {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.includes('全文精读')?'全文精读':'摘要/元数据'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div><div className="meta-item institution-item"><span>主要单位</span><b>{p.institutions}</b></div></div><p className="links"><a href={p.doi}>DOI / 出版社 ↗</a>{p.fullText&&<a href={p.fullText}>公开全文 ↗</a>}</p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p><div className="paper-conclusion"><span>CONCLUSION</span><h3>这篇论文讲了什么故事</h3><p>{p.conclusion}</p></div>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
  <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>主要结论</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.conclusion.slice(0,72)}…</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
  <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗：</b>{report.searchWindow}</p><p><b>检索记录：</b>{report.searchTerms.join('；')}。</p><p><b>逐刊筛选：</b>APS最终纳入6篇；Nature Portfolio纳入1篇；ACS/Crystal Growth &amp; Design纳入2篇；Science、Wiley Advanced、Journal of Crystal Growth在时间窗内无新的唯一高相关收录。大量候选因生命科学同词、纯方法但无材料物性、已收录重复或题目关联不足被排除。</p><p><b>全文状态：</b>Si₂Te₂、CrI₃、MgB₂和PdTe₂取得开放PDF/作者稿并精读；其余5篇为摘要或元数据级。机构订阅正文未公开上传，也未被经验补写。</p></section>
 </article></div></main>}
