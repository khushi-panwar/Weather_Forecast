import  {  useState , useCallback, useMemo} from 'react'
import { fetchCurrentWeatherAPI, fetchForecast } from '../utils/api';

export const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [dailyForecast, setDailyForecast] = useState([]);
    const [hourlyForecast, setHourlyForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const searchCity = useCallback(async(city) => {
    console.log("entered search city "+ city);

        try {
            console.log("entered try catch in search city ");
            setLoading(true);
            setError("");

            const current = await fetchCurrentWeatherAPI(city);
            console.log("hello");
            
            const forecastData = await fetchForecast(city);

            const hourly = forecastData.list.slice(0,8); // 24hours (8 slots)
            // 5 day forecast (12 PM only)
            const daily = forecastData.list.filter(item => 
                item.dt_txt.includes("12:00:00")
            );

            

            setWeather(current);
            setHourlyForecast(hourly);
            setDailyForecast(daily);
            console.log("gaya data " +daily);
            

        } catch (error) {
            console.log("forecast data error ");
            setError(error.message || "Something went wrong in fetching")
            setWeather(null);
            setDailyForecast([]);
            setHourlyForecast([])
        }finally {
            setLoading(false);
        }
    }, []);

  return {weather, dailyForecast, hourlyForecast, loading, error, searchCity};
}
