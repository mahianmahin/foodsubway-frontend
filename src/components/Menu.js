import { useHistory } from "react-router";
import "../styles/Menu.css";

export default function Menu() {
    const navigate = useHistory();

    const handleLogout = () => {
        window.localStorage.clear();
        navigate.push('/');
        window.location.reload();
    }

    return (
        <>
        <div className="menu_body d-flex flex-column">
            <span onClick={() => navigate.push('/dashboard')}>Dashboard</span>
            <div className="menu_bar"></div>
            <span onClick={() => navigate.push('/profile')}>Edit Profile</span>
            <div className="menu_bar"></div>
            <span onClick={handleLogout} style={{color: 'orange'}}>Logout</span>
        </div>
        </>
    )
}