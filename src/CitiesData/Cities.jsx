












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
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
    "Phoenix",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "Fort Worth",
    "Columbus",
    "Charlotte",
    "San Francisco",
    "Indianapolis",
    "Seattle",
    "Denver",
    "Washington",
    "Boston",
    "El Paso",
    "Detroit",
    "Nashville",
    "Memphis",
    "Portland",
    "Oklahoma City",
    "Las Vegas",
    "Louisville",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Kansas City",
    "Long Beach",
    "Mesa",
    "Atlanta",
    "Colorado Springs",
    "Raleigh",
    "Omaha",
    "Miami",
    "Oakland",
    "Minneapolis",
    "Tampa",
    "Tulsa",
    "Wichita",
    "New Orleans",
    "Auckland",
    "Sydney",
    "Melbourne",
    "Brisbane",
    "Perth",
    "Adelaide",
    "Wellington",
    "Christchurch",
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
    "Edmonton",
    "Quebec City",
    "Winnipeg",
    "Hamilton",
    "Dubai",
    "Abu Dhabi",
    "Doha",
    "Singapore",
    "Hong Kong",
    "Tokyo",
    "Osaka",
    "Seoul",
    "Beijing",
    "Shanghai",
    "Guangzhou",
    "Shenzhen",
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
    "Vadodara"
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
        className={`bg-slate-200 mt-4 text-xs whitespace-nowrap font-medium hover:bg-slate-300 cursor-pointer px-2 py-0.5 ${
          city === selectedCity ? 'selected-city' : ''
        }`}
        onClick={() => handleCityClick(city)}
      >
        {" "} {city} {" "}
      </p>
      
      ))}
    </div>
  );
}

export default ExampleComponent;
