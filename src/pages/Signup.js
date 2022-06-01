import { useState } from 'react';
import { Link } from "react-router-dom";
import photo_icon from "../assets/photo_icon.png";
import Navbar from "../components/Navbar";
import "../styles/EditProfile.css";

export default function EditProfile() {
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [district, setDistrict] = useState('');
    const [address, setAddress] = useState('');
    const [profilePic, setProfilePic] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://api.alquran.cloud/v1/quran/en.asad')
            .then(response => response.json())
            .then(data => console.log(data.data))
            .catch(error => console.log(error))

        // const header = {
        //     mode: 'no-cors',
        //     method: 'POST',
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json"
        //         // "Content-Type": "multipart/form-data;"
        //     },
        //     // body: JSON.stringify({
        //     //     full_name: fullName,
        //     //     email: email,
        //     //     phone: number,
        //     //     district: district,
        //     //     address: address,
        //     //     // profile_pic: profilePic,
        //     //     password: password,
        //     // })
            
        //     // body: data
        // }

        // fetch('http://13.212.76.195:8000/signup/', header)
        // fetch('http://127.0.0.1:8000/signup/', header)
        //     .then(response => response.json())
        //     .then(data => console.log(data.data))
        //     .catch(error => console.log(error))
    }

    return (
        <>
        <Navbar />
        <div className="container profile_container d-flex flex-column justify-content-center align-items-center">
            <span className="profile_heading my-3">Create an account</span>

            <div className="profile_inputs">
                <form>
                    <div className="d-flex flex-wrap">
                        <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" placeholder="Full name" />
                        <input onChange={(e) => setNumber(e.target.value)} value={number} type="number" placeholder="Phone number" />
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                        <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" placeholder="Confirm password" />
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email address" />
                        <select onChange={(e) => setDistrict(e.target.value)} value={district} name="district" id="">
                            <option value="" selected disabled>District</option>
                            <option value="gazipur">Gazipur</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="mymenshing">Mymenshing</option>
                        </select>
                    </div>
                    
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" id="address" placeholder="Shipping address" />
                    
                    <div className="d-flex flex-wrap">
                        <input onChange={(e) => setProfilePic(e.target.files[0])} accept="image/*" type="file" id="profile_pic" />
                        <label className="d-flex justify-content-center align-items-center" htmlFor="profile_pic" id="change_pic"><img src={photo_icon} alt="" /> Add profile picture</label>
                        <button onClick={handleSubmit}>Signup</button>
                    </div>

                    <span className="mt-1 d-flex justify-content-center">Already have an account? <Link to="/login" style={{textDecoration: 'none', color: 'green'}}>&nbsp;Login!</Link></span>
                </form>
            </div>
        </div>
        </>
    )
}