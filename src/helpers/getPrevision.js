export const getPrevision = async (city) => {
  const url = `api.openweathermap.org/data/2.5/forecast?q=${city}, spain&appid=xxxxxxxxxxxxxxxxxxxxxxxxx&cnt=18`;
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
