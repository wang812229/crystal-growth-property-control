// Public Crossref metadata only. Failure preserves the previous verified record.
import {readFile,readdir,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root=new URL('../',import.meta.url),target=new URL('content/bibliography.json',root);
let cache={};try{cache=JSON.parse(await readFile(target,'utf8'))}catch{}
const dir=new URL('content/reports/',root);const reports=await Promise.all((await readdir(dir)).filter(f=>f.endsWith('.json')).map(async f=>JSON.parse(await readFile(new URL(f,dir),'utf8'))));
const dois=[...new Set(reports.flatMap(r=>r.papers.map(p=>(p.doi||'').replace(/^https?:\/\/(?:dx\.)?doi.org\//i,''))).filter(d=>/^10\.\d{4,9}\//.test(d)))];
const pending=dois.filter(d=>!cache[d.toLowerCase()]||Date.now()-Date.parse(cache[d.toLowerCase()].retrievedAt)>7*86400000);let success=0,failed=0;
const plain=text=>String(text||'').replace(/<[^>]*>/g,' ').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
async function worker(){for(let doi;(doi=pending.shift());){try{
 const response=await fetch('https://api.crossref.org/works/'+encodeURIComponent(doi),{headers:{'User-Agent':'DailyLiteratureBrief/1.0 (public bibliography enrichment)'},signal:AbortSignal.timeout(12000)});if(!response.ok)throw new Error(String(response.status));const {message:m}=await response.json();if(m.DOI?.toLowerCase()!==doi.toLowerCase())throw new Error('DOI mismatch');
 const parts=(m['published-online']||m.published||m['published-print'])?.['date-parts']?.[0]||[];
 cache[doi.toLowerCase()]={retrievedAt:new Date().toISOString(),provider:'Crossref',url:'https://api.crossref.org/works/'+encodeURIComponent(doi),abstract:plain(m.abstract),citationCount:Number.isInteger(m['is-referenced-by-count'])?m['is-referenced-by-count']:null,year:parts[0]||null,published:parts.length===3?parts.map((v,i)=>i===0?v:String(v).padStart(2,'0')).join('-'):'',type:m.type==='journal-article'?'article':'other'};success++;
 }catch{failed++}await new Promise(r=>setTimeout(r,500))}}
await Promise.all([worker(),worker(),worker()]);await writeFile(target,JSON.stringify(cache,null,2)+'\n');console.log(`Crossref 元数据：新增/刷新 ${success}，暂不可用 ${failed}，缓存 ${Object.keys(cache).length}。${fileURLToPath(target)}`);
