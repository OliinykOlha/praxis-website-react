import { HomePicture, HomeDescription, HomeWrapper, Title, TwoColumnSection } from "./styles";
import picture_1  from "../../assets/fizio.jpg";
import picture_2 from "../../assets/fizio2.jpg";
import Button from "../../components/Button/Button";

function Home () {
    return (
        <>
        <HomeWrapper>
            <HomePicture src={picture_1} alt="Physioter" primary/>
            <HomeDescription primary>
            <Title> Herzlich willkommen!</Title>
            <p>Wir freuen uns, dass Sie Interesse an unserer Praxis zeigen.</p>
            </HomeDescription>
             </HomeWrapper>
             
             <TwoColumnSection>
               <div> 
              <Title>Phsiotherapie im Herzen <br />der Hamburger Westseite</Title>  
              <p style={{marginTop: '15px'}}>
               Unsere helle und moderne Praxis befindet sich in einem ruhigen, grünen Stadtteil im Westen 
               Hamburgs. Die naturnahe Umgebung schafft eine angenehme Atmosphäre, die zur Entspannung und
             Regeneration beiträgt. In dieser freundlichen Lage empfängt Sie unser engagiertes Team mit
              viel Fachkompetenz und persönlichem Engagement – für Ihre Gesundheit und Ihr Wohlbefinden
              </p>
              <Button name="UNSER TEAM" />
              </div>
              
             <HomePicture src={picture_2} alt="Physioter" />
             </TwoColumnSection>
             
</>
            
       

        
    )
}

export default Home;