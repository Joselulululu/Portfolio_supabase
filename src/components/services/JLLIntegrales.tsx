import type { Autocaravana } from "../interfaces/Autocaravana";
import { Users } from 'lucide-react';
import datos from "../data/autocaravanas.json"; 

export const Integrales = () => {
  const caravanasFiltradas = datos.filter((c: any) => c.tipo === "Integrales");

  return (
    <div className="bg-[#0a0e1a] min-h-screen p-8 text-white">
      <h1 className="text-red-600 text-center font-bold uppercase mb-10 tracking-widest">
        Autocaravanas Integrales
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {caravanasFiltradas.map((item: any) => (
          <div key={item.cod} className="bg-white rounded-2xl overflow-hidden shadow-lg text-black">
            <div className="p-4 bg-gray-50 flex justify-center">
              <img src={item.imagenes[0]} alt={item.modelo} className="h-48 object-contain" />
            </div>
            <div className="p-5">
              <h2 className="font-bold text-lg uppercase">{item.modelo}</h2>
              <div className="bg-orange-50 p-3 my-4 rounded-xl flex justify-between text-sm">
                <span>📏 {item.medidas.longitud}m</span>
                <span>👥 {item.personas}</span>
              </div>
              <div className="bg-yellow-100 py-2 text-center font-bold text-xl rounded-full">
                {item.precio_eur.toLocaleString()} €
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};