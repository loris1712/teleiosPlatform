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
import Step15 from "./components/Step15";
import Step15_2 from "./components/Step15_2";
import Step16 from "./components/Step16";
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
    email: "",
    peso: "",
    altezza: "",
    fotoLaterale: "",
    fotoFrontale: "",
    fotoDietro: "",
    stileVita: "",
    sport: "",
    obiettivo: "",
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

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
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
                Crea il tuo programma nutrizione
              </h1>
              <div className={styles.text}>
                Crea la tua scheda nutrizione e la scheda palestra su misura per
                te con i migliori professionisti del settore.
              </div>
              <div className={styles.btns}>
                <div className={cn("button", styles.button)} onClick={nextStep}>
                  Inizia ora
                </div>
                <Link
                  className={cn("button-stroke", styles.button)}
                  to="/program2"
                >
                  Scheda Palestra
                </Link>
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
                <Step15
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

    case 14:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step15_2
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

    case 15:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step16
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

    case 16:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step17
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

    case 17:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step18
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

    case 18:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Step19
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

    case 19:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Final
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
    case 20:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col md={{ span: 6, offset: 3 }} className="custom-margin">
                <Payment
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

    // default case to show nothing
    default:
      return <div className="App"></div>;
  }
};

export default Hero;
