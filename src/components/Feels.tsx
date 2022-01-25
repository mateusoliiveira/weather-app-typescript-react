import React from "react";

function Feels(props: any) {
  return (
    <div className="feels">
      <p>{props.main?.pressure}</p>
      <p>pressão atm.</p>
    </div>
  );
}

export default Feels;
