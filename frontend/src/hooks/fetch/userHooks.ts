import { useMutation } from '@tanstack/react-query';
import apiClient from '../../apiClient';
import { ShippingAddress, UserInfo } from '../../types/UserInfo';

export const useLoginUser = () =>
  useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) =>
      (
        await apiClient.post<UserInfo>('api/users/login', {
          email,
          password,
        })
      ).data,
  });

export const useRegisterUser = () =>
  useMutation({
    mutationFn: async ({
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    }) =>
      (
        await apiClient.post<UserInfo>('api/users/register', {
          name,
          email,
          password,
        })
      ).data,
  });

export const useUserUpdate = () =>
  useMutation({
    mutationFn: async ({ name, email }: { name: string; email: string }) =>
      (await apiClient.post<UserInfo>('api/users/update', { name, email }))
        .data,
  });

export const useUpdateUserShippingAddress = () =>
  useMutation({
    mutationFn: async (shippingAddress: ShippingAddress) =>
      (
        await apiClient.post<ShippingAddress>(
          'api/users/updateShippingAddress',
          shippingAddress
        )
      ).data,
  });
