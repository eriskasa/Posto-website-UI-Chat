import React from "react";
import HeroSection from "../components/ui/HeroSection";
import SearchSection from "../components/ui/SearchSection";
import SearchResultDisplay from "../components/ui/SearchResultDisplay";

const Home: React.FC = () => {
  const [searchResult, setSearchResult] = React.useState<string>("");
  const [aiResponse, setAiResponse] = React.useState<string>("");
  console.log("Rendering Home component aiResponse:", aiResponse);

  return (
    <div className="relative min-h-screen bg-[#232323] overflow-hidden select-none"> 
      {/* Top-right blur ellipse */}
      <div 
        className="absolute w-[491px] h-[491px] top-[-250px] right-[-250px] rounded-full z-[1]"
        style={{
          background: 'rgba(179qq, 136, 255, 0.16)',
          filter: 'blur(164px)'
        }}
      ></div>
      
      {/* Bottom-left blur ellipse */}
      <div 
        className="absolute w-[491px] h-[491px] bottom-[-250px] left-[-250px] rounded-full z-[1]"
        style={{
          background: 'rgba(179, 136, 255, 0.16)',
          filter: 'blur(164px)'
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10">
        {searchResult ? (
        <SearchResultDisplay
          searchResult={searchResult}
          aiResponse={aiResponse}
          clearSearch={() => {
            setSearchResult("")
            setAiResponse("");
          }
          }
        />
      ) : (
        <HeroSection />
      )}
        <SearchSection  onSearch={(term) => setSearchResult(term)} onAiResponse={(response) => setAiResponse(response)}/>
      </div>
    </div>
  );
};

export default Home;