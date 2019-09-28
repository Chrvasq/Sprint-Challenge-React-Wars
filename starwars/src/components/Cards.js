import React from "react";
import CardComponent from "./CardComponent";
import { Col, Row } from "reactstrap";

const Cards = props => {
  const cardElements = props.data.map((element, index) => {
    return (
      <Col lg="4" key={index}>
        <CardComponent
          name={element.name}
          birth_year={element.birth_year}
          eye_color={element.eye_color}
          hair_color={element.hair_color}
          gender={element.gender}
          height={element.height}
          mass={element.mass}
          skin_color={element.skin_color}
        />
      </Col>
    );
  });

  return <Row>{cardElements};</Row>;
};

export default Cards;
