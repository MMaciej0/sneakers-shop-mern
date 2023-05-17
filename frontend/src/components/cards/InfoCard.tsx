import React, { ReactNode } from 'react';
import Button from '../Button';

type InfoCardProps = {
  heading: string;
  children: ReactNode;
  onClick?: () => void;
  label?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  heading,
  children,
  onClick,
  label,
}) => {
  return (
    <div className="relative p-4 mb-4 rounded border w-full shadow-md">
      {onClick && label && (
        <button
          className="absolute right-4 top-4 text-sm font-semibold border px-1 rounded shadow-sm text-highlight"
          onClick={onClick}
        >
          {label}
        </button>
      )}
      <h3 className="text-sm font-semibold tracking-wide mb-2">{heading}</h3>
      <div>{children}</div>
    </div>
  );
};

export default InfoCard;
