import image from '../assets/pro-1.png';
import '../styles/Blog.css';

export default function Blog() {
    return (
        <div className="blog_main d-flex flex-column">
            <img src={image} alt="image" className='img-fluid' />
            <div className="inner">
                <div className="blog_name mt-2">What fruit should you eat in the breakfast and before sleep!</div>
                <div className="description my-4">Lorem ipsum dolor sit amet, consectetur adipiscing velit, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, sequi.... </div>
                <button>Read more...</button>
            </div>
        </div>
    )
}