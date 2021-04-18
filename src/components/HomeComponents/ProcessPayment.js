import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentFrom from "./PaymentFrom";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IeDBSIGGExwGlvsQu5b4jxKnamXc9bCZ6fq9qZQW5TMFmqQpFrkRGGFZkYKZ8rBXWTz8mI0peNFpP3HAwfNK7hm00Ukh7JZRQ"
);

const ProcessPayment = ({ data, setData, setIsPayed }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentFrom
        setData={setData}
        data={data}
        setIsPayed={setIsPayed}
      ></PaymentFrom>
    </Elements>
  );
};

export default ProcessPayment;
