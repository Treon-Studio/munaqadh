'use client';

import { useState } from 'react';
import { Button } from '@/components/button/button';
import { Plus, Refresh } from '@icon-park/react';
import { InformationText } from '@/components/information-text/information-text';
import { Label } from '@/components/label/label';
import { RadioGroup, RadioGroupItem } from '@/components/radio-group/radio-group';
import MultiPackItem from './multi-pack-item'; // ⬅️ komponen per item

type PriceMultiPackItem = {
  id: number;
  itemName: string;
  quantity: number;
  price: number;
};

export default function FormPriceMultiPack({ isEdit = false }: { isEdit?: boolean }) {
  const [priceMultiPackList, setPriceMultiPackList] = useState<PriceMultiPackItem[]>([
    { id: Date.now(), itemName: '', quantity: 1, price: 0 },
  ]);

  const handleAdd = () => {
    setPriceMultiPackList((prev) => [
      ...prev,
      { id: Date.now(), itemName: '', quantity: 1, price: 0 },
    ]);
  };

  const handleRemove = (id: number) => {
    setPriceMultiPackList((prev) => prev.filter((item) => item.id !== id));
  };

  const updateField = (id: number, field: keyof PriceMultiPackItem, value: string | number) => {
    setPriceMultiPackList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  return (
    <div className="pb-6 border-b border-[#C2C7D0] border-t">
      <div className="pt-6 mb-4 flex justify-between items-center">
        <p>Harga Multi Satuan</p>
        {isEdit && (
          <Button type="button" variant="outline">
            <Refresh />
            Reset
          </Button>
        )}
      </div>

      <InformationText text="Penentuan harga sesuai dengan pengelompokan atau paket yang Anda tentukan:" />
      <ul className="list-disc pl-10 space-y-2 text-sm">
        <li>
          <span className="font-medium">Multi Kemasan</span>
          <br />
          <span>Harga jual dianggap terpisah untuk tiap satuan yang dibeli</span>
        </li>
        <li>
          <span className="font-medium">Grosir</span>
          <br />
          <span>Harga berubah sesuai jumlah pembelian minimal</span>
        </li>
      </ul>

      <RadioGroup defaultValue="option-1" className="flex space-x-2 mb-6 mt-8">
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="option-1" value="option-1" />
          <Label htmlFor="option-1 font-semibold">Multi Kemasan</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem id="option-2" value="option-2" />
          <Label htmlFor="option-2 font-semibold">Grosir</Label>
        </div>
      </RadioGroup>

      {priceMultiPackList.map((item, index) => (
        <MultiPackItem
          key={item.id}
          index={index}
          item={item}
          onChange={updateField}
          onRemove={priceMultiPackList.length > 1 ? () => handleRemove(item.id) : undefined}
        />
      ))}

      <Button type="button" variant="outline" className="text-[#555555] mt-4" onClick={handleAdd}>
        <Plus theme="filled" size="24" fill="#555555" />
        Opsi Harga
      </Button>
    </div>
  );
}
