import { content } from '../content'
import './Footer.css'

export default function Footer() {
  const { brand, footer } = content
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo">
              {brand.logo ? <img src={brand.logo} alt={brand.name} /> : brand.name}
            </a>
            <p>{footer.description}</p>
            <div className="footer__socials">
              {footer.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="footer__col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
