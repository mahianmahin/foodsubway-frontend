import { useContext } from "react";
import { useHistory } from "react-router";
import { UtilitiesContext } from "../App";
import Navbar from "../components/Navbar";
import "../styles/Checkout.css";

export default function Checkout() {
    var navigate = useHistory();
    const context = useContext(UtilitiesContext);

    return (
        <>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex flex-column checkout_inputs">
                        <span>Customer Name</span>
                        <input type="text" value={localStorage.getItem('username')} />
                    </div>
                    
                    <div className="d-flex flex-column checkout_inputs">
                        <span>Phone Number</span>
                        <input type="text" value={localStorage.getItem('phone_number')} />
                    </div>
                    
                    <div className="d-flex flex-column checkout_inputs">
                        <span>Shipping Address</span>
                        <input type="text" value={`${localStorage.getItem('address')}, ${localStorage.getItem('district')}`} />
                    </div>
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center align-items-start mt-5">
                    <div className="d-flex checkout_details justify-content-center align-items-center mb-3">
                        <img src={`${context.baseUrl}${window.sessionStorage.getItem('main_image')}`} alt="" />
                        <span className="name">{window.sessionStorage.getItem('name')}</span>
                    </div>

                    <div className="d-flex details_box"><span>Quantity</span> <span>:</span> <span className="mx-3">3 kg</span></div>
                    <div className="d-flex details_box"><span>Subtotal</span> <span>:</span> <span className="mx-3">200 ৳</span></div>
                    <div className="d-flex details_box"><span>Delivery Charge</span> <span>:</span> <span className="mx-3">60 ৳</span></div>
                    
                    <div className="checkout_bar"></div>

                    <div className="d-flex details_box" id="checkout_total"><span>Net Payable</span> <span>:</span> <span className="mx-3" id="checkout_total_price">60 ৳</span></div>

                    <button onClick={() => navigate.push('completed')} className="confirm_button">Confirm Order</button>
                </div>
            </div>
        </div>
        </>
    )
}