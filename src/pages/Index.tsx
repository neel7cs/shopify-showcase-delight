
import React, { useState, useEffect } from 'react';
import ProductGallery from '../components/ProductGallery';
import ProductInfo from '../components/ProductInfo';
import ProductTabs from '../components/ProductTabs';
import SizeChartModal from '../components/SizeChartModal';
import CompareColorsModal from '../components/CompareColorsModal';
import PairsWellWith from '../components/PairsWellWith';
import ProductBundle from '../components/ProductBundle';
import RelatedProducts from '../components/RelatedProducts';
import { product, relatedProducts, pairsWellWith, bundleProducts } from '../data/productData';

const Index = () => {
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [showCompareColors, setShowCompareColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(() => {
    const saved = localStorage.getItem('selectedColor');
    return saved ? saved : product.colors[0].name;
  });
  const [selectedSize, setSelectedSize] = useState(() => {
    const saved = localStorage.getItem('selectedSize');
    return saved ? saved : product.sizes[0];
  });
  const [activeImage, setActiveImage] = useState(0);

  // Update local storage when selections change
  useEffect(() => {
    localStorage.setItem('selectedColor', selectedColor);
    localStorage.setItem('selectedSize', selectedSize);
  }, [selectedColor, selectedSize]);

  // Update active image when color changes
  useEffect(() => {
    const colorIndex = product.colors.findIndex(color => color.name === selectedColor);
    if (colorIndex !== -1) {
      setActiveImage(colorIndex);
    }
  }, [selectedColor]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-sm breadcrumbs mb-6">
        <span className="text-gray-500">Home</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-500">Clothing</span>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-800">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <ProductGallery 
          images={product.images} 
          activeImage={activeImage} 
          setActiveImage={setActiveImage} 
        />
        
        <ProductInfo 
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          onSizeChartClick={() => setShowSizeChart(true)}
          onCompareColorsClick={() => setShowCompareColors(true)}
        />
      </div>

      <ProductTabs product={product} />
      
      <PairsWellWith products={pairsWellWith} />
      
      <ProductBundle products={bundleProducts} />
      
      <RelatedProducts products={relatedProducts} />
      
      {showSizeChart && (
        <SizeChartModal onClose={() => setShowSizeChart(false)} />
      )}
      
      {showCompareColors && (
        <CompareColorsModal 
          colors={product.colors} 
          onClose={() => setShowCompareColors(false)} 
        />
      )}
    </div>
  );
};

export default Index;
