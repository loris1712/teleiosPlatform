import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import styles from "../Form.module.sass";
import cn from "classnames";
import ScrollParallax from "../../../../components/ScrollParallax";

// creating functional component ans getting props from app.js and destucturing them
const Step14 = ({ prevStep, nextStep, handleFormData, values }) => {
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
    if (validator.isEmpty(values.non_piace)) {
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
              <div className={cn("number", styles.number)}>{step + 10}</div>
              Cosa <strong>&nbsp; NON &nbsp;</strong>ti piace?
            </div>
            <div className={cn("subtitle", styles.subtitle)}>
              Indicaci qui sotto quali alimenti vuoi escludere dalla tua
              alimentazione personalizzata 👇
            </div>
            <Form className={cn("form", styles.form)} onSubmit={submitFormData}>
              <Form.Group className="mb-3">
                {["checkbox"].map((type) => (
                  <div
                    key={`default-${type}`}
                    className={cn("type2", styles.type2)}
                  >
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Albume`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Bietola`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Branzino`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Broccoli`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Bresaola`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Bulgur`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Carciofi`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Carote`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Cavolfiore`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Cavoli di Bruxelles`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Ceci`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Fagioli`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Farro`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Funghi`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Fiocchi di latte`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Lenticchie`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Gamberi`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Manzo`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Marmellata`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Melanzane`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Merluzzo`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Orzo`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Pane`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Pasta`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Pasta integrale`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Patata`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Patata dolce`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Peperoni`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Pesce spada`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Petto di pollo (salume)`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Petto di tacchino (salume)`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Piselli`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Pollo`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Pomodoro`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Quinoa`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Riso basmati`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Riso integrale`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Riso Rosso`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Riso Venere`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Salmone`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Sedano`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Sbombro`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Spinaci`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Tacchino`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Tonno`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Uova`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Zucchine`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={`Yogurt Greco`}
                      className={cn("typeCheck", styles.typeCheck)}
                      name="non_piace"
                      onChange={handleFormData("non_piace")}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  name="non_piace_altro"
                  defaultValue={values.non_piace_altro}
                  type="text"
                  placeholder="Altro"
                  className={cn("input", styles.input)}
                  onChange={handleFormData("non_piace_altro")}
                />
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

export default Step14;
