import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import styled from "styled-components";
import { StyledButton } from "../../style";

const PaymentFrom = ({ data, setData, setIsPayed }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [err, setErr] = useState(false);
  const [errCode, setErrCode] = useState("");

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      //   console.log("[error]", error.code);
      setErrCode(error.code);
      setErr(true);
    } else {
      setErr(false);
      const temp = { ...data };
      temp.data[2].paymentId = paymentMethod.id;
      setData(temp);
      setIsPayed(true);
      //   console.log(temp);
      //   const paymentId = paymentMethod.id;
      //   console.log("[PaymentMethod]", paymentId);
    }
  };

  return (
    <StyledFrom onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "20px",
              color: "#424770",
              "::placeholder": {
                color: "#555",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <p style={{ color: "#555", marginTop: "10px" }}>
        Test Card Number:{" "}
        <span style={{ color: "blue" }}>4242 4242 4242 4242</span> MM/YY{" "}
        <span style={{ color: "blue" }}>04 24</span> CVC{" "}
        <span style={{ color: "blue" }}>234</span> ZIP{" "}
        <span style={{ color: "blue" }}>44444</span>
      </p>
      <PaymentStyledButton type="submit" disabled={!stripe}>
        Pay
      </PaymentStyledButton>
      {err ? <p className="text-danger">{errCode}</p> : ""}
    </StyledFrom>
  );
};

const StyledFrom = styled.form``;

const PaymentStyledButton = styled(StyledButton)`
  padding: 0.6rem 2rem;
  margin: 2rem 0rem;
`;

export default PaymentFrom;
