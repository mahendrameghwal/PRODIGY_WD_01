import { createContext, useContext, useState , useEffect } from "react";

const SearchContext = createContext();

export const UseSuggestionValue = () => {
  return useContext(SearchContext);
};

// eslint-disable-next-line react/prop-types
export const SeachProvider = ({ children }) => {
  const [SuggestionVlaue, setSuggestionVlaue] = useState("");

  
  
  const setSuggest = (value) => {
    setSuggestionVlaue(value);
  };
  useEffect(() => {
    
  }, [SuggestionVlaue])
  

  const contextValue = {
    SuggestionVlaue,
    setSuggest,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
};
