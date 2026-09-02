/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
  title: '智能检索与证据问答｜每日文献简报',
  description: '按研究板块、期刊、方法、全文状态和日期组合检索，并基于已精读内容进行证据问答。',
};

export default function SearchPage(){return <main className="search-page">
  <header className="site-header"><a className="brand" href="/"><span className="brand-mark">文</span><span>每日文献简报</span></a><nav><a href="/reports/2026-09-02">今日简报</a><a href="/#topics">研究板块</a><a href="/archive">往期归档</a><a className="active" href="/search">智能检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
  <SearchClient/>
  <footer><div className="brand"><span className="brand-mark">文</span><span>每日文献简报</span></div><p>基于本站已审阅简报进行检索与问答</p><p>答案附带证据来源 · 重要结论请核对论文原文</p></footer>
</main>}
