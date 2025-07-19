// AUTO-GENERATED TypeScript DTOs

export type BaseRequestSchema = {
  'x-device-id': string;
  'x-store-id': string;
  'x-organization-id': string;
}

export type StoreIDSchema = {
}

export type IdParam = {
}

export type BaseResponseSchema<T> = {
  status: string;
  message: string;
  data: T;
}
export type CreateQueueCounterRequestSchema = {
  counter: number;
  counter_start: number;
  next_reset_at: string;
  padding: number;
  prefix: string;
  rotation: number;
}
export type UnitSchema = {
  data: Record<string, string>[];
}
export type TaxSchema = {
  created_at: string;
  deleted_at: string;
  id: number;
  period_date: string;
  store_id: number;
  tax: number;
  updated_at: string;
}
export type FieldError = {
  field: string;
  message: string;
};

export type ErrorResponseSchema = {
  code: number;
  status: string;
  name: string;
  message: string;
  data?: {
    errors?: FieldError[];
  };
};
export type CreateTaxRequestSchema = {
  tax: number;
}
export type PageNumberSchema = {
}
export type TokenResponseSchema = {
  token: string;
}
export type CreateUnitRequestSchema = {
  display_name: string;
}
export type VariantRequestSchema = {
  name: string;
}
export type CreateOrganizationRequestSchema = {
  address: string;
  email: string;
  image: string;
  name: string;
  nib: string;
  npwp: string;
  phone: string;
}
export type SupplierSchema = {
  id: number;
  name: string;
  phone: string;
  pic: string;
}
export type QueueCounterSchema = {
  counter: number;
  counter_start: number;
  created_at: string;
  deleted_at: string;
  id: number;
  next_reset_at: string;
  padding: number;
  prefix: string;
  rotation: number;
  store_id: number;
  updated_at: string;
}
export type TagRequestSchema = {
  name: string;
}
export type SupplierRequestSchema = {
  name: string;
  phone: string;
  pic: string;
}
export type DeviceIDSchema = {
}
export type CreateStoreRequestSchema = {
  address: string;
  email: string;
  image: string;
  lat: number;
  lng: number;
  name: string;
  phone: number;
}
export type VariantSchema = {
  id: number;
  name: string;
}
export type OrganizationIDSchema = {
}
export type TokenRequestSchema = {
  password: string;
  phone: string;
}
export type SearchSchema = {
  search: string;
}
export type OrganizationSchema = {
  address: string;
  email: string;
  id: number;
  image: string;
  name: string;
  nib: string;
  npwp: string;
  phone: string;
}
export type TagSchema = {
  created_at: string;
  deleted_at: string;
  id: number;
  name: string;
  store_id: number;
  updated_at: string;
}

export type EmployeeSchema = {
  id: string;
  per_page: number;
  search: string;
  search_by_status: string;
  sort_by: string;
  sort_direction: string;
}

export type EmployeeListResponse = {
  id: number;
  name: string;
  email: string;
  phone: string;
  is_active: boolean;
  image: string;
  store_count: string;
};

export type SelectOrganizationSchema = {
  id: number;
  name: string;
}

export type GetOrganizationSchema = {
  'x-device-id': string;
  page?: number
}

export type GetEmployeeSchema = BaseRequestSchema & {
  body: Partial<EmployeeSchema>;
}

export type GetListOrganizationSchema = BaseRequestSchema & {
  body: Partial<SelectOrganizationSchema>;
}

export type ResetEmployeePasswordRequestSchema = BaseRequestSchema & {
  body: {
    id_employee: number;
    password: string;
    password_confirmation: string;
  }
}
export type ResetEmployeePinRequestSchema = BaseRequestSchema & {
  body: {
    id_employee: number;
  }
}

export type ResetEmployeePasswordResponseSchema = BaseResponseSchema<{ 
  id: number;
  updated: boolean; 
  updated_at: string; 
}>

export type ResetEmployeePinResponseSchema = BaseResponseSchema<{ 
  id: number;
  updated: boolean; 
  updated_at: string; 
}>

export type EnterOrganizationResponseSchema = BaseResponseSchema<{ 
  id: number;
  updated: boolean; 
  updated_at: string; 
}>