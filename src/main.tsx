import './index.css'
import './components/styles.css'
import { enhanceNavigation } from './navigation'

if (import.meta.env.DEV) {
  void import('./dev').then(({ render }) => {
    render()
    enhanceNavigation()
  })
} else {
  enhanceNavigation()
}
