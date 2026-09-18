/* eslint-disable @next/next/no-html-link-for-pages */
import type {Metadata} from 'next';import ResearchToolsClient from '../research/ResearchToolsClient';
export const metadata:Metadata={title:'我的研究工作台｜每日文献简报',description:'设置研究关注、整理论文项目并记录晶体生长与物性测量实验。'};
export default function Page(){return <main><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav aria-label="主导航"><a href="/reports/2026-09-18">今日简报</a><a href="/materials">材料时间线</a><a href="/search">智能检索</a><a href="/weekly">本周趋势</a><a className="active" href="/workspace">我的研究</a><a href="/archive">归档</a></nav><div className="live-chip"><span/> 本地保存</div></header><ResearchToolsClient view="workspace"/><footer><div className="brand"><span className="brand-mark">文</span><span>我的研究工作台</span></div><p>实验数据默认只保存在当前浏览器</p><p>请定期导出 JSON 或 CSV 备份</p></footer></main>}

