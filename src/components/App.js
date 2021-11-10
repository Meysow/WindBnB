import React, { useState } from "react";
import CardDisplay from "./cards/CardDisplay";
import Header from "./Header";
import Logo from "./Logo";
import SearchBar from "./searchBar/SearchBar";
import staysList from "../datas/stays.json";

const App = () => {
  // State used to filter the card, and show only the ones matching the user research //
  const [locationValue, setLocationValue] = useState("");
  const [totalGuests, setTotalGuests] = useState(0);

  // Create a State to make the Cards filtering conditional to the Search button (onClick) //
  const [arrayA, setArrayA] = useState(staysList);

  // Use regex to format the user search (',' and ' ' are taken care of) //
  const re = /\s*,\s*/;
  const res = locationValue.includes(",")
    ? locationValue.trim().split(re)
    : locationValue.trim().replace(/\s\s+/g, " ").split(" ");

  //create a new Array that will contains only the filtered objects inside the original JSON array. //
  const filteredList = staysList.filter((data) => {
    if (totalGuests <= data.maxGuests) {
      if (res.length <= 1) {
        if (locationValue === "") {
          return data;
        } else if (
          data.city.toLowerCase().includes(res[0].toLowerCase()) ||
          data.country.toLowerCase().includes(res[0].toLowerCase())
        ) {
          return data;
        }
      } else if (res.length > 1) {
        if (locationValue === "") {
          return data;
        } else if (
          data.city.toLowerCase().includes(res[0].toLowerCase()) &&
          data.country.toLowerCase().includes(res[1].toLowerCase())
        ) {
          return data;
        } else if (
          data.city.toLowerCase().includes(res[1].toLowerCase()) &&
          data.country.toLowerCase().includes(res[0].toLowerCase())
        ) {
          return data;
        }
      }
    }
    return false;
  });

  return (
    <div className="app">
      <div className="topBarWrapper">
        <Logo />
        <SearchBar
          filteredList={filteredList}
          locationValue={locationValue}
          setLocationValue={setLocationValue}
          setArrayA={setArrayA}
          totalGuests={totalGuests}
          setTotalGuests={setTotalGuests}
        />
      </div>
      <Header nbCards={filteredList.length} locationValue={locationValue} />
      <CardDisplay
        locationValue={locationValue}
        totalGuests={totalGuests}
        filteredList={filteredList}
        arrayA={arrayA}
      />
    </div>
  );
};

export default App;
