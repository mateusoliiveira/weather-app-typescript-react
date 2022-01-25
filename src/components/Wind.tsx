import React from "react";

function Wind(props: any) {
  return (
    <div className="wind">
      <p>{props.wind?.speed} km/h</p>
      <p>vel. do vento</p>
    </div>
  );
}

export default Wind;
