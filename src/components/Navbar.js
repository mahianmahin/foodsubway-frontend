import { faBars, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import logo from '../assets/main_logo_black.png';
import '../styles/Navbar.css';


export default function Navbar() {
    const [phoneNavbar, setPhoneNavbar] = useState(false);

    return (
        <>
        <div className="navbar_main d-flex align-items-center justify-content-between container">
            <div className="logo mx-2">
                <img src={logo} alt="logo" />
            </div>
            <div className="links d-flex justify-content-center align-items-center">
                <div className="links_section">
                    <Link to="/"><span className='span'>Home</span></Link>
                    <Link to="/products"><span className='span'>Products</span></Link>
                    <Link to="/blogs"><span className='span'>Blogs</span></Link>
                    <Link to="/"><span className='span'>Contact Us</span></Link>
                    <Link to="/"><span className='span'>About Us</span></Link>
                    
                    {/* <button id='login_button'>Login</button>
                    <button id='signup_button'>Signup</button> */}
                </div>


                <img src={avatar} alt="avatar" />

                <FontAwesomeIcon onClick={() => {setPhoneNavbar(!phoneNavbar)}} icon={faBars} className='bars mx-3' />
            </div>
        </div>

        {phoneNavbar && <div className="phone_navbar d-flex flex-column justify-content-center align-items-center">
            <img src={logo} alt="logo" />

            <Link to="/"><span>Home</span></Link>
            <Link to="/products"><span>Products</span></Link>
            <Link to="/blogs"><span>Blogs</span></Link>
            <Link to="/"><span>Contact Us</span></Link>
            <Link to="/"><span>About Us</span></Link>
{/* 
            <button id='login_button'>Login</button>
            <button id='signup_button'>Signup</button> */}
            
            <button id='login_button'>Dashboard</button>
            <button id='signup_button'>Logout</button>

            <button onClick={() => {setPhoneNavbar(!phoneNavbar)}} id='back_button'><FontAwesomeIcon icon={faCircleLeft} /> Back</button>
            
        </div>}

        </>
    )
}