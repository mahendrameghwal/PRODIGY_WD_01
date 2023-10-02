
import  { useState } from 'react';
import CityContext from './CityContext';

const CityProvider = ({ children }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const updateSelectedCity = (city) => {
    setSelectedCity(city);
  };

  return (
    <CityContext.Provider value={{ selectedCity, updateSelectedCity }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityProvider;
