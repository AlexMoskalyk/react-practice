import React from "react";
import HeaderList from "./headreList/HeaderList";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/header/sprite.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <a href="/#" className="headerLogo">
        <svg className="headerLogoIcon">
          <use href={sprite + "#icon-price-tags"} />
        </svg>
      </a>
      <HeaderList />
    </HeaderContainer>
  );
};

export default Header;
