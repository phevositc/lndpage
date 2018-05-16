import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>PHEVOS IT CONSULTING</h1>
        <p>Migramos tu negocio al Cloud.<br /> Soluciones a medida a costes reducidos.</p>
    </header>
)

export default Header
