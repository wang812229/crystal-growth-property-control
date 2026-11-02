// 从已审阅报告生成，研究设想不计入论文目录。
export default [
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
