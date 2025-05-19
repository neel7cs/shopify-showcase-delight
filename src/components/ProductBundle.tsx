
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductSummary } from '../types/Product';
import { cn } from '@/lib/utils';

interface ProductBundleProps {
  products: ProductSummary[];
}

const ProductBundle: React.FC<ProductBundleProps> = ({ products }) => {
  const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
  const discountedPrice = totalPrice * 0.85; // 15% discount on the bundle
  
  return (
    <div className="my-16">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Complete the Look</h2>
        <p className="text-gray-600">Purchase these items together and save 15%</p>
      </div>
      
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <React.Fragment key={product.id}>
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 rounded-md overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <p className="font-semibold">${product.price.toFixed(2)}</p>
                  </div>
                </div>
                
                {index < products.length - 1 && (
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                      +
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-lg">Bundle Price:</span>
                <span className="text-2xl font-bold">${discountedPrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-green-600 font-medium">
                You save: ${(totalPrice - discountedPrice).toFixed(2)} (15%)
              </p>
            </div>
            
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Add Bundle to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductBundle;
