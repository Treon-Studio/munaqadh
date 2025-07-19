// AUTO-GENERATED API client
import axios, { AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { z } from 'zod';
import * as DTO from './dto';

export type TypeToZod<T> = Required<{
  [K in keyof T]: T[K] extends string | number | boolean | null | undefined
      ? undefined extends T[K]
          ? z.ZodDefault<z.ZodType<Exclude<T[K], undefined>>>
          : z.ZodType<T[K]>
      : T[K] extends Array<infer U>
          ? U extends Record<string, any>
              ? z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>>
              : z.ZodArray<z.ZodType<U>>
          : T[K] extends Record<string, any>
              ? z.ZodRecord<z.ZodString, z.ZodAny>
              : z.ZodObject<TypeToZod<T[K]>>;
}>;

export const createZodObject = <T>(_obj: TypeToZod<T>) => {
  return z.object(_obj) as z.ZodObject<TypeToZod<T>>;
};

// --- Axios Instances ---
export const apiClientWithHeaders = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'accept': 'application/json',
    'x-device-id': '1',
    'x-store-id': '1',
    'x-organization-id': '1',
    'Content-Type': 'application/json',
  },
});

// Add response interceptor for error handling
apiClientWithHeaders.interceptors.response.use((response) => response, (error) => {
  if (error.response) {
      const { status, data } = error.response;
      error.message = 'API Error ' + status + ': ' + (data && data.message || error.message);
      error.data = data;
  }
  return Promise.reject(error);
});

apiClientWithHeaders.interceptors.request.use(config => {
const token = Cookies.get('token');
if (token) {
  config.headers = config.headers || {};
  config.headers.Authorization = `Bearer ${token}`;
}
return config;
}, error => Promise.reject(error));

const defaultHeaders = {
  'accept': 'application/json',
  'x-device-id': '1',
  'x-store-id': '1',
  'x-organization-id': '1',
  'Content-Type': 'application/json',
};

/**
 * Helper to make API requests with or without default headers.
 * @param config AxiosRequestConfig
 * @param useDefaultHeaders boolean (default: true)
 */
export function apiRequest<T = any>(config: AxiosRequestConfig, useDefaultHeaders = true) {
  return apiClientWithHeaders.request<T>({
    ...config,
    headers: useDefaultHeaders
      ? { ...defaultHeaders, ...(config.headers || {}) }
      : config.headers,
  });
}


// Set auth token for requests
export const setAuthToken = (token: string | null) => {
    if (token) {
      apiClientWithHeaders.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    } else {
      delete apiClientWithHeaders.defaults.headers.common['Authorization'];
    }
};


// Define Zod schemas for validation
export const SearchSchemaSchema = createZodObject<DTO.SearchSchema>({ 
  search: z.string(), 
}).partial().passthrough();
export const CreateOrganizationRequestSchemaSchema = createZodObject<DTO.CreateOrganizationRequestSchema>({ 
  address: z.string(), 
  email: z.string(), 
  image: z.string(), 
  name: z.string(), 
  nib: z.string(), 
  npwp: z.string(), 
  phone: z.string(), 
}).partial().passthrough();
export const CreateQueueCounterRequestSchemaSchema = createZodObject<DTO.CreateQueueCounterRequestSchema>({ 
  counter: z.number(), 
  counter_start: z.number(), 
  next_reset_at: z.string(), 
  padding: z.number(), 
  prefix: z.string(), 
  rotation: z.number(), 
}).partial().passthrough();
export const PageNumberSchemaSchema = createZodObject<DTO.PageNumberSchema>({ 
}).partial().passthrough();
export const FieldErrorSchema = z.object({
  field: z.string(),
  message: z.string(),
});

export const ErrorResponseSchemaSchema = z.object({
  code: z.number(),
  status: z.string(),
  name: z.string(),
  message: z.string(),
  data: z
    .object({
      errors: z.array(FieldErrorSchema).optional(),
    })
    .optional(),
});
export const IdParamSchema = createZodObject<DTO.IdParam>({ 
}).partial().passthrough();
export const SupplierSchemaSchema = createZodObject<DTO.SupplierSchema>({ 
  id: z.number(), 
  name: z.string(), 
  phone: z.string(), 
  pic: z.string(), 
}).partial().passthrough();
export const CreateTaxRequestSchemaSchema = createZodObject<DTO.CreateTaxRequestSchema>({ 
  tax: z.number(), 
}).partial().passthrough();
export const TagRequestSchemaSchema = createZodObject<DTO.TagRequestSchema>({ 
  name: z.string(), 
}).partial().passthrough();
export const DeviceIDSchemaSchema = createZodObject<DTO.DeviceIDSchema>({ 
}).partial().passthrough();
export const TokenRequestSchemaSchema = createZodObject<DTO.TokenRequestSchema>({ 
  password: z.string(), 
  phone: z.string(), 
}).partial().passthrough();
export const VariantSchemaSchema = createZodObject<DTO.VariantSchema>({ 
  id: z.number(), 
  name: z.string(), 
}).partial().passthrough();
export const TokenResponseSchemaSchema = createZodObject<DTO.TokenResponseSchema>({ 
  token: z.string(), 
}).partial().passthrough();
export const TaxSchemaSchema = createZodObject<DTO.TaxSchema>({ 
  created_at: z.string(), 
  deleted_at: z.string(), 
  id: z.number(), 
  period_date: z.string(), 
  store_id: z.number(), 
  tax: z.number(), 
  updated_at: z.string(), 
}).partial().passthrough();
export const TagSchemaSchema = createZodObject<DTO.TagSchema>({ 
  created_at: z.string(), 
  deleted_at: z.string(), 
  id: z.number(), 
  name: z.string(), 
  store_id: z.number(), 
  updated_at: z.string(), 
}).partial().passthrough();
export const CreateUnitRequestSchemaSchema = createZodObject<DTO.CreateUnitRequestSchema>({ 
  display_name: z.string(), 
}).partial().passthrough();
export const UnitSchemaSchema = createZodObject<DTO.UnitSchema>({ 
  data: z.array(z.record(z.string(), z.any())), 
}).partial().passthrough();
export const StoreIDSchemaSchema = createZodObject<DTO.StoreIDSchema>({ 
}).partial().passthrough();
export const OrganizationSchemaSchema = createZodObject<DTO.OrganizationSchema>({ 
  address: z.string(), 
  email: z.string(), 
  id: z.number(), 
  image: z.string(), 
  name: z.string(), 
  nib: z.string(), 
  npwp: z.string(), 
  phone: z.string(), 
}).partial().passthrough();
export const VariantRequestSchemaSchema = createZodObject<DTO.VariantRequestSchema>({ 
  name: z.string(), 
}).partial().passthrough();
export const QueueCounterSchemaSchema = createZodObject<DTO.QueueCounterSchema>({ 
  counter: z.number(), 
  counter_start: z.number(), 
  created_at: z.string(), 
  deleted_at: z.string(), 
  id: z.number(), 
  next_reset_at: z.string(), 
  padding: z.number(), 
  prefix: z.string(), 
  rotation: z.number(), 
  store_id: z.number(), 
  updated_at: z.string(), 
}).partial().passthrough();
export const CreateStoreRequestSchemaSchema = createZodObject<DTO.CreateStoreRequestSchema>({ 
  address: z.string(), 
  email: z.string(), 
  image: z.string(), 
  lat: z.number(), 
  lng: z.number(), 
  name: z.string(), 
  phone: z.number(), 
}).partial().passthrough();
export const SupplierRequestSchemaSchema = createZodObject<DTO.SupplierRequestSchema>({ 
  name: z.string(), 
  phone: z.string(), 
  pic: z.string(), 
}).partial().passthrough();
export const OrganizationIDSchemaSchema = createZodObject<DTO.OrganizationIDSchema>({ 
}).partial().passthrough();


// Type exports from schemas
export type SearchSchema = z.infer<typeof SearchSchemaSchema>;
export type CreateOrganizationRequestSchema = z.infer<typeof CreateOrganizationRequestSchemaSchema>;
export type CreateQueueCounterRequestSchema = z.infer<typeof CreateQueueCounterRequestSchemaSchema>;
export type PageNumberSchema = z.infer<typeof PageNumberSchemaSchema>;
export type ErrorResponseSchema = z.infer<typeof ErrorResponseSchemaSchema>;
export type IdParam = z.infer<typeof IdParamSchema>;
export type SupplierSchema = z.infer<typeof SupplierSchemaSchema>;
export type CreateTaxRequestSchema = z.infer<typeof CreateTaxRequestSchemaSchema>;
export type TagRequestSchema = z.infer<typeof TagRequestSchemaSchema>;
export type DeviceIDSchema = z.infer<typeof DeviceIDSchemaSchema>;
export type TokenRequestSchema = z.infer<typeof TokenRequestSchemaSchema>;
export type VariantSchema = z.infer<typeof VariantSchemaSchema>;
export type TokenResponseSchema = z.infer<typeof TokenResponseSchemaSchema>;
export type TaxSchema = z.infer<typeof TaxSchemaSchema>;
export type TagSchema = z.infer<typeof TagSchemaSchema>;
export type CreateUnitRequestSchema = z.infer<typeof CreateUnitRequestSchemaSchema>;
export type UnitSchema = z.infer<typeof UnitSchemaSchema>;
export type StoreIDSchema = z.infer<typeof StoreIDSchemaSchema>;
export type OrganizationSchema = z.infer<typeof OrganizationSchemaSchema>;
export type VariantRequestSchema = z.infer<typeof VariantRequestSchemaSchema>;
export type QueueCounterSchema = z.infer<typeof QueueCounterSchemaSchema>;
export type CreateStoreRequestSchema = z.infer<typeof CreateStoreRequestSchemaSchema>;
export type SupplierRequestSchema = z.infer<typeof SupplierRequestSchemaSchema>;
export type OrganizationIDSchema = z.infer<typeof OrganizationIDSchemaSchema>;


// Custom error handling
export class ValidationError extends Error {
  constructor(public issues: z.ZodIssue[], message: string = 'Validation failed') {
    super(message);
    this.name = 'ValidationError';
  }
}





// Helper to validate response with Zod schema
export const validateResponse = <T>(data: unknown, schema: z.ZodType<T>): T => {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new ValidationError(error.issues);
    }
    throw error;
  }
};

// API client with validation
const api = {

  /**
   * Create queue counter
   */
  createQueueCounter: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    body: CreateQueueCounterRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/queue-counters';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      
      const response = await apiRequest({
        url,
        method: 'POST',
        data: params.body,
        headers,
      })

      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * get active tax
   */
  ActiveTax: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    
  }) => {
    try {
      
      let url = '/api/v1/taxes/active';
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
    
      const response = await apiClientWithHeaders.get(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * list supplier
   */
  listSupplier: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    'x-organization-id': string;
    body: SearchSchema;
  }) => {
    try {
      let url = '/api/suppliers';
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        'x-organization-id': params['x-organization-id'],
      };
      const response = await apiClientWithHeaders.get(url, { headers });
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * create supplier
   */
  CreateSupplier: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    body: SupplierRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/suppliers';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * Update an existing tax
   */
  updateTax: async (params: {
    id: string;
    'x-device-id': string;
    'x-store-id': string;
    body: CreateTaxRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/taxes/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      
      const response = await apiClientWithHeaders.put(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * update unit
   */
  updateUnit: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    body: CreateQueueCounterRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/units/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.put(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * delete unit
   */
  deleteUnitProduct: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    
  }) => {
    try {
      
      let url = '/api/v1/units/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.delete(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * update variant attribute
   */
  updateVariantAttribute: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    body: VariantRequestSchema;
  }) => {
    try {
      
      let url = '/api/variant-attributes/${params.id}';
    
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      const response = await apiClientWithHeaders.put(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * delete variant attribute
   */
  deleteVariantAttribute: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    
  }) => {
    try {
      
      let url = '/api/variant-attributes/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      
      const response = await apiClientWithHeaders.delete(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * create tag
   */
  CreateTag: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    body: TagRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/tags';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * list tag product
   */
  ListTag: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    
  }) => {
    try {
      
      let url = '/api/v1/tags';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.get(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * Get token to access the app
   */
  authEmployeeToken: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    body: TokenRequestSchema;
    
  }) => {
    try {
      
      let url = '/auth/employee/token';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * update tag
   */
  UpdateTag: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    body: TagRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/tag/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.put(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * delete tag
   */
  DeleteTag: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    
  }) => {
    try {
      
      let url = '/api/v1/tag/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.delete(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * Get organization
   */
  getOrganization: async (
    params: {
      'x-device-id': string;
      page?: number;
    },
  ) => {
      try {
        
        let url = '/api/organization';
        
        const headers = {
          'x-device-id': params['x-device-id'],
        };
        const queryParams = new URLSearchParams();
        
        if (params.page !== undefined) {
          queryParams.append('page', String(params.page));
        }
        
        
        const queryString = queryParams.toString();
        if (queryString) {
          url += '?' + queryString;
        }
        
        const response = await apiClientWithHeaders.get(url, { headers });
        
        
        return response.data;
      } catch (error) {
        if (error instanceof ValidationError) throw error;
        if (error instanceof z.ZodError) throw new ValidationError(error.issues);
        if (axios.isAxiosError(error)) {
          if (error.response && error.response.status === 401) console.error('Authentication required');
          if (error.response && error.response.status === 403) console.error('Access denied');
          throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
        }
        throw error;
      }
  },

  /**
   * Create organization
   */
  createOrganization: async (
      params: {
      'x-device-id': string;
      body: Partial<Pick<CreateOrganizationRequestSchema, 'name' | 'phone' | 'email' | 'nib' | 'npwp' | 'image' | 'address'>>
    }) => {
      try {
        
        let url = '/api/organization';
        
    
        const headers = {
          'x-device-id': params['x-device-id'],
        };
    
        
        const response = await apiClientWithHeaders.post(url, params.body, { 
            headers }
        );
        return response.data;

      } catch (error) 
      {
          if (error instanceof ValidationError) throw error;
          if (error instanceof z.ZodError) throw new ValidationError(error.issues);
            if (axios.isAxiosError(error)) 
            {
                if (error.response && error.response.status === 401) console.error('Authentication required');
                if (error.response && error.response.status === 403) console.error('Access denied');
                throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message); 
            }
        throw error;
      }
  },

  /**
   * Create tax
   */
  createTax: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    body: CreateTaxRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/taxes';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * update queue counter
   */
  updateQueueCounter: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    body: CreateQueueCounterRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/queue-counters/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.put(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * list variant attributes
   */
  listVariantAttributes: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    
  }) => {
    try {
      
      let url = '/api/variant-attributes';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.get(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * create tag
   */
  Create: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    body: VariantRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/variant-attributes';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * show supplier
   */
  ShowSupplier: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    
  }) => {
    try {
      
      let url = '/api/suppliers/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.get(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * update supplier
   */
  UpdateSupplier: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    body: SupplierRequestSchema;
  }) => {
    try {
      
      let url = '/api/suppliers/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.put(url, params.body, { headers });
      
      
      return response.data;
    } 
    catch (error) {
        if (error instanceof ValidationError) throw error;
        if (error instanceof z.ZodError) throw new ValidationError(error.issues);
        if (axios.isAxiosError(error)) 
        {
          if (error.response && error.response.status === 401) console.error('Authentication required');
          if (error.response && error.response.status === 403) console.error('Access denied');
          throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
        }
        throw error;
    }
  },

  /**
   * delete tag
   */
  deleteTag: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    id: string;
    
  }) => {
    try {
      
      let url = '/api/suppliers/${params.id}';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.delete(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * Get token
   */
  authToken: async (params: {
    'x-device-id': string;
    body: TokenRequestSchema;
    
  }) => {
    try {
      
      let url = '/root/token';
    
      const headers = {
        'x-device-id': params['x-device-id'],
        
      };
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
    
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * list unit product
   */
  ListUnitProduct: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    
  }) => {
    try {
      
      let url = '/api/v1/units';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.get(url, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },

  /**
   * create unit product
   */
  CreateUnitProduct: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    body: CreateUnitRequestSchema;
    
  }) => {
    try {
      
      let url = '/api/v1/units';
      
      
      
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        
      };
      

      

      
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
      
      
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      if (error instanceof z.ZodError) throw new ValidationError(error.issues);
      if (axios.isAxiosError(error)) {
        if (error.response && error.response.status === 401) console.error('Authentication required');
        if (error.response && error.response.status === 403) console.error('Access denied');
        throw new Error('HTTP ' + (error.response && error.response.status || 'unknown') + ': ' + error.message);
      }
      throw error;
    }
  },
  /**
   * list employees
   */
  ListEmployees: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    'x-organization-id': string;
    body: Partial<DTO.EmployeeSchema>;
  }) => {
    try {

      let url = '/api/employees';
    
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        'x-organization-id': params['x-organization-id'],
      };
      
      const response = await apiClientWithHeaders.get(url, { headers, params: params.body });

      const users = response.data.data.map((user: DTO.EmployeeListResponse) => ({
        ...user,
        image: user.image || '/assets/zycas/default-image-user.png',
        store_count: user.store_count || '3 Toko',
      }));

      return users;
    } catch (error) {
        if (error instanceof ValidationError) throw error;
        throw error;
    }
  },

   /**
   * Select organization
   */

  SelectOrganization: async (params: {
    'x-device-id': string;
    'x-organization-id': string;
  }) => {
    try {
      let url = `/api/organizations/${params['x-organization-id']}`;

      const headers = {
        'x-device-id': params['x-device-id'],
      };
      const response = await apiClientWithHeaders.get(url, { headers });
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw error;
    }
  },

  OnInToDashboard: async (params: {
    'x-device-id': string;
    'x-organization-id': string;
    body: {
      'organizationId': string;
    }
  }) => {
    try {
      let url = `/api/organizations/${params['x-organization-id']}/on-in-to-dashboard`;
      const headers = {
        'x-device-id': params['x-device-id'],
      };
       const response = await apiClientWithHeaders.post(url, params.body, { headers });
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw error;
    }
  },

  /**
   * Create Store
   */
  onCreateStore: async (params: {
    'x-device-id': string;
    body: CreateStoreRequestSchema;
  }) => {
    try {
      let url = '/api/stores';
      
      const headers = {
        'x-device-id': params['x-device-id'],
      };
      const response = await apiClientWithHeaders.post(url, params.body, { headers });
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw error;
    }
  },

  /**
   * RESET PASSWORD
   */
  ResetEmployeePassword: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    'x-organization-id': string;
    body: {
      'id_employee': number,
      'password': string,
      'password_confirmation': string,
    }
  }) => {
    try {
      let url = `/api/employees/${params.body.id_employee}/reset-password`;
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        'x-organization-id': params['x-organization-id'],
      };
       const response = await apiClientWithHeaders.put(url, params.body, { headers });
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw error;
    }
  },
  /**
   * RESET PASSWORD
   */

  /**
   * RESET PIN
   */
  ResetEmployeePin: async (params: {
    'x-device-id': string;
    'x-store-id': string;
    'x-organization-id': string;
    body: {
      'id_employee': number,
    }
  }) => {
    try {
      let url = `/api/employees/${params.body.id_employee}/reset-pin`;
      const headers = {
        'x-device-id': params['x-device-id'],
        'x-store-id': params['x-store-id'],
        'x-organization-id': params['x-organization-id'],
      };
       const response = await apiClientWithHeaders.put(url, params.body, { headers });
      return response.data;
    } catch (error) {
      if (error instanceof ValidationError) throw error;
      throw error;
    }
  },
  /**
   * RESET PIN
   */

};

export default api;