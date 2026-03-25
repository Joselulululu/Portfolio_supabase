import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link } from 'react-router-dom'
import datah from "@/Model/data/tipos.json"



function Header1() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start ">
            <div className="flex shrink-0 items-center justify-center space-x-8 w-full text-xl mt-3 ">



              <Link to="/" className='flex'>
              Home
              </Link>

              {datah.map((obje) => {
                return(
                  <Link
                  key={obje.id}
                  to={`/autocaravanas/${obje.ruta}`}
                  >
                  {obje.nombre}
                  </Link>
                )
              }
            )}
            <Link to="/Contacto" className='flex'>
              Contacto
            </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">


              
            </div>
          </div>
        </div>
      </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {datah.map((text) => (
            <DisclosureButton
              key={text.nombre}
              as={Link}
              to={text.ruta}
              className="text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              {text.nombre}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default Header1