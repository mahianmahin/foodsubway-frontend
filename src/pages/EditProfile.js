import { useContext, useEffect, useState } from "react";
import { UtilitiesContext } from "../App";
import Message from "../components/Message";
// import photo_icon from "../assets/photo_icon.png";
import Navbar from "../components/Navbar";
import "../styles/EditProfile.css";
import { authHeader } from "../utilities/Header";

export default function EditProfile() {
    const [fullname, setFullname] = useState();
    const [number, setNumber] = useState();
    const [email, setEmail] = useState();
    const [district, setDistrict] = useState();
    const [address, setAddress] = useState();

    const [message, setMessage] = useState(false);
    const [messageContent, setMessageContent] = useState();

    const closeMessage = () => {
        setMessageContent('');
        setMessage(false);
    }

    const context = useContext(UtilitiesContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const updateHeader = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                ...authHeader
            },
            body: JSON.stringify({
                full_name: fullname,
                email: email,
                phone: number,
                district: district,
                address: address
            })
        }

        fetch(context.baseUrl + '/info/' + window.localStorage.getItem('id') + '/', updateHeader)
        .then(response => response.json())
        .then(data => {
            setMessageContent(data.msg);
            setMessage(true);
        });
    }

    useEffect(() => {
        const header = {
            method: "GET",
            headers: {...authHeader}
        }
        fetch(context.baseUrl + '/info/' + window.localStorage.getItem('id') + '/', header)
        .then(response => response.json())
        .then(data => {
            setFullname(data.data.full_name);
            setNumber(data.data.phone_number);
            setEmail(data.data.email);
            setDistrict(data.data.district);
            setAddress(data.data.address);
        });
    }, [])
    

    return (
        <>
        <Navbar />
        {message && <Message message={messageContent} action={closeMessage} />}
        <div className="container profile_container d-flex flex-column justify-content-center align-items-center">
            <span className="profile_heading">Edit Profile</span>
            <img src={`${context.baseUrl}${localStorage.getItem('profile_pic')}`} alt="avatar" />

            <div className="profile_inputs">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex flex-wrap">
                        <input required onChange={(e) => setFullname(e.target.value)} value={fullname} type="text" placeholder="Full name" />
                        <input required onChange={(e) => setNumber(e.target.value)} value={number} type="number" placeholder="Phone number" />
                    </div>
                    
                    <div className="d-flex flex-wrap">
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email address" />
                        <select required onChange={(e) => setDistrict(e.target.value)} value={district} name="district" id="">
                            <option value="" selected disabled>District</option>
                            <option value="gazipur">Gazipur</option>
                            <option value="dhaka">Dhaka</option>
                            <option value="mymenshing">Mymenshing</option>
                        </select>
                    </div>
                    
                    <input required onChange={(e) => setAddress(e.target.value)} value={address} type="text" id="address" placeholder="Shipping address" />
                    
                    <div className="d-flex justify-content-center flex-wrap">
                        {/* <input type="file" id="profile_pic" />
                        <label className="d-flex justify-content-center align-items-center" htmlFor="profile_pic" id="change_pic"><img src={photo_icon} alt="" /> Change profile picture</label> */}
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}