import React from "react";

function Description(props: any) {
  return (
    <div className="description">
      <p>{props.weather ? props.weather.description : ""}</p>
    </div>
  );
}

export default Description;
