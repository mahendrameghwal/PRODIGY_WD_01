import  { useEffect, useState } from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip, Legend, ResponsiveContainer } from "recharts";
import UseWindowWidth from "../../hooks/Window";
import UseTimeFormatter from "../../hooks/UseTimeFormatter";
const WIndChart = ({Temprature}) => {
  const formatTimeEpoch = UseTimeFormatter();

  const windowWidth = UseWindowWidth(); 

      const [WindSpeed, setWindSpeed]= useState([])
      
    useEffect(() => {
      const Allwind = Temprature?.map((item) => ({
        time_epoch: item.time_epoch, // Keep the original time_epoch
        time_formatted: formatTimeEpoch(item.time_epoch), // Add formatted time
        wind_kph : item.wind_kph,
      }));
      setWindSpeed(Allwind);
   
      }, [Temprature ,windowWidth]);

  
      
  return (
    <ResponsiveContainer  width="100%" height={220} >
    <LineChart data={WindSpeed}  >
    <CartesianGrid strokeDasharray="2 2"/>
    <XAxis stroke="#97969e" strokeOpacity={10}
      dataKey="time_epoch"
      tickFormatter={(time_epoch) => formatTimeEpoch(time_epoch)}
    />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="natural" dataKey="wind_kph" name="wind (km/h)"  stroke="#4f48db"
    />
  </LineChart>
  </ResponsiveContainer>
  )
}

export default WIndChart