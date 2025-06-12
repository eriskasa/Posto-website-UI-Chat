import React from "react";

interface ToggleButtonProps {
  icon: string;
  toggledIcon: string;
  label: string;
  isToggled: boolean;
  onToggle: () => void;
  alternateIcon?: string; // Optional prop for an alternative icon
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ icon, toggledIcon, label, isToggled, onToggle, alternateIcon }) => {
  return (
    <button
      className="flex pt-[10px] pb-[10px] pl-[12px] pr-[12px] items-center justify-between gap-2 rounded-[6px] hover:bg-[#333333] cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center gap-4 ">
        <img
          src={isToggled ? toggledIcon : icon}
          alt={label}
          className="w-[24px] h-[24px]"
          draggable={false}

          />
          <span 
            className={`text-center font-medium ${isToggled ? 'text-[#B388FF]' : 'text-[#808080]'}`}
          >
            {label}
          </span>
        </div>
        <div>
            <img 
              src={isToggled ? (alternateIcon || "../assets/addenable.svg") : (alternateIcon || "../assets/add.svg")} 
              alt="Toggle Icon" 
              className="right-0 w-[24px] h-[24px] focus:border-none focus:outline-none"
              draggable={false}

            />
        </div>
    </button>
  );
};

export default ToggleButton;