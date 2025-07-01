// main.jsx
import React, { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Login } from './TelaDeLogin.jsx'

const Root = () => {
  const [logado, setLogado] = useState(false)

  return (
    <>
      {logado ? <App /> : <Login aoLogar={() => setLogado(true)} />}
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
