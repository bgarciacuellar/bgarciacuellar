import './App.css';

function App() {
  return (
    <div className="App">
       {/* <!--==================== HEADER ====================--> */}
    <header className="header" id="header">
      <nav className="nav container">
        <a className="nav__logo">bgarciacuellar |</a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Inicio
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> Sobre mí
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i> Servicios
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portafolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contáctame
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" id="nav-close"></i>
        </div>

        <div className="nav__btns">
          {/* <!-- Theme change button --> */}
          <i className="uil uil-moon change-theme" id="theme-button"></i>

          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-bars"></i>
          </div>
        </div>
      </nav>
    </header>

    {/* <!--==================== MAIN ====================--> */}
    <main className="main">
      {/* <!--==================== HOME ====================--> */}
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <div className="home__social">
              <a
                href="https://www.linkedin.com/in/bgarciacuellar/"
                target="_blank"
                className="home__social-icon"
              >
                <i className="uil uil-linkedin"></i>
              </a>

              <a
                href="https://twitter.com/bgarciacuellar"
                target="_blank"
                className="home__social-icon"
              >
                <i className="uil uil-twitter"></i>
              </a>

              <a
                href="https://github.com/bgarciacuellar"
                target="_blank"
                className="home__social-icon"
              >
                <i className="uil uil-github"></i>
              </a>
              <a
                href="https://www.instagram.com/bgarciacuellar/"
                target="_blank"
                className="home__social-icon"
              >
                <i className="uil uil-instagram"></i>
              </a>
            </div>

            <div className="home__img">
              <svg className="home__blob" viewBox="0 0 200 187">
                <mask id="mask0" mask-type="alpha">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                    165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                    129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                    -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  />

                  {/* <!--==================== 
                                        Insert your image in the Img folder and Change your image |
                                        Center your image with X: horizontal, Y: vertical 
                                    ====================--> */}
                  <image
                    className="home__blob-img"
                    x="30"
                    y="18"
                    href="assets/img/perfil.png"
                  />
                </g>
              </svg>
            </div>

            <div className="home__data">
              <h1 className="home__title">Hi, I'm Brayan</h1>
              <h3 className="home__subtitle">Frontend developer 🧑🏻‍💻</h3>
              <p className="home__description">
                Me apasiona el desarrollo y la ingeniería, el marketing digital
                y el diseño de productos. Tengo
                <span id="result-days"></span> días de vida, lo que se traduce
                en <span id="result-years"></span> años.
              </p>
              <a href="#contact" className="button button--flex">
                Contáctame <i className="uil uil-message button__icon"></i>
              </a>
            </div>
          </div>

          <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
              <i className="uil uil-mouse-alt home__scroll-mouse"></i>
              <span className="home__scroll-name">Desliza hacia abajo </span>
              <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
          </div>
        </div>
      </section>

      {/* <!--==================== ABOUT ====================--> */}
      <section className="about section" id="about">
        <h2 className="section__title">Sobre mí</h2>
        <span className="section__subtitle">Mi introducción</span>

        <div className="about__container container grid">
          <img src="assets/img/about.jpg" alt="" className="about__img" />

          <div className="about__data">
            <p className="about__description">
              Tengo experiencia en diferentes empresas, proyectos y comunidades
              llevando a cabo diferentes actividades en las que destacan
              desarrollador web, community manager y diseñador UI / UX.
            </p>

            <div className="about__info">
              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">Años de<br />experiencia</span>
              </div>

              <div>
                <span className="about__info-title">20+</span>
                <span className="about__info-name">Proyectos<br />terminado </span>
              </div>

              <div>
                <span className="about__info-title">05+</span>
                <span className="about__info-name">Empresas <br />trabajadas</span>
              </div>
            </div>

            <div className="about__buttons">
              {/* <!--==================== Change your CV ====================--> */}
              <a
                download=""
                href="assets/pdf/CV Brayan Garcia Cuellar .pdf"
                className="button button--flex"
              >
                Download CV <i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== SKILLS ====================--> */}
      <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Mi nivel tecnico</span>

        <div className="skills__container container grid">
          <div>
            {/* <!--=============== SKILLS 1 ===============--> */}
            <div className="skills__content skills__open">
              <div className="skills__header">
                <i className="uil uil-brackets-curly skills__icon"></i>

                <div>
                  <h1 className="skills__title">Frontend developer</h1>
                  <span className="skills__subtitle">Más de 5 años</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/html.svg "
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">HTML</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__html"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/css.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">CSS</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__css"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/js.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">JavaScript</h3>
                    <span className="skills__number"> 60%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__js"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/react.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">React</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/wordpress.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Wordpress</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/bootstrap.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Bootstrap</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/materialize.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Materialize</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/sass.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">SASS</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div>

                 <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/vue.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Vue.js</h3>
                    <span className="skills__number">Soon</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__react"></span>
                  </div>
                </div> 
              </div>
            </div>

            {/* <!--=============== SKILLS 2 ===============--> */}
            <div className="skills__content skills__close">
              <div className="skills__header">
                <i className="uil uil-server-network skills__icon"></i>

                <div>
                  <h1 className="skills__title">Backend developer</h1>
                  <span className="skills__subtitle">Más de 2 años</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/php.svg "
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">PHP</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__php"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/nodejs.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Node Js</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__node"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/git.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__firebase"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/python.svg "
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__number">55%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__python"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/webpack.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Webpack</h3>
                    <span className="skills__number">55%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__python"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/laravel.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Laravel</h3>
                    <span className="skills__number">Soon</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__python"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <!--=============== SKILLS 3 ===============--> */}
            <div className="skills__content skills__close">
              <div className="skills__header">
                <i className="uil uil-swatchbook skills__icon"></i>

                <div>
                  <h1 className="skills__title">Diseño UX/UI</h1>
                  <span className="skills__subtitle">Más de 4 años</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/figma.svg "
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__figma"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/sketch.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Sketch</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__sketch"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/photoshop.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Photoshop</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/illustrator.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Illustrator</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/aftereffects.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">After Effects</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--=============== SKILLS 4 ===============--> */}
            <div className="skills__content skills__close">
              <div className="skills__header">
                <i className="uil uil-analytics skills__icon"></i>

                <div>
                  <h1 className="skills__title">Marketing Digital</h1>
                  <span className="skills__subtitle">Más de 5 años</span>
                </div>

                <i className="uil uil-angle-down skills__arrow"></i>
              </div>

              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/seo.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">SEO</h3>
                    <span className="skills__number">90%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__figma"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/mail.svg"
                      alt=""
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Email Marketing</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__sketch"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/facebook.svg "
                      alt="Icon Facebook Ads"
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Facebook Ads</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/instagram.svg"
                      alt="Instagram Ads"
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Instagram Ads</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/ads.svg"
                      alt="Instagram Ads"
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Google Ads</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
                  </div>
                </div>

                <div className="skills__data">
                  <div className="skills__titles">
                    <img
                      src="assets/img/svg/google-analytics.svg"
                      alt="Instagram Ads"
                      className="skills__logo"
                    />
                    <h3 className="skills__name">Google Analytic</h3>
                    <span className="skills__number">85%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__photoshop"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== QUALIFICATION ====================--> */}
      <section className="qualification section">
        <h2 className="section__title">Experiencia & Educación</h2>
        <span className="section__subtitle">Mi viaje profesional</span>

        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className="qualification__button button--flex qualification__active"
              data-target="#education"
            >
              <i className="uil uil-graduation-cap qualification__icon"></i>
              Experiencia
            </div>

            <div className="qualification__button button--flex" data-target="#work">
              <i className="uil uil-briefcase-alt qualification__icon"></i>
              Educación
            </div>
          </div>

          <div className="qualification__sections">
            {/* <!--=============== QUALIFICATION CONTENT 1 ===============--> */}
            <div
              className="qualification__content qualification__active"
              data-content
              id="education"
            >
              {/* <!--=============== QUALIFICATION 1 ===============--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle">- Nimbus Crea</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2021 - Actual
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 2 ===============--> */}
              <div className="qualification__data">
                <div></div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">Frontend Developer</h3>
                  <span className="qualification__subtitle">- Grupo Alferza</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2019 - 2021
                  </div>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 3 ===============--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Web Development</h3>
                  <span className="qualification__subtitle"> - Sitio Random</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2019 - 2020
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 4 ===============--> */}
              <div className="qualification__data">
                <div></div>

                <div className="qualification__time">
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>

                <div>
                  <h3 className="qualification__title">Programador</h3>
                  <span className="qualification__subtitle">
                    - MRCI Guadalajara</span
                  >
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2016 - 2018
                  </div>
                </div>
              </div>
            </div>

            {/* <!--=============== QUALIFICATION CONTENT 2 ===============--> */}
            <div className="qualification__content" data-content id="work">
              {/* <!--=============== QUALIFICATION 1 ===============--> */}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Software Engineer</h3>
                  <span className="qualification__subtitle">Microsoft - </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2016-2018
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>

              {/* <!--=============== QUALIFICATION 2 ===============--> */}
              <div className="qualification__data">
                <div></div>

                <div className="qualification__time">
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>

                <div>
                  <h3 className="qualification__title">
                    Ingeniería en Sistemas de Información
                  </h3>
                  <span className="qualification__subtitle">Sitio Random - </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2018-2020
                  </div>
                </div>
              </div>

              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Ui Designer</h3>
                  <span className="qualification__subtitle">Figma - </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    2020-2021
                  </div>
                </div>

                <div>
                  <span className="qualification__rounder"></span>
                  {/* <!-- <span className="qualification__line"></span> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== SERVICES ===================--> */}
      <section className="services section" id="services">
        <h2 className="section__title">Servicios</h2>
        <span className="section__subtitle">Lo que ofrezco</span>

        <div className="services__container container grid">
           {/* <!--==================== SERVICES 1===================--> */}
          <div className="services__content">
            <div>
              <i className="uil uil-web-grid services__icon"></i>
              <h3 className="services__title">
                Ui/Ux <br />
                Designer
              </h3>
            </div>
            <span
              className="button button--flex button--small button--link services__button"
            >
              Ver más
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Ui/Ux <br />
                  Designer
                </h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Web page development.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create ux element interactions.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* =============== SERVICES 2 =============== */}
          <div className="services__content">
            <div>
              <i className="uil uil-arrow services__icon"></i>
              <h3 className="services__title">
                Frontend <br />
                Developer
              </h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
            >
              Ver más
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Frontend <br />
                  Developer
                </h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Web page development.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create ux element interactions.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* =============== SERVICES 3 =============== */}
          <div className="services__content">
            <div>
              <i className="uil uil-pen services__icon"></i>
              <h3 className="services__title">
                Branding <br />
                Designer
              </h3>
            </div>

            <span
              className="button button--flex button--small button--link services__button"
            >
              Ver más
              <i className="uil uil-arrow-right button__icon"></i>
            </span>

            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Branding <br />
                  Designer
                </h4>
                <i className="uil uil-times services__modal-close"></i>

                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I develop the user interface.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>Web page development.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I create ux element interactions.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p>I position your company brand.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== PORTFOLIO ====================--> */}
      <section className="portfolio section" id="portfolio">
        <h2 className="section__title">Portafolio</h2>
        <span className="section__subtitle">Mi trabajo más reciente</span>

        <div className="portfolio__container container swiper-container">
          <div className="swiper-wrapper">
            {/* <!--=============== Portfolio Alferza Jobs ===============--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/img/portfolio/alferzajobs.png"
                alt="Alferza Jobs"
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Alferza Jobs</h3>
                <p className="portfolio__description">
                  Bolsa de trabajo mexicana para encontrar empleo. ¡Encuentra el
                  trabajo de tus sueños con nosotros!.
                </p>
                <a
                  href="https://alferzajobs.com/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Visitar
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* <!--=============== Portfolio Interspa ===============--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/img/portfolio/interspa.png"
                alt="Interspa"
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Interspa</h3>
                <p className="portfolio__description">
                  Más de 30 años de experiencia fabricando tinas de hidromasaje.
                </p>
                <a
                  href="https://interspa.com.mx/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Visitar
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
            {/* <!--=============== Portfolio CASA BELOT ===============--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/img/portfolio/casabelot.png"
                alt="Casa Belot"
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">CASA BELOT</h3>
                <p className="portfolio__description">
                  La Kombucha es una nutritiva bebida fermentada a partir de té,
                  llena de beneficios para la salud.
                </p>
                <a
                  href="https://www.casabelot.com/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Visitar
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* <!--=============== Portfolio Crédito Forja ===============--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/img/portfolio/forja.png"
                alt="Crédito Forja"
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Crédito Forja</h3>
                <p className="portfolio__description">
                  Financiamiento crediticio, comprometido con el desarrollo y
                  bienestar de las familias mexicanas.
                </p>
                <a
                  href="https://interspa.com.mx/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Visitar
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
            {/* <!--=============== Portfolio Trece Cielos ===============--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/img/portfolio/trececielos.png"
                alt="Trece Cielos"
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Trece Cielos</h3>
                <p className="portfolio__description">
                  Somos un desarrollo ubicado en la Rivera de Chapala en la zona
                  de Chulavista, Jocotepec. El lugar para vivir o vacacionar.
                </p>
                <a
                  href="https://13cielos.mx/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Visitar
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* <!--=============== Portfolio Levelup women ===============--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/img/portfolio/levelupwomen.png"
                alt="level up women"
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">levelupwomen</h3>
                <p className="portfolio__description">
                  Es un proyecto social con el fin de dar aporo a la asociación
                  de la cruz rosa, 5 emprendedoras ofrecen su conocimiento en un
                  workshop. Todo lo recaudado será donado.
                </p>
                <a
                  href="https://13cielos.mx/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Visitar
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>

            {/* <!--=============== Portfolio Nimbus crea ===============--> */}
            <div className="portfolio__content grid swiper-slide">
              <img
                src="assets/img/portfolio/nimbus.png"
                alt="level up women"
                className="portfolio__img"
              />

              <div className="portfolio__data">
                <h3 className="portfolio__title">Nimbus Crea</h3>
                <p className="portfolio__description">
                  Agencia de marketing digital en Guadalajara especializada en
                  campañas de redes sociales, páginas web, SEO y fotografía.
                </p>
                <a
                  href="https://nimbuscrea.com/"
                  target="_blank"
                  className="button button--flex button--small portfolio__button"
                >
                  Visitar
                  <i className="uil uil-arrow-right button__icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="swiper-button-next">
            <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
          </div>
          <div className="swiper-button-prev">
            <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
          </div>

          <div className="swiper-pagination"></div>
        </div>
      </section>

      {/* <!--==================== PROJECT IN MIND ====================--> */}
      <section className="project">
        <div className="project__bg">
          <div className="project__container container grid">
            <div id="project__animContainer" className="project__animContainer">
              {/* <!-- Scripts --> */}
              {/* <script
                className="project__img"
                src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.5/lottie.min.js"
              ></script> */}
              {/* <!-- path of bodymovin library--> */}
            </div>
            <div className="project__data">
              <h2 className="project__title">Blog</h2>
              <p className="project__description">
                Me gusta aprender y compartirlo con todos. <br />🖥 Tecnología ,
                📣 Marketing,💰 Finanzas y más...🚀
              </p>
              <a href="#" className="button button--flex button--white">
                Follow
                <i className="uil uil-plus button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== TESTIMONIAL ====================--> */}
       <section className="testimonial section">
            <h2 className="section__title">Testimonial</h2>
            <span className="section__subtitle">My client saying</span>

            <div className="testimonial__container container swiper-container">
                <div className="swiper-wrapper"> 
      {/* <!--=============== TESTIMONIAL 1 ===============--> */}
       <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
                <div className="testimonial__header">
                    {/* <img src="assets/img/testimonial1.jpg" alt="" className="testimonial__img"> */}

                    <div>
                        <h3 className="testimonial__name">Sara Smith</h3>
                        <span className="testimonial__client">Client</span>
                    </div>
                </div>

                <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                </div>
            </div>

            <p className="testimonial__description">I get a good impression, I carry
                out my project with all the possible quality and attention and
                support 24 hours a day.
            </p>
        </div>

      {/* <!--=============== TESTIMONIAL 2 ===============--> */}
       <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
                <div className="testimonial__header">
                    {/* <img src="assets/img/testimonial2.jpg" alt="" className="testimonial__img"> */}

                    <div>
                        <h3 className="testimonial__name">Matt Robinson</h3>
                        <span className="testimonial__client">Client</span>
                    </div>
                </div>

                <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                </div>
            </div>

            <p className="testimonial__description">I get a good impression, I carry
                out my project with all the possible quality and attention and
                support 24 hours a day.
            </p>
        </div> 

      {/* <!--=============== TESTIMONIAL 3 ===============--> */}
       <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
                <div className="testimonial__header">
                    {/* <img src="assets/img/testimonial3.jpg" alt="" className="testimonial__img"> */}

                    <div>
                        <h3 className="testimonial__name">Raul Harris</h3>
                        <span className="testimonial__client">Client</span>
                    </div>
                </div>

                <div>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                    <i className="uil uil-star testimonial__icon-star"></i>
                </div>
            </div>

            <p className="testimonial__description">I get a good impression, I carry
                out my project with all the possible quality and attention and
                support 24 hours a day.
            </p>
        </div>
        </div>
        <div className="swiper-pagination swiper-pagination-testimonial"></div>
        </div> 
        </section>

      {/* <!--==================== CONTACT ME ====================--> */}
      <section className="contact section" id="contact">
        <h2 className="section__title">Contáctame</h2>
        <span className="section__subtitle">Ponte en contacto</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-phone contact__icon"></i>
              <div>
                <h3 className="contact__title">Teléfono</h3>
                <span className="contact__subtitle">
                  <a href="tel:3338163585">52+ 33 3816 3585</a>
                </span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-envelope contact__icon"></i>
              <div>
                <h3 className="contact__title">Correo electrónico</h3>
                <span className="contact__subtitle">
                  <a href="mailto:contacto@bgarciacuellar.com"
                    >contacto@bgarciacuellar.com</a
                  >
                </span>
              </div>
            </div>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>
              <div>
                <h3 className="contact__title">Ubicación</h3>
                <span className="contact__subtitle">
                  <a href="https://goo.gl/maps/CgQo2nbfKVzSfQfd7"
                    >Guadalajara, Jalisco, México</a
                  >
                </span>
              </div>
            </div>
          </div>

           
        </div>
      </section>
    </main>

    {/* <!--==================== FOOTER ====================--> */}
    <footer className="footer">
      <div className="footer__bg">
        <p className="footer__copy">
          &#169;Derechos reservados. bgarciacuellar. De 🇲🇽 para el mundo ❤️.
        </p>
      </div>
    </footer>

    {/* <!--========== SCROLL TOP ==========--> */}
    <a href="#" className="scrollup" id="scroll-top">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>

    </div>
  );
}

export default App;
