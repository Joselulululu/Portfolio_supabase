import { useNavigate } from "react-router-dom";

interface Props {
    index: any;
}

export const JLLdetEstile = ({ index }: Props) => {
    const navigate = useNavigate();

    return (
        <article className="mt-20 bg-white rounded-xl overflow-hidden w-300 shadow-md text-black p-4  mx-auto">
            <div className="flex justify-center mb-4 ">
                <img 
                    src={index.imagenes?.[0]} 
                    alt={index.modelo} 
                    className=" w-300 h-100 mt-20 object-contain" 
                />
            </div>

            <h2 className="text-left text-sm font-medium mb-2 uppercase">
                {index.marca} {index.modelo}
            </h2>

            <div className="flex gap-1 mb-4 text-[11px]">
                <div className="bg-[#fff9c4] p-7 w-1/4 rounded-sm text-xl flex flex-col justify-center items-center border border-yellow-100">
                    <span className="block text-lg">USUARIOS</span>
                    <span>{index.personas}</span>
                </div>
                
                <div className="bg-[#fce4ec] p-10 text-xl flex-grow rounded-sm text-gray-600 border border-pink-100">
                    <p>Longitud: {index.medidas?.longitud}</p>
                    <p>Anchura: {index.medidas?.anchura}</p>
                    <p>Altura: {index.medidas?.altura}</p>
                </div>

                <div className="bg-[#fff9c4] p-2 w-1/3 rounded-sm flex items-center justify-center border border-yellow-100">
                    <span className="text-blue-900 font-bold text-xl">
                        {index.precio_eur} €
                    </span>
                </div>
            </div>



            <button 
                onClick={() => navigate(-1)}
                className="block w-full bg-black text-white text-center py-3 rounded-lg font-bold text-sm uppercase"
            >
                Volver al listado
            </button>
        </article>
    );
};