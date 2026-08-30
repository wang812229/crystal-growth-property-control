import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase:new URL('https://crystal-growth-brief.wang812229.chatgpt.site'),
  title:'晶体生长和物性调控｜晶体生长与物性文献简报',
  description:'每日追踪 Flux、CVT、arXiv 与重要期刊中的单晶生长及物性研究。',
  openGraph:{title:'晶体生长和物性调控',description:'晶体生长与物性文献简报',url:'/',siteName:'晶体生长和物性调控',locale:'zh_CN',type:'website',images:[{url:'/og.png',width:1728,height:972,alt:'晶体生长和物性调控：晶体生长与物性文献简报'}]},
  twitter:{card:'summary_large_image',title:'晶体生长和物性调控',description:'晶体生长与物性文献简报',images:['/og.png']}
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}

