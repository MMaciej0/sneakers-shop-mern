import React, { useCallback, useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Button from '../Button';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  onSubmit: () => void;
  actionLabel: string;
  disabled?: boolean;
  secondaryActionLabel?: string;
  secondaryAction?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  body,
  footer,
  onClose,
  onSubmit,
  actionLabel,
  disabled,
  secondaryActionLabel,
  secondaryAction,
}) => {
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setModalVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  }, [disabled, secondaryAction]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;
    onSubmit();
  }, [onSubmit, disabled]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-primary/90 flex justify-center items-center overflow-x-hidden overflow-y-auto z-50">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 h-full md:h-auto mx-auto md:my-6">
        <div
          className={`h-full transition duration-300 ${
            modalVisible ? 'opacity-100' : 'opacity-0'
          } ${modalVisible ? 'translate-y-0' : 'translate-y-full'}`}
        >
          <div className="bg-primaryBg dark:bg-primary dark:border md:rounded-lg h-full">
            {/* Modal heading and close btn */}
            <div className="py-4 flex items-center justify-center border-b">
              <button
                onClick={handleClose}
                className="absolute left-4 hover:text-highlight transition"
              >
                <MdClose size={25} />
              </button>
              <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
            </div>
            {/* modal body */}
            <div className="w-full px-4 py-6">{body}</div>
            <div className="w-full px-4 py-6 flex flex-col space-y-4">
              {secondaryAction && secondaryActionLabel && (
                <Button
                  outline
                  onClick={handleSecondaryAction}
                  label={secondaryActionLabel}
                  disabled={disabled}
                />
              )}
              <Button
                onClick={handleSubmit}
                label={actionLabel}
                disabled={disabled}
              />
            </div>
            <div className="w-full px-4 py-6 flex flex-col space-y-4 border-t">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
