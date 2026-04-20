import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import  {getFormacionAcademicaById}  from '../Model/api/main/apiDetForAcademica';
import { JLLFormacionAcademicaDetalleCard } from '../components/cards/JLLDetForAcademica';
import type { IFormacionAcademica } from '../Model/interfaces/IFormacion_Academica'

export const JLLFormacionAcademicaDetalle = () => {
    const { id } = useParams();
    const [dato, setDato] = useState<IFormacionAcademica | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            getFormacionAcademicaById(id).then(res => {
                setDato(res);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center text-white font-mono text-[10px] uppercase tracking-[0.5em]">
            Accediendo_A_Expediente...
        </div>
    );

    if (!dato) return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white p-6">
            <p className="mb-4 font-black uppercase tracking-widest text-red-500">Registro no localizado</p>
            <Link to="/formacion" className="text-blue-500 underline uppercase text-xs">Volver al Historial</Link>
        </div>
    );

    return (
        <main className="min-h-screen bg-[#050505] pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto mb-16">
                <Link to="/formacion-academica" className="inline-flex items-center gap-3 text-gray-500 hover:text-blue-500 transition-all group">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    <span className="uppercase text-[10px] font-black tracking-[0.4em]">Regresar</span>
                </Link>
            </div>
            <JLLFormacionAcademicaDetalleCard item={dato} />
        </main>
    );
};