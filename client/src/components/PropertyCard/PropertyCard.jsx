import React from "react";
import "./PropertyCard.css";
import { AiFillHeart } from 'react-icons/ai'
import { truncate } from 'lodash'
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ card }) => {
  // console.log(card.image)

  const navigate = useNavigate()

  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <AiFillHeart size={24} color='white' />
      <img src={`${card.image}`} alt="" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>

      <span className="primaryText">{card.title}</span>
      <span className="secondaryText">{truncate(card.description,{length:80})}</span>
    </div>
  );
};

export default PropertyCard;
