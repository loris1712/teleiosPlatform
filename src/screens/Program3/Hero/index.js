import { React, useState } from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Hero.module.sass";
import Image from "../../../components/Image";
import ScrollButton from "../../../components/ScrollButton";
import ScrollParallax from "../../../components/ScrollParallax";
import { Container, Row, Col } from "react-bootstrap";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import Step3 from "./components/Step3";
import Step7 from "./components/Step7";
import Step8 from "./components/Step8";
import Step9 from "./components/Step9";
import Step10 from "./components/Step10";
import Step11 from "./components/Step11";
import Step12 from "./components/Step12";
import Step13 from "./components/Step13";
import Step14 from "./components/Step14";
import Step8f from "./components/Step8f";
import Step9f from "./components/Step9f";
import Step10f from "./components/Step10f";
import Step11f from "./components/Step11f";
import Step12f from "./components/Step12f";
import Step13f from "./components/Step13f";
import Step14f from "./components/Step14f";
import Step15f from "./components/Step15f";
import Step15_2f from "./components/Step15_2f";
import Step16f from "./components/Step16f";
import Step17 from "./components/Step17";
import Step18 from "./components/Step18";
import Step19 from "./components/Step19";
import Final from "./components/Final";
import Payment from "./components/Payment";
import Steps from "../Steps";

const Hero = ({ scrollToRef }) => {
  //state for steps
  const [step, setstep] = useState(1);

  //state for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    età: "",
    sesso: "",
    email: "",
    peso: "",
    altezza: "",
    fotoLaterale: "",
    fotoFrontale: "",
    fotoDietro: "",
    stileVita: "",
    problemi: "",
    obiettivo: "",
    tipoAllenamento: "",
    tempoSala: "",
    inSala: "",
    massimizzare: "",
    stileVita_f: "",
    sport: "",
    obiettivo_f: "",
    allergie: "",
    allergie_altro: "",
    farmaci: "",
    intestino: "",
    intestino_altro: "",
    non_piace: "",
    non_piace_altro: "",
    quanti_pasti: "",
    pasti_fuori: "",
    integratori: "",
    acconsente: "",
    note: "",
    infosensibili: "",
    liberatoriaMedica: "",
  });

  // function for going to next step by increasing step state by 1
  const nextStep = () => {
    setstep(step + 1);
  };

  const nextStepDouble = () => {
    setstep(step + 2);
  };

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const handlSelectData = (input) => (e) => {
    // input value from the form
    const { value } = e.target.name;
    console.log(e.target.name);

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: e.target.name,
    }));
  };

  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = (input) => (e) => {
    // input value from the form
    const { value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <div className={styles.hero}>
          <div className={cn("container", styles.container)}>
            <ScrollParallax className={styles.wrap}>
              <div className={cn("stage", styles.stage)}>Creazione</div>
              <h1 className={cn("h1", styles.title)}>
                Crea il tuo programma palestra
              </h1>
              <div className={styles.text}>
                Crea la tua scheda nutrizione e la scheda palestra su misura per
                te con i migliori professionisti del settore.
              </div>
              <div className={styles.btns}>
                <div className={cn("button", styles.button)} onClick={nextStep}>
                  Inizia ora
                </div>
              </div>
            </ScrollParallax>
          </div>
          <Steps />
        </div>
      );

    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne
                  step={step}
                  prevStep={prevStep}
                  nextStep={nextStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 4:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step3
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  handlSelectData={handlSelectData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 5:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step7
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 6:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step8
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 7:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step9
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 8:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step10
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 9:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step11
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 10:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step12
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 11:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step13
                  step={step}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  nextStepDouble={nextStepDouble}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 12:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step14
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 13:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step8f
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 14:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step9f
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 15:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <Step10f
                    step={step}
                    nextStep={nextStep}
                    nextStepDouble={nextStepDouble}
                    prevStep={prevStep}
                    handleFormData={handleInputData}
                    values={formData}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
  
    case 16:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                    <Step11f
                      step={step}
                      nextStep={nextStep}
                      nextStepDouble={nextStepDouble}
                      prevStep={prevStep}
                      handleFormData={handleInputData}
                      values={formData}
                    />
                  </Col>
                </Row>
              </Container>
            </div>
          );
    
    case 17:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step12f
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 18:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step13f
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 19:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step14f
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );
    
    case 20:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                  <Step15f
                    step={step}
                    nextStep={nextStep}
                    nextStepDouble={nextStepDouble}
                    prevStep={prevStep}
                    handleFormData={handleInputData}
                    values={formData}
                  />
                </Col>
              </Row>
            </Container>
          </div>
        );
  
    case 21:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step15_2f
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );


    case 22:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step16f
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 23:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step17
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 24:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step18
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 25:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step19
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 26:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );

    case 27:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Payment
                  step={step}
                  nextStep={nextStep}
                  nextStepDouble={nextStepDouble}
                  prevStep={prevStep}
                  handleFormData={handleInputData}
                  values={formData}
                />
              </Col>
            </Row>
          </Container>
        </div>
      );


    
    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
};

export default Hero;
