<div align="center"><a name="readme-top"></a>

# GitHub 中文汉化插件

> 将 GitHub 页面中的菜单、按钮、标题、提示语等界面文本进行本地化为简体中文，提升中文用户的浏览与协作效率。

**简体中文** · [反馈问题][github-issues-link]

<!-- SHIELD GROUP -->

[![GitHub stars][github-stars-shield]][github-stars-link]
[![GitHub forks][github-forks-shield]][github-forks-link]
[![GitHub issues][github-issues-shield]][github-issues-link]
[![license GPL-3.0][github-license-shield]][github-license-link]

</div>

<details>
<summary><kbd>目录树</kbd></summary>

#### TOC
- [🌟 功能特性](#-功能特性)
- [🔒 隐私与数据](#-隐私与数据)
- [💻 安装指南](#-安装指南)
- [🔧 本地调试](#-本地调试)
- [🔄 更新日志](#-更新日志)
- [📖 开源说明](#-开源说明)
</details>

## 🌟 功能特性

- 覆盖 `github.com`、`gist.github.com`、`skills.github.com`、`education.github.com`、`www.githubstatus.com`
- 使用内置词库与规则在本地执行界面翻译，无需依赖在线翻译服务
- 支持仓库 README 英文内容翻译（可选）：可配置翻译平台 API 或 OpenAI 兼容接口
- 支持 DeepLX 翻译服务（免费，可自部署）
- 支持 Issue / Pull Request 对话内容翻译（可选）：可手动翻译单条正文或评论，并在原文、译文、双语视图间切换
- 弹窗提供总开关；切换后若当前标签页为 GitHub 页面，将自动刷新并立即生效
- 支持翻译记录、缓存复用与分段渐进翻译（可在设置中按需开启）；记录会标注来源为 README、Issue 或 Pull Request

## 🔒 隐私与数据

- 默认仅进行本地界面翻译
- 仅本地保存插件配置（如开关状态、API 配置、缓存与记录）
- 不收集、不出售用户个人数据
- 当你主动开启 README、Issue / Pull Request 对话翻译或 DeepLX 时，仅会将待翻译内容发送到你所配置的翻译服务

## 💻 安装指南

### 开发者模式加载

1. 克隆本仓库到本地
1. 打开 `chrome://extensions/`
1. 开启右上角 `开发者模式`
1. 点击 `加载已解压的扩展程序`，选择本仓库的 `chrome` 目录（包含 `manifest.json`）
1. 确认扩展已启用后，刷新 GitHub 页面

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔧 本地调试

1. 克隆本仓库到本地
1. 打开 `chrome://extensions/`，开启 `开发者模式`
1. 点击 `加载已解压的扩展程序`，选择 `chrome` 目录
1. 修改 `chrome/locals.js` 中的词条后，在扩展管理页点击刷新按钮即可生效

## 🔄 更新日志

### v2.3.0 (2026-06-04)

1. 新增 DeepLX 翻译服务支持
1. 新增背景服务脚本（service worker），支持 HTTP 代理请求
1. 新增扩展弹窗，提供总开关与快速跳转设置页
1. 补充扩展图标（assets/icons）
1. 修复因缺失 background.js / popup.html / 图标导致的扩展加载失败问题

> 本仓库复刻自 [MaydayV/github-chinese](https://github.com/MaydayV/github-chinese)，上游词库基于 [maboloshi/github-chinese](https://github.com/maboloshi/github-chinese)。早期版本更新日志请查看上游仓库。

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 📖 开源说明

本扩展为社区项目，非 GitHub 官方产品。

本仓库复刻自 [MaydayV/github-chinese](https://github.com/MaydayV/github-chinese)，词条基于 [maboloshi/github-chinese](https://github.com/maboloshi/github-chinese) 项目。该项目由 [52cik](https://github.com/52cik) 创建，[maboloshi](https://github.com/maboloshi) 等社区成员持续维护，以 GPL-3.0 许可证开源。

如果你希望继续修改或完善，欢迎通过以下方式参与：

1. 直接向本仓库提交 PR，我们会基于变更内容进行 review 与合并
1. Fork 本仓库后继续开发，并将你的修改版本以开源仓库形式发布

请在二次发布时遵循本仓库许可证（GPL-3.0），并保留来源说明，方便社区持续协作与追溯。

<div align="right">

[![][back-to-top]](#readme-top)

</div>


<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[github-project-link]: https://github.com/malosusu/github-chinese "GitHub 中文汉化插件"
[github-issues-link]: https://github.com/malosusu/github-chinese/issues "议题"
[github-issues-shield]: https://img.shields.io/github/issues/malosusu/github-chinese?style=flat-square&logo=github&label=Issue
[github-stars-link]: https://github.com/malosusu/github-chinese/stargazers "星标"
[github-stars-shield]: https://img.shields.io/github/stars/malosusu/github-chinese?style=flat-square&logo=github&label=Star
[github-forks-link]: https://github.com/malosusu/github-chinese/network "复刻"
[github-forks-shield]: https://img.shields.io/github/forks/malosusu/github-chinese?style=flat-square&logo=github&label=Fork
[github-license-link]: https://opensource.org/licenses/GPL-3.0  "许可证"
[github-license-shield]: https://img.shields.io/github/license/malosusu/github-chinese?style=flat-square&logo=github&label=License
