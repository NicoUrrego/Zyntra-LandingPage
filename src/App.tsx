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
          <a href="https://v2j9f.share.hsforms.com/20MHJzMYMSouGtD9-GUZ-DA" className="btn btn--primary">
            Contáctanos
          </a>
        }
      />

      <main>
        <Hero
          actions={
            <>
              <a className="btn btn--primary" href="#contacto">
                Empezar ahora
              </a>
              <a className="btn btn--secondary" href="#explicacion">
                Ver cómo funciona
              </a>
            </>
          }
        />

        <Benefits />

        {/* CTA 1 */}
        <Cta>
          <a className="btn btn--primary" href="#contacto">
            Quiero empezar
          </a>
        </Cta>

        <Explanation />
        <Testimonials />

        {/* CTA 2 */}
        <Cta2>
          <a className="btn btn--dark" href="#contacto">
            Solicitar información
          </a>
        </Cta2>

        <Faq />

        {/* Pre-footer: puedes poner un formulario, un enlace, etc. */}
        <PreFooter>
          <a className="btn btn--primary" href="mailto:correo@tudominio.com">
            Escríbenos
          </a>
        </PreFooter>
      </main>

      <Footer />
    </>
  )
}
