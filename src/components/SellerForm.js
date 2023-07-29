import React from "react";

function SellerForm(props) {
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const expense = {
      id: event.target[0].value,
      price: event.target[1].value,
      name: event.target[2].value,
    };
    props.add(expense);
  };

  const divStyle = {
    marginBottom: "20px",
    // You can add more styles here if needed
  };

  return (
    <form style={divStyle} onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="product-id">Product Id: </label>
        <input id="product-id" type="text" />
      </div>
      <div>
        <label htmlFor="product-price">Price: </label>
        <input id="product-price" type="number" />
      </div>
      <div>
        <label htmlFor="product-name">Name: </label>
        <input id="product-name" type="text" />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default SellerForm;
