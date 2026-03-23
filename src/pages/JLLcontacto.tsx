import React from 'react';

interface NavLink {
  name: string;
  id: string;
}

const Contacto: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks: NavLink[] = [
    { name: 'Ubicación', id: 'ubicacion' },
    { name: 'Redes Sociales', id: 'redes' },
    { name: 'Dirección', id: 'direccion' },
    { name: 'Presupuesto', id: 'presupuesto' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
        <nav className="sticky top-0 bg-[#111827]/90 py-4 z-50">
            <ul className="flex justify-center gap-8">
            {navLinks.map((link) => (
                <li key={link.id}>
                <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-red-500 hover:text-red-400 uppercase text-sm font-bold"
                >
                    {link.name}
                </button>
                </li>
            ))}
            </ul>
        </nav>

        <nav className='w-full h-40 border bg-white flex items-center px-4 mt-10'>
          <a href="#" className='text-blue-600 hover:text-blue-800 font-medium'>
            Mapa de Ubicacion
          </a>
        </nav>

        <div id="ubicacion" ><h2></h2></div>

        <nav className='w-full h-40 border bg-white flex items-center px-4 mt-10'>
          <a href="#" className='text-blue-600 hover:text-blue-800 font-medium'>
            Mapa de Ubicacion
          </a>
        </nav>


    </div>
  );
};

export default Contacto;