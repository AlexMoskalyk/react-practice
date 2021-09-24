import React from "react";
import LaprosListItem from "./laptosListItem/LaptopsListItem";

const LaptopsList = ({ laptops }) => {
  return (
    <>
      <ul>
        {laptops.map((laptop) => (
          <LaprosListItem laptop={laptop} key={laptop.id} />
        ))}
      </ul>
    </>
  );
};

export default LaptopsList;
