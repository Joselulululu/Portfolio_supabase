import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTrabajos } from "../Model/api/main/apitrabajos"; 
import { JLLTrabajoDetalleMuestra } from "../components/cards/JLLTrabajoDetalleMuestra";
import type { ITrabajo } from "../Model/interfaces/ITrabajo";

export const JLLTrabajosDetalles = () => {
    const { id } = useParams();
    const [trabajo, setTrabajo] = useState<ITrabajo | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTrabajos().then((data) => {
            if (data && id) {
                const encontrado = data.find(t => String(t.id) === String(id));
                setTrabajo(encontrado || null);
            }
            setLoading(false);
        });
    }, [id]);

    if (loading) return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <span className="text-blue-600 font-mono text-[10px] animate-pulse tracking-[1em]">LOADING_PROJECT...</span>
        </div>
    );

    if (!trabajo) return (
        <div className="min-h-screen bg-black flex items-center justify-center text-white">
            <p className="font-mono text-xs uppercase tracking-widest">Project Not Found</p>
        </div>
    );

    return <JLLTrabajoDetalleMuestra trabajo={trabajo} />;
};