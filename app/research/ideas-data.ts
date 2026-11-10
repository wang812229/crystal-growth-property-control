// 从已审阅报告生成，研究设想不计入论文目录。
export default [
  {
    "date": "2026-11-10",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-10",
    "scope": "本期可证伪的材料假设，查新待续。",
    "limitations": [
      "所有候选未合成或计算。Co/Zn 已有组成系列，增量假说仅限相保留的低 Zn 极限与二聚体响应。"
    ],
    "ideas": [
      {
        "id": "rose-phase-dilute-zn-dimer",
        "kind": "material",
        "status": "needs-review",
        "title": "以低 Zn 稀释检验玫瑰相焦磷酸钴钠的二聚磁性",
        "material": "名义 Na₂Co₁₋ₓZnₓP₂O₇，x=0、0.02、0.05 为筛选档；以实测组成为准",
        "evidenceLevel": "母体公开正文 II 与图 1–4 已读。假说未合成、未计算、未测量。",
        "question": "若只在保持玫瑰相且 Zn 确实进入 Co 位的条件下稀释，能否从新增低温 Curie 项与宽热容峰减弱分离二聚体断裂和相变？",
        "prediction": "对随机的低浓度等价 Co 位替换，完整 Co–Co 对的比例在简单计数下为 (1−x)²。若低能响应主要由被打断的二聚体引起，低温顺磁尾应随实际 x 增强，宽热容特征的磁熵按完整对的比例下降。该计数是零阶对照，交换、位点偏好与团簇可使其失效。",
        "basis": "母体论文将约 2.2 K 宽热容峰和各向异性联系到受挫的 Co²⁺ 二聚。Zn²⁺ 为 d¹⁰ 无自旋，同价时无需名义电荷补偿。在相同八面体环境下离子尺寸相近，仍可能改变局部配位、键角和交换路径。Zn 与 Co 的配位偏好及实际固溶度未知。高 Zn 已报道正交或四方竞争相，不能把端元视为三斜同构。",
        "difference": "既有 Co/Zn 固溶研究已覆盖 x=0.25 起的系列及多型。候选限定为熔体获得、经验证的低 Zn 三斜玫瑰相与亚开尔文断二聚体的定量对照；不把泛 Co/Zn 配方当新材料。",
        "plan": [
          "先复现母体和两档低 x；同一 Pt 坩埚路线记录冷却和晶片分离批次。",
          "用 PXRD、SCXRD 和 EPMA/WDS 成分图核相、占位趋势与偏析。若平均占位不敏感，先比较多个晶片并考虑局域探针。",
          "同取向量低温磁化与热容，测至低于母体宽峰足够多，按实际 Co 摩尔数和完整对数分别归一。"
        ],
        "controls": [
          "x=0 的同炉玫瑰相",
          "Zn 端元作衍射参考，不用作直接等结构声子基线",
          "已报道高 Zn 多型与同批蓝相母体作为杂相对照"
        ],
        "falsifiers": [
          "若 WDS 未检出目标替换、或出现蓝相/富 Zn 分相，停止磁性归因。",
          "单相且 x 可测时，如未出现可重复的新增顺磁尾，简单的随机断二聚体假设需修正。"
        ],
        "feasibility": "Pt 坩埚、箱炉、PXRD、Laue 和 EPMA 可完成首轮；亚开尔文量热需稀释机或低温插入件。",
        "risks": "Zn 有位点偏好及偏析风险；微量蓝相的低温贡献、残余应变、Co 价态及基线差异可伪装成稀释响应。",
        "nextStep": "先做母体与最低掺杂各一炉，核相和实际 Zn 后决定是否预约亚开尔文平台。",
        "queries": [
          "2026-11-10 Na2CoP2O7 Zn substitution rose dimer magnetism patent thesis",
          "2026-11-10 Na2ZnP2O7 Na2CoP2O7 polymorph Co Zn P-1",
          "2026-11-10 Na2Co1-xZnxP2O7 rose triclinic magnetic; patents.google.com Na2CoP2O7 Zn"
        ],
        "remainingChecks": [
          "专利全文、学位附录和低 x 系列完整磁性数据待复核。",
          "未验证新颖性、相稳定性、固溶度或可合成性。"
        ],
        "priorArt": [
          {
            "url": "https://doi.org/10.1021/acs.jpcc.1c08753",
            "title": "Polymorphism in Na₂(Co/Zn)P₂O₇ and Na₂(Co/Fe)P₂O₇ Pyrophosphates",
            "overlap": "已有 Co/Zn 混晶和 x=0.25、0.50、0.75 的衍射/NMR，列出多型随组成转变。",
            "access": "可见表 2 与结论；访问来源待复核"
          },
          {
            "url": "https://apo.ansto.gov.au/items/13ef092a-5b7c-4727-ab71-d69444c46a95",
            "title": "Polymorphism and temperature-induced phase transitions of Na₂CoP₂O₇",
            "overlap": "原位中子衍射说明熔体冷却与玫瑰相形成。",
            "access": "ANSTO 机构仓储摘要"
          },
          {
            "url": "https://theses.fr/2010BOR13992.pdf",
            "title": "Na₂ZnP₂O₇ 单晶相关学位论文",
            "overlap": "含纯与掺杂焦磷酸锌钠生长及晶体化学。",
            "access": "检索到章节线索，待核全文"
          },
          {
            "url": "https://patents.google.com/patent/WO2019003904A1/en",
            "title": "Positive electrode active material for sodium-ion secondary battery",
            "overlap": "列出三斜和正交 Na₂CoP₂O₇ 正极，目标是电化学；公开组成片段未给低 Zn 三斜相亚开尔文二聚稀释实验。",
            "access": "公开专利摘要与组成片段"
          },
          {
            "url": "https://doi.org/10.1002/anie.201601022",
            "title": "Defect-Controlled Formation of Triclinic Na₂CoP₂O₇ for 4 V Sodium-Ion Batteries",
            "overlap": "三斜 Na₂CoP₂O₇ 可通过缺陷条件选择；应以缺陷和多型对照排除磁性假信号。",
            "access": "出版页摘要"
          }
        ],
        "paperIndex": 9
      }
    ],
    "rejected": [
      {
        "title": "泛 Co/Zn 焦磷酸盐固溶配方",
        "url": "https://doi.org/10.1021/acs.jpcc.1c08753",
        "reason": "已有组成、多型和结构研究，排除作为新材料主张。"
      },
      {
        "title": "将 Mo 掺杂 2M‑WS₂ 作为新组成",
        "url": "https://doi.org/10.1039/D0DT04313C",
        "reason": "已有实验组成系列与超导性质。"
      }
    ]
  },
  {
    "date": "2026-11-09",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-09",
    "scope": "已知 CrSBr–Cl 固溶体的低温高压极性相边界实验，待查新。",
    "limitations": [
      "未开展候选实验或计算。CrSBr–Cl 固溶及其磁性已见报道，不能称新化合物。",
      "限于本次正式和开放档案检索，专利和学位全文覆盖未穷尽。"
    ],
    "ideas": [
      {
        "id": "crsbr-cl-polar-phase-control",
        "kind": "material",
        "status": "needs-review",
        "title": "利用已知 CrSBr₁₋ₓClₓ 固溶体检验高压极性相是否由化学压力主导",
        "material": "CrSBr₁₋ₓClₓ，优先母体及低 Cl 两档；测实际 x",
        "evidenceLevel": "母体压力正文、Methods和主图已读。固溶系列已有制备，所提极性相图尚未完成查新或实验。",
        "question": "沿母体 Pmmn→P2₁/m→Pmm2 路径，低 Cl 引起的局部压缩是否能用单一体积映射平移极性相界？",
        "prediction": "若几何化学压力是主因，按晶格轴压缩或单位胞体积匹配后，低Cl和母体的结构转变应更接近。若平移不能重合且卤素位共价性改变，则交换与层间滑移能需分开考虑。若衍射极性和偏振SHG不共现，先排查孪晶、局部应力或体相贡献过弱。",
        "basis": "母体CVT单晶在约1.5和6.5 GPa出现两个对称性变化。Cl⁻和Br⁻同族同价，比较相同配位下 Cl⁻ 较小且 3p 比 Br 4p 局域，减弱重卤素自旋轨道项的同时改变共价性与层间轨道重叠。名义替换无载流子补偿要求。旧文已表明磁交换随合金化可变，因此不能只按一个标量体积解释。需核实际占位和均匀性。",
        "difference": "既有 CVT 合金及磁性、常压结构和静水压物性不能重复包装。待查新目标严格限于低温高压极性空间群相界随低Cl含量的变化和体积匹配的双重对照。",
        "plan": [
          "优先采用已知CVT合金路线，WDS/SCXRD核实际Cl与Br占位。",
          "同炉多片同轴装载，在He介质下低温高压衍射并同时记录卸压。",
          "以偏振SHG交叉查反演破缺，先比较母体和低Cl，再拟合成分、压力、轴向应变三维关系。"
        ],
        "controls": [
          "x=0 母体，已知低Cl样品与未加压同成分",
          "压力、体积及各轴晶格常数分别匹配",
          "加压和卸压，换一片和换装样方向"
        ],
        "falsifiers": [
          "若组成分区或竞争相超过实验分辨限，暂停相界解释。",
          "若峰裂分只随非静水装载出现，且反射统计与SHG均不支持极性，放弃相变结论。"
        ],
        "feasibility": "生长与常压表征可先做。低温同步辐射、DAC和SHG需要平台联合。",
        "risks": "高Cl掺入受限，已有高投料出现 Cr 卤化物与 Cr₂S₃。卤素挥发、取向与 He/酒精介质差异不可忽略。",
        "nextStep": "选择一块已知低Cl单晶和母体做同批常压成分、晶格和偏振Raman，明确下一次高压结构测量的相界判据。",
        "queries": [
          "2026-11-09 CrSBr1-xClx CrSBr CrSCl Cl substitution pressure Pmm2 polar structure",
          "2026-11-09 CrSBr pressure high-pressure diffraction polarity Raman alloy patent thesis"
        ],
        "remainingChecks": [
          "需逐表核相关压力合金文章与专利权利要求，尤其已有的低温DAC结构精修。"
        ],
        "priorArt": [
          {
            "url": "https://arxiv.org/abs/2611.09202",
            "title": "Pressure-induced symmetry breaking and polarity in the van der Waals magnet CrSBr",
            "overlap": "给无Cl母体结构转变及压力光谱。",
            "access": "公开主文 Methods 与图已读"
          },
          {
            "url": "https://doi.org/10.1002/apxr.202300036",
            "title": "Designing Magnetic Properties in CrSBr through Hydrostatic Pressure and Ligand Substitution",
            "overlap": "已制 x=0–0.67 CVT 合金，研究化学与物理压力的磁性作用。",
            "access": "正式HTML与表1核对，非本期独立收录"
          },
          {
            "url": "https://doi.org/10.1016/S0025-5408(00)00433-5",
            "title": "Preparation and crystal structure of quaternary chromium sulfide halide CrSBr0.67Cl0.33",
            "overlap": "已报道具体固溶相和Pmmn。",
            "access": "出版社摘要核读"
          },
          {
            "url": "https://fileserver-az.core.ac.uk/download/482689577.pdf",
            "title": "Two-Dimensional Magnetoelectronic Van Der Waals Compounds",
            "overlap": "学位论文第6章已有合金、位点和交换问题。",
            "access": "章节摘要和6.5.1检索线索"
          }
        ],
        "paperIndex": 2
      }
    ],
    "rejected": [
      {
        "title": "把 CrSBr₁₋ₓClₓ 一般固溶和磁性调控称作新发现",
        "url": "https://doi.org/10.1002/apxr.202300036",
        "reason": "此前已制备并测量，保留低温高压极性结构的独立检验。"
      }
    ]
  },
  {
    "date": "2026-11-08",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-09",
    "scope": "固定 Ca、少量 Zr 取代 Ti 的低温电光假设，待进一步查新。",
    "limitations": [
      "该候选未合成、未计算、未测量。已存在 BCTZ 体系，候选新意仅针对指定组分和低温对照。"
    ],
    "ideas": [
      {
        "id": "bcto-zr-quantum-plateau",
        "kind": "material",
        "status": "needs-review",
        "title": "少量 Zr 替换 Ba₀.₇₇Ca₀.₂₃TiO₃ 的 Ti 位，检验低温电光平台与局域无序",
        "material": "(Ba₀.₇₇Ca₀.₂₃)(Ti₁₋ᵧZrᵧ)O₃；y=0、0.01、0.03 为筛选点",
        "evidenceLevel": "母体成分仅为已读作者稿的模型，实测母体为应变 BaTiO₃；本系列未合成、计算或测量",
        "question": "在固定 A 位比例和膜应变时，少量同价 Zr⁴⁺ 是否能改变低温相界而保留低损耗的 Pockels 平台？",
        "prediction": "若主要是局域八面体几何改变，随实际 Zr 含量移动的介电和极化相界应与低温 r_eff 转折一起移动。若无序主导，可能出现频率色散增大、回线变宽和平台变钝，不能按均匀化学压力解释。",
        "basis": "Ti 与 Zr 同族，同为六配位的名义 +4 时，Zr 离子半径较大；3d/4d 杂化改变局部键长、位移势和随机弹性场。价电子计数不要求净补偿，但氧亏会掩盖效应。Ba/Ca 保持固定便于把 A 位化学压力与 B 位调节分开。具体位点、氧缺位、应变和固溶稳定仍需实测。母体图3观测应变BaTiO₃平台，图4的无应力Ca系列只提供模型筛选依据。",
        "difference": "BCTZ 固溶体与 Pockels/Kerr 可调已公开，公式及一般电光效应均排除新颖性。限定假设是固定 Ca/应变、稀 Zr 与低于25 K 的平台、介电色散和相界联动。",
        "plan": [
          "先用一套生长路线制备 y=0 和两档低 Zr 同厚膜，锁定基底、氧气和几何。",
          "用 WDS 或 RBS核验阳离子比例，XRD RSM、AFM 和局部成分图确认相纯、松弛与分相。",
          "在同电极和波长下同步测低温介电、SHG、Pockels 与漏电，检查频率和温度依赖。"
        ],
        "controls": [
          "无Zr 的 Ba₀.₇₇Ca₀.₂₃TiO₃",
          "既有压缩 BaTiO₃ 参比",
          "已知 BCTZ 配方的室温结构作工艺对照，不把高Zr端元外推为低温同相"
        ],
        "falsifiers": [
          "若色散、漏电或畴变化即可重现平台差异，暂停均匀软化解释。",
          "无可验证 Zr 实际成分或出现竞争相时停止拟合物性。"
        ],
        "feasibility": "可先用已有氧化物薄膜平台完成成分和低温介电筛查，样品通过后再做低温电光。",
        "risks": "Zr 可诱发局域随机场与相共存，压缩失配、氧缺位和畴分布可能比稀掺更强。",
        "nextStep": "先确认 y=0 薄膜在目标温区保持可测的相纯度和线性电光响应。",
        "queries": [
          "2026-11-09 BCTZ cryogenic Pockels quantum saturation Zr Ba0.77Ca0.23TiO3",
          "2026-11-09 barium calcium zirconate titanate Pockels low temperature patent thesis"
        ],
        "remainingChecks": [
          "待查特定低Zr/固定Ca成分、制备专利权利要求与低于25K数据；正式AM稿和专利号待核。"
        ],
        "priorArt": [
          {
            "url": "https://doi.org/10.1002/adma.75543",
            "title": "Quantum Saturation of the Electro‐Optic Effect",
            "overlap": "有应变 BaTiO₃ 量子饱和，提出 Ca 系列模型。",
            "access": "早期公开正文、Methods和随稿补充已读"
          },
          {
            "url": "https://doi.org/10.1021/acsami.3c06499",
            "title": "Lead-Free Perovskite Thin Films with Tailored Pockels-Kerr Effects for Photonics",
            "overlap": "BCTZ薄膜及成分相关线性、非线性电光已有实验。",
            "access": "机构公开全文入口、论文主要结果已核；完整低温范围待核"
          },
          {
            "url": "https://doi.org/10.1103/PhysRevLett.103.257602",
            "title": "Large Piezoelectric Effect in Pb-Free Ceramics",
            "overlap": "BZT–BCT 陶瓷和高压电响应已知。",
            "access": "机构公开稿及摘要结果核对"
          },
          {
            "url": "https://patents.justia.com/patent/20220107518",
            "title": "US20220107518",
            "overlap": "稳定四方 BaTiO₃ 与低温电光相关。",
            "access": "公开专利页，权利要求待比较"
          },
          {
            "url": "https://www.research-collection.ethz.ch/items/75dfa25f-fe8d-40d8-bfde-664ab2e1769a",
            "title": "Integrated cavity electro-optics with thin-film barium titanate",
            "overlap": "低温薄膜钛酸钡电光学位研究。",
            "access": "机构仓储题录与摘要"
          }
        ],
        "paperIndex": 1
      }
    ],
    "rejected": [
      {
        "title": "一般 BCTZ 薄膜的 Pockels/Kerr 调控",
        "url": "https://doi.org/10.1021/acsami.3c06499",
        "reason": "已有直接研究。"
      }
    ]
  },
  {
    "date": "2026-11-07",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-09",
    "scope": "ABAB 四层单侧 WSe₂/MoSe₂ 的层选择性扰动实验，待查新。",
    "limitations": [
      "候选未合成、未计算、未测量。公开查新范围有限。"
    ],
    "ideas": [
      {
        "id": "abab-four-layer-tmd-asymmetric-screening",
        "kind": "material",
        "status": "needs-review",
        "title": "在 ABAB 四层石墨烯一侧引入 WSe₂ 或 MoSe₂，拆分朗道级的屏蔽与近邻效应",
        "material": "石墨/hBN/[WSe₂ 或 MoSe₂]/ABAB-4LG/hBN/石墨，另做有一至二层 hBN 间隔的结构",
        "evidenceLevel": "母体先行正文及 SI 已读；候选未制备、未计算、未测量",
        "question": "同一位移场和载流子密度下，改变单侧硒化物会只影响有较大邻侧层权重的交叉，还是把所有锯齿近似一起平移？",
        "prediction": "若层选择性屏蔽主导，校正零位移场后交换接触面应反转若干交叉的偏移方向，加入薄 hBN 间隔时仍可留下电容异常。若差异主要来自杂化或近邻自旋轨道耦合，直接接触的变化应较突出，间隔引入后衰减。若相邻器件在匹配电子温度和展宽后无法重复差异，当前假设受否定。",
        "basis": "事实来自母体图3、4和S16。层权重会随D在B2/A3等分量之间改换，输运锯齿随磁场和温度变化。Mo和W为同族，在MoSe₂/WSe₂的名义配位下保持二硒化物骨架和价电子计数作对照，4d与5d能级、自旋轨道耦合和带边位置都会变，因此不能直接把测得差异归给重元素。这里不替换石墨烯碳位，无须假设碳晶格内电荷补偿。近邻材料的载流子和介电响应须分别量化。",
        "difference": "WSe₂/ABAB四层已有异常霍尔研究。此次问题仅限定为同片、Mo/W可换、间隔和接触面对调的半整数填充与分栅电容检验。多层数和ABCA的理论比较已由母体SI讨论。",
        "plan": [
          "同片分成相邻Hall bar，固定接触和退火，比较WSe₂、MoSe₂与hBN-only。",
          "用AFM、Raman和低场朗道扇核实厚度、堆垛和均匀性，独立标定双栅电容。",
          "在8–12 T及约20 mK附近同步记录电荷响应与输运，拟合固定填充上的交叉位置、半整数激活标度和展宽。"
        ],
        "controls": [
          "空白hBN界面和交换近邻材料所在侧",
          "相同材料加一至二层hBN间隔",
          "同片匹配迁移率、接触电阻、光刻流程、电子温度和磁场极性",
          "石墨栅厚度匹配，以栅态密度振荡作为竞争解释。"
        ],
        "falsifiers": [
          "镜像器件位移场校准后未重现选择性交叉偏移。",
          "若界面短路、堆垛改变或展宽大于目标偏移，停止解释物性。"
        ],
        "feasibility": "干法转移、低频双栅电容和稀释制冷磁输运可执行。先在高于最终测量温度完成电容与漏电标定，再申请稀释制冷时间。",
        "risks": "扭角或摩尔超晶格、氧化与界面气泡、带边电荷转移和hBN厚度误差都可能改变费米面。材料配对只能形成受控比较。",
        "nextStep": "先做 hBN-only 与同片一侧 WSe₂ 两个器件，确认可复现锯齿后再加 MoSe₂、间隔和反向结构。",
        "queries": [
          "2026-11-09 Bernal tetralayer graphene + WSe2/MoSe2 + fractional quantum Hall / oscillatory charge squeezing",
          "2026-11-09 graphene/TMD hBN spacer dielectric screening + patent/thesis"
        ],
        "remainingChecks": [
          "需逐页查阅精确四层 WSe₂/MoSe₂ 叠层与分数量子霍尔的学位、专利权利要求和未索引预印本。",
          "补测电容前无法判断带边电荷转移、堆垛和结构稳定。"
        ],
        "priorArt": [
          {
            "url": "https://doi.org/10.1038/s41467-026-79149-6",
            "title": "Fractional quantum Hall states and oscillatory Landau charge squeezing in Bernal tetralayer graphene",
            "overlap": "已测母体输运，SI 已算其他层数和 ABCA。",
            "access": "正文及SI实际读"
          },
          {
            "url": "https://doi.org/10.1103/PhysRevB.99.245402",
            "title": "Graphene on transition-metal dichalcogenides",
            "overlap": "已有石墨烯/TMD近邻自旋轨道机制。",
            "access": "索引及出版摘要线索"
          },
          {
            "url": "https://patents.google.com/patent/WO2024158401A2/en",
            "title": "WO2024158401A2",
            "overlap": "超洁净石墨烯/TMD堆叠工艺。",
            "access": "专利公开条目，权利要求待逐项比较"
          },
          {
            "url": "https://etheses.whiterose.ac.uk/33532/1/Veneri_205052612_Thesis.pdf",
            "title": "Veneri 石墨烯/WSe₂ 电荷与自旋输运学位论文",
            "overlap": "近邻输运，结构有重叠。",
            "access": "学位全文入口已定位，未逐章阅读"
          },
          {
            "url": "https://doi.org/10.1088/1674-1056/adb411",
            "title": "WSe₂/ABAB 四层石墨烯的栅控异常霍尔研究",
            "overlap": "已有组合，物性和对照不同。",
            "access": "期刊题录与摘要核对"
          }
        ],
        "paperIndex": 1
      }
    ],
    "rejected": [
      {
        "title": "WSe₂/ABAB 四层组合本身",
        "url": "https://doi.org/10.1088/1674-1056/adb411",
        "reason": "已有实验，保留界面反向、间隔和分栅电容的新测量目标。"
      }
    ]
  },
  {
    "date": "2026-11-06",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-06",
    "scope": "两项具体物理假设：ZnCoP₂O₇非磁位低Mg固溶，用占位核验区分几何与链缺陷；(Ga,Fe)Sb中固定Fe、少量Bi替Sb，分离磁近邻、无序与界面结构。两项均待进一步查新。",
    "limitations": [
      "均未合成、未计算、未测量；标needs-review，新颖性、稳定性和可合成性未证。",
      "已知端元、普通Bi掺GaSb与既有配方不当新材料；本期候选的差异及否定条件按条列。",
      "限定论文/预印本、专利与学位线索；未穷尽结构库及专利权利要求。"
    ],
    "ideas": [
      {
        "id": "znmg-cobalt-pyrophosphate-site-selectivity",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 22,
        "title": "(Zn₁₋ₓMgₓ)CoP₂O₇：用非磁位替换与占位实测区分几何压力和随机链缺陷",
        "material": "名义候选(Zn₁₋ₓMgₓ)CoP₂O₇低x固溶；意图Mg²⁺进入Zn²⁺非磁位，真实位点偏好未知。MgCoP₂O₇端元早已有论文/专利，绝非预测新发现该化合物。",
        "evidenceLevel": "本期ZnCoP₂O₇正式21页正文Methods、表I/II、图1–12与关键渲染图实际已读；候选未合成、未计算、未测量。",
        "question": "保持Co磁离子名义数不变时，非磁位配位偏好能否改变链间几何与Zn/Co反位倾向？持续动态能否在位点有序度提高时仍存在？",
        "prediction": "条件性预测：只有Mg确实主要占Zn位且骨架仍为母相时，低替换量可作为改变非磁隔离多面体几何的参数。若反位减少而低温动态平台与无序温区仍保留，更支持本征低维/挫折；若动态强度主要跟Co误占/链断裂而非平均晶格变化走，支持无序驱动态。不能预言必然提高或降低J、Tc或磁序温度；若Mg优先进Co位，原非磁位化学压力假说即被否定。",
        "basis": "文献事实：母文显示Co八面体磁链、Zn隔离单元，XRD不能排除反位；既有2016母体论文强调Zn为畸变方锥、Co为八面体。物理类比：Zn²⁺为d10、Mg²⁺无d磁矩，等价替换不要求额外载流子补偿，且Mg比Cd更值得优先考虑因为不新增重元素SOC和明显大离子差；但必须比较相同配位半径，不能把Mg八面体半径直接与Zn五配位半径作化学压定量。本站假说：配位偏好比仅名义半径更能检验缺陷来源。未知：Mg实际占位、固溶范围、竞争磷酸盐和反位能量。",
        "difference": "排除“MgCoP₂O₇是新材料”和普通Mg-Co焦磷酸盐制备。保留限定的低Mg非磁位固溶、退火控制和实测反位共同解释毫开尔文动态的因果设计；是否已有等价低温磁性系列尚未确认。",
        "feasibility": "先计算或查已有晶体结构的位点能偏好，未做DFT不能报能差。实验先少量粉末筛选：母相、数个低名义x、MgCoP₂O₇已知端元参比；不强迫端元同构。常规Rigaku XRD可查主相及晶格趋势，但区分Zn/Co/Mg占位需联合中子/共振衍射与ICP/WDS，低温先PPMS再合作稀释/μSR。",
        "risks": "Mg可能偏好Co八面体而直接磁稀释，或促使P₂O₇骨架相变；低名义x不保证单相，Zn挥发/磷损失改变计量，退火也会共变晶粒和缺陷。",
        "nextStep": "先核母/端元CIF及Mg位点能与相图，再补查固溶磁性/学位专利；现阶段仅待查新假说，不建议直接按未知配方投入大批次单晶。",
        "plan": [
          "先由已有母相和MgCoP₂O₇结构核位点配位，检查是否允许连续低x；比较Zn位与Co位替换，保持电中性。",
          "母相及低x系列用同一温程与至少两个退火条件，小批量实测成分与相含量，不报最优x。",
          "将占位、晶格和低温动态分别作横坐标，比较热容/交流磁化率/μSR；若无法分辨占位，不作化学压力因果结论。"
        ],
        "controls": [
          "未替换ZnCoP₂O₇母相",
          "已知MgCoP₂O₇端元但不假设同相",
          "匹配实际Co含量的直接磁稀释参比",
          "同名义组成不同退火的反位度参比"
        ],
        "falsifiers": [
          "Mg主要占Co位或出现竞争相则停止非磁位替换路线。",
          "若提高占位有序度后动态消失并出现磁序，降低本征自旋液体解释。",
          "若所有变化可由Co实际损失解释，不宣称独立化学压力调控。"
        ],
        "queries": [
          "2026-11-06: \"ZnCoP2O7\" \"Mg\"",
          "2026-11-06: \"Zn1-xMgxCoP2O7\" OR \"MgCoP2O7\" magnetism",
          "2026-11-06: \"zinc cobalt pyrophosphate\" magnesium substitution thesis patent",
          "2026-11-06: \"ZnCoP2O7\" magnesium substitution",
          "2026-11-06: \"MgCoP2O7\" crystal structure",
          "2026-11-06: \"ZnCoP2O7\" thesis"
        ],
        "remainingChecks": [
          "限定网页检索已见MgCoP₂O₇端元和封接专利，但未完整检查Zn-Mg-Co-P-O固溶相图及低温磁性；不能断言新颖。",
          "学位检索未获得直接全文，专利只核公开段落未逐项读全家族权利要求。",
          "尚未确认非磁Zn位占Mg的配位化学可行性，五/六配位半径不可混比。"
        ],
        "priorArt": [
          {
            "title": "Frustration-driven spin liquid ground state in the Jeff=1/2 zigzag chain antiferromagnet ZnCoP2O7",
            "url": "https://doi.org/10.1103/1b15-5ldr",
            "overlap": "母文已指出反位和无序解释不能排除，不能把普通提高质量包装首创。",
            "access": "本期正式正文Methods与关键图实际精读"
          },
          {
            "title": "Magnetic and thermodynamic properties and magneto-structural correlation of the diphosphate ZnCoP2O7",
            "url": "https://doi.org/10.1080/15421406.2015.1137126",
            "overlap": "2016母体结构与低维反铁磁已有；Zn方锥/Co八面体事实。",
            "access": "出版社公开摘要，未计本期精读"
          },
          {
            "title": "Bivalent pyrophosphates as high-performance phosphate-based corrosion inhibitors",
            "url": "https://doi.org/10.1016/j.jece.2026.122323",
            "overlap": "MgCoP₂O₇已合成且有结构表征，不是本站预测的新化合物；催化/腐蚀数据不能推断低温磁态。",
            "access": "出版社公开摘要与结构段落检索结果；未读完整全文"
          },
          {
            "title": "EP0536591A1 Sealing material and method",
            "url": "https://patents.google.com/patent/EP0536591A1/en",
            "overlap": "1993封接材料已使用MgCoP₂O₇，端元存在和一般制备方向排除。",
            "access": "公开专利检索段落，未完整权利要求查新"
          }
        ]
      },
      {
        "id": "gafesbbi-anion-alloy-proximity-control",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 16,
        "title": "Al/InAs/Ga₁₋ₓFeₓSb₁₋ᵧBiᵧ：固定Fe、稀量Bi替Sb能否改变交换近邻与散射的竞争？",
        "material": "候选为Al/盖层/InAs/Ga₁₋ₓFeₓSb₁₋ᵧBiᵧ外延堆垛；Fe占Ga位、Bi拟占Sb位，x固定母体实际14.6%附近，y为待筛低含量系列，不设最优值。",
        "evidenceLevel": "母体正式主文Results/Methods/图1–5及SI实际读；GaSbBi最近邻仅核机构/出版社公开摘要、样品段和学位检索线索。候选未合成、未DFT、未测量。",
        "question": "在不把提高Fe浓度重复当新课题的前提下，能否用同族阴离子替位改变价带/波函数渗透与SOC，使InAs磁近邻的变化独立于铁磁层总磁矩？",
        "prediction": "条件性假说：若Bi可真正替入Sb位、保留低温闪锌矿单相与相近界面粗糙度，则阴离子p态重构可能改变InAs波函数穿透和Rashba/交换竞争；以独立测得的密度、磁化和散射匹配后，正常态自旋劈裂或非互易响应仍可能随y系统改变。若差别完全由迁移率下降、漏电或杂相解释，或仅总磁矩变化而匹配后消失，则否定独立阴离子能带设计的简单版本。不能预言Tc必升、二极管效率必增或必有π结。",
        "basis": "文献事实：母体14.6%Fe样品Tc约25K，超流受密度控制，直接栅控交换未证实；GaSbBi本身早已生长，低温MBE与Sb/Ga通量决定Bi并入和液滴。物理类比：Sb/Bi同族等价电子数，拟在同一阴离子位作近等价替换，Bi更重的p轨道可改变SOC、杂化和局域键，但形式价−3仅是III-V价电子记账，不能视作实测离子价态；Fe可能混合价也不能先定。本站假说：固定磁性阳离子，用阴离子小比例改变近邻能带耦合。未知：Fe/Bi共掺位点、并入窗口、互溶与交换变化方向。",
        "difference": "排除单独GaSbBi、单独提高Fe浓度、普通栅压调密度、BiSb/GaFeSb外加拓扑层。候选差别是在同一磁性层内部作Sb位稀Bi合金化，配套无Fe/有Fe与等密度参比，将磁性、SOC和散射拆开；尚未确认无等价工作。",
        "feasibility": "先做未覆Al的GaSbBi、GaFeSbBi见证薄膜和能带/成分定量，只有仍为单相且低温电阻满足绝缘下层条件才接InAs、盖层和Al。Bi可能改变价带顶与type-III对齐，但方向和大小需实测或有收敛检验的计算；不能借用GaAsBi的meV/%数字。需要有Bi源的低温MBE和成分/磁性/低温输运合作；用户普通XRD可筛外延峰和杂相，不能证明Bi位点或微量Fe团簇。",
        "risks": "Bi液滴、Fe富集或Fe–Bi/Sb竞争相、粗糙度和界面互扩散、能带改变导致下层导电分流、载流子补偿与局域应变共变；仅按原子半径断言晶格膨胀尤其不可靠，已有GaSbBi/InSbBi机构报告观察到晶格收缩。",
        "nextStep": "暂不建议直接做完整Josephson器件。先补查四元GaFeSbBi同义组成及专利/学位，并确定母体盖层19%/81%In矛盾；见证薄膜合格后才讨论磁近邻输运。",
        "plan": [
          "固定实测Fe含量，构造y=0和多个低Bi筛选点；另做同y无Fe GaSbBi、原始GaFeSb及不接Al参比。所有含量以实测而非源通量代替，不把系列端元视作已稳定材料。",
          "RHEED/高分辨XRD/RSM、AFM、STEM-EDS/EELS、SIMS/RBS互核Bi/Fe分布，必要时XAS查占位/价态。检查第二相、液滴、残余导电和界面粗糙度。",
          "先测Hall/SdH与MCD/SQUID，利用双栅或匹配器件把实际密度与电场变化分开，再按母文磁历史协议测Al近邻超流、MAR和非互易绝对电流；需相位敏感测量才能判断π结。"
        ],
        "controls": [
          "固定Fe实测值和低温热历史的无Bi母体",
          "相同Bi含量无Fe的GaSbBi，用于分离普通SOC/缺陷效应",
          "实际载流子密度、迁移率、磁化及粗糙度匹配",
          "相同Al厚度/结几何与正反磁历史/电流"
        ],
        "falsifiers": [
          "Bi未占Sb位、出现不可控液滴/第二相或强导电分流，停止候选器件制备。",
          "密度/迁移率/磁化匹配后近邻差别消失，不再宣称独立阴离子调控。",
          "只有拟合参数变化而无独立自旋/结构证据，不得宣布新相、三重态或π结。"
        ],
        "queries": [
          "2026-11-06: \"(Ga,Fe)\" \"Sb\" \"Bi\" semiconductor",
          "2026-11-06: \"GaFeSbBi\" OR \"Ga(Fe)SbBi\" OR \"GaFeSb\" \"bismuth\"",
          "2026-11-06: GaSbBi molecular beam epitaxy bismuth incorporation spin orbit",
          "2026-11-06: GaFeSbBi patent OR thesis; \"GaSbBi\" patent thesis",
          "2026-11-06: site:patents.google.com \"GaSbBi\" \"ferromagnetic\"; site:arxiv.org \"GaFeSbBi\"; \"GaSbBi\" \"Fe\" thesis"
        ],
        "remainingChecks": [
          "普通网络全文检索实际访问仅限定公开搜索结果、机构摘要和出版社样品段；没有穷尽专利全文权利要求、所有学位正文或化学数据库同义组成。",
          "定向检索GaFeSbBi/arxiv及GaSbBi ferromagnetic/patent未返回明确同组成磁性异质结论文或专利，但有GaSbBi学位及研究线索；搜索索引覆盖有限，不代表不存在。候选保持needs-review，不宣称首创。",
          "必须核验Fe/Bi共同并入窗口、局域占位与相稳定性；GaSbBi存在不保证GaFeSbBi及其Al异质结可合成。"
        ],
        "priorArt": [
          {
            "title": "Interplay of superconductivity and ferromagnetism in ferromagnetic-semiconductor-based Josephson junctions",
            "url": "https://doi.org/10.1038/s43246-026-01393-6",
            "overlap": "母体已实现栅控超流；提高Fe和不同结长已是作者未来工作，排除为新设想。",
            "access": "正式主文Methods/图和真实SI实际读"
          },
          {
            "title": "Bismuth incorporation and lattice contraction in GaSbBi and InSbBi",
            "url": "https://research.chalmers.se/publication/149579",
            "overlap": "同族大原子并入不保证晶格膨胀；GaSbBi本身非新材料。",
            "access": "机构公开摘要已核，未精读全文"
          },
          {
            "title": "Influence of the Bismuth Content on the Optical Properties and Photoluminescence Decay Time in GaSbBi Films",
            "url": "https://doi.org/10.1021/acsomega.3c05046",
            "overlap": "已有GaSbBi低温MBE和组分研究；其生长窗口不能直接搬给Fe共掺。",
            "access": "出版社公开样品段/机构公开稿检索摘录"
          },
          {
            "title": "Epitaxial phases of high Bi content GaSbBi alloys, included in Joonas Hilska thesis",
            "url": "https://trepo.tuni.fi/bitstream/10024/161690/2/978-952-03-3703-2.pdf",
            "overlap": "高Bi外延相与Sb/Ga通量对质量的影响已有论文和学位，必须排除一般GaSbBi生长创新说法。",
            "access": "机构学位检索线索与内含论文摘要，未逐页读完整学位"
          },
          {
            "title": "Giant gate-controlled odd-parity magnetoresistance in one-dimensional channels with a magnetic proximity effect",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC9646711/",
            "overlap": "无Bi的磁近邻边缘通道、表面钉扎和Rashba效应已有；一般边缘测量不是新方向。",
            "access": "PMC公开Methods段核验，未计本期新增/精读"
          }
        ]
      }
    ],
    "rejected": [
      {
        "title": "MgCoP₂O₇作为全新端元",
        "url": "https://patents.google.com/patent/EP0536591A1/en",
        "reason": "已检到端元制备与专利；保留的是低浓度位点—无序—低温动力学检验。"
      }
    ]
  },
  {
    "date": "2026-11-05",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-05",
    "scope": "本期实际阅读母体支持的两项材料/结构假说：STO氧同位素与位错芯热阻、PZT侧向边界化学梯度与PTO/STO涡旋奇偶。均未合成或新计算，既有同位素降热导和PZT涡旋不能包装为本站新发现。",
    "limitations": [
      "所有候选标needs-review，查新尚不足以确认新颖性、稳定性或可合成性。",
      "组成点仅是筛选设计，不是最佳掺杂；没有运行DFT、声子或新物性实验。",
      "专利权利要求、全部学位及结构数据库未穷尽，查询范围和未知逐项列明。"
    ],
    "ideas": [
      {
        "id": "pzt-lateral-boundary-chemistry-vortex-parity",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 1,
        "title": "Pb(Ti₁₋ₓZrₓ)O₃/STO受限条带：用等平均Zr含量的左右边界化学不对称检验涡旋奇偶选择",
        "material": "具体结构候选为PTO主体、两侧低比例Zr替Ti的PZT边界窄区/STO；比较左右对称和单侧梯度，PZT本身是已知材料，新颖性仅待核结构设计。",
        "evidenceLevel": "本期PTO/STO主文Methods、图1–5和真实SI已读；候选未合成、未计算、未测量。",
        "question": "偶数涡旋偏好在多大程度上依赖左右边界等价？若平均组成与几何不变、只改变边缘局域极化刚度，能否从成对约束走向稳定奇数/缺陷态，或改变恢复阈值？",
        "prediction": "条件性假说：若低Zr同价替Ti能够在保留外延和铁电性的同时改变边缘局部Landau/梯度/弹性代价，则单侧梯度可能使两端钉扎不等价，让偶数偏好弱化，出现相对均匀参比更稳定的奇数或非对称混合态；左右镜像梯度应给镜像空间响应。若仅整体涡旋消失、或所有结果只随平均应变变化，则否定“独立边界化学调控奇偶”的简单版本。不能保证奇数稳态存在。",
        "basis": "文献事实：本篇自由能对比显示特定边界下偶数优于邻近奇数，边缘在偏压下更稳定，间隔层会改变上下层混合态。最近邻事实：PZT极化涡旋和纳米点拓扑已知，PZT代替PTO不是本站新材料。物理类比：Ti与Zr同族、常用B位4+，在同八面体配位下Zr通常尺寸更大、4d成键不同，既可改变局部应变也可改变极化能景观；不靠SOC增强作解释。本站假说：用空间分布而非仅平均含量，检验左右边界能量差。未知：Zr位点/扩散、可保留的侧向梯度、畴稳定性及真实参数；未实施DFT或声子计算。",
        "difference": "排除一般PZT涡旋、PZT纳米点、机械载荷切换和单纯变宽度。具体差别为在有限PTO/STO条带边缘置入同价B位化学梯度，固定平均Zr含量、厚度与加工损伤，比较对称/单侧/镜像三种边界对奇偶能量与撤场恢复的作用。尚未确认无等价文献/专利，不作为已证新课题。",
        "feasibility": "先做相场灵敏度研究，使用有出处的PZT局部参数范围与实际应变约束，不把任意修改系数当真实新材料。只有预测在合理参数范围稳健且制备可行才尝试PLD/纳米加工合作；纳米侧向Zr梯度比均匀掺杂困难，可能需掩膜沉积和受控扩散，当前未验证。用户常规XRD可主相初筛，但不能分辨侧边数nm占位，需要原子STEM-EDS/EELS与极化图。",
        "risks": "Zr梯度会与应变、氧空位和边缘非晶层共变；制程可能改变有效L或形成竞争相，PZT扩散可能抹去梯度；相场参数转移与电极屏蔽不确定。Pb/Zr/Ti实测和损伤匹配失败时不可作单因果解释。",
        "nextStep": "先补查PZT/STO侧向组成梯度及奇偶涡旋相关文献/专利权利要求，再用母文边界条件做参数灵敏度与镜像对照，暂不直接投入制样。",
        "plan": [
          "固定母文PTO厚度、STO间隔和外延应变，构造均匀平均Zr、左右对称边界富Zr、单侧梯度及其镜像；低比例只是筛选变量，不设最佳x。",
          "先用合理有出处参数比较奇偶态自由能、多随机初态和扰动稳定性，区分真正稳态和长寿命亚稳；不以某一次松弛结果定相。",
          "实验可行时先用STEM成分图核实际Zr位点梯度与Pb/O缺陷，再盲法极化涡旋计数和低剂量偏压撤场循环；同步保存原始图和处理参数。"
        ],
        "controls": [
          "相同平均Zr且均匀分布的PZT参比",
          "左右镜像梯度与左右对称边界",
          "相同有效宽度/厚度、氧处理和FIB剂量",
          "纯PTO/STO与无偏压束照参比"
        ],
        "falsifiers": [
          "若梯度无法保持、出现相分离/明显不同损伤，则暂停候选。",
          "若匹配实际应变与L后差别消失，则否定独立边界化学机制。",
          "若所有合理参数下都只稳偶数或整体失去涡旋，不得把数值噪声当奇数新态。"
        ],
        "queries": [
          "2026-11-05: PbTiO3 Zr vortex edge",
          "2026-11-05: ferroelectric vortex odd confinement",
          "2026-11-05: PZT SrTiO3 vortex patent thesis"
        ],
        "remainingChecks": [
          "已查普通PZT涡旋、纳米点、机械调控与专利/学位线索，未覆盖所有侧向graded-composition/PZT-STO edge asymmetry同义词。",
          "专利CN110473873B摘要明确已知PZT阵列制备，未逐项读全家族权利要求；必须查空间组成梯度是否覆盖。",
          "UCL学位仅核公开摘要/图注线索，未逐页读完整学位。",
          "需核Zr梯度的可合成性、局域参数与溶解/扩散，不以PZT已知就保证该纳米结构可做。"
        ],
        "priorArt": [
          {
            "title": "Quantized even number of vortices in a confined PTO/STO ferroelectric heterostructure with edge pinning effect",
            "url": "https://doi.org/10.1038/s41467-026-79270-6",
            "overlap": "有限边界、偶数偏好和钉扎已由母文研究，不能包装为新设想。",
            "access": "本轮主文Methods/图与部分SI实际精读"
          },
          {
            "title": "Atomic imaging of mechanically induced topological transition of ferroelectric vortices",
            "url": "https://www.nature.com/articles/s41467-020-15616-y",
            "overlap": "PZT/PTO-STO等极化涡旋和外力控制已有，普通机械切换不是新方向。",
            "access": "出版社公开检索摘要与引言线索，未计本期精读"
          },
          {
            "title": "Preparation method of ordered ferroelectric topological domain structure array",
            "url": "https://patents.google.com/patent/CN110473873B/en",
            "overlap": "SRO/STO上PLD-PZT拓扑阵列已有专利，材料和一般阵列制备均非首创。",
            "access": "公开专利摘要/步骤线索，未核完整家族权利要求"
          },
          {
            "title": "PbTiO3 Ultrathin Films, Chapman thesis",
            "url": "https://discovery.ucl.ac.uk/10056036/11/Chapman_10056036_thesis.pdf",
            "overlap": "学位讨论PTO/PZT涡旋、薄膜应变和边界，需查是否已有等价侧向梯度。",
            "access": "UCL机构公开检索摘录与图注，未完整精读"
          }
        ]
      },
      {
        "id": "sto-isotope-dislocation-thermal-contrast",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 6,
        "parentDoi": "10.1002/adma.75575",
        "title": "SrTi(¹⁶O₁₋ᵧ¹⁸Oᵧ)₃低角晶界：同位素质量无序是否非加性地改变位错芯与体相的热阻反差？",
        "material": "SrTi(¹⁶O₁₋ᵧ¹⁸Oᵧ)₃低角度双晶系列；氧子晶格同位素替换，实际氧空位及Ti价态须保持并测定；不是新化合物的合成宣称",
        "evidenceLevel": "母体AM正式摘要已读；对应arXiv:2605.19496v1主文、Methods、图1–3和内附SI/S1–S6已实际读。终稿与旧稿界面热导数值不同，不能将旧稿参数称终稿。候选未合成、未计算、未测量，稳定性及新颖性未确认。",
        "question": "在位错间距、晶界角、Ti价态和氧空位相当时，改变氧质量能否使位错芯局域振动与体相模式的耦合变化，导致界面热导的变化不能仅用体相热导下降解释？",
        "prediction": "条件性假说：若位错芯局域化模式和体相传播模式的氧参与程度不同，同位素替换会以不同程度移动和展宽其频谱，可能改变跨芯耦合及相对热阻。可证伪量是相同几何下的界面热阻与体相热导组合，而不是仅观察样品总热导下降。若所有变化都可由实测体相热导及几何解释，否定位错芯特异的非加性机制。方向可能增强也可能减弱，需先取得模式本征矢/频谱；不凭质量平方根直接断言全部模式同幅红移，不预测最佳y或精确热导。",
        "basis": "文献事实：母体用振动EELS和温度剖面区分位错芯/芯间区，表明边界并非均匀热阻面；但正式摘要与旧稿的定量反演有显著修订。物理类比：¹⁶O/¹⁸O不改变氧的核电荷及名义氧化态，相比Sr/Ca或Ti/Zr替换更有利于隔离质量与键合/电荷因素；同位素仍可经零点运动、软模和退火历史间接改结构，不能称完全无结构影响。本站假说：位错重构使氧相关局域谱与体相谱的质量敏感度不同，因而存在可辨认的界面与体相响应差别。未知：真实同位素在位错芯的分布、交换动力学、缺陷演化、模式局域化和相干/非相干权重。",
        "difference": "简单用氧同位素无序降低SrTiO₃热导已有J.Phys.Chem.Lett.直接论文，明确排除为新方向。氧示踪扩散与位错/晶界空间电荷关系也已有论文和学位研究。候选的限定差别是匹配价态/缺氧条件的低角度晶界上，对芯区与体相热阻反差和频谱耦合做联合定量检验；本次未完成全引文及专利权利要求核对，只能标待查新。",
        "feasibility": "需要同位素气体交换、低角STO双晶、同位素深度分析、热输运和振动EELS合作，不能假定用户现有设备全部具备。Rigaku UltimaIV可辅助结构和杂相检查，不能直接判定氧同位素比例、纳米芯温度或氧空位分布。先用较少样品验证交换与缺氧控制；具体温度时间必须据原始工艺及设备重新设计，不能套用常规退火。",
        "risks": "同位素气体昂贵，退火可能引入还原、Ti³⁺、氧空位、芯重构及空间电荷；有文献表明位错可阻碍而非总是加速氧示踪扩散，均匀交换不能预设。EELS温度反演、参考热导、厚度和束流损伤会带来系统误差。低温软模或铁电关联也会改变热导，须区分质量无序与新相转变；不给出未经计算的稳定性或性能数值。",
        "nextStep": "先补读终稿Methods/SI及同位素热导既有论文，确认未有等价芯区研究；随后以¹⁶O与部分¹⁸O匹配退火双晶/无晶界对照验证同位素深度和Ti价态。交换不均或缺陷不可匹配时暂停纳米热导归因。",
        "plan": [
          "查新关：检索化学式变体、oxygen isotope disorder、low-angle grain boundary、dislocation core、thermal boundary conductance，并追直接热导论文引用、专利与学位论文。",
          "材料关：同批STO双晶与无晶界参比，分别同条件¹⁶O退火和部分¹⁸O交换；ToF-SIMS等测实际y及深度，结构、厚度、位错间距和价态独立核验。",
          "物性关：先测体相/无界面热导及振动谱，再比较匹配几何的界面温度降；分析误差传播，不仅比较未经归一化总热阻。",
          "机制关：如可计算，显式同位素质量排布与相同原子结构下比较模式参与率及界面透射，另做结构/缺氧敏感性；这些计算尚未运行。"
        ],
        "controls": [
          "同热历史¹⁶O样品与部分¹⁸O系列，实际y由分析确定而非以气体配比代替",
          "相同组成的无晶界参比，以分离体相质量无序散射",
          "晶界角、芯间距、厚度、氧空位和Ti³⁺水平匹配的重复批次",
          "温度依赖振动谱和热导，检查软模/相变与简单质量散射的替代解释"
        ],
        "falsifiers": [
          "同位素在界面/体内分布或缺氧水平不可匹配，停止芯特异机制归因",
          "归一化后界面反差无超出误差的变化，否定当前可测非加性版本",
          "差别仅随Ti³⁺或晶界重构而变，转为缺陷效应而非质量效应解释",
          "发现等价同位素晶界芯热输运直接工作，则移入已有路线并重新设计差别"
        ],
        "queries": [
          "2026-11-05: \"SrTiO3\" \"oxygen isotope\" \"dislocation\" thermal",
          "2026-11-05: \"SrTi18O3\" \"grain boundary\" phonon",
          "2026-11-05: \"SrTiO3\" \"isotope\" thesis thermal conductivity",
          "2026-11-05: site:patents.google.com \"strontium titanate\" \"oxygen isotope\""
        ],
        "remainingChecks": [
          "尚未全文读直接同位素热导论文与相关学位论文，未验证全部引文和专利家族/权利要求",
          "原母体正式Methods/SI未得，定量数据须与VOR核对；当前位错物理依据来自明确标注的早期公开稿",
          "未验证实验平台同位素交换、EELS合作条件和空间分辨率；不承诺可合成、可分辨或性能提升"
        ],
        "priorArt": [
          {
            "title": "Nanoscale Thermal Imaging of Dislocation-Mediated Heat Transport",
            "url": "https://doi.org/10.1002/adma.75575",
            "overlap": "位错芯/芯间纳米热输运母体，不能把直接分辨位错热阻本身称新方向",
            "access": "正式摘要，早期arXiv:2605.19496v1二十七页主文、方法、图及内附SI实际读；终稿全文未得"
          },
          {
            "title": "Suppressing Thermal Conductivity in SrTiO3 by Introducing Oxygen Isotope Disorder",
            "url": "https://pubs.acs.org/doi/10.1021/acs.jpclett.4c03034",
            "overlap": "已有氧同位素无序降低STO热导直接研究，排除简单同位素降热导为创新",
            "access": "出版社摘要已读，正文未精读"
          },
          {
            "title": "The blocking effect of surface dislocations on oxygen tracer diffusion in SrTiO3",
            "url": "https://pubs.rsc.org/en/content/articlelanding/2018/cp/c8cp02191k",
            "overlap": "位错与空间电荷可阻碍氧示踪扩散，提示交换不均的核心风险",
            "access": "出版社摘要已读，全文未精读"
          },
          {
            "title": "Sauerstofftransporteigenschaften von SrTiO3-basierten Materialien（学位论文线索）",
            "url": "https://publications.rwth-aachen.de/record/571463/files/571463.pdf",
            "overlap": "已有氧同位素交换与低角晶界扩散研究，不能把示踪交换本身称新路线",
            "access": "仓储检索片段及PDF线索，未全文读取；题名需进一步核定"
          },
          {
            "title": "专利检索：strontium titanate与oxygen isotope",
            "url": "https://patents.google.com/",
            "overlap": "定向检索未核出直接等价家族，不能据此宣称不存在",
            "access": "仅限定检索，未完成专利家族与权利要求审查"
          }
        ]
      }
    ],
    "rejected": []
  },
  {
    "date": "2026-11-04",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-04",
    "scope": "本期实际阅读母体支持的三项材料/结构假说：Nb-Ta位点替换、VN低碳阴离子替换、MXene C/N短程结构。均未合成或新计算；已有碳氮化物及专利不能包装成新材料。",
    "limitations": [
      "所有候选标needs-review，查新尚不足以确认新颖性、稳定性或可合成性。",
      "组成点仅是筛选设计，不是最佳掺杂；没有运行DFT、声子或新物性实验。",
      "专利权利要求、全部学位及结构数据库未穷尽，查询范围和未知逐项列明。"
    ],
    "ideas": [
      {
        "id": "srla-nb-ta-distortion-decoupling",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 4,
        "title": "SrLaCo(Nb₁₋ₓTaₓ)O₆：近等尺寸d⁰位替换能否分离键合与几何畸变？",
        "material": "SrLaCo(Nb₁₋ₓTaₓ)O₆候选固溶体；假定位于Nb位的Ta⁵⁺，实际位点/氧计量/固溶范围未确认",
        "evidenceLevel": "母体PRB正式正文、实验、图1–13/Table I及Appendix实际读；候选未合成、未测量、未计算。",
        "question": "保持Co²⁺和A位计量时，Nb⁵⁺/Ta⁵⁺近等尺寸替换能否让局域八面体规则化温度与真正空间群转变发生不同幅度的移动？",
        "prediction": "条件性预测：若Ta确实占Nb八面体位且保持B位有序、Co价态与氧含量，d⁰的Nb4d→Ta5d会改变氧杂化与力常数，而不会像异价掺杂那样必须引入载流子或氧补偿。因此局域Raman/键长交叉与系统消光相变不必同步移动；不预先断言温度升降方向或磁性增强。若所有变化只随体积和反位比例坍缩，则否定“独立键合调节”的当前版本。",
        "basis": "文献事实：母体局域畸变交叉与P2₁/n→I2/m消光变化是不同事件，氧坐标和β相关性需要额外约束。物理类比：同族Nb/Ta在同六配位五价条件下尺寸接近，均d⁰；不能用自由原子半径排序，也不能把Ta更重直接等同于声子纯质量缩放。本站假说：以近等尺寸替换优先扰动键共价性和晶格动力学，可检验单纯几何化学压力模型。未知：Ta位点偏好、实际价态、相竞争、互溶和反位形成；更强SOC位于d⁰离子也不保证新拓扑态。",
        "difference": "不是直接把已知母体重复温扫；具体设计为固定Co子晶格并匹配实际体积/氧量/有序度的Nb-Ta比较。2026-11-04定向化学式及tantalum/substitution/patent/thesis查询未得到可确认的直接候选研究，但专利家族、学位全文和所有化学式变体未检全，不能宣称新材料或首创。",
        "feasibility": "先小批母体与名义x=0.05/0.10筛选，比例仅为探索点；以母体固相热史为起点，不承诺相同程序即可形成Ta固溶体。用户Ultima IV可筛杂相和晶格，低含量Ta位点/Co价态及氧含量需WDS/ICP、XAS或化学分析合作；高温衍射/Raman须确认附件，现有3kW设备不等于母文SmartLab9kW条件。",
        "risks": "Ta富竞争相、Co/Nb/Ta反位、氧空位与价态变化可假冒键合效应；表面EDS不能独立确定氧计量。样品热史与颗粒尺寸必须匹配，不能将Rwp更低当同构证据。Ta重元素也会降低XRD对氧的相对灵敏度。",
        "nextStep": "先补检Ta端元和Nb/Ta系列学位、专利，再完成母体两批重复和低Ta相纯度/位点筛查；材料关未过不进入高成本高温图谱。",
        "plan": [
          "材料关：同批原料合成母体、低Ta系列和独立重复；核实际Nb/Ta、Co价态、氧量及主杂相。",
          "结构关：比较竞争空间群的辨识峰、超结构峰及参数相关性，不仅比较全谱残差。",
          "机制关：在可用高温附件下同时跟踪局域Raman、键长交叉与系统消光，保存升降温回线。",
          "尚未执行的计算：显式位点/反位结构的相竞争与振动计算，禁止以假设输入冒充稳定性结果。"
        ],
        "controls": [
          "母体两批与低Ta系列，匹配晶粒尺寸与热史",
          "若可合成的Ta端元作为边界；未合成前不得假定同构",
          "氧计量、Co价态、B位有序及实际体积匹配的对照"
        ],
        "falsifiers": [
          "Ta不进目标位或分相：停止固溶调控解释",
          "差异完全由氧缺失/Co价态变化解释：否定等价替换前提",
          "局域与平均相变在所有匹配变量下同步、无独立趋势：不支持当前解耦版本",
          "查得等价系列与目标判据已有：移入已有路线"
        ],
        "queries": [
          "2026-11-04: \"SrLaCoTaO6\"",
          "2026-11-04: \"SrLaCoNbO6\" tantalum substitution",
          "2026-11-04: \"SrLaCoNb\" \"Ta\"",
          "2026-11-04: \"SrLaCoNbO6\" patent thesis"
        ],
        "remainingChecks": [
          "本次定向公开网页与母体文章核对，不是全数据库穷尽查新",
          "专利权利要求/家族、学位正文和ICSD等结构数据库未完整访问",
          "端元稳定性、固溶限、实际位点与所有物性趋势尚待实验或计算"
        ],
        "priorArt": [
          {
            "title": "Disentangling octahedral distortion and symmetry breaking in the ordered double perovskite SrLaCoNbO6",
            "url": "https://doi.org/10.1103/54pd-ry7l",
            "overlap": "母体两种结构温度尺度与实验室XRD约束方法已知，本设想不能据此自称发现母体现象",
            "access": "正式18页正文、实验、Table I、图1–13和Appendix；独立SI未取得"
          },
          {
            "title": "母体作者公开预印本2609.37835",
            "url": "https://arxiv.org/abs/2609.37835",
            "overlap": "同题历史公开稿线索，不能将母体温变结构当今天首次结果",
            "access": "定向检索题名/版本线索；本轮精读以正式正文为准，未重新比较全部旧稿"
          }
        ]
      },
      {
        "id": "vn-carbonitride-orbital-texture-control",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 32,
        "title": "低碳置换VN能否在保持(111)织构时改变轨道流，而非只增加电阻？",
        "material": "V(N₁₋ᵧCᵧ)候选薄膜/[Co(0.35nm)/Pt(0.3nm)]₃；名义阴离子替换，真实C/N空位及C位点必须独立测定",
        "evidenceLevel": "母体AFM正式摘要及对应arXiv:2601.01115v1正文/方法/图1–7已读；候选未合成、未计算、未测量；碳氮化钒本身为已知材料，不宣称新化合物",
        "question": "在相同VN层厚、(111)织构、磁层磁矩和垂直各向异性下，低C替换能否通过p–d杂化与电子计数改变有效轨道Hall响应，使变化无法仅由电阻率、分流和界面转换解释？",
        "prediction": "条件性假说：若C确实进入N子晶格且保持单相岩盐衍生结构，C较N少一个价电子及不同p能级可能移动费米能附近反交叉和轨道Berry曲率。母体计算显示响应随能量改变，因此有效力矩电导可能出现非单调组成变化；不能事先断言增强、变号或给最佳y。若所有力矩变化在纠正分流、磁矩、粗糙及织构后完全消失，则否定当前电子结构控制解释；若出现相分离，该结果也不支持目标机制。",
        "basis": "文献事实：早期稿VN的轨道Hall电导在费米能附近具有能量依赖，5至7.5nm增强但10nm下降，磁层替换又显著改变效率。物理类比：C/N相邻轻元素替换避免直接引入重金属SOC，但不是等价替换；共价半径、键长及电子计数都会改变，不能使用自由原子大小直接推断化学压力。本站假说：在固定转换层下优先扰动源层阴离子杂化，可能区分轨道源与转换界面作用。未知：外延超薄低掺杂碳氮化物的真实位点、阴离子空位、偏析、互溶范围及化学势；不假定严格刚性能带或Vegard定律。",
        "difference": "VC、VN、V(C,N)已广泛用于硬质涂层，已有反应溅射、学位论文和早期制备专利，因此“合成碳氮化钒”必须排除为新颖点。本候选的具体差别是低C系列的轨道力矩电导与匹配织构/界面/磁各向异性对照。当前未完成专利家族、订阅引文和所有化学式变体检索，不能确认这一组合未有人研究。",
        "feasibility": "需要有可控C源的反应/共溅射、薄膜结构分析及微加工谐波Hall合作；先做VN母体、低C候选、相同实际N缺失而不加C的对照。y=0.02、0.05只可作为名义初筛点，并非最佳比例，优先由分析检出限与相纯度决定。用户Rigaku UltimaIV可辅助取向/杂相核验，不能识别稀C位点或单独测轨道Hall电导；不假定现有实验室具备此全部条件。",
        "risks": "C引入可形成游离碳、VC富集相或界面污染，并改变溅射动力学；XPS表面碳不等于晶格替换。C/N/O含量须用合适的深度分析与离子束/谱学方法交叉，结合STEM或掠入射结构核验。不同电子计数可能改变相稳定性、散射和低温超导背景，但不预测Tc。若只见电阻增加、织构破坏或磁死层，优先判为材料质量变化，不包装成轨道增强。",
        "nextStep": "先查V(C,N)轨道/自旋Hall及CoPt界面既有工作，同时用最小薄膜批验证能否获得真实低C、无游离碳的单相111织构；材料关未过则暂停器件批量制作。",
        "plan": [
          "查新：分别搜vanadium carbonitride、V(C,N)、VN carbon substitution、orbital Hall/torque、Co/Pt与专利学位全文，保留已有材料制备路线作为对照。",
          "材料关：同基底同厚度制备VN、低C系列和氮空位对照；独立测C/N/O及空间分布，结构、XRR和磁性参数一并记录。",
          "机制关：按实测片电阻分流校正，保留角度全谐波、频率及热背景；比较力矩效率和力矩电导，避免仅用效率绝对值作排名。",
          "计算可行时：先比较缺陷形成/相竞争与显式C/N排布，再求相同展宽下的轨道/自旋Hall；所有计算尚未运行。"
        ],
        "controls": [
          "VN母体与低C系列，至少两个重复生长批次",
          "不加C但匹配氮缺失的样品，区分C替换与N空位",
          "相同CoPt厚度/磁化/各向异性、111织构、表面粗糙与氧含量",
          "VN厚度固定并另做厚度系列，比较电流分流及频率热电背景"
        ],
        "falsifiers": [
          "C仅为表面污染或独立碳相，停止阴离子替换解释",
          "单相111织构及界面条件无法匹配，不进入物性归因",
          "纠正电阻和热背景后响应无显著差异，否定当前可测增强版本",
          "找到直接等价V(C,N)/CoPt轨道力矩工作，移入已有路线并寻找明确不同假说"
        ],
        "queries": [
          "2026-11-04: \"vanadium carbonitride\" \"orbital\" Hall torque",
          "2026-11-04: \"V(C,N)\" \"orbital Hall\"",
          "2026-11-04: \"VN\" \"Nb\" \"orbital torque\"（备选同族替换排查）",
          "2026-11-04: \"vanadium carbonitride\" patent thesis sputtering"
        ],
        "remainingChecks": [
          "本次只核定向网页检索、公开仓储摘要和专利说明线索；未全文审查专利权利要求与家族",
          "正式AFM终稿与补充材料未取得，须补核轨道/自旋转换模型及分流误差",
          "未完成C位点、阴离子空位、相稳定性和界面污染实验核验，不能承诺可合成或性能改善"
        ],
        "priorArt": [
          {
            "title": "Efficient magnetization switching driven by orbital torque originating from light 3d-transition-metal nitrides",
            "url": "https://arxiv.org/abs/2601.01115",
            "overlap": "母体VN/CoPt轨道力矩机制已知；不能把轻金属氮化物轨道流本身当新方向",
            "access": "v1十二页，正文方法主图及表1实际读，独立SI未得；正式AFM仅摘要"
          },
          {
            "title": "Evolution of microstructure, mechanical and tribological properties of vanadium carbonitride coatings sputtered at different nitrogen partial pressures",
            "url": "https://sam.ensam.eu/bitstream/handle/10985/19686/LABOMAP_SCT_2019_NOUVEAU_3.pdf?isAllowed=y&sequence=1",
            "overlap": "碳氮化钒反应溅射及结构调控已有，材料存在与制备方法不能称新",
            "access": "机构仓储公开稿定向检索的摘要与首页片段；未精读全部方法与图"
          },
          {
            "title": "Formation and sintering of vanadium carbonitride",
            "url": "https://repository.up.ac.za/items/7e9d9f1b-73af-4669-8dd2-1574dcf3dbbf/full",
            "overlap": "2020学位论文已有碳氮化钒形成与烧结路线，不能把碳氮混合阴离子视为未经合成物",
            "access": "官方机构仓储元数据与摘要；未读完整学位论文"
          },
          {
            "title": "US3745209A Process for the preparation of vanadium(carbo)nitride",
            "url": "https://patents.google.com/patent/US3745209A/en",
            "overlap": "1973专利已有碳氮化钒制备；本候选只能讨论不同物性与限定器件设计",
            "access": "专利公开说明及日期线索；未完成权利要求和家族审查"
          }
        ]
      },
      {
        "id": "ti-carbonitride-site-correlation-oxidation-localisation",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 2,
        "title": "Ti₂(C₀.₅N₀.₅)Tₓ中C/N位点关联设计：氧化阈值是否取决于局域化学环境而非平均掺杂",
        "material": "已知Ti₂C₀.₅N₀.₅Tₓ组成内的条件性C/N短程关联结构设计；与随机C/N占位及Ti₂CTₓ母体对照，不宣称该化学式为新材料",
        "evidenceLevel": "本期Ti₂CTₓ主文、Methods与选定SI实际精读；候选结构未合成、未计算、未测量，C/N关联可控性未知，查新未完成",
        "question": "相同平均C/N含量、端基、层数及氧化剂剂量下，成片的N富集配位环境与随机分散N能否造成不同的氧化前沿连通性，并改变进入跃迁输运的阈值？",
        "prediction": "条件性假设：若N富集区域改变Ti局域成键且形成不易氧化的连通路径，则在平均N相同和可比总含氧量时，短程关联样品可能仍保留更长电子局域长度；若只形成绝缘氮氧化物或局域势涨落，则关联反而加剧局域化。两种结果都可检验，不能预言电导必然增加。若差异仅由端基/厚度解释，则否定独立C/N关联控制图像。",
        "basis": "文献事实：Ti₂CTₓ同一折叠片的Ti/O随层数改变，单层绝缘、多层可保持导电；低温W分析区分跃迁与临界幂律。最近邻事实：Ti₂C₀.₅N₀.₅Tₓ及多个C/N比例已有合成和专利，N替换本身不是新预测。物理类比：C和N为相邻非金属而非等价同族替换；N多一个价电子、不同电负性，改变Ti—X共价/电荷分布，不能视作单纯化学压力。本站假说：相同平均成分的位点关联改变局域反应及渗流。未知：端基耦合、实际氧化态、C/N有序稳定性和动力学可控性；没有使用虚构离子半径或DFT能量。",
        "difference": "排除“把C换N即可得到新MXene”的普通路线；具体差别为固定已知平均Ti₂C₀.₅N₀.₅组成，比较经实测或原子模型定义的C/N短程关联与随机分布，在匹配层数、端基和氧化剂暴露后研究电子局域化，而非重复已有电池容量筛选。该差别尚未确认无等价报道。",
        "feasibility": "优先进行小模型可验证计算设计：相同超胞与端基、电中性条件下建立随机和团簇C/N配置，先比较结构是否保留，再计算水/氧初始吸附反应路径；计算未实施。实验仅在先证明MAX前驱体/刻蚀后MXene能保留C/N关联时进入输运。用户UltimaIV只能查宏观主相，难分C/N位点，需XPS/NMR/EELS等合作。",
        "risks": "C/N短程关联可能在合成或刻蚀中消失；端基变化和Al残留会主导反应；N掺入可能是表面有机官能团而非晶格X位；碳氮化物的选择刻蚀窗口不同，不可直接照搬本篇LiF/HCl路线。高分辨C/N化学图可能受束损伤影响。",
        "nextStep": "先核2021碳氮化物文章与专利家族，排除已有相同位点关联/氧化输运工作，再做电中性的小模型可行性比较；无位点关联证据时暂停实验立项。",
        "plan": [
          "母体Ti₂CTₓ、已知碳氮化物平均同组成的随机/关联模型及适当端元；固定表面端基和空位，不把改变N含量与改变关联混在一起。",
          "先核C/N实际占位和短程关联，结合XPS化学态、EELS/固体NMR及主相衍射；只有N1s信号不足以证明X位取代。",
          "匹配层数和片径，使用同等氧/水暴露时间，测电导温依赖及W(T)、实际氧化程度；检验相同平均氧含量下是否仍有输运差别。"
        ],
        "controls": [
          "相同平均C/N和端基的随机配置",
          "Ti₂CTₓ母体与未经暴露样",
          "同批次厚度和片径匹配",
          "残Al/氧空位及表面含氮有机物排除"
        ],
        "falsification": [
          "若C/N关联无法合成/保持或只在不同端基样品出现，则暂停该结构设计路线。",
          "若匹配实际氧化程度、片径/层数后差别消失，则否定独立短程关联效应。",
          "若主相转成TiN/TiOₓ等竞争相，则不得继续用MXene局域化模型解释。"
        ],
        "noveltyChecks": [
          "检索日期2026-11-04；已检Ti2C nitrogen oxidation MXene、Ti2C1-xNx、Ti2AlC0.5N0.5 MXene oxidation transport及专利/学位关键词。",
          "已发现2021 Ti₂C₀.₅N₀.₅Tₓ实验论文及TW202026245A多个C/N组成，已排除“组成未报道”主张。",
          "论文、会议摘要、专利摘要与IITMadras学位官方页面完成线索查验；未覆盖全部专利家族权利要求、原子级占位文献和学位全文。",
          "下一步必须检Ti2(C,N)短程有序/cluster/random、氧化输运及终端配位关联，当前只能标待查新物理假设。"
        ],
        "priorArt": [
          {
            "title": "Tunable charge transport in Ti2CTx MXene flakes and printed thin films: a route to designing high-performance MXene devices",
            "url": "https://doi.org/10.1038/s41699-026-00748-4",
            "overlap": "氧化、层数与电子局域化的实验母体；已知控制氧化设计并非本假设首创。",
            "access": "本轮主文/Methods/部分SI实际精读"
          },
          {
            "title": "Synthesis of new two-dimensional titanium carbonitride Ti2C0.5N0.5Tx MXene and its performance as an electrode material for sodium-ion battery",
            "url": "https://escholarship.org/content/qt5197c5b4/qt5197c5b4_noSplash_8203969a97a2c0603601437c20728ee2.pdf",
            "overlap": "明确已知C/N混合MXene，禁止称Ti₂C₀.₅N₀.₅为本站新组成。",
            "access": "机构仓储官方检索摘录，未逐页精读，不计本期论文数"
          },
          {
            "title": "MXene particulate materials, method for producing these particulate materials, and secondary battery",
            "url": "https://patents.google.com/patent/TW202026245A/en",
            "overlap": "专利表2列C/N=0.9/0.1至0.1/0.9系列，普通N含量系列已有。",
            "access": "专利公开检索摘录，未核全家族权利要求"
          },
          {
            "title": "Synthesis and characterization of MAX phases and their 2D derivative MXenes",
            "url": "https://www.iitm.ac.in/ta/node/12711",
            "overlap": "MAX碳氮化物与Ti₂CTₓ保存介质的学位线索，不能称相关化学无人研究。",
            "access": "IITMadras官方学位介绍页摘录，未取得全文"
          }
        ],
        "falsifiers": [
          "若C/N关联无法合成/保持或只在不同端基样品出现，则暂停该结构设计路线。",
          "若匹配实际氧化程度、片径/层数后差别消失，则否定独立短程关联效应。",
          "若主相转成TiN/TiOₓ等竞争相，则不得继续用MXene局域化模型解释。"
        ],
        "queries": [
          "检索日期2026-11-04；已检Ti2C nitrogen oxidation MXene、Ti2C1-xNx、Ti2AlC0.5N0.5 MXene oxidation transport及专利/学位关键词。",
          "已发现2021 Ti₂C₀.₅N₀.₅Tₓ实验论文及TW202026245A多个C/N组成，已排除“组成未报道”主张。"
        ],
        "remainingChecks": [
          "论文、会议摘要、专利摘要与IITMadras学位官方页面完成线索查验；未覆盖全部专利家族权利要求、原子级占位文献和学位全文。",
          "下一步必须检Ti2(C,N)短程有序/cluster/random、氧化输运及终端配位关联，当前只能标待查新物理假设。"
        ]
      }
    ],
    "rejected": [
      {
        "title": "直接将碳氮化钛或碳氮化钒的存在称为新材料",
        "url": "https://patents.google.com/patent/US3745209A/en",
        "reason": "已有制备、论文、学位与专利，候选仅保留有具体物性判据的设计。"
      }
    ]
  },
  {
    "date": "2026-11-03",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-03",
    "scope": "基于本期真实阅读的Ca₂CoN₂正文、SrTiO₃公开v1和SFRO早期公开稿提出三项可证伪材料设计。查新包括论文、预印本、专利和学位线索，实际范围逐项列出；未检全权利要求及所有学位全文，均标needs-review。",
    "limitations": [
      "三个候选均未合成、未测量、未完成新DFT或声子计算；组成点为探索设计，不是最优组成。",
      "同位素STO、Ca/Sr/Ba端元及磁性稀释本身早有研究；这里只讨论有具体对照的组合判别，不能称全球首次。",
      "SFRO正式版与2023公开稿存在版本差异，相关假说只能以已读的早期证据为条件。"
    ],
    "ideas": [
      {
        "id": "ca-co-n-zn-versus-sr-exchange-dilution",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 1,
        "title": "Ca₂(Co₁₋ₓZnₓ)N₂与(Ca₁₋ᵧSrᵧ)₂CoN₂：区分磁格点稀释与桥接网络变形",
        "material": "同一Na₂HgO₂型母相的两条条件性候选固溶系列；具体占位、固溶度与高压相稳定性未知",
        "evidenceLevel": "11-02正式论文，11-03补读主文/Methods和SI；候选未合成、未计算、未测量，未确认新颖性",
        "question": "双k调制中较小平均有序磁矩，是能被非磁缺陷选择性钉扎的振幅柔性，还是主要由桥接几何控制的交换比值？",
        "prediction": "若低比例Zn²⁺能在保留线性配位和N占位时替代Co²⁺，其d10无自旋主要移除磁格点；若Sr²⁺进入Ca位则保持Co磁格点数量，但改变Co—N—(Ca/Sr)—N—Co桥接几何。条件性可证伪预测是：在按实测晶格和局域键几何匹配后，Zn系列可能先显著展宽/钉扎磁卫星峰并降低有序谱重，而Sr系列更主要推动传播矢量k与锁定温度；若两系列所有变化均被结构变量解释，则否定“独立稀释效应”的简单版本。不能预言k必然向0.65移动，更不能保证生成自旋液体。",
        "basis": "文献事实：Ca₂CoN₂主相I4/mmm，线性Co²⁺d7，5Kk=0.5665(1)，最大振幅约5μB而平均约2μB，约30K锁定；Co—N—Ca—N—Co长路径使J1/J2/J3竞争。最近邻事实：同结构AE₂ZnN₂(AE=Ca,Sr,Ba)已知，支持Zn二价线性氮配位与碱土位化学的讨论，但不证明Co/Zn互溶。物理类比：Co²⁺换Zn²⁺名义电荷不变、磁矩被稀释；Ca²⁺换Sr²⁺同族等价，在相同配位下通常尺寸更大，但真实键角/化学压力方向必须实测。本站假说：用两条系列和结构匹配控制把磁格点变化与桥接几何变化拆开。未知：分配系数、非平衡占位、竞争相与氮缺陷。",
        "difference": "母文已建议化学掺杂，普通“掺杂找自旋液体”不是新方向。具体差别是以非磁Co位Zn稀释和非磁桥接Ca位Sr替换作为成对变量，检验平均磁矩与卫星峰宽/波矢是否可解耦。Ca₂ZnN₂、Sr₂ZnN₂和Ca₂CoN₂本身都不是新材料；候选固溶系列及比较策略尚待查新，不能称无人做过。",
        "feasibility": "建议仅在有气敏氮化物/叠氮化物及多砧高压资质合作组探索。母体8GPa、800°C并非两候选的已验证配方。名义x/y=0、0.01、0.03只是初筛设计；须先看实际占位和主相，不能作为最优成分。用户已确认Rigaku UltimaIV可辅助密封粉末主相筛查，但不能独立区分轻元素N占位、钴/锌精细占位和磁双k。WDS/ICP、同位点结构及中子实验均需合作。",
        "risks": "Zn可能只形成稳定Ca₂ZnN₂独立相或促进Co金属析出；Sr可能引起不同配位/多型而不是温和化学压力；氮空位会同时改价态和交换。母体已有约5%未知相、少量铁磁杂质，掺杂后若杂相变化，磁矩归一化会混淆。两条系列即使同平均晶格也不保证同局域结构。",
        "nextStep": "先查Co/Zn氮化物互溶与Ca/Sr钴氮化物结构数据库/专利及失败合成记录，再各做一个低比例合作炉次；无位点/主相证据不进入完整低温磁序系列。",
        "plan": [
          "对母体和两类低替换粉末密封XRD、WDS/ICP实测Co/Zn/Ca/Sr，独立核查氮含量；相同晶格峰移动不等于目标位点确认。",
          "主相保留后再比较同批磁化、比热和温变中子卫星；提取k、峰宽、锁定温度、弹性有序谱重，明确仪器分辨率与杂相模型。",
          "选择实测桥接几何相近的Zn/Sr样品对，比较卫星展宽与k漂移；条件允许做低能非弹性谱，区分冻结无序和动态涨落。",
          "第一性原理或有效自旋模型仅作为未来最小计算：先验证混合位点结构和价态，检验不同局域构型而非只用平均晶格；目前未执行任何计算。"
        ],
        "controls": [
          "同一高压装配母体重复炉次；密封称量、胶囊背景和Co金属铁磁小分量对照。",
          "Ca₂ZnN₂/Sr₂ZnN₂已知端元仅作结构竞争相参考，不直接假定全固溶。",
          "同实测组成不同高压/热历史与多颗微晶成分分布，排查偏析；结构匹配以实际键几何为准。"
        ],
        "falsifiers": [
          "Zn/Sr不进入相应位点或只在第二相：停止候选系列解释。",
          "出现显著N缺位/价态改变：不能当名义等价替换；先重新定义候选。",
          "样品几何/杂相修正即可解释有序磁矩变化，否定独立稀释证据。",
          "低比例就破坏目标结构且无法识别可重复相区：停止向高掺杂或自旋液体外推。"
        ],
        "queries": [
          "2026-11-03: \"Ca2CoN2\" \"Sr\"",
          "2026-11-03: \"Ca2CoN2\" \"Zn\" solid solution",
          "2026-11-03: \"Ca2CoN2\" patent thesis substitution",
          "2026-11-03: \"Ca2ZnN2\" \"Sr2ZnN2\" synthesis"
        ],
        "remainingChecks": [
          "搜索返回LMU原始数据、2019会议研究线索和数据库异构结构，未发现可直接确认本两条系列的完整实验论文；这不是新颖性证明。",
          "需检索Ca2Co1-xZnxN2/(Ca,Sr)2CoN2及下标/空格变体，查ICSD/MaterialsProject具体多型，不把相同化学式的预测相当本文I4/mmm实验相。",
          "专利和学位仅完成关键词线索检索，未覆盖专利家族、全部学位全文和未公开研究。",
          "Co/Zn在N线性配位下的有效半径不能随意套用六配位Shannon数值；需实际结构和成键计算。"
        ],
        "priorArt": [
          {
            "title": "Complex magnetism in a transition metal nitride",
            "url": "https://doi.org/10.1038/s41467-026-78995-8",
            "overlap": "高压母体、双k结构与泛化学掺杂建议均已有，不能称掺杂想法首创。",
            "access": "本轮全文/Methods与部分SI已读"
          },
          {
            "title": "Data to: Complex Magnetism in a Transition Metal Nitride",
            "url": "https://data.ub.uni-muenchen.de/853/",
            "overlap": "原始粉末XRD/中子/磁化数据仓储，可用于复核母体，不是新材料预测。",
            "access": "官方机构仓储元数据核验"
          },
          {
            "title": "Discovery of earth-abundant nitride semiconductors by computational screening and high-pressure synthesis",
            "url": "https://doi.org/10.1038/ncomms11962",
            "overlap": "Ca₂ZnN₂及邻近氮化物已有合成；Zn端元不是本站新预测。",
            "access": "本轮出版社检索摘录及Methods局部，不计本期精读论文"
          }
        ]
      },
      {
        "id": "sfro-ca-ba-variance-matched-lattice",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 11,
        "title": "等平均结构而不同A位尺寸方差：Ca/Ba双替换SFRO能否分开平均应变与局域轨道无序？",
        "material": "候选(Sr₁₋ₓ₋ᵧCaₓBaᵧ)₂FeReO₆低比例A位共替换；x、y与占位/氧含量均须实测",
        "evidenceLevel": "正式AFM摘要与对应2023早期公开稿正文实际读取；候选未合成、未计算、未测量，查新未完成",
        "question": "若把平均晶格和长程应变尽量匹配，局域A位尺寸分布能否仍改变氧八面体倾角分布、Re轨道偏振及易轴转变的宽度？平均化学压力是否足以描述SFRO？",
        "prediction": "条件性猜想：在同样实际Fe/Re比例、氧化态和B位有序度下，Ca/Ba共替换样品若保持与母体近似平均晶格，但增加局域键角分布，应更可能改变磁各向异性转变的空间/温度分布及展宽，而非仅使全部样品按同一个平均晶格参数平移。若局域分布与宏观各向异性均不受影响，或所有变化都能由平均应变/反位解释，则否定局域尺寸方差具有额外控制作用的简单版本。不预言新的Tc数值或必然获得绝缘态。",
        "basis": "文献事实：早期公开稿在STO/KTO压缩/拉伸约束下发现氧八面体倾转、ReXLD和磁易轴协同反转。物理类比：Ca/Sr/Ba同属碱土族，名义二价A位替换可尽量避免直接电子计数改变；Ca相对Sr较小、Ba较大，但有效配位、键价和局域松弛会改变半径模型的有效性。本站假说：组合两种相反尺寸偏差，可能在较小平均变化下放大局域分布，从而考验“平均应变唯一控制”的解释。未知：共溶范围、A位偏聚、实际价态、局域结构，以及是否能制得满足匹配条件的样品均未证实。",
        "difference": "A₂FeReO₆的Ca/Sr/Ba端元、简单化学压力、Fe/Re偏比导致绝缘和B位有序控制都已有工作，不能算新材料发现。候选的具体差别是共替换组成配对+实测平均结构匹配+局域结构/易轴分布联合判据，不以“换Ca或换Ba”本身称创新。当前尚未排除已有三元固溶或同等尺寸方差设计，必须needs-review。",
        "feasibility": "组成初筛可先做母体、低Ca、低Ba及共替换四组少量样品，以实际成分和结构是否可匹配为第一关；例如x=0.02和0.05仅为名义探索点，y由相/结构校核选择，不宣称最优比例。薄膜易轴验证需PLD、RSM、STEM或总散射、磁化及可得的Re谱学协作。用户已确认Rigaku UltimaIV可承担初步相纯度/平均峰位核验，不能单独证明局域氧倾角或轨道偏振；不假定用户有PLD或同步辐射。",
        "risks": "Ca/Ba替换可能同时改变容忍因子、B位反位、氧缺陷和生长动力学；平均体积相同不等于局域键角或有效应变相同。粉末晶界磁性不可直接对比薄膜面内/面外易轴。若共替换引起杂相、偏聚或严重B位无序，不能将磁响应展宽归为目标机制。未执行形成能、声子或SOC计算。",
        "nextStep": "先查已知三元A位固溶与尺寸方差研究；并用母体及一个低比例共替换探索样品验证同一主相、真实Ca/Ba含量与平均结构可匹配，未通过不投入完整薄膜生长。",
        "plan": [
          "查新关：按Sr–Ca–Ba–Fe–Re–O及省略Sr的(Sr,Ca,Ba)₂FeReO₆、A-site disorder/sizevariance、各向异性关键词核三元固溶、专利家族与学位全文。",
          "材料关：独立成分定量、相纯度与Fe/Re有序/氧价态分析；匹配平均晶格只是必要条件，不能替代局域结构核验。",
          "机制关：在一致厚度/衬底/氧压条件下比较纯Sr、单替换与共替换，用RSM分开松弛，用STEM/PDF检验键角分布，再测易轴和重复升降温。",
          "计算关：若合作计算可得，先在相同平均晶胞中比较多个A位排布和相同氧缺陷/反位模型，再逐项释放结构约束；计算尚未运行，不写结果。"
        ],
        "controls": [
          "母体与Ca-only、Ba-only、Ca/Ba共替换，实际Fe/Re比例及氧含量匹配。",
          "同薄膜厚度、衬底终止、温场历史和仪器背景；磁化需裸衬底扣背景。",
          "相同平均晶格但不同局域方差的有效配对；若没有这样的配对，不声称已隔离方差变量。",
          "B位反位率及成分空间分布独立控制，避免把相分离和磁性杂相当新态。"
        ],
        "falsifiers": [
          "共替换主相无法形成或Ca/Ba偏聚：暂停该组成路线，不外推高比例端元。",
          "全部磁变化随Fe/Re偏比/氧缺陷而非局域分布变化：否定尺寸方差为主导的当前假说。",
          "在结构/成分误差内共替换与母体无可分辨差异：不能宣布发现隐蔽新效应。",
          "查到直接等价三元固溶+匹配结构/各向异性研究：转入既有路线，不继续称新设想。"
        ],
        "queries": [
          "2026-11-03：\"Sr2FeReO6\" \"Ca\" \"Ba\" substitution disorder",
          "2026-11-03：\"Sr2FeReO6\" \"chemical pressure\" variance",
          "2026-11-03：\"Sr\" \"Ca\" \"Ba\" \"FeReO6\" disorder variance",
          "2026-11-03：\"Sr2FeReO6\" \"size variance\"",
          "2026-11-03：\"Sr2FeReO6\" \"Ca\" \"Ba\" thesis solid solution",
          "2026-11-03：site.patents.google.com \"FeReO6\" \"Ca\" \"Ba\""
        ],
        "remainingChecks": [
          "尚未覆盖全部化学式变体、订阅数据库、专利家族和学位正文；定向网页检索命中少不证明无人做过。",
          "补正式AFM全文及SI，确认最终版与2023早期稿的结构/磁谱差别。",
          "同平均半径是设计启发，实际须用配位与实测结构匹配，不直接使用自由原子半径或假定严格Vegard定律。"
        ],
        "priorArt": [
          {
            "title": "Orbital Engineering through Strain-Induced Spin–Orbit–Lattice Coupling in Sr₂FeReO₆ Double Perovskites",
            "url": "https://doi.org/10.1002/adfm.79336",
            "overlap": "母体应变—八面体—轨道—易轴机制；不能把该机制本身当新方向",
            "access": "2026正式摘要；2023早期ResearchSquare正文Methods图1–5读完，正式全文未取得"
          },
          {
            "title": "Spin–Orbit-Lattice Locking in Strain-Engineered Sr₂FeReO₆ Double Perovskites",
            "url": "https://doi.org/10.21203/rs.3.rs-3373483/v1",
            "overlap": "实际精读母体证据，提出局域分布与平均应变区分",
            "access": "18页正文/Methods/图1–5；图2–5渲染查看；SI链接TLS失败"
          },
          {
            "title": "Room-Temperature Ferromagnetic Insulating State in Cation-Ordered Double-Perovskite Sr₂Fe₁₊ₓRe₁₋ₓO₆ Films",
            "url": "https://pubmed.ncbi.nlm.nih.gov/30489665/",
            "overlap": "Fe/Re偏比已能产生绝缘与磁性变化，是必须排除混杂而不是本站新预测",
            "access": "本次核官方PubMed摘要，未重读全文"
          },
          {
            "title": "B-Site Fe/Re Cation-Ordering Control and Its Influence on Magnetic Properties",
            "url": "https://doi.org/10.3390/nano12203640",
            "overlap": "B位有序控制已有，不能以回线变化单独证明A位局域效应",
            "access": "官方PubMed书目与摘要检索；未作为本期新增论文"
          },
          {
            "title": "Spin field effect logic devices",
            "url": "https://patents.google.com/patent/US8791515B2/en",
            "overlap": "已有专利举SFRO为双钙钛矿材料，设备应用不是新颖性依据",
            "access": "定向检索的专利说明线索，未完成权利要求及家族审查"
          },
          {
            "title": "Substitution Effects and Electronic Structure Studies",
            "url": "https://openscience.ub.uni-mainz.de/bitstreams/fc0f6e3d-75f3-4c40-95d6-880e357dccf9/download",
            "overlap": "Ca/Sr/Ba端元和尺寸影响已讨论，需继续检查全文是否含三元固溶",
            "access": "机构学位论文检索到相关局部文本，未读完全文"
          }
        ]
      },
      {
        "id": "sto-oxygen-mass-criticality-cavity-gradient",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 9,
        "title": "同位素质量与暗腔的两种“加重”：SrTi(¹⁶O₁₋ᵧ¹⁸Oᵧ)₃何时增强局域极化、何时失去腔调控增益？",
        "material": "候选：部分氧同位素交换SrTi(¹⁶O₁₋ᵧ¹⁸Oᵧ)₃自由膜，同一厚度/应变梯度下比较暗THz腔增量；不是新化学元素组合",
        "evidenceLevel": "关联本期实际读过的SrTiO₃腔实验；同位素诱导铁电与腔等效质量机制早有研究，组合判别方案未实验、未计算、查新未完成",
        "question": "重氧改变离子真实质量，腔在理论中改变集体软模有效质量；在相同裸膜软模失谐与局域应变条件下，两种作用能否简单相加，还是靠近与远离临界区时出现不同的增量响应？",
        "prediction": "条件性假说：若腔主要通过抑制软模量子涨落起作用，适量重氧接近极化不稳定区时，腔引起的绝对极化增量可能增强；继续交换进入已较强极化区后，裸膜虽更铁电，腔的边际增量却可能变小。若只固定腔频率而不匹配裸膜软模，失谐本身也会制造峰值，所以不能把任何非单调都当作新机制。检验对象是独立标定后同一局域应变条件的极化/对称性增量，而非仅SHG强度比；不预言最佳y、Tc或效应大小。",
        "basis": "文献事实：本期37nm级STO膜软模与THz腔超强耦合，空间SHG变化正负并存，宏观转变温度没有在5K分辨内显著移动。1999年PRL已证明氧同位素交换可诱导STO铁电，2021年PNAS已提出腔重整化有效质量抑制量子涨落。物理类比：同位素保持名义电子计数、配位和同元素静态半径，比Ba/Ca替位更适合先分离质量与化学压力；仍可能有零点结构变化与交换退火缺陷。本站假说：真实质量与集体模质量重整化存在临界性和模式权重上的非等价，需以匹配失谐的二维实验矩阵判别。未知：重氧在释放膜中的深度分布、保留程度、混合质量无序及膜机械稳定性。",
        "difference": "“重氧STO可铁电”与“腔像增加离子质量”均非新观点；也不能把普通同位素铁电性再次立项。具体差别限于真实同位素质量×实测软模失谐×同一区域应变梯度的配对实验，检查腔增量是否与裸膜铁电性分离。当前未排除学位论文和相关作者尚未索引工作中的等价组合，暂不作新颖性结论。",
        "plan": [
          "先查新与试样关：核对2021腔论文、相关学位全文及专利家族，确认等价同位素-腔矩阵是否已做；否则保留为待查新假说。",
          "工艺关：在同批外延母片做轻氧热处理空白、部分重氧交换和回交换，SIMS或等效质量谱测实际y及深度；不把气体标称比例当成样品组成。交换温程先按合作实验室成熟流程评估，不在此虚构新配方。",
          "表征关：同厚度/氧缺陷/载流子基线和形貌条件，先测裸膜软模、线宽、SHG对称性与可得的绝对极化代理；再选择可调腔使归一化失谐和耦合条件有可比较区间。",
          "判别关：同点装拆、无共振等光路对照与重复温扫；优先比较绝对响应增量和基线误差，不用低基线附近发散的百分比。理论若开展，分别改变质量、势能面与腔耦合，计算尚未执行。"
        ],
        "controls": [
          "同批¹⁶O退火空白、¹⁸O样品、部分交换与回交换；实际氧含量和氧空位需与同位素含量分开测。",
          "同膜厚、同温度和局域应变梯度；不同时满足这些条件的点不强行配对。",
          "固定腔频率组与匹配裸模失谐组分列；腔Q、模式体积和探针Fresnel校正分别核对。"
        ],
        "falsifiers": [
          "若所有变化随氧空位/漏电而非实测y演化，停止纯质量机制解释。",
          "若失谐与应变匹配后不存在超出误差的腔增量差别，则否定所提临界协同的可检出版本，不用更换归一化方式制造效应。",
          "若同位素退火破坏膜、形成额外相或无法保持深度均匀，不进入昂贵腔/SHG阶段。"
        ],
        "feasibility": "用户确认的Rigaku Ultima IV只能协助平均相和晶格核对，无法分辨氧同位素比例或证明局域铁电性；需要氧同位素交换、SIMS、MBE膜与低温THz/SHG合作。先做查新和裸膜质量门槛，再评估同位素气体成本；本轮未购买、未合成。",
        "risks": "同位素交换处理会同时改变氧缺陷、残余应变和畴钉扎；混合质量会展宽软模；腔模式失谐与基线SHG变化易造成假协同。静态结构相同也不等于零点位移和有效势完全相同。不能保证重氧更好，也不能声称产生新的化学相。",
        "nextStep": "先读2021腔理论与现有学位论文相关章节，确认是否已有同位素-腔组合；随后在合作条件下用一组轻氧退火/部分重氧小样验证组成和软模可控性，未过关不制作整套腔。",
        "queries": [
          "2026-11-03: \"SrTiO3\" \"cavity\" \"isotope\"",
          "\"SrTi18O3\" \"cavity\"",
          "\"strontium titanate\" \"oxygen isotope\" \"ferroelectric\" Itoh",
          "\"cavity\" \"isotope\" \"ferroelectric\" patent thesis",
          "site:patents.google.com \"strontium titanate\" \"cavity\" \"isotope\"",
          "\"SrTiO3\" \"cavity\" \"isotope\" thesis",
          "\"SrTi18O3\" \"dark cavity\""
        ],
        "priorArt": [
          {
            "title": "本期：Cavity-engineered ferroelectricity in SrTiO₃",
            "url": "https://arxiv.org/abs/2610.40756v1",
            "overlap": "本期母体实验证据和应变/挠曲电机制；作者已建议应变场设计，不将单纯改变皱褶称创新。",
            "access": "实际读取主文与Methods、关键图及Extended Data；独立SI未取得。"
          },
          {
            "title": "Ferroelectricity Induced by Oxygen Isotope Exchange in Strontium Titanate Perovskite（1999）",
            "url": "https://doi.org/10.1103/PhysRevLett.82.3540",
            "overlap": "重氧诱导铁电已知，排除把同位素替换本身视为新材料发现。",
            "access": "官方APS摘要页实际核对；搜索取得官方PDF首页摘要，未精读整篇。"
          },
          {
            "title": "The ferroelectric photo ground state of SrTiO₃: Cavity materials engineering（2021）",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8346861/",
            "overlap": "腔增强集体有效质量的理论及既有同位素调控背景，二者类似不是本次首创。",
            "access": "机构公开稿/PMC检索结果实际核对相关段落；尚未逐项核全部SI。"
          },
          {
            "title": "On the origin of oxygen isotope exchange induced ferroelectricity in strontium titanate（2012）",
            "url": "https://doi.org/10.1140/epjb/e2012-30069-3",
            "overlap": "同位素效应并非只由单一Barrett拟合参数解释，限制简单质量故事。",
            "access": "作者所属Manchester研究门户摘要已读，未取得全文。"
          },
          {
            "title": "Cavity Control of Phase Transitions and Nonlinearities in Quantum Materials（学位论文线索）",
            "url": "https://arts.units.it/bitstream/11368/3093359/2/Shahla_PhD_Thesis%2836%20cycle%29-after%20correction%20PDFA.pdf",
            "overlap": "涉及STO腔非线性与同位素背景；可能有等价路线必须补核。",
            "access": "检索得到相关章节摘录，未完整精读全文，不作为已排除先例。"
          },
          {
            "title": "US20250199345A1 Resonant cavity with electro-optical tuning",
            "url": "https://patents.google.com/patent/US20250199345A1/en",
            "overlap": "STO等电光材料腔调谐邻近专利，不足以说明同位素暗腔方案被保护或未被保护。",
            "access": "检索摘要与材料清单；权利要求和专利家族尚未逐项核查。"
          }
        ],
        "remainingChecks": [
          "2026-11-03仅英文网页/论文索引与公开机构摘要的限定查新；中文/日文相关论文、学位全文与未索引稿未穷尽。",
          "相关学位论文和2021腔理论SI未逐节核对，专利权利要求未完成；不得称限定检索已确认新颖。",
          "实际氧同位素分布、缺陷和膜稳定性未测；未运行DFT、动力学或估算精确最优组成。"
        ]
      }
    ],
    "rejected": [
      {
        "title": "单纯重氧替换SrTiO₃以诱导铁电",
        "url": "https://doi.org/10.1103/PhysRevLett.82.3540",
        "reason": "1999年已有直接研究；不能当作本期新材料发现。"
      },
      {
        "title": "直接将Sr₂FeReO₆换成Ca/Ba端元",
        "url": "https://doi.org/10.1002/adfm.79336",
        "reason": "碱土双钙钛矿端元与化学压力已有大量工作，不能以简单换元素声称新颖。"
      }
    ]
  },
  {
    "date": "2026-11-02",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-02",
    "scope": "基于今日6篇实读论文，新增4项具体材料/同位素/占位或深度分布设计。分别检验多带散射、纯质量效应、表层磁性稀释和交换导数。所有候选尚未合成或计算，均待进一步查新。",
    "limitations": [
      "核查日期2026-11-02；逐项列出实际检索式、最近邻原始论文/预印本、博士论文和专利线索及未完成项。网页索引、摘要和局部正文不等于全文查新完成。",
      "普通Se替换FePS₃、均匀Zn掺MnTe、Cs₂Co混卤家族均已有先例，本页明确剥离已知部分；具体新差别仍不代表首创证明。",
      "同位素是材料质量设计，固定组成占位和深度分布是材料架构设计，不统称新化学化合物。用户设备可用性及稳定性均需先过门槛，先做最小筛选。"
    ],
    "ideas": [
      {
        "id": "lu-nb-ta-scattering-cdw",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 1,
        "title": "Lu(Nb₁₋ₓTaₓ)₆Sn₆：把高迁移率Hall、框架畸变和SOC效应分开",
        "material": "低Ta比例Lu(Nb₁₋ₓTaₓ)₆Sn₆候选固溶系列；Nb位占据与可合成性待验证",
        "evidenceLevel": "今日母体正文已读；Ta系列未合成、未计算、未测量；新颖性待进一步查新",
        "question": "能否保留CDW，而先削弱由高迁移率小口袋主导的低场Hall形状？若能否把散射、框架刚度变化与5d自旋轨道作用区分，而不是将所有变化解释为“化学压力”？",
        "prediction": "条件性预测：若Ta进入Nb位、低替换比例保留母相且主要增加合金散射，残余电阻应升高，低场电子型Hall贡献可能比CDW电阻异常更快减弱。判据不是“所有信号一起变小”，而是同一实测成分序列中Hall形状/迁移率特征与独立CDW结构信号的不同演化。若经无序程度匹配后Ta样品仍有独特Hall/能带变化，单纯散射不足，才进一步检验轨道杂化/SOC；若所有差异都被实测结构变化解释，则优先支持框架效应。不预言CDW温度单调升降，也不承诺新超导态。",
        "basis": "文献事实：今日LuNb₆Sn₆在79K有CDW电阻异常，高迁移率多带Drude图景解释大部分Hall，50–100K仍有系统残差。Nb/Ta同属第5族，4d/5d替换为尽量控制名义价电子计数同时改变轨道/SOC提供起点；实际载流子数和成键并不保证不变。尺寸相近只是定性出发点，不能在金属中随意套用Nb⁵⁺/Ta⁵⁺离子半径来证明同构或压缩方向。进一步的最近邻结构工作指向Lu–Sn柱与Nb–Sn支架的耦合，意味着Nb位替换也可能通过框架刚度/局域畸变改变CDW，而非只作用于kagome电子。本站推理：比较至少两类独立观测量和匹配对照，才有机会识别主导变量。",
        "difference": "LuNb₆Sn₆家族、CDW、小费米口袋和外压抑制DW都已有工作；Lu位尺寸掺杂亦为既有预测，不能当本站新方向。本候选的具体差别是Nb位低Ta固溶加“同残余电阻/同实测结构”的比较，检验Hall形状是否在CDW结构保留时被选择性削弱。当前未完成对Ta系列的化学式同义检索、数据库、专利家族和学位全文覆盖，不能宣称该组成或实验设计无人做过。",
        "feasibility": "母体有Sn自助熔剂路线，初筛只需结构/成分分析和9T量级PPMS。建议名义Nb位x=0、0.01、0.03仅为探索设计，不是固溶上限或最优掺杂量；Ta的反应动力学和分配系数可能迫使重新优化母体温程。WDS/单晶结构分析需平台或合作条件；无有效成分核验不应直接投入完整输运序列。压力和SOC开关计算可作为后续协作对照，不要求先购买或使用付费云计算。",
        "risks": "最大风险是Ta根本不进入目标位点，或引起第二相、残Sn和局域结构改变；小比例名义投料不能等同实测x。合金散射也可能改变费米口袋或CDW，未必只降低迁移率。没有直接磁性/对称性探针，任何Hall残差都不足以证明时间反演破缺。尚无本站稳定性、形成能或声子计算。",
        "nextStep": "先做母体与一个低Ta探索炉次，核对多颗晶体的主相、实际Ta/Nb和均匀性；确认可重复进入Nb位后，再扩为组成系列并在50–100K加密结构/输运观测。",
        "plan": [
          "相与位点关卡：粉末XRD排查第二相，WDS或经标定成分分析检查多颗晶体；需要时用单晶精修核Ta占位和Sn框架位置。仅见晶格峰移动不算位点确认。",
          "同片测量关卡：保留正负场原始电压和几何，联合拟合σxx/σxy，在50–100K加密温点，记录残余电阻、CDW异常、低场Hall形状和拟合超参数敏感性。",
          "增加结构判据：可得条件下做温变衍射/超晶格散射，避免把输运转变展宽全部归给CDW温度变化。样品几何和接触误差纳入逐片记录。",
          "机制关卡：利用母体重复炉次/同组成不同退火等调节无序，按实测残余电阻比较。若存在结构或能带差异，再设计同晶格SOC开关计算或独立压力对照；这些计算目前未执行。"
        ],
        "controls": [
          "同批母体和母体重复炉次；相同测量几何、扫场次序与温度标定。",
          "同Ta组成的不同缺陷/退火状态，确认退火未引起成分或第二相改变；残余电阻相等也不保证散射机制相同。",
          "实际成分、Lu/Sn占位及局域/平均结构控制，排查Ta只是改变Sn包裹或成核质量。",
          "高温与低温分别比较；不把两带示意强行用于低温多带区，不将不同晶体的79K和85K数据拼为一条趋势。"
        ],
        "falsifiers": [
          "主相不含可重复检测的Ta、或Ta只在第二相/助熔剂中：停止Nb位固溶解释。",
          "Hall变化随接触重做/电流改变而消失：先处理几何或热效应，不解释为新物性。",
          "低替换比例即破坏母相：不外推LuTa₆Sn₆端元稳定，不以此证明所有更低含量都不可能。",
          "Hall与独立CDW结构信号严格共同演化，或高迁移率未减而Hall大变：否定“主要由散射选择性削弱”的简单版本，保留其他机制。"
        ],
        "queries": [
          "2026-11-02：\"LuNb6Sn6\" \"Ta\" doping alloy；\"LuTa6Sn6\"；\"Lu(Nb\" \"Ta\" Sn6。",
          "2026-11-02：site.patents.google.com \"LuNb6Sn6\"；\"LuNb6Sn6\" thesis tantalum。",
          "最近邻：Stability Frontiers LnNb6Sn6；Pressure suppresses density wave LuNb6Sn6；LuNb6Sn6 dHvA。"
        ],
        "remainingChecks": [
          "检索已记录，但前轮网页接口连接失败、Crossref宽泛查询返回无关结果、化学式arXiv召回不全；后轮网页检索恢复。未命中不作为新颖性证明。",
          "补齐含下标/空格的Nb–Ta混合化学式、已知AM₆X₆结构数据库与Ta–Sn竞争相、全文SI中的失败合成记录。",
          "专利及学位仅有定向查询，未完成专利家族、所有机构仓储和未公开研究覆盖。",
          "补读2025结构/压力原始全文和SI；当前部分出版社403、OSTI下载失败。核对2025更正中图5场向配色，避免误用各向异性数据。"
        ],
        "priorArt": [
          {
            "title": "Multiband-Induced Complex Magnetotransport in LuNb₆Sn₆",
            "url": "https://arxiv.org/abs/2610.41409v1",
            "overlap": "母体生长、79K CDW、多带Hall与转变区残差，是本推演的实际证据。",
            "access": "今日已读正文I–IV、Methods、表I/II、图1–5；无独立SI。"
          },
          {
            "title": "Stability Frontiers in the AM₆X₆ Kagome Metals",
            "url": "https://doi.org/10.1021/jacs.4c16347",
            "overlap": "Nb–Sn框架、稀土填充与DW已有结构背景；Lu位尺寸路线不能包装成新方向。",
            "access": "本次核出版社元数据/摘要及OSTI检索到的局部正文；完整下载失败，未计新增全文精读。"
          },
          {
            "title": "Pressure suppresses the density wave order in kagome metal LuNb₆Sn₆",
            "url": "https://doi.org/10.1103/hsdc-9j7p",
            "overlap": "外压调节框架与DW已有先例，本候选不将压力抑制当新预测。",
            "access": "作者主页书目及OSTI首页/摘要线索；全文下载失败，未独立重分析数据。"
          },
          {
            "title": "Fermiology of LuNb₆Sn₆ probed by dHvA oscillations",
            "url": "https://journals.aps.org/prb/accepted/10.1103/cfgl-ggn6",
            "overlap": "小费米口袋是已有结果，不能把新增振荡测量本身称为创新。",
            "access": "本次核APS accepted官方摘要；正式版本与作者稿差异未全文比对。"
          }
        ]
      },
      {
        "id": "2026-11-02-feps3-sulfur-isotope-mass-disorder",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 4,
        "title": "FeP(³²S₁₋z³⁴Sz)₃同位素晶体：把声子质量、局域各向异性与无序从化学替换中拆开",
        "material": "拟议稳定硫同位素晶体FeP(³²S₁₋z³⁴Sz)₃：先比较³²S富集端元、³⁴S富集端元与天然硫基线；只有端元证实可分辨质量效应后，再做中间混合同位素成分。它是同位素材料设计，不宣称新化学化合物。样品未制备、模式计算未执行。",
        "evidenceLevel": "基于今日已读FePS₃主文/SI的可检验假设；在2026-11-02列明检索式与公开来源范围中未见“同位素端元+混合系列、相同失谐下比较磁振声子耦合与展宽”的直接报道。学位全文、专利族和收费数据库未穷尽，证据不足以确认新颖性，暂不建议直接立项或采购。",
        "question": "今日论文把随温度减弱的λ与子晶格磁化下降联系，但峰位失谐、耦合强度与热展宽会同时变化。能否用元素化学组成基本不变的同位素质量旋钮，区分真正的自旋–晶格矩阵元变化、模式零点位移归一化，以及无序造成的可辨识度损失？",
        "prediction": "在保持结构、电子数和磁序相同的Born–Oppenheimer近似下，更换稳定硫同位素首先改变质量加权动力学矩阵，而不直接改变静态电子势能面的交换和单离子各向异性。若目标P₃模含可观S位移，³⁴S端元应相对³²S出现与该本征矢一致的声子频移；磁振子裸隙的一阶质量效应预期较小，但零点结构/自旋声子修正允许其非零，必须测量。较重同位素降低声子能量可能增大与磁振子的失谐，反而使所需共振场上移，不能保证低场改善。扣除各成分实测失谐及量子位移归一化后，若微观磁弹导数近似不变，归一化耦合应相容；中间随机同位素成分可能主要增加声子线宽，使反交叉更难分辨。没有给频移、Tc、稳定性或耦合的虚构数值。",
        "basis": "母论文实读证据包括70–85 K反交叉进入9 T、75 K裸模相交与混合模最小间距不同、等耦合三模拟合、85 K以上分辨能力丧失。已有FeP(S,Se)₃研究表明化学取代还会改变结构磁态，不能仅归因原子质量。故选同位素端元先建立“质量变化但化学势能面尽量相同”的基线，再用混合成分检验质量无序；必须通过实际本征矢而不是全体频率统一按硫质量平方根缩放。",
        "difference": "已做的Se替换、Fe/Mn或Fe/Co混合、温度/压力调谐与共振激光增强不作为新方向。拟议区别是同位素端元与混合系列的成套对照，在相同温度及相同裸模失谐条件下分别比较声子频率、磁振子隙、线宽与耦合归一化，检验λ减弱是否可被纯失谐或展宽伪装；该区别仍须进一步查新。",
        "feasibility": "先只做公开结构的质量替换本征模敏感性与既有母样品复测，不假设已经完成DFT。后续需有FePS₃高质量单晶生长能力、稳定同位素原料来源及IRMS/SIMS等同位素定量合作；XRD/EDS不能区分³²S和³⁴S。Rigaku Ultima IV可用于相/晶格一致性筛查但不测同位素比例。还需低温偏振Raman和≤9 T磁体；用户是否具备这些设备尚未确认。不得凭普通室温XRD替代低温耦合测量。富集硫有成本，本提案未采购或使用付费云资源。",
        "risks": "低能P₃若主要是Fe位移，硫同位素频移可能太小而不值得生长；混合同位素质量无序、化学杂质、硫空位及生长批次均可展宽谱线。改变生长原料可能同时改变缺陷而违反纯质量控制。近反交叉区域模式混合会改本征矢，不能固定一个有效质量拟合全场。λ、峰宽和背景可互相补偿，必须比较含线宽模型与拟合协方差。Raman仅近Γ证据不支持声子/磁振全布里渊区拓扑或热Hall结论。",
        "nextStep": "优先完成目标P₃的S参与度和两端元纯质量频移可辨识度评估，并向母论文作者确认原始拟合误差与同位素先例；通过后再评估同位素原料及生长方案。未通过查新、方法和设备三个门槛前，只作为needs-review研究设想。",
        "plan": [
          "阶段0：查得母样品结构、磁序与目标P₃模本征矢，保持同一力常数矩阵只替换质量，评价端元与随机同位素模型；这一步尚未运行，不能写成DFT预测结果。若需要新DFT，单独报告泛函、磁构型、力常数收敛和质量后处理，不将质量后处理冒称新结构稳定性计算。",
          "阶段1：对天然硫母样品复现70–85 K场扫，固定偏振、光子能、厚度与激光功率，保留原始Stokes/anti-Stokes、峰宽与温度计记录，比较二模与含反常项三模残差。",
          "阶段2：仅在模式敏感度与误差门槛通过后，制备³²S/³⁴S富集端元；至少有独立批次对照，确认相、晶格、Fe:P:S、厚度及同位素比例，避免含天然硫的前驱体或残留输运介质稀释标记。未制定或执行封管/炉温配方。",
          "阶段3：先用远离反交叉的场区约束裸声子、磁振子和线宽，再以场补偿失谐到相似值比较混合谱；同时比较相同绝对温度和相同T/TN两套切片，避免磁有序程度不匹配。",
          "阶段4：只有端元显示可重复质量效应且质量可控，再增加中间混合同位素成分；检验额外展宽能否解释表观λ变化，避免把峰不可分辨误认为耦合消失。"
        ],
        "controls": [
          "天然硫基线与两富集端元：端元减少质量分布宽度，中间成分专用于质量无序检验；同位素比必须实测。",
          "同温同失谐、同厚度、同偏振、同激光能量/功率；使用anti-Stokes与功率依赖排除同位素相关热导差引起的局域加热。",
          "用XRD/必要的局域结构、成分与磁化/TN检查排除化学缺陷、相变、磁各向异性显著改变；不能仅以无杂峰宣布全部一致。",
          "以实测模式本征矢和质量归一化定义磁弹矩阵元；不对多原子模式直接套用单原子M^(-1/2)或把频率变化当λ增强。",
          "所有批次使用同一预先确定背景与线型；bootstrap/重复样品报告参数相关性、不同耦合约束拟合残差与可辨识区间。"
        ],
        "falsifiers": [
          "若目标P₃的S质量敏感性小于可验证的仪器/拟合不确定度，停止同位素生长方向，不能靠提高拟合自由度制造频移。",
          "若端元相、化学组成、晶格或磁性差异超过同批基线，纯质量解释失败，先解决生长与缺陷；不能把其归为预期同位素磁性。",
          "若等失谐、等有序程度且正确量子位移归一化后λ仍呈大于误差的系统变化，否定“微观磁弹导数近似不变”的简化假设，需检验零点结构/磁交换反馈。",
          "若混合成分的反交叉不可见仅因线宽变大，而谱线模型仍允许原有λ，则不能声称磁振声子耦合消失。",
          "若完整查新发现同位素端元/混合对照的同等研究，转为复现/方法验证，不作为新材料课题发布。"
        ],
        "queries": [
          "FePS3 FePSe3 mixed sulfur selenium magnon phonon coupling substitution FePS3-xSex",
          "Fe1-xZnxPS3 magnon phonon coupling dilution Raman",
          "FePS3 FePSe3 solid solution anisotropy spin phonon coupling thesis patent",
          "FePS3 isotope sulfur 34 magnon phonon isotope engineering",
          "FePS3 isotope substitution phonon sulfur 34S thesis patent",
          "FePSe3 sulfur substitution magnon phonon anticrossing solid solution 2025 2026",
          "site:patents.google.com FePS3 isotope magnon phonon",
          "\"FePS3\" \"isotope\"",
          "\"FePS3\" \"34S\"",
          "\"FePS3\" \"isotopic\" magnon phonon",
          "\"FePS3\" isotope thesis patent magnon",
          "\"FePS3\" \"sulfur isotope\" magnon",
          "\"FePS3\" \"isotopically enriched\"",
          "\"FePS3\" \"32S\" \"34S\"",
          "\"FePS3\" isotope patent phonon sulfur"
        ],
        "remainingChecks": [
          "系统检索Scopus/Web of Science/INSPEC/ProQuest/CNKI及最新会议摘要，当前只使用公开网页与原始论文/机构仓储。",
          "检索CNIPA/WIPO/Espacenet及同位素磁性材料相关专利族/完整权利要求；Google Patents单一制备专利不足以作自由实施结论。",
          "阅读全文查阅Lopez 2026混阴离子博士论文及Mertens学位论文，查找同位素、质量无序、近Γ模与磁弹参数的等价实施。",
          "核实目标P₃振动中S位移权重、可达频移及端元晶体生长原料纯度；本文没有计算也没有合成。",
          "核对用户实际Raman/磁体/同位素质谱资源与样品预算；已有XRD不足以完成该实验链。"
        ],
        "priorArt": [
          {
            "title": "Temperature Evolution of Magnon-Polarons in the van der Waals Antiferromagnet FePS₃ (2610.40968v1)",
            "url": "https://arxiv.org/abs/2610.40968",
            "overlap": "今日实际精读母论文：温度调谐与三模拟合已做；不能把升温降低共振场当新方向。其商业晶体未提供同位素组成对照。",
            "access": "实际读取7页正文与源包内2页SI，含图3/4/5及S1；本轮沿用当日实读证据。"
          },
          {
            "title": "Understanding and tuning magnetism in layered Ising-type antiferromagnet FePSe3 for potential 2D magnet",
            "url": "https://arxiv.org/abs/2402.10155",
            "overlap": "已研究FeP(S,Se)₃与Fe/Mn取代及磁各向异性，排除“简单Se/Mn替换就是新材料”的提法。本候选保留元素化学组成，仅改变稳定同位素质量。",
            "access": "arXiv官方摘要及Wiley出版社页面相关正文段；没有本轮精读完整SI。"
          },
          {
            "title": "MODELING MAGNETIC STRUCTURE IN 2D VAN DER WAALS MATERIALS WITH NEUTRON DIFFRACTION — Mario Lopez, 2026",
            "url": "https://drum.lib.umd.edu/items/70a0d5b0-c356-4137-8cb5-8121b20a5a03",
            "overlap": "学位论文摘要已涉及FeP(S,Se)₃附加磁相/低自旋线索，说明配体替换同时改变结构磁态，不能当纯声子质量旋钮。",
            "access": "机构仓储摘要与元数据；341.96 MB论文全文未下载、章节未逐一查完。"
          },
          {
            "title": "Magneto-Raman Study of Magnon–Phonon Coupling in Two-Dimensional Ising Antiferromagnetic FePS3",
            "url": "https://pubs.acs.org/doi/10.1021/acs.jpclett.2c00023",
            "overlap": "2022年已在近共振激发下用≤9 T测磁振声子耦合；排除“普通9 T首次看到反交叉”及只换激光的创新叙述。",
            "access": "出版社搜索结果中的摘要及SI方法摘录；直接重开页面403，未宣称本轮取得正文授权。"
          },
          {
            "title": "Coherent detection of hidden spin–lattice coupling in a van der Waals antiferromagnet",
            "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10041062/",
            "overlap": "原始研究已说明FePS₃自旋晶格耦合有模选择性、与八面体三角畸变有关；不能把“改任一声子都会同样改磁性”作为基础。本候选须先识别P₃真实振动本征矢及S参与度。",
            "access": "PMC公开正文中模选择性、畸变与声子讨论；未在此新设想阶段重做其计算。"
          },
          {
            "title": "Chirality selective magnon-phonon hybridization and magnon-induced chiral phonons in a layered zigzag antiferromagnet",
            "url": "https://www.nature.com/articles/s41467-023-39123-y",
            "overlap": "FePSe₃零场手性杂化已存在；本候选不声称获得新手性相或拓扑数，且FePS₃与FePSe₃模式对称性不能直接混用。",
            "access": "出版社页面Methods/相关讨论及公开预印本摘要线索，非本轮完整精读。"
          },
          {
            "title": "Ultrafast coherent lattice dynamics coupled to spins in the van der Waals antiferromagnet FePS3 — Fabian Mertens, 2023",
            "url": "https://eldorado.tu-dortmund.de/items/d4710d5a-7c38-49ad-8ea1-9df76ceb0f40",
            "overlap": "博士论文已研究FePS₃相干晶格与磁振杂化、9 T条件；不能将相干操纵或普通温变当新颖性。本次未见摘要中同位素成分对照，但不能替代全文查新。",
            "access": "机构仓储摘要与公开结论检索片段；完整学位论文未逐章检索。"
          },
          {
            "title": "CN121292529A — 一种FePS3的制备方法及电极材料",
            "url": "https://patents.google.com/patent/CN121292529A/zh",
            "overlap": "已披露FePS₃粉体合成及电极应用；非同位素磁振声子方案，但说明“合成FePS₃”不能当新材料独创。本次不复制其粉体工艺作为高质量单晶配方。",
            "access": "Google Patents公开文本/摘要与关联条目；非CNIPA/WIPO/各法域完整权利要求和专利族检索。"
          }
        ]
      },
      {
        "id": "mnte-depth-selective-balanced-zn-dilution",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 5,
        "title": "相同Zn面剂量的表层—深埋稀释对照：把MnTe表面磁记忆与体交错磁序分开",
        "material": "候选材料架构：NiAs型α-MnTe(0001)主体中嵌入α-(Mn1−xZnx)Te局域稀释层；优先试验x=0、0.01、0.03的设计值（未验证可合成），比较表面约2–3nm与深埋层；Zn总面剂量、总膜厚及最外Te终止保持匹配。不是新化学式声明。",
        "evidenceLevel": "研究假设；未合成、未计算形成能/交换参数/能带、未测量。Zn掺杂已有直接先例，精确深度/磁子晶层剖面尚待进一步查新；暂不立项或承诺新颖性。",
        "question": "今日MnTe自然表面有MCD回线和场冷记忆、同晶抛光后消失。如果把非磁Zn仅安排在表层相邻反平行Mn层、而把同面剂量Zn埋到光学权重较低的深层，能否在大致保留主体Néel序的同时定向改变表面少数自旋群，而不被体稀释、载流子和表面态变化混淆？",
        "prediction": "有条件的差分预测：若表层可稀释Mn缺陷群主导MCD磁滞/记忆，在α相、表面终止、载流子及光学权重完成校准后，表层Zn与深埋Zn应产生超出重复误差的不同MCD回线面积/场冷偏移响应，而主体磁序指标变化相对较小。若Mn子晶层不均衡稀释制造未补偿矩，单层偏置设计应比相邻反平行层均衡设计出现更强残余矩或不同回线；方向与数值未计算，不预言特定TN、消失温度或增强百分比。若只是载流子/折射率效应，信号将随Hall/椭偏校正而坍缩，深度差异不会保留。",
        "basis": "本期同晶抛光对照支持非稳健表面来源，但没有定位缺陷。Zn2+替代名义Mn2+可减少局域磁矩，形式同价不等于电子结构与实际空穴数不变：Zn还能改Mn空位/MnTe2杂相、交换键、应变及表面重构。既有体Zn-MnTe已经改变磁散射；已有终止层理论允许无缺陷表面AHE与Néel序锁定。因此候选真正需检验的是固定总剂量而重新安排深度与磁子晶层的因果差别，不是“加Zn后AHE变了”。相邻反平行层平均Zn占据相同只能减少平均子晶格不平衡；随机面内占据不保证精确旋转/平移对称性，需超胞构型和实际磁结构核对。",
        "difference": "排除三个已有/等价方向：均匀Zn非磁掺杂优化MnTe、MgMnTe合金、简单Te封帽改变AHE。保留的窄差别是：在同一α相与匹配Zn面剂量条件下，把Zn富集层从表面搬到深部，并比较相邻反平行Mn层的均衡/偏置占据，联合测MCD与主体磁序。它是待验证的空间缺陷架构，不是已获查新确认的新材料；如查到同等深度剖面对照或子晶层稀释研究，则合并为复现实验而撤回创新标签。",
        "feasibility": "用户已提供Rigaku Ultima IV仪器信息，可先用于明显杂相筛选；Flux等生长设备与可用路线尚待确认；常规粉末XRD无法独自证明2–3nm层或Zn的子晶层占位。真正实现候选需有Zn源与快门/生长监控的MBE或同等分层沉积合作、原位表面保护、XPS/深度分辨成分与截面STEM。主体磁序需温度依赖XMLD/共振散射等合作表征，不能用AHE反过来充当独立序参量。选200nm量级主体/深埋约100nm仅为控制光学权重的起始设计，不是已验证厚度；实际须椭偏/传输矩阵确定633nm深度灵敏度。",
        "risks": "α-(Mn,Zn)Te局域溶解度、相稳定和Zn偏析/扩散未核；NiAs/闪锌矿/纤锌矿竞争相、MnTe2及表面氧化均可制造假效应。小Zn比例仍可能断交换键并降低TN；随机替代可破坏理想交错磁对称性或生成未补偿自旋，反而增强MCD。Zn同价但可改变载流子与界面电势，Hall多通道拟合不能简单等同单一空穴密度。已有MBE薄膜在本期可能本来就无MCD回线，若基线信号不存在，不能把掺Zn后的阴性说成抑制成功。",
        "nextStep": "先做查新与可行性闸门：拿到2025 Zn-MnTe论文正文/SI及既有MnTe表面态研究细节，完成α相有限厚度含Zn/空位/氧化构型的形成能和磁对称性计算（尚未运行）；同时用未掺杂、拟采用的同一制备/封帽流程确认可重复MCD基线。仅两项都通过才值得制备深度剖面材料；无MBE/深度表征条件时先保留为合作候选，不直接改Flux配方宣称实现。",
        "plan": [
          "查清体Zn-MnTe前例的相、溶解度、真实Zn占位和浓度，排除把另一多型/杂相当作本方案。Mg分支只作排除先例，不并行立项。",
          "先计算固定Te终止、相同载流子边界下的表面Mn空位/间隙/反位及Zn_Mn组合；对上下磁子晶格均衡和不均衡构型分别检查净矩、交换与自旋空间群。检查形成能随Te化学势的变化，不凭化学价态认定稳定。",
          "建立未掺杂α-MnTe基线，验证自然/处理表面是否确有可重复633nm MCD回线和场冷偏移；重复空白处理、至少多次独立热循环与空间成像。",
          "通过相稳定闸门后制备等总Zn面剂量三组：顶部2–3nm局域层、主体深处局域层、均匀低浓度层；另设最邻近两反平行Mn层平均均衡/单侧偏置的子组。所有x、厚度和位置是设计变量，不是已成功参数。",
          "用深度成分/表面化学核对真实Zn位置及氧化，固定最外Te终止与封帽/去帽流程；对深埋组拟合光学传输权重，避免把看不见等同没有磁性。",
          "同片联合MCD温场历史、直流磁输运、表面磁矩和独立主体磁序表征；先做差分与误差分析，再讨论材料架构效应，不用单条AHE曲线验证交错磁序。"
        ],
        "controls": [
          "相同总Zn面剂量而不同深度，及同深度不同子晶层均衡度；未掺Zn经历相同温度、真空与封帽过程的假处理组。",
          "保持基底终止、α相比例、应变、总膜厚、Te终止和氧化程度一致；记录Zn引起的MnTe2变化作为独立解释。",
          "测实际Hall/电导与光学常数；在多通道或跳跃输运下，不把1/eRH直接当真实载流子浓度。条件允许可用静电门控作不改磁离子的载流子对照。",
          "MCD固定激光能量/功率/斑点、场冷方向、最大扫场和升降温历史；另用非磁光学权重/退偏校准排除反射率或粗糙度造成的假回线幅度变化。",
          "主体磁序使用独立XMLD/散射及温度依赖指标；不把TN轻微变化、零净磁矩或空间平均补偿当作完整交错磁带结构的证明。"
        ],
        "falsifiers": [
          "若未掺杂采用同一薄膜/表面工艺本就没有可重复MCD基线，暂停“选择稀释抑制表面MCD”命题，不用零对零声称成功。",
          "若Zn产生可辨相分离、多型转变、明显TN/磁序坍塌或无法控制深度扩散，停止该配方的表面—体分离解释，先解决相稳定/扩散。",
          "若表层/深埋响应差异经真实Zn剂量、载流子、光学穿透和粗糙度校正后落在重复误差内，则否定可分辨的深度选择优势。",
          "若MCD变化完全由净未补偿矩、表面氧化或MnTe2/杂磁变化解释，而主体序并未保留，则不再称其为“保留交错磁性而过滤表面磁记忆”的材料。",
          "若与先例全面核对发现等价Zn深度/子晶层剖面已经完成，撤回创新候选，保留为有价值复现方案；专利未查全前不声称可自由实施。"
        ],
        "queries": [
          "MnTe Zn Mg substitution altermagnetism surface defects doping",
          "Mn1-xZnxTe magnetic phase transition epitaxial",
          "MnTe Mg substitution surface Hall effect defects",
          "MnTe surface passivation defects altermagnetism patent",
          "\"MnTe\" \"Zn\" \"doping\" altermagnetic",
          "\"MnTe\" \"magnesium\" hexagonal dilute",
          "\"MnTe\" \"Zn\" \"delta\" surface doping",
          "site:patents.google.com \"MnTe\" \"altermagnetic\"",
          "\"Zn-doped MnTe\" magnetic mobility",
          "\"MnTe\" \"delta-doping\" OR \"delta doping\" altermagnet",
          "\"MnTe\" \"thesis\" surface magnetic doping",
          "site:patents.google.com/patent \"altermagnetic\" \"manganese telluride\"",
          "\"MnTe\" \"delta\" \"Zn\" magnetic",
          "site:patents.google.com \"MnTe\" \"surface\" magnetic semiconductor"
        ],
        "remainingChecks": [
          "补读Small 2025 Zn-MnTe正文/SI，确认晶型、磁行为及是否已有表面/分层掺杂；目前仅官方摘要证据。",
          "全面检索Mn-rich (Mn,Zn)Te与旧II–VI超晶格/δ掺杂文献；本轮只找到ZnTe/MnTe历史异质结构线索，尚未完成引文链和早期学位论文追溯。",
          "2508.19969v3主要Te位替代与Mn位Fe对称性结果不能代替Zn_Mn表面超胞；需实际计算并核实合理U、SOC、构型平均与有限厚度收敛。",
          "补查CN118434264A、JP4915765B2的完整权利要求和专利族，另查Espacenet/WIPO/CNIPA；本轮仅公开检索与局部描述，不是法律查新。",
          "学位论文仅核对库中摘要/部分章节线索；未覆盖所有语言、未公开论文和未发表研究。",
          "确认目标表面磁记忆对应的具体缺陷及非磁Zn是否进入该位点；未鉴定前不设定必然单调抑制，也不预测新TN、带隙或磁矩数值。"
        ],
        "priorArt": [
          {
            "title": "Spontaneous Circular Dichroism and Memory Effect from Surface Defects in Altermagnetic MnTe, arXiv:2610.41797v1",
            "url": "https://arxiv.org/abs/2610.41797v1",
            "overlap": "本期来源：同一Flux晶体抛光后MCD磁滞消失，场冷可改变回线偏移；没有Zn深度剖面材料。其缺陷种类与第二自旋群尚未鉴定。",
            "access": "本期实际读取8页公开稿正文、生长与测量方法、图1–3；未附独立SI。"
          },
          {
            "title": "Magnetic Frameworks and Non-Magnetic Dopants: A Novel Strategy for Enhancing Thermoelectric Efficiency in Manganese Telluride, Small 21 e2411481 (2025)",
            "url": "https://doi.org/10.1002/smll.202411481",
            "overlap": "Zn非磁稀释MnTe已做，涉及自旋无序散射、迁移率和MnTe2杂相；故不能把Mn1-xZnxTe组成或降低自旋散射当作新意。",
            "access": "核对官方PubMed40364474题名/DOI/摘要；出版社主文未取得，未核Zn完整浓度/制备与深度分布。"
          },
          {
            "title": "Unlocking Doping Effects on Altermagnetism in MnTe: Emergence of Quasi-altermagnetism, arXiv:2508.19969v3",
            "url": "https://arxiv.org/abs/2508.19969v3",
            "overlap": "Te位Se/I/Sb及成对替代的对称性分类已有；附录还有Mn位Fe。配对、同价或总磁矩补偿并不自动确保理想交错磁对称性。普通成对掺杂构思须排除。",
            "access": "实际读取公开HTML III.2–III.6及Mn位Fe附录相关段；未重新运行任何计算。主要已算替代元素不含本候选Zn表层/深埋剖面对照。"
          },
          {
            "title": "Emergent anomalous Hall effect from surface states in altermagnetic MnTe thin films, Phys. Rev. B 114, 065304 (2026)",
            "url": "https://doi.org/10.1103/5d3f-y218",
            "overlap": "表面终止及Te封帽/InP界面调节AHE已有直接理论；不能把封帽改变AHE符号当作新发现。表面AHE也可与体Néel序锁定，不等于缺陷杂磁。",
            "access": "官方APS摘要及书目信息；主文未读取。"
          },
          {
            "title": "Surface-State-Driven Anomalous Hall Effect in Altermagnetic MnTe Films, arXiv:2602.09363",
            "url": "https://arxiv.org/abs/2602.09363",
            "overlap": "实际薄膜表面态AHE已有工作；不能用MCD阴性或表层工程直接否定其输运结论。",
            "access": "核对官方arXiv题名/摘要，正文未逐图读取。"
          },
          {
            "title": "Zinc-blende Mg1−xMnxTe — a new diluted magnetic semiconductor system, J. Crystal Growth 184–185, 976–979 (1998)",
            "url": "https://doi.org/10.1016/S0022-0248(98)80203-0",
            "overlap": "MgMnTe合金和MBE早已有；其锌闪锌矿相及磁行为不能直接移植到NiAs型α-MnTe。本候选不选Mg，避免借已有另一多型称新交错磁体。",
            "access": "出版社摘要核对，全文未读取。"
          },
          {
            "title": "Programmable Phase Selection between Altermagnetic and Noncentrosymmetric Polymorphs of MnTe on InP via Molecular Beam Epitaxy",
            "url": "https://doi.org/10.1021/acsami.5c14582",
            "overlap": "InP(111)终止选择α/β-MnTe已有；相稳定性与基底终止必须固定，不能仅凭名义配方当α相。",
            "access": "ORNL官方机构书目与摘要，主文未逐图读取。"
          },
          {
            "title": "Study of optical response of MnTe — Alžběta Knoblochová, Masaryk University bachelor thesis (2026)",
            "url": "https://theses.cz/id/ajhvgi/",
            "overlap": "MnTe光学分析中表面氧化层建模已有学位论文线索，光学权重变化不是本候选独占解释。",
            "access": "公开学位库题名、摘要、提交信息；未读学位论文全文。"
          },
          {
            "title": "Control of the magnetic order in compensated collinear magnetic materials for spintronics — Jan Zubáč, Charles University thesis",
            "url": "https://dspace.cuni.cz/handle/20.500.11956/207448?locale-attribute=en",
            "overlap": "MnTe场控AHE/ADMR已有学位研究，不能把单纯加测场历史或角依赖宣称新方向。",
            "access": "机构库摘要及公开评审线索；未通读论文正文/附录。"
          },
          {
            "title": "JP4915765B2 — Ferromagnetic semiconductor exchange coupling film",
            "url": "https://patents.google.com/patent/JP4915765B2/en",
            "overlap": "含MnTe的磁性半导体交换耦合层与霍尔读出已有专利线索，层状磁性界面并非无前例；与本候选Zn深度剖面并非直接等价。",
            "access": "核对公开专利描述相关段和书目信息，未做完整权利要求/专利族/法律状态审查。"
          },
          {
            "title": "CN118434264A — Application of interlaced magnetic material, magnetoresistance device and electronic device comprising the same",
            "url": "https://patents.google.com/patent/CN118434264A/en",
            "overlap": "交错磁材料自旋过滤与磁阻器件已有广泛专利披露；本方案不声称相关器件无专利。",
            "access": "公开专利摘要与描述开头；未逐项权利要求映射，不给自由实施结论。"
          }
        ]
      },
      {
        "id": "csco-fixed-composition-halide-site-correlations",
        "status": "needs-review",
        "kind": "material",
        "paperIndex": 2,
        "title": "待查新：固定混卤总量，比较桥位富集与桥位回避结构的交换曲率",
        "material": "拟设计同一实测总组成Cs2CoBr3.8Cl0.2的两种短程占据结构：Cl在主链Co–X–X–Co交换桥附近富集(A)，与Cl回避该桥位(B)。名义Cl=0.2仅是首轮试验网格点，不是已确认新化合物或最优组分。",
        "evidenceLevel": "物理出发点为本期实读Cs2CoBr4磁弹实验；混卤家族和位点选择已有直接先例。本候选结构未制得、未作DFT/声子/交换计算；创新性仍待博士论文和会议后续成果核查，暂不建议据此立项。",
        "question": "在化学总量、平均晶胞和磁化能标尽量匹配时，能否通过卤素位点对关联而非更多掺杂，独立改变主交换对链向形变的曲率与斜率之比？",
        "prediction": "条件性预测：若A/B可以在相同实测总组成、相同结构类型下获得，并且Cl确实不同程度进入J4相关桥位，则磁致伸缩对磁化的比例斜率与c22声速对同一磁化的响应不必按同一个比例缩放；无量纲场、温度匹配后，声速—伸长关系可能出现可重复分离。若只有磁相边界整体平移、两类曲线经单一能标缩放即重合，则该“曲率/斜率独立设计”假说失败。此处不预测符号、幅度或临界温度。",
        "basis": "实读原文在纯Br端元中指出，链向伸长更直接约束J4对单轴压力的一阶导数，而声速包含交换的二阶形变导数与交换易感贡献。卤素改变Co局部配位、X–X接触与键角，原则上可同时作用于交换、晶场和其导数，但不存在“换Cl只改变某一个参数”的保证。已知Co混卤位点偏好提供结构调控线索，也构成主要先例冲突。",
        "difference": "区别限定在“固定化学总量下可分辨的位点对关联结构”及“曲率/斜率解耦”的联合检验。Cs2CoCl4、Cs2CoBr4、Cs2CoCl4-xBrx的存在、位点选择、普通混卤相图与磁致伸缩都已被先例覆盖，不是本候选的创新点。当前限定检索未核实A/B结构加这一联合检验的直接等价报道，但全文查新尚不充分。",
        "feasibility": "先以结构和小超胞交换导数计算筛选可否存在可区分A/B，不先承诺退火可任意冻结卤位分布。若仅一个平衡占据态可实现，应停止该材料设计路线。用户现有常规XRD可筛杂相，但占据与短程对关联往往需单晶衍射、异常散射或总散射/PDF合作；量化磁弹需稀释温区、同轴磁化/膨胀/超声条件，现有设备未确认。",
        "risks": "最主要替代解释是随机键无序、Cl/Br分凝、微裂纹、晶体结构或对称性改变、弹性常数改变以及Co单离子各向异性/高能双重态混合，而非主交换曲率变化。混卤会让单J4近似更差；仅凭声速和长度两条曲线通常不能唯一反演所有交换导数。固定总组成不等于固定磁Hamiltonian。",
        "nextStep": "先补读Breunig论文第5章并追查DPG2020团队后续论文/数据；若等价固定组分位点结构和联合磁弹分析已做，移入排除记录。若未被覆盖，再做结构可达性与参数可辨识性小规模筛选。",
        "plan": [
          "查新闸门：阅读2015博士论文第151–164页的占据、制备及热力学数据，并检索ThomasLeich/Brüning/Breunig/Lorenz后续论文和学位成果，不能仅凭标题无命中判断新颖。",
          "结构闸门：在Pnma父结构相同总Cl计数的超胞中枚举主链桥附近与非桥附近的占据/对关联；计算前明确这只是候选模型，不是已证明可合成亚稳结构。",
          "计算闸门：对可比较配置在小正负b轴应变下计算或合作提取交换和单离子各向异性，检验一阶斜率、二阶曲率是否在误差内可独立区分；必须检验磁构型/泛函/超胞和应变步长敏感性。",
          "若结构可达性与查新均通过，才小批比较不同生长/热历史，使用实测组成及卤位占据筛样，匹配晶向、裂纹、尺寸及结构类型；不要预设溶液法或Bridgman必能获得A/B。",
          "对合格同组分A/B与纯Br基准同温测M(H)、ΔLb/Lb和c22(H)，剔除装夹/扫场加热后作无量纲能标与声速—伸长交叉图；加入独立弹性/谱学约束，避免把交换易感与曲率混为一项。"
        ],
        "controls": [
          "纯Cs2CoBr4重复样作为方法基准；同总Cl实测值但不同短程占据的重复批次，以及热历史相同而组成不同的对照。",
          "单晶占据精修与元素总量分别测；同时报告残差、Cl/Br相关参数可辨识性和分凝剖面，不用名义投料代替实测组成。",
          "室温至低温结构相同、无新超结构或结构相变的对照；必要时将结构不同样单独归类，不能声称固定结构下交换曲率解耦。",
          "同片/同温/同场向与相同扫描历史的磁化、磁致伸缩和超声；分别测弹性背景、衰减及压力/应变依赖；用谱学限制各向异性改变。"
        ],
        "falsifiers": [
          "完整先例核查发现等价固定组分占据结构设计及曲率/斜率联合检验已有直接报道：停止创新声明，转为复现或改题。",
          "在组成误差范围和结构精修置信区间内无法得到可重复区分的A/B占据态：停止以该结构自由度设计材料。",
          "新相、分凝、无序散射或裂纹即可解释差异，且独立测量不能排除：不能把差异归因于主交换曲率。",
          "归一化后A/B声速—伸长关系在实验误差内重合，或差异仅来自磁场/温度尺度平移：否定独立曲率调控的预测。",
          "多交换/各向异性模型参数不可辨识且增加独立约束仍无改善：停止报告唯一J4导数数值，保留现象描述。"
        ],
        "queries": [
          "Cs2CoCl4 Cs2CoBr4 mixed halide exchange anisotropy crystal",
          "Cs2CoCl4-xBrx crystal magnetic mixed",
          "Cs2CoBr4 pressure magnetoelastic exchange striction Cl substitution",
          "\"Cs2CoCl4-xBrx\" magnetostriction",
          "\"Cs2CoCl\" \"Br\" site selective Breunig dissertation",
          "\"Cs2CoCl4-xBrx\" \"order\" curvature ultrasound",
          "\"Cs2CoBr4\" \"halide\" thesis site occupancy",
          "\"Cs2CoBr4\" \"site-selective\"",
          "site:patents.google.com \"Cs2Co\" bromide chloride magnetic",
          "site:patents.google.com/patent/ \"Cs2CoBr4\"",
          "site:patents.google.com \"Cs2CoCl4\" magnetostriction"
        ],
        "remainingChecks": [
          "2015博士论文第5章及其未发表数据、2020会议海报/后续文章尚未完整读取。",
          "专利只做网页索引线索检索，相关权利要求、专利族与非英语异名未穷尽；不能声明没有专利先例。",
          "A/B占据态是否热力学稳定、可动力学冻结、可在相同平均组成下实现均未计算或实验确认。",
          "用户稀释制冷、磁弹/超声、异常散射/总散射与多参考谱学设备可用性未核实。",
          "位点/应变/磁耦合的可辨识性和浓度依赖需先评估；名义0.2不是优化结果。"
        ],
        "priorArt": [
          {
            "title": "Counting kinks and magnons with the lattice: magnetoelastic effects in Cs2CoBr4",
            "url": "https://arxiv.org/abs/2610.41619v1",
            "overlap": "本期实读原始实验。链向磁致伸缩及超声分开约束交换对形变的一阶与二阶敏感性；单J4模型有边界。不能把它已做的纯端元测量当新设想。",
            "access": "全文13页，正文Methods/Discussion及图7、13实际读过；本次新方向未计算。"
          },
          {
            "title": "Thermodynamics of the Spin-Chain Compounds Cs2CoCl4 and Cu(C4H4N2)(NO3)2 — Oliver Breunig, PhD thesis, Universität zu Köln (2015)",
            "url": "https://kups.ub.uni-koeln.de/6256/",
            "overlap": "直接先例：博士论文含Cs2CoCl4-xBrx混卤、结构与热力学，并指出位点选择掺杂。普通Cl/Br替换、位点偏好本身均不是新材料创新。",
            "access": "机构仓储元数据/摘要及官方PDF索引中的第5章目录、引言可核；PDF直接web打开超时，第151–164页未逐页精读，必须补查。"
          },
          {
            "title": "Magnetic properties of spin chain materials Cs2Co(Cl/Br)4 — DPG Dresden 2020, TT65.30",
            "url": "https://www.dpg-verhandlungen.de/year/2020/conference/dresden/static/tt.pdf",
            "overlap": "直接会议先例：混卤系列已用比热、磁热效应、热膨胀、磁化和磁致伸缩研究。混卤后重画磁相图或只量伸缩不能声称新方向。",
            "access": "DPG官方程序PDF的索引摘要可读；独立贡献网页不可访问，完整海报及后续论文链未核。"
          },
          {
            "title": "The spin-1/2 XXZ chain system Cs2CoCl4 in a transverse magnetic field",
            "url": "https://arxiv.org/abs/1307.2870",
            "overlap": "Cl端元已知；高晶场态及有效各向异性处理重要，不可把端元或简单各向异性改变当新材料。",
            "access": "arXiv官方摘要、作者及版本元数据核查；本次未全文复读。"
          },
          {
            "title": "Low-temperature ordered phases of the spin-1/2 XXZ chain system Cs2CoCl4",
            "url": "https://arxiv.org/abs/1412.2988",
            "overlap": "Cl端元已有低温相图、膨胀和磁致伸缩，常规边界/相变研究已覆盖。",
            "access": "arXiv官方题名作者/元数据及作者机构出版列表核查；本次未全文复读。"
          },
          {
            "title": "The stable phases of the Cs2CuCl4-xBrx mixed systems",
            "url": "https://arxiv.org/abs/1103.0139",
            "overlap": "Cu姐妹系统已显示生长条件会改变结构类型及卤位占据；是结构相变伪装成新磁物性的具体警示，不是Co体系可照搬的制备法。",
            "access": "官方arXiv摘要/元数据；未全文精读。"
          },
          {
            "title": "Magnetic phase diagram of the triangular antiferromagnetic Cs2CuCl4-xBrx mixed system",
            "url": "https://arxiv.org/abs/1910.12248",
            "overlap": "姐妹系统混卤、位点偏好与磁序相区均已有研究；不能用Cu的已知结论替代Co候选的实测证明。",
            "access": "arXiv官方摘要/元数据检索；未全文复读。"
          }
        ]
      }
    ],
    "rejected": [
      {
        "title": "LuNb6Sn6用Kerr、μSR或STM追踪时间反演破缺",
        "url": "https://arxiv.org/abs/2610.41409",
        "reason": "作者正文已明确建议，本站不作为新方向。"
      },
      {
        "title": "FeP(S,Se)₃普通配体替换",
        "url": "https://arxiv.org/abs/2402.10155",
        "reason": "已有直接合金研究；不把简单Se替换和常规磁性表征当作新材料方向。"
      },
      {
        "title": "Zn稀释MnTe",
        "url": "https://doi.org/10.1002/smll.202411481",
        "reason": "已有Zn合金与输运研究；本候选仅讨论需独立核查的深度/磁子晶层分布因果设计。"
      },
      {
        "title": "Cs₂CoCl₄₋ₓBrₓ混卤系列",
        "url": "https://kups.ub.uni-koeln.de/6256/",
        "reason": "博士论文及会议已研究混卤、占位和磁弹；只改变Cl/Br比例不能称新方向。"
      }
    ]
  },
  {
    "date": "2026-11-01",
    "schemaVersion": 1,
    "reviewedAt": "2026-11-01",
    "scope": "依据本期实读材料核对作者已列未来工作和最近邻研究，现有证据不足以确认全新课题，不强行产出候选。",
    "limitations": [
      "未合成、未计算、未测量新候选；专利家族及学位全文覆盖不足。",
      "检索式：thermal laser niobium substrate rotation；SrMnO3 La0.7Sr0.3MnO3 spin glass exchange bias patent thesis；相应出版社DOI与作者稿。",
      "Caltech Catherall2026学位论文线索已见，尚未精读全部论文；patents.google.com定向查询未形成完整检索，不能声称无专利。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "热激光蒸发的衬底旋转/加热及氮化物扩展",
        "url": "https://arxiv.org/abs/2610.38070",
        "reason": "本期作者Discussion已经明确提出；不是本站首次提出。"
      },
      {
        "title": "锰氧化物界面自旋玻璃与交换偏置",
        "url": "https://doi.org/10.1103/PhysRevB.87.054428",
        "reason": "2013年直接相关先例存在，不能把追加常规表征包装成新方向。"
      }
    ]
  },
  {
    "date": "2026-10-31",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-31",
    "scope": "依据本期实读材料核对作者已列未来工作和最近邻研究，现有证据不足以确认全新课题，不强行产出候选。",
    "limitations": [
      "未合成、未计算、未测量新候选；专利家族及学位全文覆盖不足。",
      "检索式：thermal laser niobium substrate rotation；SrMnO3 La0.7Sr0.3MnO3 spin glass exchange bias patent thesis；相应出版社DOI与作者稿。",
      "Caltech Catherall2026学位论文线索已见，尚未精读全部论文；patents.google.com定向查询未形成完整检索，不能声称无专利。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "热激光蒸发的衬底旋转/加热及氮化物扩展",
        "url": "https://arxiv.org/abs/2610.38070",
        "reason": "本期作者Discussion已经明确提出；不是本站首次提出。"
      },
      {
        "title": "锰氧化物界面自旋玻璃与交换偏置",
        "url": "https://doi.org/10.1103/PhysRevB.87.054428",
        "reason": "2013年直接相关先例存在，不能把追加常规表征包装成新方向。"
      }
    ]
  },
  {
    "date": "2026-10-30",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-30",
    "scope": "针对实际读过的DyPtBi/NiCo₂O₄做有界查新；详见逐来源审计内noveltyAudit。未完成全面专利/学位正文覆盖，不推出新颖性已确认的新课题。",
    "limitations": [
      "未合成、未计算、未测量新候选。",
      "限定检索未检出也不代表全球无人做过；本期0条通过立项门槛。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "DyPtBi应力选畴、撤载记忆及外延应变拓扑",
        "url": "https://doi.org/10.1103/l8fh-cgq7",
        "reason": "作者已做应力控畴及记忆，并提出相关展望；细化操作顺序不自动带来新颖性，学位全文查新未覆盖。"
      },
      {
        "title": "CrSBr侧接触或上下不对称接触测试",
        "url": "https://arxiv.org/abs/2610.40423",
        "reason": "本期作者Discussion已提出，不作为本站首次构想。"
      }
    ]
  },
  {
    "date": "2026-10-29",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-29",
    "scope": "本期逐篇核对作者既有展望与复现建议；没有新合成、计算或测量，系统专利/学位论文查新未完成，候选不立项。",
    "limitations": [
      "不保证以前无人做过。",
      "正文访问与版本缺口仍在，不能从常规追加表征推出新颖性。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "NiPS₃应变下低能Raman和磁激子联合测量",
        "url": "https://doi.org/10.1038/s41467-026-78381-4",
        "reason": "作者Discussion已提出，不能包装为本站独创新方向。"
      },
      {
        "title": "Mn₅Si₃侧壁接触提高自旋注入成品率",
        "url": "https://doi.org/10.1038/s41586-026-11227-7",
        "reason": "正式SI已有直接清洗/阻断对照，是复现路线，不是未见报道的新研究。"
      }
    ]
  },
  {
    "date": "2026-10-28",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-28",
    "scope": "基于本期9篇实际读过的主文检验后续建议的边界；没有合成/计算/测量新候选，未完成专利及学位论文系统查新，不输出伪创新。",
    "limitations": [
      "未完成系统查新，不能保证以前无人做过。",
      "文中复现及排假建议不自动算全新研究方向；历史设想保留。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "LaNiGa2局域堆垛与配对关联",
        "url": "https://arxiv.org/abs/2610.37366",
        "reason": "作者已明确讨论局域结构与电子/超导性质关系，缺少新颖性证据，不作为本站全新课题。"
      },
      {
        "title": "UTe2高场涡旋成像验证FFLO",
        "url": "https://arxiv.org/abs/2610.36332",
        "reason": "作者已提出直接成像需求，且本站未完成专利/学位论文查新。"
      },
      {
        "title": "CoTa3S6电流写入反铁磁畴",
        "url": "https://arxiv.org/abs/2610.37003",
        "reason": "作者结论已提出该展望；未测写入阈值与效率，不能声称已实现或前人未做。"
      }
    ]
  },
  {
    "date": "2026-10-27",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-27",
    "scope": "基于本期实际阅读的10篇正文核对作者已完成和已提出方向；未完成跨数据库、专利和学位论文系统查新，暂无达到新颖性最低证据门槛的新候选。",
    "limitations": [
      "没有合成、运行DFT或做测量；所有下一步为建议。",
      "未完成专利/学位论文核查，不保证以前无人做过。",
      "研究设想不计入论文或精读数，历史候选保持不变。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "Ta痕量氧与界面微波损耗的关联",
        "url": "https://arxiv.org/abs/2610.35768",
        "reason": "作者讨论已提出界面取向/器件损耗检验，不能包装为本站全新方向。"
      },
      {
        "title": "MnTe表面位错网络的局域能级调控",
        "url": "https://arxiv.org/abs/2610.35236",
        "reason": "作者已报告位错附近能隙变化并讨论纳米结构用途，进一步测量不是未经报道的新颖性证明。"
      },
      {
        "title": "FPI的铁电回线和小样本模型验证",
        "url": "https://doi.org/10.1038/s41467-026-78928-5",
        "reason": "作者已合成并做开关/留一验证；改一个间隔分子或补常规表征不足以证明新方向。"
      }
    ]
  },
  {
    "date": "2026-10-26",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-26",
    "scope": "根据本期实读9篇核对作者已有方案；本轮未完成专利/学位论文/近邻体系的完整查新，不发布声称无人做过的新候选。",
    "limitations": [
      "未合成、未测量、未运行本站DFT/声子/MC或精修；数值均来自文献或明确标注的原创重绘。",
      "没有候选达到查新门槛，研究设想0，不计入论文目录。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "Yb→Eu同构体、盖层迁移离子、SiC生长掺氧/激光造空位等直接延伸",
        "url": "https://arxiv.org/abs/2610.32524",
        "reason": "这些已在对应作者正文中提出；普通后续对照不当新方向，未完成专利/学位论文查新。"
      }
    ]
  },
  {
    "date": "2026-10-25",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-25",
    "scope": "以2026-10-25本期实际读过的主文、Methods及标注范围的SI为依据，核对文中已有/作者已建议工作：受主促进析出、MoTe₂位移场有限动量、Sr₂RuO₄畴壁器件、单原子脉冲核操控、FGT厚度耦合、Re基卤化物替位。尚未完整检索所有专利权利要求与学位论文，不能声称以前无人做过。",
    "limitations": [
      "没有候选达到完整查新门槛，本期不新增研究设想；不计入论文数。",
      "未合成、未测量、未运行新DFT/声子/微磁；参数来自本文而非本站计算。",
      "未检出直接报道不等于不存在；普通复核或本文作者未来工作不包装成首创。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "照搬本篇作者的参数调控或材料家族扩展",
        "url": "https://doi.org/10.1038/s41467-026-79271-5",
        "reason": "对应论文已提出或已实现；未完成最近邻专利/学位论文查新，暂不建议以首创方向立项。"
      }
    ]
  },
  {
    "date": "2026-10-24",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-25",
    "scope": "以2026-10-24本期实际读过的主文、Methods及标注范围的SI为依据，核对文中已有/作者已建议工作：受主促进析出、MoTe₂位移场有限动量、Sr₂RuO₄畴壁器件、单原子脉冲核操控、FGT厚度耦合、Re基卤化物替位。尚未完整检索所有专利权利要求与学位论文，不能声称以前无人做过。",
    "limitations": [
      "没有候选达到完整查新门槛，本期不新增研究设想；不计入论文数。",
      "未合成、未测量、未运行新DFT/声子/微磁；参数来自本文而非本站计算。",
      "未检出直接报道不等于不存在；普通复核或本文作者未来工作不包装成首创。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "照搬本篇作者的参数调控或材料家族扩展",
        "url": "https://doi.org/10.1038/s41467-026-78473-1",
        "reason": "对应论文已提出或已实现；未完成最近邻专利/学位论文查新，暂不建议以首创方向立项。"
      }
    ]
  },
  {
    "date": "2026-10-23",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-23",
    "scope": "以本期实际阅读的期刊和预印本主文、Methods及可得SI为依据；核对文中已有工作、空位有序PtTe₁.₇₅、Ni–Mn–Ga成分与热历史、磁性杂散场超导二极管及有机钙钛矿溶剂工程。此次未完成专利权利要求、完整学位论文和所有等价材料/应力路径查新，因此不新增已获新颖性确认的候选。",
    "limitations": [
      "未合成、未测量、未执行新的DFT/声子/动力学计算；不预测未经计算的稳定性、Tc或带隙。",
      "复现建议和本文作者已提出的未来工作不冒充新方向；未检出不等于不存在。",
      "没有候选达到充分查新门槛；本期研究设想0项，不计论文数。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "空位有序诱导二维拓扑物性",
        "url": "https://doi.org/10.1038/s43246-026-01365-w",
        "reason": "本篇与其引用PtTe₁.₇₅已有等价思路；密度和宿主替换不足以声称首次。"
      },
      {
        "title": "电场调控石墨烯/FGT界面磁性",
        "url": "https://doi.org/10.1038/s41467-026-78016-8",
        "reason": "本篇已经实施针尖门控；外栅复核是机制检验，不等于全新材料预测。"
      },
      {
        "title": "Ni–Mn–Ga成分梯度与退火调相变",
        "url": "https://arxiv.org/abs/2610.31206v1",
        "reason": "本期已完成的实验；e/a空档加密需要查新，不能当首次提出。"
      }
    ]
  },
  {
    "date": "2026-10-21",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-21",
    "scope": "2026-10-21：基于本期实际读过的五篇主文及四篇附录；查新式为boron arsenide Delmont patent MBE、Na3Co2SbO6 strain thesis、parametric Rietveld refinement Stinton Evans 2007、PEA PbI4 interlayer excitons strain patent。核对UCSB课题组官方研究页、德累斯顿Qucosa学位论文目录、IUCr原始论文及本期参考文献。公开网页与预印本范围；未完成专利全文/权利要求、全部学位论文和非英语同义检索。",
    "limitations": [
      "未合成、未计算、未测量任何新材料候选，不预报Tc、带隙、声子或稳定性。",
      "未达到充分查新门槛，今日不新增研究设想；复现建议不冒称创新。",
      "未查到不能证明以前无人做过；BAs作者已声明美国临时专利但未给号码，专利覆盖尤其不完整。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "BAs在GaAs上的低温气源MBE集成",
        "url": "https://arxiv.org/abs/2610.27460v1",
        "reason": "本期已完成的研究且作者声明临时专利；UCSB官方研究页已有同方向，不能当新材料预测。"
      },
      {
        "title": "应变/压力调控Na₃Co₂SbO₆接近Kitaev相",
        "url": "https://arxiv.org/abs/2002.05441",
        "reason": "2020预印本已有理论建议，2025德累斯顿DFT-based microscopic magnetic modeling of cobalt quantum spin liquid candidates学位论文亦有应变研究；本期更已实验选畴。"
      },
      {
        "title": "用共享演化模型约束一系列XRD精修",
        "url": "https://doi.org/10.1107/S0021889806043275",
        "reason": "Stinton/Evans 2007已有参数化Rietveld；本期diffPXRD是新实现与验证，不是本站首次提出。"
      },
      {
        "title": "以温度、应变或时间分辨检验(PEA)₂PbI₄层间激子",
        "url": "https://arxiv.org/abs/2604.19327v1",
        "reason": "已是公开稿结尾明确未来工作；未查全等价先前实验，暂不建议作为新颖性立项。"
      }
    ]
  },
  {
    "date": "2026-10-20",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-20",
    "scope": "基于今日两篇实际阅读的正文/SI与参考文献；检索MgB2 Lindhard continuum RIXS、WS2 high harmonic temperature dephasing、完整题名及作者学位论文线索。核对2025 MRS官方会议记录、Research Square正式预印本元数据与公开学位论文目录线索。专利及所有等价材料体系尚未系统查全。",
    "limitations": [
      "未合成、未计算、未测量任何新材料候选；普通复现建议不计为研究创新。",
      "官网/数据库检索未覆盖全部专利、学位论文或非英语资料；不能保证以前无人做过。",
      "今日无达到最低新颖性证据标准的候选；保留排除记录而不凑方向。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "MgB₂的低q、偏振分辨RIXS探测Lindhard连续谱",
        "url": "https://doi.org/10.1038/s41467-026-78503-y",
        "reason": "正是本期完成的研究；2025 MRS官方会议还已有同题线索，不能重新当新预测。"
      },
      {
        "title": "降温延长WS₂强场相干并提高HHG产额",
        "url": "https://doi.org/10.1038/s41467-026-78716-1",
        "reason": "正文图4c与SI S6已有20 K计算，讨论还引用已有硅温变实验；同作者学位论文也有相关章节线索，不属于本网站独立发现。"
      },
      {
        "title": "堆叠/应变调控WS₂谐波以规避退相干",
        "url": "https://doi.org/10.1515/nanoph-2022-0595",
        "reason": "已有人工堆叠WS₂高次谐波正式论文；未经进一步机制与等价研究查新，不能用常规调参宣称首创。"
      }
    ]
  },
  {
    "date": "2026-10-19",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-19",
    "scope": "本期已读正文/SI与参考文献、精确题名及CoNb4Se8 termination、In2Bi surface superconductivity、Fe Se sequential intercalation graphene SiC、ErFeO3 crystal field phonon coupling检索；未完成专利/学位论文及所有等价工作的系统查新。",
    "limitations": [
      "没有合成、计算或测量任何新候选。",
      "本期普通复现与质量控制建议不冒充未经研究的新材料路线。",
      "查新覆盖不足，暂无达到最低新颖性标准的立项候选。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "In₂Bi表面拓扑超导验证",
        "url": "https://arxiv.org/abs/2610.22917v1",
        "reason": "本稿结论及已引用表面态文献已明确建议，不能当本网站首创。"
      },
      {
        "title": "CoNb₄Se₈终止面分辨ARPES",
        "url": "https://arxiv.org/abs/2610.23375v1",
        "reason": "就是本期论文完成的工作；下一步重复劈裂是复现设计而非新方向。"
      },
      {
        "title": "石墨烯下顺序Fe/Se插层制FeSe",
        "url": "https://arxiv.org/abs/2610.23728v1",
        "reason": "作者已直接尝试并报告失败，不能忽略原有负结果包装新设想。"
      },
      {
        "title": "ErFeO₃晶场—声子混成及Dicke协同性",
        "url": "https://arxiv.org/abs/2511.18862",
        "reason": "查新已见2025年同材料magneto-Raman协同性预印本线索；本轮只核对其官方题名/摘要，未精读全文，不计入本期收录。不能把增加Raman写成全新方向。"
      }
    ]
  },
  {
    "date": "2026-10-18",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-18",
    "scope": "2026-10-18；限本期实际读过的Fe₃₋ₓCrₓSe₄、CsCr₃Sb₅、Tb₂Ir₂O₇主文/扩展方法及其最近邻文献、历史简报与精确题名检索。没有完成专利、学位论文与所有等价工作查新。",
    "limitations": [
      "未合成、未计算、未测量任何新候选。",
      "查新不充分，没有达到最低新颖性证据的立项候选；不声称无人做过。",
      "GaN只有摘要，不能依据未核实Methods提出新工艺。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "Fe–Cr–Se团簇的小角中子检验及退火调控",
        "url": "https://doi.org/10.1103/xtc1-jh14",
        "reason": "主文已直接建议SANS并讨论此前热处理实验；不能当本网站首次方向。"
      },
      {
        "title": "CsCr₃Sb₅压力下自旋涨落与超导配对",
        "url": "https://doi.org/10.1103/2pky-pm78",
        "reason": "正文结论与其既有高压超导引用已经讨论；本轮未完成更广泛专利/学位论文查新。"
      },
      {
        "title": "Tb₂Ir₂O₇显式Tb–Ir耦合与超越平均场",
        "url": "https://doi.org/10.1103/x6n8-hz3k",
        "reason": "作者讨论部分已明确列出；目前应作为模型缺口，不包装为未经研究的新方向。"
      }
    ]
  },
  {
    "date": "2026-10-17",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-17",
    "scope": "2026-10-17，据本期实际读过的CrN、FeV₂O₄、CeRu₂与4Hₐ-NbSe₂主文/SI、论文中最近邻文献及历史简报检索作初步查新；不是完整专利/学位论文检索。",
    "limitations": [
      "未完成专利与学位论文查新；没有足够证据支持可立项的限定检索未见直接报道候选。",
      "未合成、未计算、未测量任何新候选；研究设想不计论文或精读数。",
      "未读到正文的两篇Accepted不作为新材料预测依据。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "CrN表面形貌的电磁全波建模",
        "url": "https://arxiv.org/abs/2610.21856v1",
        "reason": "主文已明确讨论并计划后续详细建模；不能当本站首次方向。"
      },
      {
        "title": "FeV₂O₄中间相Raman/红外检验动态Jahn–Teller",
        "url": "https://doi.org/10.1103/j864-1gpm",
        "reason": "作者结论已经提出；本轮未完成专利/学位论文与等价光谱研究查新。"
      },
      {
        "title": "CeRu₂双带混合态热输运及元素Nb近邻比较",
        "url": "https://arxiv.org/abs/2610.22361v1",
        "reason": "主文已有双带热Hall与Note added中Nb相关预印本；普通稳健性检查不是新方向。"
      },
      {
        "title": "4Hₐ-NbSe₂无序、旋转对称及有限动量配对",
        "url": "https://doi.org/10.1038/s41467-026-78384-1",
        "reason": "本篇主图3–5、SI Note12及最近邻4Hᵦ-TaS₂（2025）已有直接或等价线索；普通换电极/扫角控制不能当未经研究的新方向。"
      }
    ]
  },
  {
    "date": "2026-10-16",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-16",
    "scope": "根据本期已读正文/SI审视候选；仅完成原论文、文中近邻工作及部分公开网页检索，不构成完整查新报告。",
    "limitations": [
      "本轮未完成专利、学位论文与全部预印本逐项查新；没有候选达到可声称限定检索未见直接报道的最低标准。",
      "未合成、未计算、未测量任何新候选；不编造稳定性、声子、Tc或带隙。",
      "研究设想为0不等于论文为0，也不以常规未来工作充当新方向。"
    ],
    "ideas": [],
    "rejected": [
      {
        "title": "FGT/WSe₂纳米Hall与斯格明子成像",
        "url": "https://doi.org/10.1002/adfm.79018",
        "reason": "主文已明确建议纳米器件和直接磁成像，不能再称本站未有人做过的方向。"
      },
      {
        "title": "MnSb₂Te₄反位诱导DMI/Rashba或非线性光学",
        "url": "https://doi.org/10.1002/adfm.78922",
        "reason": "作者已讨论这些后续物理可能性；尚无排除等价研究的查新证据。"
      },
      {
        "title": "天然kagome材料的高温分数反常量子Hall",
        "url": "https://doi.org/10.1038/s41567-026-03492-0",
        "reason": "属于作者既有目标；SI的14–29 meV为理论量，不是本站新预测或已测Tc。"
      },
      {
        "title": "EuSe降低杂质损耗并测AFM/FiM动力学",
        "url": "https://arxiv.org/abs/2610.21733",
        "reason": "作者结论已提出；不是本站新方向，未完成专利/学位论文查新。"
      },
      {
        "title": "Rb三角磁体用ESR区分g、D与Δ",
        "url": "https://arxiv.org/abs/2610.21154",
        "reason": "作者明确建议ESR及确定相互作用；不能把常规后续验证包装为无人做过。"
      },
      {
        "title": "RuO₂超薄膜的无序—应变竞争",
        "url": "https://arxiv.org/abs/2610.21163",
        "reason": "本稿§VI B及先前文献已讨论，本站未完成等价研究排除。"
      }
    ]
  },
  {
    "date": "2026-10-15",
    "schemaVersion": 1,
    "reviewedAt": "2026-10-15",
    "scope": "本轮为公开网页与出版社/作者预印本定向初筛，检索材料名、分子全称/缩写、混合插层、同位素和生长传质组合；已核对下列最近邻工作。不是系统综述、正式科技查新或专利可实施性判断。未将搜索结果条数当成全球文献数。",
    "limitations": [
      "没有任何候选被确认“以前无人做过”。未检出仅限本页公开列出的检索范围、日期和问题组合。未发表工作、未被索引文献及专利全文仍可能构成先例。",
      "Nature Synthesis近邻工作本轮实际核对出版社公开摘要/图题；ACS Nano同位素工作实际核对公开索引摘要/SI说明，正文访问失败。未读到的实验细节不当作已排除。",
      "候选材料未合成、未做DFT/声子或自由能计算；不提供臆造的稳定结构、晶格常数、Tc、带隙或成功率。设想与本期4篇已发表/预印论文严格分开计数。"
    ],
    "ideas": [
      {
        "id": "tas2-mixed-guests-charge-matched",
        "kind": "material",
        "status": "needs-review",
        "paperIndex": 3,
        "title": "候选：固定总客体含量的TMA/TEA混合插层TaS₂",
        "material": "(TMA)ₚ(TEA)ᑫTaS₂，p+q=x；x与混合比例均须实测",
        "evidenceLevel": "化学/结构假设；未合成、未计算；新颖性待核查",
        "question": "能否在同一层间隙形成真正均匀的混合客体单相，并在尽量匹配载流子密度的条件下，将客体无序与层间解耦对超导相位的影响分开？",
        "prediction": "若混合客体单相确实存在，且总客体含量与实际载流子密度可以匹配，改变客体比例可能改变层间距分布和散射，而不必同步改变名义注入电荷。是否改变零场非互易与相位敏感响应是待实验检验的预测，不预言Tc升高，也不预言必然出现s+is′。",
        "basis": "本期TaS₂/NbSe₂结显示插层态、底电极和几何共同影响非互易。TMA⁺/TEA⁺都是一价客体，因此p+q固定只给形式电荷控制的起点，不保证实际转移电荷固定；须用成分、谱学与多带输运共同约束。混合离子也可能按尺寸分相或优先插入，不能由投料混合比例推成晶内比例。",
        "difference": "已知TMA、TEA等端元及相邻区域不同客体的横向异质结构不新。本候选刻意限定为同一相/同一层间隙内的混合分布、实测总含量控制与相位测量；仍未查清是否已有完全等价的混合客体研究。仅凭化学式多写一种离子不构成创新，因此当前状态为待查新，暂不建议直接立项。",
        "priorArt": [
          {
            "title": "Galvanic intercalation of molecular cations into van der Waals materials and heterostructures · Nature Synthesis",
            "url": "https://www.nature.com/articles/s44160-025-00935-z",
            "overlap": "已报道多种分子、50种超晶格、选择性垂直插层，以及同片相邻区域插入不同分子。单客体/空间分区不能作为本候选的新意。",
            "access": "本轮核对出版社公开摘要与图3–5题目，受限主文/SI未完整读取；必须继续核对是否含混合客体。"
          },
          {
            "title": "本期分子插层Josephson结 · arXiv:2610.16483v1",
            "url": "https://arxiv.org/abs/2610.16483v1",
            "overlap": "已完成选择插层、倒置电极和下方NbSe₂追加插层，零场二极管本身不是新方向。",
            "access": "本期正文、Methods、主图1–4及附SI已读。"
          },
          {
            "title": "Unconventional superconductivity in chiral molecule–TaS₂ hybrid superlattices · Nature 2024",
            "url": "https://www.nature.com/articles/s41586-024-07625-4",
            "overlap": "手性插层、Little–Parks相移与场自由二极管已有先例，不能将其重复包装为首次。",
            "access": "本轮核对出版社摘要与公开图题/对照说明，非全主文精读。"
          }
        ],
        "plan": [
          "查新前置：按TMA/TEA全称、其他同义客体、mixed guest、co-intercalation、solid solution、staging检索近邻论文和引用链；如发现同样混合相和同样问题，删除或改为复现课题。",
          "先做可合成性筛选：建立纯TMA、纯TEA和混合客体候选的结构模型，比较混合/相分离构型的形成能、色散处理与不同占据的影响；必要时检查动力学稳定性。当前没有执行这些计算。",
          "只有通过配方与安全评估后才做小规模试验。用溶解后定量NMR/元素分析或适用质谱确定实际客体比例与总含量，再用衍射和空间成分证据排除两端元相分离；普通EDS不能定量分辨两种有机阳离子。",
          "结构与组成合格后，选厚度/面积/接触/氧化层相近的器件，比较常态输运、临界场、开关分布与独立电流–相位关系。不能只凭Hall单带浓度或电阻Tc宣称控制了多带态。"
        ],
        "controls": [
          "两种已知端元、等处理未插层参照、刻意制成的两端元物理混合/分区参照。",
          "相同总客体含量但不同混合比例；实际电荷转移/载流子不能匹配时，将其作为额外变量而非硬称等掺杂。",
          "相同底接触几何、界面氧化/厚度、磁场历史和跨器件统计；将化学与器件批次分开。"
        ],
        "falsifiers": [
          "衍射/局部成分证据只支持相分离或单客体优先插入：放弃“混合固溶相”称谓。",
          "观测变化完全随载流子、厚度、接触或氧化层变化而消失：不能归因于客体无序。",
          "近邻全文或专利/学位论文已覆盖相同混合相和等价研究问题：撤回新颖性候选。"
        ],
        "feasibility": "可从已有TaS₂母晶和有机插层路线评估，需定量有机组成、衍射/局域表征与低温设备；真正相位测量和稀释制冷门槛高。未核实用户是否具备这些条件，不估算虚构成本。",
        "risks": "混合客体可能不相容、产生分级结构/相分离或分解；名义等价不等于相同载流子密度。电化学与有机溶剂条件需实验室审核。本条不是已验证制备配方。",
        "nextStep": "首先获取并核对Nature Synthesis近邻工作的完整主文、SI及材料清单，再做混合占据/分相计算；在此之前不投入新材料长晶或器件批量制备。",
        "queries": [
          "TaS2 mixed tetramethylammonium tetraethylammonium intercalation superconductivity",
          "\"TaS2\" \"TMA\" \"TEA\" mixed / Josephson",
          "\"tantalum disulfide\" \"mixed\" \"tetraethylammonium\"",
          "\"TaS2\" \"cointercalation\" ammonium superconductivity",
          "\"TaS2\" \"mixed-cation\" superconductivity",
          "site:patents.google.com \"TaS2\" \"tetramethylammonium\" \"tetraethylammonium\""
        ],
        "remainingChecks": [
          "近邻50种材料清单、主文/SI中的同槽共插层、分级和交换反应。",
          "更早季铵盐插层文献、学位论文、前后向引用与未公开/未索引工作。",
          "专利定向搜索仅为初筛，未逐项核查权利要求；不构成可实施性或首创结论。"
        ]
      },
      {
        "id": "ptse2-isotope-cap-transport",
        "kind": "measurement",
        "status": "not-found-in-scope",
        "paperIndex": 1,
        "title": "候选：用硒同位素脉冲追踪GO盖层下的生长通道",
        "material": "rGO/PtSe₂/rGO；稳定Se同位素示踪，非放射性实验",
        "evidenceLevel": "机制实验提案；未测量、未拟合；仅限定检索未见直接对应",
        "question": "PtSe₂约束生长中，Se主要从GO缺陷穿过顶面，还是从盖层边缘进入后横向扩散？GO还原何时将该通道关闭？",
        "prediction": "以两种可分辨的稳定Se同位素前后供料，并固定总Se剂量和盖层条件。若边缘扩散控制且交换可忽略，后供同位素的空间分数可能与到边缘/预设开口的距离及脉冲时间关联，扩散主导区可能呈长度随时间平方根增长；若顶面分布式渗透占优，空间图将更受局部缺陷分布控制。这是竞争假设，不是已经计算出的扩散系数或必然标度。",
        "basis": "本期PtSe₂正文允许“穿GO”和“边缘进入”两条路径，且提示厚GO可能造成不完全硒化，尚未直接分离传质与还原。单看最终STEM形貌无法回答反应前沿来自哪里。同位素提供在相同元素化学条件下追踪前后供料的思路，但必须排除后生长交换和同位素源切换滞后。",
        "difference": "同位素示踪二维材料生长并非新方法：MoS₂已有Mo同位素追踪上下层生长，PtSe₂也有天然同位素/ToF-SIMS分析。此候选限定为GO还原过程中的Se入口与关闭时间、边缘几何/脉冲时序的联合可区分测试。本轮列出的查询未发现这个完整问题组合的直接报道；这不证明世界上没有做过，也不意味着直接使用同位素就足够创新。",
        "priorArt": [
          {
            "title": "本期Graphene-Confined Growth of Few-Layer PtSe₂ · arXiv:2610.15022v1",
            "url": "https://arxiv.org/abs/2610.15022v1",
            "overlap": "已做GO约束、400/550 °C比较、STEM和XPS；两条Se传质路径已由作者提出，不能声称首次提出边缘扩散。",
            "access": "公开正文和图1–9已读；独立SI未取得。"
          },
          {
            "title": "Substrate-Directed Underlayer Growth of Bilayer MoS₂ Revealed by Mo Isotope Labeling · ACS Nano",
            "url": "https://doi.org/10.1021/acsnano.5c20844",
            "overlap": "已用Mo同位素、ToF-SIMS等区分层的形成次序；示踪方法本身不是原创。",
            "access": "本轮核对公开索引摘要及SI说明；出版社正文请求失败，未完成全文精读。"
          },
          {
            "title": "Investigation of Two-Dimensional… · Universität der Bundeswehr机构论文，第9章PtSe₂ ToF-SIMS",
            "url": "https://athene-forschung.unibw.de/doc/145422/145422.pdf",
            "overlap": "已有PtSe₂天然同位素谱和深度分布分析；仅测自然同位素峰不是新的示踪机制实验。",
            "access": "本轮核对机构公开索引的第9章/图69节选，未通读全篇学位论文。"
          }
        ],
        "plan": [
          "先补读PtSe₂独立SI与MoS₂示踪主文；对PtSe₂ isotope pulse-chase、isotopic exchange、graphene confinement等同义词继续查新。",
          "先用空载/参照样品标定两种稳定Se源切换的实际时间响应、纯度、背景与质量守恒；源切换时不得改变总化学势而把流量变化误当机制。",
          "在经过安全评估的装置中设计盖层开口/边缘距离与脉冲时序矩阵，明确这些是新设计而非论文已报告参数。保留无盖层、不同GO还原状态和已长成膜的后交换参照。",
          "使用具有足够横向分辨率的SIMS映射同位素分数，并与盖层缺陷/还原程度及Pt/Se成分图对齐；按仪器点扩散和溅射混合评估可解析尺度，不声称普通EDS能分辨同位素。",
          "同时比较边缘扩散、分布式渗透和反应限制模型；用独立时序/几何检验预测，而非只对单条剖面拟合一个D。"
        ],
        "controls": [
          "同位素供料先后次序互换，固定总Se剂量；无盖层与等厚不同还原程度盖层。",
          "已形成PtSe₂再做同位素暴露，检验后生长Se交换；无反应参照标定源滞后。",
          "预设微米级开口与到边缘距离对照，测束流/溅射造成的混合，记录衬底与温场。"
        ],
        "falsifiers": [
          "后交换或仪器混合抹去全部时间/空间记忆：该示踪方案不能判别入口，应暂停。",
          "仅边缘模型无法跨几何/时间预测，或顶面缺陷模型同样解释：不把平方根标度当唯一机制证明。",
          "检出既有PtSe₂/GO脉冲Se示踪已回答同一问题：降级为复现或撤出。"
        ],
        "feasibility": "需要两种稳定Se示踪源、可标定的切换装置及具足够空间分辨率的SIMS；普通Rigaku Ultima IV、Raman或EDS不能完成同位素定位。宜先合作做源/分辨率小样验证，不建议直接采购整套设备。",
        "risks": "极薄膜深度剖面容易受溅射混合影响；同位素成本、Se热处理通风和废物管理需评估。缺陷密度、化学势、反应与还原同步变化可能使问题不可辨识。",
        "nextStep": "先确认合作SIMS能分辨两种所选稳定Se同位素及所需横向尺度；用已生长膜做交换参照，若时间记忆保不住就不继续正式矩阵。",
        "queries": [
          "\"PtSe2\" \"isotope\" \"graphene\" growth",
          "\"PtSe2\" \"isotope\" selenization",
          "\"PtSe2\" \"isotopic\" growth",
          "\"PtSe2\" \"isotope labeling\" growth selenium",
          "\"PtSe2\" \"isotope\" diffusion selenization graphene oxide",
          "isotope labeling MoS2 growth mechanism selenium"
        ],
        "remainingChecks": [
          "PtSe₂/GO原文独立SI、相关学位论文完整章节和引用链尚需核对。",
          "未完成WoS/Scopus等订阅数据库的系统检索；arXiv更新、学位论文与专利族可能有遗漏。",
          "没有实验或数值结果，不能填入扩散常数、反应势垒、通道占比或“首次证明”。"
        ]
      }
    ],
    "rejected": [
      {
        "title": "仅把TMA换成TEA，或同片分区插入两种分子",
        "url": "https://www.nature.com/articles/s44160-025-00935-z",
        "reason": "单客体系列及横向/垂直选择插层已经报道，不能只换名字或空间排布就称为新材料。"
      },
      {
        "title": "用手性分子–TaS₂做Little–Parks和零场二极管",
        "url": "https://www.nature.com/articles/s41586-024-07625-4",
        "reason": "这些物性组合已有公开实验先例，本页不重复推荐为首次。"
      },
      {
        "title": "首次用同位素观察二维材料的受限生长",
        "url": "https://doi.org/10.1021/acsnano.5c20844",
        "reason": "MoS₂同位素受限生长已有研究；必须明确新的材料机制问题与可区分实验，而非给已有方法换材料名。"
      }
    ]
  }
] as const;
