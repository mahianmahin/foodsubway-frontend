import { useContext, useEffect, useState } from 'react';
import { UtilitiesContext } from '../App';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import '../styles/Products.css';

export default function Products() {
    const context = useContext(UtilitiesContext)

    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        fetch(context.baseUrl + '/categories/')
        .then(response => response.json())
        .then(data => {
            const category_arr = [];
            for (var item in data.data) {
                category_arr.push(data.data[item].name);
            }
            setCategories(category_arr);
            setSelectedCategory(category_arr[0]);
        })

        fetch(context.baseUrl + '/products/')
        .then(response => response.json())
        .then(data => setProducts(data.data))

        setSelectedCategory(categories.length !== 0 && categories[0]);
    }, [])

    return (
        <>
        <Navbar />
        <div className="products_main container">
            <div className="categories_box d-flex justify-content-start align-items-center">
                {categories.length !== 0 && categories.map(item =><div onClick={() => setSelectedCategory(item)} className='active'>{item}</div>)}
            </div>
        </div>

        <div className='container'>
            <span className='heading d-flex justify-content-center my-5'>{selectedCategory}</span>

            <div className="products_list d-flex justify-content-center align-items center flex-wrap mb-5">
                {products.length !== 0 && products.map(item => item.category.name == selectedCategory && <Product name={item.name} code={item.code} price={item.price} unit={item.unit} image={item.main_image} />)}
            </div>
        </div>
        <Footer />
        </>
    )
}