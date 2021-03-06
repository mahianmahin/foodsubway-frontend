import { faBars, faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import avatar from "../assets/avatar.png";
import logo from '../assets/main_logo_black.png';
import '../styles/Navbar.css';
import Menu from './Menu';


export default function Navbar() {
    const [phoneNavbar, setPhoneNavbar] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    var logged_in = false;

    const navigate = useNavigate();

    
    const header = {
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    // https://api.chucknorris.io/jokes/random

    useEffect(() => {
        // axios.get("http://127.0.0.1:8000/", options).then(response => console.log(response.data));
        fetch('https://foodsubwayapiend.pythonanywhere.com/', header)
        // fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {
            console.log(response);
            return response.json();
        }).then(data => console.log(data));
    }, [])

    return (
        <>
        { showMenu && <Menu /> }
        <div className="navbar_main d-flex align-items-center justify-content-between container">
            <div className="logo mx-2">
                <img src={logo} alt="logo" />
            </div>
            <div className="links d-flex justify-content-center align-items-center">
                <div className="links_section">
                    <Link to="/"><span className='span'>Home</span></Link>
                    <Link to="/products"><span className='span'>Products</span></Link>
                    <Link to="/blogs"><span className='span'>Blogs</span></Link>
                    <Link to="/contact"><span className='span'>Contact Us</span></Link>
                    <Link to="/about"><span className='span'>About Us</span></Link>
                    
                    <button onClick={() => navigate('/login')} id='login_button'>Login</button>
                    <button onClick={() => navigate('/signup')} id='signup_button'>Signup</button>
                </div>


                {logged_in && <img id="proPic" onClick={() => {setShowMenu(!showMenu)}} src={avatar} alt="avatar" />}

                <FontAwesomeIcon onClick={() => {setPhoneNavbar(!phoneNavbar)}} icon={faBars} className='bars mx-3' />
            </div>
        </div>


        {phoneNavbar && <div className="phone_navbar d-flex flex-column justify-content-center align-items-center">
            <img src={logo} alt="logo" />

            <Link to="/"><span>Home</span></Link>
            <Link to="/products"><span>Products</span></Link>
            <Link to="/blogs"><span>Blogs</span></Link>
            <Link to="/contact"><span>Contact Us</span></Link>
            <Link to="/about"><span>About Us</span></Link>

            {/* <button onClick={() => navigate('/login')} id='login_button'>Login</button>
            <button onClick={() => navigate('/signup')} id='signup_button'>Signup</button> */}
            
            <button onClick={() => navigate('dashboard')} id='login_button'>Dashboard</button>
            <button id='signup_button'>Logout</button>

            <button onClick={() => {setPhoneNavbar(!phoneNavbar)}} id='back_button'><FontAwesomeIcon icon={faCircleLeft} /> Back</button>
            
        </div>}

        </>
    )
}