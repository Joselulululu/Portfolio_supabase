import { useParams, Link } from "react-router-dom";
import { Users } from 'lucide-react';
import misCaravanas from "../Model/data/autocaravanas.json"; 

export const JLLAutocaravanas = () => {
  const { tipo } = useParams();

  const caravanasFiltradas = misCaravanas.filter(
    (c: any) => c.tipo.toLowerCase() === tipo?.toLowerCase()
  );

  return (
    <div className="bg-[#0a0e1a] min-h-screen p-8 text-white">
      <h1 className="text-red-600 text-center text-sm font-bold uppercase mb-10 tracking-widest">
        Autocaravanas {tipo}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {caravanasFiltradas.map((item: any) => (
          <div key={item.cod} className="bg-white rounded-2xl overflow-hidden flex flex-col shadow-lg text-black">
            <div className="p-4 bg-gray-50 flex justify-center items-center">
              <img src={item.imagenes[0]} alt={item.modelo} className="w-full h-48 object-contain" />
            </div>

            <div className="p-5 flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h2 className="font-bold text-gray-800 text-lg uppercase">{item.modelo}</h2>
                <span className="bg-[#1e3a8a] text-white text-[10px] px-3 py-1 rounded font-bold uppercase">{item.marca}</span>
              </div>

              <div className="bg-[#fff9f6] rounded-xl p-3 flex border border-orange-100 mb-4">
                <div className="w-1/3 flex flex-col items-center justify-center border-r border-orange-200">
                  <Users size={20} className="text-gray-400 mb-1" />
                  <span className="font-bold text-gray-700">{item.personas}</span>
                </div>
                <div className="w-2/3 pl-4 text-[13px] text-gray-600">
                  <p>Longitud: <span className="font-semibold">{item.medidas.longitud}m</span></p>
                  <p>Anchura: <span className="font-semibold">{item.medidas.anchura}m</span></p>
                  <p>Altura: <span className="font-semibold">{item.medidas.altura}m</span></p>
                </div>
              </div>

              <div className="bg-[#fef9c3] rounded-full py-2 text-center mb-5 border border-yellow-200">
                <span className="text-xl font-bold text-gray-900">{item.precio_eur.toLocaleString()} €</span>
              </div>

              <Link 
                to={`/autocaravana/${item.cod}`}
                className="w-full bg-black text-white py-3 rounded-xl font-bold uppercase text-sm text-center block hover:bg-gray-800 transition-colors"
              >
                Ver Detalles
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};