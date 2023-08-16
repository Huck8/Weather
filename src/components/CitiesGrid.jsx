import { useEffect, useState } from 'react';
import { getWeatherCity } from '../helpers/getWeatherCity';
import { getPrevision } from '../helpers/getPrevision';

export const CitiesGrid = ({ city }) => {
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [citiesPrevision, setCitiesPrevision] = useState([]);

  //const citiesTemps = [1, 2, 3, 4, 5];
  const cityData = async () => {
    const newCity = await getWeatherCity(city);
    setCitiesWeather(newCity);
  };

  const onCityPrevision = async () => {
    const newCityPrevision = await getPrevision(city); // Pasa el nombre de la ciudad como parámetro
    setCitiesPrevision(newCityPrevision);
    return setCitiesPrevision;
  };

  useEffect(() => {
    cityData();
  }, []);

  const kelvinToCelsius = (temp) => {
    if (typeof temp === 'number' && !isNaN(temp)) {
      let celWithoutDecimals = Math.round(temp - 273.15);

      return celWithoutDecimals;
    }
  };

  return (
    <section className="card">
      <h3>{city}</h3>
      <div className="degrees">
        <span>{kelvinToCelsius(citiesWeather.temp)}</span>
        <span>Cº</span>
      </div>
      <p className="fs-5">
        {citiesWeather.wind}
        <span className="fs-5">m/s</span>
      </p>

      <button onClick={onCityPrevision} className="btn  btn-warning">
        + info
      </button>

      {citiesPrevision.map((prevision, index) => (
        <div className="everyPrevision" key={index}>
          <h4>{prevision.hour}</h4>

          <h5
            className={`orange ${
              kelvinToCelsius(prevision.temp) > 30 ? 'red' : ''
            }`}
          >
            Temperature: {kelvinToCelsius(prevision.temp)}°C
          </h5>
          <h6>Wind: {prevision.wind} m/s</h6>
          <h6>Humidity: {prevision.humidity}</h6>
        </div>
      ))}
    </section>
  );
};
