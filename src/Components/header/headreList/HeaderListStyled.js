import styled from "styled-components";

export const HeaderListContainer = styled.nav`
  .headerList {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: white;
  }
  .headerListItem {
    text-transform: uppercase;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &:hover {
      cursor: pointer;
      color: #8192f5;
    }
  }
`;
