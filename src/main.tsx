import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Manual from './manual.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Manual />
  </React.StrictMode>,
)
