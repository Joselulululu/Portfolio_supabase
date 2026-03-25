import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layout/JLLmainlayout";
import { Home } from "../pages/JLLhome";
import { JLLAutocaravanas } from "../pages/JLLAutocaravanas";
import Contacto from "../pages/JLLcontacto";
import { JLLAutocaravanaDetalle } from "../pages/JLLdet.autocaravana";

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