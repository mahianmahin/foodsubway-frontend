import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/EditProfile.css";

export default function Login() {
    return (
        <>
        <Navbar />
        <div className="container profile_container d-flex flex-column justify-content-center align-items-center">
            <span className="profile_heading mb-2">Login</span>

            <div className="profile_inputs">
                <form mathod="post">
                    <input type="number" placeholder="Phone number" /> <br />
                    <input type="password" placeholder="Password" /> <br />
                    <button>Login</button> <br />

                    <span className="mt-1 d-flex justify-content-center">Don't have an account? <Link to="/signup" style={{textDecoration: 'none', color: 'green'}}>&nbsp;Create one!</Link></span>
                </form>
            </div>
        </div>
        </>
    )
}