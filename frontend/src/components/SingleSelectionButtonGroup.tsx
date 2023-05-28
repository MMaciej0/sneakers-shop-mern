import React from 'react';
import Button from './Button';

interface ButtonGroupProps {
  selectedButton: string;
  selectedButtonChange: (label: string) => void;
  buttonsLabels: string[];
}

const SingleSelectionButtonGroup: React.FC<ButtonGroupProps> = ({
  selectedButton,
  selectedButtonChange,
  buttonsLabels,
}) => {
  return (
    <>
      {buttonsLabels.map((label, i) => (
        <Button
          key={i}
          label={label}
          active={selectedButton === label}
          onClick={() => selectedButtonChange(label)}
        />
      ))}
    </>
  );
};

export default SingleSelectionButtonGroup;
