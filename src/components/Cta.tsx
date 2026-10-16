import type { ReactNode } from 'react'
import { content } from '../content'
import './Cta.css'

interface Props {
  /**
   * Coloca aquí tu propia CTA: un <a className="btn btn--primary">, un <form>, un botón, etc.
   */
  children?: ReactNode
}

export default function Cta({ children }: Props) {
  const { cta } = content
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__box">
          <div className="cta__text">
            <h2>{cta.title}</h2>
            <p>{cta.text}</p>
          </div>
          <div className="cta__slot">
            {children ?? <span className="cta-slot-placeholder">Tu CTA aquí</span>}
          </div>
        </div>
      </div>
    </section>
  )
}
