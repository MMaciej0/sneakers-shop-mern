import React, { FormEvent } from 'react';
import FormSteps from '../components/FormSteps';
import useMultistepForm from '../hooks/state/useOrderForm';
import Button from '../components/Button';
import ShippingInputs from '../components/inputs/ShippingInputs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import PaymentMethodsInputs from '../components/inputs/PaymentMethodsInputs';
import OrderPreview from '../components/OrderPreview';

const PlaceOrderPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FieldValues>({
    defaultValues: {
      fullName: '',
      address: '',
      city: '',
      country: '',
      postalCode: '',
      paymentMethod: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    next();
  };

  const changeStep = (index: number) => {
    goTo(index);
  };

  const { currentStepIndex, isFirstStep, isLastStep, step, back, next, goTo } =
    useMultistepForm([
      <ShippingInputs register={register} errors={errors} />,
      <PaymentMethodsInputs register={register} />,
      <OrderPreview
        shippingAddress={{
          fullName: getValues('fullName'),
          address: getValues('address'),
          city: getValues('city'),
          country: getValues('country'),
          postalCode: getValues('postalCode'),
        }}
        paymentMethod={getValues('paymentMethod')}
        changeStep={changeStep}
      />,
    ]);
  return (
    <div className="max-w-contentContainer px-4 lg:px-0 mx-auto py-10">
      <FormSteps
        activeSteps={currentStepIndex + 1}
        stepsLabels={['Shipping Address', 'PaymentMethod', 'Summary']}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>{step}</div>
        <div className="flex space-x-4 my-8 w-full lg:max-w-2xl mx-auto">
          {!isFirstStep && <Button label="Back" onClick={back} />}
          {!isLastStep && <Button type="submit" label="Continue" />}
        </div>
      </form>
    </div>
  );
};

export default PlaceOrderPage;
