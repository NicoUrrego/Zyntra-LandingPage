type CookieConsentWindow = Window & {
  cookieconsent?: { run: (options: Record<string, unknown>) => void }
}

function loadCookieConsent() {
  const script = document.createElement('script')
  script.src = 'https://www.termsfeed.com/public/cookie-consent/4.2.0/cookie-consent.js'
  script.addEventListener('load', () => {
    const { cookieconsent } = window as CookieConsentWindow
    if (!cookieconsent) return

    cookieconsent.run({
      notice_banner_type: 'simple',
      consent_type: 'express',
      palette: 'light',
      language: 'es',
      page_load_consent_levels: ['strictly-necessary'],
      notice_banner_reject_button_hide: false,
      preferences_center_close_button_hide: false,
      page_refresh_confirmation_buttons: false,
      website_name: 'Zyntra',
    })

    document.getElementById('cookie-preferences')!.hidden = false
  })
  document.head.append(script)
}

if (document.readyState === 'complete') {
  loadCookieConsent()
} else {
  window.addEventListener('load', loadCookieConsent, { once: true })
}
