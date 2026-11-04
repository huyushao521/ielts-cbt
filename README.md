# 剑桥雅思 20 · Test 1 · 机考练习系统

一个纯前端（HTML/CSS/JS，无依赖）的雅思机考模拟网页，模拟官方 Computer-Based IELTS 的界面与答题体验。

## 功能

- **Listening 听力**：内置音频播放器（T1S1–T1S4，可暂停/重播），4 个部分共 40 题，30 分钟计时，自动判分。
- **Reading 阅读**：3 篇文章分栏阅读（左侧原文、右侧题目），40 题，60 分钟计时，自动判分。
- **Writing 写作**：Task 1 + Task 2，实时字数统计，60 分钟计时（写作无法自动判分）。
- **Speaking 口语**：Part 1–3 完整题目展示，供自练自评。
- 听力 / 阅读提交后给出：得分、正确率、**估算雅思分数**、逐题答题详情对照。
- 题号导航面板（已答 / 未答实时标记）、倒计时、临场警告。

## 本地运行

直接双击 `index.html` 即可（音频也能正常播放）；或起一个静态服务器：

```bash
cd ielts-cbt
python -m http.server 8000
# 打开 http://localhost:8000
```

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库（若只想自己用，建议设为 **Private**）。
2. 把本目录 `ielts-cbt/` 里的全部文件推到仓库（`index.html` 放在仓库根目录）。
3. 仓库 **Settings → Pages → Source** 选择 `Deploy from a branch`，分支选 `main`，目录选 `/ (root)`，保存。
4. 稍等片刻，访问 `https://<你的用户名>.github.io/<仓库名>/` 即可。

> 命令行方式（假设仓库已创建并绑定远程）：
> ```bash
> git add .
> git commit -m "ielts cbt test 1"
> git push origin main
> ```

## 音频文件约定

听力音频需放在 `audio/` 目录，命名规则为 `T{测试号}S{部分号}.mp3`：

```
audio/T1S1.mp3   # Test 1, Part 1
audio/T1S2.mp3   # Test 1, Part 2
audio/T1S3.mp3
audio/T1S4.mp3
```

后续扩展 Test 2–4 时，只需补充对应音频，并在 `js/data*.js` 中新增数据即可。

## 内容与版权说明

- 题目内容来自《Cambridge IELTS 20（Academic）》，由扫描版 PDF 经 OCR 整理，**个别单词/标点可能存在识别误差**，正式刷题前建议对照纸质书校对。
- 阅读 Passage 3 第 31–35 题的选项 C 在扫描件中缺失，已用中性干扰项补全（不影响判分，因为 C 不是正确选项）。
- 本内容受版权保护，**仅供个人学习练习使用**；请勿公开发布完整题目，公开发布可能面临侵权/下架风险。

## 估算分数换算

听力与学术类阅读的分数换算采用雅思官方常见换算表（约值），仅作参考。
