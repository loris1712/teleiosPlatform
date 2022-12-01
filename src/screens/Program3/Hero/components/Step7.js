import React, { useState, useEffect } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";
import styles from "../Form.module.sass";
import cn from "classnames";
import ScrollParallax from "../../../../components/ScrollParallax";
import Dropdown from "../../../../components/Dropdown";

// creating functional component ans getting props from app.js and destucturing them
const Step7 = ({ prevStep, nextStep, handleFormData, values }) => {
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
    nextStep();
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const [selectedImage2, setSelectedImage2] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);

  const [selectedImage3, setSelectedImage3] = useState(null);
  const [imageUrl3, setImageUrl3] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
      handleFormData("fotoLaterale");
    }
    if (selectedImage2) {
      setImageUrl2(URL.createObjectURL(selectedImage2));
      handleFormData(imageUrl2);
    }
    if (selectedImage3) {
      setImageUrl3(URL.createObjectURL(selectedImage3));
      handleFormData(imageUrl3);
    }
  }, [selectedImage, selectedImage2, selectedImage3]);
  values.fotoLaterale = imageUrl;
  values.fotoFrontale = imageUrl2;
  values.fotoDietro = imageUrl3;
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
              <div className={cn("number", styles.number)}>{step + 3}</div>
              Carica le foto
            </div>
            <Form className={cn("form", styles.form)} onSubmit={submitFormData}>
              <div className={cn("form", styles.fileDiv)}>
                <Form.Group
                  controlId="formFile"
                  className={cn("formGroupImage", styles.formGroupImage)}
                >
                  <p className={cn("title", styles.textLabel)}>Frontale</p>
                  <Form.Control
                    className={cn("title", styles.formFile)}
                    type="file"
                    label="Carica"
                    id="formFile"
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                  {imageUrl && selectedImage && (
                    <div mt={2} textAlign="center">
                      <div
                        className={cn("imageDiv", styles.imageDiv)}
                        style={{ backgroundImage: "url(" + imageUrl + ")" }}
                        width="100%"
                      ></div>
                    </div>
                  )}
                </Form.Group>

                <Form.Group
                  controlId="formFile"
                  className={cn("formGroupImage", styles.formGroupImage)}
                >
                  <p className={cn("title", styles.textLabel)}>Laterale</p>
                  <Form.Control
                    className={cn("title", styles.formFile)}
                    type="file"
                    label="Carica"
                    id="formFile"
                    onChange={(e) => setSelectedImage2(e.target.files[0])}
                  />
                  {imageUrl2 && selectedImage2 && (
                    <div mt={2} textAlign="center">
                      <div
                        className={cn("imageDiv", styles.imageDiv)}
                        style={{ backgroundImage: "url(" + imageUrl2 + ")" }}
                        width="100%"
                      ></div>
                    </div>
                  )}
                </Form.Group>

                <Form.Group
                  controlId="formFile"
                  className={cn("formGroupImage", styles.formGroupImage)}
                >
                  <p className={cn("title", styles.textLabel)}>Dietro</p>
                  <Form.Control
                    className={cn("title", styles.formFile)}
                    type="file"
                    label="Carica"
                    id="formFile"
                    onChange={(e) => setSelectedImage3(e.target.files[0])}
                  />
                  {imageUrl3 && selectedImage3 && (
                    <div mt={2} textAlign="center">
                      <div
                        className={cn("imageDiv", styles.imageDiv)}
                        style={{ backgroundImage: "url(" + imageUrl3 + ")" }}
                        width="100%"
                      ></div>
                    </div>
                  )}
                </Form.Group>
              </div>

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

export default Step7;
