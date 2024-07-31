/* eslint-disable react/prop-types */

import TempratureData from "../chart/Temprature/TempratureData";
import WIndChart from "../chart/Temprature/WIndChart";
import {SiTailwindcss} from "react-icons/si";
import {TiWeatherSunny} from "react-icons/ti";
import Table from "./Table";
import SunriseChart from "../chart/Temprature/SunriseChart";
import PressureChart from "../chart/Temprature/PressureChart";
import PalaceInfo from "./PalaceInfo";
import { GiPerpendicularRings } from "react-icons/gi";
import {WiSunrise} from "react-icons/wi"
import SeachContainer from "./SeachContainer";

const Content = ({Weatherdata}) => {




  return (
  Weatherdata &&

  <div>
  <div className="p-4 max-md:p-1 sm:ml-64">
    <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
     <SeachContainer/>
<PalaceInfo/>
      
      <div className="flex gap-x-5  max-lg:flex-col">
      {/*left*/}
     <div className="w-full  ">
     <div className="w-full">
     <div className="rounded-md shadow-md max-lg:w-full my-3 max-md:my-2 max-md:px-5 dark:text-white p-2  dark:bg-slate-900">
     <div className="flex gap-x-2 my-2"><p className="flex items-center gap-x-2">Temprature <TiWeatherSunny/></p></div>
     <TempratureData Temprature={Weatherdata?.data?.forecast?.forecastday[0]?.hour}/>

     </div>
   
     </div>
     <div className="w-full">
     <div className="rounded-md shadow-md max-lg:w-full my-3 px-8 max-md:my-2 max-md:px-5 dark:text-white p-2 dark:bg-slate-900">
     <div className="flex gap-x-2 my-2"><p className="flex items-center gap-x-2">Wind speed <SiTailwindcss/></p></div>
  
     <WIndChart Temprature={Weatherdata?.data?.forecast?.forecastday[0]?.hour} />

     </div>
   
     </div>



     <div className="w-full gap-2 my-4">
     <Table forecastDayData={Weatherdata?.data?.forecast?.forecastday}/>

   
     </div>
     
     </div>
         {/*right*/}
     <div className="block w-1/2 mt-4 max-lg:w-full">
   
     <div className="w-full mb-2 shadow-md  dark:text-white p-1  dark:bg-slate-900">
     <div className="flex gap-x-2 my-3 items-center ">
     
     <span>Sunrise & Sunset </span><WiSunrise size={20}/> 
     </div>
     
     <SunriseChart Sunsetrise={Weatherdata?.data?.forecast?.forecastday}/>
     </div>
     <div className="w-full mb-4 shadow-md  dark:text-white p-1  dark:bg-slate-900">
     <div className="flex gap-x-2 my-2">
     
     <span>Pressure </span><GiPerpendicularRings size={20}/> 
     
     </div>
     <PressureChart pressureData={Weatherdata?.data}/>
     </div>
     
     </div>
      </div>

      
      
    </div>

  
  </div>

  

</div>
  );
};

export default Content;
