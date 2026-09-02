/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-09-02.json';

export const metadata: Metadata = {
  title: '2026-09-02 简报｜晶体生长和物性调控',
  description: report.headline,
};

const ids = report.papers.map((_, i) => `paper-${i + 1}`);

function EvidenceFigure() {
  return <div className="figure-block dark"><div className="cvt-figure"><div className="ampoule"><span className="source-zone">生长与样品<small>HPHT Flux · MOCVD · 批次</small></span><i>→ 结构 / 缺陷 →</i><span className="growth-zone">物性与机制<small>输运 · STM · 高压 · 计算</small></span></div><div className="time-line"><span>直接观察</span><b>模型拟合 / 作者推断</b><span>本简报判断</span></div></div><p><b>图解｜本期证据分层。</b>根据当日论文的方法原创重绘，并非论文原图。全文不可得的条目不补写生长或测量参数。</p></div>;
}

export default function Report() {
  return <main className="report-page"><header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></a><nav><a className="active" href="/reports/2026-09-02">今日简报</a><a href="/archive">往期归档</a><a href="/search">文献检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
    <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 008</p><h1>晶体生长与物性<br/>文献简报</h1><p>2026 年 9 月 2 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.hotspot}</p><div><span>{report.papers.length} 篇入选</span><span>{report.papers.filter(p => p.access.includes('全文')).length} 篇全文精读</span><span>当天命中</span></div></div></div>
    <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{report.papers.map((paper,i)=><a key={paper.title} href={`#${ids[i]}`}>{String(i+1).padStart(2,'0')} · {paper.material}</a>)}<a href="#compare">汇总对比</a><a href="#search">检索记录</a></aside><article className="report-content">
      <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点</h2><ol><li><b>重费米子研究出现实空间自旋向列信号。</b>USbTe 把 Kondo 杂化、旋转对称破缺与自旋极化放到同一 STM 证据链，但正式方法细节尚待版本更新。</li><li><b>镍酸盐今日形成结构—载流子双重边界。</b>四方直键 La₂SrNi₂O₇−δ 与高化学压力 Sm₄Ni₃O₁₀−δ 都未出现超导，说明结构几何不是充分条件。</li><li><b>可执行生长信息来自 HPHT Flux 与 MOCVD 全文。</b>3–3.25 GPa、1400 °C 的 RP 镍酸盐窗口和 30 周期 GaAs/GaAsP 外延结构可直接转为下一轮实验记录表。</li></ol><EvidenceFigure/></section>
      {report.papers.map((paper,index)=><section className="paper-detail" id={ids[index]} key={paper.title}><div className="paper-kicker"><span>{String(index+1).padStart(2,'0')}</span><b>{paper.access} · 推荐 {paper.rating}</b></div><h2>{paper.material}：{paper.title}</h2><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{paper.journal}</b></div><div className="meta-item"><span>日期</span><b>{paper.date}</b></div><div className="meta-item"><span>生长/方法</span><b>{paper.method}</b></div><div className="meta-item"><span>作者</span><b>{paper.authors}</b></div></div><p className="links"><a href={paper.doi}>DOI / 条目 ↗</a><a href={paper.fullText}>正文 / 官方页 ↗</a></p>{paper.sections.map(section=><div key={section.title}><h3>{section.title}</h3><p>{section.text}</p></div>)}</section>)}
      <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期汇总</h2><div className="table-wrap"><table><thead><tr><th>材料 / 样品</th><th>生长 / 方法</th><th>核心物性 / 判断</th><th>访问状态</th><th>推荐</th></tr></thead><tbody>{report.papers.map(p=><tr key={p.title}><td>{p.material}</td><td>{p.method}</td><td>{p.sections[3].text.slice(0,92)}…</td><td>{p.access}</td><td>{p.rating}</td></tr>)}</tbody></table></div></section>
      <section className="search-note" id="search"><p className="eyebrow">SEARCH LOG</p><h2>检索、访问与去重</h2><p><b>实际时间窗：</b>{report.searchWindow}</p><p><b>检索记录：</b>{report.searchTerms.join('；')}。</p><p><b>全文状态：</b>5 篇 arXiv 公开 PDF 实际阅读正文、方法/计算方法和图注；Nature Communications 页面目前为 early sharing 摘要版，其余正式期刊条目按出版社摘要或预览整理。订阅全文没有在不可核实的情况下被声称已读。</p><p><b>去重：</b>已按 DOI、arXiv ID 与题目核对 2026-08-28 至 2026-09-01 简报；Sm₄Ni₃O₁₀−δ 明确标注 arXiv 新提交与既有正式期刊版本关系。检索日期：2026-09-02（北京时间）。</p></section>
    </article></div>
  </main>;
}
