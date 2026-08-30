/* eslint-disable @next/next/no-html-link-for-pages, react/no-unescaped-entities */
import type { Metadata } from 'next';

export const metadata:Metadata={
  title:'2026-08-28 简报｜晶体生长和物性调控',
  description:'CrSb 交错磁性、NbSe₂ 真空增强超导、GaSbTe 与 FeS₂ 单晶生长研究。',
  openGraph:{title:'2026-08-28 晶体生长与物性简报',description:'四篇论文，一篇全文精读；聚焦 CVT、Flux 与物性证据链。',images:[]},
  twitter:{card:'summary',title:'2026-08-28 晶体生长与物性简报',description:'四篇论文，一篇全文精读；聚焦 CVT、Flux 与物性证据链。',images:[]}
};

const Meta=({label,children}:{label:string,children:React.ReactNode})=><div className="meta-item"><span>{label}</span><b>{children}</b></div>;

export default function Report(){return <main className="report-page">
  <header className="site-header"><a className="brand" href="/"><span className="brand-mark">晶</span><span>晶体生长和物性调控</span></a><nav><a className="active" href="/reports/2026-08-28">今日简报</a><a href="/archive">往期归档</a><a href="/search">文献检索</a></nav><div className="live-chip"><span/> 每日 08:00 更新</div></header>

  <div className="report-hero"><div><p className="eyebrow">DAILY REPORT · ISSUE 003</p><h1>晶体生长与物性<br/>文献简报</h1><p>2026 年 8 月 28 日 · 北京时间</p></div><div className="report-summary"><b>今日判断</b><p>交错磁性从表面能谱走向体相量子振荡；腔量子材料成为超导调控的新变量；生长步骤本身也可以成为深度净化过程。</p><div><span>4 篇入选</span><span>1 篇全文精读</span><span>0 篇重复</span></div></div></div>

  <div className="report-layout">
    <aside className="report-toc"><p>本期目录</p><a href="#crsb">01 · CrSb</a><a href="#nbse2">02 · NbSe₂</a><a href="#gasb">03 · GaSbTe</a><a href="#fes2">04 · FeS₂</a><a href="#compare">方法对比</a><a href="#search">检索记录</a></aside>
    <article className="report-content">
      <section className="report-lede"><p className="eyebrow">TODAY'S SIGNAL</p><h2>今日要点</h2><ol><li><b>首要推荐 CrSb。</b>完整的 I₂-CVT 参数、严格的晶体质量筛选与角分辨高场数据形成闭合证据链。</li><li><b>NbSe₂ 的亮点在调控概念。</b>目前正文访问受限，5.4% 的 Tc 提升来自作者单位官方报道，不能据此还原器件工艺。</li><li><b>应用晶体的核心仍是缺陷与杂质。</b>GaSbTe 寻找 ppm 级补偿窗口，FeS₂ 则把硫化和 CVT 作为连续净化步骤。</li></ol></section>

      <section className="paper-detail" id="crsb"><div className="paper-kicker"><span>01</span><b>全文精读 · 推荐 S</b></div><h2>CrSb：体相解析 g 波交错磁序</h2><p className="english-title">3D bulk-resolved g-wave altermagnetic order parameter in CrSb</p><div className="meta-grid"><Meta label="期刊">Nature 656, 854–860</Meta><Meta label="日期">2026-08-26</Meta><Meta label="方法">I₂-CVT</Meta><Meta label="结构">P6₃/mmc · NiAs 型</Meta></div><p className="links"><a href="https://doi.org/10.1038/s41586-026-10902-z">DOI ↗</a><a href="https://arxiv.org/html/2601.14526v2">arXiv 全文 ↗</a></p>
        <h3>问题与研究逻辑</h3><p>交错磁体同时具有零净磁矩与动量依赖自旋劈裂。作者首先指出表面敏感 ARPES 容易受终止面影响，随后把磁序参量定义为自旋上下能带的交换劈裂 Δ(k)，再利用不同磁场方向下量子振荡轨道面积是否分裂，寻找节点与反节点方向的体相信号。</p>
        <h3>晶体与生长窗口</h3><p>Cr 与 Sb 按 1:1 化学计量比配料，纯度分别为 99.995% 和 99.9999%。I₂ 用量按生长温度下约 1 bar 蒸气压计算；原料真空封装在石英安瓿中，置于水平双温区炉。温区缓慢升至 925/900 °C，保持两周后随炉冷却。获得最大约 1.5 mm 的六方片晶，另有数毫米互生区域。正文未报告安瓿尺寸、I₂ 实际质量浓度、精确升温速率与冷却速率。</p>
        <div className="figure-block"><div className="cvt-figure"><div className="ampoule"><span className="source-zone">Cr + Sb + I₂<small>925 °C</small></span><i>输运方向 →</i><span className="growth-zone">CrSb 晶体<small>900 °C</small></span></div><div className="time-line"><span>缓慢升温</span><b>14 days</b><span>随炉冷却</span></div></div><p><b>图解 1｜CVT 生长窗口重绘。</b>根据公开 Methods 重新绘制，不是论文原图。仅 25 °C 的双温区差维持两周，配合按蒸气压计算的 I₂ 输运剂，形成毫米级片晶。</p></div>
        <h3>质量证据</h3><p>粉末 XRD 在 2θ=10–90° 范围测量，Rietveld 拟合 RBragg=3.39，未见额外杂相。Laue 用于高场实验前取向；电阻筛选得到典型 RRR=10–28，最佳样品残余电阻率约 2 μΩ·cm。XRD 证明相纯与平均结构，RRR 则更直接约束散射和平均自由程，两类证据互补。</p>
        <h3>物性证据链</h3><p>作者在 0.4 K、最高 41.5 T 下进行角分辨 dHvA 扭矩测量，并辅以最高约 65 T 的脉冲场 PDO。节点方向 H∥a 和 H∥ab 分别只见约 4.1 kT 与 3.6 kT 单频；偏离节点约 4° 后分裂约 0.6 kT。代表性取向的两支频率为 3.41 与 3.82 kT，有效质量为 1.73(5)mₑ 与 1.84(5)mₑ，估算自旋劈裂约 25 meV。角度依赖符合 Y₄⁻³∝zy(3x²−y²)，从而定位四个节点平面。</p>
        <div className="figure-block dark"><div className="node-figure"><div className="node-ring"><i/><i/><i/><i/></div><div className="frequency-lines"><span/><span/></div></div><p><b>图解 2｜节点与频率分裂。</b>在节点平面，自旋上下轨道面积相等，量子振荡只出现一支；离开节点后两支频率分开。该角度选择性是论文最强的体相证据。</p></div>
        <h3>评价与实验启示</h3><p>创新在于把非常规磁序的对称性直接映射为体相量子振荡频率。限制是结论依赖极低温、强磁场和高质量小晶体；CVT 复现实验还缺少 I₂ 质量浓度与安瓿几何。建议把 RRR、残余电阻率和 Laue 取向作为批次放行条件，并优先复核角度误差对频率分裂的影响。</p>
      </section>

      <section className="paper-detail compact" id="nbse2"><div className="paper-kicker"><span>02</span><b>仅摘要/官方信息 · 推荐 A</b></div><h2>NbSe₂：真空涨落增强超导</h2><p className="english-title">Evidence for vacuum-enhanced superconductivity in NbSe₂</p><div className="meta-grid"><Meta label="期刊">Nature</Meta><Meta label="日期">2026-08-19</Meta><Meta label="样品">六层 NbSe₂ 器件</Meta><Meta label="调控方式">太赫兹暗腔</Meta></div><p className="links"><a href="https://doi.org/10.1038/s41586-026-11037-x">Nature / DOI ↗</a><a href="https://phys.ustc.edu.cn/2026/0820/c17720a750714/pagem.htm">作者单位介绍 ↗</a></p>
        <h3>科学问题与判断链条</h3><p>研究要回答的不是“光照是否能改变超导”，而是没有外部光子占据时，腔体真空电磁涨落能否改变凝聚态基态。作者把六层 NbSe₂ 放入太赫兹分裂环谐振结构的强场区域，以暗模降低辐射损耗并增强局域场；随后比较腔内器件与多组对照器件的电阻转变、临界电流和临界场。若三类独立超导指标同向增强，而应变、厚度差异、退化和金属屏蔽不足以解释变化，才支持“真空场耦合”这一归因。</p>
        <h3>样品与制备信息</h3><p>当前可访问的一手信息确认样品为六层 NbSe₂，属于少层 van der Waals 超导体，并被集成到太赫兹分裂环暗腔中。母晶采用何种方法生长、是否使用 I₂-CVT、剥离环境、封装材料、电极金属、器件横向尺寸、腔体共振频率与品质因数均未在已访问材料中完整给出，因此本简报不补写这些参数。对晶体生长人员而言，这篇工作的“材料入口”仍不透明，不能作为 NbSe₂ 生长配方来源。</p>
        <h3>测量、关键结果与替代解释</h3><p>官方信息给出超导临界温度约提升 5.4%，并指出转变附近的临界电流、临界磁场同时增强。三者共同变化比单独观察电阻转变位移更有说服力，因为局部短路或接触电阻变化通常难以同步提高临界场。作者还设置了不同腔体或材料条件的对照以排查应变、样品不均匀、空气退化和金属结构的静电屏蔽。现阶段仍缺少原始曲线、误差条、器件间离散度与完整统计量，5.4% 的提升是否显著超过器件批次差异，需要阅读全文数据后判断。</p>
        <h3>机制、局限与复现实验建议</h3><p>理论解释是电子自由度与真空腔模杂化后，超导态相对正常态的能量进一步降低，从而提高 Tc。这里的因果关键在于腔模频率、场分布及材料集体模之间的匹配，而不只是“把器件放进金属环”。复现时应至少报告空腔/载样后的共振频率和 Q 值、同一母晶上的成对器件、厚度与应变映射、升降温重复性，并进行盲法器件统计。优先级为 A：概念突破强，但对 Flux/CVT 工艺的直接指导有限，待获取全文与补充材料后再升级为可复现的参数表。</p>
      </section>

      <section className="paper-detail compact" id="gasb"><div className="paper-kicker"><span>03</span><b>仅摘要/元数据 · 推荐 A</b></div><h2>GaSb₁₋ₓTeₓ：Flux 生长的 ppm 级窗口</h2><p className="english-title">Tuning high-mobility transport and degeneracy in GaSb₁₋ₓTeₓ</p><div className="meta-grid"><Meta label="期刊">Physical Review Applied</Meta><Meta label="日期">2026-08-07</Meta><Meta label="方法">Flux growth</Meta><Meta label="变量">Te：0–3.48%</Meta></div><p className="links"><a href="https://doi.org/10.1103/cbfk-mdky">APS / DOI ↗</a></p>
        <h3>核心问题：补偿与简并化之间是否存在可控窗口</h3><p>GaSb 中本征缺陷常导致 p 型背景，Te 作为施主掺杂后会先补偿受主，继续增加才可能把费米能级推入导带。论文的关键不是简单展示“掺杂提高载流子浓度”，而是跨越 ppm 到百分比范围寻找迁移率最大点、载流子符号反转点和简并化阈值，并判断三者是否重合。摘要给出的结果显示它们并不重合：137 ppm 对应最高室温电子迁移率，而约 0.29% 才进入 n 型简并区。</p>
        <h3>生长与成分控制</h3><p>论文明确使用 Flux 法制备 GaSb₁₋ₓTeₓ，组成覆盖 0≤x≤3.48%。当前可访问摘要未报告 Ga/Sb/Te 起始配比、是否采用 Sb 自助熔剂、坩埚材质、封管气氛、峰值温度、保温时间、降温速率、助熔剂分离方式、退火程序和晶体尺寸，以上均标记为“正文未报告”。由于最优点只有 137 ppm，名义配料与实际进入晶格的 Te 可能有明显偏差，复现实验必须使用 ICP-MS、EPMA 或标定可靠的 WDS 给出实际浓度及空间均匀性，不能只引用起始配比。</p>
        <h3>输运结果如何连接到能带占据</h3><p>x=137 ppm 时室温电子迁移率达到 4273 cm² V⁻¹ s⁻¹，说明此时离化杂质散射与本征缺陷补偿之间取得较好平衡；继续增加 Te 虽能提高电子浓度，却可能增加杂质散射并降低迁移率。x&lt;0.29% 的样品被归为 p 型非简并半导体，x≥0.29% 转为 n 型简并输运并出现 Shubnikov–de Haas 振荡。SdH 的出现提供了闭合费米面和较长量子寿命的证据，但要区分量子迁移率与 Hall 迁移率，还需要频率、Dingle 温度、有效质量及角度依赖，摘要未提供这些数值。</p>
        <h3>局限、可复现清单与启示</h3><p>当前证据的最大缺口是没有全文实验段和补充材料，无法判断每个浓度点的晶体批次数、误差范围以及 Te 偏析。建议实际生长时在同一晶锭头—中—尾和多个横截面做成分图，将 Hall 系数、零场电阻率、SdH 频率及光谱带边放在同一浓度轴上，并特别加密 100–300 ppm 和 0.2–0.4% 两个区间。优先级 A：对窄禁带半导体的缺陷工程和高迁移率窗口很有借鉴价值，但在取得完整配方前只能指导实验设计，不能直接复现。</p>
      </section>

      <section className="paper-detail compact" id="fes2"><div className="paper-kicker"><span>04</span><b>仅摘要/元数据 · 推荐 A−</b></div><h2>FeS₂：生长过程本身就是净化过程</h2><p className="english-title">Semiconductor-quality pyrite FeS₂ from iron ore</p><div className="meta-grid"><Meta label="期刊">Physical Review Applied</Meta><Meta label="日期">2026-08-13</Meta><Meta label="路线">还原 → 硫化 → CVT</Meta><Meta label="原料">天然铁矿石</Meta></div><p className="links"><a href="https://doi.org/10.1103/6twd-lvvg">APS / DOI ↗</a></p>
        <h3>研究问题与工艺逻辑</h3><p>黄铁矿 FeS₂ 的应用障碍并不只是能否获得单晶，而是痕量杂质和缺陷会把载流子浓度推高、缩短寿命。作者反向提出：能否不用额外湿法或区熔提纯，仅利用物相转化和气相输运中的化学选择性，把低品位天然原料变成半导体级单晶？流程先把铁矿石还原为 Fe，再硫化生成 FeS₂，最后以气相输运/CVT 进行晶体生长。每一步既完成相变，也可能把挥发性、难硫化或难输运的杂质留在前一道工序。</p>
        <h3>生长参数与当前信息边界</h3><p>已访问摘要确认最终步骤采用气相输运/CVT，但没有给出矿石来源与初始杂质谱、还原剂、还原温度、硫化温度与硫分压、输运剂种类和装载量、安瓿真空度、冷热端温区、温度梯度、持续时间、晶体尺寸及产率。这些信息全部标为“正文未报告”。由于研究主张依赖过程净化，复现时最关键的数据不是单一温度，而是 Fe、硫化物前驱体、源区残渣和最终晶体四个节点的质量平衡与杂质分配系数。</p>
        <h3>物性结果及其含义</h3><p>最终晶体的室温 Hall 电子浓度可低至约 10¹⁶ cm⁻³，迁移率超过 100 cm² V⁻¹ s⁻¹。低载流子浓度说明有效施主缺陷或杂质受到抑制，高迁移率则表明剩余离化杂质和结构缺陷的散射没有主导室温输运。二者同时改善比单独降低电阻率更能支撑“半导体级”判断。不过 Hall 单带拟合可能掩盖多带或非均匀导电，仍需结合温变 Hall、接触几何、载流子激活能、光谱寿命和结构缺陷表征。</p>
        <h3>创新、风险与实验启示</h3><p>创新点是把相转化和 CVT 看作连续化学选择器，而不是只把 CVT 当作结晶步骤。风险在于天然矿石批次差异可能改变主导杂质，某一来源上的有效净化路线不一定可直接迁移。建议先建立 ICP-MS/ICP-OES 的全流程杂质追踪表，再用空白高纯 Fe 对照区分原料效应与炉管、石英安瓿或输运剂引入的污染。优先级 A−：工艺思想非常强，尤其适合低成本光伏或资源材料研究；但摘要信息不足以形成可执行的温程方案，必须拿到全文后再设计复现实验。</p>
      </section>

      <section className="analysis-standard"><p className="eyebrow">ANALYSIS STANDARD</p><h2>以后每篇论文怎样“详细读”</h2><div className="analysis-grid"><div><b>① 先还原问题</b><p>区分作者要验证的因果关系、用于排除替代解释的对照，以及论文真正新增的证据。</p></div><div><b>② 再拆生长窗口</b><p>逐项记录配比、纯度、助熔剂/输运剂、安瓿、气氛、温区、温程、时间、冷却、后处理、尺寸与收率；缺项明确写未报告。</p></div><div><b>③ 建立物性证据链</b><p>把结构和成分质量、测量几何、温度/磁场/压力范围、原始现象、拟合模型与结论逐层连接。</p></div><div><b>④ 给出可执行判断</b><p>说明创新、局限、替代解释、复现风险和下一批晶体最值得改变的参数，而不是复述摘要。</p></div></div></section>

      <section className="comparison" id="compare"><p className="eyebrow">COMPARISON</p><h2>本期方法对比</h2><div className="table-wrap"><table><thead><tr><th>材料</th><th>方法</th><th>关键窗口</th><th>主要物性</th><th>状态</th></tr></thead><tbody><tr><td>CrSb</td><td>I₂-CVT</td><td>925/900 °C · 14 d</td><td>g 波交错磁性</td><td>全文</td></tr><tr><td>NbSe₂</td><td>母晶未报告</td><td>六层暗腔器件</td><td>Tc +5.4%</td><td>摘要</td></tr><tr><td>GaSbTe</td><td>Flux</td><td>137 ppm 最佳点</td><td>高迁移率 / SdH</td><td>摘要</td></tr><tr><td>FeS₂</td><td>硫化 + CVT</td><td>正文未公开</td><td>低 n / 高 μ</td><td>摘要</td></tr></tbody></table></div></section>

      <section className="search-note" id="search"><p className="eyebrow">SEARCH LOG</p><h2>检索与去重</h2><p>检索日期：2026-08-28。优先搜索北京时间当天新上线论文；本期为规则调整前的初始归档，部分条目回溯最近 30 天。后续将严格执行“当天优先、无结果回溯三日”。数据库与站点包括 Nature、APS、arXiv、DOI 页面和作者单位官方页面。按 DOI、arXiv ID 与题目去重，本期无重复。</p></section>
    </article>
  </div>
</main>}

