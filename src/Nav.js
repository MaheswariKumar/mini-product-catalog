import './App.css';
import { Link } from 'react-router-dom';
import { MyContext } from './MyContext';
import { useContext, useEffect, useState } from 'react';
import _ from "lodash";

export default function Nav() {
    const {cartCount, suggestions, setSuggestions, setLoading} = useContext(MyContext);
    const [query, setQuery] = useState("");
    const [openSearch, setOpenSearch] = useState(false);

    const fetchSuggestions = _.debounce(async (term)=> {
        if (!term) {
            setSuggestions([]);
            return;
        }
        try {
            const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${term}`);
            const data = await res.json();

            setSuggestions(data.slice(0, 5));
          } catch (error) {
            console.error("Error fetching suggestions:", error);
          }
    }, 300);

    useEffect(()=> {
        fetchSuggestions(query);

        return ()=> fetchSuggestions.cancel();
    }, [query])

    const handleSearchIcon = (e) => {
        e.stopPropagation();
        setOpenSearch(true);
    }

    useEffect(()=> {
        const handleSearch = () => {
            setOpenSearch(false);
        }

        document.addEventListener("click", handleSearch);

        return ()=> document.removeEventListener("click", handleSearch);
    }, [])

    return (
        <div className='navBar'>
            <div className='nav'>
                <div className="title">
                    <div className="blus">
                        <nav>B</nav>
                        <nav>L</nav>
                        <nav>U</nav>
                        <nav>S</nav>
                        <nav>H</nav>
                        <nav>O</nav>
                        <nav>R</nav>
                        <nav>A</nav>
                    </div>
                </div>
                <div className='sec' style={openSearch ? {width: "100%"}:null}>
                    {openSearch ? (<><input onClick={(e)=> handleSearchIcon(e)} className='search' type='text' placeholder='search products...' value={query} onChange={(e)=> setQuery(e.target.value)} />
                    <nav onClick={()=> setQuery("")} className='cancel'>X</nav>
                    <ul className='lists'>
                        {suggestions.map((item, idx)=> (
                            <Link className="custom-link" to={`/product/${item.name}/${item.id}`}>
                                <li onClick={()=> setLoading(false)} className='li' key={idx}>{item.name}</li>
                            </Link>
                        ))}
                    </ul></>)
                    :
                    ( <><Link className="custom-link" to="/"><nav className='home'>Home</nav></Link>
                    <Link className="custom-link" to="/aboutUs"><nav className='about'>About</nav></Link>
                    <Link className="custom-link" to="/shop"><nav className='shop'>Shop</nav></Link>
                    <Link className="custom-link" to="/review"><nav className='review'>Reviews</nav></Link>
                    <Link className="custom-link" to="/contactUs"><nav className='contact'>Contact</nav></Link>
                    <div className='icon'>
                    <svg onClick={(e)=> handleSearchIcon(e)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                    {cartCount > 0 && <div className='cartCnt'>
                        <nav>{cartCount}</nav>
                    </div>}
                    </div></>)}
                </div>
            </div>
        </div>
    );
}