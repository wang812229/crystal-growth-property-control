/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
export const metadata:Metadata={title:'往期归档｜每日文献简报',description:'量子材料每日文献简报归档。'};
const issues=[
  ['2026-09-05','2026.09.05','第 011 期 · 18 篇 · 14 篇全文精读','生长历史、直接判据与场控集体激发','FePS₃ · Gd₅Pb₃ · CePdAl · YbRh₂Si₂ · 镍酸盐'],
  ['2026-09-04','2026.09.04','第 010 期 · 13 篇 · 全部全文精读','堆垛、空位与应变成为主动调控量','EuIn₂Sb₂ · CVD魔角石墨烯 · Bi₂WO₆ · YScH₈'],
  ['2026-09-03','2026.09.03','第 009 期 · 10 篇 · 全部全文精读','从可复现生长到可判别证据','Cr₂O₃ · YMn₆Sn₆ · Tl2201 · CrSBr · InAs hybrids'],
  ['2026-09-02','2026.09.02','第 008 期 · 13 篇 · 10 篇全文精读','从生长过程到量子物性：访问、样品与证据地图','La₃Ni₂O₇ · USbTe · UTe₂ · LaSc₂H₂₄ · GaAs/GaAsP'],
  ['2026-09-01','2026.09.01','第 007 期 · 7 篇 · 全部全文详读','从超导无序临界到原子近邻','ZrNₓ · TiN · 氧化物超晶格 · AlGaAs · PtSiGe · YIG · GeSn'],
  ['2026-08-31','2026.08.31','第 006 期 · 3 篇 · 全部精读','从可复现 CVD 到高场费米面与轨道选择性','YbNi₄P₂ 高场 · La₃Ni₂O₇ NMR · MoS₂ 液相 CVD'],
  ['2026-08-30','2026.08.30','第 005 期 · 3 篇 · 全部精读','生长窗口与物性推断都需要校准','RuO₂ 升华输运 · CeNiC₂ 高压临界 · YbMnBi₂ 相位校准'],
  ['2026-08-29','2026.08.29','第 004 期 · 3 篇 · 全部精读','缺陷如何被制造、识别并转化为物性','KTN 塑性 · NiPS₃ 太赫兹 · Si/SiGe 氧杂质工程'],
  ['2026-08-28','2026.08.28','第 003 期 · 4 篇','CrSb 体相 g 波交错磁性成为焦点','CVT · Flux · 量子振荡 · 超导 · 半导体输运'],
];
export default function Archive(){return <main className="archive-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav><a href="/reports/2026-09-05">今日简报</a><a href="/#topics">研究板块</a><a className="active" href="/archive">往期归档</a><a href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header><section className="archive-hero"><p className="eyebrow">DAILY ARCHIVE</p><h1>每日简报归档</h1><p>按日期回看各研究板块、全文访问状态、定量图解与实验建议。</p></section><section className="archive-list">{issues.map(i=><a href={`/reports/${i[0]}`} key={i[0]}><time>{i[1]}</time><div><span>{i[2]}</span><h2>{i[3]}</h2><p>{i[4]}</p></div><b>S →</b></a>)}<div className="archive-placeholder"><time>后续每日</time><div><h2>新一期将在上午 8:00 自动归档</h2><p>当天无高相关结果时回溯最近三个自然日。</p></div></div></section></main>}
