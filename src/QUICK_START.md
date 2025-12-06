# 🚀 快速开始指南

5分钟内完成部署！

## 📦 方式一：本地运行（开发/测试）

```bash
# 1. 克隆项目
git clone https://github.com/你的用户名/ring-collage-designer.git
cd ring-collage-designer

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

访问：http://localhost:5173 ✅

---

## 🐳 方式二：Docker 一键部署（推荐）

### 前提条件
- ✅ 已安装 Docker
- ✅ 已安装 Docker Compose

### 部署步骤

```bash
# 1. 克隆项目
git clone https://github.com/你的用户名/ring-collage-designer.git
cd ring-collage-designer

# 2. 一键启动（推荐）
chmod +x deploy.sh
./deploy.sh start

# 或使用 docker-compose
docker-compose up -d
```

访问：http://localhost:3000 ✅

### 常用命令

```bash
# 查看日志
./deploy.sh logs

# 停止服务
./deploy.sh stop

# 重启服务
./deploy.sh restart

# 更新部署
./deploy.sh update

# 查看状态
./deploy.sh status
```

---

## ☁️ 方式三：云服务器部署

### Step 1: 连接服务器

```bash
ssh root@你的服务器IP
```

### Step 2: 安装 Docker（如未安装）

```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com | sh
sudo systemctl start docker
sudo systemctl enable docker

# 安装 Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Step 3: 部署应用

```bash
# 克隆项目
git clone https://github.com/你的用户名/ring-collage-designer.git
cd ring-collage-designer

# 启动服务
docker-compose up -d

# 开放防火墙端口
sudo ufw allow 3000/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

访问：http://你的服务器IP:3000 ✅

---

## 🌐 添加域名和HTTPS

### 1. 安装 Nginx

```bash
sudo apt install nginx -y
```

### 2. 配置反向代理

```bash
sudo nano /etc/nginx/sites-available/ring-collage
```

粘贴以下配置（替换 your-domain.com）：

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/ring-collage /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 3. 配置 SSL 证书（免费）

```bash
# 安装 Certbot
sudo apt install certbot python3-certbot-nginx -y

# 获取证书（自动配置HTTPS）
sudo certbot --nginx -d your-domain.com
```

访问：https://your-domain.com ✅🔒

---

## 🔄 更新应用

### Git Pull 更新

```bash
cd ring-collage-designer
./deploy.sh update

# 或手动
git pull
docker-compose up -d --build
```

### 重新部署

```bash
docker-compose down
docker-compose up -d --build
```

---

## 📊 监控和维护

```bash
# 查看容器状态
docker-compose ps

# 查看资源使用
docker stats

# 查看日志（最近100行）
docker-compose logs --tail=100

# 查看实时日志
docker-compose logs -f
```

---

## ❓ 遇到问题？

### 端口被占用
```bash
# 修改 docker-compose.yml 中的端口
ports:
  - "8080:80"  # 改为其他端口
```

### 构建失败
```bash
# 清理缓存重新构建
docker system prune -a
docker-compose build --no-cache
docker-compose up -d
```

### 查看详细日志
```bash
docker-compose logs -f ring-collage-app
```

---

## 📚 更多文档

- [详细部署指南](./DEPLOYMENT.md)
- [项目说明](./README.md)
- [问题反馈](https://github.com/你的用户名/ring-collage-designer/issues)

---

## 🎉 完成！

现在你的圆环图片创意拼接设计器已经成功部署！

**本地开发**: http://localhost:5173
**Docker部署**: http://localhost:3000
**生产环境**: https://your-domain.com

开始创作吧！🎨✨
