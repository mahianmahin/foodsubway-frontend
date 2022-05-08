import image from '../assets/pro-1.png';
import Construction from "../components/Construction";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../styles/SingleBlog.css';

export default function SingleBlog() {
    return (
        <>
        <Construction />
        <Navbar />
        
        <div className="container my-5 single_blog_main">
            <h2>What fruit should you eat in the breakfast and before sleep!</h2>
            <img src={image} alt="blog_image" className='img-fluid w-100 my-3' />
            <p className="blog_body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi dui tellus viverra aliquet non in et in. Diam sed donec adipiscing at. Amet platea consequat pulvinar congue. Tellus sed at massa libero. Tincidunt quis in et sit etiam et in auctor. Mi blandit venenatis auctor pulvinar. Mauris rutrum purus vel vulputate amet tortor risus, malesuada. Consectetur sit malesuada in leo molestie. Sit risus nunc fringilla tristique sit magna augue pretium. Nec ipsum, orci sapien, mi, vestibulum pretium diam. Metus et odio tortor ultricies mattis fusce vestibulum, lectus. Nisl scelerisque id sollicitudin sed nulla morbi. Non semper amet imperdiet porttitor enim, quis phasellus. Fames lacus, dui, ut a vitae turpis tincidunt. Integer egestas elit viverra quis arcu, pulvinar condimentum. Pellentesque in in tincidunt risus quam sed egestas pellentesque. Massa, luctus sem curabitur suspendisse nunc dui dolor. Egestas senectus elementum tincidunt gravida et vel. Malesuada morbi ultrices suspendisse massa sed pretium imperdiet id.</p>
        </div>

        <Footer />
        </>
    )
}