
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Product } from '../types/Product';

interface ProductTabsProps {
  product: Product;
}

const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  return (
    <div className="my-16">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="description">Description</TabsTrigger>
          <TabsTrigger value="information">Product Information</TabsTrigger>
          <TabsTrigger value="shipping">Shipping Details</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="p-6 border rounded-b-md">
          <div className="prose max-w-none">
            <h3 className="text-xl font-medium mb-4">Product Description</h3>
            <p>{product.description}</p>
            <ul className="mt-4 space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
        
        <TabsContent value="information" className="p-6 border rounded-b-md">
          <div className="prose max-w-none">
            <h3 className="text-xl font-medium mb-4">Product Information</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 font-medium w-1/3">Material</td>
                  <td className="py-3">{product.material}</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Care Instructions</td>
                  <td className="py-3">{product.careInstructions}</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">SKU</td>
                  <td className="py-3">{product.sku}</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Country of Origin</td>
                  <td className="py-3">{product.countryOfOrigin}</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium">Sustainability</td>
                  <td className="py-3">{product.sustainability}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        
        <TabsContent value="shipping" className="p-6 border rounded-b-md">
          <div className="prose max-w-none">
            <h3 className="text-xl font-medium mb-4">Shipping Information</h3>
            <p className="mb-4">We offer the following shipping options to ensure you receive your items in a timeframe that suits you:</p>
            
            <div className="space-y-4">
              <div className="p-4 border rounded-md">
                <h4 className="font-medium">Standard Shipping</h4>
                <p className="text-sm text-gray-600">Delivery in 3-5 business days</p>
                <p className="font-medium mt-1">$4.99</p>
              </div>
              
              <div className="p-4 border rounded-md">
                <h4 className="font-medium">Express Shipping</h4>
                <p className="text-sm text-gray-600">Delivery in 1-2 business days</p>
                <p className="font-medium mt-1">$9.99</p>
              </div>
              
              <div className="p-4 border rounded-md">
                <h4 className="font-medium">Free Shipping</h4>
                <p className="text-sm text-gray-600">On orders over $75</p>
                <p className="font-medium mt-1">$0.00</p>
              </div>
            </div>
            
            <p className="mt-4">
              Once your order ships, you will receive a confirmation email with tracking information.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductTabs;
