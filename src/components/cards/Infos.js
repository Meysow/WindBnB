import React from "react";
import { FaStar } from "react-icons/fa";

const Infos = ({ superHost, title, rating, type, beds }) => {
  // Super Host //
  const isSuperHost = superHost && (
    <div className="infosSuperHost">Super Host</div>
  );

  // Rating with 2 decimals + star //
  const ratings = rating && (
    <div className="infosRating">
      <div className="infoRatingIcon">
        <FaStar />
      </div>
      {rating.toFixed(2)}
    </div>
  );

  // Don't display Beds that are Null //
  const hasBeds = beds ? `${type} . ${beds} Beds` : type;
  const legends = <div className="infosLegends">{hasBeds}</div>;

  return (
    <div className="infosContainer">
      <div className="firstRow">
        <div className="firstRowWrapper">
          {isSuperHost}
          {legends}
        </div>
        {ratings}
      </div>
      <div className="description">{title}</div>
    </div>
  );
};

export default Infos;
