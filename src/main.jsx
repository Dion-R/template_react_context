import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {SomethingProvider} from "./context/SomethingContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <SomethingProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </SomethingProvider>
)
