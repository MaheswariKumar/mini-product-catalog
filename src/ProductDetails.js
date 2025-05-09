import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { MyContext } from "./MyContext";


export default function ProductDetails() {
    const {setLoading, cartCount, setCartCount} = useContext(MyContext);
    const {id, name} = useParams();
    const [obj, setObj] = useState(null);

    useEffect(() => {
        const getObj = async () => {
          try {
            const res = await fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
            const data = await res.json();
            setObj(data);
          } catch (error) {
            console.error("Failed to fetch product:", error);
          } finally {
            setLoading(true);
          }
        };
        console.log(id);
        getObj();
      }, [id]);

      const handleMinusbtn = () => {
        if (cartCount>0) {
            setCartCount((cnt)=>cnt-1);
        }
      }

    return (
        <div>
            {obj && (<><nav className="productName">{obj.name}</nav>
            <div className="prodDe">
                <div className="imgQun">
                    <img alt="ProdImage" className="ImgProd" src={obj.api_featured_image}></img>
                    <div className="cartBtn">
                        <button onClick={handleMinusbtn}>-</button>
                        <nav>{cartCount}</nav>
                        <button onClick={()=> setCartCount((cnt)=> cnt+1)}>+</button>
                    </div>
                </div>
                <div className="itemDe">
                    <div className="info">
                        <nav>Brand:</nav>
                        <nav>{obj.brand}</nav>
                    </div>
                    <div className="info">
                        <nav>Category:</nav>
                        <nav>{obj.category}</nav>
                    </div>
                    <div className="info">
                        <nav>Price:</nav>
                        <nav>$ {obj.price}</nav>
                    </div>
                    <div className="info">
                        <nav>Product Type:</nav>
                        <nav>{obj.product_type}</nav>
                    </div>
                    <div className="info">
                        <nav>Description:</nav>
                        <nav>{obj.description}</nav>
                    </div>
                    <div className="AviClr">
                        <nav>Available Colors</nav>
                        <div className="allClrs">
                            {Array.isArray(obj.product_colors) && obj.product_colors.map((clr, idx)=> (
                                <nav key={idx} style={{backgroundColor: `${clr.hex_value}`}} className="clr"></nav>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </>) }
        </div>
    )
}