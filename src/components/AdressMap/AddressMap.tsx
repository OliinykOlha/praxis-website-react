import Button from "../Button/Button";
import { AddressSection, InfoContainer, MapContainer } from "./styles";

export const AddressMap = () => {
 const handleOpenMap = () => {
window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4737.819149429969!2d9.866697893101154!3d53.577230409572685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1843af2e9e0dd%3A0xa48c85a0169fd63c!2sLise-Meitner-Park%2C%2022607%20Hamburg!5e0!3m2!1suk!2sde!4v1752420041174!5m2!1suk!2sde');
 }

  return (
    <AddressSection>
      <InfoContainer>
        <h2>Adresse & Anfahrt</h2>
        <p>Friedenstraße 30 X</p>
        <p>55530 Hamburg</p>
        <Button name="GOOGLE MAP ÖFFNEN" onClick={handleOpenMap} />
      </InfoContainer>
    
       <MapContainer>
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4737.819149429969!2d9.866697893101154!3d53.577230409572685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1843af2e9e0dd%3A0xa48c85a0169fd63c!2sLise-Meitner-Park%2C%2022607%20Hamburg!5e0!3m2!1suk!2sde!4v1752418903122!5m2!1suk!2sde"
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </MapContainer>
      
    </AddressSection>
  );
};
