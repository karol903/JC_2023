
import './registro.css'


function registro() {


  return (
    <>
      <section>
  <div className="login-box">
    <form action="#" method="POST">
      <h2>Registro</h2>
      <div className="input-box">
        <input type="nombres" required />
        <label>Nombres</label>
      </div>
      <div className="input-box">
        <input type="apellidos" required />
        <label>Apellidos</label>
      </div>
      <div className="input-box">
        <input type="email" required />
        <label>Email</label>
      </div>
      <div className="input-box">
        <input type="password" required />
        <label>Password</label>
      </div>
      <div className="input-box">
        <input type="password" required />
        <label>Password</label>
      </div>
      <div className="remember-forgot">
        <label><input type="checkbox" /> Acepto terminos y condiciones</label>
      </div>
      <button type="submit"><a href="login.html">Enviar</a></button>
    </form>
  </div>
</section>

    </>
  )
}

export default registro
