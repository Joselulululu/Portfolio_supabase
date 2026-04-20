import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layout/JLLmainlayout";
import { Home } from "../pages/JLLhome";
import JLLTrabajosPage from "../pages/JLLTrabajos";
import JLLServicio from "../pages/JLLServicio";
import JLLFormacion from "../pages/JLLFormacion";
import JLLFormacionAcademica from "../pages/JLLFormacionAcademica";
import JLLContacto from "../pages/JLLcontacto";
import { JLLServicioDetalle } from "../pages/JLLDetServicio";
import {JLLFormacionAcademicaDetalle} from "../pages/JLLDetForAcademica"

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/trabajos" element={<JLLTrabajosPage />} />
          <Route path="/servicios" element={<JLLServicio />} />
          
          <Route path="/servicio/:id" element={<JLLServicioDetalle />} />
          
          <Route path="/formacion" element={<JLLFormacion />} />
          <Route path="/formacion-academica" element={<JLLFormacionAcademica />} />
          <Route path="/formacion/:id" element={<JLLFormacionAcademicaDetalle />} />
          <Route path="/contacto" element={<JLLContacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}