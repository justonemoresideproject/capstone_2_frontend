import React from 'react'

import '../ComponentCss/Navbar.css'

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavItems, UserNavItems, AdminNavItems, AuthNavItems } from './NavItems'
import { logout } from '../../actions/Auth'
import { resetUser } from '../../actions/User'
import NavItem from './NavItem'

function NavigationBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const store = useSelector(store => store)
    const cartKeys = Object.keys(store.cart)

    console.log(store)

    if(store.cart) {
        Object.keys(store.cart).forEach(key => {
            cartKeys.push(key)
        })
    }

    const handleLogout = () => {
        dispatch(logout())
        navigate('/')
    }
    
    return (
        <nav id="navWrapper">
            <ul className="navMenu">
                {NavItems.map((item, index) => {
                    return (
                        <NavItem 
                            item={item} 
                            key={`NavItem_${index}`} 
                            length={NavItems.length} />
                    )
                })}
                {store.auth.isAdmin ? 
                <>
                    {AdminNavItems.map((item, index) => {
                        return (
                            <NavItem item={item} key={`AdminNavItem_${index}`} />
                        )})
                    }    
                </> : <>
                </>}
                {store.auth.token && store.auth.userId ?
                <>
                    {UserNavItems.map((item, index) => {
                        return (
                            <NavItem item={item} key={`UserNavItem_${index}`} />
                        )
                    })}
                    <li>
                        <button className="navButton" onClick={() => dispatch(logout())}>Logout</button>
                    </li>
                
                </>    
                     : AuthNavItems.map((item, index) => {
                    return (
                        <NavItem item={item} key={`AuthNavItem_${index}`} />
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavigationBar