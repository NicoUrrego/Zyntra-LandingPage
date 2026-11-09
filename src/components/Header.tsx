import { useEffect, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { content } from '../content'
import './Header.css'

interface Props {
  /** Tu CTA del header (botón, enlace, etc.). Si no se pasa, se muestra un espacio reservado. */
  action?: ReactNode
}

export default function Header({ action }: Props) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)
  const { brand, header } = content

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false)
          menuButton.current?.focus()
        }
      }}
    >
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" onClick={() => setOpen(false)}>
          {brand.logo ? <img src={brand.logo} alt={brand.name} /> : brand.name}
        </a>

        <button
          ref={menuButton}
          type="button"
          className={`header__burger ${open ? 'header__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="navegacion-principal"
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="navegacion-principal"
          aria-label="Navegación principal"
          className={`header__nav ${open ? 'header__nav--open' : ''}`}
        >
          {header.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
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
