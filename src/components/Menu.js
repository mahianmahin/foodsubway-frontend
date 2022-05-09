import "../styles/Menu.css";

export default function Menu() {
    return (
        <>
        <div className="menu_body d-flex flex-column">
            <span>Dashboard</span>
            <div className="menu_bar"></div>
            <span>Edit Profile</span>
            <div className="menu_bar"></div>
            <span style={{color: 'orange'}}>Logout</span>
        </div>
        </>
    )
}