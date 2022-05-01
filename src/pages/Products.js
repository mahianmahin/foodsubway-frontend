import Construction from '../components/Construction';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import '../styles/Products.css';

export default function Products() {
    return (
        <>
        <Construction />
        <Navbar />
        <div className="products_main container">
            <div className="categories_box d-flex justify-content-start align-items-center">
                <div className='active'>Fruits</div>
                <div className=''>Vegetables</div>
                <div className=''>Fish</div>
                <div className=''>Dairy</div>
                <div className=''>Meat</div>
                <div className=''>Dry Fruits</div>
                <div className=''>Honey</div>
            </div>
        </div>

        <div className='container'>
            <span className='heading d-flex justify-content-center my-5'>Fruits</span>

            <div className="products_list d-flex justify-content-center align-items center flex-wrap mb-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
        <Footer />
        </>
    )
}