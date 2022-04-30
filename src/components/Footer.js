import facebook_logo from '../assets/facebook_logo.png';
import location_icon from '../assets/location_icon.png';
import mail_icon from '../assets/mail_icon.png';
import logo from '../assets/main_logo.png';
import phone_icon from '../assets/phone_icon.png';
import '../styles/Footer.css';

export default function Footer() {
    return (
        <div className="footer_main container-fluid d-flex justify-content-center align-items-center">
            <div className="footer_inner container d-flex flex-wrap justify-content-between align-items-start">
                <div className="d-flex mb-3 flex-column justify-content-center align-items-start brand">
                    <img src={logo} alt="logo" />
                    <span className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, repellat?</span>
                </div>
                
                <div className="d-flex mb-3 flex-column justify-content-center align-items-start footer_links">
                    <span>Home</span>
                    <span>Products</span>
                    <span>Blogs</span>
                    <span>Contact Us</span>
                    <span>About Us</span>
                    <span>Privacy Policy</span>
                </div>
                
                <div className="d-flex mb-3 contact_info flex-column justify-content-center align-items-start">
                    <div className="d-flex my-2 mx-2 justify-content-center align-items-center">
                        <img src={phone_icon} alt="phone_icon" />
                        <span className='mx-2'>+88 09638-107864</span>
                    </div>
                    
                    <div className="d-flex my-2 mx-2 justify-content-center align-items-center">
                        <img src={mail_icon} alt="phone_icon" />
                        <span className='mx-2'>info@foodsubway.com</span>
                    </div>
                    
                    <div className="d-flex my-2 mx-2 justify-content-center align-items-center">
                        <img src={location_icon} alt="phone_icon" />
                        <span className='mx-2'>Gazipur, Bangladesh</span>
                    </div>
                    
                </div>
                
                <div className="d-flex mt-3 mb-3 subscription flex-column justify-content-center align-items-start">
                    <span>Subscribe for Newsletters and Blogs</span>
                    
                    <div className="email_box my-2 d-flex justify-content-center align-items-center">
                        <input type="email" placeholder='Enter your email' />
                        <button>Subscribe</button>
                    </div>

                    <span>Follow us on</span>
                    <a href="https://www.facebook.com/foodsubway.official"><img className='mt-1' src={facebook_logo} alt="facebook_logo" /></a>

                    {/* <div className="social_links d-flex justify-content-start align-items-center">
                        
                    </div> */}
                
                </div>
            </div>
        </div>
    )
}