
import { useEffect, useState } from "react";
import {AreaChart,XAxis,YAxis,CartesianGrid, Tooltip,Area,ResponsiveContainer,Line} from "recharts"
import UseTimeFormatter from '../../hooks/UseTimeFormatter';
const PressureChart = ({pressureData}) => {
  const formatTimeEpoch = UseTimeFormatter();
const [ pressure_mb ,setpressure_mb]= useState(null)
const AllDay_Data = pressureData?.forecast?.forecastday[0]?.hour;

useEffect(() => {
  const PressureData = AllDay_Data?.map((data) => ({
    time_epoch: data.time_epoch, //  original time_epoch
    pressure_mb: data.pressure_mb,
    pressure_in:data.pressure_in
  }));
  setpressure_mb(PressureData);

}, [pressureData]);



   return(
    <ResponsiveContainer width="100%" height={210}>                  
  <AreaChart  data={pressure_mb}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis stroke="#97969 e"
      dataKey="time_epoch"
      tickFormatter={(time_epoch) => formatTimeEpoch(time_epoch)}
    />
  <YAxis  />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip  />
  <Area type="natural"  dataKey="pressure_mb"  name="Pressure (Millibars)" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
   <Area ttype="natural" dataKey="pressure_in" name="Pressure (Inches of Mercury)" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
   
  </AreaChart>
  </ResponsiveContainer>
   )
}

export default PressureChart