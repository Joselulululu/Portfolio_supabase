import React, { useEffect, useState } from 'react';
import { JLLServicioEstile } from '../components/cards/JLLServicioEstile';
import { getServicios } from '../Model/api/main/apiservicio';
import type { IServicio } from '../Model/interfaces/IServicio';

export default function JLLServicios() {
  const [servicios, setServicios] = useState<IServicio[]>([]);

  useEffect(() => {
    getServicios().then((data) => {
      if (data) setServicios(data);
    });
  }, []);

  return (
    <main className="bg-black min-h-screen w-full pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        

        <div className="mb-12">
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter mt-2">
            Servicios<span className="text-blue-600">.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {servicios.map((item, index) => (
            <JLLServicioEstile key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}