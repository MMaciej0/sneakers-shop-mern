import React from 'react';
import useUserStore from '../../hooks/state/useUserStore';
import { useUpdateUserShippingAddress } from '../../hooks/fetch/userHooks';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '../Button';
import ShippingInputs from '../inputs/ShippingInputs';

const UpdateUserShippingAddressForm: React.FC = () => {
  const { user, updateShippingAddress } = useUserStore();
  const { mutateAsync: UpdateShippingAddressDB, isLoading } =
    useUpdateUserShippingAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      fullName: user!.shippingAddress?.fullName ?? '',
      address: user!.shippingAddress?.address ?? '',
      city: user!.shippingAddress?.city ?? '',
      country: user!.shippingAddress?.country ?? '',
      postalCode: user!.shippingAddress?.postalCode ?? '',
    },
  });

  const handlerUserUpdate: SubmitHandler<FieldValues> = ({
    fullName,
    address,
    city,
    country,
    postalCode,
  }) => {
    try {
      UpdateShippingAddressDB({ fullName, address, city, country, postalCode });
      updateShippingAddress({
        fullName,
        address,
        city,
        country,
        postalCode,
      });
      toast('Your shipping address has been updated.');
    } catch (error) {
      toast('Something went wrong');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handlerUserUpdate)}
      className="max-w-2xl mx-auto"
    >
      <ShippingInputs errors={errors} register={register} />
      <div className="flex space-x-6">
        <Button label="Update" type="submit" disabled={isLoading} />
      </div>
    </form>
  );
};

export default UpdateUserShippingAddressForm;
