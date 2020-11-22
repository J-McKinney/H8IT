import React from "react";
// import Style from "./style.module.css";

export function SwearButton(props) {
  return (
    <span
      {...props}
      style={{ float: "center", marginBottom: 10 }}
      className="swear-button"
      role="button"
      tabIndex="0"
    >
      🤬
    </span>
  );
}

export function VentButton(props) {
  return (
    <span
      {...props}
      style={{ float: "center", marginBottom: 10 }}
      className="vent-button"
      role="button"
      tabIndex="0"
    >
      😤
    </span>
  );
}

export function TearButton(props) {
  return (
    <span
      {...props}
      style={{ float: "center", marginBottom: 10 }}
      className="tear-button"
      role="button"
      tabIndex="0"
    >
      😢
    </span>
  );
}
