import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router';
import product from '../assets/pro-1.png';
import '../styles/Product.css';

export default function Product() {
    var navigate = useNavigate();

    return (
        <div className="product d-flex flex-column">
            <img src={product} alt="product" />

            <div className="name my-2">
            100 Exotic Dry Fruit Mixture from all over the world!
            </div>

            <div className="price d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-center price_box" id='first'>
                    <span className='price_amount'>89 ৳</span>
                    <span className='unit'>per kg</span>
                </div>
                
                <div className="d-flex flex-column align-items-center price_box" id='second'>
                    <span className='price_amount'>289 ৳</span>
                    <span className='unit'>3 kg</span>
                </div>
                
                <div className="d-flex flex-column align-items-center price_box" id='third'>
                    <span className='price_amount'>489 ৳</span>
                    <span className='unit'>5  kg</span>
                </div>
            </div>

            <button onClick={() => navigate('mango')} className='order_button'><FontAwesomeIcon icon={faShoppingCart} /> Order now!</button>
        </div>
    )
}