
import { useEffect, useState } from "react";
import {AreaChart,XAxis,YAxis,CartesianGrid, Tooltip,Area,ResponsiveContainer,Line, Legend, Bar, ComposedChart} from "recharts"
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
    <ResponsiveContainer width="100%" height={300}>
    <ComposedChart
      data={pressure_mb}
    
    >
      <defs>
        <linearGradient id="colorPressureMb" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0.2}/>
        </linearGradient>
        <linearGradient id="colorPressureIn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.2}/>
        </linearGradient>
      </defs>
      <XAxis 
        dataKey="time_epoch"
        tickFormatter={(time_epoch) => formatTimeEpoch(time_epoch)}
        stroke="#666"
        tick={{ fontSize: 12 }}
      />
      <YAxis 
        yAxisId="left" 
        stroke="#8884d8"
        tick={{ fontSize: 12 }}
        label={{ value: 'Pressure (mb)', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle' } }}
      />
      <YAxis 
        yAxisId="right" 
        orientation="right" 
        stroke="#82ca9d"
        tick={{ fontSize: 12 }}
        label={{ value: 'Pressure (in)', angle: 90, position: 'insideRight', style: { textAnchor: 'middle' } }}
      />
      <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
      <Tooltip 
        contentStyle={{ backgroundColor: '#fff', border: '1px solid #ccc', borderRadius: '5px' }}
        labelFormatter={(value) => `Time: ${formatTimeEpoch(value)}`}
      />
      <Legend wrapperStyle={{ paddingTop: 10 }} />
      <Line 
        yAxisId="left"
        type="monotone"
        dataKey="pressure_mb"
        name="Pressure (Millibars)"
        stroke="#8884d8"
        strokeWidth={2}
        dot={false}
      />
      <Bar 
        yAxisId="right"
        dataKey="pressure_in"
        name="Pressure (Inches of Mercury)"
        fill="url(#colorPressureIn)"
        barSize={20}
      />
    </ComposedChart>
  </ResponsiveContainer>
   )
}

export default PressureChart