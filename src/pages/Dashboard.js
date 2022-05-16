import photo from "../assets/product_main.png";
import Construction from "../components/Construction";
import Navbar from "../components/Navbar";
import "../styles/Dashboard.css";

export default function Dashboard() {
    return (
        <>
        <Construction />
        <Navbar />
        <div className="container mt-3 dashboard_main">
            <span className="dashboard_heading">Active Orders</span>
            <div className="d-flex justify-content-start align-items-center mt-3 active_orders_box flex-wrap">
                
                <div className="tracker_body d-flex flex-column align-items-start">
                    <div className="d-flex checkout_details justify-content-center align-items-center mb-3">
                        <img src={photo} alt="" />
                        <span className="name">Fresh Mangoes from Rajshahi</span>
                    </div>

                    <div className="d-flex details_box"><span>ID</span> <span>:</span> <span className="mx-3">FSDW345</span></div>
                    <div className="d-flex details_box"><span>Quantity</span> <span>:</span> <span className="mx-3">3 kg</span></div>
                    <div className="d-flex details_box"><span>Total</span> <span>:</span> <span className="mx-3">200 ৳</span></div>
                    <div className="d-flex details_box" id="order_status"><span>Order Status</span> <span>:</span> <span className="mx-3" id="order_status_text">On the way</span></div>
                </div>
                
                <div className="tracker_body d-flex flex-column align-items-start">
                    <div className="d-flex checkout_details justify-content-center align-items-center mb-3">
                        <img src={photo} alt="" />
                        <span className="name">Fresh Mangoes from Rajshahi</span>
                    </div>

                    <div className="d-flex details_box"><span>ID</span> <span>:</span> <span className="mx-3">FSDW345</span></div>
                    <div className="d-flex details_box"><span>Quantity</span> <span>:</span> <span className="mx-3">3 kg</span></div>
                    <div className="d-flex details_box"><span>Total</span> <span>:</span> <span className="mx-3">200 ৳</span></div>
                    <div className="d-flex details_box" id="order_status"><span>Order Status</span> <span>:</span> <span className="mx-3" id="order_status_text">On the way</span></div>
                </div>
            
            </div>

            <span className="dashboard_heading" id="order_history">Order History</span>

            <div className="order_history_table">
            <table class="table history_table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Date</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                    <th>#FDSW9385</th>
                    <td>Mangoes from Rajshahi - 3kg - 340 ৳ </td>
                    <td>15/05/2022</td>
                    <td>Delivered</td>
                    </tr>
                    
                </tbody>
            </table>
            </div>   

        </div>
        </>
    )
}