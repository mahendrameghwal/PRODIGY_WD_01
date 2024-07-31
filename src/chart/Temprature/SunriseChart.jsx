import {  useState, useEffect } from 'react';
import "../css/SunriseChart.css"

const SunriseChart = ({Sunsetrise}) => {
  const [astroData, SetastroData] = useState([])
useEffect(() => {
  const {astro}=Sunsetrise[0];
  SetastroData(astro)
}, [Sunsetrise])






  return (
    <div className="relative w-full max-w-md mx-auto mt-8 mb-12">
    <div className="sun-arc relative h-48 overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-b from-sky-600 to-orange-600/90 rounded-t-full"></div>
      <div className="sun absolute w-16 h-16 bg-yellow-300 rounded-full shadow-lg shadow-yellow-200"></div>
    </div>
    
    <div className="info-container absolute bottom-0 w-full flex justify-between px-4">
      <div className="sunrise text-center">
        <i className="fas fa-sun text-yellow-400 text-2xl mb-2"></i>
        <p className="font-semibold text-gray-800">Sunrise</p>
        <p className="text-sm font-medium text-gray-200/90 ">{astroData.sunrise}</p>
      </div>
      <div className="sunset text-center">
        <i className="fas fa-moon text-indigo-400 text-2xl mb-2"></i>
        <p className="font-semibold text-gray-800">Sunset</p>
        <p className="text-sm font-medium text-gray-200/90 ">{astroData.sunset}</p>
      </div>
    </div>
  </div>
  
 
  )
}

export default SunriseChart