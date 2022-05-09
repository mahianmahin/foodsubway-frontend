import logo from "../assets/White.png";
import Navbar from "../components/Navbar";
import "../styles/Contact.css";

export default function ContactUs() {
    return (
        <>
        <Navbar />

        <div className="container-fluid contact_container">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column justify-content-center align-items-start holder">
                    <img src={logo} alt="logo" />
                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste perspiciatis molestias repellendus magni magnam, </span>
                    <span className="mt-4">+88 09638-107864</span>
                    <span className="my-2">info@foodsubway.com</span>
                </div>
            </div>
        </div>

        </>
    )
}