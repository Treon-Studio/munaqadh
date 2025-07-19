'use client';

import Dropdown from '@/components/dropdown/dropdown';
import type { OptionType } from '@/components/dropdown/dropdown';
import CustomInput from '@/components/input/custom-input';
import React from 'react';
import { useUserFilterStore, type StatusFilter } from '@/modules/user/store';

const optionsStatus: OptionType[] = [
  { label: 'Semua status user', value: 'all' },
  { label: 'Aktif', value: 'active' },
  { label: 'Dicabut', value: 'inactive' },
];

export default function Index() {
  const { setStatus, setSearch, searchByStatus } = useUserFilterStore();
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 w-1/2">
          <div>
            <Dropdown
              label="Filter Status"
              options={optionsStatus}
              value={optionsStatus.find((o) => o.value === searchByStatus) ?? null}
              onChange={(option) => {
                if (option?.value) setStatus(option.value as StatusFilter);
              }}
              placeholder="Pilih Status"
              className="mt-2"
            />
          </div>
          <div>
            <CustomInput
              label="Cari User"
              prependIcon="Search"
              placeholder="Cari..."
              className="h-10"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
