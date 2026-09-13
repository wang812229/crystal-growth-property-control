'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';

export default function ReportReaderLoader(){
 const pathname=usePathname();
 useEffect(()=>{
  let script=document.querySelector<HTMLScriptElement>('script[data-report-reader]');
  if(!script){script=document.createElement('script');script.src='/report-reader.js';script.defer=true;script.dataset.reportReader='true';script.onload=()=>window.dispatchEvent(new Event('report-reader:init'));document.body.append(script)}
  else window.dispatchEvent(new Event('report-reader:init'));
 },[pathname]);
 return null;
}
