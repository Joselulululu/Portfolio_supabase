import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link } from 'react-router-dom'

const opcionesMenu = [
  { nombre: 'Home', ruta: '/' },
  { nombre: 'Integrales', ruta: '/autocaravanas/Integrales' },
  { nombre: 'Perfiladas', ruta: '/autocaravanas/Perfiladas' },
  { nombre: 'Campers', ruta: '/autocaravanas/Campers ' },
  { nombre: 'Capuchinas', ruta: '/autocaravanas/Capuchinas ' },
  { nombre: 'Contacto', ruta: '/Contacto ' },


]

function Header1() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link to="/">
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <nav className="flex space-x-4">
                {opcionesMenu.map((item) => (
                  <Link
                    key={item.nombre}
                    to={item.ruta}
                    className="text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {item.nombre}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {opcionesMenu.map((item) => (
            <DisclosureButton
              key={item.nombre}
              as={Link}
              to={item.ruta}
              className="text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {item.nombre}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Header1