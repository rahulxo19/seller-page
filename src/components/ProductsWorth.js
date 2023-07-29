import React from "react";

function ProductsWorth(props) {
  const total = props.products.reduce((acc, product) => acc + product.price, 0);

  return (
    <>
      {props.products.length > 0 ? (
        <h3>Total Worth of Products: Rs.{Number(total)} </h3>
      ) : (
        <h3>no products !</h3>
      )}
    </>
  );
}

export default ProductsWorth;
