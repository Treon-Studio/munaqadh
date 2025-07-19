'use client';

import Dropdown from '@/components/dropdown/dropdown';
import type { OptionType } from '@/components/dropdown/dropdown';
import FormFieldError from '@/components/form-field-error/form-field-error';
import CustomInput from '@/components/input/custom-input';
import { Skeleton } from '@/components/skeleton/skeleton';
import { useRegisterField } from '@/hooks/use-form-validator/use-register-field';
import React, { useState } from 'react';

type FormStoreProps = {
  loadingDataStore?: boolean;
  optionsTypeStore: OptionType[];
  optionsCatStore: OptionType[];
  onFormChange?: (formData: {
    name?: string;
    noWhatsapp?: string;
    storeType?: OptionType | null;
    location?: string;
    category?: OptionType | null;
    address?: string;
  }) => void;
  initialValues?: {
    name?: string;
    noWhatsapp?: string;
    storeType?: OptionType | null;
    location?: string;
    category?: OptionType | null;
    address?: string;
  };
};

const FormStore: React.FC<FormStoreProps> = ({
  optionsTypeStore,
  optionsCatStore,
  onFormChange,
  initialValues,
  loadingDataStore = false,
}) => {
  const [selectedType, setSelectedType] = useState<OptionType | null>(
    initialValues?.storeType ?? null
  );
  const [selectedCategory, setSelectedCategory] = useState<OptionType | null>(
    initialValues?.category ?? null
  );

  const { ref: nameRef, error: nameError, handleChange: onNameChange } = useRegisterField('name');
  const {
    ref: noWhatsappRef,
    error: noWhatsappError,
    handleChange: onNoWhatsappChange,
  } = useRegisterField('noWhatsapp');

  const { error: storeTypeError, handleChange: onStoreTypeChange } = useRegisterField(
    'storeType',
    true,
    {
      getValue: () => selectedType?.value?.toString() ?? '',
    }
  );

  const { error: categoryError, handleChange: onCategoryChange } = useRegisterField(
    'category',
    true,
    {
      getValue: () => selectedCategory?.value?.toString() ?? '',
    }
  );

  const handleTypeChange = (val: OptionType | null) => {
    setSelectedType(val);
    onStoreTypeChange();
    onFormChange?.({ ...initialValues, storeType: val });
  };

  const handleCategoryChange = (val: OptionType | null) => {
    setSelectedCategory(val);
    onCategoryChange();
    onFormChange?.({ ...initialValues, category: val });
  };

  return (
    <>
      {loadingDataStore ? (
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex flex-row gap-2 p-[10px]">
            <div className="w-1/2">
              <CustomInput
                required
                label="Nama Toko"
                placeholder="cth: Toko Cahaya Sejati"
                ref={nameRef}
                onChange={(e) => {
                  onNameChange();
                  onFormChange?.({ ...initialValues, name: e.target.value });
                }}
                isWidthFull
                className={`border ${nameError ? '!border-[#F08181]' : 'border-[#C2C7D0]'}`}
              />
              <FormFieldError message={nameError} />
            </div>

            <div className="w-1/2">
              <CustomInput
                required
                label="No. Whatsapp"
                placeholder="cth: 0811223344556"
                ref={noWhatsappRef}
                onChange={(e) => {
                  onNoWhatsappChange();
                  onFormChange?.({ ...initialValues, noWhatsapp: e.target.value });
                }}
                isWidthFull
                className={`border ${noWhatsappError ? '!border-[#F08181]' : 'border-[#C2C7D0]'}`}
                inputNumber
              />
              <FormFieldError message={noWhatsappError} />
            </div>
          </div>

          <div className="flex flex-row gap-2 p-[10px]">
            <div className="w-1/2">
              <Dropdown
                label="Tipe Toko"
                options={optionsTypeStore}
                value={selectedType}
                onChange={handleTypeChange}
                placeholder="Pilih Tipe"
                required
                classDiv="mt-1"
                className={`h-[40px] pb-1 w-full border ${
                  storeTypeError ? '!border-[#F08181]' : 'border-[#C2C7D0]'
                }`}
              />
              <FormFieldError message={storeTypeError} />
            </div>

            <div className="w-1/2">
              <CustomInput
                label="Lokasi"
                placeholder="Pilih Lokasi"
                appendIcon="LocalTwo"
                onChange={(e) => {
                  onFormChange?.({ ...initialValues, location: e.target.value });
                }}
                isWidthFull
              />
            </div>
          </div>

          <div className="flex flex-row gap-2 p-[10px]">
            <div className="w-1/2">
              <Dropdown
                label="Jenis Toko"
                options={optionsCatStore}
                value={selectedCategory}
                onChange={handleCategoryChange}
                placeholder="Pilih Jenis"
                required
                classDiv="mt-1"
                className={`h-[40px] pb-1 w-full border ${
                  categoryError ? '!border-[#F08181]' : 'border-[#C2C7D0]'
                }`}
              />
              <FormFieldError message={categoryError} />
            </div>

            <div className="w-1/2">
              <CustomInput
                label="Alamat"
                placeholder="cth: Jl. Raya | No. 2"
                onChange={(e) => {
                  onFormChange?.({ ...initialValues, address: e.target.value });
                }}
                isWidthFull
                className={'h-[95px]'}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormStore;
