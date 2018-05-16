import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>Equipo</h2>
            <p>Somos un equipo de personas apasionadas por su trabajo. No somos un grupo de individuos. Somos un equipo. Nos apoyamos unos a otros, aprendemos y nos divertimos juntos.
            </p>
            {/* <ul className="actions">
                <li><Link to="/generic" className="button">Quieres unirte</Link></li>
            </ul> */}
        </section>
        <section>
            <h2>Contacto</h2>
            <dl className="alt">
                <dt>Address</dt>
                <dd>C/ Carcel, 8 &bull; Llerena, Badajoz &bull; 06900 &bull; ESPAÑA</dd>
                <dt>Telefono</dt>
                <dd>(+34) 637 447013 &bull; (+34) 666 221219</dd>
                <dt>Email</dt>
                <dd><a href="#">phevositc@gmail.com</a></dd>
            </dl>
            {/* <ul className="icons">
                <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
            </ul> */}
        </section>
        <p className="copyright">&copy; Phevos IT consulting 2018. Todos los derechos reservados.</p>
    </footer>
)

export default Footer
