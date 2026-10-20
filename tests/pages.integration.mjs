import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
const dir=new URL('../github-dist/',import.meta.url);
test('static search entry points to existing prefixed data, CSS and JS',async()=>{const html=await readFile(new URL('search/index.html',dir),'utf8');const base=html.match(/data-base="([^"]*)"/)?.[1]??'';const resources=[...html.matchAll(/(?:src|data-index|href)="([^"]+)"/g)].map(m=>m[1]).filter(v=>v.includes('/assets/'));assert(resources.length>=4);for(const url of resources){assert(url.startsWith(base+'/assets/'));await access(new URL(url.slice(base.length+1),dir))}assert(html.includes('noscript'));assert(html.includes('role="status"'));const js=await readFile(new URL('assets/search-ui/search.js',dir),'utf8');assert(!js.includes('react.development.js'))});
test('static index preserves all metadata and report anchors exist',async()=>{const catalog=JSON.parse(await readFile(new URL('assets/search-index.json',dir),'utf8'));assert(catalog.length>50);for(const p of catalog){const [path,anchor]=p.reportUrl.split('#');const html=await readFile(new URL(path.slice(1)+'index.html',dir),'utf8');assert(html.includes(`id="${anchor}"`));assert('abstract' in p);assert('citations' in p)}const latest=await readFile(new URL('reports/2026-10-16/index.html',dir),'utf8');assert(latest.includes('今日公告 3 / 前日补读 7'));assert(latest.includes('主文可访问 9 / 主文实读 9'));assert(latest.includes('audit.json'));assert(latest.includes('ruo2-thickness.svg'));});
test('homepage offers native expandable cards and quick search',async()=>{const html=await readFile(new URL('index.html',dir),'utf8');assert(html.includes('<details class="home-paper-card">')||html.includes('home-empty-state'));assert(html.includes('home-quick-search'));assert(html.includes('name="query"'));const css=await readFile(new URL('assets/library.css',dir),'utf8');assert(css.includes('prefers-reduced-motion'));assert(css.includes(':focus-visible'))});
test('reports ship the mobile reader and structured search index',async()=>{const html=await readFile(new URL('reports/2026-09-13/index.html',dir),'utf8');assert.match(html,/assets\/report-reader\.js/);const reader=await readFile(new URL('assets/report-reader.js',dir),'utf8');assert.match(reader,/30-SECOND STORY/);assert.match(reader,/下一炉建议/);const index=JSON.parse(await readFile(new URL('assets/search-index.json',dir),'utf8'));assert(index.every(p=>p.growthRecipe&&Array.isArray(p.evidenceSegments)&&p.evidenceProfile));});

test('research ideas have a hub, daily section, uncertainty and a complete export',async()=>{
 const hub=await readFile(new URL('ideas/index.html',dir),'utf8');const today=await readFile(new URL('reports/2026-10-15/index.html',dir),'utf8');const home=await readFile(new URL('index.html',dir),'utf8');
 assert(hub.includes('ptse2-isotope-cap-transport'));assert(hub.includes('不能再称为新方向'));assert(today.includes('id="research-ideas"'));assert(home.includes('新材料与下一步实验'));assert(hub.includes('同位素源切换滞后'));
 const data=JSON.parse(await readFile(new URL('research-ideas/2026-10-15.json',dir),'utf8'));assert.equal(data.ideas.length,2);assert(data.ideas.every(i=>i.falsifiers.length&&i.priorArt.length&&i.remainingChecks.length));
 const css=await readFile(new URL('assets/research-ideas.css',dir),'utf8');assert(css.includes(':focus-visible'));assert(css.includes('@media'));
});

test('three-day selections retain their date, reading levels, audit and quantitative figures',async()=>{
 const html=await readFile(new URL('reports/2026-10-17/index.html',dir),'utf8');
 assert(html.includes('三日回溯 6'));assert(!html.includes('今日公告 0 / 前日补读 0'));
 assert(html.includes('主文可访问 4 / 主文实读 4'));assert(html.includes('仅摘要 2'));
 for(const name of ['audit.json','crn-afm.svg','fev-domain.svg','ceru-gaps.svg'])await access(new URL('reports/2026-10-17/'+name,dir));
 const audit=JSON.parse(await readFile(new URL('reports/2026-10-17/audit.json',dir),'utf8'));
 assert.equal(audit.coverageComplete,false);assert.equal(audit.reading.length,6);
 assert(audit.reading.filter(p=>p.access.startsWith('全文精读')).every(p=>p.bodyChineseCharacters>=1500));
 const index=JSON.parse(await readFile(new URL('assets/search-index.json',dir),'utf8'));
 assert.equal(index.filter(p=>p.reportUrl.includes('/reports/2026-10-17/')).length,6);
});

test('October 18 separates measured refinements from the abstract-only growth simulation',async()=>{
 const page=await readFile(new URL('reports/2026-10-18/index.html',dir),'utf8');
 assert(page.includes('三日回溯 4'));assert(page.includes('主文可访问 3 / 主文实读 3'));assert(page.includes('仅摘要 1'));
 assert(page.includes('GaN'));assert(page.includes('数值'));assert(page.includes('尚未核实'));
 const audit=JSON.parse(await readFile(new URL('reports/2026-10-18/audit.json',dir),'utf8'));
 assert.equal(audit.reading.length,4);assert.equal(audit.coverageComplete,false);
 const reads=audit.reading.filter(p=>p.access.startsWith('全文精读'));assert.equal(reads.length,3);assert(reads.every(p=>p.bodyChineseCharacters>=1500));
 for(const file of ['fecr-compensation.svg','cscr-linewidth.svg','tb-moments.svg'])await access(new URL('reports/2026-10-18/'+file,dir));
 const index=JSON.parse(await readFile(new URL('assets/search-index.json',dir),'utf8'));
 assert.equal(index.filter(p=>p.reportUrl.includes('/reports/2026-10-18/')).length,4);
});

test('October 19 records the new arXiv batch and six actual full reads without relabeling older uploads',async()=>{
 const page=await readFile(new URL('reports/2026-10-19/index.html',dir),'utf8');
 assert(page.includes('今日公告 6'));assert(page.includes('主文可访问 6 / 主文实读 6'));assert(page.includes('仅摘要 0'));
 assert(page.includes('14或16日'));assert(page.includes('CC BY-NC-ND'));assert(page.includes('独立SI'));
 const audit=JSON.parse(await readFile(new URL('reports/2026-10-19/audit.json',dir),'utf8'));
 assert.equal(audit.reading.length,6);assert(audit.reading.every(p=>p.bodyChineseCharacters>=1500));
 const arxiv=audit.sources.find(s=>s.source==='arXiv cond-mat/new');assert.equal(arxiv.new,86);assert.equal(arxiv.cross,22);assert.equal(arxiv.pendingVersionDiff,80);
 assert.equal(audit.decisions.filter(d=>d.source==='arXiv'&&d.screenedLevel==='title-and-abstract').length,108);
 for(const f of ['xrd-mae.svg','inbi-gaps.svg','conb-xps.svg'])await access(new URL('reports/2026-10-19/'+f,dir));
 const index=JSON.parse(await readFile(new URL('assets/search-index.json',dir),'utf8'));
 assert.equal(index.filter(p=>p.reportUrl.includes('/reports/2026-10-19/')).length,6);
});

test('October 20 preserves a stale arXiv batch as unknown and two genuine journal full reads',async()=>{
 const page=await readFile(new URL('reports/2026-10-20/index.html',dir),'utf8');
 assert(page.includes('今日公告 2'));assert(page.includes('主文可访问 2 / 主文实读 2'));assert(page.includes('仅摘要 0'));
 assert(page.includes('批次'));assert(page.includes('待'));assert(page.includes('1.45 TW/cm²'));assert(page.includes('MOESM1'));
 const audit=JSON.parse(await readFile(new URL('reports/2026-10-20/audit.json',dir),'utf8'));
 assert.equal(audit.reading.length,2);assert(audit.reading.every(p=>p.bodyChineseCharacters>=1500));
 const arxiv=audit.sources.find(s=>s.source==='arXiv cond-mat/new');assert.equal(arxiv.date,'2026-10-19');assert.equal(arxiv.targetDate,'2026-10-20');assert.equal(arxiv.officialTodayHits,null);
 assert.equal(audit.coverageComplete,false);assert(audit.decisions.some(d=>d.decision==='related-backlog'));
 for(const f of ['rixs-energy-ranges.svg','hhg-exponents.svg'])await access(new URL('reports/2026-10-20/'+f,dir));
 const index=JSON.parse(await readFile(new URL('assets/search-index.json',dir),'utf8'));
 assert.equal(index.filter(p=>p.reportUrl.includes('/reports/2026-10-20/')).length,2);
});
