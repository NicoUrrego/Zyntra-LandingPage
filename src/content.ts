import pin from './assets/pin.jpg';
import escarapela from './assets/escarapela.png';
import botilito from './assets/botilito.jpg';
export const content = {
  brand: { name: 'ZYNTRA', logo: '' },

  header: {
    nav: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Cómo funciona', href: '#explicacion' }, // Ahora lleva al Merch
      { label: 'Testimonios', href: '#testimonios' },
      { label: 'FAQ', href: '#faq' },
    ],
  },

  hero: {
    badge: 'EXPLORA EL MULTIVERSO',
    title: 'Viaja más allá de lo',
    highlight: 'conocido',
    subtitle:
      'Explora personajes, dimensiones y episodios del universo de Rick and Morty desde una experiencia móvil dinámica, interactiva y hecha para descubrir.',
    image: '', // Aquí iría tu hero1.png
    imageAlt: 'Interfaz de la app Zyntra en un smartphone',
  },

  benefits: {
    eyebrow: '¿Por qué ZYNTRA?',
    title: 'Tu portal al multiverso',
    subtitle: 'Herramientas diseñadas para curiosos, aventureros y fans de la serie.',
    items: [
      { 
        icon: '🛸', 
        title: 'Exploración Interdimensional', 
        text: 'Navega entre dimensiones y descubre personajes únicos con solo un swipe.' 
      },
      { 
        icon: '⚡', 
        title: 'Interfaz Dinámica', 
        text: 'Una experiencia móvil fluida, rápida y con una estética sci-fi minimalista.' 
      },
      { 
        icon: '🧩', 
        title: 'Contenido Desbloqueable', 
        text: 'Encuentra secretos, easter eggs y datos curiosos ocultos en cada rincón.' 
      },
      { 
        icon: '🎭', 
        title: 'Espíritu Irreverente', 
        text: 'La diversión y el humor absurdo de la serie, integrados en la experiencia.' 
      },
      { 
        icon: '🔭', 
        title: 'Base de Datos Completa', 
        text: 'Accede a información detallada de episodios, lugares y personajes.' 
      },
      { 
        icon: '🚀', 
        title: 'Actualizaciones Constantes', 
        text: 'El multiverso nunca deja de expandirse. Nuevo contenido cada temporada.' 
      },
    ],
  },

  cta: {
    title: '¿Listo para saltar a otra dimensión?',
    text: 'No necesitas un portal casero. Solo tu teléfono y curiosidad.',
  },


  explanation: {
    eyebrow: 'Merch Oficial ZYNTRA',
    title: 'Tres artefactos para verdaderos exploradores',
    subtitle: 'Lleva el multiverso contigo con nuestra línea exclusiva de accesorios. Diseños únicos para fans irreverentes.',
    steps: [
      {
        title: '01. Pin "Portal Inestable"',
        text: 'Metal esmaltado que brilla en la oscuridad. El complemento perfecto para tu chaqueta o mochila. No requiere baterías, pero sí valentía.',
        image: pin, 
      },
      {
        title: '02. Escarapela "Explorador C-137"',
        text: 'Tu identificación oficial del multiverso. Diseño exclusivo con acabado premium. Ideal para coleccionistas y fans de la serie.',
        image: escarapela, 
      },
      {
        title: '03. Botilito Térmico "Zyntra Tech"',
        text: 'Acero inoxidable de doble pared. Mantiene tu bebida fría (o tu alcohol) en cualquier dimensión. El compañero definitivo para tus viajes.',
        image: botilito,
      },
    ],
  },

    testimonials: {
    eyebrow: 'Testimonios',
    title: 'Lo que dicen los coleccionistas',
    subtitle: 'Opiniones de exploradores que ya tienen su merch en sus manos.',
    items: [
      { 
        name: 'Morty S.', 
        role: 'Explorador Novato', 
        text: 'Compré la escarapela C-137 y la pegué en mi mochila. Ahora todos en la escuela creen que soy un agente secreto. ¡Es genial!', 
        avatar: '' 
      },
      { 
        name: 'Summer S.', 
        role: 'Coleccionista de Pins', 
        text: 'El pin del portal es súper brillante. No es la típica basura de mercancía barata, se ve muy futurista y de buena calidad.', 
        avatar: '' 
      },
      { 
        name: 'Rick S.', 
        role: 'Científico · Dimensión C-137', 
        text: 'El botilito mantiene mi bebida fría por horas. Es eficiente. Le pondría un 10/10, si no fuera porque no le cabe suficiente alcohol.', 
        avatar: '' 
      },
    ],
  },

  cta2: {
    title: 'El multiverso no se va a explorar solo',
    text: 'Únete a la comunidad y empieza tu viaje hoy mismo.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas frecuentes',
    subtitle: 'Resuelve tus dudas antes de saltar.',
    items: [
      { 
        q: '¿ZYNTRA es una app oficial?', 
        a: 'No, es una experiencia de exploración creada por fans para fans del universo de Rick and Morty.' 
      },
      { 
        q: '¿Necesito saber de ciencia para usarla?', 
        a: 'Para nada. Solo necesitas curiosidad y ganas de explorar. La app está diseñada para ser intuitiva.' 
      },
      { 
        q: '¿Habrá contenido de nuevas temporadas?', 
        a: 'Sí, planeamos actualizar la base de datos a medida que el multiverso (y la serie) se expanda.' 
      },
      { 
        q: '¿Es gratis?', 
        a: 'El acceso básico es gratuito. Tendremos funciones premium para exploradores avanzados.' 
      },
      { 
        q: '¿Cómo compro el merch?', 
        a: 'Pronto habilitaremos la tienda online. Por ahora, puedes escribirnos a nuestro correo para reservar tu pin, escarapela o botilito.' 
      },
    ],
  },

  preFooter: {
    title: '¿Nos vamos?',
    text: 'Únete a la lista de espera y sé el primero en cruzar el portal cuando esté listo.',
  },

  footer: {
    description: 'ZYNTRA es una experiencia móvil inmersiva para explorar el multiverso de Rick and Morty.',
    columns: [
      {
        title: 'Navegación',
        links: [
          { label: 'Inicio', href: '#inicio' },
          { label: 'Beneficios', href: '#beneficios' },
          { label: 'Merch', href: '#explicacion' },
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
          { label: 'zyntra12@zyntra.app', href: 'mailto:zyntra12@zyntra.app' },
          { label: '+00 000 000 0000', href: 'tel:+322456739' },
        ],
      },
    ],
    socials: [
      { label: 'Instagram', href: 'https://www.instagram.com/rickandmorty/' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'X', href: 'https://x.com/RickandMorty' },
    ],
    copyright: `© ${new Date().getFullYear()} Zyntra. Todos los derechos reservados.`,
  },
}