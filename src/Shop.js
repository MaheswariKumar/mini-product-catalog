import { useEffect, useState, useContext, useRef } from "react"
import { MyContext } from "./MyContext";

export default function Shop() {
    const {data} = useContext(MyContext);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [type, setType] = useState("eyeliner");

    const handleDropDown = (e) => {
        e.stopPropagation();
        setOpenDropDown(!openDropDown);
    }

    useEffect(()=> {
        const handleDownRef = () => {
            setOpenDropDown(false);
        }

        document.addEventListener("click", handleDownRef);

        return ()=> document.removeEventListener("click", handleDownRef);
    }, [])

    return (
        <div>
            <div className="new">
                <nav>New Season Glam</nav>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-emoji-wink" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m1.757-.437a.5.5 0 0 1 .68.194.93.93 0 0 0 .813.493c.339 0 .645-.19.813-.493a.5.5 0 1 1 .874.486A1.93 1.93 0 0 1 10.25 7.75c-.73 0-1.356-.412-1.687-1.007a.5.5 0 0 1 .194-.68"/>
</svg>
            </div>
            <div className="cate">
                <nav className="choose">Choose your category</nav>
                <div>
                    <div className="filter" onClick={handleDropDown}>
                        <nav>All Products</nav>
                        <img width="20" height="20" src="https://img.icons8.com/ios/50/expand-arrow--v2.png" alt="expand-arrow--v2"/>
                    </div>
                </div>
            </div>
            {openDropDown ? <div className="drop">
                        <nav onClick={()=> setType("lip_liner")}>Lip_liner</nav>
                        <nav className="bor"></nav>
                        <nav onClick={()=> setType("eyeliner")}>Eyeliner</nav>
                        <nav className="bor"></nav>
                        <nav onClick={()=> setType("nail_polish")}>Nail_polish</nav>
                        <nav className="bor"></nav>
                        <nav onClick={()=> setType("lipstick")}>Lipstick</nav>
                        <nav className="bor"></nav>
                        <nav onClick={()=> setType("bronzer")}>Bronzer</nav>
                        <nav className="bor"></nav>
                        <nav onClick={()=> setType("foundation")}>Foundation</nav>
                        <nav className="bor"></nav>
                        <nav onClick={()=> setType("mascara")}>Mascara</nav>
            </div> : null }
            <div className='all'>
                {Array.isArray(data) && data.filter((item)=>item.product_type === type).slice(0, 8).map((prod) => (
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
    )
}