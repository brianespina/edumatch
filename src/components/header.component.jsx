import React from 'react'
import {Link }from 'react-router-dom'

const Header = () => {
    return(
        <header>
            <div className="container">
                <a href="#">EduMatch</a>
                <div className="header-links">
                    <Link to="/login" className="button light">
                    Login
                    </Link>
                    <Link to="/register" className="button">
                    Signup 
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header