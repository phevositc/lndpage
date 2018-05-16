import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import imgDevices from '../assets/images/devices.svg'
import imgProty from '../assets/images/paper-plane2.svg'
import imgMagnifier from '../assets/images/magnifier.svg'
import imgTeam from '../assets/images/team.svg'
import imgStartProject from '../assets/images/start-a-project.svg'
import imgPjGits from '../assets/images/projects/gits-logo.svg'
import imgPjSS from '../assets/images/projects/SS-logo.svg'
import imgPjERP from '../assets/images/projects/ERPfact-logo.svg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Nuestros Objetivos</h2>
                </header>
                <p><strong>Ofrecemos soluciones de arquitectura para migrar su negocio a la nube y creamos Apps Innovadoras que se ajusten a las necesidades de su negocio.</strong></p>
                <ul className="actions">
                  {/* <li><Link to="/generic" className="button">Conocer más</Link></li> */}
                </ul>
              </div>
              {/* <span className="image"><img src={pic01} alt="" /></span> */}
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Nuestros principales servicios</h2>
            </header>
            <ul className="features">
              <li>
                {/* <span className="icon major style1 fa-code"></span> */}
                <span className="image"><img src={imgDevices} alt="" /></span>
                <h2 className="section_subTitle">Desarrollo de Software</h2>
                <p><strong>Comenzamos con el análisis de los requerimientos de tu negocio y diseñamos la arquitectura.</strong> Despues estimamos tiempo, costes y recomendamos la mejor aproximación.
                </p>
              </li>
              <li>
                <span className="image"><img src={imgMagnifier} alt="" /></span>
                <h3 className="section_subTitle">Soluciones Tecnológias</h3>
                <p>Gana en velocidad con la Migración Cloud.
                  <strong> Una arquitectura cloud bien diseñada se adapta a tus necesidades de negocio.</strong> Migra tus aplicaciones a un entorno cloud, para obtener escalabilidad y un mejor rendimiento, optimizando costes.
                </p>
              </li>
              <li>
                <span className="image"><img src={imgProty} alt="" /></span>
                <h3 className="section_subTitle">Rapido Prototipado</h3>
                <p>Soluciones a medida y funcionalidades únicas, necesitan un rápido prototipado. <strong>Por eso ofrecemos el servicio de prototipado</strong></p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
              {/* <li><Link to="/generic" className="button">Conocer más</Link></li> */}
              </ul>
            </footer>
          </section>

          <section id="second" className="main special">
            <header className="major">
              <h2>Nuestros Projectos</h2>
              <p>Somos expertos en desarrollo de aplicaciones para el sector del Transporte Sanitario.<br />
              Analizamos sus requeremientos, estimamos costes y cuidamos el proceso completo desde la primera linea de código.
               </p>
            </header>
            <ul className="features">
              <li>
                {/* <span className="icon major style1 fa-code"></span> */}
                <span className="image"><img src={imgPjGits} alt="" /></span>
                <h2 className="section_subTitle">Plataforma GITS</h2>
                <p><strong>Gestión Integral Transporte Sanitario.</strong><br/>
                 Seguimiento y gestión en Tiempo Real. 
                </p>
              </li>
              <li>
                <span className="image"><img src={imgPjSS} alt="" /></span>
                <h3 className="section_subTitle">Gestión Documental</h3>
                <p>Gestión documental para Servicios Sociales. <strong>Gestión avanzada de toda la documentación para centros de Servicios Sociales</strong></p>
              </li>
              <li>
              <span className="image"><img src={imgPjERP} alt="" /></span>
                <h3 className="section_subTitle">ERP Facturación</h3>
                <p>Diseñado para usted pensando en la sencillez, <strong>tenga o no conocimientos de facturación.</strong><br />
                Descubre lo que puede hacer por su empresa.
                </p>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Inicie un projecto con nosotros</h2>
                </header>
                <p><strong>Cuéntanos tu idea y la haremos realidad.</strong></p>
                {/* <ul className="actions">
                  <li><Link to="/generic" className="button">Conocer más</Link></li>
                </ul> */}
              </div>
              <span className="image"><img src={imgStartProject} alt="" /></span>
            </div>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
