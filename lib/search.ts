export type Paper = {
 id:string; title:string; authors:string; journal:string; material:string; method:string;
 category:string; tags:string[]; abstract:string; summary:string; year:number|null;
 published:string; date:string; type:string; citations:number|null; citationDate:string;
 source:string; fullText:string; reportUrl:string; access:string; rating:string;
 sections:{title:string;text:string}[]; readingGuide:{first:string;focus:string;next:string}|null;
};
export type Filters={query:string;field:string;category:string;journal:string;method:string;access:string;date:string;from:string;to:string;type:string;sort:string;favorites:boolean;page:number;size:number};
export const defaults:Filters={query:'',field:'all',category:'',journal:'',method:'',access:'',date:'',from:'',to:'',type:'',sort:'relevance',favorites:false,page:1,size:10};
export const fields:Record<string,string>={all:'全部字段（含简报）',title:'标题',authors:'作者',abstract:'原始摘要',keywords:'关键词',summary:'简报分析'};
const aliases:Record<string,string>={title:'title',标题:'title',author:'authors',authors:'authors',作者:'authors',abstract:'abstract',摘要:'abstract',keyword:'keywords',keywords:'keywords',关键词:'keywords',summary:'summary',简报:'summary',主题:'category',板块:'category',category:'category',期刊:'journal',journal:'journal',方法:'method',method:'method',日期:'date',date:'date',全文:'access',access:'access'};
export const synonyms=[['flux','self-flux','助熔剂','自助熔剂','熔盐'],['cvt','chemical vapor transport','chemical vapour transport','化学气相输运','化学气相传输'],['superconductivity','superconducting','superconductor','超导'],['heavy fermion','heavy-fermion','重费米子','重费米'],['quantum critical','量子临界'],['magnon','magnons','磁振子'],['phonon','phonons','声子'],['defect','defects','缺陷'],['growth','生长'],['altermagnet','altermagnetic','交错磁','交替磁'],['epitaxy','epitaxial','外延'],['prl','physical review letters'],['prb','physical review b'],['nc','nature communications']];
export const normalize=(v:unknown)=>String(v??'').normalize('NFKC').toLowerCase().replace(/[‐‑–−]/g,'-').replace(/\s+/g,' ').trim();
export function expand(term:string){const key=normalize(term);return [...new Set([key,...synonyms.filter(g=>g.some(v=>normalize(v)===key)).flat().map(normalize)])].filter(Boolean)}
export function safeUrl(value:string){return /^https?:\/\//i.test(value)?value:'#'}
export function accessLevel(p:Paper){return p.access.includes('补充材料精读')?'si':p.access.includes('全文精读')?'full':'abstract'}

type Node={kind:'term';value:string;field?:string}|{kind:'not';child:Node}|{kind:'and'|'or';left:Node;right:Node};
type Token={value:string;quoted:boolean};
export function parse(query:string):Node|null {
 if(query.length>1000)throw new Error('检索式请控制在 1000 字以内。');
 const tokens:Token[]=[];let i=0;
 while(i<query.length){const c=query[i];if(/\s/.test(c)){i++;continue}if('():：'.includes(c)){tokens.push({value:c==='：'?':':c,quoted:false});i++;continue}
  if(c==='"'||c==='“'){const end=c==='“'?'”':'"';let value='';i++;while(i<query.length&&query[i]!==end)value+=query[i++];if(i===query.length)throw new Error('引号未闭合，请补上结束引号。');i++;if(!value.trim())throw new Error('引号内请输入关键词。');tokens.push({value,quoted:true});continue}
  let value='';while(i<query.length&&!/[\s():："“”]/.test(query[i]))value+=query[i++];if(!value)throw new Error('请使用成对的引号。');tokens.push({value,quoted:false});
 }
 let at=0;const op=(v:string)=>tokens[at]&&!tokens[at].quoted&&tokens[at].value.toUpperCase()===v;
 const unary=(depth=0):Node=>{if(depth>40)throw new Error('括号嵌套过多。');if(op('NOT')){at++;return {kind:'not',child:unary(depth+1)}}
  if(op('(')){at++;const node=or(depth+1);if(!op(')'))throw new Error('括号未闭合。');at++;return node}
  const token=tokens[at++];if(!token||(!token.quoted&&['AND','OR',')',':'].includes(token.value.toUpperCase())))throw new Error('AND / OR / NOT 两侧需要完整条件。');
  if(op(':')){at++;const field=aliases[normalize(token.value)];if(!field)throw new Error(`未知字段“${token.value}”，可使用 title、author、abstract、keywords。`);const value=tokens[at++];if(!value||(!value.quoted&&['AND','OR','NOT','(',')',':'].includes(value.value.toUpperCase())))throw new Error('字段冒号后请输入关键词，短语请用引号。');return {kind:'term',field,value:value.value}}
  const mixed=token.quoted?null:token.value.match(/[\u3400-\u9fff]+|[^\u3400-\u9fff]+/g);
  if(mixed&&mixed.length>1)return mixed.slice(1).reduce<Node>((left,value)=>({kind:'and',left,right:{kind:'term',value}}),{kind:'term',value:mixed[0]});
  return {kind:'term',value:token.value};
 };
 const and=(depth:number):Node=>{let left=unary(depth);while(at<tokens.length&&!op(')')&&!op('OR')){if(op('AND'))at++;left={kind:'and',left,right:unary(depth)}}return left};
 const or=(depth:number):Node=>{let left=and(depth);while(op('OR')){at++;left={kind:'or',left,right:and(depth)}}return left};
 if(!tokens.length)return null;const tree=or(0);if(at!==tokens.length)throw new Error('存在多余括号或运算符。');return tree;
}
function values(p:Paper,field:string){const text:Record<string,string>={title:p.title,authors:p.authors,abstract:p.abstract,summary:p.summary,keywords:p.tags.join(' '),category:p.category,journal:p.journal,method:p.method,date:p.date,access:p.access};return field==='all'?[p.title,p.authors,p.abstract,p.summary,p.tags.join(' '),p.material,p.method,p.journal,p.category,p.source].join(' '):text[field]??''}
function matches(p:Paper,node:Node,field:string):boolean {if(node.kind==='not')return !matches(p,node.child,field);if(node.kind==='and')return matches(p,node.left,field)&&matches(p,node.right,field);if(node.kind==='or')return matches(p,node.left,field)||matches(p,node.right,field);if(node.kind!=='term')return false;
 if(node.field==='access'&&['是','有','全文','否','无'].includes(node.value))return ['是','有','全文'].includes(node.value)?accessLevel(p)==='full':accessLevel(p)!=='full';
 const hay=normalize(values(p,node.field??field));return expand(node.value).some(t=>hay.includes(t));}
export function positiveTerms(node:Node|null,negative=false):string[]{if(!node)return [];if(node.kind==='not')return positiveTerms(node.child,!negative);if(node.kind==='term')return negative?[]:expand(node.value);return [...positiveTerms(node.left,negative),...positiveTerms(node.right,negative)]}
export function search(papers:Paper[],f:Filters,favorites:string[]=[]){
 const node=parse(f.query);if(f.from&&!/^\d{4}$/.test(f.from)||f.to&&!/^\d{4}$/.test(f.to))throw new Error('年份请输入四位数字。');if(f.from&&f.to&&+f.from>+f.to)throw new Error('起始年份不能晚于结束年份。');const terms=positiveTerms(node);
 const ranked=papers.filter(p=>(!node||matches(p,node,f.field))&&(!f.category||p.category===f.category)&&(!f.journal||p.journal===f.journal)&&(!f.method||p.method===f.method)&&(!f.date||p.date===f.date)&&(!f.access||accessLevel(p)===f.access)&&(!f.type||p.type===f.type)&&(!f.from||(p.year!==null&&p.year>=+f.from))&&(!f.to||(p.year!==null&&p.year<=+f.to))&&(!f.favorites||favorites.includes(p.id))).map(p=>({paper:p,score:terms.reduce((s,t)=>s+(normalize(p.title).includes(t)?12:0)+(normalize(p.tags.join(' ')).includes(t)?8:0)+(normalize(p.authors).includes(t)?6:0)+(normalize(p.abstract).includes(t)?4:0)+(normalize(p.summary).includes(t)?1:0),0)}));
 ranked.sort((a,b)=>{const newest=(b.paper.published||'').localeCompare(a.paper.published||'')||b.paper.date.localeCompare(a.paper.date)||a.paper.id.localeCompare(b.paper.id);if(f.sort==='citations')return (b.paper.citations??-1)-(a.paper.citations??-1)||newest;if(f.sort==='newest')return newest;return b.score-a.score||newest});
 const size=[10,20,50].includes(f.size)?f.size:10;const pages=Math.max(1,Math.ceil(ranked.length/size));const page=Math.max(1,Math.min(f.page,pages));return {items:ranked.slice((page-1)*size,page*size).map(x=>x.paper),all:ranked.map(x=>x.paper),total:ranked.length,pages,page,terms};
}
export function highlights(text:string,terms:string[]){
 const chars=[...text];let folded='';const map:number[]=[];let offset=0;
 for(const c of chars){const v=c.normalize('NFKC').toLowerCase().replace(/[‐‑–−]/g,'-');folded+=v;for(let j=0;j<v.length;j++)map.push(offset);offset+=c.length}map.push(text.length);
 const hit=new Set<number>();for(const term of terms.filter(Boolean)){let start=0;while((start=folded.indexOf(term,start))!==-1){for(let k=map[start];k<(map[start+term.length]??text.length);k++)hit.add(k);start+=term.length}}
 const parts:{text:string;hit:boolean}[]=[];for(let i=0;i<text.length;i++){const yes=hit.has(i);const last=parts.at(-1);if(last?.hit===yes)last.text+=text[i];else parts.push({text:text[i],hit:yes})}return parts;
}
export function excerpt(text:string,terms:string[],limit=260){const first=highlights(text,terms).findIndex(p=>p.hit);const chunks=highlights(text,terms);const pos=first<0?0:chunks.slice(0,first).reduce((s,p)=>s+p.text.length,0);const start=Math.max(0,pos-45);return (start?'…':'')+text.slice(start,start+limit)+(text.length>start+limit?'…':'')}
export function suggestions(query:string,papers:Paper[]){const last=normalize(query.split(/\s+(?:AND|OR|NOT)\s+|[()]/i).at(-1)??'').replace(/^\w+:/,'');const options=[...new Set([...synonyms.flat(),...papers.flatMap(p=>[p.material,...p.tags])])];return options.filter(v=>!last||normalize(v).includes(last)||expand(last).some(t=>normalize(v).includes(t))).slice(0,7)}
export function fromParams(params:URLSearchParams):Filters {const out={...defaults};for(const k of Object.keys(defaults) as (keyof Filters)[]){const v=params.get(k);if(v===null)continue;if(k==='favorites')out[k]=v==='true';else if(k==='page'||k==='size')out[k]=Math.max(1,parseInt(v)||defaults[k]);else out[k]=v.slice(0,1000)}if(!fields[out.field])out.field='all';if(!['relevance','newest','citations'].includes(out.sort))out.sort='relevance';return out}
export function toParams(f:Filters){const p=new URLSearchParams();for(const k of Object.keys(f) as (keyof Filters)[])if(f[k]!==defaults[k])p.set(k,String(f[k]));return p.toString()}
export function readLocal(storage:Pick<Storage,'getItem'>,key:string){try{const data=JSON.parse(storage.getItem(key)||'[]');return Array.isArray(data)?data.filter((x:unknown)=>typeof x==='string').slice(0,500):[]}catch{return []}}
export function writeLocal(storage:Pick<Storage,'setItem'>,key:string,value:string[]){try{storage.setItem(key,JSON.stringify(value));return true}catch{return false}}
export function addHistory(history:string[],query:string){const clean=query.trim();return clean?[clean,...history.filter(v=>v!==clean)].slice(0,12):history}
export function citation(p:Paper,format:'bibtex'|'ris'){
 const doi=p.source.replace(/^https?:\/\/(?:dx\.)?doi.org\//i,'');const hasDoi=/^10\.\d{4,9}\//.test(doi);const authors=p.authors.split(/;|；/).map(s=>s.trim()).filter(s=>s&&!/详见|未报告|未知/.test(s));
 const clean=(v:string)=>v.replace(/[\r\n]+/g,' ').trim();
 if(format==='ris')return ['TY  - '+(p.type==='preprint'?'UNPB':'JOUR'),'TI  - '+clean(p.title),...authors.map(a=>'AU  - '+clean(a)),...(p.year?['PY  - '+p.year]:[]),'JO  - '+clean(p.journal),...(hasDoi?['DO  - '+doi]:[]),'UR  - '+safeUrl(p.source),...(p.abstract?['AB  - '+clean(p.abstract)]:[]),...p.tags.map(k=>'KW  - '+clean(k)),'ER  - ',''].join('\r\n');
 const tex=(v:string)=>clean(v).replace(/[\\{}%&#_$^~]/g,c=>({'\\':'\\textbackslash{}','^':'\\textasciicircum{}','~':'\\textasciitilde{}'}[c]??'\\'+c));const entries:Record<string,string>={title:p.title,...(authors.length?{author:authors.join(' and ')}:{}),...(p.year?{year:String(p.year)}:{}),...(p.type==='preprint'?{howpublished:p.journal}:{journal:p.journal}),...(hasDoi?{doi}:{}),url:safeUrl(p.source)};
 const key=p.id.replace(/[^a-z0-9]/gi,'_');return '@'+(p.type==='preprint'?'misc':'article')+'{'+key+',\n'+Object.entries(entries).map(([k,v])=>'  '+k+' = {'+tex(v)+'}').join(',\n')+'\n}\n';
}
