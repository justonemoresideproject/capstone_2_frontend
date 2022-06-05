import '../ComponentCss/Navbar2.css'

import { NavLink } from 'react-router-dom';

function Dropdown({submenu, dropDown}) {
    return (
        <ul 
            className={`dropDown${dropDown ? "-show" : ""}`}>
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