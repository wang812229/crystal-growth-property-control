import test from 'node:test';import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {buildMaterialTracks,personalDigest,weeklyStats,normalizeExperiment,experimentsCsv} from '../lib/research-dashboard.mjs';
const p=(id,date,material,method,journal='arXiv:1')=>({id,date,published:date,material,method,journal,title:material+' pressure superconductivity',authors:'A',tags:[method],sections:[],conclusion:'结构与输运',access:'全文精读',rating:'S',type:journal.startsWith('arXiv')?'preprint':'article',category:'',abstract:'',summary:''});
test('material tracks merge formula aliases across issues',()=>{const tracks=buildMaterialTracks([p('a','2026-09-01','La3Ni2O7','Flux'),p('b','2026-09-02','双层镍酸盐薄膜','PLD')]);assert.equal(tracks[0].name,'La₃Ni₂O₇');assert.equal(tracks[0].items.length,2);assert.ok(tracks[0].stageCounts.control>0)});
test('personal digest prioritizes matched material and method',()=>{const rows=[p('a','2026-09-14','UTe2','CVT'),p('b','2026-09-14','RuCl3','Flux')];assert.equal(personalDigest(rows,{materials:['UTe2'],methods:['CVT']})[0].paper.id,'a')});
test('weekly stats use actual report dates and separate sources',()=>{const rows=[p('a','2026-09-14','UTe2','CVT'),p('b','2026-09-10','RuCl3','Flux','Physical Review B'),p('c','2026-09-01','old','MBE')];const s=weeklyStats(rows,'2026-09-14');assert.equal(s.total,2);assert.equal(s.formal,1);assert.equal(s.arxiv,1)});
test('experiment export preserves laboratory fields',()=>{const r=normalizeExperiment({sampleId:'S-1',material:'UTe2',sourceTemp:'1000 °C'});assert.equal(r.sampleId,'S-1');assert.match(experimentsCsv([r]),/1000 °C/)});

test('fortnight audit separates bibliographic leads, reading evidence and historical catalog',async()=>{
 const dir=new URL('../public/audits/2026-10-09_22/',import.meta.url);
 const rows=JSON.parse(await readFile(new URL('catalog.json',dir),'utf8'));
 const summary=JSON.parse(await readFile(new URL('summary.json',dir),'utf8'));
 assert.equal(new Set(rows.map(r=>r.doi)).size,rows.length);
 assert.equal(rows.length,summary.stats.totalUnique);
 assert.equal(rows.filter(r=>r.priority==='A').length,summary.stats.priorities.A);
 assert.equal(rows.filter(r=>r.abstractActuallyRead).length,summary.stats.abstractsActuallyRead);
 assert.equal(summary.stats.fullReadsInThisAudit,0);
 assert.equal(summary.coverageComplete,false);
 for(const r of rows){
  assert.ok(!Object.hasOwn(r,'abstract')&&!Object.hasOwn(r,'officialCardText'));
  if(r.priority==='A')assert.notEqual(r.dateScope,'deposit-only-date-unconfirmed');
  if(r.abstractActuallyRead)assert.equal(r.manualReview,true);
  if(r.publisherState.startsWith('已正式'))assert.ok(r.officialEvents.some(e=>e.event==='Published'));
 }
 const html=await readFile(new URL('index.html',dir),'utf8');
 assert.match(html,/不是一份已完成全文精读/);
 const code=await readFile(new URL('audit.js',dir),'utf8');
 assert.doesNotMatch(code,/\.innerHTML\s*=/);
 assert.match(code,/textContent/);
});
