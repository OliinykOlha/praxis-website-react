import { HeaderComponent, Logo, LogoText, Nav, StyledNavLink, Tiker } from "./styles";
import logo from '../../assets/logo1.png';
import { Link } from "react-router-dom";

function Header () {
return (
     <HeaderComponent>
      <div style={{backgroundColor: '#473e40', height:"25 px", width: '100%'}}>
       <Tiker>
        Fürsorge ist unser Leidenschaft <span>(Nur eine Präsentationswebsite – kein echtes Angebot.) </span>  
        </Tiker>
         </div>
         <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <Link to='/'>
        <Logo src={logo} alt='Physioteam-West Logo' />
        </Link>
        <div>
          <Link to='/' style={{textDecoration: 'none', color: '#0a4b96'}}>
        <LogoText><strong>Physio</strong>team-West</LogoText>
        </Link>
        <p style={{display: 'flex', justifyContent: 'flex-end', fontFamily: "Dancing Script", fontWeight: 'bold', fontStyle: 'italic' }}>Hamburg</p>
        </div>
        </div>
        <Nav>
          <StyledNavLink to='/'>HOME</StyledNavLink>
          <StyledNavLink to='/leistungen'>LEISTUNGEN</StyledNavLink>
          <StyledNavLink to='/team'>TEAM</StyledNavLink>
          <StyledNavLink to='/kontakt'>KONTAKT</StyledNavLink>
        </Nav>
       </div>
      </HeaderComponent>
)
}

export default Header;
