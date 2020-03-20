import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import CharaterCard from "./components/CharacterCard";
import Pages from "./components/Pages";
// import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        // console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      <h1 className='Header bg-success p-2 pb-4 sticky-top'>React Wars</h1>
      <Container>
        <Row>
          <Col sm='12' md={{ size: 6, offset: 3 }}>
            <Pages />
          </Col>
        </Row>
        <Row>
          {characters.map((character, index) => {
            // return console.log(character);
            return <CharaterCard character={character} key={index} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default App;
