import { buildCatalog } from '../lib/catalog.mjs';
import { buildResearchIdeas } from '../lib/research-ideas.mjs';
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let bibliography={};try{bibliography=JSON.parse(await readFile(join(root,'content','bibliography.json'),'utf8'))}catch{}
const reportsDir = join(root, 'content', 'reports');
const target = join(root, 'app', 'search', 'search-index.ts');

const files = (await readdir(reportsDir)).filter(file => file.endsWith('.json'));
const reports = await Promise.all(files.map(async file => JSON.parse(await readFile(join(reportsDir, file), 'utf8'))));
reports.sort((a, b) => b.date.localeCompare(a.date));

const index = buildCatalog(reports,bibliography);

await mkdir(dirname(target), { recursive: true });
await writeFile(target, `// 由 scripts/build-search-index.mjs 自动生成，请勿手工编辑。\nexport default ${JSON.stringify(index, null, 2)} as const;\n`);
console.log(`搜索索引已生成：${index.length} 篇论文`);
const ideas = buildResearchIdeas(reports);
await writeFile(join(root,'app','research','ideas-data.ts'), `// 从已审阅报告生成，研究设想不计入论文目录。\nexport default ${JSON.stringify(ideas,null,2)} as const;\n`);
await mkdir(join(root,'public','research-ideas'),{recursive:true});
for (const entry of ideas) await writeFile(join(root,'public','research-ideas',entry.date+'.json'),JSON.stringify(entry,null,2)+'\n');
console.log(`研究设想索引：${ideas.length}期，${ideas.reduce((n,e)=>n+e.ideas.length,0)}个候选`);
