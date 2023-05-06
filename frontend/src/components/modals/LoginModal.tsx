import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Modal from './Modal';
import useLoginModal from '../../hooks/state/useLoginModal';
import FormInput from '../inputs/FormInput';
import Heading from '../Heading';
import Button from '../Button';
import { useLoginUser } from '../../hooks/userHooks';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import { ApiError } from '../../types/ApiError';
import useUserStore from '../../hooks/state/useUserStore';

interface InputsProps {
  email: string;
  password: string;
}

const LoginModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { isOpen, onClose } = useLoginModal();
  const { mutateAsync: signin, isLoading } = useLoginUser();
  const { signUp: saveUserData } = useUserStore();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const user = await signin(data as InputsProps);
      saveUserData(user);
      onClose();
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  const loginBody = (
    <div className="flex flex-col items-center space-y-6">
      <Heading
        heading="Welcome to SNEAKERS"
        subheading="Please sign in"
        center
      />
      <FormInput
        required
        type="email"
        id="email"
        label="Email"
        register={register}
        errors={errors}
      />
      <FormInput
        required
        type="password"
        id="password"
        label="Password"
        register={register}
        errors={errors}
      />
    </div>
  );

  const loginFooter = (
    <div className="flex flex-col items-center space-y-4">
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <p className="pt-4">
        Don't have an account?{' '}
        <span className="cursor-pointer font-semibold tracking-wide hover:underline transition">
          Sign up
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign In"
      actionLabel="Continue"
      body={loginBody}
      footer={loginFooter}
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
    />
  );
};

export default LoginModal;
