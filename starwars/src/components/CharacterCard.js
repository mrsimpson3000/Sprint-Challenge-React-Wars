import React from "react";
import { Card, CardHeader, CardText, CardBody, Col } from "reactstrap";

// import styled from "styled-components";

// const MyContainer = styled.div`
//   /* background: black; */
//   /* width: 100%; */
//   max-width: 400px;
//   color: black;
//   margin: 20px auto;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
//   color: white;
//   box-shadow: 0px 1px 6px -2px grey;
// `;

const CharacterCard = props => {
  return (
    <Col xs='12' sm='6' md='4' xl='3' className='p-4'>
      <Card className='bg-danger'>
        <CardBody>
          <CardHeader className='bg-primary'>{props.character.name}</CardHeader>
          <CardText className='text-light'>
            Height: {props.character.height}m
          </CardText>
          <CardText className='text-light'>
            Weight: {props.character.mass}kg
          </CardText>
          <CardText className='text-light'>
            Hair Color: {props.character.hair_color}
          </CardText>
          <CardText className='text-light'>
            Eye Color: {props.character.eye_color}
          </CardText>
          <CardText className='text-light'>
            DOB: {props.character.birth_year}
          </CardText>
          <CardText className='text-light'>
            Gender: {props.character.gender}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharacterCard;
