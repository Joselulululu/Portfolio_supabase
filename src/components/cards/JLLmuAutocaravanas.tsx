import type { Autocaravana } from "../../Model/interfaces/JLLAutocaravana"
import { JLLEstile } from "./JLLAutocaravanas"

interface Props {
    index: Autocaravana[]; 
}

export const JJMuestra = ({ index }: Props) => {
    return (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-20 bg-[#0a0e1a] min-h-screen">
            {index.map((card) => (
                <JLLEstile
                    key={card.cod} 
                    index={card} 
                />
            ))}
        </div>
    );
};