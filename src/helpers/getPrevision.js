export const getPrevision = async (city) => {
  const url = `API_KEY`;
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
