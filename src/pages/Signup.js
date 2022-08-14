import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { UtilitiesContext } from "../App";
import photo_icon from "../assets/photo_icon.png";
import Message from '../components/Message';
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

    const [message, setMessage] = useState(false);
    const [messageContent, setMessageContent] = useState('');
    const [loading, setLoading] = useState(false);

    const [deliveryCharges, setDeliveryCharges] = useState([]);

    const navigate = useHistory();
    const context = useContext(UtilitiesContext);

    const closeMessageBox = () => {
        setMessage(false);
    }

    useEffect(() => {
        fetch(context.baseUrl + '/delivery_charges/')
        .then(response => response.json())
        .then(data => setDeliveryCharges(data.data));
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();

        const data = new FormData();

        data.append('full_name', fullName);
        data.append('email', email);
        data.append('phone', number);
        data.append('district', district);
        data.append('address', address);
        data.append('password', password);
        data.append('profile_pic', profilePic);

        if (password === confirmPassword) {
            axios.post(context.baseUrl + '/signup/', data)
                .then(response => {
                    navigate.push('/login');
                })
        } else {
            setMessageContent("Passwords don't match!");
            setMessage(true);
        }
    }

    return (
        <>
        <Navbar />
        {message && <Message action={closeMessageBox} message={messageContent} />}
        <div className="container profile_container d-flex flex-column justify-content-center align-items-center">
            <span className="profile_heading my-3">Create an account</span>

            <div className="profile_inputs">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-wrap">
                        <input required onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" placeholder="Full name" />
                        <input required onChange={(e) => setNumber(e.target.value)} value={number} type="number" placeholder="Phone number" />
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
                        <input required onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" placeholder="Confirm password" />
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email address" />
                        <select required onChange={(e) => setDistrict(e.target.value)} value={district} name="district" id="">
                            <option value="" selected disabled>District</option>
                            {deliveryCharges.length !== 0 && deliveryCharges.map(item => <option value={item.city}>{item.city}</option>)}
                        </select>
                    </div>
                    
                    <input onChange={(e) => setAddress(e.target.value)} value={address} type="text" id="address" placeholder="Shipping address" />
                    
                    <div className="d-flex flex-wrap">
                        <input onChange={(e) => setProfilePic(e.target.files[0])} accept="image/*" type="file" id="profile_pic" />
                        <label className="d-flex justify-content-center align-items-center" htmlFor="profile_pic" id="change_pic"><img src={photo_icon} alt="" /> Add profile picture</label>
                        <button type='submit'>Signup</button>
                    </div>

                    <span className="mt-1 d-flex justify-content-center">Already have an account? <Link to="/login" style={{textDecoration: 'none', color: 'green'}}>&nbsp;Login!</Link></span>
                </form>
            </div>
        </div>
        </>
    )
}