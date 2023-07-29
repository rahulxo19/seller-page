import React from "react";

function Product(props) {
  const handleDelete = () => {
    props.forDelete(props.id);
  };

  return (
    <>
      <li>
        Product-Id:{props.id}, Price:{props.price}, Product-Name:{props.name}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </>
  );
}

export default Product;
