import type { IFormacionAcademica } from "../../Model/interfaces/IFormacion_Academica";
import { JLLFormacionAcademicaEstile } from "./JLLesformacionacademicacards";

interface Props {
    index: IFormacionAcademica[]; 
}

export const JLLFormacionAcademicaMuestra = ({ index }: Props) => {
    return (
        <div className="relative min-h-screen bg-[#0a0e1a] p-8 md:p-20 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                <header className="mb-16">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                        Formación Academica<span className="text-blue-500">.</span>
                    </h2>
                    <div className="h-2 w-32 bg-gradient-to-r from-blue-600 to-transparent mt-4 rounded-full" />
                </header>

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {index.map((card) => (
                        <JLLFormacionAcademicaEstile
                            key={card.id} 
                            item={card} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};