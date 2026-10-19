import type { ReactNode } from 'react'
import { content } from '../content'
import './Hero.css'
import hero1 from '../assets/hero1.png'

interface Props {
  /** Tus CTA del hero (uno o varios botones/enlaces/formulario). */
  actions?: ReactNode
}

export default function Hero({ actions }: Props) {
  const { hero } = content

  return (
    <section id="inicio" className="hero">
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content">
          {hero.badge && (
            <span className="hero__badge">{hero.badge}</span>
          )}

          <h1 className="hero__title">
            {hero.title} <span>{hero.highlight}</span>
          </h1>

          <p className="hero__subtitle">{hero.subtitle}</p>

          <div className="hero__actions">
            {actions ?? (
              <span className="cta-slot-placeholder">
                Tus CTA del Hero
              </span>
            )}
          </div>
        </div>

        <div className="hero__media">
          <img
            src={hero1}
            alt="Imagen principal del hero"
            className="hero__image"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}