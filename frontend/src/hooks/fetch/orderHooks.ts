import { useMutation, useQuery } from '@tanstack/react-query';
import { Order } from '../../types/Order';
import apiClient from '../../apiClient';

export const useCreateOrder = () =>
  useMutation({
    mutationFn: async (order: Partial<Order>) => {
      (await apiClient.post('/api/orders', order)).data;
    },
  });
