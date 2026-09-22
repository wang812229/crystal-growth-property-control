import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputPath = path.join(process.cwd(), 'github-dist', 'reports', '2026-09-22', 'index.html');
const marker = '<section class="paper"';
const signature = 'data-report-figures="2026-09-22"';

let html = await readFile(outputPath, 'utf8');

if (!html.includes(signature)) {
  const position = html.indexOf(marker);
  if (position < 0) throw new Error(`Could not find paper marker in ${outputPath}`);

  const figures = `<section class="figures" id="figures" ${signature}>
  <p class="eyebrow">ORIGINAL EVIDENCE REDRAW</p><h2>本期原创图解</h2>
  <figure><figcaption><b>图1｜TbCuAs₂：生长—质量—低温有序证据链</b><small>根据 arXiv:2609.22589 的 Methods 与结果重绘，并非论文原图</small></figcaption><img class="figure-img" src="./tbcuas2-evidence.svg" alt="TbCuAs2的助熔剂生长与低温磁性证据链"><p>助熔剂配比和温程决定样品质量；结构、成分与低温测量共同支撑有序相判断。图解强调生长记录与物性样品必须逐批绑定，不能只凭化学式比较不同工作。</p></figure>
  <figure class="dark-figure"><figcaption><b>图2｜LaN₀.₉₄：压力制备与超导证据层级</b><small>根据 arXiv:2609.23213 的公开全文重绘，并非论文原图</small></figcaption><img class="figure-img" src="./lan-superconductivity.svg" alt="LaN0.94高压制备及超导证据链"><p>高压激光浮区制备、空位组分和输运转变构成主要证据链；零电阻、磁响应和结构稳定性各回答不同问题，不能用单一转变曲线替代完整的体超导论证。</p></figure>
  <figure><figcaption><b>图3｜UPS：CVT样品到Weyl物性的分阶段验证</b><small>根据 arXiv:2609.24897 的公开全文重绘，并非论文原图</small></figcaption><img class="figure-img" src="./ups-staged.svg" alt="UPS单晶的CVT生长和Weyl证据分阶段图"><p>I₂-CVT得到可测单晶只是第一关；晶体学、磁性和能带/输运证据必须分阶段互证。该图同时标出当前结论能支持的范围，以及仍需通过批次统计和独立探针补强的环节。</p></figure>
  </section>`;

  html = `${html.slice(0, position)}${figures}${html.slice(position)}`;
  await writeFile(outputPath, html, 'utf8');
}

console.log('Injected 2026-09-22 figures into GitHub Pages report.');
