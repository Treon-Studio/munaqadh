'use client';

import { useGetEmployee } from '@/__generated__/api/hooks';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/dropdown-menu/dropdown-menu';
import { DataTable } from '@/components/table/data-table';
import { DataTablePagination } from '@/components/table/data-table-pagination';
import { useUserFilterStore } from '@/modules/user/store';
import {
  Edit,
  FileDisplayOne,
  ImageFiles,
  MoreOne,
  OpenOne,
  Refresh,
  SortAmountDown,
  SortAmountUp,
  SortThree,
  SwitchButton,
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
import DialogFormResetPass from './dialog-form-reset-pass';
import DialogFormResetPin from './dialog-form-reset-pin';

type User = {
  id: number;
  image: string;
  name: string;
  email: string;
  phone: string;
  store_count: string;
  is_active: boolean;
};

const getTextClass = (active: boolean) => (!active ? 'text-[#C2C7D0]' : 'text-black');

const columnHelper = createColumnHelper<User>();

function getSortableHeader(
  label: string,
  field: keyof User,
  currentSortBy: string,
  currentDirection: 'asc' | 'desc',
  onSortChange: (field: string, direction: 'asc' | 'desc') => void
) {
  const isSorted = currentSortBy === field;

  const handleClick = () => {
    if (!isSorted) return onSortChange(field, 'asc');
    if (currentDirection === 'asc') return onSortChange(field, 'desc');
    return onSortChange(field, 'asc');
  };

  return (
    <div
      onClick={handleClick}
      className="font-bold text-black cursor-pointer select-none flex items-center gap-1 justify-between"
    >
      {label}
      {isSorted ? (
        currentDirection === 'asc' ? (
          <SortAmountUp size={16} />
        ) : (
          <SortAmountDown size={16} />
        )
      ) : (
        <SortThree size={16} />
      )}
    </div>
  );
}

export default function TableUser() {
  const { search, searchByStatus, perPage, sortBy, sortDirection, setSort } = useUserFilterStore();

  const params = React.useMemo(
    () => ({
      'x-device-id': '1',
      'x-store-id': '1',
      'x-organization-id': '1',
      body: {
        search,
        per_page: perPage,
        search_by_status: searchByStatus,
        sort_by: sortBy,
        sort_direction: sortDirection,
      },
    }),
    [search, searchByStatus, perPage, sortBy, sortDirection]
  );

  const { data = [], isLoading } = useGetEmployee(params);
  /**
   * FILTER USER
   */

  /**
   * RESET PASSWORD
   */
  const [toggleResetPassModal, setToggleResetPassModal] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState<number | null>(null);
  /**
   * RESET PASSWORD
   */

  /**
   * RESET PIN
   */
  const [toggleResetPinModal, setToggleResetPinModal] = React.useState(false);
  /**
   * RESET PIN
   */

  const baseColumns = React.useMemo(
    () => [
      columnHelper.accessor('image', {
        header: () => (
          <div className="flex justify-center">
            <ImageFiles fill="#555555" />
          </div>
        ),
        cell: (info) => (
          <div className="flex justify-center">
            <img
              src={info.getValue()}
              alt={`${info.row.original.name} profile`}
              className="w-8 h-8 object-cover rounded-md"
            />
          </div>
        ),
      }),
      columnHelper.accessor('name', {
        header: () => getSortableHeader('Nama User', 'name', sortBy, sortDirection, setSort),
        cell: (info) => (
          <span className={getTextClass(info.row.original.is_active)}>{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('email', {
        header: () => <div className="font-bold text-black">Email</div>,
        cell: (info) => (
          <span className={getTextClass(info.row.original.is_active)}>{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('phone', {
        header: () => getSortableHeader('No. Whatsapp', 'phone', sortBy, sortDirection, setSort),
        cell: (info) => (
          <span className={getTextClass(info.row.original.is_active)}>{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('store_count', {
        header: () =>
          getSortableHeader('Jumlah Toko', 'store_count', sortBy, sortDirection, setSort),
        cell: (info) => (
          <span className={getTextClass(info.row.original.is_active)}>{info.getValue()}</span>
        ),
      }),
      columnHelper.accessor('is_active', {
        header: () => getSortableHeader('Status', 'is_active', sortBy, sortDirection, setSort),
        cell: (info) => {
          const value = info.getValue();
          return (
            <div
              className={`h-[1.5rem] px-3 py-1 text-[0.75rem] rounded w-[4.4rem] mx-auto text-center ${
                value ? 'bg-[#ECFDF5] text-[#75BF85]' : 'bg-[#FAFAFA] text-[#C2C7D0]'
              }`}
            >
              {value ? 'Aktif' : 'Dicabut'}
            </div>
          );
        },
      }),
      columnHelper.display({
        id: 'aksi',
        header: () => <div className="font-bold text-black text-center">Aksi</div>,
        cell: (info) => (
          <div className="flex gap-2 justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <MoreOne className="cursor-pointer" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-56 rounded-lg"
                side="right"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <FileDisplayOne size="16" className="mr-2" /> Detail User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Edit size="16" className="mr-2" /> Edit User
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <SwitchButton size="16" className="mr-2" /> Edit Permission
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSelectedUserId(info.row.original.id);
                      setToggleResetPassModal(true);
                    }}
                  >
                    <OpenOne size="16" className="mr-2" /> Reset Password
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => {
                      setSelectedUserId(info.row.original.id);
                      setToggleResetPinModal(true);
                    }}
                  >
                    <Refresh size="16" className="mr-2" /> Reset PIN
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ),
      }),
    ],
    [sortBy, sortDirection, setSort]
  );

  const table = useReactTable({
    data,
    columns: baseColumns,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="container mx-auto py-2">
      <DataTable table={table} />
      <DataTablePagination table={table} isLoading={isLoading} />

      {/* MODAL FORM RESET PASSWORD */}
      <DialogFormResetPass
        open={toggleResetPassModal}
        onOpenChange={setToggleResetPassModal}
        selectedUserId={selectedUserId}
        onResetSuccess={() => {
          setToggleResetPassModal(false);
          setSelectedUserId(null);
        }}
      />

      {/* MODAL FORM RESET PIN */}
      <DialogFormResetPin
        open={toggleResetPinModal}
        onOpenChange={setToggleResetPinModal}
        selectedUserId={selectedUserId}
        onResetSuccess={() => {
          setToggleResetPinModal(false);
          setSelectedUserId(null);
        }}
      />
    </div>
  );
}
