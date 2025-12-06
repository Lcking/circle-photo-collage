# 🚀 部署指南

本文档提供详细的部署步骤和配置说明。

---

## 📋 部署前检查清单

在部署前，请确保：

- [ ] 已完成本地测试（`npm run build` 无错误）
- [ ] 已提交所有更改到 Git
- [ ] package.json 中版本号已更新
- [ ] README.md 已更新
- [ ] 检查所有图片资源可正常访问

---

## 🌟 方案一：Vercel 部署（推荐）⭐

**优势**：
- ✅ 自动 HTTPS
- ✅ 全球 CDN 加速
- ✅ 无限带宽
- ✅ 自动预览部署
- ✅ 零配置

### 步骤

#### 方法A：通过 Vercel CLI（推荐）

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 登录 Vercel
vercel login

# 3. 部署（首次）
vercel

# 4. 生产部署
vercel --prod
```

#### 方法B：通过 Vercel 网站

1. 访问 [https://vercel.com](https://vercel.com)
2. 点击 "Add New Project"
3. 导入 GitHub 仓库
4. 配置如下：
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```
5. 点击 "Deploy"

### 环境变量（如需要）

在 Vercel 项目设置中添加：
```
# 示例：如果使用外部API
VITE_API_URL=https://your-api.com
```

### 自定义域名

1. 进入项目设置 → Domains
2. 添加你的域名
3. 按提示配置 DNS 记录

---

## 🔷 方案二：Netlify 部署

**优势**：
- ✅ 简单易用
- ✅ 免费 SSL
- ✅ 表单处理
- ✅ 函数支持

### 步骤

#### 方法A：通过 Netlify CLI

```bash
# 1. 安装 Netlify CLI
npm install -g netlify-cli

# 2. 登录
netlify login

# 3. 初始化
netlify init

# 4. 部署
netlify deploy --prod
```

#### 方法B：通过拖拽部署

1. 构建项目
   ```bash
   npm run build
   ```

2. 访问 [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. 将 `dist` 文件夹拖拽到页面

4. 等待部署完成

#### 方法C：连接 Git 仓库

1. 访问 [https://app.netlify.com](https://app.netlify.com)
2. 点击 "Add new site" → "Import an existing project"
3. 选择 Git 提供商（GitHub/GitLab/Bitbucket）
4. 选择仓库
5. 配置构建设置（已有 netlify.toml 会自动识别）
6. 点击 "Deploy site"

---

## 📘 方案三：GitHub Pages 部署

**优势**：
- ✅ 完全免费
- ✅ 与 GitHub 集成
- ✅ 简单可靠

### 步骤

#### 1. 修改 vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ring-collage-designer/', // 改为你的仓库名
});
```

#### 2. 安装 gh-pages

```bash
npm install --save-dev gh-pages
```

#### 3. 修改 package.json

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://your-username.github.io/ring-collage-designer"
}
```

#### 4. 部署

```bash
npm run deploy
```

#### 5. 配置 GitHub Pages

1. 进入仓库设置 → Pages
2. Source 选择 `gh-pages` 分支
3. 点击 Save

---

## 🐳 方案四：Docker 部署

**优势**：
- ✅ 环境一致性
- ✅ 易于扩展
- ✅ 适合私有部署

### Dockerfile

创建 `Dockerfile`：

```dockerfile
# 构建阶段
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 运行阶段
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

创建 `nginx.conf`：

```nginx
server {
    listen 80;
    server_name _;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用 gzip 压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_comp_level 6;

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 构建和运行

```bash
# 构建镜像
docker build -t ring-collage-designer .

# 运行容器
docker run -d -p 8080:80 ring-collage-designer

# 访问 http://localhost:8080
```

### Docker Compose

创建 `docker-compose.yml`：

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

运行：
```bash
docker-compose up -d
```

---

## 🖥️ 方案五：自有服务器部署

### 使用 Nginx

#### 1. 构建项目

```bash
npm run build
```

#### 2. 上传到服务器

```bash
# 方式1: 使用 scp
scp -r dist/* user@your-server:/var/www/ring-collage

# 方式2: 使用 rsync
rsync -avz dist/ user@your-server:/var/www/ring-collage/
```

#### 3. 配置 Nginx

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/ring-collage;
    index index.html;

    # 启用 gzip
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 缓存静态资源
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # 安全头
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

#### 4. 启用 HTTPS（使用 Let's Encrypt）

```bash
# 安装 certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

#### 5. 重启 Nginx

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## 🔄 持续部署（CI/CD）

### GitHub Actions 示例

创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 📊 性能优化建议

### 1. 启用缓存

确保静态资源有合适的缓存策略：
```nginx
# 1年缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### 2. 启用压缩

所有平台都应启用 gzip/brotli 压缩。

### 3. CDN 加速

- Vercel/Netlify 自动提供 CDN
- 自有服务器可使用 Cloudflare

### 4. 图片优化

- 使用 WebP 格式
- 启用懒加载
- 压缩上传的图片

---

## 🐛 常见部署问题

### 问题1：页面刷新404

**原因**：SPA 路由问题

**解决**：确保服务器配置了 fallback 到 index.html
- Vercel: 已在 vercel.json 配置
- Netlify: 已在 netlify.toml 配置
- Nginx: 使用 `try_files $uri $uri/ /index.html;`

### 问题2：静态资源404

**原因**：base path 配置错误

**解决**：检查 vite.config.ts 中的 base 路径

### 问题3：构建失败

**原因**：依赖问题或内存不足

**解决**：
```bash
# 清理缓存
rm -rf node_modules package-lock.json
npm install

# 增加 Node.js 内存
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### 问题4：CORS 错误

**原因**：图片跨域

**解决**：
- 使用本地上传的图片
- 或配置 CORS 头：
```nginx
add_header Access-Control-Allow-Origin "*";
```

---

## 📈 监控和分析

### Google Analytics

在 `index.html` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

在 `App.tsx` 中：
```typescript
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <>
      {/* 你的应用 */}
      <Analytics />
    </>
  );
}
```

---

## ✅ 部署后检查

部署完成后，请验证：

- [ ] 所有页面可正常访问
- [ ] 图片上传功能正常
- [ ] PNG 导出功能正常
- [ ] SVG 导出功能正常
- [ ] 滑块控制流畅
- [ ] 移动端响应式正常
- [ ] HTTPS 证书有效
- [ ] 浏览器控制台无错误

---

## 🆘 获取帮助

如遇到部署问题：

1. 查看构建日志
2. 检查浏览器控制台
3. 参考官方文档：
   - [Vite 部署文档](https://vitejs.dev/guide/static-deploy.html)
   - [Vercel 文档](https://vercel.com/docs)
   - [Netlify 文档](https://docs.netlify.com/)
4. 提交 GitHub Issue

---

<div align="center">

**🎉 祝部署顺利！**

[返回主文档](./README.md)

</div>
