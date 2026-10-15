const text = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const statuses = new Set(['not-found-in-scope', 'needs-review']);
const label = status => status === 'not-found-in-scope' ? '限定检索未见直接报道 · 非首创证明' : '待进一步查新 · 暂不立项';
const safeUrl = value => { try { return new URL(value).protocol === 'https:'; } catch { return false; } };

export const researchIdeasNotice = '以下为研究假设，不是论文结论、已合成新材料或已完成计算。未检出不等于不存在；本站不保证“全球首次”，查新不足的候选不作为已获新颖性确认的课题。';

export function validateResearchIdeas(bundle) {
  if (!bundle || bundle.schemaVersion !== 1 || !/^\d{4}-\d{2}-\d{2}/.test(bundle.reviewedAt) || !bundle.scope?.trim() || !Array.isArray(bundle.limitations) || !Array.isArray(bundle.ideas)) throw new Error('研究设想缺少日期、检索范围或限制');
  const seen = new Set();
  for (const idea of bundle.ideas) {
    if (!/^[a-z0-9-]+$/.test(idea.id) || seen.has(idea.id)) throw new Error('研究设想 ID 无效或重复');
    seen.add(idea.id);
    if (!statuses.has(idea.status) || !['material', 'measurement'].includes(idea.kind)) throw new Error('研究设想不能使用未经证明的首创标签');
    for (const key of ['title','material','evidenceLevel','question','prediction','basis','difference','feasibility','risks','nextStep']) if (typeof idea[key] !== 'string' || !idea[key].trim()) throw new Error(`研究设想缺少 ${key}`);
    for (const key of ['plan','controls','falsifiers','queries','remainingChecks','priorArt']) if (!Array.isArray(idea[key]) || !idea[key].length) throw new Error(`研究设想缺少 ${key}`);
    for (const prior of idea.priorArt) if (!safeUrl(prior.url) || !prior.title || !prior.overlap || !prior.access) throw new Error('研究设想必须提供可核对的既有工作和阅读范围');
    if (!Number.isInteger(idea.paperIndex) || idea.paperIndex < 1) throw new Error('研究设想必须关联本期论文');
  }
  for (const prior of bundle.rejected ?? []) if (!prior.title || !prior.reason || !safeUrl(prior.url)) throw new Error('排除记录缺少来源');
  return bundle;
}

export function buildResearchIdeas(reports) {
  return [...reports].filter(r => r.researchIdeas).sort((a,b) => b.date.localeCompare(a.date)).map(r => {
    const bundle = validateResearchIdeas(r.researchIdeas);
    if (bundle.ideas.some(idea => idea.paperIndex > r.papers.length)) throw new Error('研究设想关联论文不存在');
    return {date:r.date, ...bundle};
  });
}

export function renderResearchIdeas(bundle, date, {basePath='', compact=false, sectionId='research-ideas'}={}) {
  if (!bundle) return '';
  validateResearchIdeas(bundle);
  const prefix = basePath.replace(/\/$/,'');
  const list = values => `<ul>${values.map(v=>`<li>${text(v)}</li>`).join('')}</ul>`;
  const cards = bundle.ideas.map(idea => {
    const heading = `<div class="idea-kicker"><span>${idea.kind==='material'?'新材料候选':'新测量候选'}</span><b>${text(label(idea.status))}</b></div><h3>${text(idea.title)}</h3><p class="idea-material">${text(idea.material)} · ${text(idea.evidenceLevel)}</p><p>${text(idea.question)}</p>`;
    if (compact) return `<article class="idea-card">${heading}<a class="idea-link" href="${prefix}/ideas/#${text(date+'-'+idea.id)}">查看查新依据与实验方案 →</a></article>`;
    return `<article class="idea-card" id="${text(date+'-'+idea.id)}">${heading}<p><a href="${prefix}/reports/${text(date)}/#paper-${idea.paperIndex}">关联${text(date)}简报第${idea.paperIndex}篇 →</a></p><h4>可被证伪的预测</h4><p>${text(idea.prediction)}</p><h4>推理依据</h4><p>${text(idea.basis)}</p><h4>与已知工作的具体差别</h4><p>${text(idea.difference)}</p><details><summary>展开既有工作、查新边界与完整实验方案</summary><h4>最近的已知工作</h4><div class="idea-table-wrap"><table><thead><tr><th>可核对来源</th><th>已做内容及重叠</th><th>实际核对范围</th></tr></thead><tbody>${idea.priorArt.map(p=>`<tr><td><a href="${text(p.url)}" target="_blank" rel="noopener noreferrer">${text(p.title)} ↗</a></td><td>${text(p.overlap)}</td><td>${text(p.access)}</td></tr>`).join('')}</tbody></table></div><h4>验证路线：先筛选再测量</h4>${list(idea.plan)}<h4>必须保留的对照</h4>${list(idea.controls)}<h4>哪些结果会推翻或暂停该方向</h4>${list(idea.falsifiers)}<h4>设备、成本与可行性</h4><p>${text(idea.feasibility)}</p><h4>风险与未知</h4><p>${text(idea.risks)}</p><h4>最小下一步</h4><p>${text(idea.nextStep)}</p><h4>本轮检索式</h4>${list(idea.queries)}<h4>尚未完成的查新</h4>${list(idea.remainingChecks)}</details></article>`;
  }).join('');
  return `<section class="research-ideas" id="${text(sectionId)}"><div class="ideas-heading"><p class="eyebrow">RESEARCH HYPOTHESES · ${text(date)}</p><h2>新材料与下一步实验</h2><p class="ideas-notice">${text(researchIdeasNotice)}</p><p>核查日期：${text(bundle.reviewedAt)} · ${bundle.ideas.length}个候选（不计入论文收录数）</p></div>${compact?'':`<p>${text(bundle.scope)}</p>${list(bundle.limitations)}`}<div class="ideas-grid">${cards||'<p>本期暂无通过最低证据要求的研究设想；不强行凑方向。</p>'}</div>${compact?`<p><a class="idea-link" href="${prefix}/ideas/">全部研究设想与查新记录 →</a></p>`:`<details class="ideas-rejected"><summary>已排除：这些不能再称为新方向</summary>${(bundle.rejected??[]).map(p=>`<p><a href="${text(p.url)}" target="_blank" rel="noopener noreferrer">${text(p.title)}</a>：${text(p.reason)}</p>`).join('')}</details><p><a class="idea-link" href="${prefix}/research-ideas/${text(date)}.json" download>导出本期研究设想与查新记录（JSON）</a></p>`}</section>`;
}
