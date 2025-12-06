# 宝塔面板部署指南

## 一、本地准备

### 1. 构建生产版本
```bash
npm run build
```

构建完成后，`build/` 目录包含所有需要部署的文件：
```
build/
├── index.html
├── assets/
│   ├── index-xxx.css
│   └── index-xxx.js
└── (其他静态资源)
```

### 2. 准备上传文件
将整个 `build/` 目录打包或直接上传。

---

## 二、宝塔面板操作

### 1. 创建网站

1. 登录宝塔面板
2. 点击 **网站** → **添加站点**
3. 填写信息：
   - **域名**: `circlephotocollage.com` (或你的域名)
   - **根目录**: 自动生成即可
   - **PHP版本**: 选择 **纯静态**
   - **数据库**: 不需要

### 2. 上传文件

1. 点击网站根目录进入 **文件管理**
2. 删除默认的 `index.html` 和 `.htaccess`（如有）
3. 上传 `build/` 目录中的**所有内容**到网站根目录：
   - `index.html`
   - `assets/` 文件夹
   - 其他静态资源

### 3. 配置 Nginx (重要！)

由于这是 SPA 单页应用，需要配置 Nginx 将所有路由指向 `index.html`。

1. 点击网站 → **设置** → **配置文件**
2. 在 `server { }` 块中找到 `location / { }` 部分
3. 修改为以下配置：

```nginx
location / {
    try_files $uri $uri/ /index.html;
}

# 静态资源缓存
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}

# Gzip 压缩 (如果未全局开启)
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml;
gzip_min_length 1000;
```

4. 保存并重载 Nginx

### 4. 配置 SSL (推荐)

1. 点击网站 → **设置** → **SSL**
2. 选择 **Let's Encrypt** 免费证书
3. 勾选域名，点击申请
4. 开启 **强制 HTTPS**

---

## 三、SEO 资源准备

在网站根目录创建以下文件：

### 1. favicon.svg
上传或创建网站图标

### 2. og-image.png
社交分享预览图（推荐尺寸：1200x630px）

### 3. logo.png
网站 Logo（用于 Schema.org）

### 4. apple-touch-icon.png
iOS 设备图标（180x180px）

### 5. robots.txt
```txt
User-agent: *
Allow: /

Sitemap: https://circlephotocollage.com/sitemap.xml
```

### 6. sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/2000/svg-sitemap/0.9">
  <url>
    <loc>https://circlephotocollage.com/</loc>
    <lastmod>2024-12-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

## 四、验证部署

1. 访问 `https://circlephotocollage.com/`
2. 检查页面是否正常加载
3. 测试 SEO:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)

---

## 五、常见问题

### Q: 页面显示 404
A: 检查 Nginx `try_files` 配置是否正确

### Q: 资源加载失败（CSS/JS）
A: 确保 `assets/` 目录完整上传，检查文件权限（644）

### Q: HTTPS 证书申请失败
A: 确保域名 DNS 已正确解析到服务器 IP

### Q: 页面白屏
A: 打开浏览器 F12 控制台查看错误信息

---

## 六、性能优化建议

1. **开启 Gzip**: 宝塔 → Nginx → 配置 → 开启 Gzip
2. **开启 CDN**: 接入 Cloudflare 或阿里云 CDN
3. **HTTP/2**: SSL 配置中开启 HTTP/2
