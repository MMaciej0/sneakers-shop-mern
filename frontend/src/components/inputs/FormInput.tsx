import React from 'react';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  required: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type,
  disabled,
  required,
  register,
  errors,
}) => {
  return (
    <div className="w-full relative dark:text-primary">
      <input
        disabled={disabled}
        className={`peer w-full font-medium border-[2px] bg-primary/10 dark:bg-primaryBg p-4 pt-6 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${
          errors[id] ? 'border-rose-500' : 'border-transparent'
        }`}
        id={id}
        type={type ?? 'text'}
        placeholder=" "
        {...register(id, { required: required })}
      />
      <label
        className={`cursor-pointer absolute text-md duration-150 transform top-4 left-4 z-10 origin-[0] scale-75 -translate-y-4 text-highlight tracking-wide font-medium peer-blank:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 peer-focus:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-primary/80`}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
