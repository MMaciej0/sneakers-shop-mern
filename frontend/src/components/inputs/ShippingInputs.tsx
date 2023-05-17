import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import FormWrapper from '../FormWrapper';
import FormInput from './FormInput';

type ShippingInputsProps = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

const ShippingInputs: React.FC<ShippingInputsProps> = ({
  register,
  errors,
}) => {
  return (
    <FormWrapper label="Shipping Address">
      <FormInput
        required
        label="Full Name"
        id="fullName"
        register={register}
        errors={errors}
        pattern={new RegExp('^[A-Z][a-zA-Z]{3,}(?: [A-Z][a-zA-Z]*){0,2}$')}
      />
      <FormInput
        required
        label="Address"
        id="address"
        register={register}
        errors={errors}
      />
      <FormInput
        required
        label="City"
        id="city"
        register={register}
        errors={errors}
        pattern={new RegExp('^[a-zA-Z]+(?:[s-][a-zA-Z]+)*$')}
      />
      <FormInput
        required
        label="Country"
        id="country"
        register={register}
        errors={errors}
      />
      <FormInput
        required
        label="Postal Code"
        id="postalCode"
        register={register}
        errors={errors}
      />
    </FormWrapper>
  );
};

export default ShippingInputs;
