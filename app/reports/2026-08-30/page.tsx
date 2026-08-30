/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next';
import report from '../../../content/reports/2026-08-30.json';

export const metadata: Metadata = {
  title: '2026-08-30 简报｜晶体生长和物性调控',
  description: 'Ru₀.₉V₀.₁O₂ 升华输运、CeNiC₂ 高压量子临界输运与 YbMnBi₂ 量子振荡相位校准。',
};

const ids = ['ruo2', 'cenic2', 'ybmnbi2'];
const labels = ['Ru₀.₉V₀.₁O₂', 'CeNiC₂', 'YbMnBi₂'];

function EvidenceFigure({index}:{index:number}) {
  if (index === 0) return <div className="figure-block"><div className="cvt-figure"><div className="ampoule"><span className="source-zone">热端<small>1000 °C · 20 h</small></span><i>O₂ 40 cc/min →</i><span className="growth-zone">冷端结晶<small>1200/1250 °C 条件矛盾</small></span></div><div className="time-line"><span>RuO₂ + VO₂</span><b>升华输运</b><span>1.5×2×5 mm³</span></div></div><p><b>图解 1｜Ru₀.₉V₀.₁O₂ 生长流程。</b>根据论文 Experimental 与表 I 原创重绘，并非论文原图。表中最高温度 1250 °C 与正文 1200 °C 不一致；流程图刻意同时保留两者，提醒复现前确认。</p></div>;
  if (index === 1) return <div className="figure-block dark"><div className="node-figure"><div className="frequency-lines"><span/><span/></div><div className="node-ring"><i/><i/><i/><i/></div></div><p><b>图解 2｜CeNiC₂ 三轴共同临界区。</b>根据论文图 2–4 原创概念重绘，并非论文原图。a、b、c 轴电阻率绝对值不同，但 n≈1、ρ₀增强和超导穹顶共同汇聚到约 9.5–10 GPa，这是“近局域临界散射”的核心证据。</p></div>;
  return <div className="figure-block"><div className="cvt-figure"><div className="ampoule"><span className="source-zone">磁化 M<small>φM=0.49π</small></span><i>同一晶体 · B∥c</i><span className="growth-zone">VME<small>φV=0.88π</small></span></div><div className="time-line"><span>F≈159 T</span><b>Δφ=0.39π≈π/2</b><span>m*=0.22m₀</span></div></div><p><b>图解 3｜响应函数相位校准。</b>根据论文表 I 与 Maxwell 关系原创重绘，并非论文原图。相差接近 π/2 支持磁致伸缩系数的导数相位，但未知的轨道、自旋和应力符号仍不允许直接宣布 Berry 相位。</p></div>;
}

export default function Report(){return <main className="report-page">
  <header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></a><nav><a className="active" href="/reports/2026-08-30">今日简报</a><a href="/archive">往期归档</a><a href="/#methods">生长方法</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>
  <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 005</p><h1>晶体生长与物性<br/>文献简报</h1><p>2026 年 8 月 30 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>{report.hotspot}</p><div><span>3 篇入选</span><span>3 篇全文精读</span><span>0 篇重复</span></div></div></div>
  <div className="report-layout"><aside className="report-toc"><p>本期目录</p>{ids.map((id,i)=><a key={id} href={`#${id}`}>0{i+1} · {labels[i]}</a>)}<a href="#compare">汇总对比</a><a href="#search">检索记录</a></aside><article className="report-content">
    <section className="report-lede"><p className="eyebrow">TODAY&apos;S SIGNAL</p><h2>今日要点</h2><ol><li><b>首要推荐 Ru₀.₉V₀.₁O₂。</b>它给出流动 O₂ 中升华输运的明确框架，也同时暴露起始配比与最高温度的原文矛盾；这类矛盾比一串漂亮参数更需要实验人员注意。</li><li><b>CeNiC₂ 的强项是三轴可证伪设计。</b>不同方向在同一压力区同时趋向 T 线性和 ρ₀峰值，支持近局域临界通道；但“价态涨落”仍是推断，等待 Ce 边谱学直接验证。</li><li><b>YbMnBi₂ 是测量学基准。</b>同一块 self-flux 单晶上，磁化与复合磁电探针的振荡相差 0.39π，校准了导数型响应的相位，却没有越界宣称唯一 Berry 相位。</li></ol></section>

    {report.papers.map((paper,index)=><section className="paper-detail" id={ids[index]} key={paper.title}><div className="paper-kicker"><span>0{index+1}</span><b>{paper.access} · 推荐 {paper.rating}</b></div><h2>{paper.material}：{paper.title}</h2><p className="english-title">{paper.title}</p><div className="meta-grid"><div className="meta-item"><span>来源</span><b>{paper.journal}</b></div><div className="meta-item"><span>日期</span><b>{paper.date}</b></div><div className="meta-item"><span>生长</span><b>{paper.method}</b></div><div className="meta-item"><span>作者</span><b>{paper.authors}</b></div></div><p className="links"><a href={paper.doi}>arXiv 条目 ↗</a><a href={paper.fullText}>PDF 全文 ↗</a></p>{paper.sections.map((section,sectionIndex)=><div key={section.title}><h3>{section.title}</h3><p>{section.text}</p>{sectionIndex===2 && <EvidenceFigure index={index}/>}</div>)}</section>)}

    <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期汇总</h2><div className="table-wrap"><table><thead><tr><th>材料 / 结构</th><th>生长</th><th>关键窗口</th><th>主要物性与核心数据</th><th>热点 / 推荐</th></tr></thead><tbody><tr><td>Ru₀.₉V₀.₁O₂₊ᵧ<br/>金红石</td><td>流动 O₂ 升华输运</td><td>1000 °C 20 h；1200/1250 °C 100 h（原文矛盾）</td><td>ρ300K 36.1→14.7 μΩ·cm；无磁序</td><td>交错磁性争议 · 全文 S</td></tr><tr><td>CeNiC₂<br/>无反演对称</td><td>Czochralski</td><td>9.5–10 GPa 临界区</td><td>三轴 n≈1；Tc≈3.9 K；Hc2 15–19.8 T</td><td>价态临界候选 · 全文 S</td></tr><tr><td>YbMnBi₂<br/>P4/nmm</td><td>Bi self-flux</td><td>B∥c，最高 14 T</td><td>F≈159 T；m*=0.22m₀；Δφ=0.39π</td><td>拓扑相位校准 · 全文 A+</td></tr></tbody></table></div></section>
    <section className="search-note" id="search"><p className="eyebrow">SEARCH LOG</p><h2>检索、全文访问与去重</h2><p><b>实际时间窗：</b>{report.searchWindow}</p><p><b>检索词：</b>{report.searchTerms.join('；')}。</p><p><b>数据库/站点：</b>arXiv API 与论文 PDF、APS/Nature 出版社关键词页和公开元数据。三篇均实际读取摘要、Introduction、Experimental/Methods、Results、结论、图表及附录；未见独立 Supplementary Information，也未发现对应期刊 DOI，因此链接均指向 arXiv 一手条目和 PDF。按 DOI、arXiv ID 与规范化题目和 2026-08-28、2026-08-29 两期归档比对，重复 0 篇。</p><p><b>时间说明：</b>论文 PDF 与 arXiv 元数据记录 8 月 26 日首次提交；本报告按照最近公开批次 8 月 28 日纳入。若只按 API 的 submitted 时间而不看 new-listing 批次，会把周末无更新误写成“当天新增”。本期没有用更早论文凑数。</p></section>
  </article></div>
</main>}
