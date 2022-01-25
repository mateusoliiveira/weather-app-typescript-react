import React from "react";

function Humidity(props: any) {
  return (
    <div className="humidity">
      <p>{props.main?.humidity ?? ""}%</p>
      <p>úmidade</p>
    </div>
  );
}

export default Humidity;
