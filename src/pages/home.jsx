import { Fragment } from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import { useWeather } from "../context/WeatherContextt";
import Loader from "../components/Loader";

const Home = () => {
  const { weatherData } = useWeather();
 
  return (
    <div className="dark:bg-slate-950">
    
      {weatherData?.isloading === true ? (
        <Loader/>
      ) : (
        weatherData.isError ? 
     <div className="min-h-screen h-full text-xl dark:bg-gray-950 bg-gray-200 dark:text-white 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl  grid place-items-center">
     <p>{ weatherData.isError } </p>
     </div>
        
        :  <Fragment>
        <Sidebar  />
        <Content Weatherdata={weatherData} />
      </Fragment>
       )}
    </div>
  )
  
};

export default Home;
