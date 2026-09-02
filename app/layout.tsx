import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase:new URL('https://crystal-growth-brief.wang812229.chatgpt.site'),
  title:'每日文献简报｜量子材料研究证据库',
  description:'每日追踪晶体生长和物性调控、超导、重费米子、磁性拓扑与二维量子材料研究。',
  openGraph:{title:'每日文献简报',description:'从论文全文到可执行实验建议的量子材料研究证据库',url:'/',siteName:'每日文献简报',locale:'zh_CN',type:'website',images:[{url:'/og.png',width:1728,height:972,alt:'每日文献简报'}]},
  twitter:{card:'summary_large_image',title:'每日文献简报',description:'量子材料研究证据库',images:['/og.png']}
};

export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}

