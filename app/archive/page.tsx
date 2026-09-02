/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
export const metadata:Metadata={title:'往期归档｜晶体生长和物性调控',description:'晶体生长与物性每日文献简报归档。'};
const issues=[
  ['2026-09-02','2026.09.02','第 008 期 · 13 篇 · 5 篇全文精读','重费米子向列序与镍酸盐结构—载流子边界','USbTe · La₃Ni₂O₇ · La₂SrNi₂O₇−δ · Sm₄Ni₃O₁₀−δ · GaAs/GaAsP'],
  ['2026-09-01','2026.09.01','第 007 期 · 7 篇 · 全部全文详读','从超导无序临界到原子近邻','ZrNₓ · TiN · 氧化物超晶格 · AlGaAs · PtSiGe · YIG · GeSn'],
  ['2026-08-31','2026.08.31','第 006 期 · 3 篇 · 全部精读','从可复现 CVD 到高场费米面与轨道选择性','YbNi₄P₂ 高场 · La₃Ni₂O₇ NMR · MoS₂ 液相 CVD'],
  ['2026-08-30','2026.08.30','第 005 期 · 3 篇 · 全部精读','生长窗口与物性推断都需要校准','RuO₂ 升华输运 · CeNiC₂ 高压临界 · YbMnBi₂ 相位校准'],
  ['2026-08-29','2026.08.29','第 004 期 · 3 篇 · 全部精读','缺陷如何被制造、识别并转化为物性','KTN 塑性 · NiPS₃ 太赫兹 · Si/SiGe 氧杂质工程'],
  ['2026-08-28','2026.08.28','第 003 期 · 4 篇','CrSb 体相 g 波交错磁性成为焦点','CVT · Flux · 量子振荡 · 超导 · 半导体输运'],
];
export default function Archive(){return <main className="archive-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></a><nav><a href="/reports/2026-09-02">今日简报</a><a className="active" href="/archive">往期归档</a><a href="/search">文献检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header><section className="archive-hero"><p className="eyebrow">DAILY ARCHIVE</p><h1>每日简报归档</h1><p>按日期回看材料热点、生长窗口、物性证据与全文访问状态。</p></section><section className="archive-list">{issues.map(i=><a href={`/reports/${i[0]}`} key={i[0]}><time>{i[1]}</time><div><span>{i[2]}</span><h2>{i[3]}</h2><p>{i[4]}</p></div><b>S →</b></a>)}<div className="archive-placeholder"><time>后续每日</time><div><h2>新一期将在上午 8:00 自动归档</h2><p>当天无高相关结果时回溯最近三个自然日。</p></div></div></section></main>}
