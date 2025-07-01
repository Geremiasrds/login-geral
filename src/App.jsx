import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'

function Login({ aoLogar }) {
  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>
      <h1>Login Teste</h1>
      <button onClick={aoLogar}>Login</button>
    </div>
  )
}

function Home() {
  return <h2 style={{ color: 'white' }}>Home após login</h2>
}

export default function TestApp() {
  const [logado, setLogado] = useState(false)
  const navigate = useNavigate()

  if (!logado) {
    return <Login aoLogar={() => { setLogado(true); navigate('/') }} />
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

// E no main.jsx faça só:

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import TestApp from './TestApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <TestApp />
  </HashRouter>
)
