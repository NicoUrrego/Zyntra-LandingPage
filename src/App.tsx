import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Cta from './components/Cta'
import Explanation from './components/Explanation'
import Testimonials from './components/Testimonials'
import Cta2 from './components/Cta2'
import Faq from './components/Faq'
import PreFooter from './components/PreFooter'
import Footer from './components/Footer'
import { content } from './content'

/**
 * ============================================================
 *  AQUÍ AÑADES TUS CTA
 *  Cada sección con CTA recibe tu contenido (enlace, botón, formulario...).
 *  Si no pasas nada, se muestra un recuadro punteado como espacio reservado.
 *
 *  Clases de botón disponibles (src/index.css):
 *   btn btn--primary | btn btn--secondary | btn btn--dark
 * ============================================================
 */
export default function App() {
  return (
    <>
      <Header
        action={
          // EJEMPLO: enlace a WhatsApp, Calendly, formulario externo, etc.
          <a href={content.contactForm} className="btn btn--primary">
            Contáctanos
          </a>
        }
      />

      <main>
        <Hero
          actions={
            <>
              <a className="btn btn--primary" href="#contacto">
                Unirme a la lista de espera
              </a>
              <a className="btn btn--secondary" href="#explicacion">
                Ver el merch
              </a>
            </>
          }
        />

        <Benefits />

        {/* CTA 1 */}
        <Cta>
          <a href={content.contactForm} className="btn btn--primary">
            Quiero empezar
          </a>
        </Cta>

        <Explanation />
        <Testimonials />

        {/* CTA 2 */}
        <Cta2>
          <a href={content.contactForm} className="btn btn--dark">
            Solicitar información
          </a>
        </Cta2>

        <Faq />

        {/* Pre-footer: puedes poner un formulario, un enlace, etc. */}
        <PreFooter>
          <a href={content.contactForm} className="btn btn--primary">
            Escríbenos
          </a>
        </PreFooter>
      </main>

      <Footer />
    </>
  )
}
