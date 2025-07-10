import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Leistungen from "./pages/Leistungen/Leistungen"

function App() {
  
  return (
    
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="leistungen" element={<Leistungen />} />
        </Route>
      </Routes>
     </BrowserRouter>
    
  )
}

export default App;
