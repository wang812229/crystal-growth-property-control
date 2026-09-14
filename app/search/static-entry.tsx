import {createRoot} from 'react-dom/client';
import {useEffect,useState} from 'react';
import type {Paper} from '../../lib/search';
import SearchLibrary,{Loading} from './SearchLibrary';
import ResearchTools,{ToolsLoading} from '../research/ResearchTools';
const root=(document.getElementById('library-root')||document.getElementById('research-tools-root')||document.getElementById('home-personal-root'))!;
function App(){const [papers,setPapers]=useState<Paper[]|null>(null);const [error,setError]=useState(false);const [attempt,setAttempt]=useState(0);
 useEffect(()=>{const abort=new AbortController();fetch(root.dataset.index!,{signal:abort.signal}).then(r=>{if(!r.ok)throw new Error(String(r.status));return r.json()}).then(v=>{if(!Array.isArray(v))throw new Error('Invalid index');setPapers(v)}).catch(e=>{if(e.name!=='AbortError')setError(true)});return()=>abort.abort()},[attempt]);
 if(error)return <div className="research-library" role="alert"><h1>文献索引暂时无法载入</h1><p>请检查网络后重试。</p><button onClick={()=>{setError(false);setAttempt(n=>n+1)}}>重新载入</button></div>;
 if(!papers)return root.id==='library-root'?<div className="research-library"><Loading/></div>:<ToolsLoading/>;
 if(root.id==='research-tools-root')return <ResearchTools papers={papers} base={root.dataset.base||''} view={(root.dataset.view||'materials') as 'materials'|'workspace'|'weekly'}/>;
 if(root.id==='home-personal-root'){const latest=[...new Set(papers.map(p=>p.date))].sort().at(-1);return <div className="static-home-personal"><a href={(root.dataset.base||'')+'/workspace/'}><b>建立个人研究板块</b><span>设置材料、方法、测量、期刊和作者后，首页会优先显示当日匹配论文。</span><em>开始设置 →</em><small>最新索引 {latest}</small></a></div>}
 return <SearchLibrary papers={papers} base={root.dataset.base||''}/>;
}
createRoot(root).render(<App/>);
