const papers = [
  { rank:'S', method:'CVT · I₂', material:'CrSb', title:'3D bulk-resolved g-wave altermagnetic order parameter in CrSb', journal:'Nature · 2026-08-26', note:'925/900 °C 双温区生长两周；以体相量子振荡绘出四节点 g 波磁序参量。', accent:'amber', href:'https://doi.org/10.1038/s41586-026-10902-z' },
  { rank:'A', method:'器件 · 少层', material:'NbSe₂', title:'Evidence for vacuum-enhanced superconductivity in NbSe₂', journal:'Nature · 2026-08-19', note:'六层器件嵌入太赫兹暗腔，官方报道 Tc 提升约 5.4%。', accent:'blue', href:'https://doi.org/10.1038/s41586-026-11037-x' },
  { rank:'A', method:'Flux', material:'GaSb₁₋ₓTeₓ', title:'Tuning high-mobility transport and degeneracy in GaSb₁₋ₓTeₓ', journal:'Physical Review Applied · 2026-08-07', note:'137 ppm Te 对应 4273 cm² V⁻¹ s⁻¹ 室温迁移率，并识别简并化阈值。', accent:'rose', href:'https://doi.org/10.1103/cbfk-mdky' },
  { rank:'A−', method:'CVT · 矿石前驱体', material:'FeS₂', title:'Semiconductor-quality pyrite FeS₂ from iron ore', journal:'Physical Review Applied · 2026-08-13', note:'利用硫化与气相输运的双重净化，从铁矿石获得半导体级单晶。', accent:'green', href:'https://doi.org/10.1103/6twd-lvvg' },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="晶体生长和物性调控首页"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></a>
      <nav aria-label="主导航"><a className="active" href="/reports/2026-08-28">今日简报</a><a href="/archive">往期归档</a><a href="#methods">生长方法</a></nav>
      <div className="live-chip"><span/> 每日 08:00 更新</div>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow">CRYSTAL GROWTH · PHYSICAL PROPERTIES</p><h1>从生长窗口到<br/><em>物性证据链</em></h1><p className="hero-lead">聚焦 Flux、CVT 与热点单晶材料。每天筛选新论文，细读实验方法、关键数据与可复现性。</p><div className="hero-actions"><a className="primary-btn" href="/reports/2026-08-28">阅读今日简报 <span>↘</span></a><span className="date-stamp">2026.08.28 · 第 003 期</span></div></div>
      <div className="crystal-field" aria-label="抽象晶体结构视觉图"><div className="orb orb-a"/><div className="orb orb-b"/><div className="orb orb-c"/><div className="beam beam-a"/><div className="beam beam-b"/><div className="beam beam-c"/><div className="field-label"><b>CrSb</b><span>P6₃/mmc</span></div><p>今日焦点 · g-wave altermagnet</p></div>
    </section>

    <section className="ticker" aria-label="今日统计"><div><strong>04</strong><span>入选论文</span></div><div><strong>01</strong><span>全文精读</span></div><div><strong>02</strong><span>CVT / Flux</span></div><div><strong>0</strong><span>重复 DOI</span></div><p>检索窗口：当天优先 · 无结果时回溯 3 日 · arXiv 已纳入</p></section>

    <section className="latest" id="latest"><div className="section-heading"><div><p className="eyebrow">DAILY BRIEFING</p><h2>今日要点</h2></div><span className="status-pill">全文状态已核验</span></div><div className="insight-grid"><article className="lead-insight"><span className="number">01</span><div><p className="kicker">首要推荐</p><h3>CrSb 的证据终于从表面走向体相</h3><p>Nature 最新工作用角分辨 dHvA 量子振荡重建三维 g 波交错磁序。I₂-CVT 生长窗口、RRR 与残余电阻率形成了完整的样品质量链条。</p></div></article><article className="short-insight"><span>02</span><h3>腔量子材料进入实验核心</h3><p>真空涨落可能成为无需持续驱动的超导调控手段。</p></article><article className="short-insight"><span>03</span><h3>“纯化”可以发生在生长途中</h3><p>FeS₂ 展示硫化与 CVT 协同排杂的工艺思路。</p></article></div></section>

    <section className="papers" id="papers"><div className="section-heading"><div><p className="eyebrow">SELECTED PAPERS</p><h2>本期论文</h2></div><a href="#methods">查看方法对比 →</a></div><div className="paper-list">{papers.map((paper,index)=><a className={`paper-row ${paper.accent}`} href={paper.href} key={paper.material} target="_blank" rel="noreferrer"><span className="row-index">0{index+1}</span><div className="paper-main"><div className="paper-meta"><span>{paper.method}</span><span>{paper.journal}</span></div><h3>{paper.title}</h3><p>{paper.note}</p></div><div className="paper-material"><strong>{paper.material}</strong><span>推荐 {paper.rank}</span></div><span className="arrow">↗</span></a>)}</div></section>

    <section className="methods" id="methods"><div><p className="eyebrow">METHOD RADAR</p><h2>生长方法雷达</h2></div><div className="method-card"><span>01</span><h3>Flux</h3><p>助熔剂、配比、峰值温度、降温速率、分离与退火。</p><b>本期 1 篇</b></div><div className="method-card featured"><span>02</span><h3>CVT</h3><p>输运剂、密封条件、冷热端温区、梯度、时间与晶体尺寸。</p><b>本期 2 篇</b></div><div className="method-card"><span>03</span><h3>Other</h3><p>器件制备、外延、压力与后生长处理。</p><b>本期 1 篇</b></div></section>

    <footer><div className="brand"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></div><p>每日晶体生长与物性文献简报</p><p>资料仅用于科研交流 · 原文版权归作者与出版社所有</p></footer>
  </main>;
}

