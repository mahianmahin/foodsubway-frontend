import { useNavigate } from "react-router";
import "../styles/Menu.css";

export default function Menu() {
    const navigate = useNavigate();

    return (
        <>
        <div className="menu_body d-flex flex-column">
            <span onClick={() => navigate('dashboard')}>Dashboard</span>
            <div className="menu_bar"></div>
            <span>Edit Profile</span>
            <div className="menu_bar"></div>
            <span style={{color: 'orange'}}>Logout</span>
        </div>
        </>
    )
}