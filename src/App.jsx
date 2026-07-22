import './App.css'
import logoSIMODA from './assets/images/Logo.jpeg'
import logoUNALM from './assets/images/Unalm.jpeg'
import logoFEYP from './assets/images/FEYP.png'

function App() {
  return (
    <div className="app-container">
      {/* HEADER / BARRA DE NAVEGACIÓN */}
      <header className="header">
        <div className="logo-container">
          <div className="logos">
            <img src={logoUNALM} alt="Logo UNALM" className="logo-small" />
            <img src={logoSIMODA} alt="Logo SIMODA" className="logo-medium" />
            <img src={logoFEYP} alt="Logo FEYP" className="logo-small" />
          </div>
          <div className="logo-text">
            <h1>Semillero SIMODA</h1>
          </div>
        </div>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#integrantes">Integrantes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO / SECCIÓN PRINCIPAL */}
      <section id="inicio" className="hero-section">
        <h1>Estadística, Data Science e IA</h1>
        <h2>Aplicada al sector agropecuario</h2>
        <p>Universidad Nacional Agraria La Molina (UNALM)</p>
        <p className="subtitulo">Facultad de Economía y Planificación</p>
        <button className="btn-primary" onClick={() => document.getElementById('proyectos').scrollIntoView({behavior: 'smooth'})}>
          Conoce nuestros proyectos
        </button>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="section">
        <h2>¿Qué es SIMODA?</h2>
        <p className="section-description">
          Somos un círculo de investigación de la carrera de Estadística Informática 
          dedicado a desarrollar soluciones innovadoras con datos y tecnología 
          para el campo peruano.
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Análisis de Datos</h3>
            <p>Procesamiento y análisis estadístico de datos agrícolas</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"></div>
            <h3>Inteligencia Artificial</h3>
            <p>Modelos predictivos y machine learning aplicados</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>Agricultura de Precisión</h3>
            <p>Tecnología para optimizar cultivos y cosechas</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN PROYECTOS */}
      <section id="proyectos" className="section section-alt">
        <h2>Nuestros Proyectos</h2>
        <p className="section-description">
          Desarrollamos investigación aplicada para resolver problemas reales del sector agropecuario
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-icon"></div>
            <h3>Predicción de Cosechas</h3>
            <p>Modelos de machine learning para predecir rendimientos de cultivos basados en datos históricos y condiciones climáticas.</p>
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">Machine Learning</span>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-icon"></div>
            <h3>Análisis de Suelos</h3>
            <p>Procesamiento de datos de sensores para optimizar la fertilización y mejorar la calidad del suelo agrícola.</p>
            <div className="project-tags">
              <span className="tag">Data Science</span>
              <span className="tag">IoT</span>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-icon"></div>
            <h3>Series Temporales Agrícolas</h3>
            <p>Pronóstico de precios de productos agrícolas y análisis de tendencias de mercado.</p>
            <div className="project-tags">
              <span className="tag">R</span>
              <span className="tag">Forecasting</span>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-icon"></div>
            <h3>Imágenes Satelitales</h3>
            <p>Análisis de imágenes satelitales para monitoreo de cultivos y detección de plagas.</p>
            <div className="project-tags">
              <span className="tag">Computer Vision</span>
              <span className="tag">GIS</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS */}
      <section id="servicios" className="section">
        <h2>Servicios que Ofrecemos</h2>
        <p className="section-description">
          Brindamos asesoría y capacitación especializada en estadística y ciencia de datos
        </p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"></div>
            <h3>Asesoría Estadística</h3>
            <p>Consultoría en diseño experimental, análisis de datos y modelamiento estadístico para tesis e investigaciones.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Capacitaciones</h3>
            <p>Talleres y cursos de Python, R, Excel avanzado, machine learning y visualización de datos.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon"></div>
            <h3>Análisis de Datos</h3>
            <p>Procesamiento y análisis de bases de datos para empresas e instituciones del sector agropecuario.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon"></div>
            <h3>Formación en Investigación</h3>
            <p>Acompañamiento en metodologías de investigación científica y publicación de artículos.</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN INTEGRANTES */}
      <section id="integrantes" className="section section-alt">
        <h2>Nuestro Equipo</h2>
        <p className="section-description">
          Estudiantes de Estadística Informática comprometidos con la investigación
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">‍💻</div>
            <h3>Jose Luis Garay Ramos</h3>
            <p className="team-role">Fundador & Líder</p>
            <p className="team-info">Estudiante de Estadística Informática</p>
            <div className="team-social">
              <a href="https://github.com/joseluis02678" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-avatar">‍💻</div>
            <h3>Piero Ce</h3>
            <p className="team-role">Miembro del Equipo</p>
            <p className="team-info">Estudiante de Estadística Informática</p>
            <div className="team-social">
              <a href="https://github.com/PC-011" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-avatar">👥</div>
            <h3>Próximo Integrante</h3>
            <p className="team-role">Únete al equipo</p>
            <p className="team-info">¿Te interesa la investigación?</p>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="section">
        <h2>Contáctanos</h2>
        <p className="section-description">
          ¿Tienes un proyecto o necesitas asesoría? ¡Escríbenos!
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Ubicación</h3>
              <p>Universidad Nacional Agraria La Molina<br/>Facultad de Economía y Planificación<br/>Lima, Perú</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div>
              <h3>Email</h3>
              <p>simoda@lamolina.edu.pe<br/>joseluis02678@lamolina.edu.pe</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="contact-icon"></div>
            <div>
              <h3>GitHub</h3>
              <p><a href="https://github.com/joseluis02678/paginaweb-simoda-unalm" target="_blank" rel="noopener noreferrer">github.com/joseluis02678/paginaweb-simoda-unalm</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logos">
          <img src={logoUNALM} alt="UNALM" className="footer-logo" />
          <img src={logoFEYP} alt="FEYP" className="footer-logo" />
        </div>
        <p>© 2026 Semillero SIMODA - UNALM. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ por estudiantes de Estadística Informática</p>
      </footer>
    </div>
  )
}

export default App