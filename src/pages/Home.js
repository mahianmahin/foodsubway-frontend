import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { UtilitiesContext } from "../App";
import asset1 from '../assets/asset-1.png';
import asset2 from '../assets/asset-2.png';
import poster from '../assets/poster.png';
import Blog from "../components/Blog";
// import Construction from '../components/Construction';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import '../styles/Home.css';

export default function Home() {
    const context = useContext(UtilitiesContext);

    const [newProducts, setNewProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        // fetch(context.baseUrl + '/products/new/', {'headers': authHeader})
        fetch(context.baseUrl + '/products/new/')
        .then(response => response.json())
        .then(data => setNewProducts(data.data));
        
        fetch(context.baseUrl + '/products/popular/')
        .then(response => response.json())
        .then(data => setPopularProducts(data.data));
    }, [])
    

    const settings = {
        dots: true,
        infinite: true,
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
        {/* <Construction /> */}
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
                {newProducts.length === 0 ? <span>Loading...</span> : newProducts.length !== 0 && newProducts.map(item => <Product name={item.name} code={item.code} price={item.price} unit={item.unit} image={item.main_image} /> )}
                {/* <Product /> */}
            </Slider>
        </div>
        
        <div className="section container">
            <span className="heading">Popular Products</span>

            <Slider {...productSettings} className="product_section my-3 d-flex">
            {popularProducts.length === 0 ? <span>Loading...</span> : popularProducts.length !== 0 && popularProducts.map(item => <Product name={item.name} code={item.code} price={item.price} unit={item.unit} image={item.main_image} /> )}
                {/* <Product /> */}
            </Slider>
        </div>
        
        <div className="container-fluid blog">
            <div className="section container">
                <span className="heading">Blogs</span>

                <Slider {...productSettings} className="product_section my-3 d-flex">
                    <Blog />
                    <Blog />
                    <Blog />
                    <Blog />
                </Slider>
            </div>
        </div>

        <div className="container image_box my-5 d-flex justify-content-between align-items-center flex-wrap">
            <img src={asset2} alt="asset2" className="img-fluid" />
            <img src={asset1} alt="asset1" className="img-fluid" />
        </div>

        <Footer />

        </>
    )
}