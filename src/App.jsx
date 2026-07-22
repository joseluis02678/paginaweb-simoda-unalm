import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* HEADER / BARRA DE NAVEGACIÓN */}
      <header className="header">
        <div className="logo">🌾 Semillero SIMODA</div>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO / SECCIÓN PRINCIPAL */}
      <section id="inicio" className="hero-section">
        <h1>Estadística, Data Science e IA</h1>
        <h2>Aplicada al sector agropecuario</h2>
        <p>Universidad Nacional Agraria La Molina (UNALM)</p>
        <p className="subtitulo">Facultad de Economía y Planificación</p>
        <button className="btn-primary">Conoce nuestros proyectos</button>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="section">
        <h2>¿Qué es SIMODA?</h2>
        <p>
          Somos un círculo de investigación de la carrera de Estadística Informática 
          dedicado a desarrollar soluciones innovadoras con datos y tecnología 
          para el campo peruano.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Semillero SIMODA - UNALM. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ por estudiantes de Estadística Informática</p>
      </footer>
    </div>
  )
}

export default App