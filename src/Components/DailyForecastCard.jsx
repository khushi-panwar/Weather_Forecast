import React from 'react'

const DailyForecastCard = ({ dailyForecast }) => {
    if (!dailyForecast) return null;
    console.log(dailyForecast);

    return (
        <div className=' p-3 rounded-2xl bg-white/10 backdrop-blur-xl  border border-white/20 shadow-lg text-white md:h-70 h-70'>
            <p className=' border-b border-b-gray-300 '>5-Days Forecast</p>
            <div className=' w-full  flex flex-col gap-1 overflow-y-auto hide-scrollbar flex-nowrap py-2'>
                {
                    dailyForecast.map(item =>
                        <div id={item.dt} className='flex w-full justify-between my-1'>
                            <p>{item.dt_txt.split(" ")[1].slice(0, 5)}</p>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='icon' className="w-8 h-8"></img>
                            <p>{Math.round(item.main.temp - 273.15)}°C</p>
                            <p>{item.weather[0].main}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DailyForecastCard
