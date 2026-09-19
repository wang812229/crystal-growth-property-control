/* eslint-disable @next/next/no-html-link-for-pages */
import type {Metadata} from 'next';import ResearchToolsClient from '../research/ResearchToolsClient';
export const metadata:Metadata={title:'本周趋势｜每日文献简报',description:'基于站内实际收录数据生成材料、方法、测量和期刊趋势。'};
export default function Page(){return <main><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav aria-label="主导航"><a href="/reports/2026-09-19">今日简报</a><a href="/materials">材料时间线</a><a href="/search">智能检索</a><a className="active" href="/weekly">本周趋势</a><a href="/workspace">我的研究</a><a href="/archive">归档</a></nav><div className="live-chip"><span/> 真实收录数据</div></header><ResearchToolsClient view="weekly"/><footer><div className="brand"><span className="brand-mark">文</span><span>本周研究趋势</span></div><p>所有图表均来自站内实际收录</p><p>不使用装饰性模拟数据</p></footer></main>}

