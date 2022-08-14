import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { UtilitiesContext } from '../App';
// import product from '../assets/pro-1.png';
import '../styles/Product.css';

export default function Product(props) {
    var navigate = useHistory();
    const context = useContext(UtilitiesContext);


    return (
        <div className="product d-flex flex-column">
            <img src={`${context.baseUrl}${props.image}`} alt="product" />
            {/* {props.image ? <img src={`${context.baseUrl}${props.image}`} alt="product" /> : <img src={placeholder} alt="product" />} */}

            <div className="name my-2">
            {props.name}
            </div>

            <div className="price d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-center price_box" id='first'>
                    <span className='price_amount'>{props.price && Object.values(props.price)[0]} ৳</span>
                    <span className='unit'>{props.price && Object.keys(props.price)[0]} {props.unit}</span>
                </div>
                
                <div className="d-flex flex-column align-items-center price_box" id='second'>
                    <span className='price_amount'>{props.price && Object.values(props.price)[1]} ৳</span>
                    <span className='unit'>{props.price && Object.keys(props.price)[1]} {props.unit}</span>
                </div>
                
                <div className="d-flex flex-column align-items-center price_box" id='third'>
                    <span className='price_amount'>{props.price && Object.values(props.price)[2]} ৳</span>
                    <span className='unit'>{props.price && Object.keys(props.price)[2]} {props.unit}</span>
                </div>
            </div>

            <button onClick={() => navigate.push(`/products/${props.code}`)} className='order_button'><FontAwesomeIcon icon={faShoppingCart} /> Order now!</button>
        </div>
    )
}