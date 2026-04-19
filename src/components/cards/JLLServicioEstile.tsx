import { Terminal } from 'lucide-react';
import type { IServicio } from "../../Model/interfaces/IServicio";

interface Props {
    item: IServicio;
    index: number;
}

export const JLLServicioEstile = ({ item, index }: Props) => {
    return (
        <article className="group relative bg-[#141414] rounded-none border border-white/5 p-8 flex flex-col h-full transition-all duration-500 hover:border-orange-500/40 overflow-hidden">
            <span className="absolute top-4 right-6 text-7xl font-black text-white/[0.02] italic group-hover:text-orange-500/[0.05] transition-colors">
                0{index + 1}
            </span>

            <div className="relative z-10 flex-grow">
                <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-orange-400 transition-colors">
                    {item.servicio}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-orange-500/20 pl-4">
                    {item.descripcion}
                </p>

                <div className="space-y-3">
                    {item.detalles?.map((detalle, i) => (
                        <div key={i} className="flex items-center gap-3 text-[10px] font-bold text-gray-500 uppercase tracking-[0.15em]">
                            <div className="h-1 w-1 bg-orange-600 rounded-full shadow-[0_0_5px_rgba(249,115,22,0.5)]" />
                            {detalle}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-10 -mx-8 -mb-8 bg-black p-6 border-t border-white/5 flex items-center justify-between transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center gap-4">
                    <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em]">
                       ¿Te gusta lo que ves?
                    </span>
                    <Terminal size={16} className="text-orange-500 animate-pulse" />
                </div>
                <div className="text-white/10 font-mono text-[9px] uppercase tracking-widest hidden md:block">
                    Status: Online
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[15px] border-r-[15px] border-b-transparent border-r-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </article>
    );
};