import React from "react";

function Description(props: any) {
  return (
    <div className="description">
      <p>{props.weather ? props.weather.main : ""}</p>
    </div>
  );
}

export default Description;
