import React from "react";
import { MdClose } from "react-icons/md";

const Inputs = ({
  type,
  className,
  defaultValue,
  placeholder,
  label,
  openSearch,
  filterValue,
  setFilterValue,
  handleChange,
  setHasFocus,
  readOnly,
  showSearch,
  setAdultCount,
  setChildCount,
}) => {
  const focused = () => {
    openSearch();
    setHasFocus(placeholder);
  };

  const isLabel = showSearch && label;

  const resetCount = () => {
    setAdultCount(0);
    setChildCount(0);
    setFilterValue(0);
  };

  const handleClick = (e) => {
    className === "locationInput" ? setFilterValue("") : resetCount();
  };

  console.log(filterValue);

  const buttonRemove =
    showSearch && filterValue ? (
      <button className="removeSearch" onClick={() => handleClick()}>
        <MdClose />
      </button>
    ) : null;

  return (
    <div className="inputContainer">
      <label>
        <span>{isLabel}</span>
        <input
          type={type}
          className={className}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onFocus={focused}
          onChange={handleChange}
          value={filterValue}
          readOnly={readOnly}
        />
        {buttonRemove}
      </label>
    </div>
  );
};

export default Inputs;
