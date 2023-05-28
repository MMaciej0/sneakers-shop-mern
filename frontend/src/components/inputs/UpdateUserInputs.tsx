import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import FormWrapper from '../FormWrapper';
import FormInput from './FormInput';

type UpdateUserInputsProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const UpdateUserInputs: React.FC<UpdateUserInputsProps> = ({
  register,
  errors,
}) => {
  return (
    <FormWrapper label="Update Profile">
      <FormInput
        required
        label="Name"
        id="name"
        register={register}
        errors={errors}
      />
      <FormInput
        required
        label="Email"
        id="email"
        register={register}
        errors={errors}
      />
    </FormWrapper>
  );
};

export default UpdateUserInputs;
