import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json(); // Extract JSON data from the response
        setProducts(data); // Set the fetched data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <NavBar />

      <div className="grid grid-cols-2 mt-10 mx-10 md:grid-cols-2 md:ml-32 lg:grid-cols-4 lg:ml-36">
        {products
      .slice(0,16)
      .map((product) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
        />
        
      ))}
      </div>
      
    </div>
  );
};

export default Shop;

// Practice code to fetch data using useState and useEffect
// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("link");
//         if (!response.ok) {
//           throw new Error("Unable to fetch data");
//         }
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error message:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {products.slice(0, 6).map((product) => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//           {/* Add additional product information here */}
//         </div>
//       ))}
//     </div>
//   );
// };



