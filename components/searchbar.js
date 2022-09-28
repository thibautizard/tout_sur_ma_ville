import styles from './searchbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import Suggestions from "./searchbar_suggestions";

export default function Searchbar() {
  const [city, setCity] = useState("");
  const [citiesFiltered, setCitiesFiltered] = useState([]);
  const [timer, setTimer] = useState(null);

  const changeCity = (e) => {
    const { name, value } = e.target;
    setCity(value);
    clearTimeout(timer);
    setTimer(
      setTimeout(async () => setCitiesFiltered(await getCities(city)), 600)
    );
  };

  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon="magnifying-glass" />
      <input type="text" name="city" value={city} onChange={changeCity} />
      <Suggestions cities={citiesFiltered} />
    </div>
  );
}

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