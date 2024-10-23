import React, { useState } from "react";
import { Images } from "./images";
import "./categories.css"


export const CategoriesSec = () => {
  const [option, setoption] = useState([
    {
      link: "/assets/Mobile.png",
      text: "Mobiles",
    },
    {
      link: "/assets/vehicles.png",
      text: "Vehicles",
    },
    {
      link: "/assets/property-for-sale..png",
      text: "Property for Sale",
    },
    {
      link: "/assets/property-for-rent..png",
      text: "Property for Rent",
    },
    {
      link: "/assets/electronics-home-appliances..png",
      text: "Electronics & Home Appliances",
    },
    {
      link: "/assets/bikes..png",
      text: "Bikes",
    },
    {
      link: "/assets/business-industrial-agriculture..png",
      text: "Business, Industrial & Agriculture",
    },
    {
      link: "/assets/services..png",
      text: "Services",
    },
    {
      link: "/assets/jobs..png",
      text: "Jobs",
    },
    {
      link: "/assets/animals..png",
      text: "Animals",
    },
    {
      link: "/assets/furniture-home-decor..png",
      text: "Furniture & Home Decor",
    },
    {
      link: "/assets/fashion-.png",
      text: "Fashion & Beauty",
    },
    {
      link: "/assets/books-sports-hobbies..png",
      text: "Books Sports & Hobbies",
    },
    {
      link: "/assets/kids..png",
      text: "Kids",
    },
  ]);
  return (
    <div className="categories">
      <div>
        <h2>All Categories</h2>
      </div>
      <div className="categories-items">
        {option.map((v, i) => (
            <div key={i} className="cards">
                 <Images src={v.link} alt={v.text} />;
                 <h3>{v.text}</h3>;
            </div>
        ))}
      </div>
    </div>
  );
};
