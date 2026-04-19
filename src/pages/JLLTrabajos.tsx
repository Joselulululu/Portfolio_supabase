import { useEffect, useState } from 'react';
import type { ITrabajo } from '../Model/interfaces/ITrabajo';
import { getTrabajos } from '../Model/api/main/apitrabajos';
import {JLLTrabajoMuestra} from '../components/cards/JLLTrabajoMuestra';

export default function JLLTrabajosPage() {
  const [items, setItems] = useState<ITrabajo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrabajos().then((data) => {
      setItems(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <span className="text-blue-500 text-sm font-mono animate-pulse">Cargando_Proyectos...</span>
      </div>
    );
  }

  return (
    <main className="bg-[#050505] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="h-[2px] w-12 bg-blue-600"></span>
          <h2 className="text-xl font-mono text-white tracking-[0.3em] uppercase">Proyectos_concluidos</h2>
        </div>
        
        <JLLTrabajoMuestra index={items} />
      </div>
    </main>
  );
}