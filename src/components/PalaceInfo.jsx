import { useState , useEffect , useContext } from "react";
import { useWeather } from "../context/WeatherContextt";


const PalaceInfo = () => {
  const { weatherData } = useWeather();
  const [info,setInfo]= useState(null);


  useEffect(() => {
    
    const {location,current} = weatherData.data;
    setInfo([location,current])
  
    
  }, [weatherData])

  return (
 
   
    info ?<div className="flex justify-between items-center max-md:flex-col  border my-8 px-2 max-md:px-0 dark:bg-gray-800  !bg-gray-100">
    <p className="text-base font-semibold max-md:w-full  border-gray-200 max-md:border-2 text-gray-400 dark:text-gray-500">
    Location : {info[0].name} ({info?.[0].region})
    </p>
    <p className="text-base font-semibold max-md:justify-between flex items-center max-md:w-full py-0.5 border-gray-200 max-md:border-2 text-gray-400 dark:text-gray-500">
    Cloud : {info[1].condition.text}<img className="h-8 shadow-inner" src={info?.[1].condition.icon}  />
    </p>
    <p className="text-base max-md:w-full py-0.5 border-gray-200 max-md:border-2 font-semibold text-gray-400 dark:text-gray-500">
   {info?.[0].localtime}
    </p>
  </div> : <div className="dark:text-white text-gray-300 text-center py-7">loading data....</div>
   
  )
}

export default PalaceInfo