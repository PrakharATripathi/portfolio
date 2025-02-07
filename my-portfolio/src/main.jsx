import React from 'react'
import ReactDOM from 'react-dom/client'
import SplashCursor from './components/CursorAnimation.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <SplashCursor/>
    <App />
  </>,
)
