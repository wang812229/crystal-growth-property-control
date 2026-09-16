/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
export const metadata:Metadata={title:'往期归档｜每日文献简报',description:'按日期浏览每日文献简报。'};
const issues=[
 ['2026-09-16','2026.09.16','第 022 期 · 13 篇 · 10篇全文精读','隐藏变量成为可测、可算的主角','Bi₂Se₃ Floquet · CeRh₂As₂ · FePS₃/graphene · WAlB'],
 ['2026-09-15','2026.09.15','第 021 期 · 1 篇 · 仅元数据','当天唯一高相关正式新增：不为凑数回填旧文','混合阳离子钙钛矿单晶异质结 · X射线探测'],
 ['2026-09-14','2026.09.14','第 020 期 · 16 篇 · 13篇全文精读','生长与结构变量进入物性证据链','TiTe₂ CVT · Rh基重电子 · 镍酸盐WL · 扭转BSCCO · Te量子线'],
 ['2026-09-13','2026.09.13','第 019 期 · 12 篇 · 4篇全文精读','把结构变量变成可测、可调坐标','α-RuCl₃应变 · 镍酸盐台阶 · 高压NMR · 倾斜层错'],
 ['2026-09-12','2026.09.12','第 018 期 · 9 篇 · 4篇全文精读','界面与结构控制直接进入物性证据链','Si₂Te₂/HfTe₂ · 6层CrI₃ · MgB₂界面 · PdTe₂插层'],
 ['2026-09-11','2026.09.11','第 017 期 · 10 篇 · 7篇全文精读','结构身份决定物性：多型、析出、空位与界面','3R-NbSe₂ · USe₃ · Fe₆GeTe₂析出 · TlYbS₂ · CrPS₄'],
 ['2026-09-10','2026.09.10','第 016 期 · 9 篇 · 5篇全文精读','正式期刊成为主线：生长、谱学与拓扑可控性','FGT TeCl₄-CVT · NbN Dynes态 · 镍酸盐Ni 1s · Cs₃Cu₂I₅控相'],
 ['2026-09-09','2026.09.09','第 015 期 · 9 篇 · 全部PDF全文精读','可控生长—可信测量—谨慎解释','GdAlGe多型 · Ce₅MGe₂重费米子 · FeTe节点超导 · Sr₂CuO₃纠缠'],
 ['2026-09-08','2026.09.08','第 014 期 · 13 篇 · 2篇全文 + 5篇SI精读','结构与缺陷必须进入证据链','BaTiO₃手性声子 · Bi₂Te₃热电 · Fe(Te,Se)零模 · WSe₂三维逻辑'],
 ['2026-09-07','2026.09.07','第 013 期 · 13 篇 · 8 篇全文精读','结构层级决定可观测响应','Al 固液界面 · RP 镍酸盐 · Ru轨道矩 · Kondo · 远程外延'],
 ['2026-09-06','2026.09.06','第 012 期 · 9 篇 · 7 篇全文/SI 精读','结构细节成为可检验的物性旋钮','MnTe 倾斜外延 · α-Fe₂O₃ 磁振子 · 二维硫酸盐 · 高熵合金'],
 ['2026-09-05','2026.09.05','第 011 期 · 18 篇 · 14 篇全文精读','生长历史、直接谱学与场驱集体激发','FePS₃ · Gd₅Pb₃ · CePdAl · YbRh₂Si₂ · 卤化物'],
 ['2026-09-04','2026.09.04','第 010 期 · 13 篇 · 全部全文精读','解耦、相位与应变成为共同控制量','EuIn₂Sb₂ · CVD 魔角石墨烯 · Bi₂WO₆ · YScH₆'],
 ['2026-09-03','2026.09.03','第 009 期 · 10 篇 · 全部全文精读','从生长参数建立可复核证据链','Cr₂O₃ · YMn₆Sn₆ · Tl2201 · CrSBr · InAs hybrids'],
 ['2026-09-02','2026.09.02','第 008 期 · 13 篇 · 10 篇全文精读','从生长路径到非线性物性','La₃Ni₂O₇ · USbTe · UTe₂ · LaSc₂H₂₄ · GaAs/GaAsP'],
 ['2026-09-01','2026.09.01','第 007 期 · 7 篇 · 全部全文精读','从晶体生长到原子界面','ZrN₂ · TiN · 氢化物超导 · AlGaAs · PtSiGe · YIG · GeSn'],
 ['2026-08-31','2026.08.31','第 006 期 · 3 篇 · 全部全文','可复现 CVD 与高场超导','YbNi₄P₂ 高场 · La₃Ni₂O₇ NMR · MoS₂ 液滴 CVD'],
 ['2026-08-30','2026.08.30','第 005 期 · 3 篇 · 全部全文','测量条件与材料推断都要校准','RuO₂ · CeNiC₂ · YbMnBi₂'],
 ['2026-08-29','2026.08.29','第 004 期 · 3 篇 · 全部全文','缺陷、光生相变与器件可靠性','KTN 晶体 · NiPS₃ · Si/SiGe'],
 ['2026-08-28','2026.08.28','第 003 期 · 4 篇','以 CrSb 和 g 因子为线索','CVT · Flux · 反铁磁 · 超导 · 半导体']];
export default function Archive(){return <main className="archive-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav aria-label="主导航"><a href="/reports/2026-09-16">今日简报</a><a href="/materials">材料时间线</a><a href="/search">智能检索</a><a href="/weekly">本周趋势</a><a href="/workspace">我的研究</a><a className="active" href="/archive">归档</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header><section className="archive-hero"><p className="eyebrow">DAILY ARCHIVE</p><h1>每日简报归档</h1><p>按日期回看研究判断、全文访问状态、原创图解和实验建议。</p></section><section className="archive-list">{issues.map(i=><a href={`/reports/${i[0]}`} key={i[0]}><time>{i[1]}</time><div><span>{i[2]}</span><h2>{i[3]}</h2><p>{i[4]}</p></div><b>阅读 →</b></a>)}<div className="archive-placeholder"><time>每日更新</time><div><h2>下一期将在北京时间 08:00 自动归档</h2><p>当天无相关新增时，回溯最近三个自然日并明确说明。</p></div></div></section></main>}




