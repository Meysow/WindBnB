import React, { useState } from "react";
import Inputs from "./Inputs";
import LocationFilter from "./LocationFilter";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import GuestsFilter from "./GuestsFilter";

const Searchbar = ({
  filteredList,
  locationValue,
  totalGuests,
  setLocationValue,
  setArrayA,
  setTotalGuests,
}) => {
  // Create States for Children GuestsFilter, to count the number of Guests //
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);

  // Create a State to determine which Input has the focus between Guests and Location //
  const [hasFocus, setHasFocus] = useState("");

  // Create a state to Open and close the Search Panel //
  const [showSearch, setShowSearch] = useState(false);

  const showPanel = showSearch ? "showPanel" : "hidePanel";

  const openSearch = () => {
    setShowSearch(true);
  };

  const closeSearch = () => {
    setShowSearch(false);
  };

  // shows the header of the search panel only when the panel is open //
  const searchPanelHeader = showSearch && (
    <div className="searchPanelHeader">
      <div>Edit your search</div>
      <div className="searchPanelIcon" onClick={closeSearch}>
        <AiOutlineCloseCircle />
      </div>
    </div>
  );

  // onClick Handler for Button in searchBar Component.//
  // Will toggle showSearchBar + send filtered list to CardDisplay component through ArrayA Variable //
  const handleButtonClick = (e) => {
    setTotalGuests(adultCount + childCount);
    setArrayA(filteredList);
    if (showSearch) {
      setShowSearch(!showSearch);
    }
  };

  // Button "Search" when the Panel is Open //
  const searchBarIcon = (
    <div className={`searchBarIconContainer ${showPanel}`}>
      <button
        className="searchBarIcon"
        onClick={() => {
          handleButtonClick();
        }}
      >
        <FaSearch /> Search
      </button>
    </div>
  );

  // Filler Designed to replace the height of div.searchBarContainer when it goes posisiton Fixed, height 70vh //
  const filler = showSearch && <div className="filler"></div>;

  // handle change of Location Input //
  const handleLocationChange = (e) => {
    let keyWord = e.target.value;
    setLocationValue(keyWord);
  };

  // When the search Panel is open, opens the good suggestions according to which input is focused //
  const filterType =
    hasFocus === "Location" ? (
      <LocationFilter
        filteredList={filteredList}
        showSearch={showSearch}
        locationValue={locationValue}
        setLocationValue={setLocationValue}
      />
    ) : (
      <GuestsFilter
        showSearch={showSearch}
        adultCount={adultCount}
        setAdultCount={setAdultCount}
        childCount={childCount}
        setChildCount={setChildCount}
        setTotalGuests={setTotalGuests}
      />
    );

  return (
    <>
      {filler}
      <div className={`greyWrapper ${showPanel}`}>
        <div className={`searchBarContainer ${showPanel}`}>
          {searchPanelHeader}
          <div className="searchPanelInputs">
            <Inputs
              type={"text"}
              className={"locationInput"}
              placeholder={"Location"}
              label={"LOCATION"}
              openSearch={openSearch}
              filterValue={locationValue}
              setFilterValue={setLocationValue}
              handleChange={handleLocationChange}
              setHasFocus={setHasFocus}
              readOnly={false}
              showSearch={showSearch}
            />
            <Inputs
              type={"text"}
              className={"guestInput"}
              placeholder={"Add guests"}
              label={"GUESTS"}
              openSearch={openSearch}
              setHasFocus={setHasFocus}
              filterValue={totalGuests === 0 ? "" : `${totalGuests} Guests`}
              setFilterValue={setTotalGuests}
              readOnly={true}
              showSearch={showSearch}
              setAdultCount={setAdultCount}
              setChildCount={setChildCount}
            />
            <button
              className={`searchBarBtn ${showPanel}`}
              onClick={handleButtonClick}
            >
              <FaSearch />
            </button>
          </div>
          {filterType}
          {searchBarIcon}
        </div>
      </div>
    </>
  );
};

export default Searchbar;
