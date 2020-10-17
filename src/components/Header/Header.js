import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

    const [open, setOpen] = useState(false);

    const className = open ? 'menu-btn open' : 'menu-btn';

    const toggleHamburgerIcon = () => {
        setOpen(!open);
    }

    return (
        <div className="header">
            {/* <h1>Tara O Photos</h1> */}
            {/* <GiHamburgerMenu onClick={toggle}/> */}
            <div className={className} onClick={toggleHamburgerIcon}>
                <div className="menu-btn__burger"></div>
            </div>
            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Projects</li>
                <li>Gallery</li>
            </ul>
            {/* <nav className={className}>
                <Link className="link" href="#projects">Projects</Link>
            </nav> */}
        </div>
    )
}

export default Header;