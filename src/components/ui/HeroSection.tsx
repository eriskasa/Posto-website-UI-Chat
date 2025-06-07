import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center text-center p-8 pt-[219px] lg:pt-[173px]">
      <h1 style={{ fontFamily: 'Quando, serif' }} className="text-[32px] md:text-[40px] lg:text-[48px] font-normal mb-[32px]">
        POSTO
      </h1>
      <img 
        src="/assets/Postologo.svg" 
        alt="Posto logo" 
        className="w-[185px] h-[116px] mx-auto" />
      <h2 
        style={{ fontFamily: 'Quando, serif' }} 
        className="text-[24px] lg:text-[32px] font-bold mt-[64px]"
      >
        Postoni dhe kerkoni, cdo nevoje qe deshironi!!
      </h2>
      <p
      style={{ fontFamily: 'Quando, serif' }} 
      className="text-[12px] lg:text-[16px] font-regular text-[#808080] mt-[24px]">Ekspolori, ruani dhe njoftohuni per te ghitha pronat e postuara online ne Shqiperei mew fuqi r post</p>
    </section>
  );
};

export default HeroSection;