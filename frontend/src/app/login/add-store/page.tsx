'use client';

import { Button } from '@/components/button/button';
import SkeletonButton from '@/components/button/skeleton-button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/card/card';
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
import { toast } from '@/components/toast/toast';
import { FormValidationProvider } from '@/hooks/use-form-validator/form-validation-context';
import { useFormValidationContext } from '@/hooks/use-form-validator/form-validation-context';
import { useFormValidator } from '@/hooks/use-form-validator/use-form-validator';
import { usePageLoading } from '@/hooks/use-page-loading/use-page-loading';
import FormStore from '@/modules/store/form-create-store';
import { Check, Info } from '@icon-park/react';
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

  const { setLoading } = usePageLoading({
    autoStart: false,
    initialDelay: 0,
  });

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

  const handleSubmit = () => {
    const fields = getRegisteredFields();
    const { isValid, errors } = validateFields(fields);

    setErrors(errors);

    if (!isValid) {
      setOpenDialogConfirm(false);
      toast.error('Harap lengkapi data toko terlebih dahulu!');
      return;
    }

    toast.success('Tersimpan!', {
      description: 'Toko Anda berhasil tersimpan',
    });

    setTimeout(() => {
      router.push('/login/select-organization');
    }, 2000);
  };

  return (
    <div>
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src={'/assets/zycas/zycas-logo.png'}
            alt="Zycas Login"
            style={{
              display: 'inline-block',
              verticalAlign: 'middle',
              height: 28,
              marginRight: 2,
            }}
          />
          <span className="text-[1rem] font-[400]">Zycas</span>
          <span className="text-[1rem] font-[300] -ml-1">Dashboard</span>
        </div>
      </div>

      <div className="text-[#F08181] border !border-[#F08181] rounded-[6px] h-auto w-[56.9rem] p-4 bg-[#ffffff] mb-4 text-sm">
        <div className="flex gap-2 text-[#F08181] information-text">
          <Info size={16} className="pt-[2px]" />
          <p> Anda belum memiliki Toko! </p>
        </div>
        <p className="pl-[1.5rem] mt-2">
          Silahkan menambahkan data Toko dibawah ini untuk melanjutkan ke Dashboard
        </p>
      </div>

      <Card className="text-[#555555]">
        <CardHeader className="border-b flex-row flex justify-between items-center">
          <CardTitle className="text-[1rem]"> Buat Toko </CardTitle>
        </CardHeader>

        <CardContent className="space-y-2 p-0 text-[14px] font-[400]">
          <div className="h-auto w-[56.9rem] p-4">
            <FormStore
              optionsTypeStore={optionsTypeStore}
              optionsCatStore={optionsCatStore}
              initialValues={formData}
              onFormChange={handleFormChange}
              loadingDataStore={loadingDataStore}
            />
          </div>
        </CardContent>

        <CardFooter className="w-full">
          {loadingDataStore ? (
            <SkeletonButton className="w-full h-10" />
          ) : (
            <Dialog open={openDialogConfirm} onOpenChange={setOpenDialogConfirm}>
              <DialogTrigger asChild>
                <Button
                  variant="success"
                  className="flex items-center gap-2 w-full"
                  onClick={() => setOpenDialogConfirm(true)}
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
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default function Page() {
  return (
    <FormValidationProvider>
      <PageContent />
    </FormValidationProvider>
  );
}
