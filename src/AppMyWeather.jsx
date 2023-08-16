import { useState } from 'react';
import { AddCity } from './components/AddCity';
import { CitiesGrid } from './components/CitiesGrid';

export const AppMyWeather = () => {
  const [cities, setCities] = useState(['Málaga']);

  const onAddCity = (newCity) => {
    // setCities((cities) => ['Palencia', ...cities]); Otra forma de poder hacerlo
    if (cities.includes(newCity)) return;
    console.log(newCity);
    setCities([newCity, ...cities]);
  };

  return (
    <main>
      <div className="SearchHeader">
        <h1> My WeatherApp</h1>

        <AddCity
          onNewCity={(event) => onAddCity(event)} // emite el nuevo valor a insertar. Lo que se esta haciendo es pasando como prop una función definida en el componente padre que sera ejecutada en el componente hijo. Como le estoy pasando una función por eso se ejecuta dentro de la función del componente hijo asi onNewCity().  este prop lo que pasando es una función que recibe un value y ejecuta onAddCategory recibiendo como parametro dicho value.

          // El value proviene cuando ejecutes onNewCity dentro de tu componente.

          // Basicamente es lo mismo si definimos una constante previamente como una arrow function y pasamos esta función como la prop al componente.
        />
      </div>

      {/* {Input} */}
      {/* Aquí estoy enviando la función setCities como valor */}

      {/* {Listado de Items (Cities)} */}

      {cities.map((city) => (
        <CitiesGrid key={city} city={city} />
      ))}

      {/* {City Item} */}
    </main>
  );
};
