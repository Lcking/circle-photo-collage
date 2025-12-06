#!/bin/bash

# 圆环图片创意拼接设计器 - 快速部署脚本
# 使用方法: ./deploy.sh [start|stop|restart|logs|update]

set -e

COMPOSE_FILE="docker-compose.yml"
PROJECT_NAME="ring-collage-designer"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 打印彩色消息
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${YELLOW}ℹ $1${NC}"
}

# 检查Docker是否安装
check_docker() {
    if ! command -v docker &> /dev/null; then
        print_error "Docker未安装，请先安装Docker"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose未安装，请先安装Docker Compose"
        exit 1
    fi
    
    print_success "Docker环境检查通过"
}

# 启动服务
start_service() {
    print_info "正在启动服务..."
    docker-compose -f $COMPOSE_FILE up -d --build
    print_success "服务启动成功！"
    print_info "访问地址: http://localhost:3000"
    echo ""
    print_info "查看日志: ./deploy.sh logs"
}

# 停止服务
stop_service() {
    print_info "正在停止服务..."
    docker-compose -f $COMPOSE_FILE down
    print_success "服务已停止"
}

# 重启服务
restart_service() {
    print_info "正在重启服务..."
    docker-compose -f $COMPOSE_FILE restart
    print_success "服务重启成功！"
}

# 查看日志
view_logs() {
    print_info "查看实时日志 (Ctrl+C 退出)..."
    docker-compose -f $COMPOSE_FILE logs -f
}

# 更新服务
update_service() {
    print_info "正在更新服务..."
    
    # 拉取最新代码
    if [ -d .git ]; then
        print_info "拉取最新代码..."
        git pull origin main || git pull origin master
    fi
    
    # 重新构建并启动
    print_info "重新构建镜像..."
    docker-compose -f $COMPOSE_FILE down
    docker-compose -f $COMPOSE_FILE up -d --build
    
    print_success "服务更新成功！"
}

# 查看状态
show_status() {
    print_info "服务状态："
    docker-compose -f $COMPOSE_FILE ps
}

# 清理
cleanup() {
    print_info "清理未使用的Docker资源..."
    docker system prune -f
    print_success "清理完成"
}

# 显示帮助
show_help() {
    echo "圆环图片创意拼接设计器 - 部署管理脚本"
    echo ""
    echo "使用方法:"
    echo "  ./deploy.sh [命令]"
    echo ""
    echo "可用命令:"
    echo "  start     - 启动服务"
    echo "  stop      - 停止服务"
    echo "  restart   - 重启服务"
    echo "  logs      - 查看日志"
    echo "  update    - 更新并重新部署"
    echo "  status    - 查看服务状态"
    echo "  cleanup   - 清理Docker缓存"
    echo "  help      - 显示此帮助信息"
    echo ""
    echo "示例:"
    echo "  ./deploy.sh start    # 启动服务"
    echo "  ./deploy.sh logs     # 查看日志"
    echo ""
}

# 主逻辑
main() {
    # 检查Docker环境
    check_docker
    
    # 根据参数执行相应操作
    case "${1:-start}" in
        start)
            start_service
            ;;
        stop)
            stop_service
            ;;
        restart)
            restart_service
            ;;
        logs)
            view_logs
            ;;
        update)
            update_service
            ;;
        status)
            show_status
            ;;
        cleanup)
            cleanup
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            print_error "未知命令: $1"
            echo ""
            show_help
            exit 1
            ;;
    esac
}

# 执行主函数
main "$@"
