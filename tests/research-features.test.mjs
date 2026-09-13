import test from 'node:test';
import assert from 'node:assert/strict';
import {buildEvidenceSegments,evidenceProfile,exportFurnacePlan,extractGrowthRecipe,parseNaturalLanguageQuery,similarityReasons} from '../lib/research-features.mjs';

const paper={material:'α-RuCl₃',method:'CVT',access:'全文精读',tags:['二维材料','磁性'],category:'晶体生长和物性调控',conclusion:'多探针结果支持应变调控，但晶向仍未标定。',sections:[
 {title:'晶体生长与质量',text:'采用 I₂ 5 mg/mL 作为输运剂，源区 900 °C，生长区 800 °C，保持 7 天。XRD、EDS 与 TEM 表征晶体。'},
 {title:'温度程序',text:'样品以 2 °C/h 降温，并在 600 °C 退火。晶体尺寸约 3 × 2 × 0.2 mm。'},
 {title:'物性与模型拟合',text:'磁化和输运直接观察到异常；DFT 拟合用于解释交换变化。'},
 {title:'本站判断与局限',text:'本简报判断结论为中等，实际应变仍需标定。'},
]};

test('growth recipe extracts transport agent, zones and cooling rate',()=>{const r=extractGrowthRecipe(paper);assert.equal(r.method,'CVT');assert.match(r.transportAgent,/I₂/);assert.match(r.sourceTemperature,/900/);assert.match(r.growthTemperature,/800/);assert.match(r.coolingRate,/2/);assert(r.completeness.reported>=7)});
test('evidence paragraphs preserve epistemic labels',()=>{const rows=buildEvidenceSegments(paper);assert.equal(rows[2].type,'模型拟合');assert.equal(rows[3].type,'本站判断');assert.equal(rows[0].type,'直接观察')});
test('evidence profile separates access, reproducibility and certainty',()=>{const profile=evidenceProfile(paper);assert.match(profile.fullText,/正文/);assert.match(profile.sampleCredibility,/XRD/);assert.match(profile.reproducibility,/\d+\/15/);assert.equal(profile.certainty,'中等')});
test('natural language parser exposes editable scientific filters',()=>{const parsed=parseNaturalLanguageQuery('过去30天用CVT生长的二维磁体，要求有低温输运或磁性测量并优先全文',new Date('2026-09-13T00:00:00Z'));assert(parsed.filters.some(x=>x.field==='method'&&x.value==='CVT'));assert(parsed.filters.some(x=>x.field==='published_from'));assert(parsed.filters.some(x=>x.field==='measurement'&&x.value==='低温输运'));assert(parsed.filters.some(x=>x.field==='access'&&x.value==='full'))});
test('similarity explanations and furnace export are specific',()=>{const same={...paper,conclusion:'存在相反结论。'};const why=similarityReasons(paper,same);assert(why.reasons.includes('同一材料'));assert(why.reasons.includes('相同生长路线'));assert.equal(why.conflict,true);const plan=exportFurnacePlan(paper);assert.match(plan,/I₂ 5 mg\/mL/);assert.match(plan,/下一炉建议/);assert.match(plan,/放行标准/)});
