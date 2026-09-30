# 每日文献简报

一个面向量子材料研究的中文开源文献网站，以“晶体生长和物性调控”为重点板块。每日简报由 Codex 任务检索、核读后写入仓库；GitHub Actions 只构建并发布已提交内容。

## 网站如何工作

- `content/reports/`：每期简报的结构化 JSON，是网站唯一内容源。
- `scripts/update-daily.mjs`：保留的 API 生成脚本；当前 GitHub Pages 工作流不会调用它。
- `scripts/build-github-pages.mjs`：把所有 JSON 报告编译成无需服务器的静态网页。
- `.github/workflows/pages.yml`：推送到 `main` 或手动运行时，测试并发布仓库中已有的简报；不调用 OpenAI API，也不定时生成文章。
- `app/`：当前 ChatGPT Sites 版本的页面源码；GitHub Pages 发布使用 `github-dist/` 中生成的静态文件。

自动更新严格区分“全文精读”和“仅摘要/元数据”。未在正文中出现的配比、温区、时间、晶体尺寸或测量参数必须写“正文未报告”，不能根据常见做法补写。

## 最简单的 GitHub 部署方法

### 1. 新建仓库

1. 登录 GitHub，点击右上角 **+ → New repository**。
2. Repository name 建议填写 `crystal-growth-property-control`。
3. 选择 **Public**，不要勾选自动添加 README、`.gitignore` 或 License。
4. 点击 **Create repository**。

### 2. 上传源码

解压本项目的 GitHub 上传包。在新仓库页面点击 **uploading an existing file**，把解压后的所有文件和文件夹拖入页面，然后点击 **Commit changes**。

GitHub 网页有时不能可靠上传隐藏目录 `.github`。如果拖放后看不到 `.github/workflows/pages.yml`，请使用 GitHub Desktop：

1. 在 GitHub Desktop 中选择 **File → Add local repository**，指向解压目录。
2. 如果提示创建仓库，确认后把远程仓库设置为刚创建的 GitHub 仓库。
3. 点击 **Publish repository** 或 **Push origin**。

### 3. 启用 GitHub Pages

进入仓库 **Settings → Pages**，在 **Build and deployment → Source** 中选择 **GitHub Actions**。第一次上传到 `main` 后，工作流会生成并发布网站。公开网址通常是：

`https://你的GitHub用户名.github.io/仓库名/`

### 4. 每天更新简报（无需 API 额度）

1. Codex 每日任务检索、阅读并核对来源，将新一期内容写入 `content/reports/YYYY-MM-DD.json`。它使用 Codex/ChatGPT 的任务额度，不读取本仓库的 `OPENAI_API_KEY`。
2. 核对全文状态、图解授权和去重结果后，把内容提交并推送到 GitHub `main`；推送成功才会触发 Pages 发布。没有新报告时，网站保留上一期，不伪称已更新。
3. 如需重建已在 GitHub 的内容，打开 **Actions → 发布每日文献简报 → Run workflow**，选择 `main` 并运行；这一步不会检索新论文，也不会消耗 OpenAI API 额度。

不使用 Codex 时，也可参照已有 JSON 的结构手工编写新一期并提交。仓库若仍保存旧的 `OPENAI_API_KEY` Secret，当前工作流不会使用；不要把密钥提交到源码。

## 本地预览

需要 Node.js 22 或更高版本。

```bash
node scripts/build-github-pages.mjs
npx serve github-dist
```

也可以预览 ChatGPT Sites/Vinext 版本：

```bash
pnpm install
pnpm dev
```

## 内容规范

每篇论文至少包含：

1. 研究背景、科学问题、热点原因和因果判断链；
2. 晶体成分、结构与样品形态；
3. 原料、配比、助熔剂/输运剂、温区、温程、时间、降温、后处理和尺寸；
4. 结构、成分、缺陷和质量表征；
5. 物性测量条件、关键数据、拟合模型及替代解释；
6. 核心结论、创新、局限、复现风险和下一步建议。
7. 独立的“Conclusion｜这篇论文讲了什么故事”：按研究缺口、方法、关键证据、结论和实验意义写成直观叙事，不复述摘要，也不套用统一模板。

全文不可访问时，仍可解释摘要中明确给出的研究逻辑，但不得推测实验细节。重要图片只使用论文允许转载的开放许可图片，或根据数据和方法重新绘制的原创示意图，并注明来源与性质。

## 安全、费用与版权

- 不要把 API 密钥写入源码或提交到仓库；当前发布流程无需 API 密钥。
- GitHub Pages 对公开仓库通常免费；只有主动运行保留的 API 生成脚本时，才可能产生 OpenAI API 费用。
- 自动检索无法绕过出版社付费墙，因此“全文精读”只覆盖可合法访问的正文、arXiv 或作者公开稿。
- 本仓库代码使用 MIT License；论文正文、图表和出版社页面仍归原作者与权利人所有。

## 常见问题

**Actions 仍报 `OPENAI_API_KEY` 或额度不足**：先确认新版 `.github/workflows/pages.yml` 已提交到 GitHub `main`；旧版工作流仍会调用 API。当前发布流程不会读取密钥。

**网站显示 404**：确认 Pages 的 Source 已设为 GitHub Actions，并等待 Actions 运行完成。

**主页样式丢失**：不要手动删除 `.nojekyll`；构建脚本会根据仓库名自动设置子路径。

**当天没有论文**：系统会先回溯三日；仍没有高相关结果时生成“0 篇”状态页，不用旧论文凑数。
