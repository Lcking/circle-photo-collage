# 🚀 快速参考卡片

这是一个超快速的命令参考，帮助你快速上传和管理项目。

---

## 📤 首次上传到 GitHub

### 方法1: 使用自动化脚本 ⚡（最快）

**macOS/Linux:**
```bash
chmod +x upload-to-github.sh
./upload-to-github.sh
```

**Windows:**
```bash
upload-to-github.bat
```

### 方法2: 手动命令行 🔧

```bash
# 1️⃣ 初始化
git init
git add .
git commit -m "feat: 初始提交 - 圆环图片拼接设计器 v2.0"

# 2️⃣ 关联远程仓库（替换 YOUR_USERNAME 和 YOUR_REPO）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 3️⃣ 推送
git branch -M main
git push -u origin main
```

---

## 🔄 日常更新代码

```bash
# 查看修改
git status

# 添加所有修改
git add .

# 提交
git commit -m "你的提交信息"

# 推送
git push
```

---

## 🎯 常用提交信息模板

```bash
# 新功能
git commit -m "feat: 添加星形蒙版功能"

# 修复bug
git commit -m "fix: 修复PNG导出透明度问题"

# 性能优化
git commit -m "perf: 优化破碎镜面渲染性能"

# 文档更新
git commit -m "docs: 更新README使用说明"

# 代码重构
git commit -m "refactor: 重构滑块组件逻辑"

# 样式调整
git commit -m "style: 调整按钮间距"
```

---

## 🌐 快速部署命令

### Vercel（推荐）
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
npm run deploy
```

---

## 🔧 Git 常用命令

### 查看状态
```bash
git status                 # 查看当前状态
git log                    # 查看提交历史
git log --oneline          # 简洁查看历史
git diff                   # 查看未暂存的修改
```

### 撤销操作
```bash
git checkout -- file.txt   # 撤销工作区修改
git reset HEAD file.txt    # 取消暂存
git reset --soft HEAD~1    # 撤销最后一次提交（保留修改）
git reset --hard HEAD~1    # 撤销最后一次提交（删除修改）⚠️
```

### 分支操作
```bash
git branch                 # 查看分支
git branch feature         # 创建分支
git checkout feature       # 切换分支
git checkout -b feature    # 创建并切换
git merge feature          # 合并分支
git branch -d feature      # 删除分支
```

### 远程仓库
```bash
git remote -v              # 查看远程仓库
git remote add origin URL  # 添加远程仓库
git remote remove origin   # 删除远程仓库
git pull                   # 拉取更新
git push                   # 推送更新
git push -f                # 强制推送（谨慎使用）⚠️
```

---

## 🆘 紧急情况处理

### 提交了敏感信息
```bash
# 撤销最后一次提交（未推送）
git reset --soft HEAD~1
git reset HEAD sensitive-file.txt
echo "sensitive-file.txt" >> .gitignore
git add .gitignore
git commit -m "fix: 移除敏感文件"
```

### 推送失败
```bash
# 拉取远程更新
git pull origin main --rebase

# 解决冲突后
git add .
git rebase --continue
git push
```

### 清理大文件
```bash
# 查找大文件
find . -type f -size +50M

# 从历史中删除（需要先备份）
git filter-branch --tree-filter 'rm -f large-file.zip' HEAD
git push -f
```

---

## 📊 项目信息

| 项目 | 信息 |
|------|------|
| **当前版本** | v2.0.0 |
| **Node版本** | ≥ 18.0.0 |
| **包管理器** | npm / yarn / pnpm |
| **构建工具** | Vite 5.x |
| **框架** | React 18 + TypeScript 5 |

---

## 📞 获取帮助

| 问题类型 | 查看文档 |
|---------|---------|
| 🚀 上传到GitHub | [GITHUB_UPLOAD_GUIDE.md](./GITHUB_UPLOAD_GUIDE.md) |
| 🌐 部署到线上 | [DEPLOYMENT.md](./DEPLOYMENT.md) |
| 📖 项目说明 | [README.md](./README.md) |
| 📋 版本历史 | [CHANGELOG.md](./CHANGELOG.md) |

---

## 🔗 快捷链接

```bash
# GitHub 创建新仓库
https://github.com/new

# 生成 Personal Access Token
https://github.com/settings/tokens

# Vercel 部署
https://vercel.com/new

# Netlify 部署
https://app.netlify.com/start
```

---

## 💡 小贴士

- ✅ 经常提交，保持提交信息清晰
- ✅ 推送前先 `git pull` 避免冲突
- ✅ 使用 `.gitignore` 忽略不需要的文件
- ✅ 敏感信息用环境变量，不要提交到代码
- ✅ 每个功能或修复用一个独立的commit
- ⚠️ 不要使用 `git push -f` 除非你知道自己在做什么
- ⚠️ 提交前检查 `git status` 确认修改内容

---

<div align="center">

**🎯 保存此文件以便快速查阅！**

[返回主文档](./README.md) | [查看完整指南](./GITHUB_UPLOAD_GUIDE.md)

</div>
