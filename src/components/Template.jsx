import React from 'react'
import { Outlet, Link } from 'react-router-dom'


const Template = () => {
    return (<>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/service">Service</Link>
        </nav>
        <Outlet />
    </>
    )
}

export default Template