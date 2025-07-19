import {UseMutationOptions, UseQueryOptions, useMutation, useQuery } from '@tanstack/react-query';
import api from './client';
import * as DTO from './dto';

// --- AUTO-GENERATED HOOKS ---

// Helper for query key
const getQueryKey = (fnName: string, params: DTO.GetOrganizationSchema) => [fnName, params];

// --- Queries ---

export function useGetOrganization(
  params: DTO.GetOrganizationSchema,
  options?: UseQueryOptions<DTO.OrganizationSchema>
) {
  return useQuery({
    queryKey: getQueryKey('getOrganization', params),
    queryFn: () => api.getOrganization(params), ...options,
  });
}

export function useGetEmployee(
  params: DTO.GetEmployeeSchema,
  options?: UseQueryOptions<DTO.EmployeeListResponse[]>
) {
  const { body, ...headers } = params;

  return useQuery({
    queryKey: ['getEmployee', body],
    queryFn: () =>
      api.ListEmployees({
        ...headers,
        body,
      }),
    placeholderData: (prev) => prev,
    ...options,
  });
}

export function useSelectOrganization(
  params: DTO.GetListOrganizationSchema,
  options?: UseQueryOptions<DTO.SelectOrganizationSchema>
) {
  return useQuery({
    queryKey: getQueryKey('selectOrganization', params),
    queryFn: () => {
      return api.SelectOrganization({
        'x-device-id': params['x-device-id'],
        'x-organization-id': params['x-organization-id'],
      });
    },
    ...options,
  });
}

export function useOnInToDashboard(
  options?: UseMutationOptions<DTO.EnterOrganizationResponseSchema, Error, { 
      'x-device-id': string; 'x-organization-id': string; body: { organizationId: string } }>
) {
  return useMutation({
    mutationFn: (params) => api.OnInToDashboard(params),
    ...options,
  });
}

/**s
 * RESET PASSWORD
 */
export function useResetEmployeePassword(
  options?: UseMutationOptions<DTO.ResetEmployeePasswordResponseSchema, DTO.ErrorResponseSchema, DTO.ResetEmployeePasswordRequestSchema>
) {
  return useMutation({
    mutationFn: (params) => api.ResetEmployeePassword(params),
    ...options,
  });
}

export function useResetEmployeePin(
  options?: UseMutationOptions<DTO.ResetEmployeePinResponseSchema, DTO.ErrorResponseSchema, {
    'x-device-id': string; 
    'x-store-id': string; 
    'x-organization-id': string; 
    body: {
      id_employee: number;
    }
  }>
) {
  return useMutation({
    mutationFn: (params) => api.ResetEmployeePin(params),
    ...options,
  });
}
