import logo from '../assets/main_logo_black.png';
import '../styles/Navbar.css';

export default function Navbar() {
    return (
        <div className="navbar_main d-flex align-items-center justify-content-between container">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="links d-flex justify-content-center align-items-center">
                <span>Home</span>
                <span>Products</span>
                <span>Blogs</span>
                <span>Contact Us</span>
                <span>About Us</span>

                <button id='login_button'>Login</button>
                <button id='signup_button'>Signup</button>
            </div>
        </div>
    )
}