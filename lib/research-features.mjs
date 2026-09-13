const clean = value => String(value ?? '').replace(/\s+/g, ' ').trim();
const joined = paper => [paper.method, paper.conclusion, ...(paper.sections ?? []).map(section => `${section.title} ${section.text}`)].filter(Boolean).join(' ');
const firstMatch = (text, patterns) => {
  for (const pattern of patterns) {
    const hit = text.match(pattern);
    if (hit) return clean(hit[0]);
  }
  return '';
};

export function extractGrowthRecipe(paper) {
  const text = joined(paper);
  const method = /\bCVT\b|化学气相(?:输运|传输)/i.test(text) ? 'CVT' : /self[- ]?flux|自助熔剂|助熔剂|\bflux\b/i.test(text) ? 'Flux' : /MBE|分子束外延/i.test(text) ? 'MBE' : /PLD|脉冲激光沉积/i.test(text) ? 'PLD' : clean(paper.method);
  const transportAgent = firstMatch(text, [/(?:I₂|I2|碘)(?:\s*(?:输运剂|transport agent))?(?:[^。；;]{0,36}(?:mg\s*\/\s*(?:mL|cm³)|mg\/mL))?/i, /(?:TeCl₄|TeCl4|AlCl₃|AlCl3|Cl₂|Br₂)(?:[^。；;]{0,36})?/i]);
  const flux = firstMatch(text, [/(?:自助熔剂|self[- ]?flux|助熔剂|flux)(?:[^。；;]{0,55})/i]);
  const ratio = firstMatch(text, [/(?:原料|配比|molar ratio|摩尔比|nominal ratio)(?:[^。；;]{0,70})/i, /\b\d+(?:\.\d+)?\s*:\s*\d+(?:\.\d+)?(?:\s*:\s*\d+(?:\.\d+)?)?/]);
  const purity = firstMatch(text, [/(?:纯度|purity)(?:[^。；;]{0,70})/i, /\b\d{2,3}(?:\.\d+)?\s*%/]);
  const vessel = firstMatch(text, [/(?:坩埚|crucible|石英管|quartz ampoule|安瓿)(?:[^。；;]{0,70})/i]);
  const atmosphere = firstMatch(text, [/(?:真空|vacuum|氩气|argon|Ar气氛|惰性气氛|密封)(?:[^。；;]{0,70})/i]);
  const sourceTemperature = firstMatch(text, [/(?:源区|source zone|hot zone)(?:[^。；;]{0,55})?(?:°C|℃|\bK\b)/i]);
  const growthTemperature = firstMatch(text, [/(?:生长区|冷端|growth zone|cold zone|衬底温度)(?:[^。；;]{0,55})?(?:°C|℃|\bK\b)/i]);
  const peakTemperature = firstMatch(text, [/(?:峰值|最高|加热至|heated to|升至)(?:[^。；;]{0,35})?(?:°C|℃|\bK\b)/i]);
  const holdTime = firstMatch(text, [/(?:保温|held|保持|持续)(?:[^。；;]{0,35})?(?:h|小时|天|d\b|min|分钟)/i]);
  const coolingRate = firstMatch(text, [/(?:降温速率|cooling rate|以)(?:[^。；;]{0,35})?\d+(?:\.\d+)?\s*(?:°C|℃|K)\s*(?:\/|·?h[−-]?¹|每小时)/i, /\d+(?:\.\d+)?\s*(?:°C|℃|K)\s*\/\s*h/i]);
  const postTreatment = firstMatch(text, [/(?:离心|centrifug|淬火|quench|退火|anneal|后处理)(?:[^。；;]{0,90})/i]);
  const crystalSize = firstMatch(text, [/(?:晶体尺寸|尺寸|size|片径|厚度)(?:[^。；;]{0,55})?(?:mm|μm|µm|nm|cm)/i, /\d+(?:\.\d+)?\s*(?:×\s*\d+(?:\.\d+)?\s*){0,2}(?:mm|μm|µm|nm|cm)/i]);
  const yieldText = firstMatch(text, [/(?:产率|yield)(?:[^。；;]{0,55})/i]);
  const qualityMetrics = [...text.matchAll(/(?:RRR|迁移率|mobility|摇摆曲线|rocking curve|FWHM)(?:[^。；;]{0,55})/gi)].map(hit => clean(hit[0])).slice(0, 4);
  const fields = {material: clean(paper.material), actualComposition: firstMatch(text, [/(?:实际成分|actual composition|EDS|WDS)(?:[^。；;]{0,65})/i]), method, transportAgent, flux, ratio, purity, vessel, atmosphere, sourceTemperature, growthTemperature, peakTemperature, holdTime, coolingRate, postTreatment, crystalSize, yield: yieldText, qualityMetrics};
  const scored = ['method','transportAgent','flux','ratio','purity','vessel','atmosphere','sourceTemperature','growthTemperature','peakTemperature','holdTime','coolingRate','postTreatment','crystalSize','yield'];
  const reported = scored.filter(key => Array.isArray(fields[key]) ? fields[key].length : Boolean(fields[key])).length;
  return {...fields, completeness: {reported, total: scored.length, ratio: reported / scored.length}};
}

export function buildEvidenceSegments(paper) {
  const classify = (title, text) => {
    const all = `${title} ${text}`;
    if (/拟合|fit|模型|DFT|计算/i.test(all)) return '模型拟合';
    if (/作者推断|作者认为|suggest|imply|indicat|归因/i.test(all)) return '作者推断';
    if (/本简报|本站判断|判断：|证据边界|局限/i.test(all)) return '本站判断';
    return '直接观察';
  };
  return (paper.sections ?? []).map((section, index) => ({id:`evidence-${index + 1}`, title:clean(section.title), text:clean(section.text), type:classify(section.title, section.text)}));
}

export function evidenceProfile(paper) {
  const text = joined(paper);
  const recipe = paper.growthRecipe ?? extractGrowthRecipe(paper);
  const methods = ['XRD','Laue','EDS','WDS','ICP','TEM','STM','ARPES','NMR','Raman','比热','磁化','输运'].filter(method => new RegExp(method,'i').test(text));
  const full = /全文精读/.test(paper.access ?? '');
  const certainty = !full ? '推测' : /局限|不能唯一|尚未|仍需|替代解释/.test(text) ? '中等' : '强';
  return {
    fullText: full ? (/补充材料|\bSI\b|Supplement/i.test(text) ? '正文 + Methods + SI' : '正文 + Methods') : '摘要 / 元数据',
    sampleCredibility: methods.length >= 4 ? `${methods.slice(0,4).join('、')} 多方法互证` : methods.length ? `${methods.join('、')}；证据仍可补强` : '质量表征信息不足',
    reproducibility: `${recipe.completeness.reported}/${recipe.completeness.total} 项参数可提取`,
    physicalEvidence: methods.length >= 3 ? '多探针互证' : methods.length === 2 ? '双探针支持' : '单一或未报告',
    certainty,
  };
}

export function parseNaturalLanguageQuery(input, today = new Date()) {
  const text = clean(input);
  const filters = [];
  const add = (field, value, label) => { if (value && !filters.some(item => item.field === field && item.value === value)) filters.push({field,value,label}); };
  if (/最近|过去|近\s*30\s*天|一个月/.test(text)) {
    const days = Number(text.match(/(?:最近|过去|近)\s*(\d+)\s*天/)?.[1] ?? 30);
    const from = new Date(today); from.setDate(from.getDate() - days);
    add('published_from', from.toISOString().slice(0,10), `发表日期 ≥ ${from.toISOString().slice(0,10)}`);
  }
  if (/\bCVT\b|化学气相(?:输运|传输)/i.test(text)) add('method','CVT','方法：CVT');
  if (/自助熔剂|self[- ]?flux/i.test(text)) add('method','Flux','方法：自助熔剂');
  else if (/助熔剂|\bflux\b/i.test(text)) add('method','Flux','方法：Flux');
  if (/二维|2D|layered/i.test(text)) add('topic','二维材料','主题：二维材料');
  if (/重费米|heavy[- ]?fermion/i.test(text)) add('topic','重费米子','主题：重费米子');
  if (/磁性|magnet/i.test(text)) add('measurement','磁性','测量：磁性');
  if (/低温输运|transport/i.test(text)) add('measurement','低温输运','测量：低温输运');
  if (/全文|full text/i.test(text)) add('access','full','优先：全文精读');
  const cooling = text.match(/(?:降温(?:速度|速率)?|cooling rate)[^\d]{0,8}(?:低于|小于|<)\s*(\d+(?:\.\d+)?)\s*(?:°C|℃|K)?\s*\/\s*h/i);
  if (cooling) add('cooling_rate_max', cooling[1], `降温速率 < ${cooling[1]} °C/h`);
  const agent = text.match(/(?:输运剂|transport_agent)\s*[:：]?\s*([A-Za-z0-9₂₃₄]+)/i);
  if (agent) add('transport_agent', agent[1], `输运剂：${agent[1]}`);
  return {original:text, filters};
}

export function similarityReasons(a, b) {
  const reasons=[];
  if (a.material && a.material === b.material) reasons.push('同一材料');
  if (a.method && a.method === b.method) reasons.push('相同生长路线');
  const shared=(a.tags ?? []).filter(tag => (b.tags ?? []).includes(tag));
  if (shared.length) reasons.push(`共同标签：${shared.slice(0,2).join('、')}`);
  if (a.category && a.category === b.category) reasons.push('同一研究方向');
  const conflict = /相反|争议|不一致|挑战|不能支持/.test(`${a.conclusion} ${b.conclusion}`);
  return {reasons:reasons.slice(0,3), conflict};
}

export function exportFurnacePlan(paper) {
  const recipe = paper.growthRecipe ?? extractGrowthRecipe(paper);
  const missing = Object.entries(recipe).filter(([key,value]) => !['completeness','qualityMetrics'].includes(key) && !value).map(([key]) => key);
  return `# 下一炉建议｜${paper.material}\n\n- [ ] 生长路线：${recipe.method || '待确定'}\n- [ ] 建议先复核温度窗口：${recipe.sourceTemperature || recipe.peakTemperature || '原文未给出，先查 Methods / SI'} → ${recipe.growthTemperature || '生长端温度未报告'}\n- [ ] 配比与成分点：${recipe.ratio || '围绕论文名义成分设置中心点与两侧成分点'}\n- [ ] 输运剂 / Flux：${recipe.transportAgent || recipe.flux || '正文未报告，禁止凭经验补写'}\n- [ ] 降温与后处理：${recipe.coolingRate || '降温速率未报告'}；${recipe.postTreatment || '后处理未报告'}\n- [ ] 必须记录：炉位、安瓿内径、装料质量、真空度/气氛、批次号、实际成分\n- [ ] 放行标准：单晶 XRD/Laue、EDS/WDS 多点统计；${recipe.qualityMetrics?.join('；') || '按材料补充 RRR/迁移率/摇摆曲线'}\n- [ ] 推荐测量顺序：结构与成分 → 基础电阻/磁化/比热 → 关键场温区精扫 → 特殊探针\n- [ ] 当前缺失字段：${missing.join('、') || '无'}\n- [ ] 关键风险：论文参数完整度 ${recipe.completeness.reported}/${recipe.completeness.total}；缺失项应先向作者或补充材料核实\n`;
}
