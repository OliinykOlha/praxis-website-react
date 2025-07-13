import Carousel from "../../components/Carousel/Carousel";
import { Title } from "../Home/styles";
import { CarouselWrapper, UnserTeamWrapper, UnserTeamDescription, PhotoGrid, UnserTeamPicture } from "./styles";
import {unserTeamPhotos} from "./data";
import img from "../../assets/UnserTeamphotos/UTF8.jpg";
import Button from "../../components/Button/Button";

function UnserTeam() {

  
  return (
    <UnserTeamWrapper>
      <UnserTeamDescription>
        <Title> Physiotherapie für Ihre Anforderungen</Title>
        <p>
          Unser Team hochqualifizierter Therapeuten unterstützt Sie dabei, Ihre
          Gesundheitsziele zu erreichen und begleitet Sie auf dem Weg zu mehr
          Lebensqualität.
        </p>
      </UnserTeamDescription>
      <CarouselWrapper>
        <Carousel />
      </CarouselWrapper>
      <UnserTeamDescription>
        <Title>Unsere Praxis</Title>
        <p>
          <strong>Physio</strong>team-West ist seit vielen Jahren ein
          vertrauenswürdiger Partner für qualitativ hochwertige
          physiotherapeutische Behandlungen. In unserer hellen, modern
          eingerichteten Praxis erwartet Sie eine angenehme und entspannte
          Atmosphäre. Die Ausstattung ist auf Ihre Bedürfnisse abgestimmt, damit
          Sie sich während Ihrer Therapie rundum wohlfühlen können.
        </p>
        <p>
          Barrierefrei und rollstuhlgerecht.
        </p>
      </UnserTeamDescription>
      <PhotoGrid>
        {unserTeamPhotos.map((item) => (
          <img key={item.id} src={item.src} alt={item.alt} />
        ))}
      </PhotoGrid>

      <UnserTeamPicture>
        <img src={img} alt="TerminPicture" />
      <Button name="KONTAKT"/>
      
      </UnserTeamPicture>

    </UnserTeamWrapper>
  );
}

export default UnserTeam;
