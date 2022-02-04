import React, { useState } from "react";
import { BsBookmarkCheck, BsFillBookmarkCheckFill } from "react-icons/bs";

function Place(props: any) {
  const [cityIsDefault, setCityIsDefault] = useState<string>(
    localStorage.getItem("myCitiesWeatherDEFAULT") || ""
  );

  function addCityAsDefault(name: string) {
    if (cityIsDefault !== name) {
      localStorage.setItem("myCitiesWeatherDEFAULT", name);
      setCityIsDefault(name);
      return;
    }
    localStorage.removeItem("myCitiesWeatherDEFAULT");
    setCityIsDefault("");
  }

  return (
    <div className="place">
      <p>{props.name}</p>
      <p>
        {cityIsDefault === props.name ? (
          <BsFillBookmarkCheckFill
            onClick={() => addCityAsDefault(props.name)}
          />
        ) : (
          <BsBookmarkCheck onClick={() => addCityAsDefault(props.name)} />
        )}
      </p>
    </div>
  );
}

export default Place;
