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
    <table className="w-full border-collapse rounded-lg overflow-hidden shadow-lg dark:text-white dark:bg-slate-800 bg-white">
    <thead className="bg-[#3432b8] text-white">
      <tr>
        <th className="p-3 text-left">Next days</th>
        <th className="p-3 text-center">Average temp.</th>
        <th className="p-3 text-center">Temperature</th>
        <th className="p-3 text-left">Condition</th>
      </tr>
    </thead>
    <tbody>
      {forecastDayData?.map((item, i) => {
        const { date, day } = item;
        return (
          <tr key={i} className="border-b dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition duration-150 ease-in-out">
            <td className="p-3 font-medium">{formatDate(date)}</td>
            <td className="p-3 text-center font-bold">{day.avgtemp_c}°C</td>
            <td className="p-3">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-blue-500">{day.mintemp_c}°C</span>
                <span className="text-xs">to</span>
                <span className="text-red-500">{day.maxtemp_c}°C</span>
                <img 
                  className="h-8 w-8 object-contain ml-2" 
                  src={day.condition.icon} 
                  alt={day?.condition.text}
                />
              </div>
            </td>
            <td className="p-3">{day?.condition.text}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}

export default Table