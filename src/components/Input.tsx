import React from "react";

function Input(props: any) {
  return (
    <input
      type="text"
      value={props.location}
      onChange={props.OC}
      onKeyPress={props.OKP}
      placeholder="Search"
    />
  );
}

export default Input;
