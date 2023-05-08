import { useMutation } from '@tanstack/react-query';
import apiClient from '../apiClient';
import { UserInfo } from '../types/UserInfo';

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
