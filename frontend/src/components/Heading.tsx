import React from 'react';

interface HeadingProps {
  heading: string;
  subheading?: string;
  center: boolean;
}

const Heading: React.FC<HeadingProps> = ({ heading, subheading, center }) => {
  return (
    <div
      className={`flex flex-col justify-center ${
        center && 'items-center'
      } space-y-2 mb-6`}
    >
      <h2 className="font-bold text-xl sm:text-2xl">{heading}</h2>
      <h3 className="font-semibold text-lg sm:text-xl">{subheading}</h3>
    </div>
  );
};

export default Heading;
