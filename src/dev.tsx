import { flushSync } from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './App'

export function render() {
  const root = createRoot(document.getElementById('root')!)
  flushSync(() => root.render(<App />))
}
