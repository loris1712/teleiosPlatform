import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import styles from "../Form.module.sass";
import cn from "classnames";
import ScrollParallax from "../../../../components/ScrollParallax";

// creating functional component ans getting props from app.js and destucturing them
const Step19 = ({ prevStep, nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  const [step, setstep] = useState(1);

  const prevStep2 = () => {
    prevStep();
  };

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

    // checking if value of first name and last name is empty show error else take to step 2
    if (validator.isEmpty(values.liberatoriaMedica)) {
      setError(true);
    } else {
      nextStep();
    }
  };

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
              <div className={cn("number", styles.number)}>{step + 16}</div>
              Liberatoria medica
            </div>
            <div className={cn("subtitle", styles.subtitle)}>
              Una parte fondamentale del mantenimento di uno stile di vita sano
              consiste nell'assumersi la piena responsabilità di monitorare le
              proprie esigenze. <br></br>
              <br></br>È importante che lo sappiate: Il nutrizionista non può
              sostituire quelli di un medico esperto in fase di diagnosi di
              patologie né prescrizione di farmaci.<br></br>
              <br></br> Se scegliete di ricevere un consulenza nutrizionale
              senza il previo consenso del vostro medico, accettate di assumervi
              la piena responsabilità delle vostre decisioni e di tenere indenne
              il professionista e qualsiasi società affiliata da qualsiasi
              responsabilità relativa a lesioni a voi o alle vostre proprietà
              derivanti da o connesse all'uso delle informazioni discusse.
            </div>
            <Form className={cn("form", styles.form)} onSubmit={submitFormData}>
              <Form.Group className="mb-3">
                {["radio"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className={cn("type2", styles.type2)}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Accetto`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="liberatoriaMedica"
                      onChange={handleFormData("liberatoriaMedica")}
                    />
                  </div>
                ))}
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
                Invia
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

export default Step19;
