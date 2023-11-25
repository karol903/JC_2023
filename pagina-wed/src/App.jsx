import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
  <header className="header">
    <div className="logo">
      <img src="../nav/imagenes/LOGO.png" alt="Logo" />
    </div>
    <nav>
      <ul className="nav-links">
        <li><a href="../nav/nav.html">Tarea para hoy</a></li>
        <li><a href="../login/login.html">Iniciar</a></li>
      </ul>            
    </nav>
  </header>
  <header>
    <h1>Tarea para hoy</h1>
  </header>
  
</div>

      
    </>
  )
}

export default App
