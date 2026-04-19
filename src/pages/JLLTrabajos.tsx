import { useEffect, useState } from "react";
import { getTrabajos } from "../Model/api/main/apitrabajos";
import { JLLTrabajoEstile } from "../components/cards/JLLTrabajoEstile";
import type { ITrabajo } from "../Model/interfaces/ITrabajo";

const JLLTrabajosPage = () => {
    const [trabajos, setTrabajos] = useState<ITrabajo[]>([]);

    useEffect(() => {
        getTrabajos().then((data) => {
            if (data) setTrabajos(data);
        });
    }, []);

    return (
        <main className="bg-black min-h-screen w-full pt-24 pb-20 overflow-x-hidden">
            <header className="px-6 max-w-6xl mx-auto mb-16">
                <div className="flex items-center gap-4 mb-2">
                    <div className="h-[1px] w-8 bg-blue-600"></div>
                    <h1 className="text-[9px] font-black uppercase tracking-[0.6em] text-blue-600">
                        Proyectos_Recientes
                    </h1>
                </div>
                <p className="text-3xl md:text-5xl text-white font-serif italic opacity-20">
                    Indice de trabajos
                </p>
            </header>


            <div className="max-w-6xl mx-auto px-6">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {trabajos.map((trabajo) => (
                        <div key={trabajo.id} className="h-full">
                            <JLLTrabajoEstile item={trabajo} />
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
};

export default JLLTrabajosPage;