/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
  title: '文献检索与实时问答｜晶体生长和物性调控',
  description: '检索本站全部晶体生长与物性简报，并基于已精读内容进行实时证据问答。',
};

export default function SearchPage(){return <main className="search-page">
  <header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></a><nav><a href="/reports/2026-08-30">今日简报</a><a href="/archive">往期归档</a><a className="active" href="/search">文献检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
  <SearchClient/>
  <footer><div className="brand"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></div><p>基于本站已审阅简报进行检索与问答</p><p>答案附带证据来源 · 重要结论请核对论文原文</p></footer>
</main>}
