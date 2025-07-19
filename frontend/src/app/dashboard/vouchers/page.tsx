'use client';
import { Button } from '@/components/button/button';
import SkeletonButton from '@/components/button/skeleton-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card/card';
import SkeletonCardContent from '@/components/card/skeleton-card-content';
import { DatePicker } from '@/components/datepicker/date-picker';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/dialog/dialog';
import type { OptionType } from '@/components/dropdown/dropdown';
import Dropdown from '@/components/dropdown/dropdown';
import CustomInput from '@/components/input/custom-input';
import SkeletonPreset from '@/components/skeleton/skeleton-preset';
import { toast } from '@/components/toast/toast';
import { usePageLoading } from '@/hooks/use-page-loading/use-page-loading';
import { usePageContext } from '@/hooks/use-store-filter/use-page-context';
import FilterVoucherList from '@/modules/voucher/filter-voucher-list';
import TableVoucherList from '@/modules/voucher/table-voucher-list';
import { Check, Percentage, Plus, Refresh } from '@icon-park/react';
import { useEffect, useState } from 'react';

type Voucher = {
  id: string;
  name: string;
  type: string;
  quantity: string;
  period: string;
  voucher_code: string;
  status: string;
};
type Range = { from: Date; to?: Date };

export default function Index() {
  const [dialogVoucherOpen, setDialogVoucherOpen] = useState(false);
  const [dialogVoucherConfirm, setDialogVoucherConfirm] = useState(false);
  const [loadingDataVoucher, setLoadingDataVoucher] = useState(true);
  const [selectedVoucher, setSelectedVoucher] = useState<Voucher | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Form state for inputs
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    quantity: '',
    period: '',
    voucher_code: '',
    status: '',
  });

  const { isLoading, setLoading } = usePageLoading({
    autoStart: false,
    initialDelay: 0,
  });

  useEffect(() => {
    setLoading(true);
    new Promise<void>((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve();
      }, 2000);
    }).then(() => {
      setTimeout(() => {
        setLoadingDataVoucher(false);
      }, 2000);
    });
  }, [setLoading]);

  const handleAddVoucher = () => {
    setIsEditMode(false);
    setSelectedVoucher(null);
    setFormData({
      name: '',
      type: '',
      quantity: '',
      period: '',
      voucher_code: '',
      status: '',
    });
    setDialogVoucherOpen(true);
  };

  const handleEditVoucher = (voucher: Voucher) => {
    setIsEditMode(true);
    setSelectedVoucher(voucher);
    setFormData({
      name: voucher.name,
      type: voucher.type,
      quantity: voucher.quantity,
      period: voucher.period,
      voucher_code: voucher.voucher_code,
      status: voucher.status,
    });
    setDialogVoucherOpen(true);
  };

  const handleResetForm = () => {
    if (isEditMode && selectedVoucher) {
      setFormData({
        name: selectedVoucher.name,
        type: selectedVoucher.type,
        quantity: selectedVoucher.quantity,
        period: selectedVoucher.period,
        voucher_code: selectedVoucher.voucher_code,
        status: selectedVoucher.status,
      });
    } else {
      setFormData({
        name: '',
        type: '',
        quantity: '',
        period: '',
        voucher_code: '',
        status: '',
      });
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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

  /**
   *  FILTER TOKO HEADER
   * */
  const setShowStoreFilter = usePageContext((s) => s.setShowStoreFilter);

  useEffect(() => {
    setShowStoreFilter(true);
    return () => setShowStoreFilter(false);
  }, [setShowStoreFilter]);
  /**
   *  END FILTER TOKO HEADER
   * */

  return (
    <>
      <Card className="my-[1rem] font-normal">
        <CardHeader className="border-b flex-row flex justify-between items-center">
          {isLoading ? (
            <SkeletonPreset w="w-32" h="h-6" className="rounded-sm ml-2.5" />
          ) : (
            <CardTitle className="text-[1rem]"> List Voucher </CardTitle>
          )}
          <div className="flex items-center gap-3">
            {isLoading ? (
              <>
                <SkeletonButton className="w-[110px]" />
                <SkeletonButton className="w-[140px] mr-3.5" />
              </>
            ) : (
              <>
                <Button
                  type="button"
                  variant="info"
                  className="flex items-center"
                  onClick={handleAddVoucher}
                >
                  <Plus />
                  Tambah Voucher
                </Button>
                <Dialog open={dialogVoucherOpen} onOpenChange={setDialogVoucherOpen}>
                  <DialogContent className="sm:max-w-sm gap-6">
                    <DialogHeader>
                      <DialogTitle>{isEditMode ? 'Edit' : 'Tambah'} Voucher</DialogTitle>
                    </DialogHeader>
                    <CustomInput
                      required
                      isWidthFull
                      className="mb-2"
                      placeholder="cth: Voucher Asik"
                      label="Nama Voucher"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                    <CustomInput
                      required
                      isWidthFull
                      className="mb-2"
                      placeholder="cth: AA11223344"
                      label="Kode Voucher"
                      value={formData.voucher_code}
                      onChange={(e) => handleInputChange('voucher_code', e.target.value)}
                    />
                    <div className="w-full">
                      <DatePicker
                        mode="range"
                        label="Jangka Waktu"
                        value={selectedRange}
                        placeholder="dd/mm/yyyy - dd/mm/yyyy"
                        onChange={(range) => setSelectedRange(range as Range | undefined)}
                      />
                    </div>
                    <Dropdown
                      required
                      label="Tipe Voucher"
                      options={optionsStatus}
                      value={selectedStatus}
                      onChange={(option) => {
                        setSelectedStatus(option);
                        if (option) {
                          handleInputChange('type', option.label);
                        }
                      }}
                      placeholder="Pilih Tipe Voucher"
                      classDiv="mb-0"
                    />
                    {selectedStatus?.value === 2 ? (
                      <CustomInput
                        required
                        isWidthFull
                        label="Nominal Voucher"
                        currency
                        prependText="Rp"
                        placeholder="cth: 10.000"
                      />
                    ) : (
                      <CustomInput
                        required
                        isWidthFull
                        label="Persen Voucher"
                        currency
                        appendText={<Percentage />}
                        placeholder="cth: 10"
                      />
                    )}
                    <DialogFooter>
                      <Button
                        variant="ghost"
                        className={isEditMode ? '' : 'hidden'}
                        onClick={handleResetForm}
                      >
                        <Refresh size={14} />
                        Reset
                      </Button>
                      <Button
                        variant="success"
                        onClick={() => {
                          setDialogVoucherConfirm(true);
                          setDialogVoucherOpen(false);
                        }}
                      >
                        {isEditMode ? 'Update Voucher' : 'Simpan Voucher'} <Check size={14} />
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <Dialog open={dialogVoucherConfirm} onOpenChange={setDialogVoucherConfirm}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {isEditMode
                          ? 'Anda akan mengupdate Voucher'
                          : 'Anda akan menyimpan Voucher'}
                      </DialogTitle>
                      <DialogDescription>
                        {isEditMode
                          ? 'Apakah Anda yakin akan mengupdate Voucher tersebut?'
                          : 'Apakah Anda yakin akan menyimpan Voucher tersebut?'}
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            setDialogVoucherConfirm(false);
                            setDialogVoucherOpen(true);
                          }}
                        >
                          Tidak
                        </Button>
                      </DialogClose>
                      <Button
                        variant="info"
                        onClick={() => {
                          toast.success(isEditMode ? 'Terupdate!' : 'Tersimpan!', {
                            description: isEditMode
                              ? 'Voucher Anda telah berhasil diupdate'
                              : 'Voucher Anda telah berhasil tersimpan',
                            className: 'bg-[#75BF85]',
                          });
                          setDialogVoucherConfirm(false);
                          setIsEditMode(false);
                          setSelectedVoucher(null);
                        }}
                      >
                        Ya, Saya Yakin
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4">
          {isLoading ? (
            <SkeletonCardContent className="w-full" />
          ) : (
            <>
              <FilterVoucherList loadingDataVoucher={loadingDataVoucher} />
              <TableVoucherList isLoading={loadingDataVoucher} onEditVoucher={handleEditVoucher} />
            </>
          )}
        </CardContent>
      </Card>
    </>
  );
}
