import React, { useState } from "react";
import { Card } from "react-bootstrap";
import styles from "../Form.module.sass";
import cn from "classnames";
import Image from "../Image";
import ScrollParallax from "../../../../components/ScrollParallax";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import storage from 'firebase/compat';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'firebase/compat/firestore';

const Final = ({ prevStep, nextStep, handleFormData, values }) => {
  //destructuring the object from values
  const {
    firstName,
    età,
    email,
    altezza,
    fotoLaterale,
    fotoFrontale,
    fotoDietro,
    allergie,
    allergie_altro,
    farmaci,
    intestino,
    intestino_altro,
    non_piace,
    non_piace_altro,
    quanti_pasti,
    pasti_fuori,
    integratori,
    acconsente,
    note,
    infosensibili,
    liberatoriaMedica,
    peso,
    stileVita,
    sport,
    obiettivo,
  } = values;
  const [error, setError] = useState(false);
  const [step, setstep] = useState(1);

  const db = firebase.initializeApp({ apiKey: "AIzaSyDxSzPt14Y_njHuntVNiMHV5XT37Jh7Wxc",
  authDomain: "teleios-gym.firebaseapp.com",
  databaseURL: "https://teleios-gym-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "teleios-gym",
  storageBucket: "teleios-gym.appspot.com",
  messagingSenderId: "648488244162",
  appId: "1:648488244162:web:1f237e68aca5fc261abc5b",
  measurementId: "G-3GWJF2BEQE" }).firestore();

  const prevStep2 = () => {
    prevStep();
  };

  const nextStep3 = () => {

    if(values.fotoLaterale == null)
      return;
      
      var today = new Date(),
      date = today.getFullYear() + '_' + (today.getMonth() + 1) + '_' + today.getDate() + '_' + today.getHours() + '_' + today.getMinutes();

      const storage = getStorage();
      const storageRef = ref(storage, `/N_${values.firstName}_${date}/${values.fotoLaterale.name}`);
      uploadBytes(storageRef, values.fotoLaterale)

      const storageRef2 = ref(storage, `/N_${values.firstName}_${date}/${values.fotoFrontale.name}`);
      uploadBytes(storageRef2, values.fotoFrontale)

      const storageRef3 = ref(storage, `/N_${values.firstName}_${date}/${values.fotoDietro.name}`);
      uploadBytes(storageRef3, values.fotoDietro)

      let urlFotoLaterale = "/N_" + values.firstName + "_" + date + "/" + values.fotoLaterale.name;
      let urlfotoFrontale = "/N_" + values.firstName + "_" + date + "/" + values.fotoFrontale.name;
      let urlfotoDietro = "/N_" + values.firstName + "_" + date + "/" + values.fotoDietro.name;

      const dataToSave = {
        firstName: values.firstName,
        età: values.età,
        sesso: values.sesso,
        email: values.email,
        peso: values.peso,
        altezza: values.altezza,
        fotoLaterale: urlFotoLaterale,
        fotoFrontale: urlfotoFrontale, 
        fotoDietro: urlfotoDietro,
        allergie: values.allergie,
        allergie_altro: values.allergie_altro,
        farmaci: values.farmaci, 
        intestino: values.intestino,
        intestino_altro: values.intestino_altro,
        non_piace: values.non_piace,
        non_piace_altro: values.non_piace_altro,
        quanti_pasti: values.quanti_pasti,
        pasti_fuori: values.pasti_fuori,
        integratori: values.integratori,
        acconsente: values.acconsente,
        note: values.note,
        infosensibili: values.infosensibili,
        liberatoriaMedica: values.liberatoriaMedica,
        stileVita: values.stileVita,
        sport: values.sport,
        obiettivo: values.obiettivo,
      }

    db.collection("scheda_nutrizione")
    .add(dataToSave)
    .then(() => {
      nextStep();
    });
  };
  return (
    <>
      <ScrollParallax className={cn("wrap", styles.wrap)}>
        <Card className={cn("final", styles.final)}>
          <div className={cn("finalHead", styles.finalHead)}>
            <div className={cn("finalHeadLogo", styles.finalHeadLogo)}>
              <Image
                className={styles.pic}
                srcDark="/images/logo2.png"
                alt="Teleios"
              />
            </div>
            <div className={cn("finalHeadText", styles.finalHeadText)}>
              Mangia meglio. Allenati più forte.
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div
              className={cn("finalButton", styles.finalButton)}
              style={{ marginLeft: "auto" }}
              onClick={nextStep3}
            >
              Vai al pagamento
            </div>
          </div>

          <Card.Body className={cn("finalBody", styles.finalBody)}>
            <p className={cn("finalBodyTitle", styles.finalBodyTitle)}>
              Dati cliente
            </p>
            <div className={cn("finalBodyCard", styles.finalBodyCard)}>
              <div
                className={cn("finalBodyCardLine", styles.finalBodyCardLine)}
              >
                <div
                  className={cn("finalBodyCardInfo", styles.finalBodyCardInfo)}
                >
                  <div
                    className={cn(
                      "finalBodyCardInfoTitle",
                      styles.finalBodyCardInfoTitle
                    )}
                  >
                    {firstName}{" "}
                  </div>
                  <div
                    className={cn(
                      "finalBodyCardInfoSubtitle",
                      styles.finalBodyCardInfoSubtitle
                    )}
                  >
                    Nome e Cognome
                  </div>
                </div>

                <div
                  className={cn("finalBodyCardInfo", styles.finalBodyCardInfo)}
                >
                  <div
                    className={cn(
                      "finalBodyCardInfoTitle",
                      styles.finalBodyCardInfoTitle
                    )}
                  >
                    {età}{" "}
                  </div>
                  <div
                    className={cn(
                      "finalBodyCardInfoSubtitle",
                      styles.finalBodyCardInfoSubtitle
                    )}
                  >
                    Età
                  </div>
                </div>
              </div>

              <div
                className={cn("finalBodyCardLine", styles.finalBodyCardLine)}
              >
                <div
                  className={cn("finalBodyCardInfo", styles.finalBodyCardInfo)}
                >
                  <div
                    className={cn(
                      "finalBodyCardInfoTitle",
                      styles.finalBodyCardInfoTitle
                    )}
                  >
                    {email}{" "}
                  </div>
                  <div
                    className={cn(
                      "finalBodyCardInfoSubtitle",
                      styles.finalBodyCardInfoSubtitle
                    )}
                  >
                    Email
                  </div>
                </div>
              </div>
              <div
                className={cn("finalBodyCardLine", styles.finalBodyCardLine)}
              >
                <div
                  className={cn(
                    "finalBodyCardInfoElem",
                    styles.finalBodyCardInfoElem
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="#1e6f5c"
                    class="bi bi-rulers"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                  </svg>
                  <div style={{ width: "60%" }}>
                    <p
                      className={cn(
                        "finalBodyCardInfoElemTitle",
                        styles.finalBodyCardInfoElemTitle
                      )}
                    >
                      Altezza
                    </p>
                    <p
                      className={cn(
                        "finalBodyCardInfoElemSubtitle",
                        styles.finalBodyCardInfoElemSubtitle
                      )}
                    >
                      {altezza} cm
                    </p>
                  </div>
                </div>
                <div
                  className={cn(
                    "finalBodyCardInfoElem",
                    styles.finalBodyCardInfoElem
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    fill="#1e6f5c"
                    class="bi bi-clipboard2-pulse"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z" />
                    <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z" />
                    <path d="M9.979 5.356a.5.5 0 0 0-.968.04L7.92 10.49l-.94-3.135a.5.5 0 0 0-.926-.08L4.69 10H4.5a.5.5 0 0 0 0 1H5a.5.5 0 0 0 .447-.276l.936-1.873 1.138 3.793a.5.5 0 0 0 .968-.04L9.58 7.51l.94 3.135A.5.5 0 0 0 11 11h.5a.5.5 0 0 0 0-1h-.128L9.979 5.356Z" />
                  </svg>
                  <div style={{ width: "60%" }}>
                    <p
                      className={cn(
                        "finalBodyCardInfoElemTitle",
                        styles.finalBodyCardInfoElemTitle
                      )}
                    >
                      Peso
                    </p>
                    <p
                      className={cn(
                        "finalBodyCardInfoElemSubtitle",
                        styles.finalBodyCardInfoElemSubtitle
                      )}
                    >
                      {peso} kg
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>

          <Card.Body className={cn("finalBody", styles.finalBody)}>
            <p className={cn("finalBodyTitle", styles.finalBodyTitle)}>
              Fotografie
            </p>
            <div className={cn("finalBodyCard", styles.finalBodyCard)}>
              <div
                className={cn("finalBodyCardLine", styles.finalBodyCardLine)}
              >
                 {values.fotoLaterale && 
                <div>
                  <p
                    className={cn(
                      "finalBodyCardInfoElemTitle2",
                      styles.finalBodyCardInfoElemTitle2
                    )}
                  >
                    Foto Laterale
                  </p>
                  <div
                    className={cn("imageDiv", styles.imageDiv)}
                    style={{ backgroundImage: "url(" + URL.createObjectURL(values.fotoLaterale) + ")" }}
                    width="100%"
                  ></div>
                </div>
                }


                {values.fotoFrontale && 
                <div>
                  <p
                    className={cn(
                      "finalBodyCardInfoElemTitle2",
                      styles.finalBodyCardInfoElemTitle2
                    )}
                  >
                    Foto Frontale
                  </p>
                  <div
                    className={cn("imageDiv", styles.imageDiv)}
                    style={{ backgroundImage: "url(" + URL.createObjectURL(values.fotoFrontale) + ")" }}
                    width="100%"
                  ></div>
                </div>
                }
                
                {values.fotoDietro && 
                <div>
                  <p
                    className={cn(
                      "finalBodyCardInfoElemTitle2",
                      styles.finalBodyCardInfoElemTitle2
                    )}
                  >
                    Foto Dietro
                  </p>
                  <div
                    className={cn("imageDiv", styles.imageDiv)}
                    style={{ backgroundImage: "url(" + URL.createObjectURL(values.fotoDietro) + ")" }}
                    width="100%"
                  ></div>
                </div>
                }
              </div>
            </div>
          </Card.Body>

          <Card.Body className={cn("finalBody", styles.finalBody)}>
            <p className={cn("finalBodyTitle", styles.finalBodyTitle)}>
              Specifiche
            </p>
            <div className={cn("finalBodyCard", styles.finalBodyCard)}>
              <div
                className={cn("finalBodyCardLine", styles.finalBodyCardLine)}
                style={{ marginBottom: "8rem" }}
              >
                <div
                  className={cn(
                    "finalBodyCardInfoElem",
                    styles.finalBodyCardInfoElem
                  )}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="300"
                    height="300"
                    fill="#1e6f5c"
                    class="bi bi-universal-access"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM6 5.5l-4.535-.442A.531.531 0 0 1 1.531 4H14.47a.531.531 0 0 1 .066 1.058L10 5.5V9l.452 6.42a.535.535 0 0 1-1.053.174L8.243 9.97c-.064-.252-.422-.252-.486 0l-1.156 5.624a.535.535 0 0 1-1.053-.174L6 9V5.5Z" />
                  </svg>
                  <div style={{ width: "60%", marginLeft: "auto" }}>
                    <p
                      className={cn(
                        "finalBodyCardInfoElemTitle",
                        styles.finalBodyCardInfoElemTitle
                      )}
                    >
                      Stile di vita
                    </p>
                    <p
                      className={cn(
                        "finalBodyCardInfoElemSubtitle",
                        styles.finalBodyCardInfoElemSubtitle
                      )}
                    >
                      {stileVita}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={cn("finalBodyCardLine", styles.finalBodyCardLine)}
              >
                <div
                  className={cn(
                    "finalBodyCardInfoElem",
                    styles.finalBodyCardInfoElem
                  )}
                >
                  <div
                    className={cn(
                      "finalBodyCardTable",
                      styles.finalBodyCardTable
                    )}
                  >
                    <p
                      className={cn(
                        "finalBodyCardTableTitle",
                        styles.finalBodyCardTableTitle
                      )}
                    >
                      Riassunto risposte
                    </p>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Intestino
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {intestino}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Integratori
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {integratori}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Sport
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {sport}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Obiettivo
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {obiettivo}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Pasti fuori
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {pasti_fuori}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Quanti pasti
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {quanti_pasti}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Allergie/intolleranze
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {allergie}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Non mi piace
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {non_piace}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Integratori
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {integratori}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Pasti fuori
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {pasti_fuori}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "finalBodyCardTableline",
                        styles.finalBodyCardTableline
                      )}
                    >
                      <p
                        className={cn(
                          "finalBodyCardTablelineTitle",
                          styles.finalBodyCardTablelineTitle
                        )}
                      >
                        Farmaci
                      </p>
                      <p
                        className={cn(
                          "finalBodyCardTablelineSubtitle",
                          styles.finalBodyCardTablelineSubtitle
                        )}
                      >
                        {farmaci}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card.Body>

          <Card.Body className={cn("finalBody", styles.finalBody)}>
            <div
              className={cn("finalBodyCardLine", styles.finalBodyCardLine)}
              style={{ marginBottom: "8rem" }}
            >
              <div
                className={cn(
                  "finalBodyCardInfoElem",
                  styles.finalBodyCardInfoElem
                )}
              >
                <div style={{ width: "60%" }}>
                  <p
                    className={cn(
                      "finalBodyCardInfoElemTitle",
                      styles.finalBodyCardInfoElemTitle
                    )}
                    style={{ marginLeft: "0!important" }}
                  >
                    Note
                  </p>
                  <p
                    className={cn(
                      "finalBodyCardInfoElemSubtitle",
                      styles.finalBodyCardInfoElemSubtitle
                    )}
                  >
                    {note}
                  </p>
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </ScrollParallax>
    </>
  );
};

export default Final;
