import { useState } from "react";
import {
  LeistungComponent,
  LeistungDescription,
  LeistungenComponent,
  LeistungenWrapper,
  MainTitle,
} from "./styles";
import { leistungen } from "./data";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Leistungen() {
  const [isActive, setIsActive] = useState<number | null>(null);
  const navigate = useNavigate();

  const showDescription = (index: number) => {
    setIsActive(isActive === index ? null : index);
  };

  const GoToKontakt = () => {
    navigate('/kontakt')
  }
  
  return (
    <LeistungenWrapper>
      <LeistungenComponent>
        <MainTitle>Physiotherapie - Leistungen</MainTitle>
        <p>Bei uns können Sie folgende Leistungen in Anspruch nehmen: </p>
      </LeistungenComponent>

      
        {leistungen.map(({ title, content }, index) => {
          return (
            <LeistungComponent
              key={index}
              onClick={() => showDescription(index)}
            >
              <h3>{title}</h3>
              <span
                style={{
                  display: 'inline-block',
                  fontSize: "18px",
                  transform:
                    isActive === index ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
               ▾
              </span>
              {isActive === index && (
                <LeistungDescription>{content}</LeistungDescription>
              )}
            </LeistungComponent>
          );
        })}
      <LeistungenComponent>
        <MainTitle>Vereinbaren Sie Ihren Termin</MainTitle>
        <Button name="KONTAKT" onClick={GoToKontakt} />
      </LeistungenComponent>
    </LeistungenWrapper>
  );
}

export default Leistungen;
