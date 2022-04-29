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
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 6000,
    };
    
    const productSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplayspeed: 6000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <>
        <Navbar />

        <div className="container slider_box">
            <Slider {...settings}>
                <div><img src={poster} alt="poster" className="img-fluid" /></div>
                <div><img src={poster} alt="poster" className="img-fluid" /></div>
                <div><img src={poster} alt="poster" className="img-fluid" /></div>
            </Slider>
        </div>

        <div className="section container">
            <span className="heading">New Products</span>

            <Slider {...productSettings} className="product_section my-3 d-flex">
                <Product />
                <Product />
                <Product />
                <Product />
            </Slider>
        </div>
        
        <div className="section container">
            <span className="heading">Popular Products</span>

            <Slider {...productSettings} className="product_section my-3 d-flex">
                <Product />
                <Product />
                <Product />
                <Product />
            </Slider>
        </div>

        </>
    )
}