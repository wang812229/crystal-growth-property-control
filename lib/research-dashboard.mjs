const clean=value=>String(value??'').normalize('NFKC').toLowerCase().replace(/[‐‑–−_\s]/g,'').replace(/[₀₁₂₃₄₅₆₇₈₉]/g,d=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(d));
const text=paper=>[paper.material,paper.title,paper.method,paper.category,...(paper.tags??[]),paper.conclusion, ...(paper.sections??[]).map(x=>`${x.title} ${x.text}`)].join(' ');

export const TRACKED_MATERIALS=[
 {id:'alpha-rucl3',name:'α-RuCl₃',aliases:['αrucl3','rucl3','alpharucl3']},
 {id:'la3ni2o7',name:'La₃Ni₂O₇',aliases:['la3ni2o7','双层镍酸盐','bilayernickelate']},
 {id:'ute2',name:'UTe₂',aliases:['ute2','uraniumditelluride']},
];
export const STAGES=[
 {id:'growth',label:'晶体生长',pattern:/生长|growth|synthesi|cvt|flux|浮区|floating.zone|mbe|pld/i},
 {id:'structure',label:'结构与缺陷',pattern:/结构|缺陷|层错|空位|structure|defect|stacking|vacanc|xrd|tem/i},
 {id:'property',label:'基础物性',pattern:/输运|比热|磁化|电阻|transport|specific heat|magnet|resistiv|stm|nmr|arpes/i},
 {id:'control',label:'压力 / 应变 / 掺杂',pattern:/压力|应变|掺杂|取代|扭转|pressure|strain|doping|substitut|twist/i},
 {id:'frontier',label:'新相或争议',pattern:/新相|争议|冲突|超导|拓扑|量子临界|new phase|controvers|superconduct|topolog|quantum critical/i},
];

export function canonicalMaterial(paper){const hay=clean(text(paper));const fixed=TRACKED_MATERIALS.find(m=>m.aliases.some(a=>hay.includes(clean(a))));return fixed?.name??String(paper.material||'材料未标注').trim()}
export function materialId(name){const fixed=TRACKED_MATERIALS.find(m=>m.name===name);return fixed?.id??clean(name).replace(/[^a-z0-9\u4e00-\u9fff]/g,'').slice(0,48)}
export function paperStages(paper){const hay=text(paper);const hits=STAGES.filter(stage=>stage.pattern.test(hay)).map(stage=>stage.id);return hits.length?hits:['property']}
export function buildMaterialTracks(papers,{minimum=1}={}){
 const groups=new Map();for(const paper of papers){const name=canonicalMaterial(paper);const list=groups.get(name)??[];list.push({...paper,storyStages:paperStages(paper)});groups.set(name,list)}
 return [...groups].filter(([,items])=>items.length>=minimum).map(([name,items])=>({id:materialId(name),name,items:items.sort((a,b)=>(a.published||a.date).localeCompare(b.published||b.date)),stageCounts:Object.fromEntries(STAGES.map(s=>[s.id,items.filter(p=>p.storyStages.includes(s.id)).length]))})).sort((a,b)=>{const ap=TRACKED_MATERIALS.some(x=>x.name===a.name),bp=TRACKED_MATERIALS.some(x=>x.name===b.name);return Number(bp)-Number(ap)||b.items.length-a.items.length||a.name.localeCompare(b.name,'zh-CN')})
}

export function personalScore(paper,prefs){let score=0;const hay=clean(text(paper));for(const v of prefs.materials??[])if(hay.includes(clean(v)))score+=8;for(const v of prefs.methods??[])if(hay.includes(clean(v)))score+=5;for(const v of prefs.measurements??[])if(hay.includes(clean(v)))score+=4;for(const v of prefs.journals??[])if(clean(paper.journal).includes(clean(v)))score+=4;for(const v of prefs.authors??[])if(clean(paper.authors).includes(clean(v)))score+=5;return score}
export function personalDigest(papers,prefs,limit=5){const latest=[...new Set(papers.map(p=>p.date))].sort().at(-1);return papers.filter(p=>p.date===latest).map(p=>({paper:p,score:personalScore(p,prefs)})).sort((a,b)=>b.score-a.score||(b.paper.rating||'').localeCompare(a.paper.rating||'')||(b.paper.published||'').localeCompare(a.paper.published||'')).slice(0,limit)}

export function weeklyStats(papers,endDate){const dates=[...new Set(papers.map(p=>p.date))].sort();const end=endDate??dates.at(-1);const to=new Date(`${end}T00:00:00Z`);const from=new Date(to);from.setUTCDate(from.getUTCDate()-6);const start=from.toISOString().slice(0,10);const selected=papers.filter(p=>p.date>=start&&p.date<=end);
 const countBy=fn=>[...selected.reduce((m,p)=>{const values=fn(p);for(const v of values)m.set(v,(m.get(v)||0)+1);return m},new Map())].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0],'zh-CN'));
 const methods=countBy(p=>{const h=clean(`${p.method} ${(p.tags??[]).join(' ')}`);return ['CVT','Flux','MBE','PLD','浮区'].filter(v=>h.includes(clean(v)))||[]});
 const measurements=countBy(p=>['比热','量子振荡','STM','μSR','NMR','ARPES','磁化','输运','XRD','TEM'].filter(v=>clean(text(p)).includes(clean(v))));
 const journals=countBy(p=>[p.journal||'来源未标注']);const materials=countBy(p=>[canonicalMaterial(p)]);
 const daily=dates.filter(d=>d>=start&&d<=end).map(date=>{const items=selected.filter(p=>p.date===date);return {date,total:items.length,formal:items.filter(p=>!/^arxiv/i.test(p.journal)&&p.type!=='preprint').length,arxiv:items.filter(p=>/^arxiv/i.test(p.journal)||p.type==='preprint').length}});
 const formal=selected.filter(p=>!/^arxiv/i.test(p.journal)&&p.type!=='preprint').length,arxiv=selected.length-formal;
 const top=[...selected].sort((a,b)=>rank(b.rating)-rank(a.rating)||Number(b.access?.includes('全文精读'))-Number(a.access?.includes('全文精读'))||(b.published||'').localeCompare(a.published||'')).slice(0,5);
 return {start,end,total:selected.length,full:selected.filter(p=>p.access?.includes('全文精读')).length,formal,arxiv,daily,methods,measurements,journals,materials,top};
}
function rank(value){return ({S:5,'A+':4,A:3,'B+':2,B:1}[value]??0)}

export const PROJECT_GROUPS=['准备复现','生长方法参考','待组会汇报','与当前结果冲突','需要获取全文','需要补看SI'];
export function normalizeExperiment(record){return {id:String(record.id||cryptoId()),createdAt:String(record.createdAt||new Date().toISOString()),updatedAt:new Date().toISOString(),project:String(record.project||'未分组'),sampleId:String(record.sampleId||'').trim(),material:String(record.material||'').trim(),method:String(record.method||'').trim(),date:String(record.date||new Date().toISOString().slice(0,10)),batch:String(record.batch||'').trim(),ratio:String(record.ratio||'').trim(),agent:String(record.agent||'').trim(),vessel:String(record.vessel||'').trim(),atmosphere:String(record.atmosphere||'').trim(),sourceTemp:String(record.sourceTemp||'').trim(),growthTemp:String(record.growthTemp||'').trim(),peakTemp:String(record.peakTemp||'').trim(),holdTime:String(record.holdTime||'').trim(),coolingRate:String(record.coolingRate||'').trim(),postTreatment:String(record.postTreatment||'').trim(),crystalSize:String(record.crystalSize||'').trim(),yield:String(record.yield||'').trim(),measurements:String(record.measurements||'').trim(),results:String(record.results||'').trim(),quality:String(record.quality||'').trim(),notes:String(record.notes||'').trim()}}
function cryptoId(){return `exp-${Date.now()}-${Math.random().toString(36).slice(2,8)}`}
export function experimentsCsv(records){const keys=['date','project','sampleId','material','method','batch','ratio','agent','vessel','atmosphere','sourceTemp','growthTemp','peakTemp','holdTime','coolingRate','postTreatment','crystalSize','yield','measurements','results','quality','notes'];const q=v=>`"${String(v??'').replace(/"/g,'""')}"`;return '\ufeff'+[keys.join(','),...records.map(r=>keys.map(k=>q(r[k])).join(','))].join('\r\n')}
