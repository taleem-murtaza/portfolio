import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../../assets/images/Taleem_Murtaza_20240808_163001_0000-removebg-preview.png';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MobileNavbar from './mobileNavbar/MobileNavbar';
function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = ()=>{
        setOpenMenu(!openMenu)
    }
    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '../../../assets/AG.pdf'; // Make sure the path matches the location of your resume file
        link.download = 'Taleem_murtaza.pdf'; // The name of the file after download
        link.click();
    }

  return (
    <>

        <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu}/>

        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className='logo' src={Logo}/>

                <ul>
                    <li>
                        <a href='#home' className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a href='#skills' className="menu-item">Skills</a>
                    </li>
                    <li>
                        <a href='#work' className="menu-item">Work Experience</a>
                    </li>
                    <li>
                        <a href='#contact' className="menu-item">Contact me</a>
                    </li>
                    <button className='contact-btn' onClick={downloadResume}>Hire me</button>

                    
                </ul>
                <button className='menu-btn' onClick={toggleMenu}>
                    <span style={{fontSize:"1.8rem"}}><MenuOutlinedIcon>{openMenu ? "close" : "menu"}</MenuOutlinedIcon> </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar