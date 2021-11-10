import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const LocationFilter = ({ filteredList, showSearch, setLocationValue }) => {
  // Create a New Array that will contain 'City, Country' for every item of the filtered JSON array //
  const locationList = [];
  filteredList.forEach(function (item) {
    locationList.push(`${item.city}, ${item.country}`);
  });

  // Eliminate duplicates //
  const locationListUnique = locationList.reduce(
    (acc, loc) => (acc.includes(loc) ? acc : acc.concat(loc)),
    []
  );

  return (
    showSearch && (
      <>
        <ul className="locationFilter">
          {locationListUnique.slice(0, 4).map((location, i) => (
            <div className="selectContgainer" key={i}>
              <span className="locationFilterIcon">
                <FaMapMarkerAlt />
              </span>
              <option onClick={(e) => setLocationValue(e.target.value)}>
                {location}
              </option>
            </div>
          ))}
        </ul>
      </>
    )
  );
};

export default LocationFilter;
