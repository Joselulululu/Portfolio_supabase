import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/mainlayout/JLLmainlayout";
import { Home } from "../pages/JLLhome";
import { JLLAutocaravanas } from "../components/Autocaravanas/JLLAutocaravanas";
import Contacto from "../pages/JLLcontacto";
import { JLLAutocaravanaDetalle } from "../components/Autocaravanas/JLLdet.autocaravana";

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          
          <Route path="/autocaravanas/:tipo" element={<JLLAutocaravanas />} />
          
          <Route path="/autocaravana/:cod" element={<JLLAutocaravanaDetalle />} />
          
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}