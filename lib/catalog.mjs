// The source abstract and editorial review are deliberately separate fields.
import {buildEvidenceSegments, evidenceProfile, extractGrowthRecipe} from './research-features.mjs';

export function buildCatalog(reports, bibliography={}) {
 const found=new Map();
 for(const report of [...reports].sort((a,b)=>b.date.localeCompare(a.date)))for(const [i,p] of report.papers.entries()){
  const source=p.doi||p.source||'';
  const id=source.replace(/^https?:\/\/(?:dx\.)?doi.org\//i,'doi:').replace(/^https?:\/\/arxiv.org\/(?:abs|pdf)\//i,'arxiv:').replace(/^(arxiv:.*)v\d+(?:\.pdf)?$/,'$1').toLowerCase()||`${report.date}:${i}`;
  if(found.has(id))continue;
  const metadata=bibliography[source.replace(/^https?:\/\/(?:dx\.)?doi.org\//i,'').toLowerCase()]||{};
  const rawDate=p.publicationDate||p.date||'';
  const published=metadata.published||rawDate.match(/\d{4}-\d{2}-\d{2}/)?.[0]||'';
  const year=metadata.year||Number(rawDate.match(/\b(?:19|20)\d{2}\b/)?.[0]||String(p.journal||'').match(/\b(?:19|20)\d{2}\b/)?.[0])||null;
  const doi=source.replace(/^https?:\/\/(?:dx\.)?doi.org\//i,'');
  const hasDoi=/^10\.\d{4,9}\//.test(doi);
  const openAccess=typeof p.openAccess==='boolean'?p.openAccess:typeof metadata.openAccess==='boolean'?metadata.openAccess:/^https?:\/\/arxiv.org/i.test(source)?true:null;
  const base={id,title:p.title,authors:p.authors||'',institutions:p.institutions||'',journal:p.journal||'',material:p.material||'',method:p.method||'',category:p.category||'未分类',tags:p.tags||p.keywords||[],abstract:typeof p.abstract==='string'?p.abstract:metadata.abstract||'',conclusion:p.conclusion||'',summary:p.sections.map(s=>s.title+'：'+s.text).join('\n'),year,published,date:report.date,type:p.documentType||(/^https?:\/\/arxiv.org/.test(source)?'preprint':'article'),citations:Number.isInteger(p.citationCount)&&p.citationCount>=0?p.citationCount:metadata.citationCount??null,citationDate:p.citationUpdatedAt||metadata.retrievedAt?.slice(0,10)||'',source,doi:hasDoi?doi:'',openAccess,dataSource:metadata.provider||(/^https?:\/\/arxiv.org/i.test(source)?'arXiv':'站内简报'),fullText:p.fullText||source,reportUrl:`/reports/${report.date}/#paper-${i+1}`,access:p.access||'',rating:p.rating||'',sections:p.sections,readingGuide:p.readingGuide||null};
  const growthRecipe=extractGrowthRecipe(base);const evidenceSegments=buildEvidenceSegments(base);
  found.set(id,{...base,growthRecipe,evidenceSegments,evidenceProfile:evidenceProfile({...base,growthRecipe})});
 }
 return [...found.values()];
}
