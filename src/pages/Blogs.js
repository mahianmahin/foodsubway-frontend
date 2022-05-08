import Blog from "../components/Blog";
import Construction from "../components/Construction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/Blogs.css';

export default function Blogs() {
    return (
        <>
        <Construction />
        <Navbar />

        <div className="container my-5 blogs_main">
            <span>Blogs that help you to lead a</span> <br />
            <span className="heading blog_heading">HEALTHY LIFE</span>

            <div className="d-flex flex-wrap justify-content-center align-items-center mt-3">
                <div className="my-2 mx-2"><Blog /></div>
                <div className="my-2 mx-2"><Blog /></div>
                <div className="my-2 mx-2"><Blog /></div>
                <div className="my-2 mx-2"><Blog /></div>
                <div className="my-2 mx-2"><Blog /></div>
                <div className="my-2 mx-2"><Blog /></div>
            </div>
        </div>

        <Footer />
        </>
    )
}