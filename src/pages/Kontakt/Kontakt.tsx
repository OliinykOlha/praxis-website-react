import {
  KontaktComponent,
  KontaktDescription,
  KontaktPicture,
  KontaktSection,
  KontaktWrapper,
  TwoColumnSection,
} from "./styles";
import kontaktPicture from "../../assets/Kontakt/Kontakt.png";
import KontaktForm from "../../components/KontaktForm/KontaktForm";

function Kontakt() {
  return (
    <KontaktWrapper>
      <KontaktComponent>
        <KontaktPicture src={kontaktPicture} alt=""></KontaktPicture>
        <KontaktDescription>
          <h1 style={{ marginBottom: "15px" }}>Kontakt</h1>
          <p>
            Unser Praxisteam freut sich auf Ihre Kontaktaufnahme.
            </p>
            <p>
              Allgemeine Anfragen, Anregungen, Lob und Kritik nehmen wir gerne
              persönlich, telefonisch oder per E-Mail entgegen.
            </p>
          
        </KontaktDescription>
      </KontaktComponent>

     <TwoColumnSection >
             <KontaktSection >
               <h4>Kontakt</h4>
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
               <h4>Öffnungszeiten:</h4>
               <p>Mo-Do 07:30 bis 18:00 Uhr</p>
               <p>Fr 07:30 bis 16:00 Uhr</p>
             </KontaktSection>
           </TwoColumnSection>

      <div>
        <KontaktForm />
      </div>
    </KontaktWrapper>
  );
}

export default Kontakt;
