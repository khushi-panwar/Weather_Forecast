const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY; //Vite uses .env files + import.meta.env

export const fetchCurrentWeatherAPI = async (city) => {
  //fetch url
  try {
    const res = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("City not found");
  }
}

export const fetchForecast = async (city) => {
  try {    
    const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  const forecastData = await res.json();

  return forecastData;
  } catch (error) {
    throw new Error("Forecast not available");
  }
};