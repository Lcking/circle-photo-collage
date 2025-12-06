import { useMemo, memo } from 'react';
import { seededRandom } from '../utils/helpers';
import { SHATTER_CONFIG } from '../utils/constants';
import type { ImagePosition } from '../types';

interface ShatteredFragmentsProps {
  imageUrl: string;
  outerRadius: number;
  position: ImagePosition;
  shatterIntensity: number;
  fragmentDistortion: number;
}

/**
 * 破碎镜面碎片组件 - 每个碎片独立的图像缩放和位移
 * 使用 React.memo 优化性能，避免不必要的重新渲染
 */
export const ShatteredFragments = memo(function ShatteredFragments({
  imageUrl,
  outerRadius,
  position,
  shatterIntensity,
  fragmentDistortion
}: ShatteredFragmentsProps) {
  const { RADIAL_CRACKS, CIRCULAR_RINGS } = SHATTER_CONFIG;

  // 使用 useMemo 缓存径向裂纹角度计算
  const radialAngles = useMemo(() => {
    const angles: number[] = [];
    for (let i = 0; i < RADIAL_CRACKS; i++) {
      const seed = i * 100;
      const randomAngle = seededRandom(seed) * 360;
      angles.push(randomAngle);
    }
    return angles.sort((a, b) => a - b);
  }, [RADIAL_CRACKS]);

  // 使用 useMemo 缓存圆形裂纹半径计算
  const ringRadii = useMemo(() => {
    const radii: number[] = [0];
    for (let i = 1; i <= CIRCULAR_RINGS; i++) {
      const seed = i * 200;
      const baseRadius = (outerRadius * i / CIRCULAR_RINGS);
      const radiusOffset = (seededRandom(seed) - 0.5) * outerRadius * 0.08;
      radii.push(baseRadius + radiusOffset);
    }
    radii.push(outerRadius);
    return radii;
  }, [outerRadius, CIRCULAR_RINGS]);

  // 使用 useMemo 缓存碎片生成
  const fragments = useMemo(() => {
    const result: JSX.Element[] = [];

    for (let i = 0; i < radialAngles.length; i++) {
      const startAngle = radialAngles[i];
      const endAngle = radialAngles[(i + 1) % radialAngles.length];

      let angleDiff = endAngle - startAngle;
      if (angleDiff < 0) angleDiff += 360;

      for (let j = 0; j < ringRadii.length - 1; j++) {
        const innerR = ringRadii[j];
        const outerR = ringRadii[j + 1];

        const seed = i * 1000 + j * 100;

        // 位移和旋转
        const offsetAngle = (seededRandom(seed + 1) - 0.5) * 3 * shatterIntensity;

        // 半径偏移
        let radiusOffset = 0;
        if (j < ringRadii.length - 2) {
          radiusOffset = (seededRandom(seed + 2) - 0.5) * outerRadius * shatterIntensity * 0.2;
        }

        const adjustedStartAngle = (startAngle + offsetAngle - 90) * Math.PI / 180;
        const adjustedEndAngle = (endAngle + offsetAngle - 90) * Math.PI / 180;

        const r1 = Math.max(0, innerR + radiusOffset);
        const r2 = (j === ringRadii.length - 2) ? outerR : (outerR + radiusOffset);

        const outerStartX = 50 + r2 * Math.cos(adjustedStartAngle);
        const outerStartY = 50 + r2 * Math.sin(adjustedStartAngle);
        const outerEndX = 50 + r2 * Math.cos(adjustedEndAngle);
        const outerEndY = 50 + r2 * Math.sin(adjustedEndAngle);

        const largeArcFlag = angleDiff > 180 ? 1 : 0;

        let subPath: string;
        if (r1 === 0) {
          subPath = [
            `M 50 50`,
            `L ${outerStartX} ${outerStartY}`,
            `A ${r2} ${r2} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}`,
            'Z'
          ].join(' ');
        } else {
          const innerStartX = 50 + r1 * Math.cos(adjustedStartAngle);
          const innerStartY = 50 + r1 * Math.sin(adjustedStartAngle);
          const innerEndX = 50 + r1 * Math.cos(adjustedEndAngle);
          const innerEndY = 50 + r1 * Math.sin(adjustedEndAngle);

          subPath = [
            `M ${outerStartX} ${outerStartY}`,
            `A ${r2} ${r2} 0 ${largeArcFlag} 1 ${outerEndX} ${outerEndY}`,
            `L ${innerEndX} ${innerEndY}`,
            `A ${r1} ${r1} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}`,
            'Z'
          ].join(' ');
        }

        // 为每个碎片生成独立的缩放和位移（基于fragmentDistortion强度）
        const fragmentSeed = i * 10000 + j * 100;
        
        const scaleVariation = fragmentDistortion * SHATTER_CONFIG.MAX_SCALE_VARIATION;
        const baseScale = 1 - (fragmentDistortion * SHATTER_CONFIG.BASE_SCALE_REDUCTION);
        const fragmentScale = baseScale + seededRandom(fragmentSeed + 3) * scaleVariation;
        
        const offsetMagnitude = fragmentDistortion * SHATTER_CONFIG.MAX_OFFSET_MAGNITUDE;
        const fragmentOffsetX = (seededRandom(fragmentSeed + 4) - 0.5) * offsetMagnitude;
        const fragmentOffsetY = (seededRandom(fragmentSeed + 5) - 0.5) * offsetMagnitude;

        // 计算该碎片的图像参数（基于全局position和碎片独立参数）
        const finalScale = position.scale * fragmentScale;
        const imageSize = 100 * finalScale;
        const imageX = (100 - imageSize) / 2 + (position.x + fragmentOffsetX) * 50;
        const imageY = (100 - imageSize) / 2 + (position.y + fragmentOffsetY) * 50;

        const maskId = `shard-${i}-${j}`;

        result.push(
          <g key={`fragment-${i}-${j}`}>
            <defs>
              <mask id={maskId}>
                <path d={subPath} fill="white" />
              </mask>
            </defs>
            <image
              href={imageUrl}
              x={imageX}
              y={imageY}
              width={imageSize}
              height={imageSize}
              preserveAspectRatio="xMidYMid slice"
              mask={`url(#${maskId})`}
            />
          </g>
        );
      }
    }

    return result;
  }, [radialAngles, ringRadii, outerRadius, shatterIntensity, fragmentDistortion, position, imageUrl]);

  // 使用 useMemo 缓存裂纹线条生成
  const crackLines = useMemo(() => {
    const result: JSX.Element[] = [];

    // 径向裂纹
    for (let i = 0; i < RADIAL_CRACKS; i++) {
      const seed = i * 100;
      const randomAngle = seededRandom(seed) * 360;
      const crackAngle = (randomAngle - 90) * Math.PI / 180;

      const innerX = 50;
      const innerY = 50;
      const outerX = 50 + outerRadius * Math.cos(crackAngle);
      const outerY = 50 + outerRadius * Math.sin(crackAngle);

      result.push(
        <line
          key={`radial-crack-${i}`}
          x1={innerX}
          y1={innerY}
          x2={outerX}
          y2={outerY}
          stroke={`rgba(0, 0, 0, ${SHATTER_CONFIG.CRACK_OPACITY})`}
          strokeWidth={SHATTER_CONFIG.CRACK_WIDTH}
          strokeLinecap="round"
        />
      );
    }

    // 环形裂纹
    for (let i = 1; i <= 3; i++) {
      const seed = i * 200;
      const baseRadius = (outerRadius * i / 4);
      const radiusOffset = (seededRandom(seed) - 0.5) * outerRadius * 0.08;
      const ringRadius = baseRadius + radiusOffset;

      result.push(
        <circle
          key={`ring-crack-${i}`}
          cx={50}
          cy={50}
          r={ringRadius}
          fill="none"
          stroke={`rgba(0, 0, 0, ${SHATTER_CONFIG.RING_CRACK_OPACITY})`}
          strokeWidth={SHATTER_CONFIG.RING_CRACK_WIDTH}
        />
      );
    }

    return result;
  }, [outerRadius, RADIAL_CRACKS]);

  return (
    <>
      {fragments}
      {crackLines}
    </>
  );
});
