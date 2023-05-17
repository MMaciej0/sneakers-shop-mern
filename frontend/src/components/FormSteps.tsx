import React from 'react';

type FormStepsProps = {
  activeSteps: number;
  stepsLabels: string[];
};

const FormSteps: React.FC<FormStepsProps> = ({ activeSteps, stepsLabels }) => {
  return (
    <div className="w-full flex justify-between items-center hover:cursor-not-allowed">
      {stepsLabels.map((label, i) => (
        <div
          key={i}
          className="flex flex-col justify-center items-center w-full"
        >
          <p className="w-full text-center pb-2 text-sm font-semibold">
            {label}
          </p>
          <div
            className={`${
              activeSteps >= i + 1 ? 'bg-highlight' : 'bg-primary/50'
            } w-full h-2 border-x-[1px]`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default FormSteps;
