
import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Product } from '../types/Product';
import { cn } from '@/lib/utils';

interface ProductInfoProps {
  product: Product;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  onSizeChartClick: () => void;
  onCompareColorsClick: () => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  onSizeChartClick,
  onCompareColorsClick,
}) => {
  return (
    <div className="flex flex-col">
      {/* Product Title and Badges */}
      <div className="mb-4">
        {product.isNew && (
          <Badge className="mb-2 bg-purple-600">New</Badge>
        )}
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <div className="flex items-center gap-4">
          <span className="text-2xl font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.originalPrice && (
            <Badge variant="outline" className="text-red-500 border-red-200">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </Badge>
          )}
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={cn(
                "w-4 h-4", 
                star <= product.rating ? "text-yellow-400" : "text-gray-300"
              )}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-gray-600">
          {product.rating.toFixed(1)} ({product.reviewCount} reviews)
        </span>
      </div>

      {/* Colors */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Color: {selectedColor}</span>
          <button 
            className="text-sm text-purple-600 hover:text-purple-800"
            onClick={onCompareColorsClick}
          >
            Compare Colors
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={cn(
                "w-10 h-10 rounded-full border-2 transition-all",
                selectedColor === color.name 
                  ? "border-purple-600 ring-2 ring-purple-200" 
                  : "border-gray-200 hover:border-gray-300"
              )}
              style={{ backgroundColor: color.hex }}
              aria-label={`Select ${color.name} color`}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Size</span>
          <button 
            className="text-sm text-purple-600 hover:text-purple-800"
            onClick={onSizeChartClick}
          >
            Size Chart
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={cn(
                "py-2 border rounded-md transition-all",
                selectedSize === size 
                  ? "border-purple-600 bg-purple-50 text-purple-700" 
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart */}
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <Select defaultValue="1">
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Qty" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
            Add to Cart
          </Button>
        </div>
        
        <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
          Save to Wishlist
        </Button>
      </div>

      {/* Additional Info */}
      <div className="mt-8 space-y-3 text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Ships in 1-2 business days
        </p>
        <p className="flex items-center gap-2">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          Free returns within 30 days
        </p>
        <p className="flex items-center gap-2">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Secure checkout
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
