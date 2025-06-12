import React, {useEffect} from 'react';
import Button from './Button'; // Adjust the import path as necessary
import Modal from './Modal';
import ToggleButton from './ToggleButton';

const SearchSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>('');
  const [isToggles, setIsToggled] = React.useState<boolean>(() => {
    const savedToggleState = localStorage.getItem('isToggles');
    return savedToggleState ? JSON.parse(savedToggleState) : false;
  });
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [buttonToggles, setButtonToggles] = React.useState<{ [key: string]: boolean }>({});
  const [modalSearchTerm, setModalSearchTerm] = React.useState<string>('');
  const [ selectedButtons, setSelectedButtons ] = React.useState<
  { key: string, label: string, toggledIcon: string }[]>([]);

  const buttonList = [
  { key: 'car', label: 'Car', icon: '../assets/gis_car.svg', toggledIcon: '../assets/gis_caron.svg' },
  { key: 'house', label: 'House', icon: '../assets/housedis.svg', toggledIcon: '../assets/houseen.svg' },
  { key: 'mobile', label: 'Mobile', icon: '../assets/mobof.svg', toggledIcon: '../assets/mobon.svg' },
  { key: 'work', label: 'Work', icon: '../assets/workoff.svg', toggledIcon: '../assets/worken.svg' },
  { key: 'other', label: 'Other', icon: '../assets/otheroff.svg', toggledIcon: '../assets/otheron.svg' },
];

const filteredModalButtons = buttonList.filter((button) =>
  button.label.toLowerCase().includes(modalSearchTerm.toLowerCase())
);
  // Save the toggle state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('isToggles', JSON.stringify(isToggles));
  }, [isToggles]);
  


  const handleSearch = () => {
    console.log("Searching for:", searchTerm)
    setSearchTerm('');
  };

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  }

  const handleAddButtonClick = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  }

  const handleButtonToggle = (buttonKey: string) => {
    setButtonToggles((prev) => ({
      ...prev,
      [buttonKey]: !prev[buttonKey]
    }));

    const button = buttonList.find((btn) => btn.key === buttonKey);
    if (!button) return;

    setSelectedButtons((prev) => {
      if (prev.some((btn) => btn.key === buttonKey)) {
        return prev.filter((btn) => btn.key !== buttonKey);
      } else {
        return [...prev, { key: button.key, label: button.label, toggledIcon: button.toggledIcon}];
      };
    })
  };

  
  return (
    <section className="flex justify-center p-8 select-none">
        {/* search div */}
      <div className="relative items-center justify-between border pt-[16px] pl-[24px] pr-[24px] pb-[8px] rounded-[12px] bg-[#3A3A3A] border-[#B388FF] w-full md:w-[80vw] lg:w-[962px]">
      <input 
        type="text" 
        placeholder="Kerko" 
        value={searchTerm} 
        className="w-full pt-[10px] pl-[8px] pr-[8px] pb-[10px] text-[#E3E3E] bg-transparent border-none focus:outline-none focus:border-transparent"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
        {/* div for search bottom toggle icons */}
      <div className='relative flex flex-s justify-between mt-[10px]'>
        <div className="flex-shrink-0 flex  gap-[10px] items-center w-full">
          <Button 
            onClick={handleAddButtonClick}
            variant='add'
            className="flex items-center select-none flex-shrink-0"
            >
            <img 
              src="../assets/addbutton.svg"
              alt="Add Button"
              className="ahover:opacity-0 select-none" 
               draggable={false}
              />
            <img 
              src="../assets/addbuttonhover.svg" 
              alt="Add Button Hover" 
              className="absolute opacity-0 hover:opacity-100 select-none"
              draggable={false}
              />
          </Button>
          <Button
            onClick={() => {console.log('toggle button clicked')
              handleToggle()}
            }
            variant='toggle'
            isToggled={isToggles} // Replace with actual toggle state
            className={`flex-shrink-0 flex items-center pt-[8px] pb-[8px] pl-[10px] lg:pl-[20px] pr-[10px] lg:pr-[20px] text-[#E3E3E] bg-[#333333] rounded-[12px] border-[1px] select-none ${isToggles ? "border-[#B388FF] text-[#B388FF]" : 'border-[#333333]'}`}
            >
            <span className='hidden sm:block  pr-[6px]'>
              Kerkim i thelle
            </span>
            <img 
              src={`${isToggles 
                ? "../assets/searchbutton.svg" 
                : "../assets/searchdissable.svg"
              }`} 
              alt="Toggle Button" 
              className="hidden sm:block w-[22px] h-[22px] select-none" 
              />
              <img 
                src={isToggles
                  ? "../assets/searchbutton.svg"
                  : "../assets/searchdissable.svg"
                } 
                alt="Mobile Toggle Button"
                className="block sm:hidden w-[22px] h-[22px] select-none"
                draggable={false} 
                />

          </Button>
           {/* search bar selected toggle buttons */}
           <div className="flex flex-grow items-center gap-[10px] overflow-hidden overflow-x-auto whitespace-nowrap mr-[10px] rounded-[12px] bg-transparent scrollbar-transparent">
          { selectedButtons.map((button) => (
            <Button
            onClick={() => handleButtonToggle(button.key)}
            key={button.key}
            className='flex-shrink-0 flex items-center pt-[8px] pb-[8px] pl-[10px] lg:pl-[20px] pr-[10px] lg:pr-[20px] text-[#E3E3E] bg-[#333333] rounded-[12px] border-[1px] border-[#B388FF] select-none cursor-pointer'
            >
                <img 
                  src={button.toggledIcon} 
                  alt={button.label} 
                  draggable={false}
                  className='select-none'
                  />
                <span className='hidden sm:block ml-[8px] text-[#B388FF] text-[14px] font-medium'>
                  {button.label}
                </span>
            </Button>
          ))}
          </div>
          <button 
            type='button'
            title='enterbutton'
            onClick={handleSearch}
            className="flex-shrink-0 select-none ml-auto"
            >
              <img src={searchTerm ? "../assets/enterbutton_enable.svg" : "../assets/enterbutton_disable.svg"}
                    draggable={false}
                    className="select-none"
                    onContextMenu={(e) => e.preventDefault()}
              />
            </button>
        </div>
        </div>
     </div>


     <Modal isOpen={isModalOpen} onClose={handleCloseModal}  >
        <div className="justify-between">
          <div className='flex flex-col gap-4 h-[340px] '>
            
            {filteredModalButtons.length > 0 ? (
              filteredModalButtons.map((button) => (
                <ToggleButton
                key={button.key}
                icon={button.icon}
                toggledIcon={button.toggledIcon}
                label={button.label}
                isToggled={buttonToggles[button.key]}
                onToggle={() => handleButtonToggle(button.key)}
                />
              ))
            ) : (
              <div className="flex items-center justify-center h-full text-[#E3E3E3]">
              There is no items
            </div>
          )}
          </div>
            {/* <div className="border-t border-[#6A5989]"></div> */}
          <div className="relaive bottom-0 flex items-center justify-end">
          <input 
            type="text" 
            placeholder="Search..." 
            value={modalSearchTerm}
            onChange={(e) => setModalSearchTerm(e.target.value)}
            className=" w-full pt-[8px] pl-[8px] pr-[8px] text-[#E3E3E]  border-none focus:outline-none focus:border-transparent"
            />
            <img 
              src="../assets/searchdissable.svg" 
              alt="search"
              draggable={false}
              className="w-[22px] h-[22px] cursor-pointer peer-focus:hidden "
              />
            </div>
        </div>
      </Modal>
    </section>
  );
};

export default SearchSection;