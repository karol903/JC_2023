import logo from './assets/LOGO.png';
import './App.css'


function App() {


  return (
    <>
    <div>
  <header className="header">
    <div className="logo">
      <img src="./assets/LOGO.png" alt="logo" />
    </div>
    <nav>
      <ul className="nav-links">
        <li><a>Tarea para hoy</a></li>
        <li><a>Iniciar</a></li>
      </ul>            
    </nav>
  </header>
  <header>
    <h1>Tarea para hoy</h1>
  </header>

  <main>
  <section id="about">
    <p>No mires asi atras con ira, ni hacia adelante con miedo, sino alrededor con atencion, aquella hermosa magia libra mil batallas si luchas por tus sueños y te arriesgas. 
      Acuerdate que la felicidad se logra  si crees en ti y las capacidades que puedes ofrecer a pesar de la oscuridad y los diversos problemas que nos sucedan lucha y nunca te rindas, ni te dejes vencer por ninguna adversidad que detenga nuestro maravilloso camino.</p>
  </section>
  <footer>
    <p>© 2023 Nuestra Empresa. Todos los derechos reservados.</p>
  </footer>
</main>

  
</div>

      
    </>
  )
}

export default App
