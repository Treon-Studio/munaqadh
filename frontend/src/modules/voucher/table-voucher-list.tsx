import { DataTable } from '@/components/table/data-table';
import { DataTablePagination } from '@/components/table/data-table-pagination';
import {
  Edit,
  FileDisplayOne,
  Right,
  SortAmountDown,
  SortAmountUp,
  SortThree,
} from '@icon-park/react';
import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';

type Voucher = {
  id: string;
  name: string;
  type: string;
  quantity: string;
  period: string;
  voucher_code: string;
  status: string;
};

const organizationData: Voucher[] = [
  {
    id: '0001234',
    name: 'Voucher Ceria Spesial',
    type: 'Nominal',
    quantity: 'Rp 16.000',
    period: '07/06/25 - 30/06/25',
    voucher_code: 'AA166277BGH',
    status: 'Aktif',
  },
  {
    id: '0001233',
    name: 'Tiket Kejutan Akhir Pekan',
    type: 'Nominal',
    quantity: 'Rp 14.000',
    period: '12/04/25 - 27/04/25',
    voucher_code: 'AA332207BGH',
    status: 'Aktif',
  },
  {
    id: '0001232',
    name: 'Kode Rejeki Instan',
    type: 'Persen',
    quantity: '11%',
    period: '28/05/25 - 05/06/25',
    voucher_code: 'AA249242BGH',
    status: 'Non-Aktif',
  },
  {
    id: '0001231',
    name: 'Voucher Hemat Heboh',
    type: 'Nominal',
    quantity: 'Rp 18.000',
    period: '29/03/25 - 08/04/25',
    voucher_code: 'AA415172BGH',
    status: 'Aktif',
  },
  {
    id: '0001230',
    name: 'Kupon Hadiah Seru',
    type: 'Nominal',
    quantity: 'Rp 12.000',
    period: '29/10/25 - 29/11/24',
    voucher_code: 'AA498137BGH',
    status: 'Non-Aktif',
  },
  {
    id: '0001229',
    name: 'Promo Kilat Berkah',
    type: 'Persen',
    quantity: '5%',
    period: '01/08/24 - 14/08/24',
    voucher_code: 'AA581102BGH',
    status: 'Aktif',
  },
  {
    id: '0001228',
    name: 'Voucher Bintang Keberuntungan',
    type: 'Persen',
    quantity: '17%',
    period: '03/08/24 - 26/08/24',
    voucher_code: 'AA664067BGH',
    status: 'Aktif',
  },
];

type TableProductListProps = {
  isLoading?: boolean;
  onEditVoucher?: (organization: Voucher) => void;
};

export default function Index({ isLoading = false, onEditVoucher }: TableProductListProps) {
  const columnHelper = createColumnHelper<Voucher>();

  const baseColumns = [
    columnHelper.accessor('name', {
      header: ({ column }) => {
        const isSorted = column.getIsSorted();

        return (
          <div
            onClick={column.getToggleSortingHandler()}
            className="font-semibold text-[#555555] cursor-pointer select-none flex items-center gap-1"
          >
            Nama Voucher
            {isSorted === 'asc' && <SortAmountUp theme="outline" size="16" />}
            {isSorted === 'desc' && <SortAmountDown theme="outline" size="16" />}
            {!isSorted && <SortThree theme="outline" size="16" />}
          </div>
        );
      },
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor('type', {
      header: ({ column }) => {
        const isSorted = column.getIsSorted();

        return (
          <div
            onClick={column.getToggleSortingHandler()}
            className="font-semibold text-[#555555] cursor-pointer select-none flex items-center gap-1"
          >
            Tipe
            {isSorted === 'asc' && <SortAmountUp theme="outline" size="16" />}
            {isSorted === 'desc' && <SortAmountDown theme="outline" size="16" />}
            {!isSorted && <SortThree theme="outline" size="16" />}
          </div>
        );
      },
      cell: (info) => {
        const value = info.getValue();
        const isPersent = value === 'Persen';
        return (
          <div
            className={`h-[1.5rem] px-3 py-1 text-[0.75rem] rounded w-[90px] text-center ${
              isPersent ? 'bg-[#E3FBFF] text-[#0FA6C1]' : 'bg-[#FFF5DF] text-[#FCBA33]'
            }`}
          >
            {value}
          </div>
        );
      },
      enableSorting: true,
    }),
    columnHelper.accessor('quantity', {
      header: ({ column }) => {
        const isSorted = column.getIsSorted();

        return (
          <div
            onClick={column.getToggleSortingHandler()}
            className="font-semibold text-[#555555] cursor-pointer select-none flex items-center gap-1"
          >
            Jumlah
            {isSorted === 'asc' && <SortAmountUp theme="outline" size="16" />}
            {isSorted === 'desc' && <SortAmountDown theme="outline" size="16" />}
            {!isSorted && <SortThree theme="outline" size="16" />}
          </div>
        );
      },
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor('period', {
      header: ({ column }) => {
        const isSorted = column.getIsSorted();

        return (
          <div
            onClick={column.getToggleSortingHandler()}
            className="font-semibold text-[#555555] cursor-pointer select-none flex items-center gap-1"
          >
            Jangka Waktu
            {isSorted === 'asc' && <SortAmountUp theme="outline" size="16" />}
            {isSorted === 'desc' && <SortAmountDown theme="outline" size="16" />}
            {!isSorted && <SortThree theme="outline" size="16" />}
          </div>
        );
      },
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor('voucher_code', {
      header: ({ column }) => {
        const isSorted = column.getIsSorted();

        return (
          <div
            onClick={column.getToggleSortingHandler()}
            className="font-semibold text-[#555555] cursor-pointer select-none flex items-center gap-1"
          >
            Kode Voucher
            {isSorted === 'asc' && <SortAmountUp theme="outline" size="16" />}
            {isSorted === 'desc' && <SortAmountDown theme="outline" size="16" />}
            {!isSorted && <SortThree theme="outline" size="16" />}
          </div>
        );
      },
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.accessor('status', {
      header: ({ column }) => {
        const isSorted = column.getIsSorted();

        return (
          <div
            onClick={column.getToggleSortingHandler()}
            className="font-semibold text-[#555555] cursor-pointer select-none flex items-center gap-1"
          >
            Status
            {isSorted === 'asc' && <SortAmountUp theme="outline" size="16" />}
            {isSorted === 'desc' && <SortAmountDown theme="outline" size="16" />}
            {!isSorted && <SortThree theme="outline" size="16" />}
          </div>
        );
      },
      cell: (info) => info.getValue(),
      enableSorting: true,
    }),
    columnHelper.display({
      id: 'aksi',
      header: () => <div className="font-semibold text-[#555555] text-center">Aksi</div>,
      cell: ({ row }) => (
        <div className="flex gap-2 justify-center items-center">
          <FileDisplayOne className="cursor-pointer" />
          <Edit
            className="cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => onEditVoucher?.(row.original)}
          />
        </div>
      ),
    }),
  ];

  const accordionColumns = [
    {
      id: 'expander',
      header: () => null,
      cell: ({ row }) => {
        const hasDetails = row.original.details?.length > 0;
        if (!hasDetails) return null;

        return (
          <button
            onClick={() => row.toggleExpanded()}
            className="flex items-center justify-center w-8 h-8 cursor-pointer"
            aria-label={row.getIsExpanded() ? 'Collapse' : 'Expand'}
            type="button"
          >
            <div
              className={`transform transition-transform duration-500 ${
                row.getIsExpanded() ? 'rotate-90' : ''
              }`}
            >
              <Right />
            </div>
          </button>
        );
      },
      size: 32,
    },
    ...baseColumns,
  ];

  const table = useReactTable({
    data: organizationData,
    columns: accordionColumns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {},
  });

  return (
    <>
      <div className="container mx-auto py-2">
        <DataTable table={table} isLoading={isLoading} />
        <DataTablePagination table={table} isLoading={isLoading} />
      </div>
    </>
  );
}
