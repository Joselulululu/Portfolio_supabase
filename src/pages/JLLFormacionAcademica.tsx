import { useEffect, useState } from 'react';
import type { IFormacionAcademica } from '../Model/interfaces/IFormacion_Academica';
import { getFormacion } from '../Model/api/main/apiFormacionAcademica';
import { JLLFormacionAcademicaMuestra } from '../components/cards/JLLmuformacionacademicacard';

export default function FormacionPage() {
  const [items, setItems] = useState<IFormacionAcademica[]>([]);

  useEffect(() => {
    getFormacion().then(data => setItems(data));
  }, []);

  return (
    <main>
      <JLLFormacionAcademicaMuestra index={items} />
    </main>
  );
}