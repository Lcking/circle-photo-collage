# Circle Photo Collage Maker 🎨

<div align="center">

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwindcss)

**Create stunning circular and ring-shaped photo collages online for free.**

[Live Demo](https://www.circlephotocollage.com) · [Report Bug](https://github.com/Lcking/circle-photo-collage/issues) · [Request Feature](https://github.com/Lcking/circle-photo-collage/issues)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎯 **6 Shape Templates** | Ring, Pie, Aperture, Petal, Polygon, and Shattered designs |
| 🖼️ **Drag & Drop Upload** | Easy image uploading with instant preview |
| 🎚️ **Precise Controls** | Fine-tune position, scale, and rotation for each image |
| 🔲 **Center Image Support** | Add a circular image in the center of your collage |
| 📤 **HD Export** | Export as high-resolution PNG (up to 4K) or SVG vector |
| 🌐 **No Account Required** | Use instantly without registration |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Lcking/circle-photo-collage.git

# Navigate to the project directory
cd circle-photo-collage

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The production files will be generated in the `build/` directory.

---

## 📖 Usage Guide

### 1. Choose a Shape Template

Select from 6 unique templates:

- **Ring** - Classic circular ring with inner radius
- **Pie** - Full circle divided into segments
- **Aperture** - Camera aperture-style design
- **Petal** - Flower petal arrangement
- **Polygon** - Hexagonal segments
- **Shattered** - Broken glass mirror effect

### 2. Upload Your Images

- Click the upload area or drag & drop images
- Each segment can have its own image
- Supports JPG, PNG, and other common formats

### 3. Adjust Parameters

| Parameter | Description |
|-----------|-------------|
| **Segment Count** | Number of image segments (1-12) |
| **Outer Radius** | Size of the outer edge |
| **Inner Radius** | Size of the center hole |
| **Segment Gap** | Space between segments |

### 4. Fine-tune Images

- **X Position** - Horizontal offset
- **Y Position** - Vertical offset  
- **Scale** - Zoom in/out

### 5. Export

- **PNG** - High-resolution raster image (2000×2000px)
- **SVG** - Scalable vector format

---

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS 4.x
- **Build Tool**: Vite
- **Icons**: Lucide React
- **UI Components**: Radix UI

---

## 📁 Project Structure

```
circle-photo-collage/
├── src/
│   ├── App.tsx              # Main application component
│   ├── components/
│   │   ├── RingSegment.tsx      # Individual segment renderer
│   │   ├── ShatteredFragments.tsx # Shattered effect component
│   │   └── CenterImage.tsx      # Center image component
│   ├── utils/
│   │   ├── constants.ts     # Configuration constants
│   │   └── helpers.ts       # Utility functions
│   └── types/
│       └── index.ts         # TypeScript type definitions
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── build/                   # Production build output
└── index.html
```

---

## 🌐 Deployment

### Static Hosting (Nginx/BT Panel)

See [BAOTA_DEPLOYMENT.md](./BAOTA_DEPLOYMENT.md) for detailed instructions.

Key Nginx configuration:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Vercel / Netlify

Simply connect your GitHub repository and deploy with zero configuration.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Original design concept from [Figma Community](https://www.figma.com/design/rUVZa1GxD2abQ5qCQFNIgD/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)
- UI components powered by [Radix UI](https://www.radix-ui.com/)

---

<div align="center">

Made with ❤️ by [Lcking](https://github.com/Lcking)

⭐ Star this repo if you find it useful!

</div>