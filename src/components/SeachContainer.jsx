import { useEffect, useState, useRef  } from "react";
import Cities from "../CitiesData/Cities";
import axios from "axios";
import { UseSuggestionValue } from "../context/SearchContext";
import SECRET from "../SECRET";


const SeachContainer = () => {
  const { SuggestionVlaue, setSuggest } = UseSuggestionValue();
    const [inputValue, setInputValue] = useState("");
    const [apiData, setApiData] = useState(null);
    const [Error, setError] = useState(null);
    const [suggestionUsed, setSuggestionUsed] = useState(false);
    
    const timeoutIdRef = useRef(null);

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };


    const handleSuggestionClick = (cityName) => {
    
      setSuggest(cityName);
      setSuggestionUsed(true);
      setInputValue(cityName); 
    
    };
  
 

    const handleBodyClick = (e) => {
      // Check if the click was inside the suggestion container or not
      if (!e.target.classList.contains("suggestion-item")) {
        setSuggest(""); // Clear the suggestion
        setSuggestionUsed(false);
      }
    };
  
    useEffect(() => {
     
    
        // Remove the event listener when the component unmounts
        document.body.removeEventListener("click", handleBodyClick);
    
    }, []);







    
      useEffect(() => {
       if (timeoutIdRef.current) {
           clearTimeout(timeoutIdRef.current);
        
       }
       
       timeoutIdRef.current = setTimeout(() => {
           const apiUrl = `${SECRET?.BASE_URL}search.json?key=${SECRET?.API_KEY}&q=$${inputValue}`;
           axios.get(apiUrl)
             .then((response) => {
               setApiData(response.data);
              
             })
             .catch((error) => {
               
               setError(error.message)
      
             });
        }, 500);
      }, [inputValue]);


  return (
    <div className="flex flex-col flex-wrap relative ">
    <input
      type="text" value={inputValue}
      onChange={handleInputChange}
      placeholder="search here city name "
      className="bg-gray-100 border border-gray-500 outline-none  max-md:w-full w-11/12 px-3 py-2"
    />
    <div className=" py-2 flex gap-x-2 max-md:w-full w-11/12 overflow-x-auto scroll-smooth">
      <Cities/>
       <div className="z-auto mt-2 max-md:w-full w-11/12 bg-gray-200  border  absolute">
      {
        
        apiData ? apiData.map((cities)=>(
       
         <p key={cities.id}  onClick={() =>
            handleSuggestionClick(cities.name)
            } className="suggestion-item py-2  px-2 font-semibold cursor-pointer hover:bg-gray-300">{cities.name} </p>)):
                
           <p>{Error}</p>
      }
       </div>
     



      </div>
      
  </div>
  )
}

export default SeachContainer
