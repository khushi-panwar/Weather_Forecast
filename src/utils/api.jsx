const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY; //Vite uses .env files + import.meta.env

export const fetchCurrentWeatherAPI = async (city) => {
  console.log("BASE_URL:", BASE_URL);
  console.log("API_KEY:", API_KEY);
  console.log("CITY:", city);
  //fetch url
  try {
    const res = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);

    const data = await res.json();
    console.log("API data:", data); // proper logging
  } catch (error) {
    throw new Error("City not found");
  }
  return data;
}

export const fetchForecast = async (city) => {
  try {
    const res = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  } catch (error) {
    
    throw new Error("Forecast not available");
  }

  return res.json();
};