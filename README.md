# 剑桥雅思机考练习系统（剑 17–21）

一个纯前端（HTML/CSS/JS，零依赖）的雅思机考模拟网页，模拟官方 Computer-Based IELTS 的界面与答题体验。无需构建、无需后端，静态托管即可使用。

## 已收录内容

| 书目（Academic） | 收录范围 | 状态 |
| --- | --- | --- |
| Cambridge IELTS 21 | Test 1–4（听力 / 阅读 / 写作 / 口语 + 音频） | ✅ 完整 |
| Cambridge IELTS 20 | Test 1–4（听力 / 阅读 / 写作 / 口语 + 音频） | ✅ 完整 |
| Cambridge IELTS 19 | Test 1–4（听力 / 阅读 / 写作 / 口语 + 音频） | ✅ 完整 |
| Cambridge IELTS 18 | Test 1–4（听力 / 阅读 / 写作 / 口语 + 音频） | ✅ 完整 |
| Cambridge IELTS 17 | Test 1–4（听力 / 阅读 / 写作 / 口语 + 音频） | ✅ 完整 |
| Cambridge IELTS 16 / 15 | — | ⏳ 预留位置，未收录 |

## 功能

- **Listening 听力**：内置音频播放器（可暂停 / 重播），4 个部分共 40 题，30 分钟计时，自动判分。
- **Reading 阅读**：3 篇文章分栏阅读（左侧原文、右侧题目），40 题，60 分钟计时，自动判分。
- **Writing 写作**：Task 1 + Task 2，实时字数统计，60 分钟计时（写作无法自动判分）。
- **Speaking 口语**：Part 1–3 完整题目展示，支持自练自评与 AI 评分。
  - **AI 评分**：录音 → 讯飞语音听写（IAT）转写 → 通义千问按雅思标准打分。
  - **口音朗读**：英式 / 美式 / 印式三种口音（浏览器原生 TTS），可朗读任意输入文本。
  - **合成评分**：输入英文文本，经讯飞 TTS 合成音频后直接送入评分链路（无需开口录音）。
- 听力 / 阅读提交后给出：得分、正确率、**估算雅思分数**、逐题答题详情对照。
- 题号导航面板（已答 / 未答实时标记）、倒计时、临场警告。

## 本地运行

直接双击 `index.html` 即可（音频也能正常播放）；或起一个静态服务器：

```bash
cd ielts-cbt
python -m http.server 8000
# 打开 http://localhost:8000
```

> 口语 AI 评分依赖浏览器麦克风与网络（需 HTTPS 或 localhost 环境）。

## 部署到 GitHub Pages

本仓库已托管于 [huyushao521/ielts-cbt](https://github.com/huyushao521/ielts-cbt)，`index.html` 位于仓库根目录。在仓库 **Settings → Pages → Source** 选择 `Deploy from a branch`、分支 `main`、目录 `/ (root)` 后，访问：

```
https://huyushao521.github.io/ielts-cbt/
```

后续更新内容只需推送到 `main` 分支即可自动触发部署：

```bash
git add .
git commit -m "update"
git push origin main
```

## 目录结构

```
ielts-cbt/
├── index.html              # 入口（按序引入 books.js → 各数据文件 → 核心脚本）
├── css/style.css
├── js/
│   ├── books.js            # 书目注册表（新增书目在此登记）
│   ├── c{book}-t{test}-{section}.js   # 各书各 Test 的听力/阅读/写作数据
│   │   例：c17-t4-reading.js = 剑 17 Test 4 阅读
│   ├── errata.js           # 勘误 / 补全数据
│   ├── speaking-ai.js      # 口语 AI：录音、讯飞 IAT 转写、讯飞 TTS、通义千问评分
│   └── app-core.js / app-render.js / app-sections.js   # 核心逻辑与渲染
└── audio/
    ├── T1S1.mp3 … T4S4.mp3  # 剑 20 听力音频（放在根目录）
    └── c17/ c18/ c19/ c21/  # 其余各书听力音频（每书 16 个 mp3）
```

## 音频文件约定

听力音频命名规则为 `T{测试号}S{部分号}.mp3`。除剑 20 放在 `audio/` 根目录外，其余各书放在对应子目录：

```
audio/T1S1.mp3      # 剑 20 · Test 1, Part 1
audio/c17/T4S4.mp3  # 剑 17 · Test 4, Part 4
audio/c21/T1S1.mp3  # 剑 21 · Test 1, Part 1
```

数据文件内通过 `audio/c17/T4S1.mp3` 这类相对路径引用，新增音频时保持一致即可。

## 口语 AI 密钥配置

口语评分 / 合成用到的密钥全部在 `js/speaking-ai.js` 顶部的 `_K` 对象中配置：

- 讯飞开放平台：`xf_appid`、`xf_apikey`、`xf_secret`（用于语音听写 IAT 与 TTS 合成，两个服务需同一账号均开通）。
- 阿里云百炼：`ds_key`（通义千问 DashScope API Key，用于评分）。

> ⚠️ 纯前端直连意味着密钥会暴露在前端代码中，公开部署存在被盗用风险。建议申请**专用 Key**，并在讯飞 / 百炼控制台配置 **IP 白名单**或用量限制。

## 内容与版权说明

- 题目内容来自《Cambridge IELTS 17–21（Academic）》，由扫描版 PDF 经 OCR 整理，**个别单词 / 标点可能存在识别误差**，正式刷题前建议对照纸质书校对。
- 阅读部分个别缺失选项已用中性干扰项补全（不影响判分）。
- 本内容受版权保护，**仅供个人学习练习使用**；请勿公开发布完整题目，公开发布可能面临侵权 / 下架风险。

## 估算分数换算

听力与学术类阅读的分数换算采用雅思官方常见换算表（约值），仅作参考。
