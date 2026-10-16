import { useEffect, useState } from 'react'
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
  const { brand, header } = content

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#inicio" className="header__logo">
          {brand.logo ? <img src={brand.logo} alt={brand.name} /> : brand.name}
        </a>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`}>
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

        <button
          className={`header__burger ${open ? 'header__burger--open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
