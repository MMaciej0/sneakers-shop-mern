import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface RadioInputProps {
  id: string;
  label: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({
  id,
  label,
  name,
  register,
}) => {
  return (
    <div className="">
      <input
        className="mr-4 cursor-pointer"
        type="radio"
        value={label}
        id={id}
        {...register(name)}
        required
      />
      <label className="font-medium" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
