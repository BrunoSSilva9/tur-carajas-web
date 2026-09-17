import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/questionario', label: 'Meu Roteiro' },
  { to: '/catalogo', label: 'Catálogo' },
]

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link to="/" className="text-lg font-semibold text-emerald-700">
          Tur Carajás
        </Link>

        <button
          type="button"
          className="p-2 text-gray-700 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1 block h-0.5 w-6 bg-current" />
          <span className="mt-1 block h-0.5 w-6 bg-current" />
        </button>

        <nav className="hidden gap-6 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'font-medium text-emerald-700' : 'text-gray-600'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {menuAberto && (
        <nav className="flex flex-col gap-3 border-t border-gray-200 px-4 py-3 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuAberto(false)}
              className={({ isActive }) =>
                isActive ? 'font-medium text-emerald-700' : 'text-gray-600'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
