import { IconType } from 'react-icons/lib';

interface ButtonProps {
  label: string;
  onClick: () => void;
  outline?: boolean;
  icon?: IconType;
  small?: boolean;
  active?: boolean;
  disabled?: boolean;
}

const Button = ({
  label,
  onClick,
  outline,
  icon: Icon,
  small,
  active,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`relative w-full ${
        disabled && 'cursor-not-allowed opacity-30 hover:bg-inherit'
      } ${active && 'bg-highlight text-black'}
      ${outline && 'border-[2px] border-highlight'}
      ${!outline && !active && 'bg-highlight/50'}
        ${
          small ? 'max-w-[4rem] py-2' : 'max-w-full py-3'
        }  rounded-md text-lg font-semibold tracking-wide hover:text-black hover:bg-highlight transition duration-500`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={25} className="absolute left-6 top-3" />}
      {label}
    </button>
  );
};

export default Button;
