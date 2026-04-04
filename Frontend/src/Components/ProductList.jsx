import React, { useEffect, useState } from "react";
import ramcoImg from "../public/ramco.jpg";
import mahaImg from "../public/maha.jpg";
import priyaImg from "../public/priya.jpg";
import ultratechImg from "../public/ultratech.jpg";
import suryadevImg from "../public/suryadev.jpg";
import tataImg from "../public/tata.jpg";
import jswImg from "../public/jsw.jpg";
import sailImg from "../public/sail.jpg";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const brandImages={
    "Ramco":ramcoImg,
   "Maha" :mahaImg,
    "Priya":priyaImg,
     "Ultratech": ultratechImg,


     //steel
     "Suryadev Steel":suryadevImg,
     "Tata Steel":tataImg,
     "Jsw Steel":jswImg,
     "Sail Steel":sailImg,
  };

  return (
    <section className="products">
      <h2>Our Products</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p._id}>
            <img
              src={brandImages[p.brand]}//picks image based on brand name
              alt={p.brand}
              className="product-image"
            />
         {p.type && <p className="type">{p.type.toUpperCase()}</p>}
 
            <h3>{p.brand}</h3>
            <p className="price">₹ {p.price}</p>
            <p>{p.description}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;

// import React, { useEffect, useState } from "react";

// const ProductList = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [filterType, setFilterType] = useState("all");

//   useEffect(() => {
//     fetch("http://localhost:8000/api/products")
//       .then(res => res.json())
//       .then(data => setProducts(data))
//       .catch(err => console.error(err));
//   }, []);

//   const filtered = products.filter(p => {
//     const matchType = filterType === "all" || p.type === filterType;
//     const matchSearch = p.brand.toLowerCase().includes(search.toLowerCase());
//     return matchType && matchSearch;
//   });

//   return (
//     <div className="products">
//       <input
//         type="text"
//         placeholder="Search Brand..."
//         value={search}
//         onChange={e => setSearch(e.target.value)}
//       />
//       <div className="filter-buttons">
//         <button onClick={() => setFilterType("all")}>All</button>
//         <button onClick={() => setFilterType("cement")}>Cement</button>
//         <button onClick={() => setFilterType("steel")}>Steel</button>
//       </div>

//       <div className="product-grid">
//         {filtered.map(p => (
//           <div className="product-card" key={p._id}>
//             {p.image && <img src={p.image} alt={p.brand} />}
//             <h3>{p.brand}</h3>
//             <p>{p.description}</p>
//             <p className="price">₹{p.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;