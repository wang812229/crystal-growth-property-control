import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputPath = path.join(process.cwd(), 'github-dist', 'reports', '2026-09-23', 'index.html');
const marker = '<section class="paper"';
const signature = 'data-report-figures="2026-09-23"';

let html = await readFile(outputPath, 'utf8');

if (!html.includes(signature)) {
  const position = html.indexOf(marker);
  if (position < 0) throw new Error(`Could not find paper marker in ${outputPath}`);

  const figures = `<section class="figures" id="figures" ${signature}>
  <p class="eyebrow">ORIGINAL EVIDENCE REDRAW</p><h2>本期原创图解</h2>
  <figure><figcaption><b>图1｜Au纳米晶：群体动力学中的两条微观路径</b><small>根据 arXiv:2609.25549 的公开全文重绘，并非论文原图</small></figcaption><img class="figure-img" src="./au-5dstem.svg" alt="Au纳米晶连续生长与取向附着"><p>连续生长与并合可共享表面反应受限的平均动力学；面积突跳、取向突变和界面应变共同识别取向附着，仍需剂量和液池厚度对照。</p></figure>
  <figure class="dark-figure"><figcaption><b>图2｜TaRhTe₄：宽压力重构区通向超导</b><small>根据 arXiv:2609.25899 的公开全文重绘，并非论文原图</small></figcaption><img class="figure-img" src="./tarhte4-pressure.svg" alt="TaRhTe4压力重构与超导"><p>晶格畸变、Hall趋零和MR坍缩与超导同步演化，但d-OR结构尚未完全求解，高压Weyl拓扑也没有被直接验证。</p></figure>
  <figure><figcaption><b>图3｜ReO₃：菱方结构中的体超导窗口</b><small>根据 arXiv:2609.26628 与正式版数据重绘，并非论文原图</small></figcaption><img class="figure-img" src="./reo3-dome.svg" alt="ReO3高压结构与体超导窗口"><p>R-3c相中体超导达到Tc,onset约17.5 K；进一步降对称后耦合和超导减弱。结构边界仍受压媒与低温压力漂移影响。</p></figure>
  </section>`;

  html = `${html.slice(0, position)}${figures}${html.slice(position)}`;
  await writeFile(outputPath, html, 'utf8');
}

console.log('Injected 2026-09-23 figures into GitHub Pages report.');
