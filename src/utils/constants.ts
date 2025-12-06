// 配置常量

/**
 * 破碎镜面效果配置
 */
export const SHATTER_CONFIG = {
  RADIAL_CRACKS: 24,           // 径向裂纹数量
  CIRCULAR_RINGS: 4,            // 环形裂纹数量（中间环）
  MAX_SCALE_VARIATION: 0.35,    // 最大缩放变化幅度
  MAX_OFFSET_MAGNITUDE: 0.3,    // 最大位移幅度
  BASE_SCALE_REDUCTION: 0.15,   // 基准缩放减少量
  CRACK_OPACITY: 0.3,           // 裂纹不透明度
  RING_CRACK_OPACITY: 0.25,     // 环形裂纹不透明度
  CRACK_WIDTH: 0.15,            // 裂纹宽度
  RING_CRACK_WIDTH: 0.12,       // 环形裂纹宽度
} as const;

/**
 * 扇区颜色（用于上传按钮）
 */
export const SEGMENT_COLORS = [
  'bg-red-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-yellow-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-orange-500',
  'bg-teal-500'
] as const;
