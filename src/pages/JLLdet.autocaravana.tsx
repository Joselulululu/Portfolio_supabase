import { useParams } from "react-router-dom";
import miscaravanas from "../Model/data/autocaravanas.json";
import { JLLdetMuestra } from "../components/cards/JLLdetmuAutocaravana";

export default function JLLdetAutocaravana() {
  const { cod } = useParams();
  const CODencontrado = (miscaravanas as any).find((a: any) => a.cod == cod);
  /*  Como podemos ver aqui este cidgo llama a miscaravanas, el cual es perteneciente a una card
  esto trata de encontrar el cod, en caso del profesor, el hace === en mi caso ==, ya que declaro
  a.cod, sabiendo que si encuentra el cod mostrara en pantalla si con exito se encontro
  la pagina o no se encontro */

  return (
    <div className="bg-[#0a0e1a] min-h-screen pt-20">
      <JLLdetMuestra index={CODencontrado} />
    </div>
  );
}