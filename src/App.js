import { MyContext } from "./MyContext";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import Home from "./Home";
import Loading from "./Loading";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, []);


  return (
    <MyContext.Provider value={{data, loading}}>
      <div className="App">
        <Nav />
        {!loading ? <Loading /> : <Home />}
      </div>
    </MyContext.Provider>
  );
}

export default App;
