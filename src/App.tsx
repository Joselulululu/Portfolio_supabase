import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/mainlayout/JLLmainlayout";
import { Home } from "./components/services/JLLhome";
import { Autocaravanas } from "./components/services/JLLIntegrales";
import Contacto from "./components/services/JLLcontacto";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          
          <Route 
            path="/autocaravanas/:tipo" 
            element={<Autocaravanas />} 
          />
          
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}