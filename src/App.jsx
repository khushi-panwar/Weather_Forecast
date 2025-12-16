import React, { useState } from 'react'
import { useWeather } from './hooks/useWeather';
// component import
import SearchBar from './Components/SearchBar';
import HourlyForecastCard from './Components/HourlyForecastCard';
// icon import
import { CgProfile } from "react-icons/cg";
import { CurrentWeatherCard } from './Components/CurrentWeatherCard';
import DailyForecastCard from './Components/DailyForecastCard';


const App = () => {
  const [city, setCity] = useState("");
  const { weather, dailyForecast, hourlyForecast, loading, error, searchCity } = useWeather();

  const handleSearch = () => {
    console.log("In handleSearch : " + city);
    if (!city.trim()) {
      alert("Entered City name is Empty!");
    }
    searchCity(city);
  }


  return (
    <div className='  w-full h-screen bg-cover md:bg-cover lg:bg-cover  bg-center bg-[url(https://images.unsplash.com/photo-1534950090086-c6c8e3fafb36?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>

      <nav className='text-xl h-[12vh] p-5  border-b-gray-400 flex items-center justify-between text-white'>
        <span>Weather</span>
        <div className='flex items-center justify-between space-x-1.5 md:space-x-5'>
          <SearchBar
            city={city}
            setCity={setCity}
            handleSearch={handleSearch}
          />
          <span><CgProfile /></span>
        </div>
      </nav>

      <section className=' p-8 md:flex h-[calc(100vh-5rem)] space-y-2 '>
      {/* left */}
        <div className='md:w-1/2  flex items-end'>
          <CurrentWeatherCard
          weather={weather}
          />
        </div>

        <div className='md:w-1/2 rounded-2xl space-y-2'>
          <HourlyForecastCard
          hourlyForecast={hourlyForecast}
          loading={loading}
          error={error} />
          <DailyForecastCard
            dailyForecast={dailyForecast}
          />
       </div>
      </section>
    </div>
  )
}

export default App;