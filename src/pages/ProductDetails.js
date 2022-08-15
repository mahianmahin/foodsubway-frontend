import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { UtilitiesContext } from "../App";
import Navbar from "../components/Navbar";
import "../styles/ProductDetails.css";
import productMain from "../assets/product_main.png";
import p1 from "../assets/product_pic_1.png";
import p2 from "../assets/product_pic_2.png";
import p3 from "../assets/product_pic_3.png";
export default function ProductDetails() {
  var navigate = useHistory();
  let { productCode } = useParams();
  const context = useContext(UtilitiesContext);

  const [productDetails, setProductDetails] = useState({});
  const [selectedPrice, setSelectedPrice] = useState(0);

  const productImages = [productMain, p1, p2, p3];
  const initial = productImages[0];
  const [activeImage, setActiveImage] = useState(initial);
  useEffect(() => {
    fetch(context.baseUrl + "/products/single/" + productCode + "/")
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data.data);
      });

    // setSelectedPrice(productDetails.price && Object.values(productDetails.price)[0]);
    // eslint-disable-next-line
  }, []);

  const setProduct = () => {
    for (var item in productDetails) {
      window.sessionStorage.setItem(item, productDetails[item]);
    }
  };

  const selectPrice = (value) => {
    setSelectedPrice(productDetails.price[value]);

    window.sessionStorage.setItem("quantity", value);
    window.sessionStorage.setItem("total_price", selectedPrice);
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row my-3'>
          <div className='col-md-6 overflow-hidden d-flex justify-content-center align-items-center'>
            <div className='main_container'>
              <div className=' main_container_img'>
                {<img src={activeImage} alt='product' className='' />}
              </div>
              <div className='sun_container'>
                {productImages.map((item) => (
                  <img
                    className='sub_container_img'
                    onClick={() => setActiveImage(item)}
                    src={item}
                    alt=''
                  />
                ))}
              </div>
            </div>
          </div>
          {/* <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <div className='d-flex flex-column images'>
              <img
                src={`${context.baseUrl}${productDetails.thumb_one}`}
                alt='main_pic'
                className='img-fluid'
              />
              <div className='d-flex justify-content-center align-items center sub_images  mt-1'>
                <img
                  src={`${context.baseUrl}${productDetails.thumb_one}`}
                  alt=''
                  className='img-fluid'
                />
                <img
                  src={`${context.baseUrl}${productDetails.thumb_two}`}
                  alt=''
                  className='img-fluid'
                />
                <img
                  src={`${context.baseUrl}${productDetails.thumb_three}`}
                  alt=''
                  className='img-fluid'
                />
              </div>
            </div>
          </div> */}
          <div className='col-md-6 d-flex flex-column justify-content-start align-items-start'>
            <span className='product_heading'>{productDetails.name}</span>

            <div className='d-flex align-items-center'>
              {productDetails.available ? (
                <div className='stock d-flex justify-content-center align-items-center'>
                  <div className='dot'>
                    <div className='inner_dot'></div>
                  </div>
                  Available
                </div>
              ) : (
                <div className='stock out_of_stock d-flex justify-content-center align-items-center'>
                  <div className='dot'>
                    <div className='inner_dot'></div>
                  </div>
                  Out of Stock
                </div>
              )}

              <div className='product_id d-flex justify-content-center align-items-center mx-2'>
                {productDetails.code}
              </div>
            </div>

            <div className='price_tag_section d-flex justify-content-center align-items-center my-3'>
              <div
                id='per_kg'
                className='price_tag d-flex flex-column justify-content-center align-items-center'>
                <span className='price'>
                  {productDetails.price &&
                    Object.values(productDetails.price)[0]}{" "}
                  ৳
                </span>
                <span>
                  {productDetails.price && Object.keys(productDetails.price)[0]}{" "}
                  {productDetails.unit}
                </span>
              </div>

              <div
                id='three_kg'
                className='price_tag d-flex flex-column justify-content-center align-items-center'>
                <span className='price'>
                  {productDetails.price &&
                    Object.values(productDetails.price)[1]}{" "}
                  ৳
                </span>
                <span>
                  {productDetails.price && Object.keys(productDetails.price)[1]}{" "}
                  {productDetails.unit}
                </span>
              </div>

              <div
                id='five_kg'
                className='price_tag d-flex flex-column justify-content-center align-items-center'>
                <span className='price'>
                  {productDetails.price &&
                    Object.values(productDetails.price)[2]}{" "}
                  ৳
                </span>
                <span>
                  {productDetails.price && Object.keys(productDetails.price)[2]}{" "}
                  {productDetails.unit}
                </span>
              </div>
            </div>

            <div className='product_bar'></div>

            <div className='d-flex justify-content-center align-items-center'>
              <select
                onChange={(e) => selectPrice(e.target.value)}
                className='order_box'
                id='quantity'>
                <option selected disabled>
                  Quantity
                </option>
                <option
                  value={
                    productDetails.price && Object.keys(productDetails.price)[0]
                  }>
                  {productDetails.price && Object.keys(productDetails.price)[0]}{" "}
                  {productDetails.unit}
                </option>
                <option
                  value={
                    productDetails.price && Object.keys(productDetails.price)[1]
                  }>
                  {productDetails.price && Object.keys(productDetails.price)[1]}{" "}
                  {productDetails.unit}
                </option>
                <option
                  value={
                    productDetails.price && Object.keys(productDetails.price)[2]
                  }>
                  {productDetails.price && Object.keys(productDetails.price)[2]}{" "}
                  {productDetails.unit}
                </option>
              </select>

              <div className='order_box' id='total_price'>
                {selectedPrice} ৳
              </div>

              <button
                disabled={!productDetails.available || selectedPrice === 0}
                onClick={() => {
                  setProduct();
                  navigate.push(`${productDetails.code}/checkout`);
                }}
                className='order_box'
                id='product_order_button'>
                <FontAwesomeIcon icon={faShoppingCart} /> &nbsp; Order now!
              </button>
            </div>

            <div className='description mt-3'>
              <span>{productDetails.description}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
