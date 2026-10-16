import type { ReactNode } from 'react'
import { content } from '../content'
import './Cta2.css'

interface Props {
  /**
   * Coloca aquí tu segunda CTA: enlace, botón, formulario, etc.
   */
  children?: ReactNode
}

export default function Cta2({ children }: Props) {
  const { cta2 } = content
  return (
    <section className="cta2">
      <div className="container cta2__inner">
        <h2>{cta2.title}</h2>
        <p>{cta2.text}</p>
        <div className="cta2__slot">
          {children ?? <span className="cta-slot-placeholder">Tu CTA 2 aquí</span>}
        </div>
      </div>
    </section>
  )
}
