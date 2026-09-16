/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */
import type {Metadata} from 'next';
import report from '../../../content/reports/2026-09-16.json';

export const metadata:Metadata={title:'2026-09-16 简报｜每日文献简报',description:report.headline};

const figures:Record<string,{src:string;title:string;caption:string}>= {
  'Visualizing Berry curvature in a Floquet-Chern insulator':{src:'/reports/2026-09-16/bi2se3-growth.svg',title:'原创图解 1｜Bi₂Se₃ 生长温程',caption:'据 arXiv:2609.17500 Methods 的实际配比、真空和温程重绘。图只支持“生长程序可复现”，不能证明三组配比具有相同晶体质量；原文未给出产率、尺寸和完整结构质量统计。'},
  'La substitution studies on the heavy-fermion superconductor CeRh₂As₂':{src:'/reports/2026-09-16/cerh2as2-map.svg',title:'原创图解 2｜Kondo尺度与低温相的不同脆弱性',caption:'据论文关键数值绘制的双尺度示意。相干峰只从45 K缓慢降至40 K，而Tc和T₀在中等La取代即低于约0.1 K；这支持无序效应强于等效负压。两组曲线不共用线性纵轴。'},
  'Electrical Probing of Sub-Néel Spin Dynamics in Two-Dimensional Antiferromagnets Using Graphene Heterostructures':{src:'/reports/2026-09-16/feps3-signals.svg',title:'原创图解 3｜graphene电阻读出的四个温标',caption:'据 arXiv:2609.16725 图2与正文数值重绘。F2和F3的物理归因仍需同步磁结构或谱学验证；图中圆点不是原始电阻曲线。'}
};

export default function Report(){
 const full=report.papers.filter(p=>p.access.includes('全文精读')).length;
 const counts=report.papers.reduce<Record<string,number>>((m,p)=>(m[p.category]=(m[p.category]||0)+1,m),{});
 return <main className="report-page">
 <header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav aria-label="主导航"><a className="active" href="/reports/2026-09-16">今日简报</a><a href="/materials">材料时间线</a><a href="/search">智能检索</a><a href="/weekly">本周趋势</a><a href="/workspace">我的研究</a><a href="/archive">归档</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
 <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 022</p><h1>每日文献简报</h1><p>2026 年 9 月 16 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文精读</span><span>正式期刊 3 篇</span></div></div></div>
 <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={'#paper-'+(i+1)}>{String(i+1).padStart(2,'0')} · {p.material.slice(0,14)}</a>)}<a href="#compare">板块统计</a><a href="#search-log">检索日志</a></aside><article className="report-content">
 <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与访问边界</h2><p>{report.hotspot}</p><ol><li><b>正式期刊不缺席：</b>Nano Letters、Inorganic Chemistry和Chemistry of Materials各纳入1篇。</li><li><b>公开全文为主：</b>10篇arXiv已读取PDF正文；3篇ACS只读正式摘要，所有Methods缺口均显式标注。</li><li><b>实验优先：</b>Bi₂Se₃、CeRh₂As₂和FePS₃/graphene给出最完整的样品—测量—证据链。</li><li><b>图解只重绘可核数字：</b>温程、关键温标和尺度关系均注明“不复制原图”和证据边界。</li></ol></section>
 {report.papers.map((p,i)=>{const fig=figures[p.title];return <section className="paper-detail" id={'paper-'+(i+1)} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.includes('全文精读')?'全文精读':'摘要级'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>上线日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div><div className="meta-item institution-item"><span>主要单位</span><b>{p.institutions}</b></div></div><p className="links"><a href={p.doi}>DOI / 原文 ↗</a></p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p><div className="paper-conclusion"><span>CONCLUSION</span><h3>这篇论文讲了什么故事</h3><p>{p.conclusion}</p></div>{fig&&<figure className="data-figure"><figcaption><b>{fig.title}</b><span>根据公开Methods与正文数值重绘，并非论文原图</span></figcaption><img className="report-figure-image" src={fig.src} alt={fig.title}/><p className="figure-analysis"><b>图解分析：</b>{fig.caption}</p></figure>}{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3>{s.text.split('\n\n').map((part,j)=><p key={j}>{part}</p>)}</div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>本篇专属阅读路径</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>})}
 <section className="comparison" id="compare"><p className="eyebrow">TODAY AT A GLANCE</p><h2>板块与全文状态</h2><div className="table-wrap"><table><thead><tr><th>研究板块</th><th>篇数</th></tr></thead><tbody>{Object.entries(counts).map(([k,v])=><tr key={k}><td>{k}</td><td>{v}</td></tr>)}</tbody></table></div><p>正式期刊3篇；arXiv独立新收录10篇；全文精读10篇；摘要/元数据3篇。</p></section>
 <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>逐轨检索、访问与去重记录</h2><p><b>时间窗：</b>{report.searchWindow}</p>{report.searchTerms.map(x=><p key={x}>{x}</p>)}</section>
 </article></div></main>;
}
