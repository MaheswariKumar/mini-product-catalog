import { MyContext } from './MyContext';
import { useContext, useRef } from 'react';
import './App.css';

export default function Home() {
    const {data, loading, visibleCount} = useContext(MyContext);
    const scrollTargetRef = useRef(null);

    const handleScrollDown = () => {
        scrollTargetRef.current?.scrollIntoView({ behavior:"smooth" });
    }

    return (
        <div className={`products-container ${loading ? "fade-in" : ""}`}>
            <div className='pro'>
                <div className='head'>
                    <div className='sub'>
                        <nav className='h1'>Elevate Your Look with Blushora Cosmetics</nav>
                        <nav className='rad'>Transform your beauty routine with clean, radiant, and confidence-boosting products from Blushora.</nav>
                        <div className='exp' onClick={handleScrollDown}>
                            <button className='btng'>Explore the Glow</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <img className="img" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29zbWV0aWN8ZW58MHx8MHx8fDA%3D"></img>
                    </div>
                </div>
            </div>
            <div className='lat'>
                <nav className='latBea'>Latest in Beauty</nav>
            </div>
            <div className='all' ref={scrollTargetRef}>
                {Array.isArray(data) && data.slice(0, visibleCount).map((prod) => (
                    <div className='proddet'>
                        <div className='imgcover'>
                            <img className='prodImg' src={prod.api_featured_image}></img>
                        </div>
                        <nav className='prodName'>{prod.name}</nav>
                        <nav className='prodPrice'>$ {prod.price} USD</nav>
                        <div className='prodBrand'>
                            <nav className='brand'>{prod.brand}</nav>
                        </div>
                    </div>
                ))}
            </div>  
        </div>
    );
}