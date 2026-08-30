import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const reportsDir = join(root, 'content', 'reports');
const target = join(root, 'app', 'search', 'search-index.ts');

const files = (await readdir(reportsDir)).filter(file => file.endsWith('.json'));
const reports = await Promise.all(files.map(async file => JSON.parse(await readFile(join(reportsDir, file), 'utf8'))));
reports.sort((a, b) => b.date.localeCompare(a.date));

const index = reports.flatMap(report => report.papers.map(paper => ({
  date: report.date,
  issue: report.issue,
  headline: report.headline,
  material: paper.material,
  title: paper.title,
  authors: paper.authors,
  journal: paper.journal,
  method: paper.method,
  rating: paper.rating,
  access: paper.access,
  source: paper.doi,
  fullText: paper.fullText,
  reportUrl: `/reports/${report.date}`,
  sections: paper.sections.map(section => ({ title: section.title, text: section.text })),
})));

await mkdir(dirname(target), { recursive: true });
await writeFile(target, `// 由 scripts/build-search-index.mjs 自动生成，请勿手工编辑。\nexport default ${JSON.stringify(index, null, 2)} as const;\n`);
console.log(`搜索索引已生成：${index.length} 篇论文`);
