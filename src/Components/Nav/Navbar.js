import '../ComponentCss/Navbar2.css'

import { useSelector } from 'react-redux';
import { NavItems } from './NavItems'
import NavItem from './NavItem'

function NavigationBar() {
    const store = useSelector(store => store)
    const cartKeys = []

    if(store.cartItems) {
        Object.keys(store.cartItems).forEach(key => {
            cartKeys.push(key)
        })
    }
    
    return (
        <nav id="navWrapper">
            <ul className="navMenu">
                {NavItems.map((item, index) => {
                    return (
                        <NavItem item={item} key={index} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavigationBar