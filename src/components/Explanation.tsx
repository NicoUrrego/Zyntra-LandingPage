import { content } from '../content'
import Media from './Placeholder'
import './Explanation.css'

export default function Explanation() {

  const { explanation } = content
  
  return (
    <section id="explicacion" className="section explanation">
      <div className="container">
        <div className="section__head">
          <span className="section__eyebrow">{explanation.eyebrow}</span>
          <h2 className="section__title">{explanation.title}</h2>
          <p className="section__subtitle">{explanation.subtitle}</p>
        </div>

        <div className="explanation__list">
          {explanation.steps.map((step, i) => (
            <div key={i} className="explanation__row">
              <div className="explanation__text">
                <span className="explanation__number">{String(i + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <div className="explanation__media">
                <Media src={step.image} 
                      alt={step.title} 
                      label={`Imagen paso ${i + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
