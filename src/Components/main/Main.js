import React from "react";
import data from "../../data";
import PhoneList from "../phoneList/PhoneList";
import LaptopsList from "../laptopsList/LaptopsList";
import Section from "../section/Section";
import { MainContainer } from "./MainStyled";

const Main = () => {
  return (
    <MainContainer>
      <Section title="PhoneList">
        <PhoneList phones={data.phones} />
      </Section>
      <Section title="LaptopsList">
        <LaptopsList laptops={data.laptops} />
      </Section>
    </MainContainer>
  );
};

export default Main;
