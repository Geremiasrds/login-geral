// main.jsx
import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Login } from './TelaDeLogin.jsx'

// Componente principal que controla o login
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
