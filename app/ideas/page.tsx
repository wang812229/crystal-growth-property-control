/* eslint-disable @next/next/no-html-link-for-pages */
import type {Metadata} from 'next';
import entries from '../research/ideas-data';
import ResearchIdeasPanel from '../research/ResearchIdeasPanel';
export const metadata:Metadata={title:'新材料与研究设想｜每日文献简报',description:'从已读论文提出可证伪的新材料与测量候选，保留既有工作、检索范围和创新性限制。'};
export default function IdeasPage(){return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav aria-label="主导航"><a href="/">首页</a><a href="/archive">简报归档</a><a href="/search">文献检索</a><a className="active" href="/ideas">研究设想</a></nav></header><section className="ideas-intro"><p className="eyebrow">FROM EVIDENCE TO EXPERIMENT</p><h1>从当天材料，走向下一次实验</h1><p>先排除已有研究，再明确剩余问题。候选材料、计算预测与实验发现分开标记，不作未经证明的首创承诺。</p><p>按日期回看：{entries.map(e=><a className="idea-date" href={'#ideas-'+e.date} key={e.date}>{e.date}</a>)}</p></section>{entries.length?entries.map(e=><div className="ideas-archive-entry" id={'ideas-'+e.date} key={e.date}><ResearchIdeasPanel data={e} date={e.date} sectionId={'research-ideas-'+e.date}/></div>):<p>暂无完成证据整理的候选，不用旧想法填数。</p>}</main>}
