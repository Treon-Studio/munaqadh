'use client';

// import { useCreateOrganization } from '@/__generated__/api/hooks';
import { Button } from '@/components/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card/card';
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
import FormFieldError from '@/components/form-field-error/form-field-error';
import CustomInput from '@/components/input/custom-input';
// import { toast } from '@/components/toast/toast';
import { useRegisterField } from '@/hooks/use-form-validator/use-register-field';
import { ArrowRight, Info } from '@icon-park/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { z } from 'zod';

const organizationSchema = z.object({
  name: z.string().min(1, 'Nama Organisasi wajib diisi'),
  telephone: z
    .string()
    .min(10, 'No. Whatsapp minimal 10 digit')
    .max(15, 'No. Whatsapp maksimal 15 digit')
    .regex(/^[0-9]+$/, 'No. Whatsapp hanya boleh angka'),
  email: z.string().email('Format email tidak valid'),
  siup_nib: z.string().optional(),
  npwp: z.string().optional(),
});

type OrganizationSchema = z.infer<typeof organizationSchema>;

export default function FormAddOrganization() {
  const router = useRouter();
  const [openDialogConfirm, setOpenDialogConfirm] = useState(false);
  // const createOrganizationMutation = useCreateOrganization();

  // Controlled state untuk semua input
  const [name, setName] = useState('PT. Dummy Organisasi');
  const [telephone, setTelephone] = useState('081234567890');
  const [email, setEmail] = useState('dummy@organisasi.com');
  const [siupNib, setSiupNib] = useState('1234567890');
  const [npwp, setNpwp] = useState('09.876.543.2-111.222');
  const [zodErrors, setZodErrors] = useState<Record<string, string>>({});

  const { ref: nameRef, error: nameError, handleChange: onNameChange } = useRegisterField('name');

  const {
    ref: telephoneRef,
    error: telephoneError,
    handleChange: onTelephoneChange,
  } = useRegisterField('telephone');

  const {
    ref: emailRef,
    error: emailError,
    handleChange: onEmailChange,
  } = useRegisterField('email');

  // Validasi realtime per field
  const handleFieldChange = (
    field: keyof OrganizationSchema,
    value: string,
    zodShape: z.ZodTypeAny
  ): void => {
    const result = zodShape.safeParse(value);
    setZodErrors((prev) => {
      const newErrors = { ...prev };
      if (result.success) {
        delete newErrors[field];
      } else if (result.error.errors[0]) {
        newErrors[field] = result.error.errors[0].message;
      }
      return newErrors;
    });
  };

  const handleSubmit = async () => {
    setOpenDialogConfirm(false);
    Cookies.set('has_organization', '0');
    router.push('/login/add-store');

    // --------- helllo ---------

    // return
    // jangan hapus ini, ini hanya untuk simulasi
    // const values: OrganizationSchema = {
    //   name,
    //   telephone,
    //   email,
    //   siup_nib: siupNib,
    //   npwp: npwp,
    // };

    // const result = organizationSchema.safeParse(values);

    // if (!result.success) {
    //   toast.error(result.error.errors[0]?.message || 'Terjadi kesalahan validasi', {
    //     style: { background: '#ef4444', color: '#fff' },
    //   });
    //   const errors: Record<string, string> = {};
    //   for (const err of result.error.errors) {
    //     if (err.path[0]) errors[err.path[0]] = err.message;
    //   }
    //   setZodErrors(errors);
    //   setOpenDialogConfirm(false);
    //   return;
    // }

    // createOrganizationMutation.mutate(
    //   {
    //     'x-device-id': '1',
    //     body: {
    //       name: values.name,
    //       phone: values.telephone,
    //       email: values.email,
    //       nib: values.siup_nib,
    //       npwp: values.npwp,
    //       address: '',
    //       image: '',
    //     },
    //   },
    //   {
    //     onSuccess: () => {
    //       toast.success('Organisasi berhasil dibuat!', {
    //         style: { background: '#22c55e', color: '#fff' },
    //       });
    //       setOpenDialogConfirm(false);
    //       router.push('/login/add-store');
    //     },
    //     onError: (error: Error) => {
    //       let errorMsg = 'Terjadi kesalahan';
    //       if (error.message.includes('401')) {
    //         toast.error(errorMsg, { style: { background: '#ef4444', color: '#fff' } });
    //       } else if (error.message.includes('403')) {
    //         toast.error(errorMsg, { style: { background: '#ef4444', color: '#fff' } });
    //       } else {
    //         errorMsg = error.message;
    //         toast.error(errorMsg, { style: { background: '#ef4444', color: '#fff' } });
    //       }
    //       setZodErrors({ api: errorMsg });
    //       setOpenDialogConfirm(false);
    //     },
    //   }
    // );
  };

  return (
    <div>
      {/* Header dan Logo */}
      <div className="text-center mb-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <img
            src="/assets/zycas/zycas-logo.png"
            alt="Zycas Login"
            className="inline-block align-middle h-[28px] mr-[2px]"
          />
          <span className="text-[1rem] font-[400]">Zycas</span>
          <span className="text-[1rem] font-[300] -ml-1">Dashboard</span>
        </div>
      </div>
      {/* Info Box */}
      <div className="text-[#F08181] border !border-[#F08181] rounded-[6px] w-[27.5rem] p-4 bg-[#fff] mb-4 text-sm">
        <div className="flex gap-2 text-[#F08181] information-text">
          <Info size={16} className="pt-[2px]" />
          <p>Anda belum memiliki Organisasi!</p>
        </div>
        <p className="pl-[1.5rem] mt-2">
          Silahkan menambahkan data Organisasi dibawah ini untuk melanjutkan ke Dashboard
        </p>
      </div>
      {/* Card Form */}
      <Card className="text-[#555555]">
        <CardHeader className="border-b flex-row flex justify-between items-center">
          <CardTitle className="text-[1rem]">Buat Organisasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 p-0 text-[14px] font-[400]">
          <div className="w-[27.5rem] p-4">
            {/* Input Nama Organisasi */}
            <div className="mb-6">
              <CustomInput
                ref={nameRef as React.Ref<HTMLTextAreaElement>}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  onNameChange();
                  handleFieldChange('name', e.target.value, organizationSchema.shape.name);
                }}
                required
                isWidthFull
                className={`border ${
                  nameError || zodErrors.name ? '!border-[#F08181]' : 'border-[#C2C7D0]'
                }`}
                placeholder="cth: PT. Organisasi Sejahtera"
                label="Nama Organisasi"
              />
              <FormFieldError message={nameError || zodErrors.name} />
            </div>
            {/* Input No. Whatsapp */}
            <div className="mb-6">
              <CustomInput
                ref={telephoneRef as React.Ref<HTMLTextAreaElement>}
                value={telephone}
                onChange={(e) => {
                  setTelephone(e.target.value);
                  onTelephoneChange();
                  handleFieldChange(
                    'telephone',
                    e.target.value,
                    organizationSchema.shape.telephone
                  );
                }}
                required
                isWidthFull
                className={`border ${
                  telephoneError || zodErrors.telephone ? '!border-[#F08181]' : 'border-[#C2C7D0]'
                }`}
                placeholder="cth: 0811223344556"
                label="No. Whatsapp"
                inputNumber
              />
              <FormFieldError message={telephoneError || zodErrors.telephone} />
            </div>
            {/* Input Email */}
            <div className="mb-6">
              <CustomInput
                ref={emailRef as React.Ref<HTMLTextAreaElement>}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  onEmailChange();
                  handleFieldChange('email', e.target.value, organizationSchema.shape.email);
                }}
                required
                isWidthFull
                className={`border ${
                  emailError || zodErrors.email ? '!border-[#F08181]' : 'border-[#C2C7D0]'
                }`}
                placeholder="cth: email@zycas.com"
                label="Email"
              />
              <FormFieldError message={emailError || zodErrors.email} />
            </div>
            {/* Input SIUP/NIB */}
            <div className="mb-6">
              <CustomInput
                isWidthFull
                className={`mb-1 border ${
                  zodErrors.siup_nib ? '!border-[#F08181]' : 'border-[#C2C7D0]'
                }`}
                placeholder="Masukkan SIUP / NIB"
                label="SIUP / NIB"
                value={siupNib}
                onChange={(e) => {
                  setSiupNib(e.target.value);
                  setZodErrors((prev) => {
                    const newErrors = { ...prev };
                    newErrors.siup_nib = '';
                    return newErrors;
                  });
                }}
              />
              <FormFieldError message={zodErrors.siup_nib} />
            </div>
            {/* Input NPWP */}
            <div className="mb-4">
              <CustomInput
                isWidthFull
                className={`mb-1 border ${
                  zodErrors.npwp ? '!border-[#F08181]' : 'border-[#C2C7D0]'
                }`}
                placeholder="cth: 11.222.333.4-555.666"
                label="NPWP"
                value={npwp}
                onChange={(e) => {
                  setNpwp(e.target.value);
                  setZodErrors((prev) => {
                    const newErrors = { ...prev };
                    newErrors.npwp = '';
                    return newErrors;
                  });
                }}
              />
              <FormFieldError message={zodErrors.npwp} />
            </div>
            {/* Tombol Simpan dan Dialog Konfirmasi */}
            <div className="mt-4 w-full">
              <Dialog open={openDialogConfirm} onOpenChange={setOpenDialogConfirm}>
                <DialogTrigger asChild>
                  <Button
                    type="button"
                    variant="info"
                    className="!w-full"
                    disabled={!name || !telephone || !email}
                    onClick={() => {
                      if (!name || !telephone || !email) {
                        setZodErrors({
                          name: !name ? 'Nama Organisasi wajib diisi' : '',
                          telephone: !telephone ? 'No. Whatsapp wajib diisi' : '',
                          email: !email ? 'Email wajib diisi' : '',
                        });
                        return;
                      }
                      setOpenDialogConfirm(true);
                    }}
                  >
                    Simpan dan Buat Toko
                    <ArrowRight />
                  </Button>
                </DialogTrigger>
                {/* Dialog Konfirmasi */}
                <DialogContent className="max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-[1rem] font-[500]">
                      Anda akan menyimpan Organisasi
                    </DialogTitle>
                    <DialogDescription className="pt-4 text-[15px] text-[#555]">
                      Apakah Anda yakin akan menyimpan Organisasi Anda?
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="flex justify-end gap-4 pt-4">
                    <DialogClose asChild>
                      <Button variant="ghost" className="min-w-[80px]">
                        Tidak
                      </Button>
                    </DialogClose>
                    <Button variant="info" className="min-w-[120px]" onClick={handleSubmit}>
                      Ya, Saya Yakin
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
