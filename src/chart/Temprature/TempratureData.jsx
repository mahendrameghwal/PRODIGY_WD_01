import  { useEffect, useState } from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip, Legend, ResponsiveContainer } from "recharts";
import UseWindowWidth from "../../hooks/Window";
import UseTimeFormatter from '../../hooks/UseTimeFormatter';


const TempratureData = ({Temprature}) => {
  const formatTimeEpoch = UseTimeFormatter();

      const windowWidth = UseWindowWidth(); 
    const [formattedData, setFormattedData] = useState([]);

console.log(Temprature);

 

    useEffect(() => {
        const formatted = Temprature?.map((item) => ({
          time_epoch: item.time_epoch, // original time_epoch
          time_formatted: formatTimeEpoch(item.time_epoch), //  formatted time
          temp_c: item.temp_c
        }));
        setFormattedData(formatted);
      
      }, [Temprature ,formatTimeEpoch,windowWidth]);


      
  return (
    <ResponsiveContainer width="100%" height={210} >
    <LineChart  data={formattedData}    >
    <CartesianGrid strokeDasharray="2 2" />
    <XAxis 

    stroke="#888"
    tick={{ fontSize: 12 }}
      dataKey="time_epoch"
      tickFormatter={(time_epoch) => formatTimeEpoch(time_epoch)}
    />
    <YAxis  stroke="#888"
    tick={{ fontSize: 12 }}
    tickFormatter={(value) => `${value}°C`} />
    <Tooltip />
    <Legend />
    <Line type="natural" dataKey="temp_c" name="Temperature (°C)"  stroke="#4f48db"
    />
  </LineChart>
  </ResponsiveContainer>
  )
}

export default TempratureData