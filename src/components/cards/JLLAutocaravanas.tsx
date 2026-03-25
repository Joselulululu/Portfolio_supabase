import { Link } from "react-router-dom";
import { Users } from 'lucide-react';

interface Props {
    index: any;
}

export const JLLEstile = ({ index }: Props) => {
    const imagenUrl = index.imagenes && index.imagenes.length > 0 
        ? index.imagenes[0] 
        : "https://via.placeholder.com/400x300?text=Sin+Imagen";

    return (
        <article className="bg-white rounded-2xl overflow-hidden shadow-lg text-black">
            <div className="p-4 bg-gray-50 flex justify-center items-center">

                <img src={imagenUrl} alt={index.modelo} className="w-full h-48 object-contain" />
            </div>

            <div className="p-5 flex-grow text-left">
                <header className="flex justify-between items-start mb-4">
                    <h2 className="font-bold text-gray-800 text-lg uppercase">{index.modelo}</h2>
                    <span className="bg-[#1e3a8a] text-white text-[10px] px-3 py-1 rounded font-bold uppercase">
                        {index.marca}
                    </span>
                </header>

                <div className="bg-[#fff9f6] rounded-xl p-3 flex border border-orange-100 mb-4">
                    <div className="w-1/3 flex flex-col items-center justify-center border-r border-orange-200">
                        <Users size={20} className="text-gray-400 mb-1" />
                        <span className="font-bold text-gray-700">{index.personas}</span>
                    </div>
                    <div className="w-2/3 pl-4 text-[13px] text-gray-600">
                        <p>Longitud: {index.longitud}m</p>
                        <p>Anchura: {index.anchura}m</p>
                        <p>Altura: {index.altura}m</p>
                    </div>
                </div>

                <div className="bg-[#fef9c3] rounded-full py-2 text-center mb-5">
                    <span className="text-xl font-bold text-gray-900">{index.precio_eur} €</span>
                </div>

                <Link to={`/autocaravana/${index.cod}`} className="w-full bg-black text-white py-3 rounded-xl font-bold text-center block">
                    Ver Detalles
                </Link>
            </div>
        </article>
    );
};