import { content } from '../content'
import './Benefits.css'

export default function Benefits() {
  const { benefits } = content
  return (
    <section id="beneficios" className="section benefits">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">{benefits.eyebrow}</span>
          <h2 className="section__title">{benefits.title}</h2>
          <p className="section__subtitle">{benefits.subtitle}</p>
        </div>

        <div className="benefits__grid">
          {benefits.items.map((item, i) => (
            <article key={i} className="benefits__card">
              <div className="benefits__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
