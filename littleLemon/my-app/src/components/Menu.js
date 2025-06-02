import React from "react";
import MenuCard from "./MenuCard";

export default function Menu() {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Menu</h1>
      <div className="menu-cards">
        <MenuCard />
      </div>
    </div>
  );
}
