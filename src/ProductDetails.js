import { useEffect, useState, useContext } from "react";
import { data, useParams } from "react-router-dom";
import { MyContext } from "./MyContext";


export default function ProductDetails() {
    const {setLoading} = useContext(MyContext);
    const {id} = useParams();
    const [obj, setObj] = useState(null);

    async function getObj() {
        const rs = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`);
        const data = await rs.json();
        console.log(data);
        setObj(data);
    }

    useEffect(()=> {
        getObj();
        setLoading(true);
    },[])

    return (
        <div>
            {obj.name && <nav className="productName">{obj.name}</nav>}
            <div className="prodDe">
                <div className="imgQun">
                    <img className="ImgProd" src={obj.api_featured_image}></img>
                    <div className="cartBtn">
                        <button>-</button>
                        <nav>5</nav>
                        <button>+</button>
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
        </div>
    )
}