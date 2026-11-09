import type { ReactNode } from 'react'
import { content } from '../content'

interface Props {
  /** Tu CTA del header (botón, enlace, etc.). Si no se pasa, se muestra un espacio reservado. */
  action?: ReactNode
}

export default function Header({ action }: Props) {
  const { brand, header } = content

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo">
          {brand.logo ? <img src={brand.logo} alt={brand.name} /> : brand.name}
        </a>

        <button
          type="button"
          className="header__burger"
          aria-label="Abrir menú"
          aria-expanded={false}
          aria-controls="navegacion-principal"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="navegacion-principal"
          aria-label="Navegación principal"
          className="header__nav"
        >
          {header.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <div className="header__action header__action--mobile">
            {action ?? <span className="cta-slot-placeholder">Tu CTA</span>}
          </div>
        </nav>

        <div className="header__action header__action--desktop">
          {action ?? <span className="cta-slot-placeholder">Tu CTA</span>}
        </div>

      </div>
    </header>
  )
}
