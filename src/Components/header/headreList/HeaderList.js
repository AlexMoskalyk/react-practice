import React from "react";
import data from "../../../data";
import { HeaderListContainer } from "./HeaderListStyled";

const HeaderList = () => {
  return (
    <HeaderListContainer>
      <ul className="headerList">
        {data.header.map((item) => (
          <li key={item} className="headerListItem">
            {item}
          </li>
        ))}
      </ul>
    </HeaderListContainer>
  );
};

export default HeaderList;
