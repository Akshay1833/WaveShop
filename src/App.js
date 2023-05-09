import React, { useState, useEffect } from "react";
import Axios from "axios";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <BestSeller products={products} />
    </div>
  );
}

export default App;
