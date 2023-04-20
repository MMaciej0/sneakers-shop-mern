import { IconType } from 'react-icons/lib';

interface ButtonProps {
  label: string;
  onClick: () => void;
  outline?: boolean;
  icon?: IconType;
}

const Button = ({ label, onClick, outline, icon: Icon }: ButtonProps) => {
  return (
    <button
      className={`w-full py-2 ${
        outline
          ? 'bg-transparent border-[2px] border-highlight'
          : 'bg-highlight/50'
      } rounded-md text-lg font-semibold tracking-wide hover:text-black hover:bg-highlight transition duration-700`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
