
import React, { useRef, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: string[];
  activeImage: number;
  setActiveImage: (index: number) => void;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ 
  images, 
  activeImage, 
  setActiveImage 
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const mainImageRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  
  const handleThumbnailScroll = (direction: 'up' | 'down') => {
    if (thumbnailsRef.current) {
      const scrollAmount = 100;
      if (direction === 'up') {
        thumbnailsRef.current.scrollTop -= scrollAmount;
      } else {
        thumbnailsRef.current.scrollTop += scrollAmount;
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mainImageRef.current) return;
    
    const { left, top, width, height } = mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="relative">
        <button 
          onClick={() => handleThumbnailScroll('up')}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 md:left-0 md:top-0 md:-translate-x-0 z-10 p-1 bg-white rounded-full shadow-md hidden md:block"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
        
        <div 
          ref={thumbnailsRef}
          className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:overflow-x-hidden md:h-[400px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent pb-2 md:pb-0 md:pr-2"
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={cn(
                "min-w-[60px] h-[60px] md:min-w-[80px] md:h-[80px] border-2 rounded-md overflow-hidden transition-all duration-200",
                activeImage === index 
                  ? "border-purple-600 shadow-md" 
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              <img
                src={image}
                alt={`Product thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        
        <button 
          onClick={() => handleThumbnailScroll('down')}
          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 md:left-0 md:bottom-0 md:-translate-x-0 z-10 p-1 bg-white rounded-full shadow-md hidden md:block"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      
      {/* Main Image */}
      <div 
        ref={mainImageRef}
        className="flex-1 relative rounded-lg overflow-hidden bg-gray-50 h-[400px] md:h-[500px]"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <div 
          className={cn(
            "w-full h-full transition-all duration-200",
            isZoomed ? "scale-150" : "scale-100"
          )}
          style={{
            backgroundImage: `url(${images[activeImage]})`,
            backgroundPosition: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
          }}
        />
      </div>
    </div>
  );
};

export default ProductGallery;
