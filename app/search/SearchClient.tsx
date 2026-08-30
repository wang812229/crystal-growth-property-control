'use client';

import { FormEvent, useMemo, useState } from 'react';
import searchIndex from './search-index';

type Paper = (typeof searchIndex)[number];
type Evidence = { paper: Paper; sectionTitle: string; text: string; score: number };

const stopWords = new Set(['什么','哪些','哪篇','文章','论文','一下','请问','是否','是多少','怎么','如何','研究','结果']);
const expansions: Record<string,string[]> = {
  flux:['flux','self-flux','助熔剂','自助熔剂'],
  cvt:['cvt','化学气相输运','chemical vapor transport','输运剂'],
  生长:['生长','配比','温度','温程','助熔剂','输运剂','退火','czochralski','flux','cvt'],
  温度:['温度','温程','峰值','保温','降温'],
  磁性:['磁性','磁化','磁化率','反铁磁','magnetic','susceptibility'],
  超导:['超导','tc','hc2','superconduct'],
  量子振荡:['量子振荡','quantum oscillation','dingle','lifshitz','lk','频率','相位'],
  电阻:['电阻','电阻率','resistivity','rrr','输运'],
  缺陷:['缺陷','空位','位错','杂质','层错'],
};

function normalize(value:string){return value.normalize('NFKC').toLowerCase().replace(/₂/g,'2').replace(/₃/g,'3').replace(/₀/g,'0').replace(/₁/g,'1')}
function queryTerms(query:string){
  const normalized=normalize(query);
  const raw=normalized.match(/[a-z0-9µμ°+./-]+|[\u3400-\u9fff]+/g) ?? [];
  const terms=new Set<string>();
  for(const token of raw){
    if(stopWords.has(token)) continue;
    if(/[\u3400-\u9fff]/.test(token) && token.length>2){for(let i=0;i<token.length-1;i++) terms.add(token.slice(i,i+2))}
    else terms.add(token);
  }
  for(const [key,values] of Object.entries(expansions)) if(normalized.includes(key)) values.forEach(value=>terms.add(normalize(value)));
  return [...terms].filter(term=>term.length>1 || /[a-z0-9]/.test(term));
}
function occurrences(text:string,term:string){let count=0;let cursor=0;while((cursor=text.indexOf(term,cursor))!==-1){count++;cursor+=term.length}return count}
function paperText(paper:Paper){return normalize([paper.material,paper.title,paper.authors,paper.journal,paper.method,paper.rating,paper.access,...paper.sections.flatMap(section=>[section.title,section.text])].join(' '))}
function paperScore(paper:Paper,query:string){
  const terms=queryTerms(query); if(!terms.length) return 1;
  const identity=normalize([paper.material,paper.title,paper.method,paper.journal,paper.authors].join(' '));
  const body=paperText(paper); let score=0;
  const whole=normalize(query).trim(); if(whole.length>1 && body.includes(whole)) score+=35;
  for(const term of terms){score+=occurrences(identity,term)*8+Math.min(occurrences(body,term),8)}
  return score;
}
function sectionScore(paper:Paper,title:string,text:string,terms:string[]){
  const identity=normalize([paper.material,paper.title,paper.method,title].join(' '));
  const body=normalize(text); let score=0;
  for(const term of terms) score+=occurrences(identity,term)*9+Math.min(occurrences(body,term),10)*2;
  return score;
}
function excerpt(text:string,terms:string[],limit=230){
  const normalized=normalize(text); let start=0;
  const positions=terms.map(term=>normalized.indexOf(term)).filter(position=>position>=0);
  if(positions.length) start=Math.max(0,Math.min(...positions)-45);
  const value=text.slice(start,start+limit); return `${start>0?'…':''}${value}${start+limit<text.length?'…':''}`;
}

export default function SearchClient(){
  const [query,setQuery]=useState('');
  const [method,setMethod]=useState('全部方法');
  const [date,setDate]=useState('全部日期');
  const [question,setQuestion]=useState('');
  const [asked,setAsked]=useState('');
  const methods=useMemo(()=>['全部方法',...Array.from(new Set(searchIndex.map(paper=>paper.method)))],[]);
  const dates=useMemo(()=>['全部日期',...Array.from(new Set(searchIndex.map(paper=>paper.date)))],[]);
  const results=useMemo(()=>searchIndex.map(paper=>({paper,score:paperScore(paper,query)})).filter(item=>item.score>0&&(method==='全部方法'||item.paper.method===method)&&(date==='全部日期'||item.paper.date===date)).sort((a,b)=>b.score-a.score||b.paper.date.localeCompare(a.paper.date)),[query,method,date]);
  const answer=useMemo(()=>{
    if(!asked) return null;
    const terms=queryTerms(asked);
    const evidence:Evidence[]=searchIndex.flatMap(paper=>paper.sections.map(section=>({paper,sectionTitle:section.title,text:section.text,score:sectionScore(paper,section.title,section.text,terms)}))).filter(item=>item.score>0).sort((a,b)=>b.score-a.score).slice(0,4);
    if(!evidence.length) return {summary:'当前文献库中没有找到足够相关的证据。可以换用材料名称、Flux/CVT、生长温度、磁性、输运或量子振荡等关键词。',evidence:[] as Evidence[]};
    const sentences=evidence.flatMap(item=>item.text.split(/(?<=[。！？；])/).map(sentence=>({sentence,score:sectionScore(item.paper,item.sectionTitle,sentence,terms)}))).filter(item=>item.sentence.length>20).sort((a,b)=>b.score-a.score);
    const chosen:string[]=[]; for(const item of sentences){const cleaned=item.sentence.trim();if(!chosen.some(value=>value.includes(cleaned)||cleaned.includes(value))) chosen.push(cleaned);if(chosen.length===3)break}
    return {summary:chosen.join(' '),evidence};
  },[asked]);
  function submitQuestion(event:FormEvent){event.preventDefault();setAsked(question.trim())}
  const totalSections=searchIndex.reduce((sum,paper)=>sum+paper.sections.length,0);

  return <>
    <section className="search-hero"><div><p className="eyebrow">LITERATURE RETRIEVAL · EVIDENCE Q&amp;A</p><h1>检索文献，<br/><em>追问证据</em></h1><p>搜索覆盖题目、作者、材料、生长方法、实验参数、物性结果和局限性。问答只依据本站已精读内容，回答同步给出证据段落。</p></div><div className="search-stats"><div><b>{searchIndex.length}</b><span>篇论文</span></div><div><b>{dates.length-1}</b><span>期简报</span></div><div><b>{totalSections}</b><span>段证据</span></div></div></section>

    <section className="ask-lab"><div className="ask-copy"><p className="eyebrow">ASK THE ARCHIVE</p><h2>实时提问</h2><p>适合询问某种晶体如何生长、关键温区、测量条件、主要物性、证据强弱或不同论文之间的差异。</p></div><div className="ask-panel"><form onSubmit={submitQuestion}><label htmlFor="question">向本站文献库提问</label><div><textarea id="question" value={question} onChange={event=>setQuestion(event.target.value)} placeholder="例如：RuO₂ 的生长温度和复现风险是什么？" rows={3}/><button disabled={!question.trim()}>检索并回答</button></div></form><div className="question-samples">{['哪篇论文使用 Flux 生长？','CeNiC₂ 的临界压力和 Tc 是多少？','RuO₂ 生长参数有哪些矛盾？','哪些工作测量了量子振荡？'].map(sample=><button key={sample} onClick={()=>{setQuestion(sample);setAsked(sample)}}>{sample}</button>)}</div>{answer&&<div className="answer-box" aria-live="polite"><div className="answer-label"><span/> 基于 {answer.evidence.length} 条本站证据即时整理</div><h3>{asked}</h3><p>{answer.summary}</p>{answer.evidence.length>0&&<div className="evidence-list">{answer.evidence.map((item,index)=><article key={`${item.paper.title}-${item.sectionTitle}`}><span>证据 {index+1}</span><h4>{item.paper.material} · {item.sectionTitle}</h4><p>{excerpt(item.text,queryTerms(asked))}</p><div><a href={item.paper.reportUrl}>查看本站详解 →</a><a href={item.paper.source}>论文原文 ↗</a></div></article>)}</div>}<small>回答由浏览器端检索本站简报生成，不调用外部模型，不会把未收录信息补写成事实。</small></div>}</div></section>

    <section className="library-search"><div className="section-heading"><div><p className="eyebrow">FULL-TEXT SEARCH</p><h2>全文检索</h2></div><span className="status-pill">{results.length} 篇匹配</span></div><div className="search-controls"><label><span>关键词</span><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="材料、作者、Flux、CVT、温度、物性……"/></label><label><span>生长/研究方法</span><select value={method} onChange={event=>setMethod(event.target.value)}>{methods.map(value=><option key={value}>{value}</option>)}</select></label><label><span>简报日期</span><select value={date} onChange={event=>setDate(event.target.value)}>{dates.map(value=><option key={value}>{value}</option>)}</select></label></div><div className="search-results">{results.map(({paper})=>{const terms=queryTerms(query);const best=paper.sections.map(section=>({section,score:sectionScore(paper,section.title,section.text,terms)})).sort((a,b)=>b.score-a.score)[0]?.section??paper.sections[0];return <article key={`${paper.date}-${paper.title}`}><div className="result-top"><span>{paper.date} · 第 {paper.issue} 期</span><b>推荐 {paper.rating}</b></div><h3>{paper.material}</h3><h4>{paper.title}</h4><div className="result-tags"><span>{paper.method}</span><span>{paper.journal}</span><span>{paper.access.includes('全文')?'全文精读':'摘要/元数据'}</span></div><p><strong>{best.title}：</strong>{excerpt(best.text,terms,300)}</p><div className="result-links"><a href={paper.reportUrl}>站内详解 →</a><a href={paper.source}>原文 ↗</a></div></article>})}{!results.length&&<div className="empty-results"><b>没有找到匹配论文</b><p>尝试减少关键词，或取消方法和日期筛选。</p></div>}</div></section>
  </>;
}
