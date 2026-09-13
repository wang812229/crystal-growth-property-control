(()=>{const init=()=>{
  const report=document.querySelector('.report-page,.report-layout');
  const papers=[...document.querySelectorAll('.paper-detail,.paper')];
  if(!report||!papers.length||report.dataset.readerReady)return;report.dataset.readerReady='true';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const plain=el=>(el?.textContent||'').replace(/\s+/g,' ').trim();
  const findParagraph=(paper,re)=>{
    const heads=[...paper.querySelectorAll('h3')];const head=heads.find(h=>re.test(plain(h)));
    return plain(head?.nextElementSibling)||'';
  };
  const classify=text=>/拟合|模型|计算|DFT/i.test(text)?'模型拟合':/作者|推断|归因|暗示/i.test(text)?'作者推断':/本简报|本站|局限|证据边界/i.test(text)?'本站判断':'直接观察';
  const progress=document.createElement('div');progress.className='reader-progress';progress.innerHTML='<i></i>';document.body.append(progress);
  const button=document.createElement('button');button.className='toc-fab';button.type='button';button.setAttribute('aria-expanded','false');button.innerHTML='<span>☰</span> 目录';document.body.append(button);
  const overlay=document.createElement('button');overlay.className='toc-overlay';overlay.type='button';overlay.setAttribute('aria-label','关闭目录');document.body.append(overlay);
  const drawer=document.createElement('aside');drawer.className='mobile-toc-drawer';drawer.setAttribute('aria-label','移动端文章目录');drawer.setAttribute('aria-hidden','true');
  drawer.innerHTML=`<div class="drawer-head"><div><small>READING NAVIGATOR</small><b>本期目录</b></div><button type="button" aria-label="关闭目录">×</button></div><div class="drawer-meter"><i></i></div><p class="drawer-position">准备阅读</p><nav class="drawer-papers"></nav><div class="drawer-sections"><b>当前论文章节</b><nav></nav></div><div class="drawer-switch"><button type="button" data-direction="-1">← 上一篇</button><button type="button" data-direction="1">下一篇 →</button></div>`;
  document.body.append(drawer);
  const paperNav=drawer.querySelector('.drawer-papers'),sectionNav=drawer.querySelector('.drawer-sections nav'),position=drawer.querySelector('.drawer-position');
  const modeLabels={quick:'30 秒速览',experiment:'实验人员模式',full:'完整证据链'};
  let current=0;
  papers.forEach((paper,index)=>{
    if(!paper.id)paper.id=`paper-${index+1}`;
    const title=plain(paper.querySelector('h2'))||`论文 ${index+1}`;
    const allText=plain(paper);
    const conclusion=plain(paper.querySelector('.paper-conclusion p'))||findParagraph(paper,/结论|conclusion|故事/i)||'本站尚未提取独立 Conclusion，请进入完整证据链查看。';
    const metrics=[...new Set((allText.match(/(?:约|~|≈|>|<)?\s*\d+(?:\.\d+)?\s*(?:K|GPa|MPa|T|meV|eV|nm|μm|µm|mm|cm|°C|℃|%|h|天|mK|cm[⁻−-]?\d|Ω[^，。； ]*)/gi)||[]).map(x=>x.trim()))].slice(0,3);
    const limitation=findParagraph(paper,/局限|边界|最弱|替代解释|可复现/i)||'未形成独立局限段；请在完整证据链中核对“正文未报告”项与替代解释。';
    const originalNodes=[...paper.children].filter(node=>node!==paper.querySelector('.paper-kicker')&&node!==paper.querySelector('.paper-head')&&node!==paper.querySelector('h2'));
    const full=document.createElement('div');full.className='paper-mode-panel paper-full-panel';full.dataset.mode='full';originalNodes.forEach(node=>full.append(node));
    const toolbar=document.createElement('div');toolbar.className='reading-mode-tabs';toolbar.setAttribute('role','tablist');toolbar.setAttribute('aria-label','阅读模式');
    toolbar.innerHTML=Object.entries(modeLabels).map(([key,label])=>`<button type="button" role="tab" data-mode="${key}" aria-selected="${key==='quick'}">${label}</button>`).join('');
    const quick=document.createElement('div');quick.className='paper-mode-panel quick-panel';quick.dataset.mode='quick';
    quick.innerHTML=`<div class="quick-story"><span>30-SECOND STORY</span><h3>这篇论文讲了什么</h3><p>${esc(conclusion)}</p></div><div class="quick-metrics">${(metrics.length?metrics:['关键数据需进入全文核对']).map((m,i)=>`<div><small>CORE ${i+1}</small><b>${esc(m)}</b></div>`).join('')}</div><div class="quick-limit"><b>最大局限</b><p>${esc(limitation)}</p></div>`;
    const experimental=document.createElement('div');experimental.className='paper-mode-panel experiment-panel';experimental.dataset.mode='experiment';
    const fields=[['方法',plain(full.querySelector('.meta-item:nth-child(3) b,.meta div:nth-child(3)'))||findParagraph(full,/生长|方法/i)],['温度窗口',(allText.match(/[^。；]{0,30}\d+(?:\.\d+)?\s*(?:°C|℃|K)[^。；]{0,30}/)||[])[0]],['配比 / 纯度',findParagraph(full,/样品|生长|制备/i)],['后处理',((allText.match(/[^。；]{0,30}(?:离心|淬火|退火|anneal|quench)[^。；]{0,45}/i)||[])[0])],['晶体尺寸',((allText.match(/[^。；]{0,25}\d+(?:\.\d+)?\s*(?:×\s*\d+(?:\.\d+)?\s*){0,2}(?:mm|μm|µm|nm|cm)[^。；]{0,20}/i)||[])[0])],['质量指标',((allText.match(/[^。；]{0,25}(?:RRR|迁移率|摇摆曲线|XRD|EDS|TEM)[^。；]{0,60}/i)||[])[0])]];
    const reported=fields.filter(([,v])=>v).length;
    const probes=['XRD','EDS','WDS','TEM','NMR','STM','ARPES','Raman','比热','输运','磁化'].filter(x=>new RegExp(x,'i').test(allText));
    const access=/全文精读/.test(allText)?(/补充材料|\bSI\b/i.test(allText)?'正文 + Methods + SI':'正文 + Methods'):'摘要 / 元数据';
    const certainty=/摘要|元数据/.test(access)?'推测':/局限|仍需|不能唯一|替代解释/.test(allText)?'中等':'强';
    experimental.innerHTML=`<div class="evidence-dashboard"><div><small>全文状态</small><b>${esc(access)}</b></div><div><small>样品可信度</small><b>${esc(probes.slice(0,4).join('、')||'信息不足')}</b></div><div><small>生长可复现度</small><b>${reported}/6 项自动提取</b></div><div><small>物性证据</small><b>${probes.length>=3?'多探针互证':probes.length===2?'双探针支持':'需补强'}</b></div><div><small>结论确定性</small><b class="certainty-${certainty}">${certainty}</b></div></div><div class="recipe-grid">${fields.map(([k,v])=>`<div><small>${esc(k)}</small><p>${esc(v||'正文未报告 / 未自动提取')}</p></div>`).join('')}</div><div class="evidence-legend"><span data-evidence="observe">直接观察</span><span data-evidence="fit">模型拟合</span><span data-evidence="author">作者推断</span><span data-evidence="editor">本站判断</span></div><div class="experiment-sections"></div><div class="furnace-actions"><button type="button">导出“下一炉建议” Markdown</button><p>导出内容会明确标出缺失字段，避免把经验值当成论文参数。</p></div>`;
    const sectionBox=experimental.querySelector('.experiment-sections');
    [...full.querySelectorAll('h3')].filter(h=>/生长|样品|结构|质量|测量|物性|复现|证据|局限|方法/i.test(plain(h))).slice(0,6).forEach(h=>{const block=document.createElement('details');const text=plain(h.nextElementSibling);block.innerHTML=`<summary><span data-evidence="${classify(plain(h)+' '+text)==='直接观察'?'observe':classify(plain(h)+' '+text)==='模型拟合'?'fit':classify(plain(h)+' '+text)==='作者推断'?'author':'editor'}">${classify(plain(h)+' '+text)}</span>${esc(plain(h))}</summary><p>${esc(text)}</p>`;sectionBox.append(block)});
    paper.append(toolbar,quick,experimental,full);
    paper.dataset.readingMode='quick';
    toolbar.addEventListener('click',event=>{const tab=event.target.closest('[data-mode]');if(!tab)return;paper.dataset.readingMode=tab.dataset.mode;toolbar.querySelectorAll('[data-mode]').forEach(el=>el.setAttribute('aria-selected',String(el===tab)));});
    experimental.querySelector('.furnace-actions button').addEventListener('click',()=>{
      const lines=[`# 下一炉建议｜${title}`,...fields.map(([k,v])=>`- [ ] ${k}：${v||'正文未报告，先查 Methods / SI 或联系作者'}`),'- [ ] 必须记录：批次号、炉位、装料质量、安瓿内径、真空度/气氛、实际成分','- [ ] 放行顺序：结构/成分 → 基础输运/磁化/比热 → 关键场温区精扫','- [ ] 风险：自动提取结果仅作导航，开炉前必须回到原文核对。'];
      const blob=new Blob([lines.join('\n')],{type:'text/markdown;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`next-furnace-${paper.id}.md`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
    });
    const link=document.createElement('a');link.href=`#${paper.id}`;link.dataset.paperIndex=String(index);link.innerHTML=`<span>${String(index+1).padStart(2,'0')}</span>${esc(title)}`;paperNav.append(link);
  });
  function updateDrawer(index){current=Math.max(0,Math.min(index,papers.length-1));paperNav.querySelectorAll('a').forEach((a,i)=>a.classList.toggle('active',i===current));const paper=papers[current];position.textContent=`正在阅读 ${String(current+1).padStart(2,'0')} / ${String(papers.length).padStart(2,'0')}`;sectionNav.innerHTML='';[...paper.querySelectorAll('.paper-full-panel h3')].forEach((h,i)=>{if(!h.id)h.id=`${paper.id}-section-${i+1}`;const a=document.createElement('a');a.href=`#${h.id}`;a.textContent=plain(h);sectionNav.append(a)});drawer.querySelectorAll('[data-direction]').forEach(btn=>btn.disabled=(btn.dataset.direction==='-1'&&current===0)||(btn.dataset.direction==='1'&&current===papers.length-1));}
  function openDrawer(open){drawer.classList.toggle('open',open);overlay.classList.toggle('open',open);drawer.setAttribute('aria-hidden',String(!open));button.setAttribute('aria-expanded',String(open));if(open)drawer.querySelector('.drawer-head button').focus();else button.focus();}
  button.addEventListener('click',()=>openDrawer(true));overlay.addEventListener('click',()=>openDrawer(false));drawer.querySelector('.drawer-head button').addEventListener('click',()=>openDrawer(false));drawer.addEventListener('click',e=>{const a=e.target.closest('a');if(a)setTimeout(()=>openDrawer(false),100)});drawer.querySelector('.drawer-switch').addEventListener('click',e=>{const b=e.target.closest('[data-direction]');if(!b)return;const next=current+Number(b.dataset.direction);papers[next]?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});updateDrawer(next)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&drawer.classList.contains('open'))openDrawer(false)});
  const observer=new IntersectionObserver(entries=>{const hit=entries.filter(x=>x.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(hit)updateDrawer(papers.indexOf(hit.target))},{rootMargin:'-20% 0px -62%',threshold:[0,.1,.35]});papers.forEach(p=>observer.observe(p));
  const updateProgress=()=>{const doc=document.documentElement,max=doc.scrollHeight-innerHeight,value=max>0?Math.min(1,scrollY/max):0;progress.firstElementChild.style.width=`${value*100}%`;drawer.querySelector('.drawer-meter i').style.width=`${value*100}%`;};addEventListener('scroll',updateProgress,{passive:true});updateProgress();updateDrawer(0);
};window.addEventListener('report-reader:init',init);init()})();
