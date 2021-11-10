import React from "react";
import Infos from "./Infos";

const CardDisplay = ({ arrayA }) => {
  const arrayDisplay =
    arrayA.length > 0 ? (
      arrayA.map(({ superHost, title, rating, type, beds, photo }) => (
        <div key={title} className="cardContainer">
          <img src={photo} alt={`${title} cover`} />
          <Infos
            superHost={superHost}
            title={title}
            rating={rating}
            type={type}
            beds={beds}
          />
        </div>
      ))
    ) : (
      <div className="errorMessage">
        Unfortunatly, There are no Stays conresponding to your criteras.
      </div>
    );

  return <ul className="cardList">{arrayDisplay}</ul>;
};

export default CardDisplay;
