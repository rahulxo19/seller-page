import React from "react";
import Product from "./Product";

function ProductList(props) {
  const forDelete = (id) => {
    props.delete(id);
  };

  return (
    <>
      <ul>
        {props.products.map((expense) => {
          return (
            <Product
              key={expense.id}
              id={expense.id}
              price={expense.price}
              name={expense.name}
              forDelete={forDelete}
            />
          );
        })}
      </ul>
    </>
  );
}

export default ProductList;
