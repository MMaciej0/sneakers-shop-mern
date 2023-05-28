import React from 'react';
import UpdateUserInputs from '../inputs/UpdateUserInputs';
import Button from '../Button';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useUserStore from '../../hooks/state/useUserStore';
import { useUserUpdate } from '../../hooks/fetch/userHooks';
import { toast } from 'react-toastify';

const UpdateUserProfileForm: React.FC = () => {
  const { user, updateUser } = useUserStore();
  const { mutateAsync: UpdateUserDB, isLoading } = useUserUpdate();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
    <form
      onSubmit={handleSubmit(handlerUserUpdate)}
      className="max-w-2xl mx-auto"
    >
      <UpdateUserInputs errors={errors} register={register} />
      <div className="flex space-x-6">
        <Button label="Update" type="submit" disabled={isLoading} />
        <Button label="Change Password" type="button" />
      </div>
    </form>
  );
};

export default UpdateUserProfileForm;
