import React from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const GuestsFilter = ({
  showSearch,
  adultCount,
  setAdultCount,
  childCount,
  setChildCount,
  setTotalGuests,
}) => {
  const handleClickMinus = (count, setCount) => {
    if (count > 0) {
      setCount(count - 1);
      setTotalGuests((prevGuest) => prevGuest - 1);
    }
  };

  const handleClickPlus = (count, setCount) => {
    setCount(count + 1);
    setTotalGuests((prevGuest) => prevGuest + 1);
  };

  return (
    showSearch && (
      <div className="guestsFilter">
        <div className="guestsFilterContainer">
          <h2>Adults</h2>
          <h3>Ages 13 or above</h3>
          <div className="inputWrapper">
            <span
              className="minusIcon"
              onClick={() => handleClickMinus(adultCount, setAdultCount)}
            >
              <FaMinus />
            </span>
            <input type="number" name="adults" value={adultCount} readOnly />
            <span
              className="plusIcon"
              onClick={() => handleClickPlus(adultCount, setAdultCount)}
            >
              <FaPlus />
            </span>
          </div>
        </div>
        <div className="guestsFilterContainer">
          <h2>Children</h2>
          <h3>Ages 2-12</h3>
          <div className="inputWrapper">
            <span
              className="minusIcon"
              onClick={() => handleClickMinus(childCount, setChildCount)}
            >
              <FaMinus />
            </span>
            <input type="number" name="child" value={childCount} readOnly />
            <span
              className="plusIcon"
              onClick={() => handleClickPlus(childCount, setChildCount)}
            >
              <FaPlus />
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default GuestsFilter;
