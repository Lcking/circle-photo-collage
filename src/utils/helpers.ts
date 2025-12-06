// 公共工具函数

/**
 * 固定随机数生成器（基于种子）
 * 用于生成一致的随机效果（如破碎镜面）
 */
export function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}
