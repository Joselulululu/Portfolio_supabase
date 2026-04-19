import type { ITrabajo } from "../../Model/interfaces/ITrabajo";
import { JLLTrabajoDetalleEstile } from "./JLLTrabajoDetalleEstile";

interface Props {
    trabajo: ITrabajo;
}

export const JLLTrabajoDetalleMuestra = ({ trabajo }: Props) => {
    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="px-8 py-8 flex justify-between items-center border-b border-white/5 sticky top-0 bg-black/95 backdrop-blur-md z-50">
                <div className="text-[10px] font-black uppercase tracking-[0.4em]">
                    Detalle_Del_Trabajo
                </div>
                <div className="hidden md:block text-[9px] font-medium text-gray-600 uppercase tracking-[0.8em]">
                    Archivo_Digital_2026
                </div>
            </nav>

            <section className="max-w-7xl mx-auto px-8 pt-12 pb-32">
                <JLLTrabajoDetalleEstile item={trabajo} />
            </section>

            <footer className="py-20 flex flex-col items-center border-t border-white/5">
                <div className="h-24 w-[1px] bg-white/10 mb-8" />
                <p className="text-[9px] tracking-[0.4em] uppercase text-gray-700">
                    Vista Detallada del Portfolio
                </p>
            </footer>
        </div>
    );
};