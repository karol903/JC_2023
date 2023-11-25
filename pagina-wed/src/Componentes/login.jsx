
import './login.css'


function login() {


  return (
    <>
   
  <section>
  <div className="login-box">
    <form action="#" method="POST">
      <h2>Login</h2>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="mail" />
        </span>
        <input type="email" required />
        <label>Email</label>
      </div>
      <div className="input-box">
        <span className="icon">
          <ion-icon name="lock-closed" />
        </span>
        <input type="password" required />
        <label>Password</label>
      </div>
      <div className="remember-forgot">
        <label><input type="checkbox" /> Recuerdame</label>
      </div>
      <button type="submit"><a href="../lista/index.html">Login</a></button>
      <div className="register">
        <p>¿No tienes cuenta? <a href="Registro.html">Registrate</a></p>
      </div>
    </form>
  </div>
</section>


    </>
  )
}

export default login
