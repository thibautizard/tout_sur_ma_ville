import React from "react";
import styled from "styled-components";
import Searchbar from "./components/Searchbar";
import Title from "./components/Title";

export default function Accueil() {
  return (
    <Container id="home">
      <Title> Tout sur ma ville</Title>
      <Searchbar />
    </Container>
  );
}

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
