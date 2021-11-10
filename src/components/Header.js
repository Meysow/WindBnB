import React from "react";

const Header = ({ nbCards, locationValue }) => {
  const location = locationValue ? locationValue : "Finland";

  return (
    <div className="headerContainer">
      <h1>{`Stays in ${location}`}</h1>
      <div className="headerCount">{`${nbCards} stays`}</div>
    </div>
  );
};

export default Header;
