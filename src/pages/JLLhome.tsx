import { ArrowRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6 relative overflow-hidden font-sans">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 blur-[120px] rounded-full" />

      <div className="max-w-7xl w-full z-10 py-24 md:py-32">
        <header className="space-y-12">
          <div className="flex items-center gap-6">
            <div className="h-[2px] w-16 bg-blue-500"></div>
            <span className="text-sm tracking-[0.6em] uppercase text-blue-500 font-bold">
              Administrador de sistemas / ASIR
            </span>
          </div>

          <h1 className="text-[14vw] md:text-[10vw] lg:text-[11vw] font-serif italic leading-[0.85] tracking-tighter">
            Jose Luis <br /> 
            <span className="text-gray-500">López</span><span className="text-blue-600">.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-16 mt-24">
            <p className="text-2xl md:text-3xl lg:text-3xl text-gray-300 font-light leading-relaxed max-w-2xl">
              Especializándome en la arquitectura de <span className="text-white italic">sistemas y redes</span>. 
              Transformando infraestructuras complejas en soluciones eficientes y seguras.
            </p>
            
            <div className="flex flex-col justify-between items-start md:items-end md:text-right gap-12">
              <div className="border-l-2 md:border-r-2 md:border-l-0 border-white/10 pl-10 md:pl-0 md:pr-10 space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-medium">Estado Actual</p>
                <p className="text-xl font-mono text-blue-400">1º ASIR - Aprendizaje Activo 2026_</p>
              </div>

              <a href="/trabajos" className="group flex items-center gap-4 text-gray-400 hover:text-white transition-colors">
                <span className="text-sm uppercase tracking-widest font-medium">Explorar Proyectos</span>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </a>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};