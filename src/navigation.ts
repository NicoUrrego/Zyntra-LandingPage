export function enhanceNavigation() {
  const header = document.querySelector<HTMLElement>('.header')!
  const toggle = header.querySelector<HTMLButtonElement>('.header__burger')!
  const nav = header.querySelector<HTMLElement>('.header__nav')!

  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true'
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú')
    nav.classList.toggle('header__nav--open', open)
  }

  toggle.addEventListener('click', () => setOpen(!isOpen()))
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false)
      toggle.focus()
    }
  })
  header.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('a')) setOpen(false)
  })

  const updateHeader = () => header.classList.toggle('header--scrolled', window.scrollY > 20)
  updateHeader()
  window.addEventListener('scroll', updateHeader, { passive: true })
}
