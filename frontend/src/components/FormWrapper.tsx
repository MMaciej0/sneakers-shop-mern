import React, { ReactNode } from 'react';
import Heading from './Heading';

type FormWrapperProps = {
  label: string;
  children: ReactNode;
};

const FormWrapper: React.FC<FormWrapperProps> = ({ label, children }) => {
  return (
    <div className="w-full max-w-2xl flex flex-col justify-center space-y-4 my-16 mx-auto">
      <Heading heading={label} center />
      {children}
    </div>
  );
};

export default FormWrapper;
