import '../ComponentCss/Navbar2.css'

import { React, useState } from 'react'
import { NavLink } from "react-router-dom"

import Dropdown from "./Dropdown"

function NavItem({item, length}) {
    const [dropDown, setDropDown] = useState(false)
    
    return (
        <li className='navItem'>
            {item.submenu ? (
                <>
                    <button 
                        className="navButton"
                        type="button" 
                        aria-haspopup="menu"
                        aria-expanded={dropDown ? "true" : "false"}
                        onClick={() => setDropDown((prev) => !prev)}
                    >
                        {item.title}
                    </button>
                    <Dropdown 
                        submenu={item.submenu}
                        dropDown={dropDown} 
                    />
                </>
            ) : (
                <NavLink className="navLink" to={item.location}>
                    {item.title}
                </NavLink>
            )}
        </li>
    )
}

export default NavItem