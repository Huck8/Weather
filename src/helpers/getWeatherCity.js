export const getWeatherCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65c413e631909f1323872c0cc5f376cf`;
  const resp = await fetch(url);
  //const { id, name, main, wind } = await resp.json();
  const data = await resp.json();

  // const citiesWeather = Object.keys(data).map((key) => ({
  //   id: data.id,
  //   name: data.name,
  //   temp: data.main.temp,
  //   wind: data.wind.speed,
  // }));

  const citiesWeather = {
    id: data.id,
    name: data.name,
    temp: data.main.temp,
    wind: data.wind.speed,
  };

  // console.log(citiesWeather);
  return citiesWeather;
};
