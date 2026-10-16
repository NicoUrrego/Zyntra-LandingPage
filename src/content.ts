/**
 * ============================================================
 *  CONTENIDO EDITABLE DE LA LANDING
 *  Cambia aquí los textos e imágenes. Para imágenes puedes usar:
 *   - archivos en /public  -> '/mi-imagen.jpg'
 *   - URLs externas        -> 'https://...'
 *  Si dejas una imagen vacía ('') se mostrará un bloque de relleno.
 * ============================================================
 */
export const content = {
  brand: { name: 'ZYNTRA', logo: '' },

  header: {
    nav: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Cómo funciona', href: '#explicacion' },
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'FAQ', href: '#faq' },
    ],
  },

  hero: {
    badge: 'Nuevo · Texto de etiqueta',
    title: 'Un título potente para',
    highlight: 'tu propuesta de valor',
    subtitle:
      'Describe en una o dos frases qué ofreces y por qué tu público debería elegirte. Este texto es totalmente editable.',
    image: '',
    imageAlt: 'Imagen principal',
  },

  benefits: {
    eyebrow: 'Beneficios',
    title: 'Todo lo que necesitas en un solo lugar',
    subtitle: 'Resume las ventajas principales de tu producto o servicio.',
    items: [
      { icon: '⚡', title: 'Beneficio uno', text: 'Describe brevemente esta ventaja y el valor que aporta.' },
      { icon: '🔒', title: 'Beneficio dos', text: 'Describe brevemente esta ventaja y el valor que aporta.' },
      { icon: '🚀', title: 'Beneficio tres', text: 'Describe brevemente esta ventaja y el valor que aporta.' },
      { icon: '💡', title: 'Beneficio cuatro', text: 'Describe brevemente esta ventaja y el valor que aporta.' },
      { icon: '🤝', title: 'Beneficio cinco', text: 'Describe brevemente esta ventaja y el valor que aporta.' },
      { icon: '📈', title: 'Beneficio seis', text: 'Describe brevemente esta ventaja y el valor que aporta.' },
    ],
  },

  cta: {
    title: '¿Listo para dar el siguiente paso?',
    text: 'Texto de apoyo para tu llamada a la acción principal.',
  },

  explanation: {
    eyebrow: 'Cómo funciona',
    title: 'Te lo explicamos en pocos pasos',
    subtitle: 'Guía a tu cliente por el proceso de forma simple.',
    steps: [
      {
        title: 'Paso 1: Título del paso',
        text: 'Explica qué ocurre en este paso y qué debe hacer el usuario.',
        image: '',
      },
      {
        title: 'Paso 2: Título del paso',
        text: 'Explica qué ocurre en este paso y qué debe hacer el usuario.',
        image: '',
      },
      {
        title: 'Paso 3: Título del paso',
        text: 'Explica qué ocurre en este paso y qué debe hacer el usuario.',
        image: '',
      },
    ],
  },

  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen nuestros clientes',
    subtitle: 'Opiniones reales que generan confianza.',
    items: [
      { name: 'Nombre Apellido', role: 'Cargo · Empresa', text: 'Escribe aquí el testimonio de tu cliente. Mientras más específico, mejor.', avatar: '' },
      { name: 'Nombre Apellido', role: 'Cargo · Empresa', text: 'Escribe aquí el testimonio de tu cliente. Mientras más específico, mejor.', avatar: '' },
      { name: 'Nombre Apellido', role: 'Cargo · Empresa', text: 'Escribe aquí el testimonio de tu cliente. Mientras más específico, mejor.', avatar: '' },
    ],
  },

  cta2: {
    title: 'Empieza hoy mismo',
    text: 'Segunda llamada a la acción para quienes llegaron hasta aquí.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
    subtitle: 'Resuelve las dudas más comunes antes de que te las pregunten.',
    items: [
      { q: '¿Pregunta frecuente número uno?', a: 'Escribe aquí la respuesta clara y breve a esta pregunta.' },
      { q: '¿Pregunta frecuente número dos?', a: 'Escribe aquí la respuesta clara y breve a esta pregunta.' },
      { q: '¿Pregunta frecuente número tres?', a: 'Escribe aquí la respuesta clara y breve a esta pregunta.' },
      { q: '¿Pregunta frecuente número cuatro?', a: 'Escribe aquí la respuesta clara y breve a esta pregunta.' },
    ],
  },

  preFooter: {
    title: 'Hablemos',
    text: 'Último empujón antes del pie de página: contacto, suscripción o mensaje final.',
  },

  footer: {
    description: 'Breve descripción de tu marca o empresa.',
    columns: [
      {
        title: 'Navegación',
        links: [
          { label: 'Inicio', href: '#inicio' },
          { label: 'Beneficios', href: '#beneficios' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Términos y condiciones', href: '#' },
          { label: 'Política de privacidad', href: '#' },
        ],
      },
      {
        title: 'Contacto',
        links: [
          { label: 'correo@tudominio.com', href: 'mailto:correo@tudominio.com' },
          { label: '+00 000 000 0000', href: 'tel:+000000000000' },
        ],
      },
    ],
    socials: [
      { label: 'Instagram', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'X', href: '#' },
    ],
    copyright: `© ${new Date().getFullYear()} Zyntra. Todos los derechos reservados.`,
  },
}
