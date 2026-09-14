'use client';
import {useEffect,useState} from 'react';
import type {Paper} from '../../lib/search';
import ResearchTools,{ToolsLoading} from './ResearchTools';
export default function ResearchToolsClient({view}:{view:'materials'|'workspace'|'weekly'}){const [papers,setPapers]=useState<Paper[]|null>(null),[failed,setFailed]=useState(false);useEffect(()=>{import('../search/search-index').then(m=>setPapers(m.default as unknown as Paper[])).catch(()=>setFailed(true))},[]);if(failed)return <main className="research-tools"><div className="tool-empty"><h1>研究数据暂时无法载入</h1><p>已有实验记录仍保存在当前浏览器。请刷新页面重试。</p></div></main>;return papers?<ResearchTools papers={papers} view={view}/>:<ToolsLoading/>}
