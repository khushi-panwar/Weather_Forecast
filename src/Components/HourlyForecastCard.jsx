import React from 'react'

const HourlyForecastCard = ({ hourlyForecast, loading, error }) => {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!hourlyForecast) return <div>Data not found</div>;

  return (
    <div className='h-40 md:20 p-2 rounded-2xl bg-white/10 backdrop-blur-xl  border border-white/20 shadow-lg text-white '>
      <p className=' border-b border-b-gray-300 '>Hourly Forecast</p>

      <div className=' w-full  flex gap-1 overflow-x-auto hide-scrollbar flex-nowrap py-2'>
        {hourlyForecast.map((item) =>
          <div key={item.dt} className=' min-w-18 flex flex-col items-center text-center  '>
            <p>{item.dt_txt.split(" ")[1].slice(0, 5)}</p>
            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='icon' className="w-8 h-8"></img>
            <p>{Math.round(item.main.temp - 273.15)}°C</p>
            <p>{item.weather[0].main}</p>
          </div>
        )}
      </div>

    </div>
  )
}

export default HourlyForecastCard
