const $=id=>document.getElementById(id),size=40;
let rows=[],filtered=[],page=0;
const el=(tag,text,cls)=>{const x=document.createElement(tag);if(text!==undefined)x.textContent=String(text);if(cls)x.className=cls;return x;};
const safeUrl=value=>{try{const u=new URL(value,location.href);return ['https:','http:'].includes(u.protocol)?u.href:'#';}catch{return '#';}};
const state=r=>r.officialEvents.some(x=>x.event==='Published')?'published':r.officialEvents.length?'accepted':'metadata';
const norm=x=>String(x).normalize('NFKC').toLocaleLowerCase();
const home=new URL('../../',location.href);$('home').href=home.href;
function card(r){
 const node=$('paper-template').content.firstElementChild.cloneNode(true);
 node.querySelector('.meta').textContent=`${r.journal} · ${r.publicationDate||'日期待核'} · ${r.priority} · #${r.auditId}`;
 const title=node.querySelector('.title');title.textContent=r.title;title.href=safeUrl(r.url);
 node.querySelector('.authors').textContent=r.authors||'完整作者待出版社详情核对';
 node.querySelector('.note').textContent=r.reviewNote;
 const tags=node.querySelector('.tags');for(const text of [r.publisherState,r.readLevel])tags.append(el('span',text));
 node.querySelector('.details').textContent=[`DOI：${r.doi}`,`分类（初筛，可复核）：${r.category}`,`证据：${r.evidenceKind}`,`历史：${r.historyState}`,`Crossref 在线日：${r.crossrefOnline||'未给出'}；出版日：${r.crossrefPublished||'未给出'}；登记日：${r.crossrefCreated||'未给出'}`,`日期核验：${r.dateScope}`,`出版社事件：${r.officialEvents.map(x=>`${x.event} ${x.date}`).join('；')||'未核实目录事件'}`].join('\n');
 for(const h of r.historyMatches){const link=el('a',`历史 ${h.date}：${h.title}（${h.access}；历史自述，非本轮重读）`);link.href=new URL(h.url.replace(/^\//,''),home).href;node.querySelector('.history').append(link);}
 return node;
}
function render(){
 const queries=norm($('query').value).split(/\s+/).filter(Boolean),priority=$('priority').value,journal=$('journal').value,reading=$('reading').value,source=$('state').value;
 filtered=rows.filter(r=>(!priority||(priority==='manual'?r.manualReview:r.priority===priority))&&(!journal||r.journal===journal)&&(!reading||(reading==='abstract'?r.abstractActuallyRead:!r.abstractActuallyRead))&&(!source||state(r)===source)&&queries.every(q=>norm([r.title,r.authors,r.doi,r.journal,r.reviewNote].join(' ')).includes(q)));
 filtered.sort((a,b)=>b.publicationDate.localeCompare(a.publicationDate)||a.auditId-b.auditId);
 const pages=Math.max(1,Math.ceil(filtered.length/size));page=Math.min(page,pages-1);
 $('result-count').textContent=`匹配 ${filtered.length} 条；共 ${rows.length} 条书目；当前筛选已读摘要 ${filtered.filter(r=>r.abstractActuallyRead).length}，本轮正文精读 0。`;
 const fragment=document.createDocumentFragment();for(const row of filtered.slice(page*size,(page+1)*size))fragment.append(card(row));
 if(!filtered.length)fragment.append(el('p','没有匹配记录。可放宽期刊或优先级筛选。','empty'));
 $('results').replaceChildren(fragment);$('page').textContent=`${page+1} / ${pages}`;$('prev').disabled=page===0;$('next').disabled=page===pages-1;
}
function sourceDetail(s){
 const d=el('details'),label=el('summary',`${s.source} · ${s.pages.length} 页 · 目录命中 ${s.publisherWindowRecords} · A ${s.priorityA}`);d.append(label,el('p',s.limitation));
 d.append(el('p',`在线日期元数据 ${s.crossrefOnlineRetrieved??'未设 ISSN 查询'} / ${s.crossrefOnlineTotal??'未知'}；所属期刊已读摘要 ${s.manualAbstracts}；历史命中 ${s.historicalMatches}。`));
 const wrap=el('div',undefined,'source-data'),table=el('table'),head=el('tr');for(const t of ['页','响应','窗口命中','最早／最晚日','来源'])head.append(el('th',t));table.append(head);
 for(const p of s.pages){const tr=el('tr');for(const v of [p.page,p.status,p.inWindow,`${p.minDate||'未解析'} / ${p.maxDate||'未解析'}`])tr.append(el('td',v));const td=el('td'),a=el('a','原目录');a.href=safeUrl(p.url);a.target='_blank';a.rel='noopener noreferrer';td.append(a);tr.append(td);table.append(tr);}wrap.append(table);d.append(wrap);
 for(const f of s.metadataFallbacks||[]){const a=el('a',`${f.mode} 日期补查：HTTP ${f.status}，取回 ${f.retrieved} / ${f.total??'未知'}（完整=${f.complete}）`);a.href=safeUrl(f.url);a.target='_blank';a.rel='noopener noreferrer';const p=el('p');p.append(a);d.append(p);}
 return d;
}
async function start(){
 const load=async name=>{const response=await fetch(name);if(!response.ok)throw new Error(`${name} HTTP ${response.status}`);return response.json();};
 const [catalog,summary,highlights]=await Promise.all([load('catalog.json'),load('summary.json'),load('highlights.json')]);rows=catalog;
 const s=summary.stats;
 for(const [n,label] of [[s.totalUnique,'目录／元数据去重条目，非相关论文数'],[s.priorities.A,'优先补核线索，非全文精读'],[s.abstractsActuallyRead,`本轮已读摘要 · 人工复核 ${s.manualItems} 条`],[s.fullReadsInThisAudit,'本轮新增正文／SI 精读']]){const box=el('div',undefined,'stat');box.append(el('b',n),el('span',label));$('stats').append(box);}
 for(const r of highlights)$('highlights').append(card(r));for(const text of summary.limitations)$('limits').append(el('li',text));
 for(const j of [...new Set(rows.map(r=>r.journal))].sort()){const o=el('option',j);o.value=j;$('journal').append(o);}
 for(const s of summary.sources)$('sources').append(sourceDetail(s));render();
}
$('filters').addEventListener('submit',e=>e.preventDefault());$('filters').addEventListener('input',()=>{page=0;render();});$('filters').addEventListener('reset',()=>setTimeout(()=>{page=0;render();},0));
for(const [id,step] of [['prev',-1],['next',1]])$(id).addEventListener('click',()=>{page+=step;render();$('result-count').scrollIntoView({block:'start',behavior:'smooth'});});
start().catch(e=>{$('result-count').textContent=`书目载入失败：${e.message}。请重试或下载 CSV/JSON。`;});
