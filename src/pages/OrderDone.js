import orderImage from "../assets/order_done.png";
import photo from "../assets/product_main.png";
import Construction from "../components/Construction";
import Navbar from "../components/Navbar";
import "../styles/Checkout.css";

export default function OrderDone() {
    return (
        <>
        <Construction />
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-6 order_done d-flex flex-column justify-content-center align-items-center">
                    <img src={orderImage} alt="order_done_photo" />
                </div>

                <div className="col-md-6 d-flex flex-column justify-content-center align-items-start mt-5">
                    <div className="d-flex checkout_details justify-content-center align-items-center mb-3">
                        <img src={photo} alt="" />
                        <span className="name">Fresh Mangoes from Rajshahi</span>
                    </div>

                    <div className="d-flex details_box"><span>Quantity</span> <span>:</span> <span className="mx-3">3 kg</span></div>
                    <div className="d-flex details_box"><span>Subtotal</span> <span>:</span> <span className="mx-3">200 ৳</span></div>
                    <div className="d-flex details_box"><span>Delivery Charge</span> <span>:</span> <span className="mx-3">60 ৳</span></div>
                    
                    <div className="checkout_bar"></div>

                    <div className="d-flex details_box" id="checkout_total"><span>Delivery Charge</span> <span>:</span> <span className="mx-3" id="checkout_total_price">60 ৳</span></div>

                    <button className="confirm_button">Dashboard</button>
                </div>
            </div>
        </div>
        </>
    )
}