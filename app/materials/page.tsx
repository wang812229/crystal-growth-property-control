/* eslint-disable @next/next/no-html-link-for-pages */
import type {Metadata} from 'next';import ResearchToolsClient from '../research/ResearchToolsClient';
export const metadata:Metadata={title:'材料时间线｜每日文献简报',description:'跨期追踪α-RuCl₃、La₃Ni₂O₇、UTe₂等材料的生长、结构、物性、调控与争议。'};
export default function Page(){return <main><Header active="materials"/><ResearchToolsClient view="materials"/><Footer/></main>}
function Header({active}:{active:string}){return <header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav aria-label="主导航"><a href="/reports/2026-09-17">今日简报</a><a className={active==='materials'?'active':''} href="/materials">材料时间线</a><a href="/search">智能检索</a><a href="/weekly">本周趋势</a><a href="/workspace">我的研究</a><a href="/archive">归档</a></nav><div className="live-chip"><span/> 每日 10:00 更新</div></header>}
function Footer(){return <footer><div className="brand"><span className="brand-mark">文</span><span>每日文献简报</span></div><p>材料时间线由站内真实收录记录生成</p><p>重要结论请返回原文核对</p></footer>}

