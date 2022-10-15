import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {
  //destructuring the object from values
  const {
    firstName,
    età,
    email,
    peso,
    addome,
    gambe,
    somatotipo,
    grasso,
    stilevita,
    sport,
    obiettivo,
  } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }}>
        <Card.Body>
          <p>Risultato</p>
          <p>
            <strong>Nome :</strong> {firstName}{" "}
          </p>
          <p>
            <strong>Età :</strong> {età}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;
