// 由 scripts/build-search-index.mjs 自动生成，请勿手工编辑。
export default [
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "GdT₂X₂ 与候选 1144 层状 Gd 磁体",
    "title": "Magnetic frustration and non-collinear textures in layered Gd magnets",
    "authors": "Vladislav Borisov; Rohit Pathak; Sagar Sarkar; Anna Delin; Olle Eriksson",
    "journal": "arXiv · 2609.00141",
    "method": "DFT + LKAG 磁交换 + 原子自旋动力学",
    "rating": "A",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "磁性、拓扑与自旋",
    "tags": [
      "2609.00141",
      "Gd 磁体",
      "skyrmion",
      "RKKY",
      "1144"
    ],
    "readingGuide": {
      "priority": "A｜材料设计者和拓扑磁性实验组优先",
      "first": "先读方法中 RSPt→LKAG→UppASD 的参数传递，再看 GdRu₂Ge₂ 相图；不要先从候选 1144 的漂亮纹理图下结论。",
      "focus": "重点核查实验结构与优化结构导致交换变号的段落，这是模型可迁移性的关键限制。",
      "next": "若要做实验，最先验证的不是 skyrmion，而是候选相能否有序形成，以及实际内坐标和反位缺陷是否落在预测窗口内。"
    },
    "versionNote": "arXiv:2609.00141 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.00141",
    "fullText": "https://arxiv.org/pdf/2609.00141",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—热点—工作假设",
        "text": "GdRu₂Si₂ 的纳米尺度 skyrmion 已把中心对称稀土金属间化合物推到拓扑磁性前沿，但同构家族中究竟是交换挫折、偶极作用、单离子各向异性还是结构细节决定非共线相，仍缺少统一比较。作者没有只拟合一个已知材料，而是横向计算 GdRu₂Si₂、GdRu₂Ge₂、GdAu₂Si₂、GdAu₂Ge₂、GdAg₂Si₂ 和 GdAg₂Ge₂，再提出用 K/Rb/Cs/Y 对 Gd 层有序替换形成 1144 超结构。核心假设是：RKKY 型长程交换对费米面和原子坐标极敏感，层间距不对称又放大大磁矩 Gd 的偶极项，因此化学和层序可以重排 skyrmion 稳定区，而不必依赖强 Dzyaloshinskii–Moriya 相互作用。"
      },
      {
        "title": "样品—结构—生长边界",
        "text": "本文是预测研究，没有合成新晶体。输入结构来自已报道的四方 122 型 GdT₂X₂ 晶体；作者明确指出结构优化会使最近邻 Gd–Gd 交换变号，因此最终相图优先采用实验结构，而非把松弛结构当成唯一真值。候选 GdKRu₄Si₄、GdRbRu₄Si₄、GdCsRu₄Si₄ 和 GdYRu₄Si₄ 是借鉴 CaKFe₄As₄ 层序提出的有序 1144 相，并非已制得材料。原料纯度、配比、Flux/CVT、坩埚、气氛、温区、温程、时间、降温、分离、退火、晶体尺寸和产率均不适用/正文未报告；实验人员不能把“结构可能稳定”误读成已有生长窗口。"
      },
      {
        "title": "模型—计算链条—关键现象",
        "text": "电子结构用全势线性 muffin-tin 轨道 RSPt 计算，Gd 4f 采用 frozen-core 近似；随后用 LKAG 磁力定理提取 Heisenberg 与 DM 交换，并由不同自旋轴方向的本征值和评估在位各向异性。有效自旋模型还显式加入长程偶极项，以 UppASD 的 FFT 实现求和；最后解 Landau–Lifshitz–Gilbert 方程做退火和零温扫场，退火步长 1 ps、测量步长 2 ps。以 GdRu₂Ge₂ 为例，低场约 H≤4 T 出现皱褶自旋螺旋并与其他相竞争，随后出现多种非共线/拓扑纹理。直接输出是模拟自旋构型、磁化曲线和局域拓扑电荷；“skyrmion”归类依赖离散拓扑电荷计算，而不是仅凭图像外观。"
      },
      {
        "title": "证据评价—替代解释—局限",
        "text": "最强证据是同一第一性原理参数化流程跨六个化合物给出系统趋势，并在已知 GdRu₂Si₂/GdRu₂Ge₂ 上复现多相竞争；把偶极项开关纳入比较，也说明 7 μB 量级 Gd 磁矩和层间几何不能忽略。最弱环节是相图对晶格常数和 Si/Ge 内坐标异常敏感：作者自己展示了结构优化可改变交换符号，这意味着热膨胀、缺陷、占位和样品应变都可能让实物偏离零温模型。1144 的有序性、相稳定性和化学兼容性尚未由形成能凸包、声子和实验验证闭合；有限模拟胞也会偏好与边界相容的周期。"
      },
      {
        "title": "实验启示—可执行下一步",
        "text": "优先从已能长大 122 单晶的 Sn/In 自助熔剂或金属 Flux 路线出发，先做 GdRu₂(Si,Ge)₂ 连续固溶，建立实际晶格参数—WDS 成分—磁相图关系，再尝试等层替换；1144 候选应先算形成能、反位缺陷和声子稳定性。对每个批次至少做单晶 XRD 精修内坐标、Laue 定向、WDS 面扫、低场与高场磁化、Lorentz TEM/小角中子或共振 X 射线成像。扫场不应只取几个整数特斯拉点，低场 0–4 T 多相区要加密并做升降场和温度循环，以区分热力学相与亚稳态。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "含低频 vibron/TLS 的 s 波超导体",
    "title": "Subgap Bound States from Dynamical Impurities",
    "authors": "Joshuah T. Heath",
    "journal": "arXiv · 2609.00142",
    "method": "Nambu Green 函数 + T-matrix + LDOS 理论",
    "rating": "A-",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "高温与非常规超导",
    "tags": [
      "2609.00142",
      "动态缺陷",
      "亚隙态",
      "TLS",
      "T-matrix"
    ],
    "readingGuide": {
      "priority": "A-｜做隧穿谱或量子器件缺陷者优先",
      "first": "先看式(1)的束缚能量与 Fig.1 的谱学判据，再读非弹性散射部分，确认哪些结论只在 sub-THz 范围内成立。",
      "focus": "重点比较隙内成对峰、隙外谱重损失和空间衰减三件套；单一零偏峰并不能唯一识别 dynamical impurity。",
      "next": "把 STM/STS、非弹性隧穿谱和微波 TLS 损耗在同一区域联测，是比继续调一个静态杂质模型更有判别力的实验。"
    },
    "versionNote": "arXiv:2609.00142 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.00142",
    "fullText": "https://arxiv.org/pdf/2609.00142",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—概念突破",
        "text": "Anderson 定理说明普通静态非磁无序通常不在各向同性 s 波超导中产生 Yu–Shiba–Rusinov 型亚隙态，因此实验里看到亚隙峰常被当成磁杂质或非常规配对线索。本文追问被忽略的一类缺陷：若非磁缺陷自身是低频局域振动模或两能级系统，电子散射带有时间依赖，它还能否保持“无害”？作者给出的答案是否定的：单个 dynamical impurity 即可生成亚隙束缚态，并在隙外制造局域谱重损失。这直接影响 Nb/NbN 薄膜、非晶氧化层、约瑟夫森结和超导量子比特中的缺陷诊断。"
      },
      {
        "title": "模型—样品信息边界",
        "text": "工作为解析与数值理论，没有制备样品。作者把局域 vibron 写成电子—玻色子耦合 g²D(iωn−iωm)δr,0，并在 Nambu 空间用以 τ₀ 为主的动态散射势构造 T-matrix；均匀体系取 BCS s 波隙 Δhom。晶体成分、空间群、形态、Flux/CVT、原料、配比、气氛、温程、退火与尺寸均不适用。Nb 与 NbN 只用于量级映射：文中明确区分体 Nb 的 GL 相干长度、薄膜中因维度限制而缩短的相干长度和假设约 100 GHz vibron 的局域抑制尺度，并未报告新 Nb 样品。"
      },
      {
        "title": "直接结果—解析关系—数值鲁棒性",
        "text": "弹性散射极限给出闭式束缚态能量 ω*/Δhom=±[1−π²λV²]/[1+π²λV²]，λV 同时依赖 vibron 频率、谱宽与局域耦合；耦合增强时一对粒子—空穴对称峰由隙边向零能移动。作者再纳入 sub-THz 非弹性过程，发现束缚态的主要趋势仍在。LDOS 写成均匀项与 Ghom T Ghom 修正，空间包络 P(R) 决定谱异常从缺陷向外衰减。除隙内峰外，|ω|>Δhom 的相干峰附近出现谱重减少，因此实验上只寻找零偏压峰会漏掉动态缺陷的另一半指纹。"
      },
      {
        "title": "证据层级—风险",
        "text": "闭式解和完整 T-matrix 数值相互校验，是最强证据；粒子—空穴成对的能量移动、隙外谱重损失以及对 vibron 频率的系统依赖，为区别磁性 YSR、Andreev 态和静态势散射提供组合判据。弱点在于单杂质、局域模、近似电子结构和简化耦合谱；真实非晶界面有宽 TLS 分布、杂质间干涉、库仑作用与非平衡驱动。文中从单缺陷 LDOS 延伸到高缺陷密度时的全局隙抑制属于物理推断，尚未由自洽多杂质无序平均或实验证实。"
      },
      {
        "title": "测量建议",
        "text": "在 Nb、NbN 或 AlOx/金属界面上做 STM/STS 时，应同步测温度、微波频率与功率依赖：若峰随局域振动能标移动，并伴随隙外相干峰谱重减少，才更支持动态非磁缺陷。建议以同一区域的非弹性隧穿谱定位 vibron，再在亚隙谱中做空间线扫，提取衰减长度与薄膜相干长度比较。还要用磁场分裂、磁性探针和自旋极化对照排除常规 YSR；对量子比特材料，把 TLS 损耗谱和低温隧穿谱映射到同一器件区域。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "Cr₂O₃ 单晶",
    "title": "Magnetic quantum defects in a uniaxial antiferromagnetic insulator",
    "authors": "Shangfei Wu; Laur Peedu; Zhihao Wang; Xuecong Wang; Xianghan Xu; Kai Du; Sang-Wook Cheong; Aleksei Boldin; Joosep Link; Ivo Heinmaa; Raivo Stern; Sai Mu; Urmas Nagel; Toomas Rõõm; Girsh Blumberg",
    "journal": "arXiv · 2609.00801",
    "method": "浮区/Verneuil 单晶 + Raman + THz + HSE 缺陷计算",
    "rating": "A+",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "晶体生长和物性调控",
    "tags": [
      "2609.00801",
      "Cr2O3",
      "浮区",
      "Verneuil",
      "量子缺陷",
      "Raman",
      "THz"
    ],
    "readingGuide": {
      "priority": "A+｜本期晶体与缺陷调控首读",
      "first": "先对照两批晶体的磁化与 THz E1 强度，再读 HSE 缺陷超胞；这比直接看场致软化更能确认空位归因。",
      "focus": "重点区分直接观察的 64→27 cm⁻¹ 软化、样品间 100 倍强度差，与模型推断的 Cr split-vacancy 局域自旋翻转。",
      "next": "下一炉最有价值的是做可定量的空位梯度和绝对缺陷计量，而不是只追求更强 E1 峰。"
    },
    "versionNote": "arXiv:2609.00801 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.00801",
    "fullText": "https://arxiv.org/pdf/2609.00801",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—样品对照逻辑",
        "text": "点缺陷常被当作降低晶体质量的因素，但可控局域自旋又是量子传感和量子信息的资源。Cr₂O₃ 是 R-3c（No.167）刚玉结构、TN≈307.5 K 的单轴反铁磁与线性磁电材料，作者问其中 Cr 空位能否形成可光谱读出的局域磁激发。关键设计不是只测一块样品：Rutgers 浮区晶体低温磁化有缺陷相关上翘，而 PI-KEM Verneuil 晶体自旋翻转更尖锐、上翘缺失；两批样品成为天然的高/低空位对照。若额外模强度随缺陷指标同时变化，便能排除普通体声子或均匀 magnon 的解释。"
      },
      {
        "title": "生长—加工—质量表征",
        "text": "Rutgers 样品由浮区法生长，当前论文把详细炉参数引至 Ref.42；原料纯度、棒材烧结、气氛、拉速、转速和产率在正文未报告。(001) 面用 1 μm Buehler lapping film 抛光，并用 Nomarski 图像挑选无明显应变区。第二块为 PI-KEM 商购 (100) 抛光晶体，采用 Verneuil 法；其原料和火焰生长参数同样未给。两者在 H=100 Oe、H∥c 的磁化率中均给出 TN≈307.5 K；Rutgers 样品 20 K 以下上翘、spin-flop 展宽，而 PI-KEM 更尖锐。尖锐 Raman 线和低残余背景支持光学质量，但空位浓度没有用 ICP/EPR/PAS 做绝对定量，这是质量证据链的缺口。"
      },
      {
        "title": "测量条件—关键数据",
        "text": "Raman 主实验用 647.1 nm Kr+ 激光，沿 c 轴准背散射，光斑约 50×100 μm²、入射约 10 mW；连续氦流低温台、三级光谱仪和液氮冷 CCD，8–700 cm⁻¹ 分辨率优于 1.5 cm⁻¹、低于 8 cm⁻¹ 时优于 0.5 cm⁻¹，并修正激光加热和 Bose 因子。18 K 在交叉圆偏振通道出现 E1=64、E2=115 cm⁻¹；3 K THz 又看到 E3≈150 cm⁻¹。THz 用 SPS200 Martin–Puplett、0.3 K bolometer 和 17 T 磁体；Rutgers 片 3.5×3.5×0.85 mm³，PI-KEM 片 5×3×1.1 mm³。E1 在低缺陷 PI-KEM 中弱约 100 倍；H∥c 接近 HSF≈6.2 T 时从 64 软化到 27 cm⁻¹。"
      },
      {
        "title": "计算归因—证据强弱",
        "text": "HSE 计算用 VASP、PAW、520 eV 截断；10 原子菱方原胞 3×3×3 Γ 网格，HSE 混合参数 0.20、screening 0.3，得到 3.45 eV 带隙；缺陷采用 2×2×1、120 原子超胞，力收敛至 0.01 eV/Å，并用 PHONOPY 有限位移。Cr split-vacancy 附近局域矩约 2.7 μB，局域自旋翻转量级约 15 meV，与 64 cm⁻¹ 模同量级。最强证据是两种生长法样品中 E1 强度相差约两数量级且与独立磁化缺陷指标一致，再加场致软化和缺陷超胞能标吻合。最弱环节是“spin-flop 展宽∝Cr 空位量”的单调关系未绝对标定，杂质/应变也可能贡献；理论能标一致不等于唯一微观结构。"
      },
      {
        "title": "复现与调控建议",
        "text": "复现应保留两条路线：先用浮区生长变量（氧分压、拉速、后退火）制备空位梯度，再用低缺陷 Verneuil/商购样作基线。每块样品必须绑定热历史、面向、厚度、磁化率低温上翘、HSF 宽度和 E1 积分强度；增加 EPR、正电子湮没或 STEM-EELS/化学计量测量以校准空位浓度。Raman 光功率要做线性外推，避免局部升温伪造软化；在 5–7 T 加密场点并同时记录上/下扫。若面向量子缺陷，还需测 T1/T2、单缺陷可寻址性和光稳定性；当前工作证明的是集体光谱可见的缺陷模，而非已实现单量子比特。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "Co₂FeGe/Cr(W)/MgO(001) 薄膜",
    "title": "Independent Tuning of Surface Acoustic-Waves and Spin-Waves via Buffer-Layer Engineering in Co₂FeGe Heusler Thin Films",
    "authors": "A. V. Achuthan; A. Vovk; S. Bunyaev; B. Postolnyi; P. Štrichovanec; P. A. Algarabel; K. Załęski; J. P. Araujo; G. N. Kakazei; A. Trzaskowska",
    "journal": "arXiv · 2609.00864",
    "method": "DC 共溅射 + 缓冲层工程 + BLS/FMR/FEM",
    "rating": "A",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "晶体生长和物性调控",
    "tags": [
      "2609.00864",
      "Co2FeGe",
      "溅射",
      "缓冲层",
      "BLS",
      "FMR"
    ],
    "readingGuide": {
      "priority": "A｜做薄膜生长、BLS 或磁声器件者",
      "first": "先读 Sample preparation 的速率与压强，再把 Table 3 群速度和 Fig.8/9 声学色散并排看。",
      "focus": "真正有辨识力的是‘W/Cr 声学差异很大、磁群速度却相近’；这支持不同界面机制，但没有证明 magnon–phonon 强耦合。",
      "next": "下一步做缓冲层厚度矩阵与反交叉实验，比再增加一种缓冲材料更能闭合机制。"
    },
    "versionNote": "arXiv:2609.00864 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.00864",
    "fullText": "https://arxiv.org/pdf/2609.00864",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—样品矩阵",
        "text": "混合 magnon–phonon 器件希望声波和自旋波既能耦合又可分别调谐，但单纯改磁性层成分往往同时改变弹性和磁交换。作者固定 50 nm Co₂FeGe/MgO(001)，只改变界面为无缓冲 S1、15 nm Cr 缓冲 S2、15 nm W 缓冲 S3，通过同一批结构、静磁、BLS、VNA-FMR 和有限元比较，检验缓冲层是否能把声学质量加载与磁边界条件分开。Cr 与 W 密度/声阻抗不同，却都能改变界面有序与钉扎；这组对照比只比较有无缓冲层更能区分机制。"
      },
      {
        "title": "制备参数",
        "text": "Co₂FeGe 在 10×10 mm² MgO(001) 上用 Orion-5 DC 磁控共溅射。Co₂Fe 合金靶和 Ge 靶纯度均优于 99.995 at.%；基压低于 2×10⁻⁷ Torr，工作气为 3 mTorr Ar。标定速率为 Co₂Fe 0.05 nm/s、Ge 0.032 nm/s，以得到化学计量 50 nm 膜。Cr/W 靶纯度同样>99.995%，15 nm 缓冲层速率分别 0.043/0.05 nm/s。基片 293 K、30 rpm 旋转、靶距 120 mm。正文未见后退火、基片预处理细节、Ar 纯度、实际成分误差与产率；这些参数决定 L2₁/B2 有序度，应在复现中补齐。"
      },
      {
        "title": "结构—磁性—动力学测量",
        "text": "GIXRD 与 XRR 使用 Rigaku SmartLab、Cu Kα/Ge 单色器，XRR 用 LEPTOS 拟合膜厚、表面氧化层和界面粗糙度；静磁在 MPMS-XL SQUID、室温 ±10 kOe。BLS 同时分辨 Rayleigh/Sezawa SAW、Damon–Eshbach 与 PSSW 模；VNA-FMR 独立约束有效磁化、阻尼和交换参数，FEM 用层状弹性常数重建声子色散。在 q=13.1 μm⁻¹ 附近，W 缓冲使 Rayleigh 频率相对 S1 降约16%，Cr 仅约3%；而 DE 自旋波群速度从 S1 的1534±126 m/s 增至 S2 2055±120、S3 2073±135 m/s，约提升34%。"
      },
      {
        "title": "证据评价",
        "text": "声学色散实验与 FEM 的一致性、以及 W 与 Cr 的强弱顺序，支持质量加载、弹性常数和声阻抗共同控制 SAW；两种缓冲层自旋波群速度却在误差内近似相同，说明磁响应不是声学频移的简单副产物，更可能来自交换刚度、界面各向异性和自旋钉扎。最强证据是三样品在同一测量平台上的正交趋势。局限是没有观察 magnon–phonon 反交叉，也未提取耦合常数；作者明确不能从现有数据隔离 W 自旋轨道效应。薄膜化学有序度、应变、粗糙度和成分若同时变化，也可能产生协变量，所谓“独立调谐”是工程近似而非完全独立。"
      },
      {
        "title": "复现与器件建议",
        "text": "复制时按 S1/S2/S3 同炉交错排片，加入 5/10/15/20 nm 缓冲厚度矩阵，并用截面 TEM、XRR、倒易空间图和定量 EDS/WDS 分离粗糙度、应变与成分。BLS 应给相同 q 区间和入射几何，FMR 同时测角度与频率；如要证明耦合，需要让 SAW 与 DE/PSSW 可控交叉、解析反交叉间隙并做线宽/功率依赖。器件设计上，W 适合大幅降低声速、Cr 可作为较弱声学扰动；但两者的阻尼、自旋泵浦和热稳定性尚需先测，不能只按群速度选层。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "YMn₆Sn₆ 及 RMn₆Sn₆ 单晶",
    "title": "Large Exchange Magnetostriction in a Kagome Antiferromagnet at Room Temperature",
    "authors": "Jie Du; Liang Yao; Hang Li; Xiaodong Zhou; Yuan Yao; Xuekui Xi; Yong-Chang Lau; Wenhong Wang",
    "journal": "arXiv · 2609.00887",
    "method": "Sn Flux 单晶 + 磁致伸缩 + PPMS + DFT",
    "rating": "A+",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "晶体生长和物性调控",
    "tags": [
      "2609.00887",
      "YMn6Sn6",
      "Sn Flux",
      "kagome",
      "磁致伸缩"
    ],
    "readingGuide": {
      "priority": "A+｜Flux 生长与功能磁性本期首读",
      "first": "先抄清 Experimental section 的四种 RMn₆Sn₆ 温程，再读应变片/电容膨胀计交叉验证。",
      "focus": "把低温 −1200 ppm、室温>400 ppm 与磁相边界逐一对应；不要把体应变峰值单独当成器件性能。",
      "next": "最有价值的复现是同炉多晶体批次统计加原位高场衍射，验证交换重构和晶格变形是否同步、可循环。"
    },
    "versionNote": "arXiv:2609.00887 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.00887",
    "fullText": "https://arxiv.org/pdf/2609.00887",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—材料选择",
        "text": "传统 Terfenol-D/Galfenol 的大磁致伸缩依靠自旋轨道各向异性和畴壁运动，往往伴随滞后、损耗或脆性。作者选择 P6/mmm（No.191）kagome helimagnet YMn₆Sn₆：Mn kagome 层内铁磁、层间交换竞争形成非共线螺旋，外场可把自旋纹理连续重构为近共线态。假设是交换作用随晶格间距的能量变化可产生远大于常规 SOC 旋转的体积应变，同时避免强畴壁钉扎。Sc/Y/Er/Tm 同系单晶提供化学压力和磁稀土对照，Y 化合物则隔离 4f 磁矩。"
      },
      {
        "title": "Sn Flux 生长窗口",
        "text": "RMn₆Sn₆ 使用 R:Mn:Sn=1:6:20；R、Mn 颗粒 99.9%，Sn 99.999%，装氧化铝坩埚后封入<5×10⁻⁴ Pa 真空石英管。YMn₆Sn₆ 升至1175 °C保温1 d，再以6 °C/h降至600 °C，倒置离心去 Sn。对照 Sc/Er/Tm 峰值分别1000/1100/1000 °C、均保温1 d，降温速率2/3.5/2 °C/h至600 °C后离心。升温速率、装料总质量、坩埚盖形式、600 °C 离心转速、酸洗/后退火和产率正文未报告。Y 晶体为六方棱柱/片状，代表尺寸图中可见但正文未给毫米标尺，因此不估算尺寸。"
      },
      {
        "title": "结构质量与测量几何",
        "text": "单晶表面 XRD 只有尖锐(00l)，说明 c 轴垂直六方表面；Laue 定出面内[100]。a=b=5.51 Å、c=8.98 Å；HAADF-STEM 沿 ab 与 ac 方向和模型一致，EDS 面扫未见 Y/Mn/Sn 偏析。磁化由 PPMS-9T 在室温对 H∥[100]/[120]/[001] 做9→−9→9 T，基面为易磁化面且滞后很小；低温沿[100]/[001]构建相图。磁致伸缩同时用电阻应变片与电容膨胀计交叉验证，室温改变场与测量方向，150–300 K 以应变片为主、更低温用膨胀计。两技术温度趋势一致，是避免胶层或几何伪差的重要对照。"
      },
      {
        "title": "关键数据—微观归因",
        "text": "室温到9 T 仍观察各向异性线应变和超过400 ppm 的体磁致伸缩，升降场近乎重合；低温体积收缩可达约−1200 ppm，随温度升高减弱。磁化相图把应变斜率变化对应到螺旋、扇形/倾斜和场极化区。DFT 分别计算刚性 AFM 自旋在 SOC 下旋转（SOC-ME）和改变层间相对自旋角（Exchange-ME），后者产生更大的、方向选择性的晶格响应，支持交换竞争主导。直接观察是应变和磁相变同步；“交换驱动”依赖 DFT 能量分解与模型态映射。可能替代解释包括 Sn 残留、应变片横向灵敏度和磁热效应，但双方法、方向矩阵与近无滞后降低了这些风险。"
      },
      {
        "title": "局限—生长与测量建议",
        "text": "结构证据精细，但成分只展示局部 EDS，尚缺跨晶体 WDS/ICP、Sn 包裹体统计和批次误差；大体积应变是否可循环百万次、在高频下是否仍低损耗也未回答。建议按1:6:20基线做 Sn 过量与降温速率小矩阵，离心后称重并用显微 CT/SEM 搜索残留 Sn；同炉每块绑定 Laue、WDS、磁相图和伸缩曲线。机制测试可用原位高场单晶 XRD/中子衍射直接看晶格与螺旋波矢同步，做磁热校正、应变片空白、不同胶层及频率/循环寿命。器件评价还要报告杨氏模量、输出功和磁场能耗。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "远过掺杂 Tl₂Ba₂CuO₆ (Tl2201) 单晶",
    "title": "Robust thermodynamics constrain disorder and pairing in far-overdoped Tl₂Ba₂CuO₆",
    "authors": "Ayanesh Maiti; David M. Broun; Seunghyun Khim; Michal Moravec; Antony Carrington; Carsten Putzke; Vivek Mishra; Peter Hirschfeld; Andrew P. Mackenzie; Andreas W. Rost",
    "journal": "arXiv · 2609.01213",
    "method": "自助熔剂单晶 + O₂ 退火 + μg AC 纳米量热",
    "rating": "A+",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "高温与非常规超导",
    "tags": [
      "2609.01213",
      "Tl2201",
      "self-flux",
      "铜氧化物",
      "纳米量热"
    ],
    "readingGuide": {
      "priority": "A+｜高温超导热力学本期首读",
      "first": "先读 Fig.1 的纳米量热校准链，再看 Tc=14–25 K 的异常；背景扣除比最终拟合曲线更值得花时间。",
      "focus": "区分‘无序不是 Tc 下降的主要驱动力’与‘无序完全无影响’；后一句并未被论文证明。",
      "next": "实验上应把同一母晶的退火压力、γ残余、输运散射率和量子振荡放在一条 p 轴上，检验配对减弱是否一致。"
    },
    "versionNote": "arXiv:2609.01213 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.01213",
    "fullText": "https://arxiv.org/pdf/2609.01213",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "科学问题—对照思路",
        "text": "过掺杂铜氧化物的 Tc 为何下降，有两类解释：配对相互作用本身随 p 变弱，或无序/掺杂不均匀作为 pair breaker 逐渐摧毁 d 波超导。Tl2201 层间距约11.7 Å，阳离子无序远离 CuO₂ 面，高质量晶体平均自由程约500 Å并有清晰量子振荡，是分离两者的好平台。作者不只看电阻零点，而测 μg 级单晶的体热力学异常，并把已知大准二维费米面、d 波隙和阳离子散射放入弱耦合 BCS 类计算；若无序主导，远过掺杂端应出现大残余 γ 和严重展宽，而数据并非如此。"
      },
      {
        "title": "晶体与氧退火",
        "text": "单晶按 Refs.14,23–25 的 self-flux 路线制备；当前稿没有重印起始 Tl/Ba/Cu 配比、坩埚封装、峰温、降温速率和晶体分离条件，所以这些逐项记为正文未报告。氧含量/空穴浓度由退火调节：450 °C、14–18 h，在0.001–1 bar选定静态 O₂ 压力中处理。样品 Tc 覆盖14–45 K，磁化率转变单一且宽度约1 K；进入量热的单晶通常1–10 μg。这个热处理窗口是可执行信息，但氧分压与每块晶体 Tc/p 的完整对应表、冷却方式和退火前后质量变化没有在主文逐块列出。"
      },
      {
        "title": "量热方法—校准链",
        "text": "XENSOR XEN-39398 芯片在 Si₀.₉N 膜上集成 poly-Si heater 和六结 thermopile，中心有 poly-Si 均温层；典型2 μg晶体以约2–4 ng Apiezon N grease 固定，低频 AC、准绝热准静态测量并扣除 addenda。由于 thermopile 无厂家绝对标定，作者用已知质量高纯 Ag/NIST 比热标定，再用 Sr₂RuO₄、Au、Pb、NbSe₂、YBa₂Cu₃O₆.₆₇ 验证；2–2000 μg 范围热质量和体积质量在5%内，4.2 μg Tl2201 在10–100 K与2 g粉末数据相差1–2%。超导异常不足总比热1%，因此用 Tc 以上四阶多项式外推5–10 K扣声子背景，并以高场抑制超导数据核验。"
      },
      {
        "title": "结果—模型—证据边界",
        "text": "Tc=14–25 K 的远过掺杂晶体仍有尖锐异常，归一化跳变 Δγ(Tc)/γn≈0.6，随掺杂变化弱，而非先前多晶结果所暗示的大残余电子比热。模型把实测费米面和阳离子 disorder 带入弱耦合 d 波 BCS，能定量重现异常幅值/形状；由此作者排除“随 p 增长的无序是 Tc(p) 主要驱动力”，更支持配对强度平滑下降。直接数据是校准后的 C(T) 和磁化转变；电子 γ 的提取依赖不到1%的背景相减，多项式外推是主要系统误差。模型成功约束无序上限，却不能唯一确定配对胶水，更不能把弱耦合拟合等同于铜氧化物微观机制被解决。"
      },
      {
        "title": "复现与后续",
        "text": "生长组应完整恢复引用文献中的 self-flux 细节，并给每个微晶建立母晶编号、退火 O₂ 压力、温程、冷却、Tc、质量/尺寸和残余电阻映射；同一母晶切片做 WDS、XRD、磁化与量热，避免把批次差当掺杂趋势。量热上优先做空芯片、胶量系列、频率扫描和高场背景；异常小于总 C 的1%，任何膜片标定漂移都会成为主误差。物理上可把 γ残余、穿透深度、热导和量子振荡散射率在同一 p 轴比较；若配对强度下降是主因，应看到与 gap scale 一致的连续演化，而非只在 Tc 附近变化。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "双层 CrSBr/纳米压痕 SiO₂",
    "title": "Geometry-Controlled Magnetic and Electronic Landscapes in Anisotropic van der Waals Materials",
    "authors": "Maciej Śmiertka; Ewelina Cybula; Oliwia Janikowska; Bartosz Hołyński; Gayatri; Grzegorz Krasucki; Mariusz Hasiak; Kseniia Mosina; Zdenek Sofer; Adam Babiński; Maciej R. Molas; Paulina Plochocka; Michał Baranowski",
    "journal": "arXiv · 2609.01223",
    "method": "CrSBr 单晶剥离 + 纳米压痕几何调控 + AFM/PL",
    "rating": "A",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "二维材料与量子器件",
    "tags": [
      "2609.01223",
      "CrSBr",
      "二维磁体",
      "纳米压痕",
      "激子"
    ],
    "readingGuide": {
      "priority": "A｜二维器件和局域物性调控优先",
      "first": "先看 AFM 倾角图与 0–2 T 空间 PL 序列，再读 Methods 的压痕和干转移；核心是几何—场投影—相变三者对应。",
      "focus": "把突变磁红移与可能的连续应变红移分开；作者的空间关联很强，但还没有直接磁成像。",
      "next": "下一批器件应做坑深/方位角阵列并加 Raman 应变计和局域磁探针，检验 geometronics 是否可预测复制。"
    },
    "versionNote": "arXiv:2609.01223 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.01223",
    "fullText": "https://arxiv.org/pdf/2609.01223",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "概念—科学问题",
        "text": "二维材料通常靠化学掺杂、应变、栅压或异质结改变能带；作者提出 geometronics：让各向异性晶体贴合三维基底，空间变化的局部晶轴把均匀外场投影成位置依赖扰动。CrSBr 是层间反铁磁、面内各向异性强的半导体，双层跨在倒金字塔压痕上时，不同位置的 b/c 轴相对外磁场方向不同，因而同一连续晶片可同时跨越 AFM→FM 阈值。该思路的优势是不用刻蚀或局域栅极就写入可重构磁/激子势阱。"
      },
      {
        "title": "样品来源与器件制备",
        "text": "CrSBr 单晶按 Ref.29 合成，当前稿只写“following the procedure”，没有重印原料配比、输运剂、CVT 温区、时间、安瓿和晶体尺寸，故不可从本稿宣称具体 CVT 配方。双层由蓝色 Nitto tape 机械剥离至 PDMS/Gel-Pak，在光学显微镜下确认后用全干 viscoelastic stamping 定位转移。基底为285 nm SiO₂/Si；NHT2 Vickers nanoindenter 配三棱 Berkovich tip 制作倒金字塔阵列，单坑横向4.8 μm、深320 nm。AFM 截面显示双层大体贴合轮廓而非悬桥；转移速度、环境水氧、最终气泡/褶皱统计正文未报告。"
      },
      {
        "title": "测量与直接观察",
        "text": "空间分辨低温 PL 在约10 K下沿晶体 b 轴扫线，外场沿平坦区 c 轴取0、0.7、1.0、1.2、2.0 T；AFM 20×20 μm²、2048像素用于重建局部倾角。斜面区激子随场红移约13–15 meV，符合层间转到 FM 后杂化增强；平坦区只移约6 meV，仍是部分倾斜 AFM。局部相变约在外场0.8 T出现，与 AFM/FM 本征临界场约0.15 T及实测倾角投影定量一致。空间 PL 地图直接显示斜面内形成约10–12 meV可开关势阱，而同一连续片的平坦区保持不同磁态，显著降低材料批次/厚度差异的干扰。"
      },
      {
        "title": "证据链与局限",
        "text": "最强证据是 AFM 地形给出的局部角度、磁场投影预测的相变位置和 PL 跃迁在空间上三者一致，并随场可逆演化；作者还把全部数据存入 Zenodo DOI 10.5281/zenodo.22226777，利于复核。PL 红移是电子层间杂化的代理量，磁态归属仍建立在既有 CrSBr 光谱标定和各向异性模型上，并非同一点直接磁成像。局部弯曲同时产生应变和介电环境变化，可能贡献连续能移；突变和角度阈值支持磁转变，但要唯一分离需 Raman 应变计、MOKE/NV 磁成像或偏振反射联合。单器件展示还不足以证明坑形与转移的批次可重复性。"
      },
      {
        "title": "复现建议",
        "text": "先把晶体合成与器件两段分开验证：单晶要补充 Ref.29 的 CVT 配方并记录批次、厚度和退化；器件先在裸基底标定每个坑深/倾角，再转移双层，AFM 检查是否贴合。做不同深宽比和方位角矩阵，使 b 轴分别平行/垂直坑棱；同一位置测 PL、Raman、反射磁圆二色或扫描 NV，才能区分应变、介电和磁态。场扫描要包含升降场与温度跨 TN，若势阱来自磁投影，温度超过磁有序后应消失。器件应用还需测激子扩散/俘获寿命和反复弯曲稳定性。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "单层 NbSe₂/TaS₂/MoS₂ 类 Ising 超导体",
    "title": "Superconducting diode effect from field-induced s+if pairing in Ising superconductors",
    "authors": "Alex Levchenko; Maxim Khodas",
    "journal": "arXiv · 2609.01476",
    "method": "微观 Ising 超导模型 + 双组分 Ginzburg–Landau 理论",
    "rating": "A",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "高温与非常规超导",
    "tags": [
      "2609.01476",
      "Ising 超导",
      "s+if",
      "二极管效应",
      "triplet"
    ],
    "readingGuide": {
      "priority": "A｜Ising 超导与非互易输运研究者",
      "first": "先读对称性部分：为什么 D3h 禁止、C3v 允许；再看弱场相消和强场延伸的相图。",
      "focus": "不要只盯 Lifshitz invariant；作者强调二极管效率由更高阶奇动量系数组合和抵消决定。",
      "next": "实验最强检验是上下介质对称对照加 B/j 角度反转，再寻找弱场抑制—强场延伸的非单调指纹。"
    },
    "versionNote": "arXiv:2609.01476 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.01476",
    "fullText": "https://arxiv.org/pdf/2609.01476",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—热点",
        "text": "Ising SOC 把自旋锁在面外，使单层 NbSe₂、TaS₂ 和栅控 MoS₂ 的面内临界场可远超 Pauli 极限。相同的自旋纹理在面内 Zeeman 场下又会诱导等自旋 triplet 分量。作者问这个隐藏的 s+if 混合态是否能产生内禀 superconducting diode effect，并能否用非互易临界电流反推吸引性 triplet 通道。其关键区别是：常规 Rashba/宇称混合机制受 SOC/EF 小比值限制，而这里响应由 Zeeman/Ising-SOC 对自旋纹理的可变形程度控制，原则上更大。"
      },
      {
        "title": "对称性与模型设计",
        "text": "研究是纯理论，无新晶体或器件。作者从 D3h 单层出发：仅破反演还不够，水平镜面 σh 与时间反演组合会禁止面内场下的 Lifshitz invariant；基底或栅极把 D3h 降到 C3v、引入弱 Rashba 分量后，允许 z·(B×q) 奇动量项。构造 singlet ψ 与场诱导 triplet ηc 的二分量 GL 泛函，所有二次、梯度和四次系数从同一微观 pair-breaking 函数推导。材料厚度、载流子密度、栅压和无序未对应到某一具体样品，因此结论给出机制趋势，不是器件数值预报。"
      },
      {
        "title": "关键推导—非互易机制",
        "text": "面内 Zeeman 与 Ising SOC 把 singlet 转为等自旋 triplet，吸引性 triplet 通道使其形成相位差π/2的 s+if。镜面破缺时，triplet 与 Cooper pair 动量线性耦合，GL 自由能出现奇 q 项；但论文指出只有 Lifshitz 一阶项并不自动保证强二极管效应，临界电流非对称由更高阶 α3、β1 等组合决定，且自由费米子系数存在抵消。弱场中直接转换与集体模路径相消，所以吸引 triplet 反而压低效率；强场接近 triplet 增强相边界时，s-only 相已失稳而混合态仍存在，二极管窗口和峰值效率被扩展。"
      },
      {
        "title": "证据边界",
        "text": "最强之处是从微观 Hamiltonian 到双组分 GL 的系数逐项闭合，并用对称性说明何时奇 q 项严格为零；弱/强场相反趋势提供可检验指纹，而不是只声称“triplet 会增强二极管”。但计算处于接近相边界的 GL 控制区，真实器件的涡旋进入、边缘势垒、热效应、结不对称和电流分布也会产生非互易，可能淹没内禀信号。基底/栅极既破镜面对称又改载流子密度与无序，实验需解耦。观察到 diode effect 只能支持对称性允许，不能单独证明 s+if；需要相位敏感或谱学证据。"
      },
      {
        "title": "实验路线",
        "text": "选择可双栅调控的单层 NbSe₂ 或 gated MoS₂，做上下介质对称器件作为 σh 近似恢复对照，再逐步施加垂直电场破镜面；面内 B 旋转应给 z·(B×j) 规定的角依赖。测 Ic+、Ic− 时同步交换电流端、翻转 B 和旋转样品，排除接触/热梯度；在窄条宽度和不同边缘质量下检查涡旋贡献。寻找本文最独特的非单调性：弱场 triplet 通道使效率受抑、强场二极管窗口延伸。再用隧穿谱、Knight shift 或 Josephson 相位干涉检验 s+if，避免把输运单一现象过度归因。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "InAs/InGaAs–六种超导金属混合结构",
    "title": "Understanding the superconducting proximity effect in semiconductors through quantum oscillations",
    "authors": "Milo Coombs; Teun A. J. van Schijndel; Yu Wu; Jason T. Dong; Yilmaz Gul; Julian Choi; Christopher J. Palmstrøm; Greg P. Mazur",
    "journal": "arXiv · 2609.01593",
    "method": "MBE 异质结 + 7 K 金属沉积 + SdH/Dingle/自旋零点",
    "rating": "A+",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "二维材料与量子器件",
    "tags": [
      "2609.01593",
      "InAs",
      "MBE",
      "超导近邻效应",
      "量子振荡"
    ],
    "readingGuide": {
      "priority": "A+｜超导半导体器件本期必读",
      "first": "先读 Fig.2 的频率分支和 shunt-aware Dingle 推导，再读 Fig.3 的自旋零点/诱导隙上限。",
      "focus": "区分直接测得的频率、质量、寿命区间，与由寿命差推得的 Γ/Δind 上限；后者不是耦合常数的点估计。",
      "next": "设计器件时先把新增界面亚带放进静电模型；实验上用同片隧穿谱与量子振荡闭合 Z、g 和诱导隙。"
    },
    "versionNote": "arXiv:2609.01593 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.01593",
    "fullText": "https://arxiv.org/pdf/2609.01593",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—实验策略",
        "text": "超导金属把半导体输运强烈分流，导致杂化器件最关键的正常态密度、有效质量、g 因子和量子寿命长期靠猜；隧穿只给重整化后的诱导隙和亚隙 g。作者把 InAs 量子阱埋在金属下方，通过金属本身无 Landau 振荡而半导体有 SdH 的频率选择性，在完整 Al、Sn、V、Nb、Ta、Re 覆盖结构中直接读出半导体。两块无覆盖参照 B1/B2 与六种金属/厚度系列构成对照，修正电阻张量中的并联 shunt 后才做 Dingle，而不是把振幅衰减直接当寿命。"
      },
      {
        "title": "外延与金属沉积",
        "text": "量子阱由 MBE 生长并以 As cap 保护；在 UHV 原子氢环境脱帽。结构含7 nm In₀.₇₅Ga₀.₂₅As 量子阱/埋藏 InAs well 与上方 InGaAs barrier；完整层厚细节应结合 Fig.1/补充材料。Al、Sn、V、Nb、Ta、Re 都以分子束蒸发在基片7 K时沉积，以冻结互扩散；Ta/Nb/Re 使用电子束源，Al/Sn/V 用 effusion cell。除 Al 外，金属后覆名义2.5 nm Al并低温原位氧化，再升到室温，使 cap 不作为有源超导层。横截面电镜显示界面陡峭无明显反应层。不同膜厚含 Al 2.3 nm、Nb 2 nm、Ta/Sn约5 nm及 Re 1/3/6 nm系列；生长速率与 UHV 压强正文片段未给。"
      },
      {
        "title": "测量—直接结果",
        "text": "未图形化晶片采用共线探针四端测量，最低正常态温度按各金属临界场/温区选择。参照阱只有 F≈5.2 T，对应 n=2.5×10¹¹ cm⁻²；加金属后该支保持约5 T，同时新增二维界面支：Ta/Nb/V/Re 为11.0–13.4 T、n=(5.3–6.5)×10¹¹ cm⁻²，Al/Sn 为25–27 T、n=(1.2–1.3)×10¹² cm⁻²。所有界面支随倾角按 F(0)/cosθ，排除金属体态；Re 厚度从6/3到1 nm时界面频率11.0/13.4→18.3 T，而深阱不动，定位到界面数纳米。Lifshitz–Kosevich 给出的阱质量和自旋零点在各膜下10%内不变。"
      },
      {
        "title": "Dingle 修正—耦合上限",
        "text": "金属使片电阻降低1–3个数量级，常规 ln(A sinhX/X) 对1/B直线会误判；作者推导带 shunt、有限 transport mobility 的振幅包络，解释非单调振幅。约束 τt/τq≤2 后，没有金属缩短深阱量子寿命，Al/Sn 反而延长，可能来自屏蔽远程无序。界面亚带的 Γ上限约1.9–3.2 meV；用覆盖与参照寿命差给深阱 ΓQW≤0.18 meV(Al)、0.28(V)、0.31(Nb)、0.5–0.6(Ta/Re)，对应诱导隙上限约0.3–0.8 Δ0；Sn 因寿命改善使差分假设失效。所谓2–4 meV杂化是量子寿命给出的上限而非直接测得耦合；若金属同时降低原无序，真实逃逸率会被抵消。"
      },
      {
        "title": "意义—复现与器件建议",
        "text": "最强证据是同一量子阱支在十个样品中稳定、额外支二维角依赖和 Re 厚度响应共同定位界面态；质量/g近似不变又约束了许多过度杂化模型。弱点是不同金属的应力、功函数、轨道成分和界面化学共变，sp 与 d 金属两类占据不能唯一归因。复现应同一 wafer 分片、同批脱帽，记录7 K实际表面温度、金属厚度/结晶相与 cap 氧化；加 Hall bar/Corbino 几何和独立 mobility 测量缩小 τt 区间。器件建模必须至少含深阱与金属诱导界面两亚带；若要奇数通道，先计算耗尽25–27 T高密度支所需栅压。把量子振荡与同片隧穿谱联合才能反演 Z、Δind 和正常态 g。"
      }
    ]
  },
  {
    "date": "2026-09-03",
    "issue": "009",
    "headline": "从可复现生长到可判别证据：空位、缓冲层、几何与样品尺寸都进入物性结论",
    "material": "有限尺寸二维超导圆盘",
    "title": "Singular Weak-Field Thermodynamics of 2D Superconductors",
    "authors": "Guopeng Xu; Chunli Huang",
    "journal": "arXiv · 2609.01602",
    "method": "Landau-level 微观模型 + 2D 超流/3D Maxwell 屏蔽",
    "rating": "A-",
    "access": "全文精读（arXiv PDF；正文、方法/附录与图注）",
    "category": "高温与非常规超导",
    "tags": [
      "2609.01602",
      "二维超导",
      "下临界场",
      "有限尺寸",
      "涡旋"
    ],
    "readingGuide": {
      "priority": "A-｜二维超导磁成像和器件几何研究者",
      "first": "先看 (1/A,B) 相图和两条尺度律，再决定是否需要读长附录的 Maxwell 核；这篇的关键是极限次序。",
      "focus": "实验进入场受边缘势垒/钉扎控制，不能把测得首跳场直接等同热力学 Bv。",
      "next": "最干净的验证是同膜多尺寸圆盘加直接涡旋成像，并随温度跨越 Pearl 屏蔽区。"
    },
    "versionNote": "arXiv:2609.01602 v1；本期以北京时间 2026-09-03 08:00 后可见的新提交批次计入。未发现对应正式期刊 DOI。",
    "source": "https://arxiv.org/abs/2609.01602",
    "fullText": "https://arxiv.org/pdf/2609.01602",
    "reportUrl": "/reports/2026-09-03",
    "sections": [
      {
        "title": "问题—为什么反常",
        "text": "三维 II 型超导体的 Hc1 在体极限是由穿透深度和相干长度决定的材料常数；二维薄片中涡旋电流和磁场延伸到整个样品，首个涡旋的能量随横向尺寸增长。作者问在 B→0、面积 A→∞ 的双极限中，所谓下临界场是否仍是材料常数。结论是二维 Bv 始终依赖尺寸，且 (1/A,B) 原点为奇点：先取热力学极限再取零场与先固定有限总磁通放大样品，得到不同基态。这对微米器件中“零场”与涡旋污染的解释有直接意义。"
      },
      {
        "title": "理论模型—信息边界",
        "text": "工作没有特定晶体或薄膜样品。作者在有限圆盘内构造均匀态与单量子涡旋的 many-body/BdG 波函数，以最低 Landau level 为解析基，固定电子密度自洽求隙和粒子数；外场即使很弱也非微扰处理。长程二维超流再耦合到三维 Maxwell 方程，分别求弱屏蔽（Pearl 长度远大于尺寸）和强屏蔽极限。Flux/CVT/外延、原料、结构和测量参数均不适用；将结果用于 NbSe₂、FeSe 或铜氧化物薄片时，需另外代入真实相干长度、Pearl 长度、边缘和无序。"
      },
      {
        "title": "核心结果",
        "text": "对面积 A 的圆盘，弱屏蔽首涡旋场 Bv(A)∝A⁻¹ ln(A/A0)，对数来自未屏蔽二维涡旋长程动能；强屏蔽时 Bv∝A⁻¹/²，即随半径1/R。因而更大的二维样品更容易在更弱场容纳第一个涡旋，但固定有限总磁通 Φ=BA 的路径上，B∝1/A 下降得比强屏蔽边界更快，最终仍落入无涡旋区。作者用 (1/A,B) 相图说明沿 B 轴接近原点得到稀疏涡旋晶格，沿1/A轴接近则为均匀无涡旋态；极限不交换。强屏蔽不是电流消失，而是有限片电流产生的矢势几乎抵消外加矢势。"
      },
      {
        "title": "证据强度—局限",
        "text": "解析尺度律从微观有限系统自由能差推导，再由 Maxwell 自洽屏蔽连接两个极限，是论文最强部分；附录给出电流、矢势和场分布，避免只靠 London 量纲论证。局限包括圆盘/轴对称、洁净平衡、单涡旋成核和 LLL 投影；实际边缘粗糙、Bean–Livingston 势垒、磁通钉扎和测量历史决定动力学进入场，实验看到的首跳场可能高于热力学 Bv。Landau-level mixing 改定量而作者论证不改主尺度，但强关联/多带/非常规配对是否保留同一 A0 需要再算。"
      },
      {
        "title": "可检验实验",
        "text": "在同一二维超导膜上加工一组半径跨至少一个数量级的圆盘，保持厚度、边缘工艺和接触一致；用扫描 SQUID、NV 或磁光直接数首个涡旋，而非从电阻尾部间接定义。分别在弱/强屏蔽区拟合 Bv 对 A 的 A⁻¹ln A 与 A⁻¹/²，改变温度调 Pearl 长度可做同一样品 crossover。每个尺寸做 ZFC、FC 和正负场扫以区分热力学边界与钉扎；残余场必须校准到预计 Bv 以下。对器件设计，报告几何尺寸后再称“下临界场”，避免把不同尺寸样品差异误判为材料质量变化。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "USbTe",
    "title": "Observation of a spin-textured nematic Kondo lattice",
    "authors": "Yu-Xiao Jiang; Zi-Jia Cheng; Qiaozhi Xu; Md Shafayat Hossain; Xian P. Yang; Jia-Xin Yin; Maksim Litskevich; Tyler A. Cochran; Byunghoon Kim; Eduardo Miranda; Sheng Ran; Rafael M. Fernandes; M. Zahid Hasan",
    "journal": "Nature Communications",
    "method": "单晶 + STM/STS / 自旋极化 STM",
    "rating": "A",
    "access": "出版社提前发布版：页面本身尚无正文，仅摘要/元数据",
    "category": "重费米子与量子临界",
    "tags": [
      "Kondo 晶格",
      "向列序",
      "STM/STS",
      "自旋极化"
    ],
    "readingGuide": {
      "priority": "A｜待正式正文上线后第一时间复核",
      "first": "先看温度演化和自旋探针翻转对照；这两组数据决定 C4→C2 信号是否真与 Kondo 相干、自旋通道绑定。",
      "focus": "重点核对表面终止、结构畴统计、QPI/Fourier 分量和非磁探针对照，而不是只看一张漂亮的实空间图。",
      "next": "若做 U 基单晶，先建立批次—表面终止—RRR/比热—STM 可解理质量表，再讨论向列态复现。"
    },
    "versionNote": "Nature 页面元数据显示 Accelerated Article Preview 且 hasBody=false；不是 VPN 权限问题，当前出版社尚未提供正文。",
    "source": "https://doi.org/10.1038/s41467-026-74841-z",
    "fullText": "https://www.nature.com/articles/s41467-026-74841-z",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题—热点—实验设计",
        "text": "Kondo 晶格通常从电阻、比热或散射的体平均量判断重费米子形成，而本文追问：重电子液体能否同时自发破坏四重旋转对称性，并带有自旋纹理。作者在层状 Kondo 磁体 USbTe 上先用常规 STM/STS 查看费米能级附近的局域态，再用自旋极化 STM 检验同一向列信号是否随探针自旋通道变化。这个顺序把“晶格结构各向异性”“纯电荷向列序”和“磁性重电子向列序”区分开，是今天重费米子与量子临界研究中很强的交叉点。"
      },
      {
        "title": "样品—生长—质量边界",
        "text": "出版社把该稿标为可引用的 early sharing 版本，公开页面目前只显示摘要、作者和补充材料入口，正文方法段没有展开。材料为层状 USbTe，摘要称其为 tetragonal Kondo magnet；单晶生长方法、U:Sb:Te 原料配比、助熔剂或输运剂、坩埚/安瓿、气氛、温区、温程、时间、降温速率、后处理、晶体尺寸与产率均无法从当前页面核实，故逐项记为正文未报告。不能因同类铀碲化物常用 Flux 就补写为 Flux。"
      },
      {
        "title": "测量—直接证据—推断层级",
        "text": "直接观察层：常规 STM/STS 在费米能级附近看到重电子态由四重对称变为二重对称，并与能带杂化驱动的重准粒子形成出现在同一能区。进一步的自旋极化 STM 显示向列信号具有自旋极化。作者据此推断该序是内禀电子关联产生的磁性纹理，而非单纯表面形貌。摘要没有给出基底温度、偏压、隧穿电流、磁场、探针标定、Fourier 分量、误差条和跨解理面统计；这些缺失使得最关键的替代解释——表面终止、局域应变或磁性探针不对称——仍需正文和补充材料核查。"
      },
      {
        "title": "结论—创新—局限",
        "text": "最强证据是同一能量窗口内重准粒子杂化、C4→C2 对称破缺和自旋选择信号的共现；创新是把“重电子液晶”从体平均推断推进到实空间可视化。最弱环节是当前只可见摘要，无法评价结构域统计、温度演化、探针翻转对照以及样品批次。故本简报把“观察到自旋纹理向列态”视为作者结论，而不把具体微观相互作用机制写成已被唯一证明。"
      },
      {
        "title": "复现建议—阅读优先级",
        "text": "复现实验应先记录晶体批次、表面终止和 Laue/单晶 XRD，再在同一区域做形貌、常规 dI/dV、温度扫描、磁场/探针磁化反转和多方向 Fourier 分析；最好加非磁探针对照与体输运/磁化的向列响应。推荐 A：重费米子读者优先追踪正式 Version of Record 与补充材料；在方法全文公开前，不把它作为可执行生长配方。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "量子材料样品依赖",
    "title": "The challenge of synthesis dependence in quantum materials research",
    "authors": "Lucy Clark; J. Ross Stewart",
    "journal": "Nature Physics · Perspective",
    "method": "合成依赖与可复现性综述",
    "rating": "A-",
    "access": "浙大 VPN/出版社机构访问已尝试；当前会话未完成机构认证，仅摘要/预览",
    "category": "晶体生长和物性调控",
    "tags": [
      "合成依赖",
      "批次统计",
      "缺陷",
      "可复现性"
    ],
    "readingGuide": {
      "priority": "A-｜适合作为实验室记录规范的起点",
      "first": "先读作者怎样区分‘材料内禀差异’与‘批次噪声’，再顺着 UTe2 和缺陷敏感材料的参考文献回到原始数据。",
      "focus": "把案例中的变量逐项映射到自己的炉次记录：原料批号、炉位、热历史、晶体尺寸、成分分布和测量样品对应关系。",
      "next": "不必逐句精读所有案例；更值得把方法论转成一张 process–structure–property 批次表。"
    },
    "versionNote": "网页提示可通过机构访问；当前 WebVPN 登录页未处于已认证状态，因此未把预览内容称为全文精读。",
    "source": "https://doi.org/10.1038/s41567-026-03417-x",
    "fullText": "https://www.nature.com/articles/s41567-026-03417-x",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题与热点",
        "text": "这篇 Perspective 讨论量子材料中同名化学式、不同实验室或不同批次却得到不同基态的问题。文章以 UTe2、spin ice 和热电材料等为例，强调缺陷、占位、应变、氧含量与生长历史会进入低能物理，而不是可忽略的“样品噪声”。这与本网站的生长—质量—物性证据链直接相关。"
      },
      {
        "title": "内容范围与信息边界",
        "text": "可访问的出版社预览给出论点与案例框架，但正文为订阅访问；本文不是提供单一晶体配方的实验论文。原料、配比、温区、时间、降温速率和样品尺寸均不适用或预览未给出。"
      },
      {
        "title": "证据逻辑",
        "text": "作者主张应把合成依赖作为研究对象：用批次矩阵、成分/缺陷的定量表征和跨实验室复现来解释物性分散。当前预览不足以逐一核对案例数据，所以这里只整理方法论，不复述不可见图表或数字。"
      },
      {
        "title": "意义与局限",
        "text": "其价值在于把“最好的一块晶体”转向“样品分布和过程元数据”。局限是 Perspective 本身不产生新的材料数据；最终可执行程度取决于读者能否访问全文案例和参考文献。"
      },
      {
        "title": "实验启示",
        "text": "建议未来每炉保留原料批号、热历史、炉内位置、晶体尺寸和结构/成分统计，并把异常样品纳入分析。推荐 A-：先读论证框架，再用自己的 Flux/CVT 批次数据建立 process–structure–property 表。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "La3Ni2O7",
    "title": "Metallic crossover through the tilt-free transition in La3Ni2O7 at high pressure and temperature",
    "authors": "Bastien Michon; Yingpeng Yu; Beatrice D’Alò; Elena Stellino; Gergely Németh; Bosen Wang; Jianping Sun; Jinguang Cheng; Paolo Postorino; Ferenc Borondics; Francesco Capitani",
    "journal": "Physical Review B",
    "method": "高压 Raman + 同步辐射红外",
    "rating": "A",
    "access": "全文精读（PRB 正式论文 + 对应作者公开稿 arXiv:2605.01651，正文与补充材料）",
    "category": "高温与非常规超导",
    "tags": [
      "La3Ni2O7",
      "Flux",
      "高压",
      "红外",
      "Raman",
      "镍酸盐"
    ],
    "readingGuide": {
      "priority": "A+｜本期最值得实验人员精读",
      "first": "生长者先读 Supplementary 的 crystal growth 和氧退火；高压测量者再读 DAC、CsI 压力介质和多层光学拟合。",
      "focus": "把 6–15.25 GPa 的相共存区、400–544 K 的温度路径和 3450→32000 cm⁻¹ 的等离子频率变化放在一张图上看。",
      "next": "复现实验不要只在 10、15 GPa 两点取数；应在相共存区加密并同步 Raman、红外、电阻与原位 XRD。"
    },
    "versionNote": "正式版本以 PRB DOI 为准；实验细节来自同作者同题工作的公开稿及其补充材料。",
    "source": "https://doi.org/10.1103/832c-p7qj",
    "fullText": "https://arxiv.org/pdf/2605.01651",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题—假设—实验设计",
        "text": "双层镍酸盐 La3Ni2O7 的高压超导常与 NiO6 八面体倾转消失、层间 Ni–O–Ni 键趋直和金属性增强联系起来，但结构相变与电子重构是否同一过程、相变边界是否只由压力决定仍不清楚。作者以压力和温度为两条独立控制路径：Raman 追踪倾转相关声子及其 Fano 线形，同步辐射红外追踪 Drude 响应和等离子频率。若两条路径都在无倾转相出现时产生相同电子响应，便能排除‘只是某个压力点的非静水效应’这一较弱解释。"
      },
      {
        "title": "样品—Flux 生长—后处理",
        "text": "单晶采用常压熔盐助熔剂蒸发法。La2O3 纯度 99.99%，先在 1000 °C 过夜烘干，再与 NiO 配料；使用无水 K2CO3 作 Flux，溶质与 Flux 质量比 1:15，混合步骤在手套箱完成。混合料装入带盖氧化铝坩埚，在 1000–1050 °C 保温 72 h，使 Flux 逐步蒸发，随后自然冷却；产物用去离子水浸泡分离。晶体再在流动 O2 中 500 °C 退火 5 d 并随炉冷却。得到 ab 面近方形片晶，边长约 40–50 μm、c 轴厚度约 10–30 μm。升温速率、K2CO3 具体纯度、炉内位置、氧流量和产率正文未报告，是复现记录必须补齐的变量。"
      },
      {
        "title": "结构质量—高压装样—测量条件",
        "text": "高压实验使用膜式金刚石对顶砧，IIa 型金刚石、600 μm culet；不锈钢垫片预压至约 50 μm，样品孔约 250 μm。约 50 μm 晶体与红宝石压力标定球共同装入，CsI 兼作红外透明压力介质。Raman 使用 532 nm 激光、ab 面背散射几何，谱窗 100–1000 cm⁻¹，每条光谱 300 s、累积 2 次；温度由激光功率或 Linkam 台调节，最高约 400 °C，并用反 Stokes/Stokes 比校温。红外在 SOLEIL-SMIS 线站完成，中红外用 MCT、远红外用 bolometer，以金箔为反射参考。公开稿对相纯度与常规结构表征的批次统计仍不充分，因而光谱样品是否代表整批晶体是质量链条的薄弱点。"
      },
      {
        "title": "关键数据—模型拟合—证据强弱",
        "text": "直接观察是倾转相关 Raman 模随压/升温衰减并消失，同时低频红外反射增强、Drude 响应显著变强。结构转变约在 6 GPa 开始，并在 15.25 GPa、544 K 左右完成；中间是相共存而非单一锋利临界点。等离子频率由 0.4 GPa 时约 3450 cm⁻¹ 增至 16.9 GPa 时约 32000 cm⁻¹。若有效质量变化不大，这对应近两个数量级的载流子密度提升，但‘载流子数’并非直接 Hall 计数，而来自 RefFIT 多层 Drude–Lorentz 拟合；模型使用金刚石介电常数 5.84、折射率约 2.42。Fano 参数 1/|q| 被用作电子—声子耦合指标，也属于模型化指标。最强证据是结构声子和金属光学响应在两条控制路径上的同步；最弱环节是有效质量、压力梯度、相共存及氧含量可能改变定量载流子解释。"
      },
      {
        "title": "结论—局限—可执行复现",
        "text": "论文支持‘无倾转相为强金属性和高压超导提供必要电子结构背景’，但没有证明几何直键单独足以产生超导。对下一炉晶体，建议锁定 1:15 K2CO3 Flux、1000–1050 °C/72 h 与 500 °C O2/5 d 作为基线，同时记录氧流量、装料高度、Flux 失重和每块晶体厚度；用 TGA/碘量或其他方法约束氧含量。高压测量在 6–16 GPa 每 1–2 GPa 取点，并在相共存区加密；同一晶片同步 Raman、红外、四探针电阻和 XRD，才能把结构、自由载流子与超导转变真正闭合。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "Ti–Al 金属间化合物",
    "title": "Topological motifs governing superconductivity in pressure-stabilized Ti-Al intermetallics",
    "authors": "Yiming Wang; Jia Qu; Peng Jiang; Vladislav A. Blatov; Xuqiang Liu; Yan-Ling Li; Wenge Yang",
    "journal": "Physical Review B",
    "method": "高压合成/淬火 + 结构拓扑 + 超导",
    "rating": "A-",
    "access": "浙大 VPN/APS 已尝试；未取得正文，也未找到对应公开作者稿，仅摘要/元数据",
    "category": "高温与非常规超导",
    "tags": [
      "Ti-Al",
      "高压合成",
      "淬火",
      "电子-声子耦合"
    ],
    "readingGuide": {
      "priority": "A-｜先验证体超导与相纯度，再讨论拓扑 motif",
      "first": "取得正文后先找压力—温度—卸压路径和相分数，不要从计算结构图直接跳到 Tc 机制。",
      "focus": "优先核对零电阻、抗磁屏蔽和比热是否来自同一淬火相，以及卸压后结构随时间是否稳定。",
      "next": "适合设计原位 XRD + 淬火速率矩阵；在工艺参数未公开前不宜照摘要复现。"
    },
    "versionNote": "APS PDF 访问被站点拒绝，当前机构会话也未建立可验证授权；分析严格停留在出版社摘要。",
    "source": "https://doi.org/10.1103/frhh-xd6p",
    "fullText": "https://journals.aps.org/prb/abstract/10.1103/frhh-xd6p",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题",
        "text": "工作追问压力稳定的 Ti–Al 结构单元为何产生较高 Tc，并把局域拓扑 motif 与电子—声子耦合联系起来。"
      },
      {
        "title": "样品与制备",
        "text": "摘要报告压力稳定的 Ti2Al 可在卸压淬火后保留，并给出常压 Tc=12.6 K；具体压力、温程、保压时间、反应容器和样品尺寸在可见摘要中未报告。"
      },
      {
        "title": "证据链",
        "text": "结构拓扑分析把相结构关联到 ω-Ti 派生 motif；计算指出 Al 空穴掺杂提高费米能级态密度，同时声子软化增强电子—声子耦合。实验超导与结构保留提供现象基础，微观因果主要来自第一性原理。"
      },
      {
        "title": "局限",
        "text": "“motif 治理 Tc”仍含模型归因；需比较多相比例、淬火稳定性和体积分数，排除少量高压残相主导电阻转变。摘要未给磁化/比热证据和误差。"
      },
      {
        "title": "建议",
        "text": "建议压力—温度—淬火速率矩阵配合原位 XRD、卸压后 TEM/EDS、四探针和磁化率。推荐 A-：结构设计思路强，复现前需补齐全文高压工艺。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "LaSc2H24",
    "title": "Isotropic superconductivity in the room-temperature superconductor LaSc2H24",
    "authors": "Zefang Wang; Wenbo Zhao; Yuan Ma; Hanyu Liu; Yanming Ma",
    "journal": "Physical Review B",
    "method": "第一性原理 + 各向异性 Eliashberg",
    "rating": "A-",
    "access": "全文精读（PRB 正式论文 + 对应作者公开稿 arXiv:2601.01398）",
    "category": "高温与非常规超导",
    "tags": [
      "氢化物",
      "Eliashberg",
      "声子",
      "高压",
      "LaSc2H24"
    ],
    "readingGuide": {
      "priority": "A｜适合高压靶标筛选，不是合成配方",
      "first": "先读结构与声子稳定区间，再读各向异性 Migdal–Eliashberg；Tc 数字应放在 μ*、非谐性和压力范围旁边看。",
      "focus": "关注 Sc 引起的 Jahn–Teller H–H 键伸长、Sc–H–Sc σ/π 态，以及两能隙如何演化为近各向同性单能隙。",
      "next": "实验上应优先验证结构、Raman/红外软模、同位素效应和磁场抑制，而不是仅凭电阻下降宣称室温超导。"
    },
    "versionNote": "正式版本以 PRB DOI 为准；公开稿提供主文计算方法和图表，独立补充材料未包含在该 PDF 中。",
    "source": "https://doi.org/10.1103/3b4x-77yq",
    "fullText": "https://arxiv.org/pdf/2601.01398",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题与材料设计逻辑",
        "text": "LaSc2H24 是 LaH10 型氢笼家族的多元化设计：La@H30 与 Sc@H24 笼在 P6/mmm 结构中组合，La/Sc 子晶格呈类似 MgB2 的层状排列。核心问题不是简单计算一个 Tc，而是解释 Sc 替位为何改变氢网络、电子态和配对各向异性，并判断此前实验所称的室温超导能否由常规电子—声子机制支持。"
      },
      {
        "title": "结构—声子—电子耦合链",
        "text": "计算显示 Sc 的局域晶场/Jahn–Teller 效应拉长特定层间 H–H 键，产生与 Sc 相关的软化声子；Sc 3d 与 H 轨道形成 Sc–H–Sc 的 σ/π 杂化，并在费米面多个区域提供电子—声子耦合。这个链条把‘化学替位’分解为局域几何畸变、声子软化和费米能级态三步。直接输出是优化结构、能带、声子谱和 EPC 分布；Jahn–Teller 作为主因仍是作者对这些计算量的物理归因。"
      },
      {
        "title": "超导解与关键转变",
        "text": "各向异性 Migdal–Eliashberg 解显示，LaH10 中较明显的各向异性双能隙特征，在 LaSc2H24 中转向近各向同性的单能隙状态。作者把这种变化归因于 Sc–H 通道在不同费米面片之间加强耦合并平均化能隙。需要强调：‘room-temperature superconductor’沿用的是此前高压实验候选和理论预测语境；本论文新增证据是第一性原理与 Eliashberg 计算，没有新增样品合成、Meissner 或零电阻实验。"
      },
      {
        "title": "不确定性与替代解释",
        "text": "定量 Tc 依赖结构稳定区间、赝势/交换关联泛函、k/q 网格、声子非谐性、库仑赝势 μ* 和可能的量子核效应。公开 PDF 未附独立补充材料，因此收敛性细节和不同参数的完整敏感性需要正式附件复核。若实际高压样品存在多相、氢含量偏差或应力梯度，理论理想 P6/mmm 相不能直接代表实验电阻通道。"
      },
      {
        "title": "实验验证顺序",
        "text": "对高压实验最有效的顺序是：先用同步辐射 XRD/拉曼锁定 P6/mmm 与软化模，再做同位素替换和磁场下电阻转变，最后用可行的磁化/交流磁化手段检验体超导。压力点应跨越理论稳定区间密集布置，并把激光加热轨迹、氢源配比、压力介质和退火时间与每个电极回路一一对应。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "UTe2",
    "title": "Field-angle dependence of magnetoresistance in UTe2",
    "authors": "Jun Ishizuka; Youichi Yanase",
    "journal": "Physical Review B",
    "method": "GGA+U/Wannier + Boltzmann 输运",
    "rating": "A-",
    "access": "全文精读（PRB 正式论文 + 对应作者公开稿 arXiv:2603.17235）",
    "category": "重费米子与量子临界",
    "tags": [
      "UTe2",
      "磁阻",
      "费米面",
      "Boltzmann",
      "重费米子"
    ],
    "readingGuide": {
      "priority": "A-｜角分辨输运设计价值高",
      "first": "先看 8.08 T、90 K 的实验对照，再比较 τh=1.0 ps 与 τe=0.25/0.1 ps 如何改变曲线。",
      "focus": "把‘费米面几何’与‘人为赋予的带依赖弛豫时间’分开；后者可能吸收了磁涨落和强关联自能。",
      "next": "实验最好在同一高 RRR 晶体上同步纵/横向输运和量子振荡，用场角、温度与磁场三维数据限制自由参数。"
    },
    "versionNote": "正式版本以 PRB DOI 为准；作者公开稿包含主文模型、计算结果与实验比较。",
    "source": "https://doi.org/10.1103/pm7m-xcg9",
    "fullText": "https://arxiv.org/pdf/2603.17235",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题—模型—实验对照",
        "text": "UTe2 的正常态磁阻具有强烈场角依赖，可能来自准二维费米面轨道运动，也可能混入磁涨落、场诱导重构或 Lifshitz 转变。作者从 GGA+U 构造 12 轨道 Wannier 模型，包含两个 U 位和 Te(2) 5p 相关轨道，再以半经典 Boltzmann 输运计算纵向与 Hall 响应。研究目标是先检验无需引入新有序态时，费米面几何能解释多少实验结构。"
      },
      {
        "title": "关键参数与直接结果",
        "text": "代表性比较使用 B=8.08 T、T=90 K；空穴带弛豫时间取 τh=1.0 ps，电子带取 τe=0.25 ps 或 0.1 ps，才能较好再现实验磁阻的角度轮廓。计算还延伸到约 36.36 T，并预测 Hall 响应随场角的凹陷位置和形状会随磁场、温度移动。直接结果是模型费米面、速度和 Boltzmann 电导；与实验趋势吻合支持几何图景，但并不自动证明弛豫机制。"
      },
      {
        "title": "最强证据与最弱环节",
        "text": "最强处是同一电子结构同时给出纵向磁阻和可检验的 Hall 角度预测。最弱处是带依赖 τ 带有现象学自由度：若所有能带共用一个 τ，模型定性失败；允许电子/空穴 τ 相差数倍后才恢复实验曲线。这可能真实反映轨道选择性散射，也可能把磁涨落、强关联自能、样品缺陷或场诱导能带变化压缩进两个参数。因此文中‘直接证据’更准确地说是模型一致性证据。"
      },
      {
        "title": "与晶体质量的关系",
        "text": "论文没有新增晶体生长，Flux/CVT 配方不适用；但其预测对 RRR、缺陷与不同费米面片的散射极敏感。跨批次比较若不先控制残余电阻、几何因子、裂纹和接触错位，τe/τh 的差异可能只是样品质量差异。UTe2 文献中同名晶体存在明显批次依赖，正适合与本期 synthesis-dependence Perspective 联读。"
      },
      {
        "title": "实验行动建议",
        "text": "在同一块高 RRR 晶体上，至少做 bc、ac 两个旋转平面的纵向和横向电阻，并覆盖模型的 8 T 基准与更高场；同步量子振荡约束费米面频率，避免只用磁阻曲线反演 τ。温度扫描应检查角度凹陷是否按预测移动；若不移动或出现迟滞，再考虑磁相变/磁畴等替代机制。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "强关联交错磁体",
    "title": "Enhancement of d-wave pairing in strongly correlated altermagnets",
    "authors": "Jianyu Li; Ji Liu; Xiaosen Yang; Ho-Kin Tang",
    "journal": "Physical Review B",
    "method": "约束路径量子蒙特卡洛",
    "rating": "B+",
    "access": "全文精读（PRB 正式论文 + 对应作者公开稿 arXiv:2505.12342）",
    "category": "磁性、拓扑与自旋",
    "tags": [
      "交错磁体",
      "d-wave",
      "CPQMC",
      "Hubbard 模型"
    ],
    "readingGuide": {
      "priority": "B+｜理论机制清楚，材料映射仍远",
      "first": "先看配对顶角关联与总关联的区别，再看有限尺寸和约束路径测试；不要把相关函数增强直接写成有限 Tc。",
      "focus": "比较各向异性跃迁同时削弱 N_S(π,π) 反铁磁峰、增强 d 波顶角这一反直觉组合。",
      "next": "若用于材料筛选，应先找具有相符磁空间群和可调各向异性的化学体系，再讨论应变或压力实验。"
    },
    "versionNote": "正式版本以 PRB DOI 为准；作者公开稿提供模型、CPQMC 结果及 t–J 补充检验。",
    "source": "https://doi.org/10.1103/8hyn-216k",
    "fullText": "https://arxiv.org/pdf/2505.12342",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题与模型",
        "text": "交错磁体在零净磁矩下产生动量依赖自旋劈裂，传统直觉会担心这类自旋分裂破坏反平行自旋配对。作者研究近半填充的自旋各向异性 Hubbard 模型，用跃迁各向异性 tA 同时生成交错磁特征并破坏完美嵌套/SU(2) 对称，检验强关联下 d 波配对是否反而受益。"
      },
      {
        "title": "数值方法与关键对照",
        "text": "采用约束路径量子蒙特卡洛（CPQMC），以 Hartree–Fock 波函数作 trial state，扫描 U=1、2、4 及不同各向异性。作者分别计算总配对相关与扣除非相互作用贡献后的 vertex 部分，这是判断‘费米面效应’还是‘相互作用真正增强配对’的关键对照。补充的半填充 t–J 模型自由能比较在较大 J 区也偏好 d 波，为主模型趋势提供独立但仍属模型内的支持。"
      },
      {
        "title": "结果与证据层级",
        "text": "随 tA 增大，N_S(π,π) 对应的反铁磁长程趋势被削弱，而 d 波和部分 p↑↓ 顶角关联增强，其他配对通道多被压低。直接观察是有限晶格上的相关函数和结构因子；‘d 波超导增强’是从其尺度与相互作用依赖外推的物理判断，并没有直接计算真实材料 Tc。作者以 RVB 图景解释：各向异性减弱长程 Néel 竞争，却保留足以形成短程 singlet 的交换关联。"
      },
      {
        "title": "局限与材料边界",
        "text": "约束路径偏差取决于 trial state，有限尺寸、壳层效应和近半填充符号问题限制热力学外推。模型中的 tA 不是任意现实交错磁体的可直接测量单参数；自旋轨道耦合、多轨道、晶格畸变和三维耦合都可能改变配对通道。因此它更像材料设计原则，而非对具体晶体的预测。"
      },
      {
        "title": "可执行验证",
        "text": "材料端可筛选具有交错磁对称、低载流子密度且能通过单轴应变/压力连续改变带宽各向异性的单晶。实验上同时测 Néel/磁结构信号、各向异性电阻与超导响应；若配对增强确与该机制一致，应看到长程 AF 指标下降而配对相关量上升的反相关，而不是仅有电阻异常。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "应变单层石墨烯",
    "title": "Interaction-driven charge textures and unconventional superconductivity in strained monolayer graphene",
    "authors": "Elias Andrade; Alejandro Jimeno-Pozo; Pierre A. Pantaleón; Francisco Guinea; Gerardo G. Naumis",
    "journal": "Physical Review B",
    "method": "应变莫尔模型 + Hartree / Kohn–Luttinger",
    "rating": "B+",
    "access": "全文精读（PRB 正式论文 + 对应作者公开稿 arXiv:2507.00112）",
    "category": "二维材料与量子器件",
    "tags": [
      "石墨烯",
      "应变莫尔",
      "电荷纹理",
      "平带",
      "超导"
    ],
    "readingGuide": {
      "priority": "B+｜先看可实现的应变尺度，再看超导相图",
      "first": "从 A=0.15a、λ=13.6 nm 的平带示例入手，再看 λ=27.2 nm、ε=6 的相图，避免只记住 Tc。",
      "focus": "重点区分亚晶格对称与亚晶格极化的亚稳态，以及约 500 meV Hartree 势起伏对器件均匀性的要求。",
      "next": "实验应先用 STM/应变映射验证一维周期和电荷纹理，再做栅压输运；跨器件统计比单个超导样品更关键。"
    },
    "versionNote": "公开稿题名为 Electrostatic Charge Fractionalization and Unconventional Superconductivity in Strained Monolayer Graphene；作者和核心模型对应同一工作，正式题名以 PRB 为准。",
    "source": "https://doi.org/10.1103/q528-6vj2",
    "fullText": "https://arxiv.org/pdf/2507.00112",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题与器件概念",
        "text": "工作考虑沿 y 方向施加一维周期性单轴应变，在单层石墨烯中形成一维莫尔超晶格。应变产生赝磁/标量势并压平能带，作者追问长程库仑相互作用是否会把均匀平带态重构成空间电荷纹理，以及这些重构后的准粒子能否出现 Kohn–Luttinger 型非常规配对。"
      },
      {
        "title": "模型尺度与可实现参数",
        "text": "代表性参数 A=0.15a、周期 λ=13.6 nm 时出现两重简并平带；另一组相图使用 λ=27.2 nm、介电常数 ε=6。Hartree 自洽计算在 |ν|=1、ε=10 的示例中给出约 500 meV 的势起伏，说明平带极高可压缩性会放大微小非均匀。论文为理论研究，未给出 CVD/剥离、基底转移、应变器件制程和接触工艺，这些不是‘正文漏写的生长配方’，而是尚待实验映射的边界。"
      },
      {
        "title": "电荷纹理与分数化解释",
        "text": "自洽解出现亚晶格对称和亚晶格极化的多种亚稳态，并在有理填充附近形成周期电荷纹理/局域分数电荷。直接结果是模型密度分布、Hartree 势和能带；‘分数化’在这里指空间电荷重排的有效纹理，不应与具有拓扑序和任意子激发的分数量子霍尔态混为一谈。多亚稳态也意味着真实器件可能存在历史依赖和畴。"
      },
      {
        "title": "配对结果与限制",
        "text": "在重构平带上计算 Kohn–Luttinger 类配对不稳定性，相关填充处给出约 1.1 K 的 Tc，扫描应变幅度时可到数 K。这个 Tc 来自弱耦合/有效相互作用框架，不是实验直接观测；无序、应变非均匀、长程屏蔽、声子和相位涨落都可能显著改变量级。正式 PRB 与较早公开稿题名不同，引用时应以 DOI 版本为主，并说明公开稿版本关系。"
      },
      {
        "title": "实验路线",
        "text": "第一步用 Raman 应变映射与 STM/STS 确认 λ、应变幅度和平带局域态；第二步用扫描单电子/电荷传感或压缩率测量寻找有理填充纹理；第三步才做低温四探针、临界场、BKT 和非线性输运区分超导与渗流。应至少比较多个周期、多个介电环境和多器件，检验 500 meV 级 Hartree 重构是否被实际屏蔽。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "La2SrNi2O7−δ",
    "title": "Heavily Sr-Doped La2SrNi2O7−δ as a Tetragonal Ruddlesden–Popper Phase at Ambient Pressure",
    "authors": "Yuhang Zhang; Xue Ming; Cui-Qun Chen; Wei Chen; Tian-Yi Li; Zhe-Ning Xiang; Qing Li; Bing-hui Ge; Dao-Xin Yao; Xiyu Zhu; Hai-Hu Wen",
    "journal": "arXiv:2609.00542v1",
    "method": "3 GPa / 1400 °C HPHT Flux",
    "rating": "A+",
    "access": "全文精读（正文、方法与图注）",
    "category": "晶体生长和物性调控",
    "tags": [
      "HPHT Flux",
      "La2SrNi2O7",
      "镍酸盐",
      "高压输运"
    ],
    "readingGuide": {
      "priority": "A+｜生长窗口与负结果边界都很重要",
      "first": "先读 3 GPa/1400 °C 的合成段和单晶精修表，再读压力输运—DFT 对照。",
      "focus": "盯住 SrCl2–KCl 共晶、SrO2 氧源与 Ni–O–Ni 直键，同时检查化学势和轨道填充为何仍不利于超导。",
      "next": "下一轮做 Sr 含量、氧源剂量和臭氧时长矩阵，并让每块输运晶体对应独立的氧含量与 Laue 记录。"
    },
    "versionNote": "",
    "source": "https://arxiv.org/abs/2609.00542",
    "fullText": "https://arxiv.org/pdf/2609.00542",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题—假设—对照",
        "text": "高压超导 La3Ni2O7 的常见结构特征是无倾转的 180° c 轴 Ni–O–Ni 键和接近半填充的 dz2 轨道。作者用重 Sr 掺杂把 La2SrNi2O7−δ 在常压稳定为四方 I4/mmm，直接检验“直键+四方结构是否足够”。氧含量通过未处理、325 °C 臭氧 1 h 与 3 h 形成对照，并进一步用外加压力测试；结构条件满足而超导仍缺失，是全文的核心反证。"
      },
      {
        "title": "生长配方与窗口",
        "text": "La2O3（99.99%，先在 1000 °C 烘干）、SrCO3（99.99%）和 Ni(OH)2（99%）经改进 sol–gel 分别制成 LaSrNiO4 与 LaNiO3 前驱体，再按等摩尔混合。以 SrCl2（99.5%）/KCl（99.8%）共晶作 Flux，SrO2 作氧源，在活塞圆筒装置中 3 GPa、1400 °C HPHT 生长。正文可见信息没有完整报告 Flux:料和 SrO2 的质量比、升温速率、保温时间、降温速率、分离方法、产率；这些是复现首要缺口。"
      },
      {
        "title": "结构—成分—质量",
        "text": "粉末/单晶 XRD 与 STEM 确认双层 RP 相和四方 I4/mmm，对应 c 轴 Ni–O–Ni 接近 180°；EDS 用于检查元素分布。需要注意，局域 STEM 不能替代整批相分数，氧空位 δ 也没有被简单的 EDS 定量。正文给出的结构证据足以支持“主要晶相和直键”，但不足以证明所有输运样品的氧含量完全一致；建议用 TGA/碘量法或中子衍射补强。"
      },
      {
        "title": "输运—计算—证据链",
        "text": "氧贫样品绝缘；臭氧 3 h 样品在约 210 K 以上呈金属行为，低温出现上翘，且未见明显密度波异常。作者改变氧处理并施压仍未得到超导。DFT 显示重 Sr 掺杂使空穴过度进入 Ni-3d，显著降低 dz2 占据并形成很大的 γ 口袋，偏离有利于配对的近半填充状态。直接观察是电阻曲线无零电阻；“过掺杂破坏配对”是由结构、输运和 DFT 联合支持的作者解释，仍需 ARPES/量子振荡直接核验轨道占据。"
      },
      {
        "title": "结论—风险—行动建议",
        "text": "论文有力排除“只要四方直键就会超导”的充分条件说法，把化学势和轨道填充提升为同等关键变量。复现风险来自高压腔温度梯度、共晶比例与氧源剂量未完整公开，以及臭氧氧化可能产生表面—体相梯度。建议下一轮固定几何和 Flux 比，系统扫描 Sr 含量/氧源/臭氧时长；每块输运晶体先做 Laue、厚度和氧含量，再做 Hall、热电势、压力电阻。推荐 A+，先读方法与结构表，再读输运—DFT对照。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "Sm4Ni3O10−δ",
    "title": "Expanding the trilayer Ruddlesden-Popper nickelate family: Synthesis and characterization of Sm4Ni3O10−δ single crystals",
    "authors": "Yuhang Zhang; Tian-Yi Li; Xiyu Zhu; Ying-Jie Zhang; Shengtai Fan; Qing Li; Hai-Hu Wen",
    "journal": "Materials Today Physics 60 (2026) 102005 / arXiv:2609.00574v1",
    "method": "3.25 GPa / 1400 °C HPHT Flux",
    "rating": "A+",
    "access": "全文精读（正文、实验部分与图注）",
    "category": "晶体生长和物性调控",
    "tags": [
      "HPHT Flux",
      "Sm4Ni3O10",
      "密度波",
      "高压"
    ],
    "readingGuide": {
      "priority": "A+｜窄生长窗口与 80 GPa 负结果值得复核",
      "first": "先把 3.25 GPa、1400 °C 和 KClO4 氧源写成参数矩阵，再读 Pbca 精修和 180 K 密度波。",
      "focus": "重点看氧亏缺 δ、Ni–O–Ni 角与压力下未见超导之间是否有一一对应证据。",
      "next": "建议 KClO4 剂量和温度做小步长扫描，并补原位高压结构，避免把‘未见超导’简单归因于小离子化学压力。"
    },
    "versionNote": "",
    "source": "https://doi.org/10.1016/j.mtphys.2025.102005",
    "fullText": "https://arxiv.org/pdf/2609.00574",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题与设计",
        "text": "三层 RP 镍酸盐 La4Ni3O10、Pr4Ni3O10 在高压下出现超导，较小 Sm3+ 能否以“化学压力”延续趋势是直接问题。作者首次获得 Sm4Ni3O10−δ 单晶，并用常压密度波与最高 80 GPa 输运检验结构压缩是否足以诱导超导。"
      },
      {
        "title": "生长窗口",
        "text": "使用高压高温 Flux 法，在 3.25 GPa、1400 °C 合成；KClO4 作为外部氧源，其用量以及温度微小变化会显著改变 RP 相形成，表明窗口窄。用于单晶衍射的晶体约 0.097×0.095×0.035 mm³。原料纯度、精确配比、Flux 品种/比例、升降温程序、保温时间、分离与退火在当前全文可提取部分未形成完整可复制表，未报告项不自行补写。"
      },
      {
        "title": "结构与质量",
        "text": "单晶 XRD 将结构定为正交 Pbca，而非理想四方；NiO6 八面体倾转使层间顶角 Ni–O–Ni 明显低于 180°。结构精修与成分表征支持三层 RP 主相，但小晶体和氧亏缺使批次均匀性、δ 的绝对值及高压样品代表性仍是质量评价重点。建议对不同炉位做 WDS/ICP 与单晶精修统计。"
      },
      {
        "title": "物性与证据",
        "text": "常压电阻/相关表征在约 180 K 显示密度波转变。压力最高 80 GPa 时，绝缘趋势和 DW 被部分压低，但未观察到超导。直接证据是电阻随温压的演化；“更小稀土离子提供化学压力”只是起始假设，实验结果表明静态结构畸变和载流子状态不能由离子半径单参数预测。若压力下未达到完全无倾转相，未见超导并不能单独排除更高压力或不同氧含量。"
      },
      {
        "title": "结论与复现建议",
        "text": "创新在于扩展三层 RP 单晶家族并提供一个负结果边界：化学压力并不自动带来超导。最强证据是可解析的 Pbca 单晶结构和 80 GPa 输运；最弱处是氧含量/相均匀性与压力下原位结构尚需更强约束。建议围绕 3.25 GPa/1400 °C 做 KClO4 剂量和温度小步长矩阵，并将每一批的 δ、Ni–O–Ni 角和 180 K 异常关联。推荐 A+。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "La0.8Sr0.2NiO2",
    "title": "Microscopic Origin of Pressure-Enhanced and Robust Superconductivity in Infinite-Layer La0.8Sr0.2NiO2",
    "authors": "Jian-Feng Zhang; Zhong-Yi Lu; Tao Xiang",
    "journal": "arXiv:2609.00586v1",
    "method": "压力依赖第一性原理 + 双轨道模型 + Eliashberg",
    "rating": "A",
    "access": "全文精读（正文与计算方法）",
    "category": "高温与非常规超导",
    "tags": [
      "无限层镍酸盐",
      "压力",
      "Eliashberg",
      "轨道"
    ],
    "readingGuide": {
      "priority": "A｜用于设计验证量，不用于照搬生长",
      "first": "先读压力依赖 Wannier 参数与 U/W，再看 Eliashberg 本征值形成穹顶的分解。",
      "focus": "把带宽增强、自掺杂和三维化三个变量分开；高压端下降不能只用一个词‘过掺杂’概括。",
      "next": "实验联测 Hall、XAS/Raman 与电阻，并保持同一薄膜和同一还原历史，避免压力与氧缺陷漂移混淆。"
    },
    "versionNote": "",
    "source": "https://arxiv.org/abs/2609.00586",
    "fullText": "https://arxiv.org/pdf/2609.00586",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题",
        "text": "实验报道 La0.8Sr0.2NiO2 从常压延伸至 210 GPa 的宽超导穹顶，最高 onset Tc 约 74.5 K（146 GPa 附近）。本文要区分压力增强带宽、改变 U/W、自掺杂和三维化的各自作用。"
      },
      {
        "title": "方法与边界",
        "text": "作者以压力依赖 DFT 建立 Ni dx2−y2/dz2 双轨道 Wannier 模型，计算屏蔽相互作用并求解线性化 Eliashberg 方程；Sr 用虚晶近似处理，压力诱导载流子变化纳入模型。没有进行薄膜生长或高压实验，基底、退火和样品尺寸均不适用。"
      },
      {
        "title": "核心结果",
        "text": "随压缩，带宽和若干跃迁显著增加，U 变化较小，使相关强度 U/W 下降；中低压时带宽扩展有利于配对，高压端则因自掺杂进入过掺杂区而压低配对，形成穹顶。尽管层间杂化增强、费米面更三维，配对在整个压力范围仍主要由 Ni dx2−y2 通道控制。"
      },
      {
        "title": "证据层级",
        "text": "压力依赖能带和模型参数是计算直接输出，穹顶与实验趋势的一致是模型支持；“自掺杂主导高压衰减”来自参数分解，不是独立实验观测。VCA、两轨道截断、顶角氧/缺陷和动态关联处理都会影响定量 Tc。"
      },
      {
        "title": "实验行动",
        "text": "建议在同一膜上联测压力 Hall、Raman/XAS 与电阻，直接追踪载流子和轨道占据；不同基底与还原工艺应作为独立批次，不把压力效应与氧缺陷漂移混合。推荐 A：适合解释压力相图并制定验证量，非生长配方。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "纳米晶形貌",
    "title": "Size-Dependent Growth Rates Amplify Infinitesimal Asymmetry in Nanocrystals",
    "authors": "Sam Oaks-Leaf; David T. Limmer",
    "journal": "arXiv:2609.00145v1",
    "method": "有限晶面成核/扩展动力学模型",
    "rating": "A-",
    "access": "全文精读（正文、模型与图注）",
    "category": "晶体生长和物性调控",
    "tags": [
      "纳米晶",
      "形貌",
      "动力学",
      "成核"
    ],
    "readingGuide": {
      "priority": "A-｜适合解释形貌放大，不是化学配方",
      "first": "先看方形、三角形和 FCC cuboctahedron 三组几何如何共享同一个尺寸反馈机制。",
      "focus": "分清层成核率与台阶扩展速率；极小初始面面积差如何进入确定性正反馈是全文核心。",
      "next": "实验要做单颗粒时间序列 TEM 和初始面面积分布，平均粒径不足以检验模型。"
    },
    "versionNote": "",
    "source": "https://arxiv.org/abs/2609.00145",
    "fullText": "https://arxiv.org/pdf/2609.00145",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题",
        "text": "经典 kinetic Wulff construction 给等价晶面固定生长速率，因此对称晶种应保持对称；现实纳米棒和四面体却可由极小不对称持续放大。本文提出有限晶面面积使成核与边界扩展速率依赖尺寸，从而产生确定性正反馈。"
      },
      {
        "title": "模型",
        "text": "模型把层成核率、台阶扩展和晶面面积耦合，研究二维方格/三角格以及三维 FCC cuboctahedron。没有实际溶液、配体、温度或浓度；这些被压缩为有效成核和增长参数，故不能直接转写成化学配方。"
      },
      {
        "title": "结果",
        "text": "二维方形中微小边长差可放大为棒状；三角格中边界受限增长产生三角形选择；三维 FCC 中极小晶面面积扰动可把 cuboctahedron 推向纳米棒或四面体。直接结果是动力学方程/模拟轨迹，机制解释是尺寸依赖速率产生反馈。"
      },
      {
        "title": "局限",
        "text": "理想晶面、均匀介质和有效速率忽略配体吸附、溶质耗竭、应变、孪晶和随机成核；在极小颗粒中涨落可能与确定性放大竞争。"
      },
      {
        "title": "实验建议",
        "text": "做种子生长时应测量初始单粒子面面积分布，而非只看平均尺寸；通过前驱体通量和配体覆盖调节成核/扩展相对速率，并做时间序列 TEM。推荐 A-：对形貌失稳设计很有启发。"
      }
    ]
  },
  {
    "date": "2026-09-02",
    "issue": "008",
    "headline": "从生长过程到量子物性：把访问状态、样品历史与证据强度放在同一张地图上",
    "material": "GaAs/GaAs0.65P0.35 超晶格",
    "title": "Cryogenic Enhancement of Electron Spin Polarization from a Strained GaAs/GaAsP Superlattice Photocathode",
    "authors": "Matt Grau; Colin Kirk; Greg Blume; John Hill; Sushil Poudel; Alimohammed Kachwala; Marcy Stutzman; Joseph Michael Grames; Sylvain Marsillac; Matt Poelker",
    "journal": "arXiv:2609.00212v1",
    "method": "MOCVD 应变超晶格 + 低温自旋光电子",
    "rating": "A",
    "access": "全文精读（正文与内嵌补充材料）",
    "category": "二维材料与量子器件",
    "tags": [
      "MOCVD",
      "GaAs/GaAsP",
      "超晶格",
      "自旋光电子"
    ],
    "readingGuide": {
      "priority": "A｜外延与测量两端都可执行",
      "first": "生长者先画出 500 nm 步进缓冲层和 30 周期 3.8/2.8 nm 超晶格；测量者先读 Sherman 函数和系统误差。",
      "focus": "比较 295 K 的 91.2% 与 195 K 的 95.0%，并解释为何 77 K 不再提升，而不是只报最高极化。",
      "next": "复现时同时记录 HRXRD 松弛、Zn 掺杂、NEA 激活、阴极真实温度和激光圆偏振度。"
    },
    "versionNote": "",
    "source": "https://arxiv.org/abs/2609.00212",
    "fullText": "https://arxiv.org/pdf/2609.00212",
    "reportUrl": "/reports/2026-09-02",
    "sections": [
      {
        "title": "问题与设计",
        "text": "GaAs 光阴极自旋极化多年停在约 92%。作者用降温作为可逆控制变量，区分热化输运去极化与高能热电子弛豫；在同一阴极 295、273、195、77 K 循环测量极化和量子效率，温度回升后恢复则排除不可逆损伤。"
      },
      {
        "title": "外延结构与生长",
        "text": "MOCVD 生长在 p-GaAs(100) 正切 Zn 掺杂基底（5×10^18 cm−3）上。组分渐变 GaAs1−xPx 缓冲层以 2.5% P 步长、每步 500 nm 推进，末端含 overshoot 和 2.5 μm GaAs0.65P0.35。上方为 30 周期超晶格：3.8 nm 应变 GaAs 阱/2.8 nm GaAs0.65P0.35 势垒，Zn 掺杂 5×10^17 cm−3。正文未给 MOCVD 压力、V/III 比、温度、前驱体流量和生长速率。"
      },
      {
        "title": "测量条件与结果",
        "text": "样品活化到负电子亲和（NEA），使用圆偏振激光激发；峰值条件光圆偏振度 97.8%。20 kV micro-Mott 极化计 Sherman 函数 0.201(5)。电子自旋极化从 295 K 的 91.2(1)% 提升到 195 K 的 95.0±0.8(stat)±2.4(sys)%，峰值 QE 约 0.7%；降至 77 K 不再明显提升。峰波长由 775 nm 蓝移到 739 nm（约 78 meV），跟随带隙增宽。"
      },
      {
        "title": "证据链",
        "text": "温度扫描显示热化输运通道随冷却被抑制，而高能侧的热电子弛豫保留并设定低温饱和；冷却—回温可逆与时间稳定性支持不是表面永久变化。最强证据是同一样品多温度的极化/QE 全谱和系统误差；局限是单一外延设计，NEA 表面状态与温度真实值仍会耦合。"
      },
      {
        "title": "复现建议",
        "text": "复现要同时记录外延片位、应变/松弛（HRXRD）、掺杂、NEA 激活循环、激光偏振标定、阴极温度梯度和 Sherman 标定；比较不同阱/垒厚度与掺杂可确认热电子机制。推荐 A：生长者先读外延结构和补充材料，测量者优先核对误差预算。"
      }
    ]
  },
  {
    "date": "2026-09-01",
    "issue": 7,
    "headline": "从超导无序临界到原子近邻：七篇生长—缺陷—物性证据链",
    "material": "ZrNₓ 外延超导膜",
    "title": "Two-dimensional quantum Griffith singularity in three-dimensional ZrNx superconducting films",
    "authors": "Zi-Yan Han; Li-Min Yu; Yu-Cheng Cong; Yang Yang; Zhi-Xiang Sun; Zhi-Qing Li",
    "journal": "arXiv:2608.28166v1 · cond-mat.supr-con",
    "method": "反应射频磁控溅射 / MgO(100) 外延",
    "rating": "S",
    "access": "重点全文精读（HTML 正文 I–IV、实验方法、图 1–9、表 1–2）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.28166",
    "fullText": "https://arxiv.org/html/2608.28166",
    "reportUrl": "/reports/2026-09-01",
    "sections": [
      {
        "title": "问题—样品—热点关系",
        "text": "作者要检验一个反常命题：厚约 200 nm、相干长度远小于膜厚的三维超导体，是否仍会在磁场驱动超导—金属/绝缘体转变附近表现出通常属于二维系统的量子 Griffiths 奇异性。样品是岩盐结构 ZrNₓ/MgO(100) 外延膜，x≈1.21–1.50。通过提高氮含量同时降低载流子浓度并增加 Zr 空位、N 间隙等本征缺陷，作者把“无序强度”变成可控轴。热点价值在于把晶体缺陷工程、超导量子临界和维度判据接到同一批样品上；它不是高温超导，但其无序临界方法可直接迁移到镍酸盐、铁基和二维超导薄膜。"
      },
      {
        "title": "生长工艺与可复现窗口",
        "text": "Zr 靶纯度 99.95%、直径 60 mm；基底为 MgO(100) 单晶。腔体基压约 1.5×10⁻⁴ Pa，通入 N₂/Ar 后总压 0.2 Pa，射频功率 300 W，基底温度约 740 K。五组 N₂:Ar 体积比分别为 1:19、1:9、3:17、7:33、1:4，对应氮分压占比 5.0%、10.0%、15.0%、17.5%、20.0%；沉积时间调节到约 200 nm，轮廓仪复核厚度。正文未报告 MgO 清洗/退火、靶基距、气体纯度、总流量、沉积时间/速率、基底旋转、升降温、后退火和批次产率。复现时最关键的是把真实 N/Zr 与设定气体比同时记录，不能仅用阀门设定代表组成。"
      },
      {
        "title": "结构、成分与质量证据",
        "text": "EDS 给出 x 从约 1.21 增至 1.50；θ–2θ 中除 MgO(200) 外只见 fcc-ZrN(200)，峰位 38.94°→39.15°，晶格常数约 4.604–4.627 Å；(220) φ 扫描出现四重峰，支持立方外延取向。优点是成分、相纯度和面内外取向互相印证；不足是 EDS 对轻元素 N 的定量误差没有给出，也没有 XPS/RBS/ERDA、摇摆曲线 FWHM、TEM 缺陷密度、表面粗糙度或多批统计。作者把 Zr 空位和 N 间隙作为无序来源主要依据既有研究与富氮化学计量，本文没有直接成像或定量缺陷，因此“缺陷类型”属于合理推断，不是直接观察。"
      },
      {
        "title": "物性测量、关键数据与证据链",
        "text": "Hall 条由机械掩膜定义，宽 1.0 mm、长 10.0 mm、电压端间距 3 mm，Ti/Au 接触；PPMS-6000 加 ³He 制冷机做四探针电阻，磁场分别垂直和平行膜面。Tc（ρ 降至 ρ(10 K) 的 90%）从 x=1.21 的 4.66 K 总体降至 x=1.50 的 1.73 K；ρ(300 K) 从 0.43 增至 2.64 mΩ·cm，10 K 的 kFℓ 从 1.99 降至 0.31。x≥1.30 的 Bc2⊥(0)≈2.19–5.12 T、Bc2∥(0)≈1.60–2.72 T，相干长度约 8–19 nm，远小于 200 nm，确立三维超导。随后多温磁阻在宽场区交叉；相邻温区的二维幂律缩放给出的 zν 随降温发散，激活缩放也能塌缩数据。直接观察是宽交叉区和各向异性磁阻；二维 Griffiths 是缩放模型支持的解释。"
      },
      {
        "title": "结论、局限与实验建议",
        "text": "最强证据是同一系列中 x=1.21 不出现 QGS，而 x≥1.30 在两个磁场方向均出现宽交叉与发散指数，并且膜厚/相干长度先排除了几何二维性。最弱环节是缩放采用相邻三条等温线和选定温区，参数稳定性、临界场定义以及电子加热可能影响发散；Bc2⊥>Bc2∥ 的反常各向异性也尚未解释。下一批应加入 Hall 随温度、低频噪声/扫描 SQUID 映射稀有区、TEM/正电子湮没定量空位，并展示不同温区、温度间隔和临界准则的稳健性。阅读顺序建议实验方法→表1/图3–4的三维判据→图5–9缩放；推荐 S。"
      }
    ]
  },
  {
    "date": "2026-09-01",
    "issue": 7,
    "headline": "从超导无序临界到原子近邻：七篇生长—缺陷—物性证据链",
    "material": "TiN/重构蓝宝石",
    "title": "Highly crystalline superconducting TiN resonators grown on thermally reconstructed sapphire",
    "authors": "Thomas J. Smart; Marc Neis; Janine Lorenz; Marcello P. Guardascione; Roudy Hanna; Michael Schleenvoigt; Yuan Gao; Joscha Domnick; Benjamin Bennemann; Abdur Rehman Jalil; Jin Hee Bae; Harsh Bhardwaj; F. Stefan Tautz; Felix Lüpke; Detlev Grützmacher; Rami Barends; Pavel A. Bushev; Peter Schüffelgen",
    "journal": "arXiv:2606.20317v3 · cond-mat.supr-con",
    "method": "CO₂ 激光热重构 + 等离子体辅助 MBE",
    "rating": "S",
    "access": "重点全文精读（v3 HTML 正文、Methods、Appendix A–E、图 1–13）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2606.20317",
    "fullText": "https://arxiv.org/html/2606.20317",
    "reportUrl": "/reports/2026-09-01",
    "sections": [
      {
        "title": "科学问题与对照设计",
        "text": "论文比较两条蓝宝石预处理路线：Piranha+1% HF 的化学清洗 B-Al₂O₃，与在超高真空中用 CO₂ 激光形成 (√31×√31)R±9° 双台阶重构的 R31-Al₂O₃。两类基底被同时装入同一 MBE 生长，TiN 厚度、温度、N 等离子体和 Ti 通量保持一致，因此晶体学差异主要可归因于表面模板。作者进一步把“更好的晶体”与“更低的微波损耗”分开检验：R31 明显减小马赛克度，但两类芯片的单光子内部品质因数相近，说明晶体学改善不必自动转化为器件 Q 的提高。"
      },
      {
        "title": "生长卡与后处理",
        "text": "10×10 mm c 面 α-Al₂O₃ 以 3 °C/s 升至 1700 °C、保温 200 s，再以 3 °C/s 冷却；腔压约 10⁻⁹ mbar，得到约 0.4 nm 双层台阶，RHEED 验证 R31 重构。样品可在空气存放六个月，进 MBE 前 200 °C 烘 45 min；基础真空约 1×10⁻¹⁰ mbar。生长时 RF N 等离子体 400 W、N₂ 1.25 sccm、腔压 1.5×10⁻⁴ mbar；Ti 电子束源分压约 1×10⁻⁸ mbar，速率约 0.4 Å/s；1150 °C 生长 106 nm TiN。结束后在原子 N 中 1100 °C 保温 1 h，30 min 冷至室温；另制备 17 nm 膜用于 TEM。正文未报告 Ti 源纯度和绝对 Ti 通量标定误差。"
      },
      {
        "title": "质量表征与超导均匀性",
        "text": "AFM 显示 R31 台阶更平整且 TiN 复制台阶，支持 step-flow；XRD 证明 TiN(111) 外延。TiN(111) 摇摆曲线 FWHM 从化学清洗基底的 0.098° 降至 R31 的 0.047°；(402) RSM 给 R31 膜 a∥=4.245±0.003 Å、a⊥=4.242±0.003 Å，微应变更均匀，化学清洗样品等强度轮廓更拉长。TEM/STM 补充界面和表面形貌。沿 424 nm 线采 200 条隧穿谱，BCS 拟合能隙约 0.63 与 0.67 meV；两者 Tc=5.08 与 5.11 K，说明表面重构提高取向一致性，但未显著改变超导能标。"
      },
      {
        "title": "器件测量与关键结果",
        "text": "106 nm 膜被加工为 λ/4 共面波导谐振器，频率约 4.8–8.1 GHz；低温传输 S21 用复平面拟合提取 Qi、Qc 和平均光子数。多数谐振器在单光子区 Qi>10⁶；化学清洗与 R31 芯片的单光子中位 Qi 分别为 1.33×10⁶ 和 1.13×10⁶，且置信区间明显重叠；高光子数部分器件超过 10⁷。因此直接观察支持“R31 改善结晶”，却不支持“R31 必然提升微波 Q”。作者认为当前损耗可能由表面、界面、加工残留或两能级系统控制，晶粒错配已不是主瓶颈。"
      },
      {
        "title": "局限、复现风险与下一步",
        "text": "单个芯片的器件离散较大，R31 样品的单光子置信区间更宽；没有跨多个 MBE 批次的统计，难把偶然加工差异与基底路线完全分离。1150 °C 会促进 N 逸出，Tc 低于约 5.7 K 的先进水平；作者建议 NH₃ 或更强氮化条件。复现时应在同一晶圆上做交错预处理、随机化器件位置，并记录酸洗终点、激光温度计发射率、RHEED 强度、N/Ti 比和表面氧化等待时间。阅读顺序：Methods 生长卡→图4摇摆/RSM→图5能隙均匀性→图6与附录E的 Qi 分布；推荐 S。"
      }
    ]
  },
  {
    "date": "2026-09-01",
    "issue": 7,
    "headline": "从超导无序临界到原子近邻：七篇生长—缺陷—物性证据链",
    "material": "NdNiO₃/NdMnO₃ 超晶格",
    "title": "Charge transfer and competing symmetry breaking drive orbital reconstruction and emergent ferromagnetism in insulating oxide superlattices",
    "authors": "Nandana Bhattacharya; Ranjan Kumar Patel; Siddharth Kumar; Sourav Chowdhury; Manav Beniwal; Suresh Chandra Joshi; Prithwijit Mandal; Jayjit Kumar Dey; Weibin Li; Manuel Valvidares; Zhan Zhang; Hua Zhou; Andrei Gloskovskii; Christoph Schlueter; Christoph Klewe; Srimanta Middey",
    "journal": "arXiv:2608.28107v1 · cond-mat.mtrl-sci / str-el",
    "method": "脉冲激光沉积 PLD / 单元胞级超晶格",
    "rating": "S",
    "access": "重点全文精读（HTML 正文、实验部分、图 1–5）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.28107",
    "fullText": "https://arxiv.org/html/2608.28107",
    "reportUrl": "/reports/2026-09-01",
    "sections": [
      {
        "title": "问题、样品矩阵与热点",
        "text": "研究对象为 [n uc NdNiO₃/n uc NdMnO₃]×m（n=2,4,6；m=9,4,3）数字超晶格。核心问题是内部 Ni–O–Mn 界面造成的电荷转移/轨道键合，如何与 NdGaO₃ 基底的拉伸应变竞争。厚度 n 是关键对照：n=6 保留更多非界面层，n=2 几乎每层都靠近界面。它属于物性调控主线，也与镍酸盐热点直接相关，但不是高压高温超导研究；其价值在于说明同一 Ni 轨道可以被界面 σ 键合反转，而不能只用外延应变解释。"
      },
      {
        "title": "生长工艺与结构质量",
        "text": "GaO₂ 单终止 NdGaO₃(001)pc 基底经热处理获得；Neocera PLD 使用 KrF 248 nm 激光，2 Hz、2 J cm⁻²，基底 750 °C、动态 O₂ 150 mTorr。沉积后在同温度、500 Torr O₂ 中退火；正文未明确保温时长和冷却速率。高压 RHEED 振荡逐单元胞监控，条纹图样支持层层生长与平滑界面。AFM 见台阶；同步辐射(00L)出现 Laue 条纹和一、二级超晶格卫星峰，半级峰与倒易空间图确认 a⁻b⁺c⁻ 八面体转动及周期调制。缺少截面 STEM/EELS 的直接界面宽度和氧空位定量，这是结构证据链的主要缺口。"
      },
      {
        "title": "输运与电子结构重构",
        "text": "四探针 Van der Pauw 输运显示纯 NNO 膜约 160 K 发生有滞后的金属—绝缘转变；n=6 的转变降到约 100 K，n=4 和 n=2 在全温区绝缘。n=2 可用激活模型拟合，Eg≈147 meV。Ni/Mn L 边和 O K 边 XAS 看到随 n 减小，Ni 由 3d⁸L̲ 向 3d⁸/Ni²⁺移动、Mn 向 Mn⁴⁺移动；HAXPES+XAS 重建得到约 2 eV 的 Ni–Mn 电荷转移能标。直接观察是谱重与价态指纹变化；把它定量翻译为逐层电荷量仍依赖参考谱和表面敏感 TEY。"
      },
      {
        "title": "轨道反转与磁性证据",
        "text": "室温、约 15°掠入射 XLD 比较面内/面外轨道：n=6 的 Ni eg 分裂符合拉伸应变下 dx²−y² 较低；n=2 的 XLD 符号反转，显示界面 Ni–O–Mn 的 d3z²−r² σ 键合压过基底应变。XMCD 在 3.5 K、6 T、约 20°掠入射测得 Ni 与 Mn L3 同号，支持铁磁耦合；和规则给 n=2 约 0.4 μB/Ni、1.53 μB/Mn，n=6 的 Mn 约 2.7 μB，79 K/0.3 T 仍见铁磁信号。作者据此提出 n=2 以 Ni²⁺–O–Mn⁴⁺铁磁超交换为主；这一步是由价态、轨道和 XMCD共同约束的模型判断。"
      },
      {
        "title": "局限与可执行建议",
        "text": "最强证据是厚度系列把输运、价态、XLD 符号与 XMCD 同步关联；最弱处是没有元素分辨磁滞回线、层分辨价态/氧空位成像，也缺少只改变应变或只改变界面化学的正交对照。下一步可在不同晶格常数基底上重复 n 系列，加入 STEM-EELS/ABF 定量界面与氧柱，做角分辨 XMCD、矢量磁化和总电子产额/荧光产额对照。生长端需报告退火时长、冷却、靶材密度和每单元胞脉冲数。阅读顺序：图1结构→图2/3价态与能隙→图4轨道反转→图5磁性；推荐 S。"
      }
    ]
  },
  {
    "date": "2026-09-01",
    "issue": 7,
    "headline": "从超导无序临界到原子近邻：七篇生长—缺陷—物性证据链",
    "material": "AlGaAs 晶相量子点纳米线",
    "title": "Crystal-phase quantum dots in AlGaAs nanowires",
    "authors": "Rohan Radhakrishnan; Rodion Reznik; Gilles Patriarche; Lorenzo Leandro; Igor Ilkiv; Anna Andreeva; Artem Khrebtov; George Cirlin; Nika Akopian",
    "journal": "arXiv:2608.28353v1 · cond-mat.mes-hall / physics.optics / quant-ph",
    "method": "Au 催化 VLS-MBE 纳米线",
    "rating": "A+",
    "access": "相关条目全文详读（HTML 正文、Methods、Supplementary 1–4、图 1–4）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.28353",
    "fullText": "https://arxiv.org/html/2608.28353",
    "reportUrl": "/reports/2026-09-01",
    "sections": [
      {
        "title": "科学问题与样品设计",
        "text": "晶相量子点不是靠成分势阱，而是在同一材料纳米线中插入几层不同晶型。本文首次在 AlGaAs 纤锌矿纳米线内利用自发形成的闪锌矿插层构成量子点，问其是否真是“纯晶相”束缚、能否达到量子光源所需的窄线宽和单光子纯度。AlGaAs 还能自发形成低 Al 核/高 Al 壳，使壳层钝化并把载流子收在核心。该工作和晶体生长关系很强，但插层目前随机出现，尚未给出确定性相位切换工艺。"
      },
      {
        "title": "MBE 工艺与形貌",
        "text": "Si(111) 先用 HF:H₂O 去原生氧化层，再在金属化腔 850 °C 退火；550 °C 蒸镀约 0.5 nm Au，真空转入生长腔。基底到 510 °C 后先稳定 As₄ 通量，再同时开启 Al、Ga，As-rich 下生长 25 min，名义 AlAs/GaAs 比 0.4。Au 液滴决定 7–20 nm 核直径；闪锌矿插层密度随样品约 15–50 个/μm，典型厚度少于 3 nm、仅几原子层。正文未给束流等效压、V/III 比、升降温、Au 颗粒分布、线长和产率，这些正是复现相位统计最需要的参数。"
      },
      {
        "title": "结构/成分证据与替代解释",
        "text": "HAADF-STEM 区分纤锌矿与闪锌矿，并显示核的晶相贯穿到壳。EDX 在壳层看到 Al 从纤锌矿约 x=0.4 增至闪锌矿插层约 x=0.6；若量子发光来自成分涨落，这会构成替代解释。作者转而分析靠近 Au 顶端、壳很薄的位置，HAADF 强度在前两处插层无可辨的核成分变化，而更远第三处因壳成分改变出现对比，因此认为核心量子点主要由晶相带阶形成。这个对照很聪明，但 HAADF 对厚度/应变也敏感，仍需原子探针或定量多片 STEM 统计进一步排除亚百分比成分差。"
      },
      {
        "title": "光学条件与关键结果",
        "text": "单根纳米线低温微区 PL 分辨出激子 X 与双激子 XX，线宽分别约 104 和 61 μeV，远小于典型晶相量子点的 meV 量级。X–XX 互相关出现级联 bunching，X 自相关 g²(0)<0.5；更高时间分辨的另一实例达到 <0.1。时间分辨 PL 快分量约 1 ns，与反聚束时间 0.90 ns 一致，支持 type-I 共定位而非长寿命 type-II。偏振谱给精细结构分裂 235±30 μeV；沿线轴 Faraday 几何加磁场出现两支 Zeeman 分裂和抗磁位移。最强证据是结构定位、窄线、单光子统计和寿命互相闭合。"
      },
      {
        "title": "局限、复现建议与阅读建议",
        "text": "作者尚不能控制插层位置/数目，15–50 μm⁻¹ 的随机密度与器件集成需求相冲突；激发功率、温度和磁场上限等部分细节需查 Methods/图注，文中也未给器件间线宽分布。下一步应把 V/III、温度和 Au 液滴尺寸做成相图，利用原位 RHEED/反射率监控晶相切换，并统计单根线中插层厚度—核径—寿命—线宽的关联。阅读顺序：图1/2确认晶相而非成分→图3单光子证据→图4能级性质→Methods 工艺；推荐 A+。"
      }
    ]
  },
  {
    "date": "2026-09-01",
    "issue": 7,
    "headline": "从超导无序临界到原子近邻：七篇生长—缺陷—物性证据链",
    "material": "PtSiGe 与 Nb/PtSiGe",
    "title": "Fabrication-free assessment of microwave losses in germanium-based dielectrics and superconductors",
    "authors": "Haoran Lu; Kushagra Aggarwal; Xiangqin Wang; Pauline Drexler; Daniel Tong; Maciej W. Olszewski; Anand Ithepalli; Lingda Kong; Debdeep Jena; Peter L. McMahon; David A. Muller; Dominique Bougeard; Valla Fatemi",
    "journal": "arXiv:2608.28463v1 · quant-ph / cond-mat.mes-hall",
    "method": "溅射 + 400 °C 快速热反应 / flip-chip 损耗筛选",
    "rating": "A+",
    "access": "相关条目全文详读（HTML 正文 I–IV、Appendix A–I）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.28463",
    "fullText": "https://arxiv.org/html/2608.28463",
    "reportUrl": "/reports/2026-09-01",
    "sections": [
      {
        "title": "问题与实验策略",
        "text": "作者开发无需在被测材料上加工器件的 flip-chip 传感器，用同一组 Ta/Nb 共面波导谐振器分别靠近 Ge、Ge/SiGe 量子阱、PtSiGe 和 Nb-PtSiGe，测目标材料引入的微波损耗。科学问题不是只问 Tc，而是材料是否同时适合低损耗量子电路。该策略把材料生长、表面处理、相分离和器件损耗快速联结，特别适合筛选尚不值得完整加工的候选超导膜。"
      },
      {
        "title": "材料制备与几何",
        "text": "Ge/SiGe 晶圆切片后以光刻胶保护，1165 去胶、IPA/DI 清洗，15 s 缓冲氧化物刻蚀后立即进溅射系统。PtSiGe 样品溅射 60 nm Pt；Nb-PtSiGe 溅射 60 nm Pt/约 40 nm Nb 双层；随后 Ar-rich 气氛 400 °C 快速退火 9 min，通过固相反应生成合金。STEM 实测 PtSiGe 厚 138±7 nm；双层样品为 128±11 nm PtSiGe+37±3 nm Nb。传感芯片由 100 nm Ta/5 nm Nb/Si 制成，8 个 λ/4 CPW（中心 6 μm、缝 12 μm），4.2–7.2 GHz，4 μm 高 SU-8 柱控制间距。"
      },
      {
        "title": "结构、界面和缺陷表征",
        "text": "STEM-ADF/EELS 显示 Pt 均匀而 Ge/Si 反相关，说明锗化物和硅化物相分离；裸膜表面形成含 Si/Ge 氧化层，Nb 覆盖样品出现较厚 NbOx。Nb/PtSiGe 界面还见 Ar 气泡，作者建议 Kr 溅射减少惰性气体夹杂。Nb 覆盖把表面粗糙度从 4.3 nm 降到 2.4 nm，但仍不能说明金属—基底界面干净。该论文的优点是把微波损耗与真实截面化学对应起来；不足是没有 XRD 相鉴定、晶粒取向和成分相分数，‘PtSiGe’实际是多相反应层而非单一化合物。"
      },
      {
        "title": "微波损耗与超导数据",
        "text": "混合室通常 10 mK 测量。Ge 和刻蚀到 Ge0.75Si0.25 虚拟层的低光子等效损耗角分别 (183±37)×10⁻⁶ 与 (200±29)×10⁻⁶；独立在同类基底加工 Nb resonator 得到 (170±9)×10⁻⁶，与 flip-chip 相差约 15%，验证方法。HF 处理把量子阱样品损耗降到 (108±18)×10⁻⁶。直流 Tc 从 PtSiGe 的 0.54 K 提升到 Nb-PtSiGe 的 1.5 K。温度依赖微波响应提示两种膜都有能隙不均匀；Nb 覆盖降低损耗和老化，但实际 Nb-PtSiGe 共面谐振器未出现可测共振，表明未被 flip-chip 探测的金属—基底/侧壁损耗可能主导。"
      },
      {
        "title": "结论边界与复现建议",
        "text": "最有价值的结论不是‘Nb 已解决问题’，而是‘面向材料的无加工筛选能排除明显差的候选，但不能替代真实器件几何’。flip-chip 电场被金属屏蔽，对埋藏金属—基底界面不敏感，正好解释为何预测改善与器件失败并存。后续应做退火温度/时间矩阵、Kr 对照、原位帽层、XRD/TEM 相比例、侧壁钝化，并用同一膜同时测 flip-chip 与加工谐振器。阅读顺序：图1方法→图2 Ge 损耗校准→图3材料截面/Tc→后续温变与附录加工；推荐 A+。"
      }
    ]
  },
  {
    "date": "2026-09-01",
    "issue": 7,
    "headline": "从超导无序临界到原子近邻：七篇生长—缺陷—物性证据链",
    "material": "YIG/GGG 单晶膜自旋波网络",
    "title": "Magnonic Combinatorial Memory based on a network of coupled active ring circuits",
    "authors": "Mykhaylo Balinskiy; Paulo Julio; Jeffrey Vargas; Diana Bisono Balaguer; Jacob Greenstein; Alexander Khitun",
    "journal": "arXiv:2608.28457v1 · cond-mat.other",
    "method": "液相外延 YIG/GGG + 有源环路",
    "rating": "A",
    "access": "相关条目全文详读（PDF 正文、理论模型、原型与补充讨论）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.28457",
    "fullText": "https://arxiv.org/pdf/2608.28457",
    "reportUrl": "/reports/2026-09-01",
    "sections": [
      {
        "title": "与晶体物性的关系",
        "text": "论文把单晶 YIG 低阻尼自旋波延迟线作为三个有源环路共同的磁性介质，通过相位、滤波频率和局域微磁体改变环路耦合，把‘是否自激振荡’编码成组合记忆状态。它不是新晶体生长工艺，但 YIG 膜厚、磁化和铁磁共振线宽直接决定传播损耗、相位稳定和开关比，因此属于‘晶体质量如何进入器件物性’的关联条目。作者宣称可编码位数随环路数近二次增长；这个是网络参数计数的理论扩展，不等于已做出同规模存储阵列。"
      },
      {
        "title": "样品、装置和材料参数",
        "text": "器件自下而上为 NdFeB 永磁体、带六根微带天线的 PCB、抛薄 GGG 和未图形化 YIG 膜。YIG 由液相外延生长在 GGG 上，膜厚 42 μm，饱和磁化约 1750 G，3 GHz 的 FMR 线宽 ΔH=0.6 Oe；GGG 从 0.5 mm 抛到 0.3 mm。两块 2×2×0.25 英寸 NdFeB 提供约 375 Oe 面内偏场；天线约 6 mm×0.15 mm。正文未报告液相外延助熔剂、配比、温度、拉出/旋转、冷却、晶向、面粗糙度和片内线宽均匀性，因此生长不可仅靠本文复现。"
      },
      {
        "title": "电路条件与测量协议",
        "text": "三条 ARC 分别选不同发射/接收天线，每条含宽带放大器、可调 YIG 球带通滤波器、相移器和方向耦合器。中心频率设为 1.614、1.838、1.720 GHz；相位分别取 0、2π/3、4π/3，组合成 27 个相位地址。自动振荡需同时满足 Barkhausen 增益与相位条件。作者固定放大和滤波，只改变相位，因此不同组合的输出变化可归于网络相干条件，而不是增益重调。噪声约 −90 dBm，>−60 dBm 定义 On，室温 On/Off 超过 30 dB。"
      },
      {
        "title": "微磁体调控与证据强弱",
        "text": "靠近天线6放置体积约 0.05 mm³ 的 NdFeB 微磁体，局域改变自旋波色散/相位，从而改变哪些相位组合能振荡。图6/7比较有无微磁体的 27 组合，展示单个局域扰动可以重排二进制响应图。直接观察是每个相位地址的环路功率；‘27-bit’实际指 27 个地址各自的有/无振荡响应组成一个 27 位模式，并非同一时刻可独立随机写入的 27 个传统存储单元。论文没有给多次循环误码率、保持时间、漂移和温度/磁场容差，因此稳健性目前主要由 30 dB 电平裕度代表。"
      },
      {
        "title": "局限与下一步",
        "text": "最大风险是用商用离散滤波器/相移器和毫米级天线构成的实验台距离集成存储还很远；环路增益、相位噪声和 YIG 非均匀性会随网络规模累积。下一步应报告重复读取统计、频率漂移、微磁体位置灵敏度、相邻环路串扰和长期稳定，并把同片 YIG 的 ΔH、厚度/粗糙度地图与各路径损耗关联。若要优化晶体，优先降低片内 ΔH 波动而不只是平均线宽。阅读顺序：原型图4/5→相位图6→微磁体图7→理论位数公式；推荐 A。"
      }
    ]
  },
  {
    "date": "2026-09-01",
    "issue": 7,
    "headline": "从超导无序临界到原子近邻：七篇生长—缺陷—物性证据链",
    "material": "GeSn 外延合金",
    "title": "Atomic short-range order: a new degree of freedom for band engineering of GeSn semiconductor alloys",
    "authors": "Shang Liu; Yunfan Liang; Nirosh M. Eldose; Shunda Chen; Xiaochen Jin; Haochen Zhao; Manoj Shah; Jin-Hee Bae; Omar Concepcion; Fernando M. de Oliveira; Ilias Bikmukhametov; Xiaoxin Wang; Yuping Zeng; Dan Buca; Mansour Mortazavi; Damien West; Shengbai Zhang; Tianshu Li; Gregory J. Salamo; Shui-Qing Yu; Jifeng Liu",
    "journal": "arXiv:2407.02767v3 · cond-mat.mtrl-sci / mes-hall",
    "method": "MBE 与 CVD 对照 / APT 短程有序",
    "rating": "S",
    "access": "重点全文精读（v3 HTML 正文、Experimental、Supporting figures）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2407.02767",
    "fullText": "https://arxiv.org/html/2407.02767",
    "reportUrl": "/reports/2026-09-01",
    "sections": [
      {
        "title": "核心问题与新意",
        "text": "常规半导体带隙工程使用成分、应变和量子限域；本文提出在宏观成分/晶格常数不变时，改变 Sn–Sn 第一近邻概率也能显著调带隙。作者比较四组由不同设备制备的 GeSn 薄膜或 GeSn/Ge 多量子阱：MBE 20/7 at.% Sn，CVD 14/7 at.% Sn，并用原子探针的 Poisson-KNN 方法量化 5 nm 立方体内短程有序。v3 在 8 月 28 日更新，属于重要修订条目；其直接价值是提醒生长人员：相同名义组分并不意味着相同局域化学环境和光学性质。"
      },
      {
        "title": "生长窗口与样品可比性",
        "text": "两组 MBE 来自不同设备，生长温度 120–150 °C；两组 CVD 来自不同反应器，250–350 °C，较高温度用于分解前驱体。样品1/3为薄膜，样品2/4为 GeSn/Ge 多量子阱；正文表中给 Ge/Sn 比，但未在主文统一报告各设备的 Ge/Sn 束流、CVD 前驱体/载气/压力、基底、厚度、退火和速率，完整复现需回查原样品论文。由于方法与设备、温度、结构同时变化，‘MBE 对 CVD’不是完全单变量对照；作者用两组独立样品和理论表面终止计算降低这一风险，但不能完全消除。"
      },
      {
        "title": "APT 统计与质量控制",
        "text": "Poisson-KNN 重建减轻场蒸发造成的原子位置扰动；四组分别分析 72、100、250、200 个 5×5×5 nm³ 小立方。MBE 两组 Sn–Sn 1NN 参数均值约 1.14，CVD 约 1.01，Welch t 检验 p<0.0001；MBE 样品中约 90% 和 66% 体素大于随机值1。模拟表明位置扰动会低估差异，因此观测差约 0.13 被视为下限；四组重建近邻距离标准差约 0.98–1.06 Å，相近的仪器模糊支持相对比较。强项是体素统计与误差对照；弱项是 APT 检出效率、局域放大和样品结构差异仍可能残留偏差。"
      },
      {
        "title": "带隙效应与机制链",
        "text": "10 K、1064 nm 激发 PL 比较完全应变的 7 at.% Sn MBE 量子阱和 9 at.% Sn CVD 薄膜；应变 −1.02% 与 −1.18% 相近。按组分和量子限域，MBE 本应更蓝，但其带间峰反而红移约 25 meV；结合组分本应造成约 60 meV 蓝移，作者估算更强 Sn–Sn 近邻至少压低直接带隙约 85 meV。77 K Raman 的扰动激活肩峰也支持 MBE 的 Sn–Sn 近邻更多。DFT 表面模型指出 MBE 较低温和无 H 终止更容易冻结 Sn–Sn 邻近，CVD 的 H 终止/高温促进重排；SRO 参数增加约 0.7 的理论带隙变化可达约 85 meV。"
      },
      {
        "title": "边界与实验建议",
        "text": "‘只有 SRO 能解释’仍强于数据本身：两样品一个是量子阱、一个是薄膜，界面、载流子和缺陷发光可能不同；PL 峰不是无模型的本征带隙。最有说服力的后续是同一反应器/同一结构下只改变表面 H 化和温度，配合吸收/椭偏而不只 PL，并用 EXAFS 或 4D-STEM 交叉验证 SRO。生长记录应新增局域有序指标，而不只报告 Sn%、应变和缺陷密度。阅读顺序：图1/2 APT 稳健性→图3 PL/Raman反常→DFT 生长面模型→Experimental；推荐 S。"
      }
    ]
  },
  {
    "date": "2026-08-31",
    "issue": 6,
    "headline": "从可复现 CVD 到高场费米面与镍酸盐轨道选择性",
    "material": "YbNi₄P₂",
    "title": "Field-tuned quasiparticles and electronic structure in heavy-fermion YbNi4P2",
    "authors": "Will Broad; Owen Moulding; Takaki Muramatsu; Manuel Brando; Alix McCollam; Femke Bangman; Gertrud Zwicknagl; Kristin Kliemt; Cornelius Krellner; Sven Friedemann",
    "journal": "arXiv:2608.28119v1 · cond-mat.str-el",
    "method": "Czochralski 提拉单晶",
    "rating": "S",
    "access": "全文精读（HTML 正文 I–V、Supplementary S I–S VII、图 1–8 与表 S1–S4）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.28119",
    "fullText": "https://arxiv.org/html/2608.28119",
    "reportUrl": "/reports/2026-08-31",
    "sections": [
      {
        "title": "问题、热点与实验判据",
        "text": "YbNi₄P₂ 是四方重费米子铁磁体，Kondo 温度约 8 K、Curie 温度仅约 170 mK。重准粒子的费米能标度很低，外场的 Zeeman 能足以连续削弱 Kondo 单态，并可能把某个费米面口袋推过 Lifshitz 转变。作者要回答的不是笼统的“磁场是否改变电阻”，而是三个可分辨问题：量子振荡有效质量能否直接看到 Kondo 退重整化；17 T 左右已知异常究竟对应连续质量变化还是突发的费米面/准粒子重构；不同晶向的频率如何与具体费米面片层对应。实验设计把温度依赖振幅、场窗内频率和角分辨频率分别对应质量、突变和拓扑，从而避免只靠单条磁阻曲线解释机制。"
      },
      {
        "title": "晶体、生长、取向与质量",
        "text": "样品来自定向 YbNi₄P₂ 单晶，主文确认四方结构；Supplementary 说明晶体按此前发表的 Czochralski 方法制备。本论文没有重述 Yb/Ni/P 原料纯度与配比、坩埚、保护气氛、熔化温度、籽晶、拉速、转速、降温、退火、晶锭尺寸和产率，复现这些项目必须回查 J. Cryst. Growth 449, 129 (2016)，不能把引用视作本文已报告。测量条通常长约 1 mm、截面约 0.2×0.2 mm²；S1、S3 电流沿 [100]，S2 沿 [001]，同时覆盖纵向和横向磁阻。高质量证据来自 6–35 T 可持续追踪的量子振荡和 Dingle 分析给出的 50–100 nm 平均自由程。论文未给本批晶体的单晶精修、Laue 图、WDS/ICP、RRR 分布和多炉统计，因此“高纯”主要由输运寿命而非完整化学证据链支撑。"
      },
      {
        "title": "测量条件、几何与分析流程",
        "text": "高场实验在 HFML 完成，最高 35 T，³He 低温系统基温约 0.3 K；补充实验在 Bristol 的 ³He/⁴He 稀释制冷机中完成，最高 12 T。电阻使用标准四探针交流法；论文未报告激励电流、频率、接触电阻和几何因子误差。样品置于单轴旋转器，磁场扫描 [001]–[100]、[100]–[110] 和 [110]–[001] 三条角路径，初始对准不确定度约 5°。作者同时分析 R(B) 与 dR/dB：前者保留低频，后者放大高频并便于扣除背景；多项式背景在 FFT 前逐一核验。有效质量由 Lifshitz–Kosevich 温度因子得到，散射由 Dingle 因子得到；已知 Lifshitz 场 B₃、B₄、B₇、B₈、B₉（B∥[001] 时约 4.8、5.1、7.8、11、16.8 T）用来切分场窗，避免把跨相变 FFT 误当成单一频率。"
      },
      {
        "title": "核心数据与相互支撑的证据链",
        "text": "6–35 T 检出多个基本频率：中等极角处 α 分支约 5.5 与 4.1 kT，靠近 [100] 的 β 约 1.6 kT，靠近 [001] 的 γ、δ 分别约 0.5 与 0.4 kT。γ 轨道质量从 7 T 的 7(1)mₑ 降到 15 T 的 3.2(1)mₑ，约减半；这一趋势与独立比热 Sommerfeld 系数同步，并被以 TK 和晶场基态为输入的单离子 Kondo 重整化微扰模型定性复现。到 B₉≈17 T，连续趋势被打断：低场 γ≈0.53 kT、δ≈0.4 kT 消失，换成 γ⁺≈0.7、γ⁻≈0.6、δ⁺≈0.34、δ⁻≈0.23 kT。峰位索引显示变化发生在约 0.5 T 内；沿 [001] 相对分裂达约 20% 和 30%，转离易轴后减弱，θ>55° 时不再可见。直接观察是频率成对增加、原频率消失及强各向异性；“费米面重构或 g 因子突变”是模型层解释，而非唯一结论。"
      },
      {
        "title": "作者排除什么、仍不能区分什么",
        "text": "普通线性 Zeeman 分裂在量子振荡的 back-projection 中会相消，不能产生观察到的双频，因此必须有真实截面积的非线性变化或 m*g 斜率突变。作者提出两类模型：A 为 B₉ 处费米面重构并解除简并；B 为有效 g 因子突然变化。频率分裂所需的极化体积变化约 30–50%，而磁化在 B₉ 已距饱和不足 10%、异常不超过约 5%，故简单变磁转变不够；空间群也不支持交错磁，Pomeranchuk 方案在补充材料中被否定。f-core DFT 加 SOC 和几十 meV 刚性带移能把低场角度依赖分配给圆环状、jungle-gym、准一维片层及小口袋，却没有建模 B₉ 以上的相关重构。最强证据是同一转变场上频率、质量和角度行为共同改变；最弱环节是 A/B 两模型均能产生相似 back-projected 频率，现有实验没有直接测 g(B)。"
      },
      {
        "title": "结论、复现风险与下一步",
        "text": "可靠结论是：外场先连续降低 YbNi₄P₂ 重准粒子质量，B₉ 附近再发生急剧且各向异性的电子结构/准粒子性质变化。把它称为唯一的 Lifshitz 重构仍需谨慎，因为 g 因子、晶场混合与费米面本身可能同时变。复现实验首先要保持长平均自由程：每根定向条都应记录 Laue、尺寸、RRR、Dingle 温度和接触参数；FFT 必须按 B₉ 前后分窗并展示背景阶数敏感性。下一步最有判别力的是高场 ESR 直接测 g、磁致伸缩/超声检测晶格耦合、多个晶体的扭矩 dHvA 复核频率，以及在 B₉ 两侧做热电和 Hall。生长端应把 2016 工艺完整迁移成当前批次工艺卡并附 WDS/ICP 与多炉自由程统计。阅读顺序建议：图 2 的质量退重整化→图 3–5 的频率突变→Supplementary S I–S IV 的场窗和 Dingle；推荐 S。"
      }
    ]
  },
  {
    "date": "2026-08-31",
    "issue": 6,
    "headline": "从可复现 CVD 到高场费米面与镍酸盐轨道选择性",
    "material": "La₃Ni₂O₇₊δ",
    "title": "Orbital-Selective Coexistence of Interlayer Spin-Singlet Formation and SDW Order with Anomalous Spin Reconfiguration in Bilayer Nickelate La3Ni2O7 Revealed by 17O-NMR",
    "authors": "H. Lee; M. Yashima; M. Kakoi; T. Ino; Y. Arai; K. Kitagawa; H. Sakurai; Y. Takano; K. Kuroki; H. Mukuda",
    "journal": "arXiv:2608.27917v1 · cond-mat.str-el / supr-con · 已接收 JPSJ",
    "method": "固相反应多晶 + ¹⁷O 交换退火",
    "rating": "A+",
    "access": "全文精读（实验、结果 3.1–3.4、结论、图 1–4；样品为多晶粗粉）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.27917",
    "fullText": "https://arxiv.org/html/2608.27917",
    "reportUrl": "/reports/2026-08-31",
    "sections": [
      {
        "title": "为什么纳入、科学问题与热点背景",
        "text": "La₃Ni₂O₇ 在高压下的超导使双层镍酸盐成为热点，但常压 SDW 的真实自旋/电荷排布、层间耦合和 d₃z²−r² 轨道作用仍有多套互相竞争的图景。氧缺位和堆垛层错又容易把本征信号与缺陷效应混在一起。本文不是单晶生长论文，样品是粗多晶粉；之所以纳入，是因为它用内顶角 O(1)、外顶角 O(2) 和面内 O(3,4) 三个位点作为局域探针，直接询问两个与晶体物性调控相关的问题：150 K 以下哪种条纹 SDW 能同时解释各个位点内场；桥接双层的 d₃z²−r² 通道究竟携带自旋还是形成层间单态。它与本简报的关系是“样品缺陷—局域质量核验—物性机制”，但不应被包装成 Flux/CVT 单晶成果。"
      },
      {
        "title": "样品制备、结构与质量边界",
        "text": "La₃Ni₂O₇₊δ（δ≈0）用此前文献的固相反应路线制备，本文没有重述 La/Ni 原料纯度、配比、研磨/压片、烧结温度程序、氧分压、坩埚、淬火或产率，均为正文未报告。氧含量以热重分析估计；为获得 I=5/2 的 ¹⁷O 核信号，样品在 1000 °C 退火 4 h，以 ¹⁷O 交换天然 ¹⁶O。退火气体的 ¹⁷O 丰度、压力/流量和冷却方式正文未报告。交换后很窄的 ¹³⁹La(2)-NQR 谱与此前 δ≈0 高质量样品无明显差别，是作者排除严重退火损伤的主要证据。没有给粉末 XRD 精修、SEM/EDS、氧含量误差、堆垛层错比例或多个批次统计，因此样品质量判断主要是局域核谱学内部一致性，不能替代完整的结构缺陷表征。"
      },
      {
        "title": "NMR 条件、位点指认和关键对照",
        "text": "粗粉样在固定外场 H₀=11.968 T 下扫射频频率，温度从 160 K 降到 20 K。作者利用各位点 T₁/T₂ 差异做选择性脉冲：C2 取 τ=1 ms、重复时间 TR=290 ms 突出长弛豫 O(2)；C3 取 τ=12 μs、TR=20 ms 突出 O(3,4)；C1 取 τ=400 μs、TR=20 ms 突出 O(1)；低温宽谱 C3′ 使用 TR=50 ms，而全谱对照用 1.5 s。160 K 三峰的实验 NQR 频率约 0.68、0.10、0.78 MHz，并用 WIEN2k/PBE 全势 LAPW 算得的电场梯度和强度比联合指认。O(1):O(2):O(3,4) 实验强度约 1:1.6:4.0，接近理想位点数 1:2:4；这是比“峰位相近”更强的位点交叉验证。粉末平均使 O(3) 和 O(4) 无法分开，是解释边界。"
      },
      {
        "title": "Knight shift、SDW 内场与轨道选择性",
        "text": "160 K 时 Knight shift 分别约 O(2) 0.04%、O(1) 0.20%、O(3,4) 0.33%。作者参考相关氧化物认为轨道项很小，于是把差异主要归于局域自旋磁化率；O(2) 的 K 比面内氧小近一数量级，且 T₁、T₂ 更长，支持外顶角氧相关的 Ni-d₃z²−r² 自旋已被强层间成键—反键分裂和单态形成淬灭，而面内 dₓ²−y² 仍承载大部分自旋。低于 TSDW=150 K，所有面内 O(3,4) 峰明显展宽，拟合内场约 0.05 T；若是双自旋条纹或双自旋—电荷条纹，分别应留下 1/2 或 1/4 的非磁面内氧，与“所有面内峰变宽”冲突。单 spin–spinless 或 large–tiny 条纹则能解释面内和 O(2) 磁/非磁组分，因而成为剩余方案。直接观察是峰宽、强度和 K；具体条纹类型是受这些对照约束的模型判断。"
      },
      {
        "title": "115 K 异常的证据与局限",
        "text": "150–115 K 内顶角 O(1) 保持窄峰，说明来自上下 NiO₂ 层的超精细内场大体抵消，支持层间反平行堆垛。低于 TA≈115 K，O(1) 窄峰快速消失，而 O(2)-NMR 和此前 La(2)-NQR 对面内 SDW 没有对应异常；作者据此把变化定位为层间相对取向从严格反平行转向非反平行。滑移堆垛会让所有 La(1) 产生较大内场，与既有单晶 ¹³⁹La-NMR 中一半 La(1) 约 ±11 mT、另一半近零不符；简单铁磁堆垛又难与弱内场相容，故轻微倾斜 AFM 堆垛是最可行候选。弱点是“峰消失”主要归因于超宽化，却没有完整恢复丢失的谱重与内场分布；O(2) 磁性组分的内场也未直接求出，而是暂取与 O(3,4) 相似值。因此 TA 以下的精确倾角和唯一堆垛仍未确定。"
      },
      {
        "title": "结论、对单晶工作的启示与复现建议",
        "text": "论文建立的逻辑链是：位点强度与 EFG 指认→Knight shift 给出轨道选择性自旋分布→面内全谱展宽排除两类条纹→O(1) 温度行为定位层间重排。最可靠结论是 d₃z²−r² 层间单态与 dₓ²−y² 承载的面内 SDW 共存；“轻微倾斜 AFM”仍是最佳模型而非直接定角。对于后续单晶生长，关键不只是提高尺寸，而是同时控制 δ 和堆垛层错：每批晶体应做 TGA/碘量法、单晶 XRD 漫散射或 STEM，并在同一晶体上联合 ¹⁷O/¹³⁹La NMR。建议做可控氧退火系列并记录 ¹⁷O 分压、温度和淬火；若能在定向单晶上 H∥a,b,c 测谱，可分离 O(3)/O(4)、确定超精细张量和层间倾角。阅读顺序：图 1 位点指认→图 2 条纹排除→图 3/4 的 115 K 层间异常；推荐 A+，但必须记住它是多晶局域物性论文。"
      }
    ]
  },
  {
    "date": "2026-08-31",
    "issue": 6,
    "headline": "从可复现 CVD 到高场费米面与镍酸盐轨道选择性",
    "material": "单层/少层 MoS₂",
    "title": "Phenomenological Growth Regimes in Liquid-Precursor CVD of MoS2 on Functional Substrates",
    "authors": "Osamah Kharsah; Kilian Mouchel; Yossarian Liebsch; Cathy Sulaiman; Joel Verlande; Anke Hierzenberger; Abdallah Alghazali; Clara Grygiel; Stéphane Guillous; Henning Lebius; Marika Schleberger",
    "journal": "arXiv:2608.28269v1 · cond-mat.mtrl-sci",
    "method": "液相前驱体 CVD / 三温区硫化",
    "rating": "S",
    "access": "全文精读（正文、Methods、图 1–3 及文内 Supplementary 引用）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.28269",
    "fullText": "https://arxiv.org/html/2608.28269",
    "reportUrl": "/reports/2026-08-31",
    "sections": [
      {
        "title": "问题、工艺思路与热点意义",
        "text": "传统粉末源 CVD 同时受 Mo、S 蒸气输运波动控制，导致不同基底上的成核密度和覆盖率难复现。本文把 Mo 源预先以液相固定在基底上，只让 S 从气相输运，把问题改写为“初始润湿/锚定 + 后续硫扩散与局域转化”的反应—扩散体系。作者用 Al₂O₃(0001)、SrTiO₃(100)、rutile TiO₂(001)、MgO(100)、6H-SiC(0001) 五种晶体基底构成对照库，问相同炉程下为什么会得到叶状、星状、枝晶和三角畴，以及这些形态是否对应应变、掺杂和 PL 的变化。热点在于它提供可规模化二维材料生长的工艺窗口，又诚实把机制限定为“phenomenological”：所有质量输运和结合能结论来自 ex situ 相关性，而非原位直接测量。"
      },
      {
        "title": "完整生长配方与正文未报告项",
        "text": "基底均为商购 1×1 cm²、厚 1 mm。先旋涂 2% sodium cholate 水溶液作为成核促进剂，4500 rpm、45 s；再旋涂液相 Mo 前驱体，12000 rpm、45 s。前驱体由 1 mL 100% 饱和 ammonium heptamolybdate、1 mL OptiPrep 和 3.5 mL 去离子水组成。空气中 300 °C 退火 30 min，使 AHM 分解为固态 MoO₃ 中间体。随后进入三温区石英管炉：上游放 100 mg S 粉，Zone 1 为 170 °C；Ar 500 sccm 将硫蒸气送至 Zone 2，预煅烧基底在 750 °C 硫化 30 min；Zone 3 保持 250 °C 抑制副产物立即冷凝并稳定气流。正文未报告基底清洗、升温/降温速率、区间距离、管径、常压或减压、Ar 纯度、装片朝向、同批基底数、冷却气氛和每批方差，复现时应补齐。"
      },
      {
        "title": "形貌、覆盖率和基底控制的四种生长区",
        "text": "SrTiO₃ 形成高密度成核、侧向长度受限并在边缘并合的叶状层；AFM 主层厚约 0.7 nm，还见约 0.2 nm 亚台阶，提示 MoO₃→MoO₃₋ₓ→MoS₂ 转化不均或局部未完全硫化。TiO₂ 虽与 SrTiO₃ 同样易润湿，却只有稀疏成核，孤立星状畴可超过 500 μm；作者把它与高温表面重构、稀疏强锚定位点和各向异性边缘附着关联。MgO 在水接触和煅烧时可能水合/重构，产生百微米枝晶并大量二次成核，单层与多层覆盖约 49% 和 28%。SiC 接触角约 66.3°、极性表面能最低，可能部分去润湿，总覆盖较低但三角畴更规整，单层/多层约 15.1%/7.2%。这些是形貌—表面性质相关性；硫扩散长度、活化能和锚定能没有被直接测出。"
      },
      {
        "title": "表征条件、光谱结果与解释边界",
        "text": "形貌以光学图像和非接触 AFM 交叉表征：Park NX10 使用 AC160TS 探针，260–300 kHz、Q=201–530、尖端约 7 nm，扫描 0.15–0.5 Hz；每种基底用十张 200×200 μm² 光学图做阈值分割统计覆盖率。Raman/PL 使用 532 nm、1800 g/mm 光栅，至少五条高信噪谱，激光功率密度约 1.25×10⁵ W/cm²。以 sapphire 为基准，E₂g¹/A₁g 峰约 383.6±0.9/406.6±2.7 cm⁻¹；SrTiO₃ 为 385.0±0.3/406.4±2.8，SiC 为 385.2±0.3/405.0±0.9，MgO 为 386.5±0.7/407.2±1.7 cm⁻¹。向量矩阵把相对峰移换算成比较性的双轴应变和载流子变化；例如 SrTiO₃ 约 −0.28±0.31% 和相对 p 型 −0.66±1.3×10¹³ cm⁻²，PL 1.768±0.104 eV、FWHM 0.174±0.054 eV。作者明确提醒介电屏蔽、缺陷、层数和应变不均也会移峰，不能当作绝对掺杂计。"
      },
      {
        "title": "证据链、最强证据与替代解释",
        "text": "最强证据是所有基底共享同一前驱体和炉程，却产生可重复区分的覆盖率、AFM 形貌与 Raman/PL；同时 contact angle、极性表面能和已知高温稳定性提供物理排序。SiC 的低润湿—低覆盖和 MgO 的水合倾向—多层枝晶尤其一致。最弱环节是用纯水在室温、未处理基底上的接触角代表含 AHM/OptiPrep/胆酸钠溶液在煅烧和 750 °C 下的真实界面；作者自己指出这只是间接描述。TiO₂ 与 SrTiO₃ 润湿相近却形貌相反，正好证明单一“润湿定律”不成立。替代解释包括基底表面终止和台阶密度、残余 MoO₃₋ₓ、局部 S/Mo、晶界密度、层数以及激光加热。因缺少原位质谱/光学、XPS/TEM 和批次误差，反应—扩散框架应作为设计假设，而不是已经定量验证的机制。"
      },
      {
        "title": "结论、复现建议与工艺优化",
        "text": "论文最实用的贡献是把“基底效应”拆成前驱体润湿/锚定、硫供应、转化中间体和高温重构四个可调变量，并给出完整主炉程。复现时应首先固定旋涂前基底处理，记录实际前驱体黏度与接触角；在炉管中标定三温区的真实样品温度和 S 通量，而不是只记录设定值。建议对每种基底做 S 量、Ar 流量和 750 °C 保温时间的二维矩阵，配合 XPS 测 Mo⁶⁺/Mo⁴⁺、截面 TEM/SAED 和同位素 S 示踪，以区分残余氧化物、边缘附着与扩散受限。若目标是大面积单层，MgO 应优先减少水合和 Mo 富集，SiC 应改善初始覆盖但保留有序成核，TiO₂ 则应调节锚定位点密度。阅读顺序：Methods 工艺卡→图 1/2 的形貌分区→图 3 光谱及其误差声明；推荐 S。"
      }
    ]
  },
  {
    "date": "2026-08-30",
    "issue": 5,
    "headline": "输运法生长、压力临界与量子振荡相位：Ru₀.₉V₀.₁O₂、CeNiC₂、YbMnBi₂",
    "material": "Ru₀.₉V₀.₁O₂₊ᵧ",
    "title": "Substitution effects in RuO2 single crystals",
    "authors": "Shubhankar Paul; Kunihiko Yamauchi; Shogo Yamashita; Hisakazu Matsuki; Shuhei Iwashita; Mitsuhiko Maesato; Hiroshi Kitagawa; Chanchal Sow; Shingo Yonezawa; Yoshiteru Maeno",
    "journal": "arXiv:2608.25615v1 · cond-mat.mtrl-sci",
    "method": "流动 O₂ 中的升华输运",
    "rating": "S",
    "access": "全文精读（正文、Experimental、结果、表 I–IV、图 1–6；未见独立补充材料）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.25615",
    "fullText": "https://arxiv.org/pdf/2608.25615",
    "reportUrl": "/reports/2026-08-30",
    "sections": [
      {
        "title": "科学问题、热点背景与作者假设",
        "text": "RuO₂ 是否具有体相交错磁性仍有争论：部分薄膜实验报告反铁磁/交错磁响应，而近期高质量块体单晶结果更接近顺磁。理论提出空穴掺杂和外延应变可把接近磁不稳定性的 RuO₂ 推入交错磁态，但 Cr 替位的磁性又可能来自 Cr 自身局域矩。本文因而选择非磁性替位作为更严格的检验：若 V 均匀进入 Ru 位、改变费米能附近电子态且样品仍不出现磁有序，就能限制“简单载流子掺杂足以诱导交错磁性”的解释。作者先筛选 Ti、Nb、Zr、Ta、Sn、Ge、Al、Sc、V 等候选，只有 V 得到单相多晶，再转入单晶生长；这是从化学可行性到物性检验的两级筛选。"
      },
      {
        "title": "晶体、结构、形态与批次关系",
        "text": "目标成分为 Ru₀.₉V₀.₁O₂₊ᵧ，保持金红石 RuO₂ 骨架。典型晶体呈扁平片/柱状，约 1.5×2×5 mm³；Laue 在 (101) 表面得到与模拟一致的斑点，输运电流沿 [10−1]，磁场与磁化率沿垂直顶面的 [101]*。论文把纯 RuO₂ 的既有高质量晶体数据作为参照，但没有说明掺杂晶体来自多少个独立炉次，也没有给每炉产率、晶体数、不同晶体间组成或 RRR 的离散度。因此结构与物性的关联主要建立在代表性晶体上，不能据此判断批次稳定性。"
      },
      {
        "title": "生长窗口与必须保留的内部矛盾",
        "text": "作者将方法称为 sublimation transport，而不是有独立输运剂的密封 CVT。原料为 RuO₂（Rare Metallic，99.95%）和 VO₂（High Purity Chemicals，99.9%）；Experimental 明确写两种粉末按 1:1 摩尔比混合并压片，置于带收颈的生长管热端，先 1000 °C 保温 20 h，再升到 1200 °C 保温 100 h，同时通入 99.999% O₂，流量 40 cc/min，晶体在低温端由升华—输运—凝结形成。然而表 I 对同一 V 单晶条件写的是 1000 °C/20 h + 1250 °C/100 h，总时间 124 h。1:1 起始比也与名义 x=0.1 不直观一致。两处矛盾均来自论文原文，复现前必须向作者确认，不能自行选择 1200/1250 °C 或把 1:1 改成 9:1。坩埚/承载材料、生长管材质和尺寸、热端与冷端位置、冷端实际温度、温度梯度、压片压力、总装料量、升温速率、降温/停炉方式、后处理、收率均为正文未报告。"
      },
      {
        "title": "结构、成分、价态与样品质量证据",
        "text": "粉碎晶体的 Cu Kα 粉末 XRD 从低至 2θ=3° 的范围未见可检测杂相，Rietveld 给出 a=4.496 Å、c=3.092 Å；相对纯 RuO₂，a 增大 0.12%、c 缩小 0.58%、胞体积缩小约 0.38%，与较小的 V⁴⁺替位及既有纳米线 Vegard 趋势相符。EPMA 的 EDS/WDS 给出 Ru:V:O=0.89:0.10:2.37，并显示 Ru/V/O 面分布均匀、未见 V 团簇；氧定量容易受表面吸附和轻元素误差影响，作者因此不把 2.37 当作精确体相含氧量。XPS 使用 Al Kα 1486.6 eV、约 10⁻⁷ Pa，以 C 1s=284.8 eV 校准；拟合得到 Ru 平均价态从纯样的 +3.83 到掺杂样 +3.80，V 以 V⁴⁺为主并含少量 V³⁺/V⁵⁺，平均约 +3.97。电中性估算 y 由 −0.08 到 −0.09，说明表面敏感 XPS 所见平均价态没有支持显著新增氧空位。最强质量证据是晶格参数、定量成分和元素均匀性相互一致；弱点是没有单晶结构精修、ICP、体相氧定量、TEM 缺陷或多批次统计。"
      },
      {
        "title": "输运与磁性测量条件、关键数据和模型",
        "text": "电阻率在 MPMS-XL 自制探杆上以四探针交流法测量，SR830 锁相频率 17 Hz、激励电流 10 mA rms，范围 2–400 K；银环氧 H20E 接触在 Ar 中 500 °C 退火。样品全程金属，RRR=ρ(300 K)/ρ(2 K)=1.8，残余电阻率 8.64 μΩ·cm，估算平均自由程约 1.5 nm，最高 4 T 下电阻率近乎不变。300 K 电阻率从纯 RuO₂ 的 36.1 降至 14.7 μΩ·cm，约降 60%，但残余项从 0.03 升至 8.64 μΩ·cm，说明替位无序显著增强而温变散射反而减弱。作者先在 2–30 K 拟合 ρ₀+AT²，再以固定等离子能 ℏΩp=3.16 eV 对 2–400 K 拟合 Bloch–Grüneisen 声学声子与 Einstein 光学声子项。V 替位后 A 从 0.051 降到 0.0012 nΩ·cm/K²，λBG 从 0.15 降至 0.05，λE 从 0.22 降至 0.01，θD 从 409 升到 453 K，θE 从 834 变为 824 K；300 K 时声学、光学和电子—电子项分别约占 36%、5%、1%。因此“室温电阻率降低”并不是样品更纯，而是拟合所指的电子—声子散射大幅减小。"
      },
      {
        "title": "磁性、电子结构与证据分级",
        "text": "直流磁化率在 1 T、H∥[101]* 下从 1.8 到 300 K 测量；掺杂样无相变，100 K 的 M(H) 近线性、无磁滞。以 χ=χ₀+a₁/T+a₂Tln(T/T₀) 拟合得到掺杂样 χ₀=1.64×10⁻⁴ emu/mol、T₀=74 K、a₂=3.27×10⁻⁸ emu/(K²·mol)，低温 Curie 项对应的假定 S=1 杂质浓度约 4 ppm，低于纯样约 19 ppm。直接观察是无磁性异常与无磁滞；“无交错磁性”仍是由体磁化响应得出的约束，而不是中子、μSR 或共振散射的直接排除。PAW/GGA 超胞与 TB-LMTO-CPA 两种计算都把 V-d 态放在费米能上方约 0.3 eV 内；12.5% 附近 V-d 肩峰接近 EF，但计算未给出稳定长程磁序。计算支持电子态被改变却未产生磁性的解释，但不能替代磁结构探针。"
      },
      {
        "title": "结论、局限、替代解释与可执行建议",
        "text": "论文最可靠的结论是：约 10% V 能均匀进入 RuO₂ 金红石晶格，显著改变散射分解和室温电阻率，而常规体磁化未见磁序。把电阻率下降完全归因于电子—声子耦合减弱依赖四项可加模型以及沿用纯 RuO₂ 的等离子能；V 替位也可能改变载流子密度、费米面和各向异性，Hall、光学电导与热容缺失使这些替代解释未被完全排除。下一批生长应先解决配比/最高温度矛盾，并记录实际热梯度；每炉至少对多片做 WDS/Laue/RRR 分布。建议设计 x=0、0.02、0.05、0.10、0.15 梯度，同时测 Hall、光学 Drude 权重、比热 θD、μSR/中子或 Ru 边共振散射，把载流子变化、声子硬化与微弱磁序分开。阅读顺序建议先看 Experimental 与表 I 的矛盾，再看图 1 的成分证据和图 3 的散射分解，最后读两套 DFT。推荐 S：生长路线和争议性科学问题都很重要，但配方不能未经确认直接复现。"
      }
    ]
  },
  {
    "date": "2026-08-30",
    "issue": 5,
    "headline": "输运法生长、压力临界与量子振荡相位：Ru₀.₉V₀.₁O₂、CeNiC₂、YbMnBi₂",
    "material": "CeNiC₂",
    "title": "Nearly Isotropic Quantum-Critical Transport in Single-Crystal CeNiC2",
    "authors": "Hanming Ma; Jun Gouchi; Dilip Bhoi; Toru Shigeoka; Bosen Wang; J.-G. Cheng; Yoshiya Uwatoko",
    "journal": "arXiv:2608.25616v1 · cond-mat.supr-con",
    "method": "Czochralski 提拉",
    "rating": "S",
    "access": "全文精读（正文、Experimental Methods、图 1–4；未见独立补充材料）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.25616",
    "fullText": "https://arxiv.org/pdf/2608.25616",
    "reportUrl": "/reports/2026-08-30",
    "sections": [
      {
        "title": "问题、热点与可证伪假设",
        "text": "CeNiC₂ 是无反演对称重费米子反铁磁体，常压约 20 K 和 10 K 先后出现非公度与公度反铁磁转变，低温还带弱倾斜铁磁分量。既有多晶研究在约 11 GPa 附近发现磁序被压低、Tc 约 3.5–3.8 K 的窄超导穹顶和近 T 线性电阻率，但多晶平均抹掉了散射的方向性。本文提出可证伪判断：若线性电阻来自低维、特定波矢的自旋涨落，不同晶轴电流应保留明显不同的临界指数；若来自近局域的价态涨落，a、b、c 三个方向应在同一压力附近同时趋向 n≈1，并伴随残余电阻率增强。"
      },
      {
        "title": "晶体生长、取向和当前信息边界",
        "text": "CeNiC₂ 单晶由 Czochralski 提拉法生长，单晶 XRD 验证相纯和晶轴取向；样品分别切成 I∥a、I∥b、I∥c 的定向试条。正文没有给出 Ce/Ni/C 起始配比与纯度、是否用电弧熔炼预合金、坩埚/冷坩埚、保护气氛、熔化温度、籽晶、提拉与旋转速度、退火、晶体尺寸、每方向样条尺寸和产率，故这篇论文不能作为 Czochralski 配方。它也没有列出单晶精修指标、Laue 图、EDS/WDS/ICP 或不同批次组成统计；“高质量”主要由较低残余电阻率、较高 RRR 和锐利磁/超导转变来支撑，是输运质量而不是完整的化学—结构质量链。"
      },
      {
        "title": "常压质量基线与各向异性",
        "text": "MPMS/PPMS 常压测量显示三个方向都在约 19 K 和 11 K 出现同一序列的磁异常。高温 Curie–Weiss 有效磁矩沿 a、b、c 分别约 2.48、2.54、2.49 μB/Ce，接近 Ce³⁺自由离子；Weiss 温度约 −2、−55、−5 K，反映强晶场各向异性。1.8 K 磁化到 5 T 基本线性，仅 b 轴低场有微弱铁磁分量。电阻率绝对值满足 ρb>ρc>ρa，但温度演化共同；a、b、c 的 RRR 约 23、50、39，残余电阻率分别 2.46、5.02、4.42 μΩ·cm，均低于既有多晶的 9.85 μΩ·cm。这一基线同时说明晶体较洁净，也提醒“临界各向同性”指压力演化与指数趋同，不是电阻率绝对值各向同性。"
      },
      {
        "title": "高压装置、接线与分析方法",
        "text": "电阻率用 Au 线和银浆四探针电流反转法测量。零场 2–300 K 使用东京大学 ISSP 的恒载立方压砧：I∥a 到 13 GPa，I∥b/c 到 12 GPa；每次温扫主动调载保持压力，压力由 Sn、Bi、Pb 在室温、液氮和液氦温区的电阻—载荷标定得到，传压介质为 Fluorinert FC70:FC77=1:1 体积比。超导穹顶附近另用夹钳式 palm cubic-anvil 和稀释制冷机；I∥b 时在 10.4 GPa 测 H∥a、10.5 GPa 测 H∥c，最低 20 mK、最高 9 T。三个电流方向以及两个磁场方向来自独立装载，作者用最近压力点和完整压力序列比较，而不是把不同装载的单点当作严格同压。数据以 0.5 K 间隔平均，ρ=ρ₀+ATⁿ 从 5 K 起拟合并排除磁转变区，另以 n=dln[ρ−ρ₀]/dlnT 交叉检查。"
      },
      {
        "title": "压力相图、超导与核心定量结果",
        "text": "三方向的室温电阻率均随压力上升。非公度反铁磁温度 TICAF 从约 19 K 先升到 7 GPa 附近约 34 K，再下降并在 9.5–10 GPa 附近不可分辨；4–6 GPa 出现与 Kondo/相干尺度 TK 相关的宽峰，8 GPa 以上快速上移，10 GPa 后超出 300 K 测量上限。超导与磁序消失重合：I∥a 在约 9 GPa 起始、9.7 GPa 时 onset Tc≈3.8 K，并在约 9.5–10 GPa 获得零电阻；I∥b 的最大 onset Tc≈3.84 K（约 9.6 GPa），零电阻延至约 10.4 GPa；I∥c 的最大 onset Tc≈3.9 K（约 9.5 GPa）。I∥b 的正常态 T 线性在 9 T 下仍几乎不变。WHH 外推 μ₀Hc2(0) 对 H∥a 为约 19.8 T、H∥c 为约 15.0 T，比例约 1.3，均超过弱耦合 Pauli 标度。"
      },
      {
        "title": "证据链：观察、拟合、作者推断与本简报判断",
        "text": "直接观察包括三个方向的磁转变先升后降、窄零电阻区、磁场压低 Tc 但不改变 I∥b 的近线性正常态。模型量包括拟合指数 n、外推 ρ₀、Kondo 宽峰 TK 和 WHH Hc2(0)。三个独立压力序列在 9.5–10 GPa 同时出现 n≈1 与 ρ₀峰值，这是反对简单低维自旋涨落的最强证据；7 GPa 左右 TK 与 TICAF 同时转折又与既有高压结构工作中 Ce–Ce/Ni–Ni 最近邻方向互换相近，为键网络—杂化关联提供背景。作者由此把价态涨落列为主要临界散射与配对候选。本简报判断是“近局域散射”得到有力约束，但“价态涨落”尚未被直接测到；压力不完全一致、独立装载、FC70/77 在高压下的非静水性，以及拟合窗口选择都可能制造部分 ρ₀ 与 n 的共变。"
      },
      {
        "title": "创新、局限、复现与下一步",
        "text": "创新不只是把多晶换成单晶，而是沿三晶轴独立构造同一压力相图，把方向性作为区分临界机制的实验变量；更低残余电阻和稍高 Tc 也显示超导对无序敏感。局限是没有交流磁化/热容证明体超导，没有同一装载同步测三方向，没有压力原位结构或 Ce 价态数据，WHH 外推远超 9 T 实测区间且强耦合/多带效应可能改变外推。复现时应报告定向样条尺寸、接触几何与几何因子误差；用 Pb/Sn 局部超导转变宽度估计压力梯度，并尝试更静水的介质。关键后续是在 7–11 GPa 做 Ce L₃ 边 XAS/RIXS 或共振 XRD、Hall/热电势与比热/交流磁化，验证价态跨越、费米面和体超导是否共同出现。推荐 S；先读图 4 的三方向 n(T,P) 图，再看图 3 的场依赖，最后核对 Methods 中独立装载和压力标定。"
      }
    ]
  },
  {
    "date": "2026-08-30",
    "issue": 5,
    "headline": "输运法生长、压力临界与量子振荡相位：Ru₀.₉V₀.₁O₂、CeNiC₂、YbMnBi₂",
    "material": "YbMnBi₂",
    "title": "Phase calibration of quantum oscillations in the magnetostrictive coefficient using the topological antiferromagnet YbMnBi2",
    "authors": "Qin Deng; Long Zhang; Zeyu Li; Ying Zhu; Shuai Wu; Yan Liu; Aifeng Wang; Yu Pan; Yisheng Chai",
    "journal": "arXiv:2608.25656v1 · cond-mat.str-el",
    "method": "Bi 自助熔剂（配方引自前作）",
    "rating": "A+",
    "access": "全文精读（正文、Methods、Appendix、图 1–3、表 I；未见独立补充材料）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.25656",
    "fullText": "https://arxiv.org/pdf/2608.25656",
    "reportUrl": "/reports/2026-08-30",
    "sections": [
      {
        "title": "科学问题与为什么需要相位校准",
        "text": "量子振荡相位常被用于反演回旋轨道 Berry 相位，但不同热力学响应对自由能的导数不同，原始振荡相位不能直接互换。交流磁致伸缩系数对高频分支很敏感，却一直缺少与标准磁化振荡在同一单晶上的实验校准。作者由 Maxwell 关系推导：磁致伸缩系数相对磁化会多出对磁场和应力的导数，领先/滞后应出现 ±π/2，相位符号又取决于极值轨道频率对单轴应力的导数。YbMnBi₂ 在 14 T 内只显示约 160 T 的单一主频，避免多频叠加与谐波造成的相位错配，因此是合适的校准材料。"
      },
      {
        "title": "晶体、结构、生长信息与同一样品设计",
        "text": "YbMnBi₂ 为四方 P4/nmm，Mn–Bi1 构成 anti-PbO 层，Bi2 形成决定拓扑能带的方格网；TN≈290 K 以下 Mn 矩主要沿 c 轴形成 C 型反铁磁，体相是否存在约 10° 倾斜仍有争议。单晶用 Bi self-flux 生长，但当前论文只写“按早期工作”，没有在正文重述 Yb:Mn:Bi 原料纯度与摩尔比、坩埚/石英管、真空/气氛、峰值温度、保温、降温速率、离心分离、退火、产率和批次统计，均应标为本文未报告。所用晶体尺寸 2.8×1.5×0.2 mm³；同一块晶体依次用于磁化、磁致伸缩系数和热电势，显著降低不同晶体频率、缺陷与取向差异对相位比较的干扰。当前文中未给 XRD/Laue/EDS/WDS/ICP、RRR 或马赛克度，结构和质量主要引用前作。"
      },
      {
        "title": "复合磁电测量装置与信息边界",
        "text": "样品用 EPO-TEK H20E 银环氧机械耦合到 0.2 mm 厚、[001] 切割的 0.7PMN–0.3PT 压电单晶；PMN–PT 在室温以 550 kV/m 电场极化。直流磁场上叠加自制 Helmholtz 线圈产生的 1 Oe 交流场，锁相检测磁致应变经压电转换后的 VME；正电压预先标定为拉伸应变。耦合效率 k 未知，所以 VME 不能给绝对磁致伸缩系数，但只要 k 与场无关，其频率和相位可以保留。磁化在 Quantum Design DynaCool 的 VSM 上测，VME 在 Oxford 14 T 低温系统中测；热电势在同一系统用一加热器—两温度计和自制旋转杆测量。论文没有报告交流场频率、锁相时间常数、样品与 PMN–PT 的相对面内轴、胶层厚度、温度范围全表及应变传递随温度的变化，这些是复现相位和信噪比的重要缺项。"
      },
      {
        "title": "量子振荡结果、拟合参数与核心校准",
        "text": "B∥c 时，VME 振荡约 4 T 就可见，磁化振荡约 6 T 才明显，体现导数型探针对高频振荡的增强。FFT 得到磁化 159.2 T、VME 156.8 T；温度依赖的 Lifshitz–Kosevich 热因子在固定 12.4 T 给出 m*=0.22m₀，与既有磁输运 0.24m₀ 接近。由于最低可及 Landau 指数仍高于 10，作者没有用外推到零指数的 Landau fan，而直接用三维 LK 波形拟合。磁化拟合 F=159.10(9) T、相位 0.49(2)π、Dingle 温度 16.99(5) K；VME 为 F=157.05(2) T、相位 0.88(1)π、Dingle 温度 8.88(4) K。共同正振幅约定下相差 0.39π，接近理论 π/2；考虑有限场窗和忽略的慢变振幅项，这构成论文的中心校准。不同 Dingle 温度不能简单解释为同一晶体有两种散射寿命，还包含两种仪器背景、导数权重和拟合窗差异。"
      },
      {
        "title": "角度对照与排除的替代解释",
        "text": "VSM 与自制线圈装置不便连续精确转角，作者于是用同一晶体的热电势 Sxx 在 6.5 K、−10°≤θ≤15° 检验 B 偏离 c 轴的影响。拟合频率约从 159.3 变到 161 T，最小值对应约 2.5° 的装样零点偏差，足以解释磁化和 VME 之间约 2 T 的频率小差；但相位在整个角窗近乎不变。最高 14 T 未见变磁转变，因此排除了“几度错位诱导磁重构/拓扑转变，从而制造相位差”的主要替代解释。这个对照强化了相位差来自响应函数本身，而不是取向差异。"
      },
      {
        "title": "直接观察、模型、推断与 Berry 相位边界",
        "text": "直接观察是同一晶体上两个振荡波形、单主频、不同起振场和角度稳定相位；模型量是背景扣除后的 FFT、LK 质量/Dingle/相位。±π/2 关系来自 Maxwell 关系及保留快速变化相位项的近似，作者测得 0.39π 后判断与之相容。本简报认为这是很好的“测量学标定”，但不能据 0.49π 或 0.88π 直接宣称非平庸 Berry 相位：轨道磁矩项未知，自旋阻尼 RS 的符号以及 ∂F/∂σi 的符号都可能额外引入 π，相位校正的正负号也尚不能从当前数据确定。DFT/PBE+U（500 eV、Mn Ueff=3 eV、SOC、13×13×7 k 网格；费米面 28×28×12）显示无倾斜 C 型 AFM 下的质量化 Dirac 态，为拓扑背景服务，却没有替代上述实验相位缺项。"
      },
      {
        "title": "创新、局限和可执行建议",
        "text": "创新在于把磁化与高灵敏复合磁电探针放到同一单频单晶上校准，并用角分辨热电势排除装样偏差；这为以后从微小晶体或高频分支提取相位建立了实验规则。最弱环节是 k、胶层和 ∂F/∂σi 未定，导致绝对系数和相位符号不可得；场窗最高 14 T、最低 Landau 指数较高，也限制 Berry 相位精度。建议下一步在同一器件上增加电阻/扭矩振荡与静态膨胀计，改变可控单轴应力以直接测 ∂F/∂σi；记录交流频率、胶层厚度和温变传递函数，并用 Laue 确定面内轴。生长端应在本论文内重述 self-flux 配方并给多批次 RRR/EDS。推荐 A+；先读方法和式 (1)–(4)，再读表 I 的相位比较，最后看图 3 的错位对照。"
      }
    ]
  },
  {
    "date": "2026-08-29",
    "issue": 4,
    "headline": "从缺陷工程到物性：KTa₁₋ₓNbₓO₃、NiPS₃ 与 Si/SiGe",
    "material": "KTa₁₋ₓNbₓO₃",
    "title": "A solid-solution approach for room-temperature bulk plasticity in KTa1-xNbxO3",
    "authors": "Alexander Frisch; Jiawen Zhang; Martin Setvin; Xuping Wang; Wenjun Lu; Xufei Fang",
    "journal": "arXiv:2608.26678v1 · cond-mat.mtrl-sci",
    "method": "熔体慢冷 / Czochralski",
    "rating": "S",
    "access": "全文精读（正文、Methods、图1–4；无独立补充材料）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.26678",
    "fullText": "https://arxiv.org/pdf/2608.26678",
    "reportUrl": "/reports/2026-08-29",
    "sections": [
      {
        "title": "科学问题与热点背景",
        "text": "作者把问题从寻找单一可塑陶瓷改写为材料族设计：已知 KTaO3 与 KNbO3 均能在室温发生位错介导塑性，那么同价 B 位固溶体 KTa1-xNbxO3 是否也保留低晶格摩擦，并由此扩展可进行位错功能工程的钙钛矿范围？这与利用位错调控铁电、催化和力电耦合的热点直接相连。"
      },
      {
        "title": "晶体、生长与信息边界",
        "text": "研究覆盖名义 x=0.1、0.175、0.3、0.4、0.5。x=0.1/0.175/0.3 样品来自熔体慢冷并由 ORNL 提供，x=0.3/0.4/0.5 由作者之一用 Czochralski 法生长，构成跨来源与重叠 x=0.3 的复现设计。本文没有给出原料纯度、熔体配比、坩埚、气氛、提拉/旋转速度、慢冷温程、退火、晶体尺寸和产率；因此它是物性验证论文，不是可直接照抄的生长配方。"
      },
      {
        "title": "实验闭环与关键证据",
        "text": "筛选从 2.5 mm 钢球、1 kgf、10 s 的 Brinell 压痕开始；随后在 <001> 方向以约 10^-4 s^-1 做单轴压缩，并用 0.5 mm 退火铜箔降低端面摩擦；最后在 10 次划擦形成的塑性区取 FIB 薄片，以 200 kV ABF-STEM 观察位错。压痕/划痕出现 {110}<110> 滑移迹线，KTN0.3 宏观屈服约 300 MPa，对应 Schmid 因子 0.5 下 CRSS 约 150 MPa；划痕区位错密度约 10^14 m^-2。三种尺度的证据共同排除单纯表面压碎或畴翻转。"
      },
      {
        "title": "结构、局限与实验启示",
        "text": "x≲0.4 室温为立方相，x=0.5 为四方铁电相；后者同时出现铁电畴碎裂，说明位错—畴壁耦合，但不是所有塑性迹线的唯一来源。KTN0.3 初始条带缺陷可能钉扎位错并抬高屈服应力，使固溶强化的定量判断不稳。下一步应在同一批晶体中测实际 Nb 分布、氧/钾非化学计量、初始位错密度与缺陷条带，再比较屈服应力，避免把生长缺陷误判为成分效应。"
      }
    ]
  },
  {
    "date": "2026-08-29",
    "issue": 4,
    "headline": "从缺陷工程到物性：KTa₁₋ₓNbₓO₃、NiPS₃ 与 Si/SiGe",
    "material": "NiPS₃",
    "title": "Magnetic permeability and zone-folded phonons in layered NiPS3",
    "authors": "André A. A. Silva; Eduardo D. Stefanato; Nicolas M. Kawahala; Flávio H. Feres; João Vítor T. P. Vital; Bernardo R. A. Neves; Jan Plutnar; Zdenek Sofer; Ana C. F. Brito; Felix G. G. Hernandez; Raul O. Freitas",
    "journal": "arXiv:2608.26405v1 · cond-mat.mtrl-sci",
    "method": "母晶生长方法未报告",
    "rating": "A+",
    "access": "全文精读（正文、Methods；CC BY-NC-ND 4.0）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.26405",
    "fullText": "https://arxiv.org/html/2608.26405",
    "reportUrl": "/reports/2026-08-29",
    "sections": [
      {
        "title": "问题与判断链条",
        "text": "NiPS3 是 TN≈155 K 的层状 XY 反铁磁 Mott 绝缘体。论文要解决的是 0.6–1.1 THz 范围的两个吸收峰究竟来自磁振子还是结构折叠声子。作者先用偏振选择定则分开两峰，再用温度依赖判断：仅在太赫兹磁场平行 b 轴时出现且随降温蓝移至约 1.07 THz 的峰归为磁振子；旋转 90° 后约 0.65 THz、频率几乎不变但强度增长的峰归为布里渊区折叠声子。"
      },
      {
        "title": "样品与质量",
        "text": "样品为约 450 μm 厚的块体片晶，室温 Raman 使用 633 nm 激光观察到 8 个振动模，粉末/晶体 XRD 与单斜 C2/m 结构一致且峰锐利。正文未报告母晶生长方法、原料纯度、配比、输运剂或助熔剂、温区、时间、降温、后处理、横向尺寸、EDS/WDS/ICP、Laue、批次统计和残余电阻率。XRD 足以支持平均相纯与结构指认，却不能量化硫/磷空位、层错和晶向误差。"
      },
      {
        "title": "测量与定量结果",
        "text": "THz-TDS 采用 780 nm、约 130 fs、76 MHz 激光驱动光电导天线；样品置于低温恒温器，常入射，环境湿度低于 5%。作者以 300 K 响应作为介电背景，从 144 K 扫到 13 K。13 K 时用 Drude–Lorentz 模型拟合磁导率，得到共振频率 1.0598±0.0018 THz、线宽 0.2524±0.0071 THz、振子强度 Δμ=(3.497±0.094)×10^-2。结果给出从原始透射到复磁导率的定量路径。"
      },
      {
        "title": "局限与复现建议",
        "text": "最强证据是偏振选择性与温度演化共同区分两种激发；最弱环节是假设 13 K 与 300 K 的电介质背景近似相同。若低温声子改变介电函数，抽出的磁导率可能混入电响应。建议复现时同时测反射或时域回波、用独立低温介电谱约束 ε(ω)，并对同一晶体做 Laue 定向和厚度映射；晶体生长组则需补齐 CVT/Flux 来源和化学计量数据。"
      }
    ]
  },
  {
    "date": "2026-08-29",
    "issue": 4,
    "headline": "从缺陷工程到物性：KTa₁₋ₓNbₓO₃、NiPS₃ 与 Si/SiGe",
    "material": "Si/SiGe 量子阱",
    "title": "Mobility Enhancement in Si/SiGe Quantum Well Enabled by a Buried Si Layer Trapping Oxygen Impurities",
    "authors": "Felix Reichmann; Alberto Mistroni; Fabian Fidorra; Giovanni Capellini; Yuji Yamamoto; Marco Lisker; Marvin H. Zoellner",
    "journal": "arXiv:2608.27377v1 · cond-mat.mes-hall",
    "method": "200 mm RP-CVD 外延",
    "rating": "A+",
    "access": "全文精读（正文、Methods、Supporting Information）",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://arxiv.org/abs/2608.27377",
    "fullText": "https://arxiv.org/html/2608.27377",
    "reportUrl": "/reports/2026-08-29",
    "sections": [
      {
        "title": "因果问题与对照设计",
        "text": "研究问的是氧背景如何进入 Si/SiGe 外延，以及降低氧是否真的改变低温输运。四种结构交叉改变量子阱温度（600/700 °C）与是否插入 6 nm Si 捕获层，先用 SIMS 分离温度切换和插层效应，再只选 600 °C 的高氧/低氧结构制备各 7 个 Hall-bar FET，减少温度序列这一混杂变量。"
      },
      {
        "title": "生长、器件与成分",
        "text": "所有结构在 200 mm p-Si(100) 上以硅烷/锗烷 RP-CVD 生长。匹配 600 °C 可抑制 700 °C Si 生长步骤附近约 5×10^18 cm^-3 的氧峰；6 nm 埋置 Si 层把随后 SiGe 的氧背景从约 4×10^17 降至 7–8×10^16 cm^-3。输运对比样品在量子阱附近由约 1×10^18 降至 1.3×10^17 cm^-3。正文未报告腔压、前驱体流量、Ge 分数完整梯度、总厚度、升降温速率与晶圆内均匀性。"
      },
      {
        "title": "测量与关键数据",
        "text": "器件宽 20 μm、压探针间距 300 μm；P 注入剂量 4.5×10^15 cm^-2、20 keV，700 °C 退火 1 min，栅介质为 10 nm HDP-SiO2，顶栅为 30 nm TiN。1.5 K 下用 ≤50 nA、17 Hz 四探针锁相，在垂直磁场 −5 至 305 mT 提取 Hall 密度与迁移率。低氧组最大中位迁移率约 4.8×10^5 cm²V^-1s^-1，高氧组约 4.3×10^5，提高约 11%；但渗流阈值与局域指数 α(n)=dlogμ/dlogn 基本不变。"
      },
      {
        "title": "证据解释与实验启示",
        "text": "SIMS 的五到八倍氧差与 14 个器件统计支持氧是高密度区动量散射源；0.3 K 与 1.5 K 的分数迁移率增益相似、低密度标度不变，则反驳“氧主导长程势涨落”的强版本。局限是温变只展示代表性器件，SIMS 横向抽样与其他共变缺陷仍可能影响归因。建议增加同片多点 SIMS、晶圆映射、盲法器件统计和受控氧剂量，并将捕获层到量子阱的距离作为下一轮变量。"
      }
    ]
  },
  {
    "date": "2026-08-28",
    "issue": 3,
    "headline": "CrSb 体相 g 波交错磁性成为焦点",
    "material": "CrSb",
    "title": "3D bulk-resolved g-wave altermagnetic order parameter in CrSb",
    "authors": "论文作者详见原文",
    "journal": "Nature 656, 854–860",
    "method": "I₂-CVT",
    "rating": "S",
    "access": "全文精读",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://doi.org/10.1038/s41586-026-10902-z",
    "fullText": "https://arxiv.org/html/2601.14526v2",
    "reportUrl": "/reports/2026-08-28",
    "sections": [
      {
        "title": "科学问题与热点背景",
        "text": "交错磁体兼具零净磁矩与动量依赖自旋劈裂。此前很多证据来自表面敏感 ARPES，容易受到终止面影响。作者把磁序参量写成自旋上下能带交换劈裂 Δ(k)，并利用不同磁场方向下量子振荡轨道面积是否分裂，直接寻找节点与反节点方向的体相信号。热点价值在于它把非常规磁序的对称性从表面能谱推进到三维体相费米面。"
      },
      {
        "title": "晶体、结构与样品形态",
        "text": "CrSb 为 NiAs 型六方结构，空间群 P6₃/mmc。所得样品以六方片晶为主，最大单晶约 1.5 mm，同时出现数毫米互生区域。小片状形貌适合扭矩磁强计，但也提高了取向、接触和角度误差控制要求。"
      },
      {
        "title": "生长方法与参数",
        "text": "Cr 与 Sb 按 1:1 化学计量比配料，纯度分别为 99.995% 和 99.9999%。I₂ 用量按生长温度下约 1 bar 蒸气压计算；原料真空封装于石英安瓿，置于水平双温区炉，缓慢升至源区/生长区 925/900 °C，保持两周后随炉冷却。正文未报告安瓿尺寸、I₂ 实际 mg·cm⁻³、精确升温速率和冷却速率。"
      },
      {
        "title": "结构、成分与质量表征",
        "text": "粉末 XRD 覆盖 2θ=10–90°，Rietveld 拟合 RBragg=3.39，未见明显额外杂相；Laue 用于高场实验前晶向标定。电输运筛选得到典型 RRR=10–28，最佳样品残余电阻率约 2 μΩ·cm。XRD 约束平均结构和相纯度，RRR 与残余电阻率则直接约束散射和平均自由程，两类证据共同支撑量子振荡样品质量。"
      },
      {
        "title": "物性测量与关键数据",
        "text": "作者在 0.4 K、最高 41.5 T 下做角分辨 dHvA 扭矩测量，并以最高约 65 T 脉冲场 PDO 补充。节点方向 H∥a 和 H∥ab 分别只见约 4.1 kT 与 3.6 kT 单频；偏离节点约 4° 后分裂约 0.6 kT。代表性取向两支频率为 3.41 与 3.82 kT，有效质量为 1.73(5)mₑ 与 1.84(5)mₑ，估算自旋劈裂约 25 meV。角度依赖符合 Y₄⁻³∝zy(3x²−y²)，定位四个节点平面。"
      },
      {
        "title": "结论、局限与实验启示",
        "text": "最强结论是量子振荡频率的角度选择性分裂与 g 波磁序参量具有相同节点结构，构成体相证据。局限在于结论依赖极低温、强磁场和高质量小晶体；CVT 复现还缺 I₂ 质量浓度与安瓿几何。建议把 RRR、残余电阻率与 Laue 取向设为批次放行条件，并优先评估角度误差对频率分裂的影响。"
      }
    ]
  },
  {
    "date": "2026-08-28",
    "issue": 3,
    "headline": "CrSb 体相 g 波交错磁性成为焦点",
    "material": "NbSe₂",
    "title": "Evidence for vacuum-enhanced superconductivity in NbSe₂",
    "authors": "论文作者详见原文",
    "journal": "Nature",
    "method": "少层器件；母晶生长未报告",
    "rating": "A",
    "access": "仅摘要/官方信息",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://doi.org/10.1038/s41586-026-11037-x",
    "fullText": "https://phys.ustc.edu.cn/2026/0820/c17720a750714/pagem.htm",
    "reportUrl": "/reports/2026-08-28",
    "sections": [
      {
        "title": "科学问题与判断链条",
        "text": "研究要回答没有外部光子占据时，腔体真空电磁涨落能否改变凝聚态基态。六层 NbSe₂ 被放入太赫兹分裂环暗腔的强场区，再比较腔内器件与多组对照的电阻转变、临界电流和临界场。三类指标同向增强且替代解释受到约束，才支持真空场耦合归因。"
      },
      {
        "title": "样品与制备信息",
        "text": "当前一手信息确认样品为六层 NbSe₂ 并集成到太赫兹暗腔。母晶生长方法、是否使用 I₂-CVT、剥离环境、封装材料、电极、器件尺寸、共振频率和品质因数均未完整公开，因此不能把本文作为 NbSe₂ 生长配方来源。"
      },
      {
        "title": "测量与关键结果",
        "text": "官方信息给出 Tc 约提升 5.4%，转变附近临界电流和临界磁场同时增强。三者共同变化比单独的电阻转变位移更有说服力。作者用多组腔体和材料条件排查应变、非均匀、空气退化与金属屏蔽，但当前资料缺原始曲线、误差条、器件离散度和完整统计量。"
      },
      {
        "title": "机制、局限与复现建议",
        "text": "理论把效应归因于电子自由度与真空腔模杂化后超导态能量下降。复现应报告空腔/载样后的频率与 Q 值、同一母晶成对器件、厚度与应变映射、升降温重复性及盲法器件统计。概念突破强，但对 Flux/CVT 的直接指导有限，须获得全文后再形成参数表。"
      }
    ]
  },
  {
    "date": "2026-08-28",
    "issue": 3,
    "headline": "CrSb 体相 g 波交错磁性成为焦点",
    "material": "GaSb₁₋ₓTeₓ",
    "title": "Tuning high-mobility transport and degeneracy in GaSb₁₋ₓTeₓ",
    "authors": "论文作者详见原文",
    "journal": "Physical Review Applied",
    "method": "Flux growth",
    "rating": "A",
    "access": "仅摘要/元数据",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://doi.org/10.1103/cbfk-mdky",
    "reportUrl": "/reports/2026-08-28",
    "sections": [
      {
        "title": "核心问题",
        "text": "Te 施主会先补偿 GaSb 的本征受主，继续增加才把费米能级推入导带。论文跨越 ppm 至百分比范围寻找迁移率最大点、符号反转点和简并化阈值。摘要显示它们不重合：137 ppm 对应最高室温电子迁移率，而约 0.29% 才进入 n 型简并区。"
      },
      {
        "title": "生长与成分控制",
        "text": "样品由 Flux 法生长，组成覆盖 0≤x≤3.48%。助熔剂、起始配比、坩埚、气氛、峰值温度、保温、降温速率、分离、退火和尺寸均未在摘要报告。由于最优点只有 137 ppm，必须用 ICP-MS、EPMA 或 WDS 报告实际 Te 浓度和空间均匀性，不能只引用名义配比。"
      },
      {
        "title": "输运结果与物理解释",
        "text": "x=137 ppm 时室温电子迁移率为 4273 cm² V⁻¹ s⁻¹，表明离化杂质散射与缺陷补偿间出现最佳平衡；继续掺杂会提高电子浓度但增加散射。x≥0.29% 时出现 n 型简并输运和 SdH 振荡，但摘要未给出频率、Dingle 温度、有效质量与角度依赖，尚不能比较量子迁移率和 Hall 迁移率。"
      },
      {
        "title": "局限与实验启示",
        "text": "最大的缺口是晶体批次、误差范围及 Te 偏析数据。建议在晶锭头—中—尾和横截面做成分图，并把 Hall、零场电阻、SdH 与光谱带边放在同一浓度轴上，重点加密 100–300 ppm 与 0.2–0.4% 两个区间。"
      }
    ]
  },
  {
    "date": "2026-08-28",
    "issue": 3,
    "headline": "CrSb 体相 g 波交错磁性成为焦点",
    "material": "FeS₂",
    "title": "Semiconductor-quality pyrite FeS₂ from iron ore",
    "authors": "论文作者详见原文",
    "journal": "Physical Review Applied",
    "method": "还原 → 硫化 → CVT",
    "rating": "A−",
    "access": "仅摘要/元数据",
    "category": "未分类",
    "tags": [],
    "readingGuide": null,
    "versionNote": "",
    "source": "https://doi.org/10.1103/6twd-lvvg",
    "reportUrl": "/reports/2026-08-28",
    "sections": [
      {
        "title": "问题与工艺逻辑",
        "text": "论文尝试不增加额外化学提纯，仅利用物相转化和气相输运的化学选择性，把天然铁矿石变成半导体级单晶。流程先还原为 Fe，再硫化成 FeS₂，最后 CVT 生长；每一步既完成相变，也可能让难硫化、难输运或挥发性不同的杂质留在前序。"
      },
      {
        "title": "参数与信息边界",
        "text": "摘要确认最终步骤为 CVT，但矿石杂质谱、还原剂、还原温度、硫化温度与硫分压、输运剂、装载量、安瓿真空度、冷热端温区、时间、尺寸和产率均未报告。复现的核心应是原料、前驱体、源区残渣和晶体四个节点的杂质质量平衡。"
      },
      {
        "title": "物性结果",
        "text": "最终晶体室温 Hall 电子浓度低至约 10¹⁶ cm⁻³，迁移率超过 100 cm² V⁻¹ s⁻¹。低浓度与高迁移率同步出现，说明有效施主和离化杂质散射均受到抑制；但单带 Hall 可能掩盖多带或非均匀导电，仍需温变 Hall、激活能、光谱寿命和缺陷表征。"
      },
      {
        "title": "创新、风险与启示",
        "text": "创新是把相转化和 CVT 看作连续化学选择器。天然矿石批次差异可能改变主导杂质，路线未必能直接迁移。建议用 ICP-MS/ICP-OES 做全流程追踪，并用高纯 Fe 空白对照区分原料效应与炉管、安瓿或输运剂污染。"
      }
    ]
  }
] as const;
