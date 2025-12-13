import  {  useState , useCallback} from 'react'
import { fetchCurrentWeatherAPI, fetchForecast } from '../utils/api';

export const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const searchCity = useCallback(async(city) => {
console.log("entered search city "+ city);

        try {
            console.log("entered try catch in search city ");
            setLoading(true);
            setError("");

            const current = await fetchCurrentWeatherAPI(city);
            const forecastData = await fetchForecast(city);

            setWeather(current);
            setForecast(forecastData.list.slice(0,5));
            console.log("gaya data ");
            

        } catch (error) {
            setError(error.message)
            setWeather(null);
            setForecast([]);
        }finally {
            setLoading(false);
        }
    }, []);

  return {weather, forecast, loading, error, searchCity};
}
