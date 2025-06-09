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
  };

  
  return (
    <section className="flex justify-center p-8">
      <div className="relative border pt-[16px] pl-[24px] pr-[24px] pb-[8px] rounded-[12px] bg-[#3A3A3A] border-[#B388FF] w-full md:w-[80vw] lg:w-[962px]">
      <input 
        type="text" 
        placeholder="Kerko" 
        value={searchTerm} 
        className="w-full pt-[10px] pl-[8px] pr-[8px] pb-[10px] text-[#E3E3E] bg-transparent border-none focus:outline-none focus:border-transparent"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className='relative flex items-center justify-between mt-[8px]'>
        <div className="flex items-center gap-[10px]">
          <Button 
            onClick={handleAddButtonClick}
            variant='add'
            className="flex items-center"
            >
            <img 
              src="../assets/addbutton.svg"
              alt="Add Button"
              className="ahover:opacity-0"
              />
            <img 
              src="../assets/addbuttonhover.svg" 
              alt="Add Button Hover" 
              className="absolute opacity-0 hover:opacity-100"
              />
          </Button>
          <Button
            onClick={() => {console.log('toggle button clicked')
              handleToggle()}
            }
            variant='toggle'
            isToggled={isToggles} // Replace with actual toggle state
            className={`flex items-center pt-[8px] pb-[8px] pl-[10px] lg:pl-[20px] pr-[10px] lg:pr-[20px] text-[#E3E3E] bg-[#333333] rounded-[12px] border-[1px] ${isToggles ? "border-[#B388FF] text-[#B388FF]" : 'border-[#333333]'}`}
            >
            <span className='hidden sm:block '>
              Kerkim i thelle
            </span>
            <img 
              src={`${isToggles 
                ? "../assets/searchbutton.svg" 
                : "../assets/searchdissable.svg"
              }`} 
              alt="Toggle Button" 
              className="hidden sm:block ml-[8px]"
              />
              <img 
                src={isToggles
                  ? "../assets/searchbutton.svg"
                  : "../assets/searchdissable.svg"
                } 
                alt="Mobile Toggle Button"
                className="block sm:hidden" 
                />

          </Button>
          </div>
      <button 
        type='button'
        onClick={handleSearch}
        className=""
        >
          <img src={searchTerm ? "../assets/enterbutton_enable.svg" : "../assets/enterbutton_disable.svg"} />
        </button>
        </div>
     </div>


     <Modal isOpen={isModalOpen} onClose={handleCloseModal} >
        <div className="flex flex-col gap-4 ">
            <ToggleButton 
              icon="../assets/gis_car.svg"
              toggledIcon="../assets/gis_caron.svg"
              label="Car"
              isToggled={buttonToggles['car']}
              onToggle={() => handleButtonToggle('car')}
              />
            <ToggleButton
              icon="../assets/housedis.svg"
              toggledIcon="../assets/houseen.svg"
              label="House"
              isToggled={buttonToggles['house']}
              onToggle={() => handleButtonToggle('house')}
              />
            <ToggleButton
              icon="../assets/mobof.svg"
              toggledIcon="../assets/mobon.svg"
              label="Mobile"
              isToggled={buttonToggles['mobile']}
              onToggle={() => handleButtonToggle('mobile')}
              />
            <ToggleButton
              icon="../assets/workoff.svg"
              toggledIcon="../assets/worken.svg"
              label="Work"
              isToggled={buttonToggles['work']}
              onToggle={() => handleButtonToggle('work')}
              />
            <ToggleButton
              icon="../assets/otheroff.svg"
              toggledIcon="../assets/otheron.svg"
              label="Other"
              isToggled={buttonToggles['other']}
              onToggle={() => handleButtonToggle('other')}
              alternateIcon={`${!buttonToggles['other'] ? '../assets/Morebutton.svg' 
                : '../assets/othersEnable.svg'}`}
                />
            <div className="border-t border-[#6A5989]"></div>
          <div className="flex items-center justify-between">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pt-[8px] pl-[8px] pr-[8px] text-[#E3E3E]  border-none focus:outline-none focus:border-transparent"
            />
            <img 
              src="../assets/searchdissable.svg" 
              alt="search"
              className="w-[24px] h-[24px] cursor-pointer peer-focus:hidden"
              />
            </div>
        </div>
      </Modal>
    </section>
  );
};

export default SearchSection;