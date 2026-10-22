/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type {Metadata} from 'next';
import report from '../../../content/reports/2026-10-22-major-journals.json';

export const metadata:Metadata={title:'两周大期刊补充专刊｜2026.10.09—22｜每日文献简报',description:report.headline};
export default function MajorJournalsReport(){
 const papers=report.papers,full=papers.filter(p=>p.access.startsWith('全文精读')).length;
 return <main className="report-page">
  <header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav aria-label="主导航"><a href="/search">智能检索</a><a href="/archive">归档</a><a href="/audits/2026-10-09_22/">来源审计</a></nav></header>
  <div className="report-hero"><div><p className="eyebrow">MAJOR JOURNALS · SUPPLEMENT 01</p><h1>两周大期刊补充专刊</h1><p>2026.10.09—10.22 · 跨期补录，不是当天57篇新论文</p></div><div className="report-summary"><b>阅读与证据状态</b><p>{report.headline}</p><div><span>{papers.length} 条强相关线索</span><span>{full} 篇主文精读</span><span>{papers.length-full} 篇仍待补读</span></div></div></div>
  <div className="report-layout"><aside className="report-toc"><p>本专刊目录</p><a href="/search?tags=两周大期刊补刊">在智能检索中筛选本刊 →</a>{papers.map((p,i)=><a key={p.auditId} href={'#paper-'+(i+1)}>{String(i+1).padStart(2,'0')} · {p.material.slice(0,24)} · {p.access.startsWith('全文精读')?'已精读':'待补读'}</a>)}<a href="#reading-audit">访问与补读记录</a></aside>
  <article className="report-content"><section className="report-lede"><p className="eyebrow">SCOPE &amp; READING STATUS</p><h2>本期要点与访问概况</h2><p>{report.hotspot}</p><p>{report.searchWindow}</p><p>本刊是两周正式期刊补查的阅读专页，原始3,947条目录不等于相关论文数。仅选入57条强相关补读线索；已接受、正式发表与元数据日期待核分别标明。公开作者稿不自动等于正式版及SI完全一致。</p><p><a href="/search?tags=两周大期刊补刊">筛选本刊全部文献</a> · <a href="/search?tags=两周大期刊补刊&amp;access=full">只看已精读</a> · <a href={report.sourceAuditUrl}>逐刊命中、排除与访问异常</a></p></section>
  <section className="report-lede" id="figures"><h2>原创定量图解</h2>{report.figures.map(f=><figure key={f.src}><h3>{f.title}</h3><img src={f.src} alt={f.title} style={{width:'100%',height:'auto'}}/><figcaption>{f.caption} <a href={f.source}>原文来源 ↗</a></figcaption></figure>)}</section>
  {papers.map((p,i)=><section className="paper-detail" data-reading-scope={p.access} id={'paper-'+(i+1)} key={p.auditId}>
   <div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.startsWith('全文精读')?'正文精读':'正文待补读'} · {p.publicationStatus==='accepted'?'已接受稿':p.publicationStatus==='published'?'正式发表':'日期待核'}</b></div>
   <h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
   <div className="meta-grid"><div className="meta-item"><span>期刊</span><b>{p.journal}</b></div><div className="meta-item"><span>原文事件日期</span><b>{p.date}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div><div className="meta-item institution-item"><span>主要单位</span><b>{p.institutions}</b></div></div>
   <p className="links"><a href={p.doi} target="_blank" rel="noopener noreferrer">DOI / 出版社 ↗</a> · <a href={p.fullText} target="_blank" rel="noopener noreferrer">实际阅读来源 / 公开稿 ↗</a></p><p className="version-note"><b>阅读范围：</b>{p.access}<br/>{p.versionNote}</p>
   <details><summary>逐项阅读记录与访问边界</summary><ul>{p.readingRecord.readParts.length?p.readingRecord.readParts.map(x=><li key={x}>{x}</li>):<li>正文未完成，不据摘要填补方法和数据。</li>}</ul><p>{p.readingRecord.institutionAttempt}</p></details>
   <div className="paper-conclusion"><span>CONCLUSION</span><h3>这篇论文讲了什么故事</h3><p>{p.conclusion}</p></div>
   {p.sections.map((s,j)=><div id={`paper-${i+1}-evidence-${j+1}`} key={s.title}><h3>{s.title}</h3>{s.text.split('\n\n').map((part,k)=><p key={k}>{part}</p>)}</div>)}
   <div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>核对与可略读：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div>
  </section>)}
  <section className="search-note" id="reading-audit"><h2>访问、统计与后续补读清单</h2><p>实际正文可访问候选 {report.readingAudit.candidateAccessibleFullTexts} 篇；已完成主文精读 {full} 篇；仅摘要 {report.readingAudit.abstractOnly} 篇；题名/元数据级 {report.readingAudit.titleOnly} 篇。候选可访问不等于已经精读，独立SI以每篇实际记录为准。</p><p>用户确认aTrust已登录；代表出版社请求仍遇摘要页或403，浏览器正文核验连接未完成，不宣称已取得机构全文授权。仅使用合法公开稿继续补读；受限原文留在非公开研究目录，不上传本站。</p><p>{Object.entries(report.categoryCounts).map(([k,v])=>`${k} ${v}篇`).join('；')}。</p><ul>{papers.filter(p=>!p.access.startsWith('全文精读')).map((p)=><li key={p.auditId}><b>{p.material}</b>：{p.access}。<a href={'#paper-'+(papers.indexOf(p)+1)}>查看此条及访问记录</a></li>)}</ul><p><a href={report.sourceAuditUrl}>完整来源审计与原始候选筛选</a> · <a href="/search?tags=两周大期刊补刊">返回智能检索</a></p></section>
  </article></div>
 </main>;
}
