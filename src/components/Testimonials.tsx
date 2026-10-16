import { content } from '../content'
import './Testimonials.css'

export default function Testimonials() {
  const { testimonials } = content
  return (
    <section id="testimonios" className="section testimonials">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">{testimonials.eyebrow}</span>
          <h2 className="section__title">{testimonials.title}</h2>
          <p className="section__subtitle">{testimonials.subtitle}</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.items.map((t, i) => (
            <figure key={i} className="testimonials__card">
              <div className="testimonials__stars" aria-label="5 estrellas">★★★★★</div>
              <blockquote>“{t.text}”</blockquote>
              <figcaption>
                {t.avatar ? (
                  <img src={t.avatar} alt={t.name} className="testimonials__avatar" />
                ) : (
                  <div className="testimonials__avatar testimonials__avatar--empty">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
