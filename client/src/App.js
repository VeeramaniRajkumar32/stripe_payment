import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
// import axios from "axios";

function App() {
  const [product, setProduct] = useState({
    name: "Veera Product",
    price: 5000 * 100,
    productBy: "veeramani",
  });

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };
    console.log(body);

    // axios.post('/payments', body)
    //                 .then((response) => {
    //                   console.log(response);
    //                   return response
    //                 }).catch((err) => {
    //                   console.log(err);
    //                 })
    

    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("http://localhost:8000/payments", {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <StripeCheckout
        name={product.name}
        amount={product.price }
        currency="INR"
        token={makePayment}
        stripeKey="pk_test_51MnxckSBqeTFR9qwK1YmNAvIGgSwm7JA9Gaz02oPM17MoSgDNaZ9heOk5Qyk3EL45H4K6I14OJO3h8wIi4pDRs4N00PEIG9mml"
        // stripeKey="pk_live_51MnxckSBqeTFR9qwv9o43C1pQZstuPCGNeG1IUTndtSIMWg19LvKtXlRY691PNl6cG0mgEzAx5sOvea1XmRQB0Hz00Bh6AI9Cl"
      >
        <button>Pay to {product.price / 100}</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
