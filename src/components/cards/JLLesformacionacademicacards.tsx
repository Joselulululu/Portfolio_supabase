import type { IFormacionAcademica } from "../../Model/interfaces/IFormacion_Academica";
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

interface Props {
    item: IFormacionAcademica;
}

export const JLLFormacionAcademicaEstile = ({ item }: Props) => {
    return (
        <article className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col h-full border border-gray-100 mx-auto w-full">
            <div className="h-2 w-full bg-gradient-to-r from-blue-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-purple-500 transition-all duration-500" />
            
            <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        < GraduationCap size={28} />
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-blue-500 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        {item.nivel.split(' ')[0]}
                    </span>
                </div>

                <div className="flex-grow pb-12">
                    <h2 className="text-xl md:text-2xl font-black text-gray-800 mb-2 leading-tight group-hover:text-blue-700 transition-colors">
                        {item.nivel}
                    </h2>
                    
                    <div className="flex items-start gap-2 text-indigo-600 font-bold text-sm mb-4">
                        <BookOpen size={16} className="mt-1 flex-shrink-0" />
                        <span className="leading-snug break-words">{item.centro}</span>
                    </div>

                    <div className="relative p-4 md:p-5 bg-gray-50 rounded-2xl border-l-4 border-blue-400 italic text-gray-600 text-sm leading-relaxed mb-6">
                        {item.descripcion}
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-gray-100 flex flex-row items-center justify-between gap-2">
                    <div className="flex items-center gap-1 md:gap-2 text-gray-400 shrink-0">
                        <Calendar size={16} />
                        <span className="text-[9px] font-black uppercase tracking-tighter">Certificado</span>
                    </div>
                    <span className="bg-gray-900 text-white text-[10px] md:text-xs font-black px-3 py-2 md:px-4 md:py-2 rounded-xl shadow-lg group-hover:bg-blue-600 transition-colors text-center whitespace-nowrap">
                        {item.fecha_inicio} — <br className="block sm:hidden" /> {item.fecha_fin}
                    </span>
                </div>
            </div>
        </article>  
    );
};