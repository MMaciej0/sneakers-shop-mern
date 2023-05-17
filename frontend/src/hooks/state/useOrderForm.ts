import { useState, ReactElement } from 'react';

const useOrderForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const next = () => {
    if (currentStepIndex === steps.length - 1) return;
    setCurrentStepIndex((index) => index + 1);
  };

  const back = () => {
    if (currentStepIndex <= 0) return;
    setCurrentStepIndex((index) => index - 1);
  };

  const goTo = (index: number) => {
    setCurrentStepIndex(index);
  };

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    steps,
    goTo,
    next,
    back,
  };
};

export default useOrderForm;
