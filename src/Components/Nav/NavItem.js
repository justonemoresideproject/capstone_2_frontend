import '../ComponentCss/Navbar.css'

import { React, useState } from 'react'
import { NavLink } from "react-router-dom"

import Dropdown from "../Helpers/HelperComponents/Dropdown"
import { useComponentVisible } from '../Helpers/VisualFunctions'

function NavItem({item, length}) {
    const [dropDown, setDropDown] = useState(false)
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)

    // const handleClose = (e) => {
    //     const {name, className} = e.target
        
    //     if(name === undefined && className === "dropDown-show") setDropDown(false)
    // }

    // const handleChange = (e) => {
    //     console.log(e.target)
    // }

    // const handleBlur = (e) => {
    //     console.log(e.target.value)
    //     console.log('Blur')
    // }
    
    return (
        <li 
            ref={ref}
            className='navItem'>
            {item.submenu ? (
                <>
                    <button 
                        className="navButton"
                        type="button" 
                        aria-haspopup="menu"
                        aria-expanded={dropDown ? "true" : "false"}
                        onClick={() => setIsComponentVisible((prev) => !prev)}
                    >
                        {item.title}
                    </button>
                    <Dropdown 
                        submenu={item.submenu}
                        dropDown={isComponentVisible}
                        // handleBlur={handleBlur} 
                        // handleChange={handleChange}
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