'use client';

import { useOnInToDashboard, useSelectOrganization } from '@/__generated__/api/hooks';
import { Button } from '@/components/button/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card/card';
import { Check } from '@icon-park/react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';
import OrganizationSelect from './components/organization-select';

// Zod schema for validation
const formSchema = z.object({
  selectedOrg: z.string().min(1, 'Organisasi harus dipilih'),
});

const DEVICE_ID = 'device-id-anda';
const ORGANIZATION_ID = 'organization-id-anda';

const organizations = [
  { value: '1', label: 'PT. Dummy Satu' },
  { value: '2', label: 'CV. Dummy Dua' },
  { value: '3', label: 'Yayasan Dummy Tiga' },
];

export default function Index() {
  const router = useRouter();
  const [selectedOrg, setSelectedOrg] = useState('');

  useSelectOrganization(
    {
      'x-device-id': DEVICE_ID,
      'x-organization-id': ORGANIZATION_ID,
      'x-store-id': '1',
      body: {
        id: Number(selectedOrg),
        name: selectedOrg,
      },
    } as const,
    {
      retry: false,
      queryKey: [],
    }
  );

  // const organizations = Array.isArray(data)
  //   ? data.map((org: any) => ({ value: org.id, label: org.name }))
  //   : [];

  // --- Tambahkan mutation ---
  const onInToDashboardMutation = useOnInToDashboard({
    onSuccess: () => {
      toast.success('Berhasil login ke dashboard!', {
        style: { background: '#22c55e', color: '#fff' },
      });
      Cookies.remove('has_organization');
      router.push('/dashboard');
    },
    onError: (_error: { message?: string }) => {
      Cookies.remove('has_organization');
      router.push('/dashboard');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = formSchema.safeParse({ selectedOrg });

    if (!result.success) {
      toast.error(result.error.errors[0]?.message || 'Terjadi kesalahan validasi', {
        style: { background: '#ef4444', color: '#fff' },
      });
      return;
    }

    // --- Panggil mutation ---
    onInToDashboardMutation.mutate({
      'x-device-id': DEVICE_ID,
      'x-organization-id': ORGANIZATION_ID,
      body: { organizationId: selectedOrg },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
      <div>
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img
              src="/assets/zycas/zycas-logo.png"
              alt="Zycas Login"
              width={28}
              height={28}
              className="inline-block align-middle mr-2"
            />
            <span className="text-[1rem] font-light">Zycas</span>
            <span className="text-[1rem] font-light -ml-1">Dashboard</span>
          </div>
        </div>
        <Card className="text-[#555555] rounded-lg shadow-lg">
          <CardHeader className="border-b flex-row flex justify-between items-center">
            <CardTitle className="text-[1rem] font-semibold">Pilih Organisasi</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-0 text-[14px] font-[400]">
            <form onSubmit={handleSubmit}>
              <div className="h-auto w-[27.5rem] p-4">
                <div className="w-full mb-2">
                  <OrganizationSelect
                    value={selectedOrg}
                    onChange={setSelectedOrg}
                    organizations={organizations}
                  />
                </div>
                <p className="my-6 text-gray-500">
                  Data yang muncul pada Dashboard hanya dari Organisasi yang Anda pilih.
                </p>
                <p className="text-[#F08181] text-sm">
                  Pastikan yang Anda pilih sudah benar, karena Anda harus logout untuk kembali
                  memilih Organisasi lain
                </p>
                <div className="mt-8 w-full">
                  <Button
                    type="submit"
                    variant="success"
                    className="!w-full flex items-center justify-center gap-2"
                    disabled={!selectedOrg || onInToDashboardMutation.status === 'pending'}
                  >
                    {onInToDashboardMutation.status === 'pending' ? (
                      'Memproses...'
                    ) : (
                      <>
                        Pilih dan Masuk ke Dashboard
                        <Check theme="filled" size="18" fill="#fff" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
