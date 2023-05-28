import React from 'react';
import useUserStore from '../hooks/state/useUserStore';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormInput from './inputs/FormInput';
import ShippingInputs from './inputs/ShippingInputs';
import UpdateUserInputs from './inputs/UpdateUserInputs';
import Button from './Button';
import { useUserUpdate } from '../hooks/fetch/userHooks';
import { toast } from 'react-toastify';
import UpdateUserProfileForm from './Forms/updateUserProfileForm';

const ProfileForm: React.FC = () => {
  const { user, updateUser } = useUserStore();
  const { mutateAsync: UpdateUserDB, isLoading } = useUserUpdate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>({
    defaultValues: {
      name: user?.name ?? '',
      email: user?.email ?? '',
    },
  });

  const handlerUserUpdate: SubmitHandler<FieldValues> = (data) => {
    try {
      UpdateUserDB({ name: data.name, email: data.email });
      updateUser({ name: data.name, email: data.email });
      toast('Your profile has been updated.');
    } catch (error) {
      toast('Something went wrong');
    }
  };

  return (
    <>
      <UpdateUserProfileForm />
      <form className="max-w-2xl mx-auto">
        <ShippingInputs errors={errors} register={register} />
        <Button label="Update" type="submit" />
      </form>
    </>
  );
};

export default ProfileForm;
