'use client';

import { Button } from '@/components/button/button';
import Dropdown, { OptionType } from '@/components/dropdown/dropdown';
import FormFieldError from '@/components/form-field-error/form-field-error';
import { Input } from '@/components/input/input';
import { useRegisterField } from '@/hooks/use-form-validator/use-register-field';
import { Refresh } from '@icon-park/react';
import { useRef, useState } from 'react';

const optionsUnit: OptionType[] = [
  { label: 'ml', value: 1 },
  { label: 'kg', value: 2 },
  { label: 'g', value: 3 },
  { label: 'L', value: 4 },
];

export default function FormProductDetail({ isEdit = false }: { isEdit?: boolean }) {
  const [selectedUnit, setSelectedUnit] = useState<OptionType | null>(null);

  // Ref untuk Dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Register field: Content
  const {
    ref: contentRef,
    error: contentError,
    handleChange: onContentChange,
  } = useRegisterField('productDetail.content');

  // Register field: Packaging
  const {
    ref: packagingRef,
    error: packagingError,
    handleChange: onPackagingChange,
  } = useRegisterField('productDetail.packaging');

  // Register field: Unit (Dropdown) dengan custom ref + getValue
  const { error: unitError, handleChange: onUnitChange } = useRegisterField(
    'productDetail.unit',
    true,
    {
      getValue: () => selectedUnit?.value?.toString() ?? '',
    }
  );

  const handleDropdownChange = (val: OptionType | null) => {
    setSelectedUnit(val);
    onUnitChange(); // clear error
  };

  return (
    <div className="pb-6">
      <div className="pt-6 flex-row flex justify-between items-center">
        <p> Detail Produk </p>
        {isEdit && (
          <div className="flex">
            <Button type="button" variant="outline">
              <Refresh />
              Reset
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Content */}
        <div className="flex flex-col items-start gap-4">
          <div className="w-full mt-4">
            <label className="block mb-2">
              Isi / Content <span className="text-[#F08181]">*</span>
            </label>
            <Input
              ref={contentRef as React.RefObject<HTMLInputElement>}
              onChange={onContentChange}
              type="text"
              placeholder="cth: 250"
              className={`border ${contentError ? '!border-[#F08181]' : 'border-[#C2C7D0]'}`}
            />
            <FormFieldError message={contentError} />
          </div>
        </div>

        {/* Unit (Dropdown) */}
        <div className="flex flex-col items-start gap-4">
          <div className="w-full mt-4" ref={dropdownRef}>
            <Dropdown
              label="Unit"
              options={optionsUnit}
              value={selectedUnit}
              onChange={handleDropdownChange}
              placeholder="Pilih Unit"
              className={`h-[40px] pb-1 w-full border ${
                unitError ? '!border-[#F08181]' : 'border-[#C2C7D0]'
              }`}
              required
            />
            <FormFieldError message={unitError} />
          </div>
        </div>

        {/* Packaging */}
        <div className="flex flex-col items-start gap-4">
          <div className="w-full mt-4">
            <label className="block mb-2">
              Kemasan <span className="text-[#F08181]">*</span>
            </label>
            <Input
              ref={packagingRef as React.RefObject<HTMLInputElement>}
              onChange={onPackagingChange}
              type="text"
              placeholder="cth: Botol"
              className={`border ${packagingError ? '!border-[#F08181]' : 'border-[#C2C7D0]'}`}
            />
            <FormFieldError message={packagingError} />
          </div>
        </div>
      </div>

      {/* Optional Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-start gap-4">
          <div className="w-full mt-2">
            <label className="block mb-2"> Barcode </label>
            <Input type="text" className="border-[#C2C7D0]" placeholder="cth: 1199922838920" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="w-full mt-2">
            <label className="block mb-2"> SKU </label>
            <Input type="text" className="border-[#C2C7D0]" placeholder="cth: 782217821" />
          </div>
        </div>
      </div>
    </div>
  );
}
