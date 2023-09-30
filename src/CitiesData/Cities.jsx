












import { useContext } from 'react';
import CityContext from '../context/CityContext';

function ExampleComponent() {


    const Cities = [
        "Mumbai",
        "Delhi",
        "Bangalore",
        "Kolkata",
        "Chennai",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Surat",
        "Kanpur",
        "Nagpur",
        "Indore",
        "Thane",
        "Bhopal",
        "Visakhapatnam",
        "Patna",
        "Vadodara",
      ];


  const { selectedCity, updateSelectedCity } = useContext(CityContext);
  const handleCityClick = (city) => {
   
    updateSelectedCity(city);
  };

  return (
    <div className='flex gap-x-2'>
      {Cities.map((city, i) => (
        <p
          key={i}
          className={`bg-slate-200 mt-4 hover:bg-slate-300 cursor-pointer px-2 py-0.5 ${
            city === selectedCity ? 'selected-city' : ''
          }`}
          onClick={() => handleCityClick(city)}
        >
          {city}
        </p>
      ))}
    </div>
  );
}

export default ExampleComponent;
