import { useParams, useNavigate } from "react-router-dom";
import { Users, ArrowLeft } from 'lucide-react';
import misCaravanas from "../data/autocaravanas.json"; 

export const JLLAutocaravanaDetalle = () => {
  const { cod } = useParams();
  const navigate = useNavigate();

  const auto = misCaravanas.find((c: any) => c.cod === Number(cod));

  if (!auto) return <div className="text-white p-20 text-center">No encontrado</div>;

  return (
    <div className="bg-[#0a0e1a] min-h-screen p-8 flex justify-center text-black">
      <div className="bg-white rounded-3xl p-8 max-w-4xl w-full shadow-2xl">
        <img src={auto.imagenes[0]} className="w-full rounded-2xl mb-6 shadow-md" />
        <h1 className="text-3xl font-bold mb-6">{auto.modelo}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-yellow-100 p-6 rounded-2xl flex flex-col items-center">
            <Users size={32} className="mb-2 text-gray-600" />
            <span className="text-2xl font-bold">{auto.personas}</span>
          </div>
          <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
            <p>L: <span className="font-bold">{auto.medidas.longitud}m</span></p>
            <p>A: <span className="font-bold">{auto.medidas.anchura}m</span></p>
            <p>H: <span className="font-bold">{auto.medidas.altura}m</span></p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl flex items-center justify-center text-2xl font-bold text-blue-900">
            {auto.precio_eur.toLocaleString()} €
          </div>
        </div>

        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-400 hover:text-black font-bold text-xs uppercase">
          <ArrowLeft size={16} /> Volver
        </button>
      </div>
    </div>
  );
};