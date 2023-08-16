export const getWeatherCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=xxxxxxxxxxxxxxxxxxxx`;
  const resp = await fetch(url);

  const data = await resp.json();

  const citiesWeather = {
    id: data.id,
    name: data.name,
    temp: data.main.temp,
    wind: data.wind.speed,
  };

  // console.log(citiesWeather);
  return citiesWeather;
};
