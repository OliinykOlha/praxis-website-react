import { useNavigate } from "react-router-dom";

import "./styles.css";

import yoga from "../../assets/Körperpraktiken/yoga.jpg";
import krankGym from "../../assets/Körperpraktiken/life-fitness-house-1230004_1280.jpg";
import pilates from "../../assets/Körperpraktiken/istockphoto-1483989743-1024x1024.jpg";
import power from "../../assets/Körperpraktiken/powerPlate.jpg";

export default function GridBlock() {
  const navigate = useNavigate();

  const GoToKontakt = () => {
    navigate("/kontakt");
  };

  return (
    <div className="grid">
      {/* 1 */}
      <div
        className="grid-item"
        id="yoga"
        style={{
          backgroundImage: `url(${yoga})`,
        }}
      >
        <div className="content">
          <h5 className="title">Physio Yoga</h5>
          <p className="description">
            eine sanfte, atembetonte Form des Hatha-Yoga, die moderne
            physiotherapeutische Grundsätze mit denen des traditionellen Yoga
            verbindet. Der Schwerpunkt liegt auf der Bewusstheit der Bewegung
            und dem Fluss des Atems. Gruppen 5-7
          </p>
          <div className="btnWrapper">
            <button className="btn" onClick={GoToKontakt}>
              KONTAKT
            </button>
          </div>
        </div>
      </div>
      {/* 2 */}
       <div
        className="grid-item"
        id="krankengym"
        style={{
          backgroundImage: `url(${krankGym})`,
        }}
      >
        <div className="content">
          <h5 className="title">Krankengymnastik</h5>
          <p className="description">
            Ziel: Schmerzen zu lindern, die Koordination, Ausdauer, Kraft und
            Beweglichkeit zu verbessern und die Lebensqualität des Patienten zu
            erhöhen. Du willst mehr Bewegung in deinen Alltag bringen und dich
            fitter und aktiver fühlen?
          </p>
          <div className="btnWrapper">
            <button className="btn" onClick={GoToKontakt}>
              KONTAKT
            </button>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div
        className="grid-item"
        id="pilates"
        style={{
          backgroundImage: `url(${pilates})`,
        }}
      >
        <div className="content">
          <h5 className="title">Pilates</h5>
          <p className="description">
            ein effektives und systematisches Ganzkörpertraining. Das Training
            fördert Kraft, Beweglichkeit, Koordination und Balance.
            Online-Fitnesskurse Du willst mehr Bewegung in deinen Alltag bringen
            und dich fitter und aktiver fühlen? Di/Do 13:00-14.00.
          </p>
          <div className="btnWrapper">
            <button className="btn" onClick={GoToKontakt}>
              KONTAKT
            </button>
          </div>
        </div>
      </div>
      {/* 4 */}
      <div
        className="grid-item"
        id="powerplate"
        style={{
          backgroundImage: `url(${power})`,
        }}
      >
        <div className="content">
          <h5 className="title">Power Plate Training</h5>
          <p className="description">
            Power Plate nutzt die Technologie, um bis zu 50 Mal pro Sekunde
            winzige Vibrationen durch Ihren Körper zu senden. Aktiviert mehr
            Muskeln, verbrennt mehr Kalorien, verbessert die Durchblutung und
            unterstützt die Muskelregeneration.
          </p>
          <div className="btnWrapper">
            <button className="btn" onClick={GoToKontakt}>
              KONTAKT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
