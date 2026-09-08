export type LiteratureProvider='crossref'|'openalex'|'pubmed';
export type ProviderQuery={query:string;fromYear?:number;toYear?:number;page?:number;size?:number};
export type ProviderResult={id:string;title:string;authors:string[];journal:string;year:number|null;doi:string;url:string;citations:number|null;openAccess:boolean|null;provider:LiteratureProvider};

export const providerConfig={
 crossref:{label:'Crossref',endpoint:'https://api.crossref.org/works',requiresServerProxy:false},
 openalex:{label:'OpenAlex',endpoint:'https://api.openalex.org/works',requiresServerProxy:false},
 pubmed:{label:'PubMed',endpoint:'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi',requiresServerProxy:true},
} as const;

export function providerUrl(provider:LiteratureProvider,input:ProviderQuery){
 const q=input.query.trim(),page=Math.max(1,input.page||1),size=Math.min(100,Math.max(1,input.size||20));
 if(provider==='crossref'){const u=new URL(providerConfig.crossref.endpoint);u.searchParams.set('query',q);u.searchParams.set('rows',String(size));u.searchParams.set('offset',String((page-1)*size));const dates=[input.fromYear&&`from-pub-date:${input.fromYear}-01-01`,input.toYear&&`until-pub-date:${input.toYear}-12-31`].filter(Boolean);if(dates.length)u.searchParams.set('filter',dates.join(','));return u.toString()}
 if(provider==='openalex'){const u=new URL(providerConfig.openalex.endpoint);u.searchParams.set('search',q);u.searchParams.set('page',String(page));u.searchParams.set('per-page',String(size));const filters=[input.fromYear&&`from_publication_date:${input.fromYear}-01-01`,input.toYear&&`to_publication_date:${input.toYear}-12-31`].filter(Boolean);if(filters.length)u.searchParams.set('filter',filters.join(','));return u.toString()}
 const u=new URL(providerConfig.pubmed.endpoint);u.searchParams.set('db','pubmed');u.searchParams.set('retmode','json');u.searchParams.set('retmax',String(size));u.searchParams.set('retstart',String((page-1)*size));u.searchParams.set('term',q+[input.fromYear&&`${input.fromYear}[PDAT]`,input.toYear&&`${input.toYear}[PDAT]`].filter(Boolean).map(v=>' AND '+v).join(''));return u.toString();
}

// Production wiring should call these URLs from a server route, normalize provider
// responses into ProviderResult, cache them, and merge by DOI. The browser-only
// demo deliberately does not make live third-party requests or expose API keys.
