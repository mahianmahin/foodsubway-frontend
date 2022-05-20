import { Link } from "react-router-dom";
import photo_icon from "../assets/photo_icon.png";
import Navbar from "../components/Navbar";
import "../styles/EditProfile.css";

export default function EditProfile() {
    return (
        <>
        <Navbar />
        <div className="container profile_container d-flex flex-column justify-content-center align-items-center">
            <span className="profile_heading my-3">Create an account</span>

            <div className="profile_inputs">
                <form mathod="post">
                    <div className="d-flex flex-wrap">
                        <input type="text" placeholder="Full name" />
                        <input type="number" placeholder="Phone number" />
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm password" />
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        <input type="text" placeholder="Email address" />
                        <select name="district" id="">
                            <option value="" selected disabled>District</option>
                            <option value="gazipur">Gazipur</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="mymenshing">Mymenshing</option>
                        </select>
                    </div>
                    
                    <input type="text" id="address" placeholder="Shipping address" />
                    
                    <div className="d-flex flex-wrap">
                        <input type="file" id="profile_pic" />
                        <label className="d-flex justify-content-center align-items-center" htmlFor="profile_pic" id="change_pic"><img src={photo_icon} alt="" /> Add profile picture</label>
                        <button>Signup</button>
                    </div>

                    <span className="mt-1 d-flex justify-content-center">Already have an account? <Link to="/login" style={{textDecoration: 'none', color: 'green'}}>&nbsp;Login!</Link></span>
                </form>
            </div>
        </div>
        </>
    )
}