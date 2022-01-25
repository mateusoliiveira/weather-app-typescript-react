import React from "react";

function Temperature(props: any) {
  function formatTemp(data: number) {
    return Number((data - 273.15).toFixed(1));
  }

  return (
    <>
      <div className="temp">
        <h1>{formatTemp(props.main?.temp)}ºC</h1>
        <h3>ou {formatTemp(props.main?.feels_like)}ºC de sensação</h3>
      </div>
      <div>
        {formatTemp(props.main?.temp) > 25 ? (
          <h5>um belo dia para ir à praia, use protetor</h5>
        ) : (
          <h5>um dia fresco e/ou frio</h5>
        )}
      </div>
    </>
  );
}

export default Temperature;
