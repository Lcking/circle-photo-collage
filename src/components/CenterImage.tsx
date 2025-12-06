import { memo } from 'react';
import type { ImagePosition } from '../types';

interface CenterImageProps {
    imageUrl: string | null;
    radius: number;
    position: ImagePosition;
}

/**
 * 中心图片组件
 * 在圆环中心显示圆形裁剪的图片
 */
export const CenterImage = memo(function CenterImage({
    imageUrl,
    radius,
    position
}: CenterImageProps) {
    // 如果没有图片，不渲染任何内容
    if (!imageUrl || radius <= 0) {
        return null;
    }

    const maskId = 'center-image-mask';

    const imageSize = 100 * position.scale;
    const imageX = (100 - imageSize) / 2 + position.x * 50;
    const imageY = (100 - imageSize) / 2 + position.y * 50;

    return (
        <>
            <defs>
                <mask id={maskId}>
                    <circle cx={50} cy={50} r={radius} fill="white" />
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
        </>
    );
});
