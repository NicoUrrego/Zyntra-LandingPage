import { useState } from 'react'
import { content } from '../content'
import './Faq.css'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { faq } = content

  return (
    <section id="faq" className="section faq">
      <div className="container faq__inner">
        <div className="section__head">
          <span className="section__eyebrow">{faq.eyebrow}</span>
          <h2 className="section__title">{faq.title}</h2>
          <p className="section__subtitle">{faq.subtitle}</p>
        </div>

        <div className="faq__list">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  className="faq__question"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <i aria-hidden="true">+</i>
                </button>
                <div className="faq__answer">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
