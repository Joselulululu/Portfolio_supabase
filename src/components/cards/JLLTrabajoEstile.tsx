import { ArrowRight } from 'lucide-react';
import type { ITrabajo } from "../../Model/interfaces/ITrabajo";

interface Props {
    item: ITrabajo;
}

export const JLLTrabajoEstile = ({ item }: Props) => {
    if (!item) return null;

    return (
        <article className="group relative bg-[#080808] flex flex-col transition-all duration-500 hover:bg-[#0c0c0c] border border-white/5 overflow-hidden">
            <div className="relative w-full aspect-video overflow-hidden">
                <img 
                    src={item.author.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 opacity-40 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3">
                    <span className="text-white font-mono text-[7px] uppercase tracking-widest bg-blue-600/80 backdrop-blur-sm px-2 py-0.5">
                        {item.category.title}
                    </span>
                </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h2 className="text-lg sm:text-xl font-serif italic text-white leading-tight mb-3 tracking-tight group-hover:text-blue-500 transition-colors">
                    {item.title}
                </h2>

                <p className="text-gray-500 text-[11px] sm:text-xs font-light leading-relaxed mb-6 line-clamp-2 opacity-80">
                    {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-3 text-[8px] font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                        <span>Detalles</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                    <span className="text-[7px] font-mono text-gray-700 uppercase tracking-tighter">
                        {item.date}
                    </span>
                </div>
            </div>
        </article>
    );
};