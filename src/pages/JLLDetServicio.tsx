import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getServicioById } from '../Model/api/main/apiDetServicio';
import { JLLServicioDetalleCard } from '../components/cards/JLLDetServicio';
import type { IServicio } from '../Model/interfaces/IServicio';

export const JLLServicioDetalle = () => {
    const { id } = useParams();
    const [servicio, setServicio] = useState<IServicio | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getServicioById(id).then(data => {
                setServicio(data);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-mono text-[10px] uppercase tracking-[0.5em]">
            Cargando_Configuracion...
        </div>
    );

    if (!servicio) return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white p-6">
            <p className="mb-4">Servicio no encontrado</p>
            <Link to="/servicios" className="text-blue-500 underline uppercase text-xs">Volver</Link>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto mb-16">
                <Link to="/servicios" className="inline-flex items-center gap-3 text-gray-500 hover:text-blue-500 transition-all group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase text-[10px] font-black tracking-[0.4em]">Volver Atras</span>
                </Link>
            </div>
            <JLLServicioDetalleCard item={servicio} />
        </main>
    );
};