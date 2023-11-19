import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import MovingBanner from "../components/MovingBanner";


const Home = () => {

  const [products, setProducts] = useState([])

  useEffect (() => {
    const fetchData = async () => {
      try  {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok){
          throw new Error ("Error while getting data");
        }
        const data = await response.json();
        setProducts(data);
      }
      catch (error) {
        console.error("Error while handling data:", error);
      }
    }
    fetchData()
  },[])



  return (
    <div>
      <NavBar />
      <Banner />
      <BestSeller products={products} />
      <MovingBanner />
    </div>
  );
};

export default Home;
