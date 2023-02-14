import React, { useEffect } from 'react'

import '../../ComponentCss/Navbar.css'

import { NavLink } from 'react-router-dom';
import useComponentVisible from '../VisualFunctions'

function Dropdown({submenu, dropDown}) {

    return (
        <ul 
            // className={'dropDown-show'}
            className={`dropDown${dropDown ? "-show" : ""}`}
            >
            {submenu.map((item, index) => {
                return (
                    <li className="navItem" key={index}>
                        <NavLink className="navLink"
                            to={item.location}>
                            {item.title}
                        </NavLink>
                    </li>
                    )
            })}
        </ul>
        )
        
}

export default Dropdown