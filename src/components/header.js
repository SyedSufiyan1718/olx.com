import React from "react";
import { Images } from "./images";
import { Input } from "./input";
import { Button } from "./button";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-div">
        <div className="logo">
          <Images src={"/assets/OLX-Symbol.png"} alt={"OLX LOGO"} />
        </div>
        <div className="items">
          <Images src={"/assets/sports-car.png"} alt={"Car"} />
          <p>Motors</p>
        </div>
        <div className="items">
          <Images src={"/assets/buildings.png"} alt={"Property"} />
          <p>Property</p>
        </div>
      </div>


      <div className="input-div">
        <div className="location"> 
            <Input type={"text"} placeholder={"Pakistan"} />
        </div>
        <div className="search">
            <Input type={"text"} placeholder={"Find Cars Mobile Phone & More....."} />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="buttons">
            <Button text={"Login"} className={"login-btn"} />
            <Button text={"Sell"} className={"sell-btn"} />
        </div>
      </div>
    </header>
  )
}
