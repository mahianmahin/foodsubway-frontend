import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import poster from '../assets/poster.png';
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import '../styles/Home.css';

export default function Home() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 6000
    };

    return (
        <>
        <Navbar />

        <div className="container slider_box">
            <Slider {...settings}>
                <div>
                    <img src={poster} alt="poster" className="img-fluid" />
                </div>
                
                <div>
                    <img src={poster} alt="poster" className="img-fluid" />
                </div>
                
                <div>
                    <img src={poster} alt="poster" className="img-fluid" />
                </div>
            </Slider>
        </div>

        <div className="section container">
            <span className="heading">New Products</span>

            <div className="product_section my-3 d-flex">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
        
        <div className="section container">
            <span className="heading">Popular Products</span>

            <div className="product_section my-3 d-flex">
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>

        </>
    )
}