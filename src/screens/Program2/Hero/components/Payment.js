import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "../Form.module.sass";
import cn from "classnames";
import ScrollParallax from "../../../../components/ScrollParallax";

const Payment = ({ prevStep, nextStep, handleFormData, values }) => {
  //destructuring the object from values
  const {
    firstName,
    età,
    sesso,
    email,
    peso,
    altezza,
    stileVita,
    problemi,
    fotoLaterale,
    fotoFrontale,
    fotoDietro,
    obiettivo,
    tipoAllenamento,
    tempoSala,
    inSala,
    massimizzare,
    acconsente,
    note,
    infosensibil,
    liberatoriaMedica,
  } = values;
  const [error, setError] = useState(false);
  const [step, setstep] = useState(1);

  const prevStep2 = () => {
    prevStep();
  };

  const nextStep3 = () => {
    nextStep();
  };

  console.log(values);
  return (
    <>
      <ScrollParallax className={cn("wrap", styles.wrap)}>
        <Card className={cn("final", styles.final)}>
          <div style={{ display: "flex", width: "100%" }}>
            <Card.Body
              className={cn("finalBody", styles.finalBody)}
              style={{ width: "50%" }}
            >
              <p className={cn("titlePayment", styles.titlePayment)}>
                Pagamento
              </p>
              <p
                style={{
                  fontSize: "30px",
                  lineHeight: "36px",
                  color: "#fff",
                  fontWeight: "600",
                  marginTop: "1rem",
                }}
              >
                Seleziona il tuo piano di pagamento
              </p>

              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#fff",
                  marginTop: "2rem",
                }}
              >
                Una volta completato il pagamento entro 24 ore riceverai la tua
                scheda personalizzata
              </p>
            </Card.Body>
            <Card.Body
              className={cn("finalBody", styles.finalBody)}
              style={{ width: "50%" }}
            >
              <p className={cn("finalBodyTitle", styles.finalBodyTitle)}>
                Seleziona il tuo piano di pagamento
              </p>
              <div className={cn("packPayment", styles.packPayment)}>
                <div>
                  <p
                    style={{
                      color: "rgb(151, 87, 215)",
                      fontWeight: "600",
                      lineHeight: "16px",
                    }}
                  >
                    Pacchetto 1
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "#777E90",
                    }}
                  >
                    1 mese
                  </p>
                </div>
                <div
                  style={{
                    width: "fit-content",
                    marginLeft: "auto",
                    fonFamily: "SFProDisplay-Bold",
                    fontSize: "48px",
                    lineHeight: "56px",
                    letterSpacing: "-.02em",
                    fontWeight: "600",
                  }}
                >
                  <p>€ 89</p>
                </div>
              </div>
              <div className={cn("packPayment", styles.packPayment)}>
                <div>
                  <p
                    style={{
                      color: "rgb(255, 89, 44)",
                      fontWeight: "600",
                      lineHeight: "16px",
                    }}
                  >
                    Pacchetto 2
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "#777E90",
                    }}
                  >
                    3 mese
                  </p>
                </div>
                <div
                  style={{
                    width: "fit-content",
                    marginLeft: "auto",
                    fonFamily: "SFProDisplay-Bold",
                    fontSize: "48px",
                    lineHeight: "56px",
                    letterSpacing: "-.02em",
                    fontWeight: "600",
                  }}
                >
                  <p>€ 239</p>
                </div>
              </div>
              <div className={cn("packPayment", styles.packPayment)}>
                <div>
                  <p
                    style={{
                      color: "rgb(239, 70, 111)",
                      fontWeight: "600",
                      lineHeight: "16px",
                    }}
                  >
                    Pacchetto 3
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.7",
                      color: "#777E90",
                    }}
                  >
                    6 mese
                  </p>
                </div>
                <div
                  style={{
                    width: "fit-content",
                    marginLeft: "auto",
                    fonFamily: "SFProDisplay-Bold",
                    fontSize: "48px",
                    lineHeight: "56px",
                    letterSpacing: "-.02em",
                    fontWeight: "600",
                  }}
                >
                  <p>€ 349</p>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </ScrollParallax>
    </>
  );
};

export default Payment;
