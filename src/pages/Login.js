import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UtilitiesContext } from "../App";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import "../styles/EditProfile.css";

export default function Login() {
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState(false);
    const [messageContent, setMessageContent] = useState('');

    const context = useContext(UtilitiesContext);
    const navigate = useHistory();

    const closeMessageBox = () => {
        setMessage(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const header = {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },

            body: JSON.stringify({
                phone_number: number,
                password: password
            })
        }

        fetch(context.baseUrl + '/login/', header)
        .then(response => response.json())
        .then(data => {
            if (data.msg !== 'invalid_credentials') {
                for (var item in data.data) {
                    window.localStorage.setItem(item, data.data[item]);
                }
    
                fetch(context.baseUrl + '/api/token/', {
                    method: 'POST',
                    headers: {
                        "Content-type": "application/json"
                    },
    
                    body: JSON.stringify({
                        username: window.localStorage.getItem('username'),
                        password: password
                    })
                }).then(response => response.json())
                .then(data => {
                    window.localStorage.setItem('token', data.access);
                    navigate.push('/');
                });
            } else {
                setMessageContent('Invalid credentials!');
                setMessage(true);
            }
        })

    }

    return (
        <>
        <Navbar />
        {message && <Message message={messageContent} action={closeMessageBox} />}
        <div className="container profile_container d-flex flex-column justify-content-center align-items-center">
            <span className="profile_heading mb-2">Login</span>

            <div className="profile_inputs">
                <form onSubmit={handleSubmit}>
                    <input required onChange={(e) => setNumber(e.target.value)} value={number} type="number" placeholder="Phone number" /> <br />
                    <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" /> <br />
                    <button type="submit">Login</button> <br />

                    <span className="mt-1 d-flex justify-content-center">Don't have an account? <Link to="/signup" style={{textDecoration: 'none', color: 'green'}}>&nbsp;Create one!</Link></span>
                </form>
            </div>
        </div>
        </>
    )
}