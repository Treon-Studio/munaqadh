'use client';

import { DatePicker } from '@/components/datepicker/date-picker';
import type { OptionType } from '@/components/dropdown/dropdown';
import Dropdown from '@/components/dropdown/dropdown';
import CustomInput from '@/components/input/custom-input';
import { Skeleton } from '@/components/skeleton/skeleton';
import React, { useState } from 'react';

type FilterVoucherListProps = {
  loadingDataVoucher?: boolean;
  onStatusChange?: (status: OptionType | null) => void;
  onSearch?: (searchTerm: string) => void;
};
type Range = { from: Date; to?: Date };

export default function Index({ loadingDataVoucher = false }: FilterVoucherListProps) {
  const [selectedRange, setSelectedRange] = useState<Range | undefined>(undefined);
  const optionsStatus: OptionType[] = [
    { label: 'Semua status voucher', value: 1 },
    { label: 'Nominal', value: 2 },
    { label: 'Persen', value: 3 },
  ];
  const [selectedStatus, setSelectedStatus] = useState<OptionType | null>({
    label: 'Semua status voucher',
    value: 1,
  });

  return (
    <>
      <div>
        <div className="gap-6 py-6 w-full p-6">
          <div>
            {loadingDataVoucher ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-10 w-full rounded-md" />
              </div>
            ) : (
              <div className="flex flex-row items-end gap-4">
                <Dropdown
                  label="Filter Status"
                  options={optionsStatus}
                  value={selectedStatus}
                  onChange={setSelectedStatus}
                  placeholder="Pilih Status Voucher"
                  classDiv="mb-0"
                />
                <div className="w-[249px]">
                  <DatePicker
                    mode="range"
                    label="Jangka Waktu"
                    value={selectedRange}
                    placeholder="dd/mm/yyyy - dd/mm/yyyy"
                    onChange={(range) => setSelectedRange(range as Range | undefined)}
                  />
                </div>
                <CustomInput
                  label="Cari Voucher"
                  prependIcon="Search"
                  placeholder="Cari..."
                  className="h-10"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
