import React from "react";
import MenuCard from "./MenuCard";
import pic1 from "../assets/1.jpg";
import pic2 from "../assets/2.jpg";
import pic3 from "../assets/3.jpg";
import pic4 from "../assets/4.jpg";

export default function Menu() {
  const menu = [
    {
      id: 1,
      cardImg: pic1,
      cardTitle: "Greek Salad",
      cardText:
        "Crisp lettuce, tomatoes, cucumbers, olives, feta cheese, red onion, bell pepper, olive oil, and herbs.",
    },

    {
      id: 2,
      cardImg: pic2,
      cardTitle: "Grilled Fish with Potatoes",
      cardText:
        "Fresh grilled fish served with baby potatoes and roasted cherry tomatoes, lemon, and herbs.",
    },

    {
      id: 3,
      cardImg: pic3,
      cardTitle: "Bruschetta",
      cardText:
        "Toasted bread topped with tomatoes, fresh basil, garlic, olive oil, and a hint of cheese.",
    },

    {
      id: 4,
      cardImg: pic4,
      cardTitle: "Pasta Arrabbiata",
      cardText: "Penne pasta in a spicy tomato sauce, garnished with herbs.",
    },
  ];
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Beautiful MENU</h1>
      <div className="menu-cards">
        {menu.map((item) => (
          <MenuCard
            className="menu-card"
            key={item.id}
            cardImg={item.cardImg}
            cardTitle={item.cardTitle}
            cardText={item.cardText}
          />
        ))}
      </div>
    </div>
  );
}
