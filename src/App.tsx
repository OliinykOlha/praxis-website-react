import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Leistungen from "./pages/Leistungen/Leistungen"
import UnserTeam from "./pages/UnserTeam/UnserTeam"
import Kontakt from "./pages/Kontakt/Kontakt"

function App() {
  
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="leistungen" element={<Leistungen />} />
          <Route path="team" element={<UnserTeam />} />
          <Route path="kontakt" element={<Kontakt />} />
        

        </Route>
      </Routes>
     </BrowserRouter>
    
  )
}

export default App;
