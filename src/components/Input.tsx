import React, { useEffect, useRef, useState } from "react";

function Input(props: any) {
  const inputSearch = useRef<HTMLInputElement>(null);
  const [cities, setCities] = useState<string[]>([
    "procure por São Paulo",
    "procure por Vitória",
    "procure por Nova York",
    "procure por Sidney",
    "procure por Londres",
    "procure por Paris",
    "procure por Cingapura",
    "procure por Dallas",
    "procure por Las Vegas",
    "procure por Lisboa",
    "procure por Pequim",
    "procure por Moscou",
    "procure por Barcelona",
    "procure por Rio de Janeiro",
    "procure por Curitiba",
    "procure por Fortaleza",
    "procure por Belo Horizonte",
  ]);

  function changePlaceholder() {
    let inputToChangePlaceholder = inputSearch.current;

    function getRandomCityIndex(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      let final = Math.floor(Math.random() * (max - min)) + min;
      return final;
    }
    setInterval(() => {
      if (inputToChangePlaceholder !== null) {
        inputToChangePlaceholder.placeholder =
          cities[getRandomCityIndex(0, cities.length)];
      }
    }, 5000);
  }

  useEffect(() => {
    changePlaceholder();
  }, []);

  return (
    <input
      ref={inputSearch}
      type="text"
      value={props.location}
      onChange={props.OC}
      onKeyPress={props.OKP}
      placeholder="procure por Vitória"
    />
  );
}

export default Input;
