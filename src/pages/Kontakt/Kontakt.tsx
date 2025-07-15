import { KontaktComponent, KontaktDescription, KontaktPicture, KontaktWrapper } from "./styles";
import kontaktPicture  from "../../assets/Kontakt/Kontakt.png";

function Kontakt () {

    return (
        <KontaktWrapper>
            <KontaktComponent>
                 <KontaktPicture src={kontaktPicture} alt=""></KontaktPicture>
                 <KontaktDescription>
             <h1 style={{marginBottom: '15px'}}>Kontakt</h1>
             <p>
                Unser Praxisteam freut sich auf Ihre Kontaktaufnahme.
                <p>Allgemeine Anfragen, Anregungen, Lob und Kritik nehmen wir gerne persönlich, 
                telefonisch oder per E-Mail entgegen.</p>
             </p>
             </KontaktDescription>
            </KontaktComponent>

            <div style={{marginTop: "80px"}}>
                    <div>
                      <h3>Kontakt</h3>
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
                    </div>
                    <div>
                      <h3>Öffnungszeiten:</h3>
                      <p>Mo-Do 07:30 bis 18:00 Uhr</p>
                      <p>Fr 07:30 bis 16:00 Uhr</p>
                    </div>
                  </div>

                  {/* Kontakt Formular */}

                  <div>
                    <h3>Kontaktformular</h3>
                    
                  </div>

           

        </KontaktWrapper>
    )
}

export default Kontakt;