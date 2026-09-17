interface AcaoEtapaProps {
  texto: string
  icone: string
  onClick: () => void
  desabilitado?: boolean
}

export function AcaoEtapa({ texto, icone, onClick, desabilitado }: AcaoEtapaProps) {
  return (
    <div className="sticky bottom-0 left-0 right-0 pt-4 pb-2 bg-gradient-to-t from-surface via-surface/95 to-transparent mt-space-lg">
      <button
        type="button"
        onClick={onClick}
        disabled={desabilitado}
        className="w-full h-14 bg-primary-container text-on-primary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-space-sm shadow-md hover:opacity-95 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
      >
        <span>{texto}</span>
        <span className="material-symbols-outlined text-[20px]">{icone}</span>
      </button>
    </div>
  )
}
