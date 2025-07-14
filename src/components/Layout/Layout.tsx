import Header from "../Header/Header";
import { Footer, LayoutComponent, Main } from "./styles";
import { Outlet } from "react-router-dom";

function Layout () {
return (
    <LayoutComponent>
       <Header /> 
       <Main><Outlet /></Main>
       <Footer>
       <p>Diese Website dient nur zu Präsentationszwecken</p>
       </Footer>
    </LayoutComponent>
)
}

export default Layout;