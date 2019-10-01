import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const CardComponent = props => {
  return (
    <Card body inverse color="danger">
      <CardBody>
        <CardTitle>Name: {props.name}</CardTitle>
        <CardSubtitle className="text-left">
          Birth Year: {props.birth_year}
        </CardSubtitle>
        <CardText className="text-left">
          Eye Color: {props.eye_color}
          <br />
          Hair Color: {props.hair_color}
          <br />
          Gender: {props.gender}
          <br />
          Height: {props.height}
          <br />
          Mass: {props.mass}
          <br />
          Skin Color: {props.skin_color}
        </CardText>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
