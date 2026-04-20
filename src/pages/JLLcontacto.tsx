import React, { useEffect, useState } from 'react';
import { Mail, Phone, Share2, Download, FileText } from 'lucide-react';
import { JLLRedesMuestra } from '../components/cards/JLLRedesMuestra';
import { getRedes } from '../Model/api/main/apiredes';
import type { IRedes } from '../Model/interfaces/IRedes';

interface NavLink {
  name: string;
  id: string;
}

const Contacto: React.FC = () => {
  const [redesData, setRedesData] = useState<IRedes[]>([]);

  useEffect(() => {
    getRedes().then((data) => {
      if (data) {
        setRedesData(data);
      }
    });
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks: NavLink[] = [
    { name: 'Ubicación', id: 'ubicacion' },
    { name: 'Redes Sociales', id: 'redes' },
    { name: 'Información', id: 'informacion' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      <nav className="sticky top-0 bg-black/90 backdrop-blur-md py-6 border-b border-white/5 z-50">
        <ul className="flex justify-center gap-6 md:gap-12 px-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-[9px] md:text-[10px] text-gray-400 hover:text-blue-500 uppercase font-black tracking-[0.2em] md:tracking-[0.3em] transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-5xl md:text-8xl font-serif italic text-white leading-none">
            Contacto<span className="text-blue-600">.</span>
          </h1>
          <p className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] text-gray-500 uppercase mt-4">Disponible para nuevos proyectos</p>
          
          <div className="mt-10">
            <a 
              href="/Curriculum Jose_Luis_Lopez_Fuentes.pdf" 
              download="Curriculum_Jose_Luis_Lopez.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all group shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Descargar Curriculum Jose Luis Lopez Fuentes</span>
            </a>
          </div>
        </div>

        <div id="informacion" className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
          <a 
            href="mailto:JoseLuisaajc@gmail.com"
            className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl flex flex-col justify-center group hover:border-blue-500/50 transition-colors cursor-pointer overflow-hidden"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 bg-blue-600/10 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Email</p>
                <p className="text-base font-medium break-all leading-tight">JoseLuisaajc@gmail.com</p>
              </div>
            </div>
          </a>

          <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl flex flex-col justify-center">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 bg-blue-600/10 rounded-lg text-blue-500">
                <Phone size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Teléfono</p>
                <p className="text-lg font-medium">722 23 99 19</p>
              </div>
            </div>
          </div>

          <a 
            href="/Curriculum Jose_Luis_Lopez_Fuentes.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-2xl flex flex-col justify-center group hover:border-blue-500/50 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 p-3 bg-blue-600/10 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <FileText size={24} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-bold">Currículum</p>
                <p className="text-lg font-medium">Visualizar PDF</p>
              </div>
            </div>
          </a>
        </div>

        <div id="ubicacion" className="mb-24 md:mb-32">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Localización</span>
            <div className="h-[1px] flex-grow bg-white/5" />
          </div>
          <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-white/10 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12734.400583764835!2d-1.9547514!3d37.3051016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1713600000000!5m2!1ses!2ses" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div id="redes" className="pb-20">
          <div className="flex items-center gap-4 mb-12">
            <Share2 className="text-blue-600" size={16} />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Redes_Digitales</span>
            <div className="h-[1px] flex-grow bg-white/5" />
          </div>
          <JLLRedesMuestra index={redesData} /> 
        </div>
      </section>

      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-[9px] tracking-[0.4em] md:tracking-[0.8em] text-gray-600 uppercase">José Luis López — 2026</p>
      </footer>
    </div>
  );
};

export default Contacto;