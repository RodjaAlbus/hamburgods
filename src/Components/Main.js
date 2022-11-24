import "./style.css";
import menuImage from "../img/menu.svg";
import staffImage from "../img/face.svg";

export function Header() {
  return (
    <header style={{ height: "85px" }}>
      <div className="greyBox"></div>
      <div className="arrowLeft" style={{ left: "24%" }}></div>
      <div
        className="arrowLeft"
        style={{ left: "27%", backgroundColor: "#FFC700" }}
      ></div>
      <div
        className="arrowLeft"
        style={{ left: "30%", backgroundColor: "black" }}
      ></div>
      <div
        className="arrowLeft"
        style={{ left: "33%", backgroundColor: "#FFC700" }}
      ></div>
      <h1>HAMBURGODS</h1>
      <div className="arrowRight" style={{ right: "24%" }}></div>
      <div
        className="arrowRight"
        style={{ right: "27%", backgroundColor: "#FFC700" }}
      ></div>
      <div
        className="arrowRight"
        style={{ right: "30%", backgroundColor: "black" }}
      ></div>
      <div
        className="arrowRight"
        style={{ right: "33%", backgroundColor: "#FFC700" }}
      ></div>
      <div className="greyBox"></div>
    </header>
  );
}

export function Footer(props) {
  return (
    <div>
      <footer></footer>
      <div className="controlPanel">
        <div className="CPButtons">
          <div className="CPButton">
            <img className="icons" src={menuImage}></img>
          </div>
          <div className="CPButton">
            <img className="icons" src={staffImage}></img>
          </div>
        </div>
        <div className="CPMoney">
          <h2>{props.money}</h2>
        </div>
        <div className="CPRaiting"></div>
      </div>
    </div>
  );
}
