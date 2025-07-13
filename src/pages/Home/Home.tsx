import {
  HomePicture,
  HomeDescription,
  HomeWrapper,
  Title,
  TwoColumnSection,
  KontaktSection,
} from "./styles";
import picture_1 from "../../assets/fizio.jpg";
import picture_2 from "../../assets/fizio2.jpg";
import picture_3 from "../../assets/leistungen.jpg";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { AddressMap } from "../../components/AdressMap/AddressMap";

function Home() {
  const navigate = useNavigate();

  const goToUnserTeam = () => {
    navigate("/team");
  };

  const goToLeistungenPage = () => {
    navigate("/leistungen")
  }

  return (
    <>
      <HomeWrapper>
        <HomePicture src={picture_1} alt="Physioter" primary />
        <HomeDescription primary>
          <Title> Herzlich willkommen!</Title>
          <p>Wir freuen uns, dass Sie Interesse an unserer Praxis zeigen.</p>
        </HomeDescription>
      </HomeWrapper>

      <TwoColumnSection>
        <div>
          <Title>
            Phsiotherapie im Herzen <br />
            der Hamburger Westseite
          </Title>
          <p style={{ marginTop: "15px" }}>
            Unsere helle und moderne Praxis befindet sich in einem ruhigen,
            grünen Stadtteil im Westen Hamburgs. Die naturnahe Umgebung schafft
            eine angenehme Atmosphäre, die zur Entspannung und Regeneration
            beiträgt. In dieser freundlichen Lage empfängt Sie unser engagiertes
            Team mit viel Fachkompetenz und persönlichem Engagement – für Ihre
            Gesundheit und Ihr Wohlbefinden
          </p>
          <Button name="UNSER TEAM" onClick={goToUnserTeam} />
        </div>

        <HomePicture src={picture_2} alt="Physioter" />
      </TwoColumnSection>
      <TwoColumnSection isBackground>
        <KontaktSection>
          <Title>Kontakt</Title>
          <p>
            <strong>Tel. </strong>{" "}
            <span style={{ textDecoration: "underline" }}> 000 33600</span>
          </p>
          <p>
            <strong>E-Mail: </strong>
            <span style={{ textDecoration: "underline" }}>
              info@physioteam-west.de
            </span>
          </p>
        </KontaktSection>
        <KontaktSection>
          <Title>Öffnungszeiten:</Title>
          <p>Mo-Do 07:30 bis 18:00 Uhr</p>
          <p>Fr 07:30 bis 16:00 Uhr</p>
        </KontaktSection>
      </TwoColumnSection>

      <AddressMap />

      <TwoColumnSection isBorderBottom>
        <div>
          <Title>Wir bieten ein breites Spektrum Behandlungen an</Title>
          <p>
            Zur Verbesserung der Beweglichkeit, Schmerzlinderung und Erhaltung
            der Gesundheit des Bewegungsapparates stehen Ihnen Physiotherapie,
            manuelle Therapie, manuelle Lymphdrainage, medizinische Massage und
            Gerätephysiotherapie zur Verfügung.
          </p>
          <Button name="MEHR ERFAHREN" onClick={goToLeistungenPage}/>
        </div>
         <HomePicture src={picture_3} alt="Leistungen"/>
      </TwoColumnSection>
    </>
  );
}

export default Home;
