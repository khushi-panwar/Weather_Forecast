import React from 'react'

export const CurrentWeatherCard = ({ weather }) => {
    if (!weather) return null;

    // conversion of time
    const utcTime = weather.dt * 1000;
    const localTime = new Date(utcTime + weather.timezone * 1000);

    const time = localTime.toUTCString().slice(17, 22);
    return (
        <div className='text-white'>
            {/* Temperature + Icon */}
            <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-8xl  font-semibold">
                    {Math.round(weather.main.temp)}°
                </h1>

                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt=""
                    className="w-14 h-14"
                />
            </div>

            {/* Location */}
            <h2 className="text-5xl md:text-6xl font-medium mt-2">
                {weather.name}
            </h2>

            {/* Time + High Low */}
            <p className="text-sm md:text-xl text-white/80 mt-1">
                {time} | H:{Math.round(weather.main.temp_max)}°
                &nbsp; L:{Math.round(weather.main.temp_min)}°
            </p>
        </div>
    )
}
