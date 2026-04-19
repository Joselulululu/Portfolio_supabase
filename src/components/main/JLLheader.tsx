import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navegacion = [
  { name: 'Inicio', href: '/' },
  { name: 'Trabajos', href: '/trabajos' },
  { name: 'Servicios', href: '/servicios' },
  { name: 'Formación', href: '/formacion' },
  { name: 'Académico', href: '/formacion-academica' },
  { name: 'Contacto', href: '/contacto' },
]

function Header1() {
  return (
    <Disclosure as="nav" className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-xl border-b border-white/10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              
              <div className="flex shrink-0 items-center">
                <Link to="/" className="text-[14px] font-black uppercase tracking-[0.4em] text-white">
                  J.L.Lopez<span className="text-blue-600">_</span>
                </Link>
              </div>

              <div className="hidden sm:flex sm:space-x-8 lg:space-x-12">
                {navegacion.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex sm:hidden">
                <DisclosureButton className="text-white hover:text-blue-600">
                  {open ? <X size={24} /> : <Menu size={24} />}
                </DisclosureButton>
              </div>

            </div>
          </div>

          <DisclosurePanel className="sm:hidden bg-black border-b border-white/10">
            <div className="space-y-1 px-6 pt-4 pb-8">
              {navegacion.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className="block text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-500 py-4 border-b border-white/5 last:border-0"
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default Header1