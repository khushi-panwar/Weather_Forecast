import React from 'react'

const DailyForecastCard = ({ dailyForecast, loading }) => {
    if (loading) return <div>Loading...</div>;
    if (!dailyForecast) return <div>Data not found</div>;

    return (
        <div className=' p-3 rounded-2xl bg-white/10 backdrop-blur-xl  border border-white/20 shadow-lg text-white md:h-70 h-70'>
            <p className=' border-b border-b-gray-300 '>5-Days Forecast</p>
            <div className=' w-full  flex flex-col gap-1 overflow-y-auto hide-scrollbar flex-nowrap py-2'>
                {
                    dailyForecast.map(item =>
                        <div key={item.dt} className='flex w-full justify-between my-1'>
                            <p>{item.dt_txt.split(" ")[0].slice(5)}</p>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='icon' className="w-8 h-8"></img>
                            <p>{Math.round(item.main.temp)}°C</p>
                            <p>{item.weather[0].main}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DailyForecastCard
