import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import image_main from "../assets/product_main.png";
import image_1 from "../assets/product_pic_1.png";
import image_2 from "../assets/product_pic_2.png";
import image_3 from "../assets/product_pic_3.png";
import Construction from "../components/Construction";
import Navbar from "../components/Navbar";
import "../styles/ProductDetails.css";

export default function ProductDetails() {
    var navigate = useNavigate();

    return (
        <>
        <Construction />
        <Navbar />
        <div className="container">
            <div className="row my-3">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column images">
                        <img src={image_main} alt="main_pic" className="img-fluid" />
                        <div className="d-flex justify-content-center align-items center sub_images mt-1">
                            <img src={image_1} alt="" className="img-fluid" />
                            <img src={image_2} alt="" className="img-fluid" />
                            <img src={image_3} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-start align-items-start">
                    <span className="product_heading">Fresh mangoes from Rajshahi</span>

                    <div className="d-flex align-items-center">
                        <div className="stock d-flex justify-content-center align-items-center"><div className="dot"><div className="inner_dot"></div></div>Available</div>
                        {/* <div className="stock out_of_stock d-flex justify-content-center align-items-center"><div className="dot"><div className="inner_dot"></div></div>Out of Stock</div> */}

                        <div className="product_id d-flex justify-content-center align-items-center mx-2">FDSW4958</div>
                    </div>

                    <div className="price_tag_section d-flex justify-content-center align-items-center my-3">
                        <div id="per_kg" className="price_tag d-flex flex-column justify-content-center align-items-center">
                            <span className="price">89 ৳</span>
                            <span>per kg</span>
                        </div>

                        <div id="three_kg" className="price_tag d-flex flex-column justify-content-center align-items-center">
                            <span className="price">289 ৳</span>
                            <span>3 kg</span>
                        </div>

                        <div id="five_kg" className="price_tag d-flex flex-column justify-content-center align-items-center">
                            <span className="price">489 ৳</span>
                            <span>5 kg</span>
                        </div>
                    </div>

                    <div className="product_bar"></div>

                    <div className="d-flex justify-content-center align-items-center">
                        <select className="order_box" id="quantity">
                            <option value="1">1 kg</option>
                            <option value="2">2 kg</option>
                            <option value="3">3 kg</option>
                        </select>
                        
                        <div className="order_box" id="total_price">
                            89 ৳
                        </div>
                        
                        <button onClick={() => navigate('checkout')} className="order_box" id="product_order_button">
                            <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Order now!
                        </button>
                    </div>

                    <div className="description mt-3">
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur recusandae laborum ullam necessitatibus optio mollitia, eveniet labore neque et, quisquam eum numquam quibusdam eligendi cupiditate eaque ipsa quidem quia explicabo, distinctio modi sapiente possimus. Minima fugit quas quidem odit eligendi adipisci </span>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}