import type { ReactNode } from 'react'
import { content } from '../content'
import './PreFooter.css'

interface Props {
  /**
   * Contenido libre para el pre-footer: formulario de suscripción, botón de contacto, enlace, etc.
   */
  children?: ReactNode
}

export default function PreFooter({ children }: Props) {
  const { preFooter } = content
  return (
    <section id="contacto" className="prefooter">
      <div className="container prefooter__inner">
        <div className="prefooter__text">
          <h2>{preFooter.title}</h2>
          <p>{preFooter.text}</p>
        </div>
        <div className="prefooter__slot">
          {children ?? <span className="cta-slot-placeholder">Tu formulario / enlace aquí</span>}
        </div>
      </div>
    </section>
  )
}
