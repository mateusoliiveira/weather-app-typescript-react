import React from "react";
import "../index.css";

function Container(props: any) {
  return <div className="container">{props.children}</div>;
}

export default Container;
