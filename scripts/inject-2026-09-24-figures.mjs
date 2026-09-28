import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputPath = path.join(process.cwd(), 'github-dist', 'reports', '2026-09-24', 'index.html');
const marker = '<section class="paper"';
const signature = 'data-report-figures="2026-09-24"';
let html = await readFile(outputPath, 'utf8');

if (!html.includes(signature)) {
  const position = html.indexOf(marker);
  if (position < 0) throw new Error(`Could not find paper marker in ${outputPath}`);
  const figures = `<section class="figures" id="figures" ${signature}>
  <p class="eyebrow">ORIGINAL EVIDENCE REDRAW</p><h2>本期原创图解</h2>
  <figure><figcaption><b>图1｜双层镍酸盐：氧处理—层间杂化—超导</b><small>根据 Nature Materials 正文摘要与 Supplementary Notes / Figs. S1–S12 重绘，并非论文原图</small></figcaption><img class="figure-img" src="./nickelate-evidence.svg" alt="双层镍酸盐层间杂化证据链"><p>谱学、结构与输运沿同一氧调控序列共变，封帽对照削弱PBCO自身导电解释；它仍不能把氧空位、应变和缺陷完全解耦。</p></figure>
  <figure class="dark-figure"><figcaption><b>图2｜菱方石墨烯：零电阻与有限电阻口袋</b><small>根据 Nature 正式版对应作者公开稿 arXiv:2607.28425 重绘，并非论文原图</small></figcaption><img class="figure-img" src="./graphene-phase-map.svg" alt="菱方石墨烯超导与异常金属相空间"><p>同器件连续栅调控显著降低样品差异，但有限电阻平台仍需排除电子过热、涡旋运动和空间不均匀。</p></figure>
  <figure><figcaption><b>图3｜MnBi₁.₇Sb₀.₃Te₄：生长与持久光生态</b><small>根据 arXiv:2609.27079 的 Methods 和公开数值重绘，并非论文原图</small></figcaption><img class="figure-img" src="./mbst-exciton.svg" alt="MnBiSbTe生长与时间分辨ARPES证据链"><p>900→601 °C生长温程与250 kHz trARPES条件共同决定证据边界；BVB稳定削弱表面光电压解释，但尚不等于直接测得宏观相干。</p></figure>
  </section>`;
  html = `${html.slice(0, position)}${figures}${html.slice(position)}`;
  await writeFile(outputPath, html, 'utf8');
}
console.log('Injected 2026-09-24 figures into GitHub Pages report.');
