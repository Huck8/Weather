export const getPrevision = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},spain&appid=65c413e631909f1323872c0cc5f376cf&cnt=18`;
  const resp = await fetch(url);
  const { list } = await resp.json();

  const citiesPrevision = list.map((itemList) => ({
    temp: itemList.main.temp,
    wind: itemList.wind.speed,
    hour: itemList.dt_txt,
    humidity: itemList.main.humidity,
  }));

  console.log(citiesPrevision);

  return citiesPrevision;
};
