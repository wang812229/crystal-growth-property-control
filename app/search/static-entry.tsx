import {createRoot} from 'react-dom/client';
import {useEffect,useState} from 'react';
import type {Paper} from '../../lib/search';
import SearchLibrary,{Loading} from './SearchLibrary';
const root=document.getElementById('library-root')!;
function App(){const [papers,setPapers]=useState<Paper[]|null>(null);const [error,setError]=useState(false);const [attempt,setAttempt]=useState(0);
 useEffect(()=>{const abort=new AbortController();fetch(root.dataset.index!,{signal:abort.signal}).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json()}).then(v=>{if(!Array.isArray(v))throw new Error('Invalid index');setPapers(v)}).catch(e=>{if(e.name!=='AbortError')setError(true)});return()=>abort.abort()},[attempt]);
 if(error)return <div className="research-library" role="alert"><h1>文献索引暂时无法载入</h1><p>请检查网络后重试。</p><button onClick={()=>{setError(false);setAttempt(n=>n+1)}}>重新载入</button></div>;
 return papers?<SearchLibrary papers={papers} base={root.dataset.base||''}/>:<div className="research-library"><Loading/></div>;
}
createRoot(root).render(<App/>);
