import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import FormWrapper from '../FormWrapper';
import RadioInput from './RadioInput';

type PaymentMethodsInputsProps = {
  register: UseFormRegister<FieldValues>;
};

const PaymentMethodsInputs: React.FC<PaymentMethodsInputsProps> = ({
  register,
}) => {
  return (
    <FormWrapper label="Select Payment Method">
      <RadioInput
        label="Paypal"
        id="paypal"
        name="paymentMethod"
        register={register}
      />
      <RadioInput
        label="Stripe"
        id="stripe"
        name="paymentMethod"
        register={register}
      />
      <RadioInput
        label="Credit Card"
        id="creditCard"
        name="paymentMethod"
        register={register}
      />
    </FormWrapper>
  );
};

export default PaymentMethodsInputs;
