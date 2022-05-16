import avatar from "../assets/avatar.png";
import photo_icon from "../assets/photo_icon.png";
import Navbar from "../components/Navbar";
import "../styles/EditProfile.css";

export default function EditProfile() {
    return (
        <>
        <Navbar />
        <div className="container profile_container d-flex flex-column justify-content-center align-items-center">
            <span className="profile_heading">Edit Profile</span>
            <img src={avatar} alt="avatar" />

            <div className="profile_inputs">
                <form mathod="post">
                    <div className="d-flex flex-wrap">
                        <input type="text" placeholder="Full name" />
                        <input type="number" placeholder="Phone number" />
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
                        <label className="d-flex justify-content-center align-items-center" htmlFor="profile_pic" id="change_pic"><img src={photo_icon} alt="" /> Change profile picture</label>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}