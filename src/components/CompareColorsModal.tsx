
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ColorOption } from '../types/Product';
import { cn } from '@/lib/utils';

interface CompareColorsModalProps {
  colors: ColorOption[];
  onClose: () => void;
}

const CompareColorsModal: React.FC<CompareColorsModalProps> = ({ colors, onClose }) => {
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleColor = (colorName: string) => {
    if (selectedColors.includes(colorName)) {
      setSelectedColors(selectedColors.filter(c => c !== colorName));
    } else {
      if (selectedColors.length < 4) {
        setSelectedColors([...selectedColors, colorName]);
      }
    }
  };

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Compare Colors</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="py-4">
          <p className="text-sm text-gray-600 mb-4">
            Select up to 4 colors to compare side by side
          </p>
          
          <div className="grid grid-cols-4 gap-3 mb-6">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => toggleColor(color.name)}
                className={cn(
                  "flex flex-col items-center gap-2 p-2 border rounded-md transition-all",
                  selectedColors.includes(color.name) 
                    ? "border-purple-600 bg-purple-50" 
                    : "border-gray-200 hover:border-gray-300"
                )}
              >
                <div 
                  className="w-8 h-8 rounded-full border border-gray-200"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs text-center">{color.name}</span>
              </button>
            ))}
          </div>
          
          {selectedColors.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium mb-3">Selected Colors</h4>
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="grid grid-cols-4 gap-4">
                  {selectedColors.map((colorName) => {
                    const color = colors.find(c => c.name === colorName);
                    return (
                      <div key={colorName} className="flex flex-col items-center">
                        <div 
                          className="w-16 h-16 rounded-full border border-gray-200 shadow-sm mb-2"
                          style={{ backgroundColor: color?.hex }}
                        />
                        <span className="text-sm font-medium">{colorName}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompareColorsModal;
