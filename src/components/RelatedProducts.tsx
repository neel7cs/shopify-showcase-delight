
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProductSummary } from '../types/Product';

interface RelatedProductsProps {
  products: ProductSummary[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
  return (
    <div className="my-16">
      <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="border overflow-hidden group">
            <CardContent className="p-0">
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className="absolute top-3 left-3 bg-purple-600">{product.badge}</Badge>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium truncate">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 text-sm line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
