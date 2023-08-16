import { useState } from 'react';

export const AddCity = ({ onNewCity }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmited = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 2) return;
    console.log(inputValue);
    // setCities((cities) => [inputValue, ...cities]);
    onNewCity(inputValue.trim());
    setInputValue('');
  };

  return (
    <>
      <h3>Add City</h3>
      <form onSubmit={(event) => onSubmited(event)}>
        <input
          type="text"
          placeholder="Introduce tu ciudad..."
          value={inputValue} // Este es el valor inicial del input que en este caso lo hemos cogido del state inicial que es Lagos
          onChange={onInputChange}
          className="mb-3"
        />
      </form>
    </>
  );
};
