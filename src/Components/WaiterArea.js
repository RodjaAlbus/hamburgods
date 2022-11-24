import React from "react";
import "./WaiterArea.css";
import doorway from "../img/doorway.svg";
import drinks from "../img/drinks.svg";

//Dentro de doorway que se cuenten las alertas.

export function WaiterArea() {
  return (
    <div className="waiterArea">
      <div className="waiter"></div>
      <div className="tables">
        <div className="table"></div>
        <div className="table"></div>
        <div className="table"></div>
        <div className="table"></div>
        <div className="table"></div>
        <div className="table"></div>
        <div className="table"></div>
        <div className="table"></div>
        <div className="table"></div>
      </div>
      <div className="hallway">
        <div className="hallButtons">
          <img className="hallImages" src={doorway}></img>
        </div>
        <div className="hallButtons">
          <img className="hallImages" src={drinks}></img>
        </div>
      </div>
    </div>
  );
}
