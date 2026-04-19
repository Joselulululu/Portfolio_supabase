import type { ITrabajo } from "../../Model/interfaces/ITrabajo";

interface Props {
    item: ITrabajo;
}

export const JLLTrabajoDetalleEstile = ({ item }: Props) => {
    if (!item) return null;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start bg-black">
            <div className="lg:col-span-7">
                <div className="overflow-hidden bg-[#0a0a0a] border border-white/5 rounded-none shadow-2xl">
                    <img
                        src={item.author?.imageUrl}
                        alt={item.title}
                        className="w-full h-auto object-cover opacity-90 transition-opacity duration-700 hover:opacity-100"
                    />
                </div>
            </div>

            <div className="lg:col-span-5 flex flex-col pt-4 text-left">
                <div className="flex items-center gap-6 mb-10">
                    <span className="h-[2px] w-16 bg-blue-600" />
                    <span className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500">
                        {item.date}
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.85] mb-12 tracking-tighter">
                    {item.title}
                </h1>

                <p className="text-gray-400 text-xl leading-relaxed font-light mb-16 border-l-2 border-blue-600/30 pl-10">
                    {item.description}
                </p>

                <div className="mb-16">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8 block">
                        Technologies_Used
                    </span>
                    <div className="flex flex-wrap gap-4">
                        {item.tecnologia?.map((tech, i) => (
                            <span key={i} className="text-[9px] font-mono text-blue-400 border border-blue-400/20 px-5 py-2 uppercase tracking-widest bg-blue-400/5 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {item.category?.href && (
                    <a
                        href={item.category.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center bg-blue-600 text-white px-12 py-6 text-[10px] font-black uppercase tracking-[0.6em] hover:bg-white hover:text-black transition-all duration-500 w-fit"
                    >
                        Ejecutar_Proyecto
                    </a>
                )}
            </div>
        </div>
    );
};