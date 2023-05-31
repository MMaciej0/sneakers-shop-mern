import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import useCartStore from '../hooks/state/useCartStore';
import FormSteps from '../components/FormSteps';
import Button from '../components/Button';
import ShippingInputs from '../components/inputs/ShippingInputs';
import PaymentMethodsInputs from '../components/inputs/PaymentMethodsInputs';
import OrderPreview from '../components/OrderPreview';
import useMultistepForm from '../hooks/state/useOrderForm';
import { useCreateOrder } from '../hooks/fetch/orderHooks';
import { getError } from '../utils';
import { ApiError } from '../types/ApiError';
import useUserStore from '../hooks/state/useUserStore';

const PlaceOrderPage = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
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
      paymentMethod: '',
    },
  });

  const {
    updateShippingAddress,
    cartItems,
    shippingAddress,
    paymentMethod: cartPaymentMethod,
    itemsPrice,
    shippingPrice,
    taxPrice,
    totalPrice,
    clearCart,
    updatePaymentMethod,
  } = useCartStore();

  const { mutateAsync: createOrder, isLoading } = useCreateOrder();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const { fullName, address, city, country, postalCode, paymentMethod } =
      data;
    if (isFirstStep) {
      updateShippingAddress({
        fullName,
        address,
        city,
        country,
        postalCode,
      });
      next();
    } else if (currentStepIndex === 1) {
      updatePaymentMethod(paymentMethod);
      next();
    } else if (isLastStep) {
      try {
        createOrder({
          orderItems: cartItems,
          shippingAdress: shippingAddress,
          paymentMethod: cartPaymentMethod,
          itemsPrice: itemsPrice,
          shippingPrice: shippingPrice,
          taxPrice: taxPrice,
          totalPrice: totalPrice,
        });
        clearCart();
        navigate('/');
      } catch (error) {
        toast.error(getError(error as ApiError));
      }
    }
  };

  const changeStep = (index: number) => {
    goTo(index);
  };

  const { currentStepIndex, isFirstStep, isLastStep, step, back, next, goTo } =
    useMultistepForm([
      <ShippingInputs register={register} errors={errors} />,
      <PaymentMethodsInputs register={register} />,
      <OrderPreview changeStep={changeStep} />,
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
          {!isFirstStep && (
            <Button label="Back" onClick={back} disabled={isLoading} />
          )}
          {!isLastStep && (
            <Button type="submit" label="Continue" disabled={isLoading} />
          )}
        </div>
      </form>
    </div>
  );
};

export default PlaceOrderPage;
