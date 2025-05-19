
import React, { useEffect, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface SizeChartModalProps {
  onClose: () => void;
}

const SizeChartModal: React.FC<SizeChartModalProps> = ({ onClose }) => {
  const handleEscapeKey = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const sizes = [
    { size: 'XS', chest: '32-34', waist: '26-28', hips: '34-36' },
    { size: 'S', chest: '35-37', waist: '29-31', hips: '37-39' },
    { size: 'M', chest: '38-40', waist: '32-34', hips: '40-42' },
    { size: 'L', chest: '41-43', waist: '35-37', hips: '43-45' },
    { size: 'XL', chest: '44-46', waist: '38-40', hips: '46-48' },
    { size: 'XXL', chest: '47-49', waist: '41-43', hips: '49-51' },
  ];

  return (
    <Dialog open onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Size Chart</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>
        
        <div className="py-4">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chest (inches)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waist (inches)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hips (inches)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sizes.map((size) => (
                  <tr key={size.size}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{size.size}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{size.chest}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{size.waist}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{size.hips}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 space-y-4 text-sm text-gray-600">
            <p><strong>How to Measure:</strong></p>
            <p><strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape horizontally.</p>
            <p><strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.</p>
            <p><strong>Hips:</strong> Measure around the fullest part of your hips, approximately 8" below your waistline.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeChartModal;
