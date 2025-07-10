import { HomePicture, HomeDescription, HomeWrapper, Title } from "./styles";
import Picture_1 from "../../assets/fizio.jpg";

function Home () {
    return (
        <HomeWrapper>
            <HomePicture src={Picture_1} alt="Physioter" />
            <HomeDescription>
            <Title> Herzlich willkommen!</Title>
            <p>Wir freuen uns, dass Sie Interesse an unserer Praxis zeigen.</p>
            </HomeDescription>
        </HomeWrapper>

        
    )
}

export default Home;