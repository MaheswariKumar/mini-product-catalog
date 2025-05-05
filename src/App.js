import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Loading from "./Loading";
import AboutUs from "./AboutUs";
import Shop from "./Shop";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleCount, setVisibleCount] = useState(50);

  async function getData() {
    const rs = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json");
    const data = await rs.json();
    console.log(data);
    console.log("Is array:", Array.isArray(data));
    console.log(data[0].brand);
    setData(data);
    setLoading(true);
  }

  useEffect(()=> {
    getData();

    const handScroll = () => {
      if (window.innerHeight+window.scrollY >= document.body.offsetHeight-100) {
        setVisibleCount((prev)=>prev+50);
      }
    }

    window.addEventListener("scroll", handScroll);
    return () => window.removeEventListener("scroll", handScroll);
  
  }, []);


  return (
    <MyContext.Provider value={{ data, loading, visibleCount}}>
      <BrowserRouter>
        <div className="App">
          <Nav />
          {!loading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
