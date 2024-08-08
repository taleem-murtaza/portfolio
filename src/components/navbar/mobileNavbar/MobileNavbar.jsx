import React from 'react'
import './MobileNavbar.css'
import Logo from '../../../../assets/images/logo.png';
function MobileNavbar( {isOpen, toggleMenu }) {
  return (
    <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
            <div className='mobile-menu-container'>
                <img className='logo' src={Logo} />
                <ul>
                    <li>
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a className="menu-item">Projects</a>
                    </li>
                    <li>
                        <a className="menu-item">Contact me</a>
                    </li>
                    <button className='contact-btn' onClick={()=>{}}>Hire me</button>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MobileNavbar