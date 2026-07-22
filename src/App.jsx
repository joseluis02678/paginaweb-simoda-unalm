import './App.css'

// Logos
import logoSIMODA from './assets/images/logo/Logo.jpeg'
import logoUNALM from './assets/images/logo/Unalm.jpeg'
import logoFEYP from './assets/images/logo/FEYP.png'

// Líneas de investigación (reemplazan los emojis)
import cienciaDatos from './assets/images/lineas-investigacion/ciencia-de-datos.jpeg'
import modelamiento from './assets/images/lineas-investigacion/modelamiento-estadistico.jpeg'
import analisisDatos from './assets/images/lineas-investigacion/analisis-de-datos.jpeg'

// Institucionales
import mision from './assets/images/institucionales/mision.jpeg'
import vision from './assets/images/institucionales/vision.jpeg'
import contacto from './assets/images/institucionales/contacto.jpeg'

// Redes sociales
import feriaVocacional from './assets/images/redes-sociales/feria-vocacional-2026-1.jpeg'
import semanaInvestigacion from './assets/images/redes-sociales/semana-investigacion-2026.jpeg'
import conoceSimoda from './assets/images/redes-sociales/conoce-simoda.jpeg'

function App() {
  return (
    <div className="app-container">
      {/* HEADER */}
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
          <a href="#lineas">Líneas</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#servicios">Servicios</a>
          <a href="#galeria">Galería</a>
          <a href="#integrantes">Integrantes</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="hero-section">
        <h1>Estadística, Data Science e IA</h1>
        <h2>Aplicada al sector agropecuario</h2>
        <p>Universidad Nacional Agraria La Molina (UNALM)</p>
        <p className="subtitulo">Facultad de Economía y Planificación</p>
        <button 
          className="btn-primary" 
          onClick={() => document.getElementById('lineas').scrollIntoView({behavior: 'smooth'})}
        >
          Conoce nuestras líneas de investigación
        </button>
      </section>

      {/* ¿QUÉ ES SIMODA? */}
      <section id="nosotros" className="section">
        <h2>¿Qué es SIMODA?</h2>
        <p className="section-description">
          Somos un círculo de investigación de la carrera de Estadística Informática 
          dedicado a desarrollar soluciones innovadoras con datos y tecnología 
          para el campo peruano.
        </p>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="section section-alt">
        <h2>Misión y Visión</h2>
        <div className="mv-grid">
          <div className="mv-card">
            <img src={mision} alt="Misión SIMODA" />
          </div>
          <div className="mv-card">
            <img src={vision} alt="Visión SIMODA" />
          </div>
        </div>
      </section>

      {/* LÍNEAS DE INVESTIGACIÓN (reemplaza la sección de features con emojis) */}
      <section id="lineas" className="section">
        <h2>Nuestras Líneas de Investigación</h2>
        <p className="section-description">
          Trabajamos en tres áreas fundamentales para transformar el sector agropecuario
        </p>
        <div className="features-grid">
          <div className="feature-card">
            <img src={cienciaDatos} alt="Ciencia de Datos" className="feature-img" />
            <h3>Ciencia de Datos</h3>
            <p>Aplicamos técnicas avanzadas para transformar datos en conocimiento útil y aplicable</p>
          </div>
          
          <div className="feature-card">
            <img src={modelamiento} alt="Modelamiento Estadístico" className="feature-img" />
            <h3>Modelamiento Estadístico</h3>
            <p>Desarrollamos modelos que explican, predicen y optimizan procesos agropecuarios</p>
          </div>
          
          <div className="feature-card">
            <img src={analisisDatos} alt="Análisis de Datos" className="feature-img" />
            <h3>Análisis de Datos</h3>
            <p>Extraemos información valiosa para comprender fenómenos y tomar mejores decisiones</p>
          </div>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="section section-alt">
        <h2>Nuestros Proyectos</h2>
        <p className="section-description">
          Desarrollamos investigación aplicada para resolver problemas reales del sector agropecuario
        </p>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Predicción de Cosechas</h3>
            <p>Modelos de machine learning para predecir rendimientos de cultivos basados en datos históricos y condiciones climáticas.</p>
            <div className="project-tags">
              <span className="tag">Python</span>
              <span className="tag">Machine Learning</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Análisis de Suelos</h3>
            <p>Procesamiento de datos de sensores para optimizar la fertilización y mejorar la calidad del suelo agrícola.</p>
            <div className="project-tags">
              <span className="tag">Data Science</span>
              <span className="tag">IoT</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Series Temporales Agrícolas</h3>
            <p>Pronóstico de precios de productos agrícolas y análisis de tendencias de mercado.</p>
            <div className="project-tags">
              <span className="tag">R</span>
              <span className="tag">Forecasting</span>
            </div>
          </div>
          
          <div className="project-card">
            <h3>Imágenes Satelitales</h3>
            <p>Análisis de imágenes satelitales para monitoreo de cultivos y detección de plagas.</p>
            <div className="project-tags">
              <span className="tag">Computer Vision</span>
              <span className="tag">GIS</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section">
        <h2>Servicios que Ofrecemos</h2>
        <p className="section-description">
          Brindamos asesoría y capacitación especializada en estadística y ciencia de datos
        </p>
        <div className="services-grid">
          <div className="service-card">
            <h3>Asesoría Estadística</h3>
            <p>Consultoría en diseño experimental, análisis de datos y modelamiento estadístico para tesis e investigaciones.</p>
          </div>
          
          <div className="service-card">
            <h3>Capacitaciones</h3>
            <p>Talleres y cursos de Python, R, Excel avanzado, machine learning y visualización de datos.</p>
          </div>
          
          <div className="service-card">
            <h3>Análisis de Datos</h3>
            <p>Procesamiento y análisis de bases de datos para empresas e instituciones del sector agropecuario.</p>
          </div>
          
          <div className="service-card">
            <h3>Formación en Investigación</h3>
            <p>Acompañamiento en metodologías de investigación científica y publicación de artículos.</p>
          </div>
        </div>
      </section>

      {/* GALERÍA DE REDES SOCIALES */}
      <section id="galeria" className="section section-alt">
        <h2>📸 Síguenos en Instagram</h2>
        <p className="section-description">
          Conoce nuestras actividades, eventos y proyectos en <strong>@simoda_unalm</strong>
        </p>
        
        <div className="social-gallery">
          <div className="social-card">
            <img src={feriaVocacional} alt="Feria Vocacional 2026" className="social-img" />
            <div className="social-overlay">
              <h3>Feria Vocacional 2026 - I</h3>
              <p>Inspirando a la próxima generación 🌱</p>
            </div>
          </div>
          
          <div className="social-card">
            <img src={semanaInvestigacion} alt="Semana de la Investigación" className="social-img" />
            <div className="social-overlay">
              <h3>Semana de la Investigación 2026</h3>
              <p>Facultad de Economía y Planificación</p>
            </div>
          </div>
          
          <div className="social-card">
            <img src={conoceSimoda} alt="Conoce SIMODA" className="social-img" />
            <div className="social-overlay">
              <h3>Conoce un poco más de nosotros</h3>
              <p>¡Únete al semillero! 🦙</p>
            </div>
          </div>
        </div>
        
        <a 
          href="https://instagram.com/simoda_unalm" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-instagram"
        >
          📸 Ver más en @simoda_unalm
        </a>
      </section>

      {/* INTEGRANTES */}
      <section id="integrantes" className="section">
        <h2>Nuestro Equipo</h2>
        <p className="section-description">
          Estudiantes de Estadística Informática comprometidos con la investigación
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">👨‍💻</div>
            <h3>Jose Luis Garay Ramos</h3>
            <p className="team-role">Fundador & Líder</p>
            <p className="team-info">Estudiante de Estadística Informática</p>
            <div className="team-social">
              <a href="https://github.com/joseluis02678" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          
          <div className="team-card">
            <div className="team-avatar">👨💻</div>
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

      {/* CONTACTO */}
      <section id="contacto" className="section section-alt">
        <h2>Contáctanos</h2>
        <p className="section-description">
          ¿Tienes un proyecto o necesitas asesoría? ¡Escríbenos!
        </p>
        <div className="contacto-container">
          <img src={contacto} alt="Información de contacto SIMODA" className="contacto-img" />
          <div className="contacto-info">
            <h3>📧 Email</h3>
            <p>simoda@lamolina.edu.pe</p>
            
            <h3>💼 LinkedIn</h3>
            <a href="https://linkedin.com/company/simoda" target="_blank" rel="noopener noreferrer">
              simoda
            </a>
            
            <h3>📸 Instagram</h3>
            <a href="https://instagram.com/simoda_unalm" target="_blank" rel="noopener noreferrer">
              @simoda_unalm
            </a>

            <h3>📍 Ubicación</h3>
            <p>Universidad Nacional Agraria La Molina<br/>Facultad de Economía y Planificación<br/>Lima, Perú</p>
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