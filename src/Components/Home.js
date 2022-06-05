import './ComponentCss/Home.css'

import { Outlet } from 'react-router';
import NavigationBar from './Nav/Navbar'

function Home() {
    return (
        <div className='homeWrapper'>
            <h1>Aglets</h1>
            <NavigationBar />
            <Outlet />
        </div>
    )
}

export default Home