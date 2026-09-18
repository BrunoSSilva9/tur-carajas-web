import { Link } from 'react-router-dom'
import logo from '../../assets/caraj_s_photoroom.png'

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-margin flex items-center justify-between gap-space-sm">
        <Link to="/" className="flex items-center gap-space-sm">
          <img src={logo} alt="Tur Carajás" className="h-10 w-auto object-contain" />

          <div className="flex items-center gap-space-xs text-on-surface-variant">
            <span className="material-symbols-outlined text-[14px] text-secondary">
              location_on
            </span>
            <span className="font-body-sm text-body-sm">Canaã dos Carajás, PA</span>
          </div>
        </Link>

        <div className="flex items-center gap-space-xs">
          <button
            aria-label="Notificações"
            type="button"
            className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">notifications</span>
          </button>
          <Link to="/perfil" aria-label="Perfil" className="w-11 h-11 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-label-md text-label-md">
              TC
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
