import { useWeather } from "../../context/WeatherContextt"
import TempratureData from "./TempratureData";


const TempratureChart = () => {
    const { weatherData } = useWeather();
   
  return (
    <TempratureData Temprature={weatherData?.data?.forecast.forecastday[0].hour}/>
  )
}

export default TempratureChart