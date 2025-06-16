import React, { useEffect, useRef } from "react";

interface SearchResultDisplayProps {
  clearSearch: () => void;
  loading?: boolean;
  chatHistory: { input: string; response?: string | null; loading: boolean }[];
}

const SearchResultDisplay: React.FC<SearchResultDisplayProps> = ({ clearSearch, chatHistory }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="flex justify-center items-center flex-grow w-full h-full">
      <div className="flex flex-col border p-2 rounded-[12px] bg-[#3A3A3A] border-[#262626] w-[85vw] md:w-[80vw] lg:w-[962px] mt-[32px] h-[600px] ">
        <div className="flex justify-end pb-[8px] border-b border-[#444444]">
          <button
            type="button"
            onClick={clearSearch}
            className="bg-[#444444] text-white rounded-[12px] pt-[4px] pb-[4px] pl-[24px] pr-[24px] hover:bg-[#6A5989] trendition-transform transition-colors duration-300 m-2"
          >
            Clear
          </button>
        </div>
        <div
          ref={containerRef}
          className="flex flex-col items-end justify-start w-full h-full"
          style={{
            overflowY: "auto", // Enable vertical scrolling
            maxHeight: "100%", // Set a fixed maximum height
            overflowWrap: "break-word", // Ensure long words break properly
            scrollbarWidth: "none", // Use a thin scrollbar
            scrollBehavior: "smooth", // Smooth scrolling
          }}
        >
          <div
            className="flex flex-col items-end justify-start w-full h-full"
            style={{ overflowWrap: "break-word" }}
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className="flex flex-col items-end justify-start p-4 w-full"
                style={{ overflowWrap: "break-word" }}
              >
                <p
                  className="bg-[#6A5989] text-white p-2 rounded-[12px] inline-block m-2 w"
                  style={{ whiteSpace: "normal", wordBreak: "break-word" }}
                >
                  {chat.input}
                </p>
                {chat.loading ? (
                  <p className="flex w-full text-gray-400 p-4 justify-start">Loading...</p>
                ) : (
                  chat.response && (
                    <div className="rounded-[12px] mt-4 w-full">
                      <p className="text-white rounded-lg">
                        {chat.response}
                      </p>
                    </div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultDisplay;