import { content } from '../content'

export default function Faq() {
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
          {faq.items.map((item, i) => (
            <details key={item.q} className="faq__item" open={i === 0} name="zyntra-faq">
              <summary className="faq__question">
                <span>{item.q}</span>
                <i aria-hidden="true">+</i>
              </summary>
              <p className="faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
