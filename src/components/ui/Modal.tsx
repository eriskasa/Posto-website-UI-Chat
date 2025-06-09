import React, { useEffect, useRef } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;
  
  return (
    <div
    className="absolute top-116  lg:top-30 xl:top-30 sm:top-30 right-0 sm:right-40  md:right- lg:right-126 xl:right-126 inset-0 flex items-center justify-center"
    >
      <div
        className="bg-[#3A3A3A] rounded-lg shadow-lg w-[413px] p-4 border-[1px] border-[#B388FF] w-full sm:w-[413px] lg:w-[413px] xl:w-[413px] max-h-[80vh] overflow-y-auto"
        ref={modalRef} // Prevent closing when clicking inside modal content
      >
        <div className="flex justify-between pl-[8px] pr-[8px] pt-[8px] pb-[18px] border-b border-[#6A5989]">    
          <span 
            style={{ fontFamily: 'Quando, serif' }}
            className='text-[16px] font-regular text-[#E3E3E3]'>
            Zgjidhni kategorine 
          </span>
          <button
            onClick={onClose}
            className="text-gray-500 bg-[#444444] p-2 rounded-full border-[1px] border-[#444444] hover:border-[#B388FF]"
            >
            <img src="../assets/cancel.svg" alt="Modal Cancel" />
          </button>
          </div>
          <div className="pt-[10px] pb-[10px]">
            {children}
          </div>
      </div>
    </div>
  )
}

export default Modal;