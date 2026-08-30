# 晶体生长和物性调控

一个面向晶体生长、物性测量与物性调控研究的中文开源文献网站。网站每天优先检索当天论文；若没有高相关结果，则回溯最近三个自然日。检索范围包含 arXiv，并优先关注 PRL、PRB、Nature Communications、Nature Physics、Nature、Science 及同等级期刊。

## 网站如何工作

- `content/reports/`：每期简报的结构化 JSON，是网站唯一内容源。
- `scripts/update-daily.mjs`：调用 OpenAI Responses API 的网页搜索，生成当天报告并按 DOI 去重。
- `scripts/build-github-pages.mjs`：把所有 JSON 报告编译成无需服务器的静态网页。
- `.github/workflows/pages.yml`：北京时间每天 08:00 自动更新并发布到 GitHub Pages；每次推送到 `main` 也会重新发布。
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

### 4. 开启每天自动检索

自动检索需要你自己的 OpenAI API 密钥：

1. 在 OpenAI API 控制台创建密钥。
2. 进入 GitHub 仓库 **Settings → Secrets and variables → Actions**。
3. 在 **Secrets** 中新建名为 `OPENAI_API_KEY` 的 Repository secret，并粘贴密钥。
4. 可选：在 **Variables** 中新建 `OPENAI_MODEL`，默认不设置时使用 `gpt-5`。
5. 打开仓库 **Actions → 每日检索并发布网站 → Run workflow**。
6. 第一次测试时勾选“发布前先生成今天的简报”，然后运行。

工作流计划为 UTC 00:00，即北京时间每天 08:00。GitHub 的定时任务在繁忙时可能延迟数分钟。公开仓库长期无活动时，GitHub 可能暂停计划任务，重新启用 Actions 或进行一次提交即可恢复。

## 不使用 API 时的手动更新

复制 `content/reports/2026-08-28.json`，改名为当天日期并替换内容，然后提交到 `main`。GitHub Pages 会自动重新构建，无需修改 HTML。

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

全文不可访问时，仍可解释摘要中明确给出的研究逻辑，但不得推测实验细节。重要图片只使用论文允许转载的开放许可图片，或根据数据和方法重新绘制的原创示意图，并注明来源与性质。

## 安全、费用与版权

- 不要把 API 密钥写入 `.env` 后提交；只保存到 GitHub Actions Secrets。
- GitHub Pages 对公开仓库通常免费；OpenAI API 调用会按你的 API 账户计费。
- 自动检索无法绕过出版社付费墙，因此“全文精读”只覆盖可合法访问的正文、arXiv 或作者公开稿。
- 本仓库代码使用 MIT License；论文正文、图表和出版社页面仍归原作者与权利人所有。

## 常见问题

**Actions 报错 `缺少 OPENAI_API_KEY`**：检查 Secret 名称必须完全等于 `OPENAI_API_KEY`。

**网站显示 404**：确认 Pages 的 Source 已设为 GitHub Actions，并等待 Actions 运行完成。

**主页样式丢失**：不要手动删除 `.nojekyll`；构建脚本会根据仓库名自动设置子路径。

**当天没有论文**：系统会先回溯三日；仍没有高相关结果时生成“0 篇”状态页，不用旧论文凑数。
