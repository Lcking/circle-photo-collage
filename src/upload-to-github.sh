#!/bin/bash

# 🚀 GitHub 快速上传脚本
# 本脚本将帮助你快速将项目上传到 GitHub

echo "========================================"
echo "🚀 GitHub 上传助手"
echo "========================================"
echo ""

# 检查是否安装了 git
if ! command -v git &> /dev/null; then
    echo "❌ 错误: 未检测到 Git"
    echo "请先安装 Git: https://git-scm.com/downloads"
    exit 1
fi

echo "✅ Git 已安装"
echo ""

# 检查是否已经是 git 仓库
if [ -d ".git" ]; then
    echo "⚠️  警告: 当前目录已经是 Git 仓库"
    read -p "是否要重新初始化? (y/n): " reinit
    if [ "$reinit" == "y" ]; then
        echo "🗑️  删除现有 .git 目录..."
        rm -rf .git
    else
        echo "❌ 已取消"
        exit 1
    fi
fi

# 获取用户输入
echo "📝 请输入以下信息:"
echo ""

read -p "GitHub 用户名: " username
read -p "仓库名称 (默认: ring-collage-designer): " reponame
reponame=${reponame:-ring-collage-designer}

echo ""
echo "📦 即将创建仓库:"
echo "   URL: https://github.com/$username/$reponame"
echo ""

read -p "确认继续? (y/n): " confirm
if [ "$confirm" != "y" ]; then
    echo "❌ 已取消"
    exit 1
fi

echo ""
echo "🔧 正在初始化 Git 仓库..."
git init

echo "📂 添加所有文件..."
git add .

echo "💾 提交代码..."
git commit -m "feat: 初始提交 - 圆环图片拼接设计器 v2.0"

echo "🌿 设置默认分支为 main..."
git branch -M main

echo "🔗 关联远程仓库..."
git remote add origin "https://github.com/$username/$reponame.git"

echo ""
echo "========================================"
echo "⚠️  重要提示"
echo "========================================"
echo ""
echo "在推送之前，请先在 GitHub 上创建仓库:"
echo ""
echo "1. 访问: https://github.com/new"
echo "2. Repository name: $reponame"
echo "3. ❌ 不要勾选 'Initialize this repository with:' 下的任何选项"
echo "4. 点击 'Create repository'"
echo ""

read -p "已在 GitHub 上创建仓库? (y/n): " created
if [ "$created" != "y" ]; then
    echo ""
    echo "⏸️  已暂停。请先创建 GitHub 仓库后再运行:"
    echo "   git push -u origin main"
    exit 0
fi

echo ""
echo "🚀 开始推送到 GitHub..."
echo ""
echo "⚠️  如果是首次推送，系统会要求你输入 GitHub 凭证:"
echo "   - 用户名: $username"
echo "   - 密码: 使用 Personal Access Token (不是 GitHub 密码!)"
echo ""
echo "如何获取 Personal Access Token:"
echo "   1. 访问: https://github.com/settings/tokens"
echo "   2. Generate new token (classic)"
echo "   3. 勾选 'repo' 权限"
echo "   4. 复制生成的 token 作为密码使用"
echo ""

read -p "按回车键继续推送..."

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "🎉 上传成功!"
    echo "========================================"
    echo ""
    echo "📍 仓库地址:"
    echo "   https://github.com/$username/$reponame"
    echo ""
    echo "🎯 下一步操作:"
    echo "   1. 访问你的 GitHub 仓库"
    echo "   2. 查看 DEPLOYMENT.md 了解部署方法"
    echo "   3. 推荐使用 Vercel 一键部署"
    echo ""
else
    echo ""
    echo "========================================"
    echo "❌ 上传失败"
    echo "========================================"
    echo ""
    echo "可能的原因:"
    echo "   1. GitHub 仓库未创建"
    echo "   2. 凭证错误（请使用 Personal Access Token）"
    echo "   3. 网络问题"
    echo ""
    echo "💡 手动推送命令:"
    echo "   git push -u origin main"
    echo ""
    echo "📖 查看详细指南:"
    echo "   cat GITHUB_UPLOAD_GUIDE.md"
    echo ""
fi
