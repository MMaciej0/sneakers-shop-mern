import { FcGoogle } from 'react-icons/fc';
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import Modal from './Modal';
import FormInput from '../inputs/FormInput';
import Heading from '../Heading';
import Button from '../Button';
import { useRegisterUser } from '../../hooks/userHooks';
import { toast } from 'react-toastify';
import { getError } from '../../utils';
import { ApiError } from '../../types/ApiError';
import useUserStore from '../../hooks/state/useUserStore';
import useRegisterModal from '../../hooks/state/useRegisterModal';
import useLoginModal from '../../hooks/state/useLoginModal';

interface InputsProps {
  name: string;
  email: string;
  password: string;
}

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });
  const { isOpen, onClose } = useRegisterModal();
  const { onOpen } = useLoginModal();
  const { mutateAsync: signup, isLoading } = useRegisterUser();
  const { signUp: saveUserData } = useUserStore();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const user = await signup(data as InputsProps);
      saveUserData(user);
      toast(`Hello ${user?.name || user?.email}.`, { autoClose: 4000 });
      onClose();
    } catch (error) {
      toast.error(getError(error as ApiError));
    }
  };

  const handleSignInButton = () => {
    onClose();
    onOpen();
  };

  const registerBody = (
    <div className="flex flex-col items-center space-y-6">
      <Heading
        heading="Welcome to SNEAKERS"
        subheading="Please sign up"
        center
      />
      <FormInput
        required
        type="text"
        id="name"
        label="Name"
        register={register}
        errors={errors}
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

  const registerFooter = (
    <div className="flex flex-col items-center space-y-4">
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <p className="pt-4">
        Already have an account?{' '}
        <span
          onClick={handleSignInButton}
          className="cursor-pointer font-semibold tracking-wide hover:underline transition"
        >
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Sign Up"
      actionLabel="Continue"
      body={registerBody}
      footer={registerFooter}
      onSubmit={handleSubmit(onSubmit)}
      disabled={isLoading}
    />
  );
};

export default RegisterModal;
