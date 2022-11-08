import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import styles from "../Form.module.sass";
import cn from "classnames";
import ScrollParallax from "../../../../components/ScrollParallax";

// creating functional component ans getting props from app.js and destucturing them
const Step3 = ({
  prevStep,
  nextStep,
  handleFormData,
  handlSelectData,
  values,
}) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [step, setstep] = useState(1);

  const prevStep2 = () => {
    prevStep();
  };

  const handlSelectData2 = (input) => (e) => {
    // input value from the form
    const { value } = e.target.name;
    values.sesso = e.target.name;
  };

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    console.log(values);

    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(values.età) || validator.isEmpty(values.peso)) {
      setError(true);
    } else {
      nextStep();
    }
  };

  //per fare il condizionale facciamo che se values.valore è == yes oppure no allora di conseguenza sarà nextStep oppure nextStep2 che sarà dichiarato nell'altro file con un +2 e non +1.

  return (
    <div>
      <ScrollParallax className={cn("wrap", styles.wrap)}>
        <Card className={cn("card", styles.card)}>
          <Card.Body>
            <div
              className={cn("returnBack", styles.returnBack)}
              onClick={prevStep2}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
            </div>
            <div className={cn("title", styles.title)}>
              <div className={cn("number", styles.number)}>{step + 2}</div>
              Inserisci il{" "}
              <strong>&nbsp;Sesso, Anni, Peso (kg) e Altezza (cm)</strong>
            </div>
            <Form className={cn("form", styles.form)} onSubmit={submitFormData}>
              <Form.Group>
                {["radio"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className={cn("type", styles.type)}
                  >
                    <Form.Check
                      type={type}
                      id="sesso"
                      label={`Maschio`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="Maschio"
                      onChange={handlSelectData2("sesso")}
                    />
                    <Form.Check
                      type={type}
                      id="sesso"
                      label={`Femmina`}
                      name="Femmina"
                      className={cn("typeCheck", styles.typeCheck)}
                      onChange={handlSelectData2("sesso")}
                    />
                  </div>
                ))}

                <Form.Control
                  style={{ border: error ? "2px solid red" : "" }}
                  name="età"
                  defaultValue={values.età}
                  type="text"
                  placeholder="Anni"
                  className={cn("input", styles.input)}
                  onChange={handleFormData("età")}
                />
                {error ? (
                  <Form.Text
                    className={cn("erroForm", styles.erroForm)}
                    style={{ color: "red" }}
                  >
                    Campo obbligatorio
                  </Form.Text>
                ) : (
                  ""
                )}

                <Form.Control
                  style={{ border: error ? "2px solid red" : "" }}
                  name="peso"
                  defaultValue={values.peso}
                  type="text"
                  placeholder="Peso"
                  className={cn("input", styles.input)}
                  onChange={handleFormData("peso")}
                />
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    Campo obbligatorio
                  </Form.Text>
                ) : (
                  ""
                )}

                <Form.Control
                  style={{ border: error ? "2px solid red" : "" }}
                  name="altezza"
                  defaultValue={values.altezza}
                  type="text"
                  placeholder="Altezza"
                  className={cn("input", styles.input)}
                  onChange={handleFormData("altezza")}
                />
                {error ? (
                  <Form.Text style={{ color: "red" }}>
                    Campo obbligatorio
                  </Form.Text>
                ) : (
                  ""
                )}
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                style={{ marginTop: "1rem" }}
                className={cn("button", styles.button)}
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Avanti
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </ScrollParallax>
    </div>
  );
};

export default Step3;
