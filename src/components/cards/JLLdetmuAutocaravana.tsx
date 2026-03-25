import { JLLdetEstile } from "./JLLdetAutocaravanas";

interface Props {
    index: any; 
}

export const JLLdetMuestra = ({ index }: Props) => {
    return (
        <div className="p-20 bg-[#0a0e1a] min-h-screen flex justify-center">
            <JLLdetEstile index={index} />
        </div>
    );
};