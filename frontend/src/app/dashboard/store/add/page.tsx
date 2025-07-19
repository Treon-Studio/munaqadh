'use client';

import { Button } from '@/components/button/button';
import SkeletonButton from '@/components/button/skeleton-button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card/card';
import SkeletonCardContent from '@/components/card/skeleton-card-content';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/dialog/dialog';
import type { OptionType } from '@/components/dropdown/dropdown';
import SkeletonPreset from '@/components/skeleton/skeleton-preset';
import { toast } from '@/components/toast/toast';
import { FormValidationProvider } from '@/hooks/use-form-validator/form-validation-context';
import { useFormValidationContext } from '@/hooks/use-form-validator/form-validation-context';
import { useFormValidator } from '@/hooks/use-form-validator/use-form-validator';
import { usePageLoading } from '@/hooks/use-page-loading/use-page-loading';
import FormStore from '@/modules/store/form-create-store';
import { Check } from '@icon-park/react';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const optionsTypeStore: OptionType[] = [
  { label: 'Retail', value: 1 },
  { label: 'Grosir', value: 2 },
  { label: 'Online', value: 3 },
];

const optionsCatStore: OptionType[] = [
  { label: 'Bahan Pokok', value: 1 },
  { label: 'Fashion', value: 2 },
  { label: 'Elektronik', value: 3 },
];

type FormData = {
  name: string;
  noWhatsapp: string;
  storeType: OptionType | null;
  location: string;
  category: OptionType | null;
  address: string;
};

function PageContent() {
  const router = useRouter();
  const [loadingDataStore, setLoadingDataStore] = useState(true);

  const { isLoading, setLoading } = usePageLoading({
    autoStart: false,
    initialDelay: 0,
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    noWhatsapp: '',
    storeType: null,
    location: '',
    category: null,
    address: '',
  });

  const { getRegisteredFields, setErrors } = useFormValidationContext();
  const { validateFields } = useFormValidator();

  const [openDialogConfirm, setOpenDialogConfirm] = useState(false);

  useEffect(() => {
    setLoading(true);
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 2000);
    }).then(() => {
      setTimeout(() => {
        setLoadingDataStore(false);
      }, 2000);
    });
  }, [setLoading]);

  const handleFormChange = (newData: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  // Validasi sebelum membuka dialog
  const handleOpenConfirmDialog = () => {
    const fields = getRegisteredFields();
    const { isValid, errors } = validateFields(fields);
    setErrors(errors);

    if (!isValid) {
      toast.error('Harap lengkapi data toko terlebih dahulu!');
      return;
    }
    setOpenDialogConfirm(true);
  };

  // Submit ketika sudah yakin
  const handleSubmit = () => {
    toast.success('Tersimpan!', {
      description: 'Toko Anda berhasil tersimpan',
    });

    setTimeout(() => {
      router.push('/dashboard/store');
    }, 2000);
  };

  return (
    <Card className="my-[1rem] font-normal">
      <CardHeader className="border-b flex-row flex justify-between items-center">
        {isLoading ? (
          <SkeletonPreset w="w-32" h="h-6" className="rounded-sm ml-2.5" />
        ) : (
          <CardTitle className="text-[1rem]"> Tambah Toko </CardTitle>
        )}
      </CardHeader>
      <CardContent className="p-4">
        {isLoading ? (
          <SkeletonCardContent className="w-full" />
        ) : (
          <>
            <p className="pl-[10px] pb-[10px] pt-[10px] text-[#F08181]">
              {' '}
              Form bertanda (*) harus diisi{' '}
            </p>
            <FormStore
              optionsTypeStore={optionsTypeStore}
              optionsCatStore={optionsCatStore}
              initialValues={formData}
              onFormChange={handleFormChange}
              loadingDataStore={loadingDataStore}
            />
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {isLoading ? (
          <>
            <SkeletonButton className="w-24 h-10 mr-2" />
            <SkeletonButton className="w-24 h-10" />
          </>
        ) : (
          <>
            <Button
              type="button"
              variant="outline"
              className="mr-2 flex items-center"
              onClick={() => router.push('/dashboard/store')}
            >
              Kembali ke List Toko
            </Button>
            <Dialog open={openDialogConfirm} onOpenChange={setOpenDialogConfirm}>
              <DialogTrigger asChild>
                <Button
                  variant="primary"
                  className="flex items-center gap-2"
                  onClick={handleOpenConfirmDialog}
                >
                  Simpan Toko
                  <Check size={16} />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-sm">
                <DialogHeader>
                  <DialogTitle> Anda akan menyimpan Toko </DialogTitle>
                  <DialogDescription className="pt-4">
                    Apakah Anda yakin akan menyimpan Toko Anda?
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost">Tidak</Button>
                  </DialogClose>
                  <Button variant="info" onClick={handleSubmit}>
                    Ya, Saya Yakin
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </>
        )}
      </CardFooter>
    </Card>
  );
}

export default function Page() {
  return (
    <FormValidationProvider>
      <PageContent />
    </FormValidationProvider>
  );
}
