import { memo, useMemo } from 'react';
import { seededRandom } from '../utils/helpers';
import type { ShapeType, ImagePosition } from '../types';
import { ShatteredFragments } from './ShatteredFragments';

interface RingSegmentProps {
  imageUrl: string;
  segmentIndex: number;
  outerRadius: number;
  innerRadius: number;
  totalSegments: number;
  position?: ImagePosition;
  shapeType?: ShapeType;
  petalWidth?: number;
  petalLength?: number;
  gapWidth?: number;
  shatterIntensity?: number;
  fragmentDistortion?: number;
}

/**
 * 圆环扇区组件
 * 使用 React.memo 优化性能，避免不必要的重新渲染
 */
export const RingSegment = memo(function RingSegment({
  imageUrl,
  segmentIndex,
  outerRadius,
  innerRadius,
  totalSegments,
  position = { x: 0, y: 0, scale: 1 },
  shapeType = 'ring',
  petalWidth = 0.6,
  petalLength = 0.8,
  gapWidth = 0,
  shatterIntensity = 0.15,
  fragmentDistortion = 0.05
}: RingSegmentProps) {
  // 单图模式检测
  const isSingleImageMode = totalSegments === 1;
  // 多边形特殊处理：1-2等分时都显示完整六边形
  const isPolygonFullMode = shapeType === 'polygon' && totalSegments <= 2;

  // 破碎镜面1等分特殊渲染：使用碎片组件
  if (isSingleImageMode && shapeType === 'shattered') {
    return (
      <ShatteredFragments
        imageUrl={imageUrl}
        outerRadius={outerRadius}
        position={position}
        shatterIntensity={shatterIntensity}
        fragmentDistortion={fragmentDistortion}
      />
    );
  }

  // 破碎镜面特殊处理：在用户设定的间隙基础上添加随机变化
  let effectiveGapWidth = gapWidth;
  if (shapeType === 'shattered' && !isSingleImageMode) {
    const seed = segmentIndex * 777; // 每个扇区独立的随机种子
    const randomVariation = (seededRandom(seed) - 0.5) * 2; // -1 到 +1 度的随机变化
    effectiveGapWidth = gapWidth + randomVariation; // 基于用户设置 + 随机偏移
  }

  const anglePerSegment = 360 / totalSegments;
  const startAngle = segmentIndex * anglePerSegment - 90 + effectiveGapWidth / 2;
  const endAngle = (segmentIndex + 1) * anglePerSegment - 90 - effectiveGapWidth / 2;

  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const midAngle = (startAngle + endAngle) / 2;
  const midRad = (midAngle * Math.PI) / 180;

  const outerStartX = 50 + outerRadius * Math.cos(startRad);
  const outerStartY = 50 + outerRadius * Math.sin(startRad);
  const outerEndX = 50 + outerRadius * Math.cos(endRad);
  const outerEndY = 50 + outerRadius * Math.sin(endRad);

  const innerStartX = 50 + innerRadius * Math.cos(startRad);
  const innerStartY = 50 + innerRadius * Math.sin(startRad);
  const innerEndX = 50 + innerRadius * Math.cos(endRad);
  const innerEndY = 50 + innerRadius * Math.sin(endRad);

  let pathData: string;

  // ========== 单图模式：绘制完整图形 ==========
  if (isSingleImageMode || isPolygonFullMode) {
    if (shapeType === 'ring' || shapeType === 'pie') {
      // 完整圆形或圆环 - 使用两个半圆避免渲染问题
      if (innerRadius > 0) {
        // 圆环：外圆 - 内圆
        pathData = [
          // 外圆（顺时针两个半圆）
          `M ${50 - outerRadius} 50`,
          `A ${outerRadius} ${outerRadius} 0 0 1 ${50 + outerRadius} 50`,
          `A ${outerRadius} ${outerRadius} 0 0 1 ${50 - outerRadius} 50`,
          'Z',
          // 内圆（逆时针两个半圆，挖空）
          `M ${50 - innerRadius} 50`,
          `A ${innerRadius} ${innerRadius} 0 0 0 ${50 + innerRadius} 50`,
          `A ${innerRadius} ${innerRadius} 0 0 0 ${50 - innerRadius} 50`,
          'Z'
        ].join(' ');
      } else {
        // 完整圆形
        pathData = [
          `M ${50 - outerRadius} 50`,
          `A ${outerRadius} ${outerRadius} 0 0 1 ${50 + outerRadius} 50`,
          `A ${outerRadius} ${outerRadius} 0 0 1 ${50 - outerRadius} 50`,
          'Z'
        ].join(' ');
      }

    } else if (shapeType === 'aperture') {
      // 完整快门形状 - 正多边形孔
      const sides = 8; // 8边形快门
      const polygonRadius = innerRadius * 1.5;
      const polygonPoints: string[] = [];
      const outerPoints: string[] = [];

      for (let i = 0; i < sides; i++) {
        const angle = (i * 360 / sides - 90) * Math.PI / 180;
        const nextAngle = ((i + 1) * 360 / sides - 90) * Math.PI / 180;

        const px = 50 + polygonRadius * Math.cos(angle);
        const py = 50 + polygonRadius * Math.sin(angle);

        const ox = 50 + outerRadius * Math.cos(angle);
        const oy = 50 + outerRadius * Math.sin(angle);
        const onx = 50 + outerRadius * Math.cos(nextAngle);
        const ony = 50 + outerRadius * Math.sin(nextAngle);

        if (i === 0) {
          outerPoints.push(`M ${ox} ${oy}`);
        }
        outerPoints.push(`A ${outerRadius} ${outerRadius} 0 0 1 ${onx} ${ony}`);

        if (i === 0) {
          polygonPoints.push(`M ${px} ${py}`);
        } else {
          polygonPoints.push(`L ${px} ${py}`);
        }
      }

      pathData = [...outerPoints, 'Z', ...polygonPoints, 'Z'].join(' ');

    } else if (shapeType === 'petal') {
      // 完整花朵 - 多个花瓣组成
      const numPetals = 6;
      const petals: string[] = [];

      for (let i = 0; i < numPetals; i++) {
        const petalAngle = (i * 360 / numPetals - 90);
        const petalMidRad = (petalAngle * Math.PI) / 180;
        const petalMaxRadius = outerRadius * petalLength;
        const widthAngle = (360 / numPetals * petalWidth) / 2;

        const leftAngle = petalAngle - widthAngle;
        const rightAngle = petalAngle + widthAngle;

        const leftRad = (leftAngle * Math.PI) / 180;
        const rightRad = (rightAngle * Math.PI) / 180;

        const tipX = 50 + petalMaxRadius * Math.cos(petalMidRad);
        const tipY = 50 + petalMaxRadius * Math.sin(petalMidRad);

        const baseRadius = outerRadius * 0.1;
        const baseLeftX = 50 + baseRadius * Math.cos(leftRad);
        const baseLeftY = 50 + baseRadius * Math.sin(leftRad);
        const baseRightX = 50 + baseRadius * Math.cos(rightRad);
        const baseRightY = 50 + baseRadius * Math.sin(rightRad);

        const ctrlRadius = petalMaxRadius * 0.65;
        const leftCtrlX = 50 + ctrlRadius * Math.cos(leftRad);
        const leftCtrlY = 50 + ctrlRadius * Math.sin(leftRad);
        const rightCtrlX = 50 + ctrlRadius * Math.cos(rightRad);
        const rightCtrlY = 50 + ctrlRadius * Math.sin(rightRad);

        petals.push([
          `M ${baseLeftX} ${baseLeftY}`,
          `Q ${leftCtrlX} ${leftCtrlY} ${tipX} ${tipY}`,
          `Q ${rightCtrlX} ${rightCtrlY} ${baseRightX} ${baseRightY}`,
          'Z'
        ].join(' '));
      }

      pathData = petals.join(' ');

    } else if (shapeType === 'polygon') {
      // 完整正多边形
      const sides = 6; // 六边形
      const points: string[] = [];
      const innerPoints: string[] = [];

      for (let i = 0; i < sides; i++) {
        const angle = (i * 360 / sides - 90) * Math.PI / 180;
        const ox = 50 + outerRadius * Math.cos(angle);
        const oy = 50 + outerRadius * Math.sin(angle);
        const ix = 50 + innerRadius * Math.cos(angle);
        const iy = 50 + innerRadius * Math.sin(angle);

        if (i === 0) {
          points.push(`M ${ox} ${oy}`);
          if (innerRadius > 0) innerPoints.push(`M ${ix} ${iy}`);
        } else {
          points.push(`L ${ox} ${oy}`);
          if (innerRadius > 0) innerPoints.push(`L ${ix} ${iy}`);
        }
      }

      pathData = [...points, 'Z', ...innerPoints, innerRadius > 0 ? 'Z' : ''].filter(Boolean).join(' ');

    } else {
      // 默认完整圆形
      pathData = [
        `M ${50 + outerRadius} 50`,
        `A ${outerRadius} ${outerRadius} 0 1 1 ${50 + outerRadius} 49.99`
      ].join(' ');
    }

  } else {
    // ========== 多图模式：原有的扇区分割逻辑 ==========

    if (shapeType === 'aperture') {
      // 快门形状 - 中间形成多边形
      const polygonRadius = innerRadius * 1.5;

      const polygonStartAngle = startAngle + anglePerSegment / 2;
      const polygonEndAngle = endAngle + anglePerSegment / 2;

      const polygonStartRad = (polygonStartAngle * Math.PI) / 180;
      const polygonEndRad = (polygonEndAngle * Math.PI) / 180;

      const polyStartX = 50 + polygonRadius * Math.cos(polygonStartRad);
      const polyStartY = 50 + polygonRadius * Math.sin(polygonStartRad);
      const polyEndX = 50 + polygonRadius * Math.cos(polygonEndRad);
      const polyEndY = 50 + polygonRadius * Math.sin(polygonEndRad);

      pathData = [
        `M ${outerStartX} ${outerStartY}`,
        `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEndX} ${outerEndY}`,
        `L ${polyEndX} ${polyEndY}`,
        `L ${polyStartX} ${polyStartY}`,
        'Z'
      ].join(' ');

    } else if (shapeType === 'petal') {
      // 花瓣形状 - 从中心向外的独立花瓣
      const petalMaxRadius = outerRadius * petalLength;
      const widthAngle = (anglePerSegment * petalWidth) / 2;

      const leftAngle = midAngle - widthAngle;
      const rightAngle = midAngle + widthAngle;

      const leftRad = (leftAngle * Math.PI) / 180;
      const rightRad = (rightAngle * Math.PI) / 180;

      // 花瓣顶端
      const tipX = 50 + petalMaxRadius * Math.cos(midRad);
      const tipY = 50 + petalMaxRadius * Math.sin(midRad);

      // 花瓣基部
      const baseRadius = outerRadius * 0.1;
      const baseLeftX = 50 + baseRadius * Math.cos(leftRad);
      const baseLeftY = 50 + baseRadius * Math.sin(leftRad);
      const baseRightX = 50 + baseRadius * Math.cos(rightRad);
      const baseRightY = 50 + baseRadius * Math.sin(rightRad);

      // 控制点
      const ctrlRadius = petalMaxRadius * 0.65;
      const leftCtrlX = 50 + ctrlRadius * Math.cos(leftRad);
      const leftCtrlY = 50 + ctrlRadius * Math.sin(leftRad);
      const rightCtrlX = 50 + ctrlRadius * Math.cos(rightRad);
      const rightCtrlY = 50 + ctrlRadius * Math.sin(rightRad);

      pathData = [
        `M ${baseLeftX} ${baseLeftY}`,
        `Q ${leftCtrlX} ${leftCtrlY} ${tipX} ${tipY}`,
        `Q ${rightCtrlX} ${rightCtrlY} ${baseRightX} ${baseRightY}`,
        `L ${baseLeftX} ${baseLeftY}`,
        'Z'
      ].join(' ');

    } else if (shapeType === 'polygon') {
      // 多边形形状 - 环形多边形梯形
      // 使用扇区的起始和结束角度作为顶点
      const outerVertex1X = 50 + outerRadius * Math.cos(startRad);
      const outerVertex1Y = 50 + outerRadius * Math.sin(startRad);
      const outerVertex2X = 50 + outerRadius * Math.cos(endRad);
      const outerVertex2Y = 50 + outerRadius * Math.sin(endRad);

      const innerVertex1X = 50 + innerRadius * Math.cos(startRad);
      const innerVertex1Y = 50 + innerRadius * Math.sin(startRad);
      const innerVertex2X = 50 + innerRadius * Math.cos(endRad);
      const innerVertex2Y = 50 + innerRadius * Math.sin(endRad);

      pathData = [
        `M ${outerVertex1X} ${outerVertex1Y}`,
        `L ${outerVertex2X} ${outerVertex2Y}`,
        `L ${innerVertex2X} ${innerVertex2Y}`,
        innerRadius > 0 ? `L ${innerVertex1X} ${innerVertex1Y}` : '',
        'Z'
      ].filter(Boolean).join(' ');

    } else if (shapeType === 'shattered') {
      // 破碎镜面 - 保持扇形轮廓，内部产生裂纹
      const angleSpanRad = (endAngle - startAngle) * Math.PI / 180;
      const numCracks = 3; // 径向裂纹数量
      const paths: string[] = [];

      // 生成径向裂纹分割线
      const crackAngles: number[] = [];
      for (let i = 0; i <= numCracks; i++) {
        const seed = segmentIndex * 1000 + i * 50;
        const ratio = i / numCracks;
        const angleOffset = (seededRandom(seed) - 0.5) * 0.2; // 轻微偏移
        const crackAngle = startAngle + (endAngle - startAngle) * (ratio + angleOffset);
        crackAngles.push(crackAngle);
      }

      // 为每个子扇形创建路径
      for (let i = 0; i < crackAngles.length - 1; i++) {
        const subStartAngle = crackAngles[i];
        const subEndAngle = crackAngles[i + 1];
        const subStartRad = (subStartAngle * Math.PI) / 180;
        const subEndRad = (subEndAngle * Math.PI) / 180;

        const seed = segmentIndex * 1000 + i * 100;

        // 位移和旋转（基于破碎强度）
        const offsetAngle = (seededRandom(seed + 1) - 0.5) * angleSpanRad * shatterIntensity * 0.3;
        const offsetRadius = (seededRandom(seed + 2) - 0.5) * outerRadius * shatterIntensity * 0.5;

        // 应用偏移
        const adjustedStartRad = subStartRad + offsetAngle;
        const adjustedEndRad = subEndRad + offsetAngle;
        const radiusOffset = offsetRadius;

        const outerStartX = 50 + (outerRadius + radiusOffset) * Math.cos(adjustedStartRad);
        const outerStartY = 50 + (outerRadius + radiusOffset) * Math.sin(adjustedStartRad);
        const outerEndX = 50 + (outerRadius + radiusOffset) * Math.cos(adjustedEndRad);
        const outerEndY = 50 + (outerRadius + radiusOffset) * Math.sin(adjustedEndRad);

        const innerStartX = 50 + radiusOffset * Math.cos(adjustedStartRad);
        const innerStartY = 50 + radiusOffset * Math.sin(adjustedStartRad);
        const innerEndX = 50 + radiusOffset * Math.cos(adjustedEndRad);
        const innerEndY = 50 + radiusOffset * Math.sin(adjustedEndRad);

        const subPath = [
          `M ${outerStartX} ${outerStartY}`,
          `A ${outerRadius + radiusOffset} ${outerRadius + radiusOffset} 0 0 1 ${outerEndX} ${outerEndY}`,
          `L ${innerEndX} ${innerEndY}`,
          `L ${innerStartX} ${innerStartY}`,
          'Z'
        ].join(' ');

        paths.push(subPath);
      }

      pathData = paths.join(' ');

    } else {
      // 圆环或饼图形状
      pathData = [
        `M ${outerStartX} ${outerStartY}`,
        `A ${outerRadius} ${outerRadius} 0 0 1 ${outerEndX} ${outerEndY}`,
        `L ${innerEndX} ${innerEndY}`,
        innerRadius > 0
          ? `A ${innerRadius} ${innerRadius} 0 0 0 ${innerStartX} ${innerStartY}`
          : `L 50 50`,
        'Z'
      ].join(' ');
    }
  }

  const maskId = `segment-mask-${segmentIndex}-${shapeType}`;

  const imageSize = 100 * position.scale;
  const imageX = (100 - imageSize) / 2 + position.x * 50;
  const imageY = (100 - imageSize) / 2 + position.y * 50;

  // 生成裂纹线条（仅用于破碎镜面多图模式）
  let crackLines: JSX.Element[] = [];
  if (shapeType === 'shattered' && !isSingleImageMode) {
    // 多图模式：原有的扇区裂纹
    const numCracks = 3;
    for (let i = 1; i < numCracks; i++) {
      const seed = segmentIndex * 1000 + i * 50;
      const ratio = i / numCracks;
      const angleOffset = (seededRandom(seed) - 0.5) * 0.2;
      const crackAngle = startAngle + (endAngle - startAngle) * (ratio + angleOffset);
      const crackRad = (crackAngle * Math.PI) / 180;

      const innerX = 50;
      const innerY = 50;
      const outerX = 50 + outerRadius * Math.cos(crackRad);
      const outerY = 50 + outerRadius * Math.sin(crackRad);

      crackLines.push(
        <line
          key={`crack-${segmentIndex}-${i}`}
          x1={innerX}
          y1={innerY}
          x2={outerX}
          y2={outerY}
          stroke="rgba(0, 0, 0, 0.3)"
          strokeWidth="0.15"
          strokeLinecap="round"
        />
      );
    }
  }

  return (
    <>
      <defs>
        <mask id={maskId}>
          <path d={pathData} fill="white" />
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
      {crackLines}
    </>
  );
});