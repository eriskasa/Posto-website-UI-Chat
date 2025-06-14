import React from "react";

interface SearchResultDisplayProps {
  searchResult: string;
  aiResponse?: string;
  clearSearch: () => void;
}

const SearchResultDisplay: React.FC<SearchResultDisplayProps> = ({ searchResult, clearSearch, aiResponse }) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex flex-col border p-6 rounded-[12px] bg-[#3A3A3A] border-[#262626] w-[85vw] md:w-[80vw] lg:w-[962px] mt-[60px] h-[600px] ">
      <div className="flex justify-end pb-[16px]">
        <button 
          type="button" 
          onClick={clearSearch}
          className="bg-[#444444] text-white rounded-[12px] pt-[6px] pb-[6px] pl-[24px] pr-[24px] hover:bg-[#6A5989] trendition-transform transition-colors duration-300"
          >
          Clear
        </button>
      </div>
        <div className="flex flex-col items-end justify-end w-full h-full  border-t border-[#444444] pt-[10px]">
          <p className="bg-[#6A5989] text-white p-2 rounded-lg inline-block">{searchResult}</p>
        </div>
        {aiResponse && (
          <div className="mt-4">
            <h3 className="text-white text-lg font-semibold mb-2">AI Response:</h3>
            <p className="bg-[#444444] text-white p-4 rounded-lg">{aiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResultDisplay;