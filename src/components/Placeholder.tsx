import React from "react";

function Placeholder(props: any) {
  return (
    <div className="container">
      <div className="top">
        <p>{props.feedback}</p>
      </div>
    </div>
  );
}

export default Placeholder;
