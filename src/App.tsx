import { useState, useRef, useCallback, useMemo } from 'react';
import { Upload, Download, Move, Circle, Aperture, Flower, PieChart, Settings2, Hexagon, Sparkles, Trash2 } from 'lucide-react';
import { RingSegment } from './components/RingSegment';
import { CenterImage } from './components/CenterImage';
import { SEGMENT_COLORS } from './utils/constants';
import { seededRandom } from './utils/helpers';
import type { ShapeType, ImagePosition } from './types';

export default function App() {
  const defaultImages = [
    'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0fGVufDF8fHx8MTc2NDU1Njc5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMGJlYWNofGVufDF8fHx8MTc2NDQ5MDA3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1493134799591-2c9eed26201a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjQ1MTMzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3Jlc3QlMjB0cmVlc3xlbnwxfHx8fDE3NjQ1NDgzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1614935981447-893ce3858657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzdW5zZXR8ZW58MXx8fHwxNzY0NDk5MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    'https://images.unsplash.com/photo-1602938016996-a03a287ca891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXJzJTIwZ2FyZGVufGVufDF8fHx8MTc2NDU3NDM4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  ];

  const [segmentCount, setSegmentCount] = useState(6);
  const [shapeType, setShapeType] = useState<ShapeType>('ring');
  const [images, setImages] = useState<string[]>(defaultImages);
  const [outerRadius, setOuterRadius] = useState(45);
  const [innerRadius, setInnerRadius] = useState(25);
  const [petalWidth, setPetalWidth] = useState(0.6); // 花瓣胖瘦
  const [petalLength, setPetalLength] = useState(0.8); // 花瓣长度
  const [gapWidth, setGapWidth] = useState(2); // 间隙宽度（度数）
  const [shatterIntensity, setShatterIntensity] = useState(0.15); // 破碎强度
  const [fragmentDistortion, setFragmentDistortion] = useState(0.3); // 碎片扭曲度（图像变化强度）
  const [isExporting, setIsExporting] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const [imagePositions, setImagePositions] = useState<ImagePosition[]>(
    Array(8).fill(null).map(() => ({ x: 0, y: 0, scale: 1 }))
  );
  const svgRef = useRef<SVGSVGElement>(null);

  // 中心图片状态
  const [centerImage, setCenterImage] = useState<string | null>(null);
  const [centerImagePosition, setCenterImagePosition] = useState<ImagePosition>({ x: 0, y: 0, scale: 1 });
  const [selectedCenterImage, setSelectedCenterImage] = useState(false);

  const handleSegmentCountChange = useCallback((count: number) => {
    setSegmentCount(count);
    if (selectedSegment !== null && selectedSegment >= count) {
      setSelectedSegment(null);
    }
  }, [selectedSegment]);

  const handleImageUpload = useCallback((index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages(prev => {
          const newImages = [...prev];
          newImages[index] = event.target?.result as string;
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const updateImagePosition = useCallback((index: number, key: 'x' | 'y' | 'scale', value: number) => {
    setImagePositions(prev => {
      const newPositions = [...prev];
      newPositions[index] = { ...newPositions[index], [key]: value };
      return newPositions;
    });
  }, []);

  // 中心图片上传处理
  const handleCenterImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCenterImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  // 更新中心图片位置
  const updateCenterImagePosition = useCallback((key: 'x' | 'y' | 'scale', value: number) => {
    setCenterImagePosition(prev => ({ ...prev, [key]: value }));
  }, []);

  // 清除中心图片
  const clearCenterImage = useCallback(() => {
    setCenterImage(null);
    setCenterImagePosition({ x: 0, y: 0, scale: 1 });
    setSelectedCenterImage(false);
  }, []);

  // 是否支持中心图片：有内圆且不是花瓣/破碎镜面
  const supportsCenterImage = innerRadius > 0 && shapeType !== 'pie' && shapeType !== 'petal' && shapeType !== 'shattered';

  const exportSVG = () => {
    setIsExporting(true);
    const svgElement = svgRef.current;
    if (svgElement) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${shapeType}-collage.svg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
    setIsExporting(false);
  };

  const exportPNG = async () => {
    setIsExporting(true);

    try {
      const size = 2000;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        setIsExporting(false);
        return;
      }

      // For shattered mode with 1 segment, use SVG-to-Canvas rendering
      // to preserve the complex fragment effects
      if (shapeType === 'shattered' && segmentCount === 1 && svgRef.current) {
        const svgElement = svgRef.current;
        const svgData = new XMLSerializer().serializeToString(svgElement);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, 0, 0, size, size);
          URL.revokeObjectURL(url);

          canvas.toBlob((blob) => {
            if (blob) {
              const downloadUrl = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = downloadUrl;
              a.download = `${shapeType}-collage.png`;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(downloadUrl);
            }
            setIsExporting(false);
          }, 'image/png');
        };
        img.onerror = () => {
          console.error('SVG to Canvas conversion failed');
          setIsExporting(false);
          alert('Export failed. Please try again.');
        };
        img.src = url;
        return;
      }

      const loadImage = (url: string): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => resolve(img);
          img.onerror = reject;
          img.src = url;
        });
      };

      const imageElements = await Promise.all(
        images.slice(0, segmentCount).map(url => loadImage(url))
      );

      const centerX = size / 2;
      const centerY = size / 2;
      const outerR = (outerRadius / 100) * size;
      const innerR = shapeType === 'pie' ? 0 : (innerRadius / 100) * size;
      const anglePerSegment = (360 / segmentCount) * (Math.PI / 180);
      const gapRad = (gapWidth * Math.PI) / 180;

      imageElements.forEach((img, index) => {
        ctx.save();

        const startAngle = index * anglePerSegment - Math.PI / 2 + gapRad / 2;
        const endAngle = (index + 1) * anglePerSegment - Math.PI / 2 - gapRad / 2;
        const midAngle = (startAngle + endAngle) / 2;

        ctx.beginPath();

        if (shapeType === 'aperture') {
          const polygonRadius = innerR * 1.5;
          const polygonStartAngle = startAngle + anglePerSegment / 2;
          const polygonEndAngle = endAngle + anglePerSegment / 2;

          const polyStartX = centerX + polygonRadius * Math.cos(polygonStartAngle);
          const polyStartY = centerY + polygonRadius * Math.sin(polygonStartAngle);
          const polyEndX = centerX + polygonRadius * Math.cos(polygonEndAngle);
          const polyEndY = centerY + polygonRadius * Math.sin(polygonEndAngle);

          ctx.arc(centerX, centerY, outerR, startAngle, endAngle);
          ctx.lineTo(polyEndX, polyEndY);
          ctx.lineTo(polyStartX, polyStartY);
          ctx.closePath();

        } else if (shapeType === 'petal') {
          // 花瓣形状 - 从中心向外，独立花瓣
          const petalMaxRadius = outerR * petalLength;
          const widthAngle = (anglePerSegment * petalWidth) / 2;

          const leftAngle = midAngle - widthAngle;
          const rightAngle = midAngle + widthAngle;

          // 花瓣的四个关键点
          const tipX = centerX + petalMaxRadius * Math.cos(midAngle);
          const tipY = centerY + petalMaxRadius * Math.sin(midAngle);

          const baseLeftX = centerX + innerR * 0.2 * Math.cos(leftAngle);
          const baseLeftY = centerY + innerR * 0.2 * Math.sin(leftAngle);

          const baseRightX = centerX + innerR * 0.2 * Math.cos(rightAngle);
          const baseRightY = centerY + innerR * 0.2 * Math.sin(rightAngle);

          // 左侧控制点
          const leftCtrlRadius = petalMaxRadius * 0.6;
          const leftCtrlX = centerX + leftCtrlRadius * Math.cos(leftAngle);
          const leftCtrlY = centerY + leftCtrlRadius * Math.sin(leftAngle);

          // 右侧控制点
          const rightCtrlRadius = petalMaxRadius * 0.6;
          const rightCtrlX = centerX + rightCtrlRadius * Math.cos(rightAngle);
          const rightCtrlY = centerY + rightCtrlRadius * Math.sin(rightAngle);

          // 绘制花瓣
          ctx.moveTo(baseLeftX, baseLeftY);
          ctx.quadraticCurveTo(leftCtrlX, leftCtrlY, tipX, tipY);
          ctx.quadraticCurveTo(rightCtrlX, rightCtrlY, baseRightX, baseRightY);
          ctx.lineTo(baseLeftX, baseLeftY);
          ctx.closePath();

        } else if (shapeType === 'polygon') {
          // 多边形 - 环形多边形梯形
          const vertex1Angle = startAngle + anglePerSegment / 2;
          const vertex2Angle = endAngle + anglePerSegment / 2;

          const outerVertex1X = centerX + outerR * Math.cos(vertex1Angle);
          const outerVertex1Y = centerY + outerR * Math.sin(vertex1Angle);
          const outerVertex2X = centerX + outerR * Math.cos(vertex2Angle);
          const outerVertex2Y = centerY + outerR * Math.sin(vertex2Angle);

          const innerVertex1X = centerX + innerR * Math.cos(vertex1Angle);
          const innerVertex1Y = centerY + innerR * Math.sin(vertex1Angle);
          const innerVertex2X = centerX + innerR * Math.cos(vertex2Angle);
          const innerVertex2Y = centerY + innerR * Math.sin(vertex2Angle);

          ctx.moveTo(outerVertex1X, outerVertex1Y);
          ctx.lineTo(outerVertex2X, outerVertex2Y);
          ctx.lineTo(innerVertex2X, innerVertex2Y);
          if (innerR > 0) {
            ctx.lineTo(innerVertex1X, innerVertex1Y);
          }
          ctx.closePath();

        } else if (shapeType === 'shattered') {
          // 破碎镜面 - 保持扇形轮廓，内部产生裂纹
          const numCracks = 3; // 径向裂纹数量

          // 生成径向裂纹分割线
          const crackAngles: number[] = [];
          for (let i = 0; i <= numCracks; i++) {
            const seed = index * 1000 + i * 50;
            const ratio = i / numCracks;
            const angleOffset = (seededRandom(seed) - 0.5) * 0.2;
            const crackAngle = startAngle + (endAngle - startAngle) * (ratio + angleOffset);
            crackAngles.push(crackAngle);
          }

          // 为每个子扇形绘制
          for (let i = 0; i < crackAngles.length - 1; i++) {
            const subStartAngle = crackAngles[i];
            const subEndAngle = crackAngles[i + 1];

            const seed = index * 1000 + i * 100;

            // 位移和旋转（基于破碎强度）
            const offsetAngle = (seededRandom(seed + 1) - 0.5) * anglePerSegment * shatterIntensity * 0.3;
            const offsetRadius = (seededRandom(seed + 2) - 0.5) * outerR * shatterIntensity * 0.5;

            const adjustedStartAngle = subStartAngle + offsetAngle;
            const adjustedEndAngle = subEndAngle + offsetAngle;

            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, outerR + offsetRadius, adjustedStartAngle, adjustedEndAngle);
            ctx.lineTo(centerX, centerY);
            ctx.closePath();
          }

        } else {
          // 圆环或饼图
          ctx.arc(centerX, centerY, outerR, startAngle, endAngle);
          ctx.lineTo(
            centerX + innerR * Math.cos(endAngle),
            centerY + innerR * Math.sin(endAngle)
          );
          if (innerR > 0) {
            ctx.arc(centerX, centerY, innerR, endAngle, startAngle, true);
          }
          ctx.closePath();
        }

        ctx.clip();

        const pos = imagePositions[index];
        const imgSize = size * pos.scale;
        const offsetX = (size - imgSize) / 2 + pos.x * size * 0.5;
        const offsetY = (size - imgSize) / 2 + pos.y * size * 0.5;

        ctx.drawImage(img, offsetX, offsetY, imgSize, imgSize);

        ctx.restore();
      });

      // 绘制裂纹线条（仅用于破碎镜面）
      if (shapeType === 'shattered') {
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.lineWidth = size * 0.002;
        ctx.lineCap = 'round';

        for (let index = 0; index < segmentCount; index++) {
          const startAngle = index * anglePerSegment - Math.PI / 2 + gapRad / 2;
          const endAngle = (index + 1) * anglePerSegment - Math.PI / 2 - gapRad / 2;

          const numCracks = 3;
          for (let i = 1; i < numCracks; i++) {
            const seed = index * 1000 + i * 50;
            const ratio = i / numCracks;
            const angleOffset = (seededRandom(seed) - 0.5) * 0.2;
            const crackAngle = startAngle + (endAngle - startAngle) * (ratio + angleOffset);

            const innerX = centerX;
            const innerY = centerY;
            const outerX = centerX + outerR * Math.cos(crackAngle);
            const outerY = centerY + outerR * Math.sin(crackAngle);

            ctx.beginPath();
            ctx.moveTo(innerX, innerY);
            ctx.lineTo(outerX, outerY);
            ctx.stroke();
          }
        }
      }

      // 绘制中心图片（如果有）
      if (centerImage && innerR > 0 && shapeType !== 'pie' && shapeType !== 'petal' && shapeType !== 'shattered') {
        try {
          const centerImg = await loadImage(centerImage);
          ctx.save();

          // 创建圆形裁剪区域
          ctx.beginPath();
          ctx.arc(centerX, centerY, innerR, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          // 绘制中心图片
          const pos = centerImagePosition;
          const imgSize = size * pos.scale;
          const offsetX = (size - imgSize) / 2 + pos.x * size * 0.5;
          const offsetY = (size - imgSize) / 2 + pos.y * size * 0.5;

          ctx.drawImage(centerImg, offsetX, offsetY, imgSize, imgSize);
          ctx.restore();
        } catch (e) {
          console.error('Center image load error:', e);
        }
      }

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${shapeType}-collage.png`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        }
        setIsExporting(false);
      }, 'image/png');
    } catch (error) {
      console.error('Export error:', error);
      setIsExporting(false);
      alert('Export failed. Please try using locally uploaded images.');
    }
  };

  const shapeOptions = useMemo(() => [
    { type: 'ring' as ShapeType, name: 'Ring', nameEn: 'Ring', icon: Circle },
    { type: 'pie' as ShapeType, name: 'Pie', nameEn: 'Pie', icon: PieChart },
    { type: 'aperture' as ShapeType, name: 'Aperture', nameEn: 'Aperture', icon: Aperture },
    { type: 'petal' as ShapeType, name: 'Petal', nameEn: 'Petal', icon: Flower },
    { type: 'polygon' as ShapeType, name: 'Polygon', nameEn: 'Polygon', icon: Hexagon },
    { type: 'shattered' as ShapeType, name: 'Shattered', nameEn: 'Shattered', icon: Sparkles }
  ], []);

  const showInnerRadius = shapeType !== 'pie' && shapeType !== 'petal' && shapeType !== 'shattered';
  const showPetalControls = shapeType === 'petal';
  const showShatterControls = shapeType === 'shattered';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section - Ultra Premium Design */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
          {/* Darker overlay for text contrast */}
          <div className="absolute inset-0 bg-slate-900/40"></div>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto text-center py-28 md:py-36 px-6">

          {/* Brand Badge */}
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 mb-12 shadow-2xl hover:bg-white/15 transition-colors cursor-default">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
            </span>
            <span className="text-base font-semibold text-white tracking-wide">Free Online Tool</span>
            <span className="w-1.5 h-1.5 bg-white/60 rounded-full"></span>
            <span className="text-base font-semibold text-white tracking-wide">No Account Required</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-12">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
              Create Stunning
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white drop-shadow-2xl">
              Circle Photo Collages
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white font-medium mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Transform your photos into beautiful circular and ring-shaped collages.
            Perfect for social media, posters, and creative projects.
          </p>

          {/* Consolidated Feature Bar - One Single Glass Container */}
          <div className="inline-flex flex-wrap md:flex-nowrap items-center justify-center gap-10 md:gap-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl px-14 py-8 mb-10 shadow-2xl hover:bg-white/10 transition-colors duration-300">
            <div className="flex items-center gap-5">
              <span className="text-4xl">🎯</span>
              <div className="text-left">
                <div className="font-bold text-white text-lg">Ring Layouts</div>
                <div className="text-purple-200 text-sm">6 unique templates</div>
              </div>
            </div>

            {/* Divider (hidden on mobile) */}
            <div className="hidden md:block w-px h-12 bg-white/20"></div>

            <div className="flex items-center gap-5">
              <span className="text-4xl">✨</span>
              <div className="text-left">
                <div className="font-bold text-white text-lg">Precise Control</div>
                <div className="text-purple-200 text-sm">Position & scale</div>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-white/20"></div>

            <div className="flex items-center gap-5">
              <span className="text-4xl">🚀</span>
              <div className="text-left">
                <div className="font-bold text-white text-lg">HD Export</div>
                <div className="text-purple-200 text-sm">PNG & SVG</div>
              </div>
            </div>
          </div>

          {/* Start Designing Button - Solid Purple Gradient */}
          <div className="flex flex-col items-center gap-6">
            <button
              onClick={() => document.getElementById('collage-interface')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 rounded-full px-14 py-6 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-lg md:text-xl font-bold text-white tracking-widest uppercase">
                Start Designing
              </span>
            </button>

            {/* Bouncing Arrow - detached */}
            <div className="text-white/50 animate-bounce cursor-pointer" onClick={() => document.getElementById('collage-interface')?.scrollIntoView({ behavior: 'smooth' })}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main App Section */}
      <div className="flex items-center justify-center px-8 pb-12">
        <div className="max-w-7xl w-full">

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Control Panel */}
            <div className="lg:col-span-1 space-y-4">
              {/* Shape Selection */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Settings2 className="w-5 h-5 text-purple-300" />
                  <h2 className="text-white">Shape Templates</h2>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {shapeOptions.map((option) => (
                    <button
                      key={option.type}
                      onClick={() => setShapeType(option.type)}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${shapeType === option.type
                        ? 'bg-purple-600 ring-2 ring-purple-400'
                        : 'bg-white/5 hover:bg-white/10'
                        } text-white`}
                    >
                      <option.icon className="w-6 h-6" />
                      <div className="text-center">
                        <div className="text-sm">{option.name}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-white/20">
                  <label className="block text-white text-sm mb-2">Segments</label>
                  <div className="grid grid-cols-8 gap-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
                      <button
                        key={count}
                        onClick={() => handleSegmentCountChange(count)}
                        className={`py-2 text-sm rounded-lg transition-all ${segmentCount === count
                          ? 'bg-purple-600 ring-2 ring-purple-400'
                          : 'bg-white/5 hover:bg-white/10'
                          } text-white`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shape Parameters */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 space-y-3">
                <h2 className="text-white">Parameters</h2>

                <div>
                  <label className="block text-white text-sm mb-2">
                    {shapeType === 'pie' ? 'Circle Size' : shapeType === 'petal' ? 'Petal Length' : shapeType === 'polygon' ? 'Polygon Size' : 'Outer Radius'}: {outerRadius}%
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="50"
                    value={outerRadius}
                    onChange={(e) => setOuterRadius(Number(e.target.value))}
                    className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                  />
                </div>

                {showInnerRadius && (
                  <div>
                    <label className="block text-white text-sm mb-2">
                      Inner Radius: {innerRadius}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max={outerRadius - 5}
                      value={innerRadius}
                      onChange={(e) => setInnerRadius(Number(e.target.value))}
                      className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>
                )}

                {showPetalControls && (
                  <>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        Petal Width: {(petalWidth * 100).toFixed(0)}%
                      </label>
                      <input
                        type="range"
                        min="0.3"
                        max="2.0"
                        step="0.05"
                        value={petalWidth}
                        onChange={(e) => setPetalWidth(Number(e.target.value))}
                        className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm mb-2">
                        Petal Stretch: {(petalLength * 100).toFixed(0)}%
                      </label>
                      <input
                        type="range"
                        min="0.5"
                        max="1.0"
                        step="0.05"
                        value={petalLength}
                        onChange={(e) => setPetalLength(Number(e.target.value))}
                        className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                    </div>
                  </>
                )}

                {showShatterControls && (
                  <>
                    <div>
                      <label className="block text-white text-sm mb-2">
                        Shatter Intensity: {(shatterIntensity * 100).toFixed(0)}%
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="0.5"
                        step="0.05"
                        value={shatterIntensity}
                        onChange={(e) => setShatterIntensity(Number(e.target.value))}
                        className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                      />
                      <p className="text-purple-300/60 text-xs mt-1">
                        Creates cracks in each segment with slight displacement
                      </p>
                    </div>

                    {segmentCount === 1 && (
                      <div>
                        <label className="block text-white text-sm mb-2">
                          Fragment Distortion: {(fragmentDistortion * 100).toFixed(0)}%
                        </label>
                        <input
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={fragmentDistortion}
                          onChange={(e) => setFragmentDistortion(Number(e.target.value))}
                          className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                        <p className="text-purple-300/60 text-xs mt-1">
                          Controls image size and position variation in each fragment
                        </p>
                      </div>
                    )}
                  </>
                )}

                <div className="pt-3 border-t border-white/20">
                  <label className="block text-white text-sm mb-2">
                    Segment Gap: {gapWidth}°
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="0.5"
                    value={gapWidth}
                    onChange={(e) => setGapWidth(Number(e.target.value))}
                    className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    disabled={segmentCount === 1}
                  />
                  {segmentCount === 1 && (
                    <p className="text-purple-300/60 text-xs mt-1">
                      Gap not available in single image mode
                    </p>
                  )}
                </div>
              </div>

              {/* Image Upload */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">
                <h2 className="text-white mb-3">Upload Images</h2>
                {shapeType === 'shattered' && segmentCount === 1 && (
                  <div className="mb-3 p-3 bg-purple-500/20 border border-purple-400/30 rounded-lg">
                    <p className="text-purple-200 text-xs">
                      💡 Single image shattered mode: Upload one image for full circle shatter effect
                    </p>
                  </div>
                )}
                {shapeType === 'polygon' && segmentCount === 2 && (
                  <div className="mb-3 p-3 bg-blue-500/20 border border-blue-400/30 rounded-lg">
                    <p className="text-blue-200 text-xs">
                      💡 Polygon 2-segment mode: Displays as a complete hexagon
                    </p>
                  </div>
                )}
                <div className="space-y-2 max-h-[280px] overflow-y-auto pr-1">
                  {Array.from({ length: segmentCount }).map((_, index) => (
                    <div key={index} className="flex gap-2">
                      <label
                        className={`flex-1 flex items-center justify-between ${SEGMENT_COLORS[index]} hover:opacity-90 text-white px-3 py-2 rounded-lg cursor-pointer transition-all text-sm`}
                      >
                        <span>
                          {(segmentCount === 1 || (shapeType === 'polygon' && segmentCount === 2))
                            ? 'Image'
                            : (shapeType === 'petal' ? 'Petal' : 'Segment')}
                          {(segmentCount === 1 || (shapeType === 'polygon' && segmentCount === 2))
                            ? ''
                            : ` ${index + 1}`}
                        </span>
                        <Upload className="w-4 h-4" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload(index)}
                          className="hidden"
                        />
                      </label>
                      <button
                        onClick={() => setSelectedSegment(selectedSegment === index ? null : index)}
                        className={`${SEGMENT_COLORS[index]} ${selectedSegment === index ? 'ring-2 ring-white' : ''} hover:opacity-90 text-white px-3 py-2 rounded-lg transition-all`}
                        title="Adjust Position"
                      >
                        <Move className="w-4 h-4" />
                      </button>
                    </div>
                  ))}

                  {/* Center Image Upload */}
                  {supportsCenterImage && (
                    <div className="mt-3 pt-3 border-t border-white/20">
                      <div className="flex gap-2">
                        <label
                          className={`flex-1 flex items-center justify-between ${centerImage ? 'bg-cyan-600' : 'bg-gray-500'} hover:opacity-90 text-white px-3 py-2 rounded-lg cursor-pointer transition-all text-sm`}
                        >
                          <span>🎯 Center Image{centerImage ? ' ✓' : ' (optional)'}</span>
                          <Upload className="w-4 h-4" />
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleCenterImageUpload}
                            className="hidden"
                          />
                        </label>
                        {centerImage && (
                          <>
                            <button
                              onClick={() => {
                                setSelectedSegment(null);
                                setSelectedCenterImage(!selectedCenterImage);
                              }}
                              className={`bg-cyan-600 ${selectedCenterImage ? 'ring-2 ring-white' : ''} hover:opacity-90 text-white px-3 py-2 rounded-lg transition-all`}
                              title="Adjust Position"
                            >
                              <Move className="w-4 h-4" />
                            </button>
                            <button
                              onClick={clearCenterImage}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition-all"
                              title="Delete Center Image"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Image Adjustment Panel */}
              {selectedSegment !== null && selectedSegment < segmentCount && (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 space-y-3">
                  <h2 className="text-white text-sm">Adjust Image #{selectedSegment + 1}</h2>

                  <div>
                    <label className="block text-white text-xs mb-1">
                      X Position: {imagePositions[selectedSegment].x.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="-1"
                      max="1"
                      step="0.01"
                      value={imagePositions[selectedSegment].x}
                      onChange={(e) => updateImagePosition(selectedSegment, 'x', Number(e.target.value))}
                      className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-xs mb-1">
                      Y Position: {imagePositions[selectedSegment].y.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="-1"
                      max="1"
                      step="0.01"
                      value={imagePositions[selectedSegment].y}
                      onChange={(e) => updateImagePosition(selectedSegment, 'y', Number(e.target.value))}
                      className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-xs mb-1">
                      Scale: {imagePositions[selectedSegment].scale.toFixed(2)}x
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.01"
                      value={imagePositions[selectedSegment].scale}
                      onChange={(e) => updateImagePosition(selectedSegment, 'scale', Number(e.target.value))}
                      className="w-full h-2 bg-purple-300/30 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  <button
                    onClick={() => {
                      updateImagePosition(selectedSegment, 'x', 0);
                      updateImagePosition(selectedSegment, 'y', 0);
                      updateImagePosition(selectedSegment, 'scale', 1);
                    }}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded-lg transition-all text-sm"
                  >
                    Reset
                  </button>
                </div>
              )}

              {/* Center Image Adjustment Panel */}
              {selectedCenterImage && centerImage && (
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5 space-y-3">
                  <h2 className="text-white text-sm">🎯 Adjust Center Image</h2>

                  <div>
                    <label className="block text-white text-xs mb-1">
                      X Position: {centerImagePosition.x.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="-1"
                      max="1"
                      step="0.01"
                      value={centerImagePosition.x}
                      onChange={(e) => updateCenterImagePosition('x', Number(e.target.value))}
                      className="w-full h-2 bg-cyan-300/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-xs mb-1">
                      Y Position: {centerImagePosition.y.toFixed(2)}
                    </label>
                    <input
                      type="range"
                      min="-1"
                      max="1"
                      step="0.01"
                      value={centerImagePosition.y}
                      onChange={(e) => updateCenterImagePosition('y', Number(e.target.value))}
                      className="w-full h-2 bg-cyan-300/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-xs mb-1">
                      Scale: {centerImagePosition.scale.toFixed(2)}x
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="2"
                      step="0.01"
                      value={centerImagePosition.scale}
                      onChange={(e) => updateCenterImagePosition('scale', Number(e.target.value))}
                      className="w-full h-2 bg-cyan-300/30 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                  </div>

                  <button
                    onClick={() => {
                      updateCenterImagePosition('x', 0);
                      updateCenterImagePosition('y', 0);
                      updateCenterImagePosition('scale', 1);
                    }}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded-lg transition-all text-sm"
                  >
                    Reset
                  </button>
                </div>
              )}

              {/* Export */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-5">
                <h2 className="text-white mb-3">Export</h2>
                <div className="space-y-2">
                  <button
                    className="w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    onClick={exportPNG}
                    disabled={isExporting}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    {isExporting ? 'Exporting...' : 'PNG (2000×2000)'}
                  </button>

                  <button
                    className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-4 py-2.5 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    onClick={exportSVG}
                    disabled={isExporting}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    SVG (Vector)
                  </button>
                </div>
              </div>
            </div>

            {/* Right Preview Area */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 h-full flex flex-col">
                <h2 className="text-white mb-4">Preview</h2>
                <div className="relative aspect-square bg-slate-800 rounded-xl overflow-hidden flex-1 max-h-[600px] mx-auto w-full max-w-[600px]">
                  <svg viewBox="0 0 100 100" className="w-full h-full" ref={svgRef}>
                    {Array.from({ length: segmentCount }).map((_, index) => (
                      <RingSegment
                        key={index}
                        imageUrl={images[index] || images[0]}
                        segmentIndex={index}
                        outerRadius={outerRadius}
                        innerRadius={shapeType === 'pie' ? 0 : innerRadius}
                        totalSegments={segmentCount}
                        position={imagePositions[index]}
                        shapeType={shapeType}
                        petalWidth={petalWidth}
                        petalLength={petalLength}
                        gapWidth={gapWidth}
                        shatterIntensity={shatterIntensity}
                        fragmentDistortion={fragmentDistortion}
                      />
                    ))}
                    {/* 中心图片 */}
                    {supportsCenterImage && centerImage && (
                      <CenterImage
                        imageUrl={centerImage}
                        radius={innerRadius}
                        position={centerImagePosition}
                      />
                    )}
                  </svg>
                </div>

                <div className="mt-4 grid grid-cols-3 md:grid-cols-4 gap-2">
                  {Array.from({ length: segmentCount }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSegment(selectedSegment === index ? null : index)}
                      className={`flex items-center justify-center gap-2 ${SEGMENT_COLORS[index]} ${selectedSegment === index ? 'ring-2 ring-white' : ''} text-white px-2 py-2 rounded-lg transition-all hover:opacity-90 text-sm`}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>#{index + 1}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}