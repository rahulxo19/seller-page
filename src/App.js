import "./App.css";
import SellerForm from "./components/SellerForm";
import ProductList from "./components/ProductList";
import { useState } from "react";
import ProductsWorth from "./components/ProductsWorth";

function App() {
  const [products, setProducts] = useState([]);
  const addProducts = (product) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts.push(product);
      return updatedProducts;
    });
  };

  const deleteHandler = (id) => {
    setProducts((rmProducts) => {
      const updatedProducts = products.filter((product) => product.id !== id);
      return updatedProducts;
    });
  };

  return (
    <>
      <SellerForm add={addProducts} />
      <ProductList products={products} delete={deleteHandler} />
      <ProductsWorth products={products} />
    </>
  );
}

export default App;
