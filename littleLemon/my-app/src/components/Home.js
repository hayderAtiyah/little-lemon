import * as React from "react";
import MediaCard from "./MediaCard";
import food1 from "../assets/food1.jpg";
import food2 from "../assets/food2.jpg";
import food3 from "../assets/food3.jpg";
import ReserveNowButton from "./ReserveNowButton";
import { Link } from "react-router-dom";
export default function Home() {
  const food = [
    {
      imgSrc: food1,
      imgTitle: "Greek Salad",
      imgDescription:
        "A fresh Greek salad with tomatoes, cucumbers, olives, and feta cheese.",
      imgMainTitle: "Salad",
    },
    {
      imgSrc: food2,
      imgTitle: "Bruschetta",
      imgDescription:
        "Toasted bread topped with diced tomatoes, garlic, basil, and olive oil.",
      imgMainTitle: "Appetizer",
    },
    {
      imgSrc: food3,
      imgTitle: "Lemon Dessert",
      imgDescription:
        "A tangy and sweet lemon dessert, perfect for finishing your meal.",
      imgMainTitle: "Dessert",
    },
  ];
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Little Lemon</h1>
      <div className="home-box">
        <Link to="/booking" className="home-link">
          <ReserveNowButton />
        </Link>
      </div>
      <div className="home-cards">
        {food.map((item, index) => (
          <MediaCard
            key={index}
            imgSrc={item.imgSrc}
            imgTitle={item.imgTitle}
            imgDescription={item.imgDescription}
            imgMainTitle={item.imgMainTitle}
          />
        ))}
      </div>
    </div>
  );
}
