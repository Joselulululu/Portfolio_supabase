import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/mainlayout/JLLmainlayout";
import {Home} from "./components/services/JLLhome";
/*import {Integrales} from "./components/services/JLLIntegrales";
import Perfiladas from "./components/services/JLLPerfiladas";*/
/*import Capuchinas from "./components/services/JLLcapuchinas";*/
import Contacto from "./components/services/JLLcontacto";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Integrales" element={<Integrales />} />
          <Route path="Perfiladas" element={<Perfiladas />} />
          <Route path="Capuchinas" element={<Capuchinas />} />
          
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}