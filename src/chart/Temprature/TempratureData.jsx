import  { useEffect, useState } from "react";
import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip, Legend, ResponsiveContainer } from "recharts";
import useWindowWidth from "../../hooks/Window";
import useTimeFormatter from '../../hooks/UseTimeFormatter';


const TempratureData = ({Temprature}) => {
  const formatTimeEpoch = useTimeFormatter();

      const windowWidth = useWindowWidth(); 
    const [formattedData, setFormattedData] = useState([]);



 

    useEffect(() => {
        const formatted = Temprature?.map((item) => ({
          time_epoch: item.time_epoch, // Keep the original time_epoch
          time_formatted: formatTimeEpoch(item.time_epoch), // Add formatted time
          temp_c: item.temp_c
        }));
        setFormattedData(formatted);
      
      }, [Temprature ,windowWidth]);


      
  return (
    <ResponsiveContainer width="100%" height={210} >
    <LineChart  data={formattedData}    >
    <CartesianGrid strokeDasharray="2 2" />
    <XAxis stroke="#97969e"
      dataKey="time_epoch"
      tickFormatter={(time_epoch) => formatTimeEpoch(time_epoch)}
    />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="natural" dataKey="temp_c" name="Temperature (°C)"  stroke="#4f48db"
    />
  </LineChart>
  </ResponsiveContainer>
  )
}

export default TempratureData