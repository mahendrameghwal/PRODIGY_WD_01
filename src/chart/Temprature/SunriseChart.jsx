import { Fragment, useState, useEffect } from 'react';
import "../css/SunriseChart.css"

const SunriseChart = ({Sunsetrise}) => {
  const [astroData, SetastroData] = useState([])
useEffect(() => {
  const {astro}=Sunsetrise[0];
  SetastroData(astro)
}, [Sunsetrise])
  return (
    <Fragment>

    <div className="half-circle relative">
    <div className='flex absolute bottom-0 justify-between  w-full'>
    <p className='dark:text-white font-medium text-black'>Sunrise</p>
    <p className='dark:text-white font-medium text-black'>Sunset</p>
    </div>
    </div>
    <div className='flex justify-around  w-full'>
    <p className='dark:text-white text-black'>{astroData.sunrise}</p>
    <p className='dark:text-white text-black'>{astroData.sunset}</p>
    </div>

</Fragment>
  )
}

export default SunriseChart