import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Suggestions from "./Suggestions";
import styled from "styled-components";

export default function Searchbar() {
  const [city, suggestions, changeCity] = useCity();

  return (
    <Container>
      <Loupe />
      <Input type="text" name="city" value={city} onChange={changeCity} />
      <Suggestions cities={suggestions} />
    </Container>
  );
}

//*! CUSTOM HOOK */

function useCity() {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [timer, setTimer] = useState(null);

  const changeCity = (e) => {
    const { name, value } = e.target;
    setCity(value);
    clearTimeout(timer);
    setTimer(
      setTimeout(async () => setSuggestions(await getCities(city)), 300)
    );
  };

  return [city, suggestions, changeCity];
}

//*! STYLED COMPONENTS */

const Container = styled.div`
  position: relative;
  width: 60vw;
`;

const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  font-size: 1.6rem;

  box-sizing: border-box;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2vw;
  padding: 0 0 0 7%;
`;

const Loupe = () => (
  <FontAwesomeIcon icon="magnifying-glass" style={iconstyle} />
);

const iconstyle = {
  position: "absolute",
  top: "50%",
  left: "2.5%",
  fontSize: "1.5rem",
  transform: "translate(0, -50%)",
};

// Async functions

async function getCities(search) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7d806a3c56msh37398f8b4fd1ba9p1a8d54jsn437dbdf495f0",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const data = await fetch(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5&countryIds=FR&namePrefix=${search}&languageCode=fr&types=CITY`,
    options
  )
    .then((response) => response.json())
    .then((response) => response.data)
    .catch((err) => console.error(err));
  console.log(data);
  return data;
}
