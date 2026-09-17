import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Início', icon: 'home', end: true },
  { to: '/catalogo', label: 'Explorar', icon: 'explore' },
  { to: '/roteiro', label: 'Roteiro', icon: 'map' },
  { to: '/questionario', label: 'Meu Roteiro', icon: 'bookmark' },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-space-xs">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-space-xs min-w-[54px] min-h-[44px] transition-colors ${
                isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
            <span className="font-label-sm text-label-sm">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
