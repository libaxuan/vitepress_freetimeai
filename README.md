# FreeTimeAI 项目文档

欢迎来到 **FreeTimeAI** 项目！这是一个基于 VitePress 构建的企业官网，旨在提供高质量的 AI 服务。您可以轻松地使用 Vercel 部署此项目。

## 项目链接
[访问官网](https://freetimeai.gptnav.eu.org)

## 项目截图

![项目截图](https://musictops.eu.org/file/1749542014551_freehome.jpg)

## 项目特点

- **AI 智能问答**：提供快速、精准的解决方案，帮助用户解决各种问题。
- **无缝多语言支持**：支持全球多种语言，方便用户进行交流。
- **自定义角色模板**：允许用户创建个性化的 AI 机器人，满足特定需求。
- **多样化的应用商店**：提供丰富的应用选择，满足不同用户的需求。
- **数据安全**：遵循 GDPR 和 PIPL 等数据隐私保护法规，确保用户数据安全。

## 安装与使用

### 环境要求

- Node.js >= 18.x
- VitePress

### 克隆项目

```bash
git clone https://github.com/libaxuan/vitepress_freetimeai.git
cd vitepress_freetimeai
```

### 安装依赖

```bash
yarn install
```

### 启动开发服务器

```bash
yarn dev
```

### 构建项目

```bash
yarn build
```

### 预览构建

```bash
yarn docs:preview
```

### 配置微软 Clarity

为了确保您的网站数据能正确地通过微软 Clarity 进行收集，请务必在 `docs/.vitepress/theme/clarity.js` 文件中，将 `YOUR_CLARITY_PROJECT_ID` 替换为您自己的微软 Clarity 项目 ID。

例如，如果您的 Clarity 项目 ID 是 `abcdefghij`，则 `clarity.js` 中的代码应更新为：

```javascript
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "YOUR_CLARITY_PROJECT_ID");
```

替换后的代码示例：

```javascript
(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "abcdefghij");
```

请注意，为了让您的网站在部署后正常工作，请务必完成此步骤。

### 部署到 Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/libaxuan/vitepress_freetimeai)

1. 登录 Vercel 账户。
2. 点击"新建项目"并选择此 GitHub 仓库。
3. 根据提示完成部署。

## 项目目录结构

- `docs/`: 包含所有的 VitePress 文档和页面，是网站内容的根目录。
  - `.vitepress/`: VitePress 的配置目录，包含主题配置、构建输出等。
    - `config.mts`: VitePress 的主配置文件，用于定义网站的标题、描述、导航、侧边栏和语言设置等。
    - `theme/`: 自定义主题文件，如 `index.js` 用于注册自定义布局和组件，`MyLayout.vue` 和 `MyFooter.vue` 用于自定义页面布局和页脚。
    - `custom.css`: 全局自定义 CSS 样式文件。
    - `clarity.js`: 用于集成微软 Clarity 分析的 JavaScript 文件。
- `public/`: 静态资源目录，其中包含网站的 favicon 等静态文件。
- `package.json`: 项目的依赖管理文件，列出了所有必要的 Node.js 包及其版本。
- `README.md`: 项目的说明文档，您现在正在阅读的文件。

## 包含的脚本

在 `package.json` 中，您可以找到以下脚本：

- `dev`: 启动开发服务器。
- `docs:dev`: 启动文档开发服务器（与 `dev` 相同）。
- `docs:build`: 构建文档。
- `docs:preview`: 预览构建后的文档。
- `build`: 构建文档（与 `docs:build` 相同）。

## 贡献

欢迎任何形式的贡献！请遵循以下步骤：

1. Fork 此仓库。
2. 创建您的特性分支 (`git checkout -b feature/YourFeature`)。
3. 提交您的更改 (`git commit -m 'Add some feature'`)。
4. 推送到分支 (`git push origin feature/YourFeature`)。
5. 提交一个 Pull Request。

## 许可证

本项目采用 MIT 许可证，详细信息请参见 [LICENSE](LICENSE)。

## 联系我们

如有任何问题或建议，请通过以下方式与我们联系：

- 邮箱: peter@bettergpt.eu.org
- 微信公众号: [FreeTimeAI]