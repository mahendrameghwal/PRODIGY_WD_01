/* eslint-disable react/prop-types */


const Table = ({forecastDayData}) => {
  
    

    
    
    // format date
    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      }





  return (
    <table className="w-full border-collapse border dark:text-white dark:border-slate-100  dark:bg-slate-900 border-slate-500 table-auto">
    <thead>
      <tr>
        <th className="p-1 border border-slate-600">Next days </th>
        <th className="p-1 border border-slate-600">Average temp.</th>
        <th className="p-1 border border-slate-600">Temprature</th>
        <th className="p-1 border border-slate-600">condition</th>

      </tr>
    </thead>
    <tbody>

{
    forecastDayData?.map((item,i)=>{
        const {date,day,astro}= forecastDayData[i];
       return <tr key={i}>
        <td className="p-2 border border-slate-600">{formatDate(date)}</td>
        <td className="p-2 border text-center border-slate-600">{day.avgtemp_c} °c </td>
        <td className="p-2 flex justify-around max-md:flex-col px-2 gap-x-3  text-center  max-md:mx-auto border border-slate-600">{day.mintemp_c}°c - {day.maxtemp_c}°c <img className="h-8 max-md:items-center max-md:h-7 object-contain " src={ day.condition.icon} alt={day?.condition.text}/></td>
     
        <th className="p-1  border border-slate-600">{day?.condition.text}</th>

        </tr>



       

    })
}






    </tbody>
  </table>
  )
}

export default Table