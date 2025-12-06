# 📤 GitHub 上传指南

本文档将手把手教你如何将本项目上传到GitHub。

---

## 📋 准备工作

### 1. 确保已安装 Git

```bash
# 检查Git是否已安装
git --version

# 如果未安装，请访问：https://git-scm.com/downloads
```

### 2. 配置 Git（首次使用）

```bash
# 设置用户名
git config --global user.name "你的名字"

# 设置邮箱（使用GitHub注册邮箱）
git config --global user.email "your-email@example.com"

# 验证配置
git config --list
```

---

## 🚀 方法一：使用 GitHub 网页界面（推荐新手）

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角 **+** 号 → **New repository**
3. 填写仓库信息：
   - **Repository name**: `ring-collage-designer`（或其他名字）
   - **Description**: `圆环图片创意拼接设计器 - 支持6种形状模板的创意图片编辑工具`
   - **Public** 或 **Private**（根据需要选择）
   - ⚠️ **不要勾选** "Initialize this repository with:"下的任何选项
4. 点击 **Create repository**

### 步骤 2：在本地初始化 Git 仓库

打开终端，进入项目目录，执行：

```bash
# 初始化Git仓库
git init

# 查看文件状态
git status
```

### 步骤 3：添加所有文件到暂存区

```bash
# 添加所有文件（.gitignore会自动排除不需要的文件）
git add .

# 查看将要提交的文件
git status
```

### 步骤 4：提交代码

```bash
# 提交到本地仓库
git commit -m "feat: 初始提交 - 圆环图片拼接设计器 v2.0"

# 或使用中文提交信息
git commit -m "首次提交：完成圆环图片创意拼接设计器"
```

### 步骤 5：关联远程仓库

```bash
# 替换 YOUR_USERNAME 和 YOUR_REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 示例：
# git remote add origin https://github.com/zhangsan/ring-collage-designer.git

# 验证远程仓库
git remote -v
```

### 步骤 6：推送到 GitHub

```bash
# 推送到 GitHub（首次推送）
git push -u origin main

# 如果提示分支名是 master 而不是 main，使用：
# git branch -M main
# git push -u origin main
```

### 步骤 7：输入 GitHub 凭证

**方式A：使用 Personal Access Token（推荐）**

1. 访问 GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. 点击 "Generate new token (classic)"
3. 勾选权限：
   - ✅ `repo`（全部）
   - ✅ `workflow`
4. 点击 "Generate token"
5. **复制生成的token**（只显示一次！）
6. 在推送时，密码处粘贴token

**方式B：使用 GitHub CLI（更方便）**

```bash
# 安装 GitHub CLI
# macOS: brew install gh
# Windows: 下载安装包 https://cli.github.com

# 登录
gh auth login

# 然后再执行推送命令
```

---

## 🎯 方法二：使用 GitHub Desktop（最简单）

### 步骤 1：下载安装 GitHub Desktop

访问 [https://desktop.github.com](https://desktop.github.com) 下载安装。

### 步骤 2：登录 GitHub

打开 GitHub Desktop → File → Options → Sign in

### 步骤 3：添加本地仓库

1. File → Add local repository
2. 选择项目文件夹
3. 如果提示 "not a git repository"，点击 "create a repository"

### 步骤 4：配置仓库信息

- **Name**: ring-collage-designer
- **Description**: 圆环图片创意拼接设计器
- ✅ 勾选 "Initialize this repository with a README"（可选）
- 点击 "Create repository"

### 步骤 5：提交更改

1. 左下角填写 Commit message：`初始提交 - 圆环图片拼接设计器 v2.0`
2. 点击 "Commit to main"

### 步骤 6：发布到 GitHub

1. 点击顶部 "Publish repository"
2. 填写仓库名称和描述
3. 选择 Public 或 Private
4. 点击 "Publish repository"

✅ 完成！你的项目已经上传到 GitHub！

---

## 🔧 方法三：使用命令行（完整版）

### 完整命令流程

```bash
# 1. 进入项目目录
cd /path/to/ring-collage-designer

# 2. 初始化Git仓库
git init

# 3. 查看当前状态
git status

# 4. 添加所有文件
git add .

# 5. 提交
git commit -m "feat: 初始提交 - 圆环图片拼接设计器 v2.0"

# 6. 重命名分支为 main（如果是 master）
git branch -M main

# 7. 添加远程仓库（在GitHub上创建仓库后获取URL）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 8. 推送到GitHub
git push -u origin main
```

### 如果遇到分支名问题

```bash
# 查看当前分支
git branch

# 如果是 master，重命名为 main
git branch -M main

# 再推送
git push -u origin main
```

---

## 🎨 美化你的 GitHub 仓库

### 1. 添加项目预览图

在仓库根目录添加 `/screenshots` 文件夹，放入应用截图：

```bash
mkdir screenshots
# 将截图文件放入此文件夹
```

在 README.md 开头添加：
```markdown
![App Screenshot](./screenshots/preview.png)
```

### 2. 添加 Badges（徽章）

README.md 顶部已包含版本和技术栈徽章，可以添加更多：

```markdown
![License](https://img.shields.io/badge/license-MIT-green)
![GitHub stars](https://img.shields.io/github/stars/YOUR_USERNAME/YOUR_REPO)
![GitHub forks](https://img.shields.io/github/forks/YOUR_USERNAME/YOUR_REPO)
```

### 3. 设置 Repository Topics

在 GitHub 仓库页面：
1. 点击右侧 "About" 旁的齿轮图标
2. 添加 Topics：
   - `react`
   - `typescript`
   - `tailwind-css`
   - `image-editor`
   - `svg`
   - `canvas`
   - `photo-collage`

### 4. 添加 LICENSE 文件

如果还没有，创建 LICENSE 文件：

```bash
# MIT License（最宽松）
# 在 GitHub 仓库页面：Add file → Create new file
# 文件名输入 LICENSE
# GitHub 会自动提示选择许可证模板
```

### 5. 完善 About 部分

在 GitHub 仓库页面右侧：
1. 点击 "About" 旁的齿轮
2. 填写：
   - **Description**: 圆环图片创意拼接设计器 - 支持6种形状模板的创意图片编辑工具
   - **Website**: 部署后的URL（如 https://your-app.vercel.app）
   - **Topics**: react, typescript, tailwindcss, image-editor

---

## 📝 后续更新流程

当你修改代码后，使用以下命令更新到 GitHub：

```bash
# 1. 查看修改了哪些文件
git status

# 2. 添加修改的文件
git add .

# 3. 提交更改
git commit -m "feat: 添加新功能"
# 或
git commit -m "fix: 修复某个bug"
# 或
git commit -m "docs: 更新文档"

# 4. 推送到GitHub
git push
```

### 提交信息规范（推荐）

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
feat: 新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整（不影响功能）
refactor: 代码重构
perf: 性能优化
test: 测试相关
chore: 构建工具、依赖更新

# 示例：
git commit -m "feat: 添加圆形蒙版功能"
git commit -m "fix: 修复PNG导出问题"
git commit -m "docs: 更新README部署说明"
git commit -m "perf: 优化破碎镜面渲染性能"
```

---

## 🐛 常见问题

### Q1: 推送时提示 "Permission denied"

**解决方案**：
```bash
# 使用 Personal Access Token
# 1. 在 GitHub 生成 token（Settings → Developer settings → Personal access tokens）
# 2. 推送时使用 token 作为密码

# 或者配置 SSH key
ssh-keygen -t ed25519 -C "your-email@example.com"
# 将 ~/.ssh/id_ed25519.pub 内容添加到 GitHub SSH keys
```

### Q2: 推送时提示 "fatal: refusing to merge unrelated histories"

**解决方案**：
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

### Q3: 已经勾选了 "Initialize with README"，如何处理？

**解决方案**：
```bash
# 先拉取远程仓库
git pull origin main --allow-unrelated-histories

# 如果有冲突，解决后：
git add .
git commit -m "merge: 合并初始文件"
git push -u origin main
```

### Q4: 如何删除已添加的远程仓库重新关联？

```bash
# 查看远程仓库
git remote -v

# 删除远程仓库
git remote remove origin

# 重新添加
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

### Q5: 不小心提交了敏感信息怎么办？

```bash
# 删除最后一次提交（未推送的情况）
git reset --soft HEAD~1

# 如果已经推送，需要强制推送（谨慎使用）
git reset --hard HEAD~1
git push -f origin main

# 更安全的方式：使用 git filter-branch 或 BFG Repo-Cleaner
```

### Q6: 文件太大无法推送

**解决方案**：
```bash
# GitHub 单文件限制 100MB
# 检查大文件
find . -type f -size +50M

# 添加到 .gitignore
echo "large-file.zip" >> .gitignore

# 或使用 Git LFS（Large File Storage）
git lfs install
git lfs track "*.psd"
git add .gitattributes
```

---

## 🔍 验证上传成功

上传完成后，检查以下内容：

- [ ] 访问 `https://github.com/YOUR_USERNAME/YOUR_REPO`
- [ ] 所有源代码文件都在
- [ ] README.md 正确显示
- [ ] node_modules 等不应上传的文件未出现
- [ ] 文档文件（DEPLOYMENT.md、CHANGELOG.md）都在

---

## 🎉 下一步

1. **部署应用**
   - 参考 [DEPLOYMENT.md](./DEPLOYMENT.md)
   - 推荐使用 Vercel 或 Netlify

2. **分享项目**
   - 在社交媒体分享
   - 发布到 Reddit、Twitter
   - 提交到 awesome-list

3. **持续改进**
   - 收集用户反馈
   - 添加新功能
   - 修复bug

---

## 📚 相关资源

- [Git 官方文档](https://git-scm.com/doc)
- [GitHub 入门指南](https://docs.github.com/cn/get-started)
- [Pro Git 中文版](https://git-scm.com/book/zh/v2)
- [GitHub Desktop 文档](https://docs.github.com/cn/desktop)

---

<div align="center">

**🎊 恭喜！你的项目已成功上传到 GitHub！**

现在可以开始部署了 → [查看部署指南](./DEPLOYMENT.md)

</div>
