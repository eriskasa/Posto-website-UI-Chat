import React, { useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";
import SearchSection from "../components/ui/SearchSection";
import SearchResultDisplay from "../components/ui/SearchResultDisplay";

const Home: React.FC = () => {
  const [searchResult, setSearchResult] = React.useState<string>("");
  const [aiResponse, setAiResponse] = React.useState<string>("");
  console.log("Rendering Home component aiResponse:", aiResponse);
  const [ chatHistory, setChatHistory ] = React.useState<{ input: string; response?: string | null | undefined; loading: boolean; }[]>(() => {
    // Initialize chat history from localStorage if available
    const storedHistory = localStorage.getItem("chatHistory");
    return storedHistory ? JSON.parse(storedHistory) : [];
  });

  React.useEffect(() => {
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}, [chatHistory]);

  const handleChatUpdate = (input: string, response?: string) => {
    // Add the input with loading set to true
    setChatHistory((prev) => [...prev, { input, response: null, loading: true }]);

    // Simulate response arrival
    setTimeout(() => {
      setChatHistory((prev) =>
        prev.map((chat, index) =>
          index === prev.length - 1 ? { ...chat, response, loading: false } : chat
        )
      );
    }, 2000); // Simulate delay for response
  };

  return (
    <div className="relative min-h-screen bg-[#232323] overflow-hidden "> 
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
          chatHistory={chatHistory}
          clearSearch={() => {
            setSearchResult("");
            setChatHistory([]);
            localStorage.removeItem("chatHistory");
          }
          }
        />
      ) : (
        <HeroSection />
      )}
        <SearchSection  
          onSearch={(term) => setSearchResult(term)} 
          onAiResponse={(response) => setAiResponse(response)}
          onChatUpdate={handleChatUpdate}
          />
      </div>
    </div>
  );
};

export default Home;