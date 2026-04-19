import { useEffect, useState } from 'react';
import type { IFormacion } from '../Model/interfaces/IFormacion'; 
import { getFormacion } from '../Model/api/main/apiformacion'; 
import { JLLFormacionMuestra } from '../components/cards/JLLFormacionMuestra';

export default function JLLFormacion() {
  const [items, setItems] = useState<IFormacion[]>([]);

  useEffect(() => {
    getFormacion().then((data) => {
      if (data) setItems(data);
    });
  }, []);

  return (
    <main className="bg-black min-h-screen w-full pt-16">
      {items.length > 0 ? (
        <JLLFormacionMuestra index={items} />
      ) : (
        <div className="h-screen w-full flex items-center justify-center bg-black">
             <span className="text-blue-600 font-mono text-xs tracking-[1em] animate-pulse">
                LOADING...
             </span>
        </div>
      )}
    </main>
  );
}