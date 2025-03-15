import { useState, useEffect } from "react";
import "./products.css";

const products = ["Телефон", "Ноутбук", "Құлаққап", "Смарт сағат", "Камера"];

export default function ProductList() {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  useEffect(() => {
    const savedProducts =
      JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(savedProducts);
  }, []);

  const handleClick = (product) => {
    setRecentlyViewed((prev) => {
      const updatedList = [product, ...prev.filter((item) => item !== product)];
      localStorage.setItem("recentlyViewed", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <div className="container">
      <h2 className="title">Өнімдер</h2>
      <div className="product-list">
        {products.map((product) => (
          <button
            key={product}
            className="product-button"
            onClick={() => handleClick(product)}
          >
            {product}
          </button>
        ))}
      </div>

      <h2 className="title">Соңғы қаралғандар</h2>
      <ul className="recent-list">
        {recentlyViewed.map((product) => (
          <li key={product} className="recent-item">
            {product}
          </li>
        ))}
      </ul>
    </div>
  );
}
