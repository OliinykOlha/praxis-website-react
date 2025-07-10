import Header from "../Header/Header";
import { Footer, LayoutComponent, Main } from "./styles";
import { Outlet } from "react-router-dom";

function Layout () {
return (
    <LayoutComponent>
       <Header /> 
       <Main><Outlet /></Main>
       <Footer>
      
       </Footer>
    </LayoutComponent>
)
}

export default Layout;