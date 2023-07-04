import React, { useState } from "react"
import { Link } from "react-router-dom"
import { NavLogo, NavWrapper, NavList, NavItems} from "./elements"
import {VscMenu, VscChromeClose} from "react-icons/vsc" 

const Navbar = () =>{

    const[clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }
    return(
        <NavWrapper>
            <NavList className="main-container">
                <NavLogo>Emily Paulin
                <span>SEO Writer y Developer</span>
                </NavLogo>
                <NavItems open={clicked}>
                <li><Link to='/' className="linkmenu" onClick={handleClick}>Inicio</Link></li>
                <li><Link to='/portafolio' className="linkmenu" onClick={handleClick}>Portafolio</Link></li>
                <li><Link to='/contacto' className="linkmenu" onClick={handleClick}>Contacto</Link></li>
                </NavItems>
                <button onClick={handleClick}>{clicked ? <VscChromeClose/> : <VscMenu />}</button>
            </NavList>
        </NavWrapper>
    )
}

export default Navbar