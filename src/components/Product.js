import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import product from '../assets/pro-1.png';
import '../styles/Product.css';

export default function Product() {
    return (
        <div className="product d-flex flex-column">
            <img src={product} alt="product" />

            <div className="name my-2">
            100 Exotic Dry Fruit Mixture from all over the world!
            </div>

            <div className="price d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-center price_box" id='first'>
                    <span style={{fontWeight: 800, fontSize: 18, margin: '0px', padding: '0px'}}>89 ৳</span>
                    <span style={{fontWeight: 500, fontSize: 13}}>per kg</span>
                </div>
                
                <div className="d-flex flex-column align-items-center price_box" id='second'>
                    <span style={{fontWeight: 800, fontSize: 18, margin: '0px', padding: '0px'}}>289 ৳</span>
                    <span style={{fontWeight: 500, fontSize: 13}}>3 kg</span>
                </div>
                
                <div className="d-flex flex-column align-items-center price_box" id='third'>
                    <span style={{fontWeight: 800, fontSize: 18, margin: '0px', padding: '0px'}}>489 ৳</span>
                    <span style={{fontWeight: 500, fontSize: 13}}>5  kg</span>
                </div>
            </div>

            <button className='order_button'><FontAwesomeIcon icon={faShoppingCart} /> Order now!</button>
        </div>
    )
}