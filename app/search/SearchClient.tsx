'use client';
import {useEffect,useState} from 'react';
import type {Paper} from '../../lib/search';
import SearchLibrary,{Loading} from './SearchLibrary';
export default function SearchClient(){
 const [papers,setPapers]=useState<Paper[]|null>(null),[failed,setFailed]=useState(false),[attempt,setAttempt]=useState(0);
 useEffect(()=>{let cancelled=false;import('./search-index').then(m=>{if(!cancelled)setPapers(m.default as unknown as Paper[])}).catch(()=>{if(!cancelled)setFailed(true)});return()=>{cancelled=true}},[attempt]);
 if(failed)return <div className="research-library"><div className="library-empty error" role="alert"><span aria-hidden="true">!</span><h1>文献索引暂时无法载入</h1><p>网络连接或资源路径可能暂时不可用。你可以立即重试，已有简报内容不会受到影响。</p><button onClick={()=>{setFailed(false);setAttempt(n=>n+1)}}>重新载入索引</button></div></div>;
 return papers?<SearchLibrary papers={papers}/>:<div className="research-library"><Loading/></div>;
}
