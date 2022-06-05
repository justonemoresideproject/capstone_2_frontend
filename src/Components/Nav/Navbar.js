import '../ComponentCss/Navbar2.css'

import { useDispatch, useSelector } from 'react-redux';
import { NavItems, AdminNavItems, AuthNavItems } from './NavItems'
import { resetToken } from '../../actions/Auth'
import { resetUser } from '../../actions/User'
import NavItem from './NavItem'

function NavigationBar() {
    const dispatch = useDispatch()
    const store = useSelector(store => store)
    const cartKeys = []
    console.log(store)        

    if(store.cartItems) {
        Object.keys(store.cartItems).forEach(key => {
            cartKeys.push(key)
        })
    }

    function logout() {
        dispatch(resetToken)
        dispatch(resetUser)
    }
    
    return (
        <nav id="navWrapper">
            <ul className="navMenu">
                {NavItems.map((item, index) => {
                    return (
                        <NavItem item={item} key={`NavItem_${index}`} />
                    )
                })}
                {store.auth.token && store.auth.userId ?    <li>
                        <btn className="navLogout" onClick={() => logout()}>Logout</btn>
                    </li> : AuthNavItems.map((item, index) => {
                    return (
                        <NavItem item={item} key={`AuthNavItem_${index}`} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavigationBar