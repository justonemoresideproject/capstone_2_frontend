import './ComponentCss/Home.css'

import { Outlet } from 'react-router';
import NavigationBar from './Nav/Navbar'

function Home() {
    return (
        <div className='homeWrapper'>
            <NavigationBar />
            <Outlet />
        </div>
    )
}

export default Home