/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-05.json';

export const metadata: Metadata = {title:'2026-09-05 简报｜每日文献简报',description:report.headline};
const ids=report.papers.map((_,i)=>`paper-${i+1}`);

function EvidenceFigures(){return <section id="figures">
  <figure className="data-figure dark-data"><figcaption><b>原创图解 1｜FePS₃：CVT 生长到三波混频的完整证据链</b><span>根据 Nature Communications 正文、Methods 与图1–4数值重绘，并非论文原图</span></figcaption>
    <div className="growth-map"><article><i>CVT 生长</i><strong>750 °C × 1周</strong><b>I₂ 1 mg cm⁻³</b><p>Fe/P/S化学计量，高真空25 cm石英管；10×10×0.5 mm³</p></article><article><i>样品与激发</i><strong>20 μm / 2.2 K</strong><b>THz最高2.5 MV cm⁻¹</b><p>Mag 3.70 THz；Ph₃ 3.25 THz</p></article><article><i>非线性判据</i><strong>差频0.45 THz</strong><b>强度∝E²；9 T同步分裂</b><p>温度锁频 + 场强阶数 + Zeeman分裂三重约束</p></article></div>
    <p className="figure-analysis"><b>图解读：</b>仅看到0.45 THz峰并不足以证明三波混频；真正有力的是它始终等于ω<sub>Mag</sub>−ω<sub>Ph3</sub>、振幅呈二阶场标度，并随磁振子在9 T下分裂。三条证据分别排除了固定晶格模、线性串扰和纯光学探测非线性。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 2｜Gd₅Pb₃：自助熔剂窗口与拓扑霍尔温区</b><span>根据 arXiv:2609.03223 Methods 与结果数值重绘，并非论文原图</span></figcaption>
    <div className="pressure-chart"><div className="phase-axis"><span>装料</span><span>熔化</span><span>慢冷</span><span>离心</span></div><div className="phase-bar"><i>Gd:Pb=84:16</i><i>1230 °C/2 h</i><i>1180 °C/100 h</i></div><div className="plasma-row"><span>磁相变</span><b>Tc≈285 K</b><em>220 / 78 / 34 K</em><b>多次重取向</b></div><div className="temp-row"><span>THE区间</span><b>100–200 K</b><em>峰值约150 K</em><b>第二批次复现</b></div></div>
    <p className="figure-analysis"><b>图解读：</b>这里“接近室温”指铁磁有序温度约285 K，而拓扑霍尔残差最强在约150 K。二者不能混写。若要把THE推近室温，应该调控两个Gd子晶格之间的竞争交换，同时用中子/共振散射排除多带Hall造成的假残差。</p>
  </figure>
  <figure className="data-figure"><figcaption><b>原创图解 3｜卤化物钙钛矿：同成分、不同热历史、不同发光</b><span>根据 arXiv:2609.03211 Methods 与结论重绘，并非论文原图</span></figcaption>
    <div className="device-stack"><div className="layers"><i>MAPbBr₃：1 M + 1 M / DMF，85 °C，24 h</i><i>FAPbI₃：3.8 mol% MDACl₂，95 °C/12 h，1–4 mm</i><i>CsPbBr₃/Cl₃：Bridgman，10⁻⁴ Torr，3→1 mm h⁻¹</i><i>测量前：必须记录升温、降温、停留与循环次数</i></div><div className="polarization"><span>平均结构<b>Bragg峰可能相同</b></span><i>数纳米动态倾转畴不同</i><span>光学输出<b>PLQY随热路径变化</b></span><small>“样品身份”必须包含热历史</small></div></div>
    <p className="figure-analysis"><b>图解读：</b>这篇工作的实验意义是把热程序从“测量辅助条件”升级为样品变量。跨实验室比较PL、载流子寿命或器件效率时，仅对齐配方和平均晶格常数仍可能比较了不同局域结构态。</p>
  </figure>
  <p className="version-note"><b>图片说明：</b>本期三图均为本站基于论文公开数值原创重绘，不复制论文版式、显微照片或受限图像；可用于快速理解，定量引用仍以原论文为准。</p>
 </section>}

export default function Report(){const full=report.papers.filter(p=>p.access.includes('全文精读')).length;return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">◆</span><span>每日文献简报</span></a><nav><a className="active" href="/reports/2026-09-05">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
  <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 011</p><h1>每日文献简报</h1><p>2026 年 9 月 5 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.headline}</p><div><span>{report.papers.length} 篇入选</span><span>{full} 篇全文精读</span><span>5 个研究板块</span></div></div></div>
  <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((p,i)=><a key={p.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {p.material}</a>)}<a href="#figures">原创图解</a><a href="#compare">横向对比</a><a href="#search-log">检索日志</a></aside><article className="report-content">
   <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点与来源说明</h2><p>{report.hotspot}</p><ol><li><b>正式期刊先查。</b>APS/PR、Nature/Science、Wiley、ACS、Crystal Growth &amp; Design 与 Journal of Crystal Growth 均按固定轨道检查；北京时间上午尚无9月5日正式上线，故回溯到9月3日。</li><li><b>机构访问已实际尝试。</b>Nature开放PDF可读；APS后台下载仍返回403，说明aTrust没有把浏览器机构会话传给自动进程。CePdAl找到作者arXiv全文，其余APS条目严格标注摘要级。</li><li><b>不以数量替代相关性。</b>本期18篇中14篇全文精读，4篇只保留能从一手页面确认的结果；缺失参数逐项指出，不用常见工艺猜测。</li></ol></section>
   <EvidenceFigures/>
   {report.papers.map((p,i)=><section className="paper-detail" id={ids[i]} key={p.title}><div className="paper-kicker"><span>{String(i+1).padStart(2,'0')} · {p.category}</span><b>{p.access.includes('全文精读')?'全文精读':'摘要/页面'} · 推荐 {p.rating}</b></div><h2>{p.material}｜{p.title}</h2><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{p.journal}</b></div><div className="meta-item"><span>日期</span><b>{p.date}</b></div><div className="meta-item"><span>生长 / 方法</span><b>{p.method}</b></div><div className="meta-item"><span>作者</span><b>{p.authors}</b></div></div><p className="links"><a href={p.doi}>论文条目 ↗</a><a href={p.fullText}>全文 / 来源页 ↗</a></p><p className="version-note"><b>版本与阅读范围：</b>{p.versionNote} {p.access}</p>{p.sections.map(s=><div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>)}<div className="reading-guide"><span>{p.readingGuide.priority}</span><h3>这篇论文的专属阅读路线</h3><p><b>先读：</b>{p.readingGuide.first}</p><p><b>重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></div></section>)}
   <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期横向对比</h2><div className="table-wrap"><table><thead><tr><th>板块</th><th>材料</th><th>生长 / 方法</th><th>全文状态</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.category}</td><td>{p.material}</td><td>{p.method}</td><td>{p.access}</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
   <section className="search-note" id="search-log"><p className="eyebrow">SEARCH LOG</p><h2>检索范围、访问与去重</h2><p><b>时间窗口：</b>{report.searchWindow}</p><p><b>检索范围：</b>{report.searchTerms.join('；')}。</p><p><b>访问结论：</b>14篇取得并阅读PDF；4篇因APS会话或early-online PDF限制仅按一手摘要/页面整理。机构通道已尝试，不声称未取得的全文已读。CePdAl因9月4日PRL正式发表重复收录，其余按DOI/arXiv ID和题名与历史简报去重。</p></section>
  </article></div>
 </main>}
