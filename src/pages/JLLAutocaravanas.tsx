import { useParams } from "react-router-dom";
import miscaravanas from "../Model/data/autocaravanas.json";
import { JJMuestra } from "../components/cards/JLLmuAutocaravanas";

export default function JLLAutocaravana() {
  const tipo = useParams();

  const autocaravanas = (miscaravanas as any[]).filter(
    (auto: any) => auto.tipo == tipo.tipo
  );
  /*Como vemos aqui, esta etiqueta hacemos que la constante autocaravanas, sea igual a mis caravanas
  que lo determina como cualquiera en un filtro, creando un tipo.tipo, esto, para permitir que un array sin imagen
  no de error, mas abajo especificamos autocaravanas como cuaqlueira, por si ocurre un error (que me ocurrio)
  en el autocaravanas*/


  return (
    <section className="text-center bg-gray-900 text-red-700 py-5 mt-30 min-h-screen">
      <div>
        <JJMuestra index={autocaravanas as any} />
      </div>
    </section>
  );
}