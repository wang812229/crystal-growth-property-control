'use client';
/* eslint-disable react-hooks/set-state-in-effect */
import {useDeferredValue,useEffect,useMemo,useRef,useState} from 'react';
import type {Filters,Paper} from '../../lib/search';
import {accessLevel,addHistory,citation,defaults,excerpt,fields,fromParams,highlights,normalize,readLocal,safeUrl,search,similarPapers,suggestions,synonyms,toParams,writeLocal} from '../../lib/search';

const HISTORY='literature.search.history.v2', FAVORITES='literature.favorites.v2';
const hotSearches=['Flux growth','CVT','高温超导','重费米子','交错磁体','二维材料'];
const fieldLabels:Record<string,string>={query:'关键词',field:'字段',category:'学科',journal:'期刊',method:'方法',access:'阅读状态',openAccess:'开放获取',tags:'标签',date:'收录日期',from:'起始年份',to:'结束年份',type:'类型',favorites:'仅收藏'};
const typeLabels:Record<string,string>={article:'期刊论文',preprint:'预印本',review:'综述',other:'其他'};

export function Highlight({text,terms}:{text:string;terms:string[]}){return <>{highlights(text,terms).map((p,i)=>p.hit?<mark key={i}>{p.text}</mark>:<span key={i}>{p.text}</span>)}</>}
export function Loading(){return <div className="library-loading" role="status" aria-live="polite"><div className="loading-head"><span className="spinner"/>正在载入文献索引…</div><div/><div/><div/></div>}

export default function SearchLibrary({papers,base=''}:{papers:Paper[];base?:string}){
 const [filters,setFilters]=useState<Filters>({...defaults});
 const [input,setInput]=useState('');
 const [history,setHistory]=useState<string[]>([]);
 const [favorites,setFavorites]=useState<string[]>([]);
 const [ready,setReady]=useState(false);
 const [notice,setNotice]=useState('');
 const [open,setOpen]=useState(false);
 const [active,setActive]=useState(-1);
 const [selected,setSelected]=useState<string[]>([]);
 const [question,setQuestion]=useState('');
 const [asked,setAsked]=useState('');
 const composing=useRef(false),inputRef=useRef<HTMLInputElement>(null);
 const deferred=useDeferredValue(filters),pending=deferred!==filters;

 useEffect(()=>{
  const f=fromParams(new URLSearchParams(location.search));setFilters(f);setInput(f.query);
  try{setHistory(readLocal(localStorage,HISTORY));setFavorites(readLocal(localStorage,FAVORITES))}catch{setNotice('浏览器存储不可用，历史和收藏仅在本次访问保留。')}
  setReady(true);
  const back=()=>{const value=fromParams(new URLSearchParams(location.search));setFilters(value);setInput(value.query)};
  const sync=()=>{try{setFavorites(readLocal(localStorage,FAVORITES));setHistory(readLocal(localStorage,HISTORY))}catch{}}
  window.addEventListener('popstate',back);window.addEventListener('storage',sync);
  return()=>{window.removeEventListener('popstate',back);window.removeEventListener('storage',sync)};
 },[]);
 useEffect(()=>{if(ready){const q=toParams(filters);window.history.replaceState(null,'',location.pathname+(q?'?'+q:''))}},[ready,filters]);
 useEffect(()=>{if(!notice)return;const timer=setTimeout(()=>setNotice(''),4200);return()=>clearTimeout(timer)},[notice]);

 const result=useMemo(()=>{try{return {...search(papers,deferred,favorites),error:''}}catch(e){return {items:[] as Paper[],all:[] as Paper[],total:0,pages:1,page:1,terms:[] as string[],error:e instanceof Error?e.message:'检索式无法解析。'}}},[papers,deferred,favorites]);
 const proposed=useMemo(()=>suggestions(input,papers),[input,papers]);
 const frequentTags=useMemo(()=>{const count=new Map<string,number>();papers.flatMap(p=>[p.material,...p.tags]).filter(Boolean).forEach(t=>count.set(t,(count.get(t)||0)+1));return [...count].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).slice(0,14).map(([tag])=>tag)},[papers]);
 const selectedTags=filters.tags.split('|').filter(Boolean),availableFavorites=favorites.filter(id=>papers.some(p=>p.id===id));
 const selections=result.all.filter(p=>selected.includes(p.id));
 const activeFilters=(Object.keys(fieldLabels) as (keyof Filters)[]).filter(k=>filters[k]!==defaults[k]);

 function persist(key:string,values:string[]){try{if(writeLocal(localStorage,key,values))return}catch{}setNotice('浏览器未允许保存；历史和收藏仅在本次访问有效。')}
 useEffect(()=>{if(!ready||!filters.query.trim()||result.error)return;const timer=setTimeout(()=>{setHistory(prev=>{const next=addHistory(prev,toParams({...filters,page:1}));persist(HISTORY,next);return next})},900);return()=>clearTimeout(timer)},[ready,filters,result.error]);
 function change<K extends keyof Filters>(key:K,value:Filters[K]){setFilters(f=>({...f,[key]:value,...(key==='page'?{}:{page:1})}));if(key==='query')setInput(String(value));setActive(-1)}
 function reset(){setFilters({...defaults});setInput('');setSelected([]);setOpen(false)}
 function toggleFavorite(id:string){setFavorites(prev=>{const added=!prev.includes(id),next=added?[...prev,id]:prev.filter(v=>v!==id);persist(FAVORITES,next);setNotice(added?'已收藏，可在“我的收藏”中查看。':'已取消收藏。');return next})}
 function toggleTag(tag:string){change('tags',(selectedTags.includes(tag)?selectedTags.filter(t=>t!==tag):[...selectedTags,tag]).join('|'))}
 function pick(value:string){change('query','"'+value.replaceAll('"','')+'"');setOpen(false);inputRef.current?.focus()}
 function restore(value:string){const f=fromParams(new URLSearchParams(value));setFilters(f);setInput(f.query);setOpen(false)}
 function download(list:Paper[],format:'bibtex'|'ris'|'apa'){
  const blob=new Blob([list.map(p=>citation(p,format)).join('\n')],{type:format==='bibtex'?'application/x-bibtex;charset=utf-8':format==='ris'?'application/x-research-info-systems;charset=utf-8':'text/plain;charset=utf-8'});
  const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`literature-${new Date().toISOString().slice(0,10)}.${format==='bibtex'?'bib':format==='ris'?'ris':'txt'}`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);setNotice(`已导出 ${list.length} 篇 ${format.toUpperCase()} 引用；缺失元数据不会补写。`)
 }
 async function copy(text:string,message:string){try{await navigator.clipboard.writeText(text);setNotice(message)}catch{setNotice('复制失败，请手动复制浏览器地址栏。')}}
 const evidence=useMemo(()=>{if(!asked.trim())return [];const text=normalize(asked);const terms=[...new Set([...synonyms.filter(g=>g.some(v=>text.includes(v))).flat(),...(text.match(/[a-z0-9][a-z0-9.-]{2,}/g)??[]),...(text.match(/[\u3400-\u9fff]{2}/g)??[])])];if(!terms.length)return [];return papers.flatMap(p=>p.sections.map(s=>({p,s,score:terms.reduce((n,t)=>n+(normalize(s.text).includes(t)?1:0)+(normalize(p.material).includes(t)?2:0),0),terms}))).filter(v=>v.score>0).sort((a,b)=>b.score-a.score).slice(0,5)},[asked,papers]);

 return <div className="research-library">
  <section className="library-title"><div><p className="eyebrow">ACADEMIC DISCOVERY WORKSPACE</p><h1>智能文献检索</h1><p>在 <b>{papers.length}</b> 篇已审阅文献中连接材料、生长方法、物性证据与实验建议。</p></div><div className="index-status"><span/>站内索引就绪<small>Crossref 元数据增强</small></div></section>
  <section className="library-search-panel" aria-label="主检索区"><div className="library-searchbox"><label htmlFor="library-query">关键词或高级检索式</label><div className="query-line"><span aria-hidden="true">⌕</span><input ref={inputRef} id="library-query" role="combobox" autoComplete="off" aria-autocomplete="list" aria-expanded={open&&proposed.length>0} aria-controls="query-options" aria-activedescendant={active>=0?`query-option-${active}`:undefined} aria-describedby="query-instructions" value={input} onFocus={()=>setOpen(true)} onBlur={e=>{if(!e.currentTarget.parentElement?.parentElement?.contains(e.relatedTarget as Node))setOpen(false)}} onCompositionStart={()=>{composing.current=true}} onCompositionEnd={e=>{composing.current=false;change('query',e.currentTarget.value)}} onChange={e=>{setInput(e.target.value);setOpen(true);setActive(-1);if(!composing.current)change('query',e.target.value)}} onKeyDown={e=>{if(e.nativeEvent.isComposing)return;if(e.key==='Escape'){setOpen(false);setActive(-1)}if(e.key==='ArrowDown'){e.preventDefault();setOpen(true);setActive(a=>Math.min(a+1,proposed.length-1))}if(e.key==='ArrowUp'){e.preventDefault();setActive(a=>Math.max(0,a-1))}if(e.key==='Enter'){e.preventDefault();if(open&&active>=0&&proposed[active])pick(proposed[active]);else setOpen(false)}}} placeholder={'例如：CVT AND (磁振子 OR superconductivity) NOT 薄膜'}/>{input&&<button type="button" onClick={()=>change('query','')} aria-label="清空关键词">×</button>}</div>
   {open&&proposed.length>0&&<ul id="query-options" role="listbox" aria-label="关键词联想" className="suggestion-list">{proposed.map((v,i)=><li key={v} role="option" id={`query-option-${i}`} aria-selected={active===i}><button tabIndex={-1} onMouseDown={e=>e.preventDefault()} onClick={()=>pick(v)}><Highlight text={v} terms={[normalize(input)]}/><span>填入检索</span></button></li>)}</ul>}
   <p id="query-instructions">支持中英文混合、AND / OR / NOT、括号、双引号短语和 <code>title:</code>、<code>author:</code>、<code>journal:</code>、<code>doi:</code> 字段。</p></div><div className="hot-searches"><span>热门检索</span>{hotSearches.map(q=><button key={q} onClick={()=>pick(q)}>{q}</button>)}</div></section>
  <div className="library-toolbar"><button onClick={()=>change('favorites',!filters.favorites)} aria-pressed={filters.favorites}>☆ 我的收藏 <b>{availableFavorites.length}</b></button><button onClick={()=>copy(location.href,'当前检索链接已复制。')}>↗ 分享检索</button><button onClick={reset}>↺ 清除全部条件</button><details className="history-menu"><summary>检索历史 <b>{history.length}</b></summary><div>{history.length?history.map(v=><button key={v} onClick={()=>restore(v)}>{fromParams(new URLSearchParams(v)).query||'组合筛选'}<small>{Object.entries(fromParams(new URLSearchParams(v))).filter(([k,val])=>k!=='query'&&val!==defaults[k as keyof Filters]).map(([k,val])=>(fieldLabels[k]||k)+': '+val).join(' · ')}</small></button>):<p>输入关键词后自动保存完整筛选组合。</p>}<button disabled={!history.length} onClick={()=>{setHistory([]);persist(HISTORY,[])}}>清空历史</button></div></details></div>
  <div className="library-workspace"><aside className="library-filters" aria-label="文献筛选"><div className="filters-head"><div><span>FILTERS</span><h2>筛选条件</h2></div><button onClick={reset}>清空</button></div>
   <label>检索字段<select value={filters.field} onChange={e=>change('field',e.target.value)}>{Object.entries(fields).map(([v,t])=><option key={v} value={v}>{t}</option>)}</select></label>
   {(['category','journal','method','date'] as const).map(k=><label key={k}>{fieldLabels[k]}<select value={filters[k]} onChange={e=>change(k,e.target.value)}><option value="">全部</option>{[...new Set(papers.map(p=>p[k]))].filter(Boolean).sort().map(v=><option key={v} value={v}>{v}</option>)}</select></label>)}
   <label>阅读状态<select value={filters.access} onChange={e=>change('access',e.target.value)}><option value="">全部</option><option value="full">全文精读</option><option value="si">补充材料精读</option><option value="abstract">摘要 / 受限</option></select></label>
   <label>开放获取<select value={filters.openAccess} onChange={e=>change('openAccess',e.target.value)}><option value="">全部</option><option value="yes">开放获取</option><option value="no">非开放获取</option><option value="unknown">状态未核验</option></select></label>
   <fieldset><legend>发表年份</legend><div className="year-range"><label><span className="sr-only">起始年份</span><input type="number" min="1800" max="2200" placeholder="起始年" value={filters.from} onChange={e=>change('from',e.target.value)}/></label><span>—</span><label><span className="sr-only">结束年份</span><input type="number" min="1800" max="2200" placeholder="结束年" value={filters.to} onChange={e=>change('to',e.target.value)}/></label></div></fieldset>
   <label>文献类型<select value={filters.type} onChange={e=>change('type',e.target.value)}><option value="">全部</option>{Object.entries(typeLabels).map(([v,t])=><option key={v} value={v}>{t}</option>)}</select></label>
   <fieldset className="tag-filter"><legend>标签多选</legend><div>{frequentTags.map(tag=><button key={tag} type="button" aria-pressed={selectedTags.includes(tag)} onClick={()=>toggleTag(tag)}>{tag}</button>)}</div></fieldset>
   <details><summary>高级检索语法</summary><p><code>title:&quot;spin chain&quot; AND NOT author:Liu</code></p><p>字段：title / author / abstract / keywords / journal / doi，或对应中文字段名。</p></details>
   <p className="data-note">开放获取状态只显示已核验信息；未知不会被推断为关闭。真实外部数据源适配器已预留，当前默认搜索站内索引。</p>
  </aside>
  <section className="library-results" aria-label="检索结果" aria-busy={pending||!ready}><div className="results-heading"><p role="status" aria-live="polite"><strong>{pending?'…':result.total}</strong><span>{pending?'正在即时更新':'篇匹配结果'}</span><small>第 {result.page} / {result.pages} 页</small></p><label>排序<select value={filters.sort} onChange={e=>change('sort',e.target.value)}><option value="relevance">相关度</option><option value="newest">最新发表</option><option value="citations">被引量</option></select></label></div>
   {filters.sort==='citations'&&<p className="data-note">被引量采用已保存的 Crossref 统计值并标注更新时间；未收录的文献排在末尾。</p>}
   <div className="filter-chips">{activeFilters.map(k=><button key={k} onClick={()=>change(k,defaults[k])}>{fieldLabels[k]}：{k==='favorites'?'是':k==='field'?fields[String(filters[k])]:k==='tags'?String(filters[k]).split('|').join('、'):String(filters[k])} <span aria-hidden="true">×</span><span className="sr-only">移除此条件</span></button>)}</div>
   <div className="export-toolbar"><label><input type="checkbox" checked={result.items.length>0&&result.items.every(p=>selected.includes(p.id))} onChange={e=>setSelected(prev=>e.target.checked?[...new Set([...prev,...result.items.map(p=>p.id)])]:prev.filter(id=>!result.items.some(p=>p.id===id)))}/>选择本页</label><span>{selections.length?`已选 ${selections.length} 篇`:`导出全部 ${result.total} 篇`}</span><button disabled={!result.total} onClick={()=>download(selections.length?selections:result.all,'bibtex')}>BibTeX</button><button disabled={!result.total} onClick={()=>download(selections.length?selections:result.all,'ris')}>RIS</button><button disabled={!result.total} onClick={()=>download(selections.length?selections:result.all,'apa')}>APA</button></div>
   {notice&&<div className="library-notice" role="status"><span aria-hidden="true">✓</span><p>{notice}</p><button onClick={()=>setNotice('')} aria-label="关闭提示">×</button></div>}
   {!ready?<Loading/>:result.error?<div className="library-empty error" role="alert"><span aria-hidden="true">!</span><h2>检索式需要调整</h2><p>{result.error}</p><button onClick={()=>change('query','CVT OR Flux')}>试用 CVT OR Flux</button></div>:!result.total?<div className="library-empty"><span aria-hidden="true">⌕</span><h2>{filters.favorites?'收藏中没有匹配文献':'没有找到匹配文献'}</h2><p>尝试删除一个 AND 条件、改用 OR、清除年份限制，或换用下列相关检索词。</p><div>{['Flux','CVT','超导','重费米子'].map(q=><button key={q} onClick={()=>{setFilters({...defaults,query:q});setInput(q)}}>{q}</button>)}</div><button className="empty-reset" onClick={reset}>清除筛选，查看全部文献</button></div>:<div className={pending?'result-list pending':'result-list'}>{result.items.map((p,index)=>{const related=similarPapers(p,papers);return <article key={p.id} className="literature-result" style={{animationDelay:`${Math.min(index,6)*45}ms`}}><div className="result-meta"><label><input type="checkbox" aria-label={`选择 ${p.title}`} checked={selected.includes(p.id)} onChange={()=>setSelected(prev=>prev.includes(p.id)?prev.filter(id=>id!==p.id):[...prev,p.id])}/>{p.year??'年份未收录'} · {typeLabels[p.type]??p.type}</label><span>{p.category}</span><button aria-pressed={favorites.includes(p.id)} aria-label={`${favorites.includes(p.id)?'取消收藏':'收藏'} ${p.title}`} onClick={()=>toggleFavorite(p.id)}>{favorites.includes(p.id)?'★ 已收藏':'☆ 收藏'}</button></div>
    <h2><a href={base+p.reportUrl}><Highlight text={p.title} terms={result.terms}/></a></h2><p className="result-authors"><b>主要作者</b><Highlight text={p.authors||'作者未收录'} terms={result.terms}/>{p.institutions&&<small><b>主要单位</b><Highlight text={p.institutions} terms={result.terms}/></small>}</p><p className="result-source"><b><Highlight text={p.journal} terms={result.terms}/></b> · {p.published||'发表日期未收录'}<span>{p.doi?<><em>DOI</em> <Highlight text={p.doi} terms={result.terms}/></>:'DOI 未收录'} · 收录于 {p.date}</span></p>
    <div className="result-keywords">{[p.material,...p.tags].slice(0,8).map((tag,i)=><button key={i} title="加入标签筛选" aria-pressed={selectedTags.includes(tag)} onClick={()=>toggleTag(tag)}><Highlight text={tag} terms={result.terms}/></button>)}</div>
    <p className="result-excerpt"><b>{p.abstract&&filters.field==='abstract'?'原始摘要':'简报分析'}：</b><Highlight text={excerpt(p.abstract&&filters.field==='abstract'?p.abstract:p.summary,result.terms)} terms={result.terms}/></p>
    <div className="result-quality"><span>{accessLevel(p)==='full'?'全文精读':accessLevel(p)==='si'?'补充材料精读':'摘要 / 访问受限'}</span><span>{p.openAccess===true?'开放获取':p.openAccess===false?'非开放获取':'OA状态未核验'}</span><span>被引：{p.citations===null?'未收录':p.citations}{p.citationDate?' · '+p.citationDate:''}</span></div>
    {p.conclusion&&<div className="result-conclusion"><span>CONCLUSION</span><b>这篇论文讲了什么故事</b><p><Highlight text={p.conclusion} terms={result.terms}/></p></div>}
    <details className="result-detail"><summary>查看摘要、阅读建议与相似文献</summary><div className="detail-grid"><div><p><b>生长 / 方法：</b>{p.method||'未收录'}</p><p><b>阅读范围：</b>{p.access}</p>{p.readingGuide&&<><p><b>先读：</b>{p.readingGuide.first}</p><p><b>判断重点：</b>{p.readingGuide.focus}</p><p><b>下一步：</b>{p.readingGuide.next}</p></>}{p.abstract&&<p><b>原始摘要：</b><Highlight text={p.abstract} terms={result.terms}/></p>}</div><aside><b>相似文献</b>{related.length?related.map(r=><a key={r.id} href={base+r.reportUrl}>{r.material}<small>{r.journal} · {r.year??'年份未知'}</small></a>):<p>暂无足够标签关联。</p>}</aside></div></details>
    <div className="result-actions"><a href={base+p.reportUrl}>阅读详解 →</a><a href={safeUrl(p.source)} target="_blank" rel="noreferrer">原文 ↗</a><button onClick={()=>copy(location.origin+base+p.reportUrl,'文献详情链接已复制。')}>分享</button><button onClick={()=>download([p],'bibtex')}>BibTeX</button><button onClick={()=>download([p],'ris')}>RIS</button><button onClick={()=>download([p],'apa')}>APA</button></div>
   </article>})}</div>}
   <nav className="library-pagination" aria-label="结果分页"><button disabled={result.page<=1} onClick={()=>change('page',result.page-1)}>← 上一页</button>{Array.from({length:result.pages},(_,i)=>i+1).filter(n=>n===1||n===result.pages||Math.abs(n-result.page)<2).map((n,i,arr)=><span key={n}>{i>0&&n-arr[i-1]>1&&<span>…</span>}<button aria-current={n===result.page?'page':undefined} onClick={()=>change('page',n)}>{n}</button></span>)}<button disabled={result.page>=result.pages} onClick={()=>change('page',result.page+1)}>下一页 →</button><label>每页<select value={filters.size} onChange={e=>change('size',+e.target.value)}>{[10,20,50].map(n=><option key={n}>{n}</option>)}</select></label></nav>
  </section></div>
  <details id="evidence-qa" className="library-evidence"><summary><span>ASK THE EVIDENCE</span>证据问答：追问生长参数、测量条件和结论依据</summary><p>从站内已整理段落检索并逐条列出来源；这是证据摘录，不会调用外部模型补写论文没有报告的参数。</p><form onSubmit={e=>{e.preventDefault();setAsked(question)}}><label htmlFor="research-question">具体科研问题</label><textarea id="research-question" rows={3} value={question} onChange={e=>setQuestion(e.target.value)} placeholder="例如：FePS₃ 的 CVT 生长温度和输运剂用量？"/><button disabled={!question.trim()}>查找证据 →</button></form>{asked&&<div aria-live="polite"><h2>与“{asked}”相关的证据</h2>{evidence.length?evidence.map((v,i)=><article key={v.p.id+v.s.title}><h3>{i+1}. {v.p.material} · {v.s.title}</h3><p><Highlight text={excerpt(v.s.text,v.terms,600)} terms={v.terms}/></p><a href={base+v.p.reportUrl}>查看上下文 →</a> · <a href={safeUrl(v.p.source)}>原文 ↗</a></article>):<p>暂无足够证据，请加入材料名、方法或参数名称。</p>}</div>}</details>
  <button className="back-to-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="返回顶部">↑</button>
  <p className="library-footnote">检索范围为本站已收录文献。历史与收藏保存在当前浏览器；Crossref、OpenAlex、PubMed 的实时接口结构已预留，启用前仍需配置服务端代理与速率限制。</p>
 </div>
}
