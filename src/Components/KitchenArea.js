import "./KitchenArea.css";
import dishes from "../img/dishes.svg";
import buns from "../img/shelves.svg";
import fridge from "../img/fridge.svg";
import cooking from "../img/cooking.svg";
import cuttingBoard from "../img/swords.svg";
import fryer from "../img/fryer.svg";
import washDishes from "../img/countertops.svg";
import bin from "../img/bin.svg";

export function KitchenArea() {
  return (
    <div className="kitchenArea">
      <div className="orderZone"></div>
      <div className="kitchen">
        <div className="rawMaterials">
          <div className="storing">
            <img className="images" src={dishes}></img>
          </div>
          <div className="storing">
            <img className="images" src={buns}></img>
          </div>
          <div className="storing">
            <img className="images" src={fridge}></img>
          </div>
        </div>
        <div className="workingArea">
          <div className="workStation">
            <img className="images" src={cooking}></img>
          </div>
          <div className="workStation">
            <img className="images" src={cuttingBoard}></img>
          </div>
          <div className="workStation">
            <img className="images" src={fryer}></img>
          </div>
        </div>
        <div className="washingArea">
          <div className="washing">
            <img className="images" src={washDishes}></img>
          </div>
          <div className="storing">
            <img className="images" src={bin}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
