import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../components/layout/JLLmainlayout";
import { Home } from "../pages/JLLhome";
import JLLTrabajosPage from "../pages/JLLTrabajos";
// import { JLLTrabajosDetalles } from "../pages/JLLTrabajosDetalles";
import  JLLServicio  from "../pages/JLLServicio";
import JLLFormacion from "../pages/JLLFormacion";
import JLLFormacionAcademica from "../pages/JLLFormacionAcademica";
import  JLLContacto  from "../pages/JLLcontacto";

export default function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/trabajos" element={<JLLTrabajosPage />} />
          {/* <Route path="/trabajos/:id" element={<JLLTrabajosDetalles />} /> */}
          <Route path="/servicios" element={<JLLServicio />} />
          <Route path="/formacion" element={<JLLFormacion />} />
          <Route path="/formacion-academica" element={<JLLFormacionAcademica />} />
          <Route path="/contacto" element={<JLLContacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}