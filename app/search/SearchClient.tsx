'use client';
import {useEffect,useState} from 'react';
import type {Paper} from '../../lib/search';
import SearchLibrary,{Loading} from './SearchLibrary';
export default function SearchClient(){
 const [papers,setPapers]=useState<Paper[]|null>(null),[failed,setFailed]=useState(false),[attempt,setAttempt]=useState(0);
 useEffect(()=>{let cancelled=false;import('./search-index').then(m=>{if(!cancelled)setPapers(m.default as unknown as Paper[])}).catch(()=>{if(!cancelled)setFailed(true)});return()=>{cancelled=true}},[attempt]);
 if(failed)return <div className="research-library" role="alert"><h1>索引暂时无法载入</h1><button onClick={()=>{setFailed(false);setAttempt(n=>n+1)}}>重新载入</button></div>;
 return papers?<SearchLibrary papers={papers}/>:<div className="research-library"><Loading/></div>;
}
