import React, { useState, useEffect } from "react";
import axios from "axios";
// import CharacterCard from
import { Container, Row } from "reactstrap";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return stuff;
};

export default CharacterList;
