import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: #424242;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .headerLogo {
    text-decoration: none;
    text-transform: uppercase;
    color: white;
    font-weight: 700;
    &:hover {
      cursor: pointer;
      color: #8192f5;
    }
  }

  .headerLogoIcon {
    width: 40px;
    height: 40px;
    fill: ${(props) => props.theme.colors.text};
  }
`;
