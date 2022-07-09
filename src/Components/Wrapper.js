import './ComponentCss/Home.css'

import { Outlet, useNavigate } from 'react-router';
import NavigationBar from './Nav/Navbar'

/**
 * 
 * @returns wrapper component for routes
 */

function Wrapper() {
    const navigate = useNavigate();

    navigate('/home')

    return (
        <div className='homeWrapper'>
            <h1>Aglets</h1>
            <NavigationBar />
            <Outlet />
        </div>
    )
}

export default Wrapper