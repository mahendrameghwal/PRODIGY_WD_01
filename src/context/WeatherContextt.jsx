import  { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import CityContext from "./CityContext";
import { UseSuggestionValue } from "./SearchContext";
import SECRET from "../SECRET";

// Create a context
const WeatherContext = createContext();


// Create a custom hook to use the context
export const useWeather = () => {
  
  return useContext(WeatherContext);
};




// Create a context provider component
export const WeatherProvider = ({ children }) => {
   const { SuggestionVlaue } = UseSuggestionValue();
   
  const [weatherData, setWeatherData] = useState({
    isloading: true,
    data: null,
    isError: null,
  });
  const { selectedCity, updateSelectedCity } = useContext(CityContext);


  
  useEffect(() => {
    const fetchData = async () => {


      let selectedLocation = 'jaipur';

      
      if (SuggestionVlaue) {
        selectedLocation = SuggestionVlaue;
      } else if (selectedCity) {
      
        selectedLocation = selectedCity;
      }




      let Forecast_URL = `${SECRET?.BASE_URL}forecast.json?key=${SECRET?.API_KEY}&q=${selectedLocation }&days=5&aqi=yes`;
      try {
        const response = await axios.get(Forecast_URL);
  
        setWeatherData({
          isLoading: false,
          data: response.data,
          isError: null,
        });
      } catch (error) {
        setWeatherData({
          isLoading: true,
          data: null,
          isError: error.message,
        });
  

       
      }
    };
  
    fetchData();
  }, [selectedCity, updateSelectedCity, SuggestionVlaue, UseSuggestionValue]);

  // Define the context value
  const contextValue = {
    weatherData,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};
