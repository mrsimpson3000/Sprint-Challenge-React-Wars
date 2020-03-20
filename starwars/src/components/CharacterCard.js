import React from "react";
import styled from "styled-components";

const MyContainer = styled.div`
  /* background: black; */
  /* width: 100%; */
  max-width: 400px;
  color: black;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  box-shadow: 0px 1px 6px -2px grey;
`;

const CharacterCard = props => {
  return (
    <MyContainer>
      <h1 style={{ color: "black" }}>{props.character.name}</h1>
      <p style={{ color: "darkblue" }}>Height: {props.character.height}</p>
      <p style={{ color: "darkblue" }}>Weight: {props.character.mass}</p>
      <p style={{ color: "darkblue" }}>
        Hair Color: {props.character.hair_color}
      </p>
      <p style={{ color: "darkblue" }}>
        Eye Color: {props.character.eye_color}
      </p>
      <p style={{ color: "darkblue" }}>DOB: {props.character.birth_year}</p>
      <p style={{ color: "darkblue" }}>Gender: {props.character.gender}</p>
    </MyContainer>
  );
};

export default CharacterCard;
