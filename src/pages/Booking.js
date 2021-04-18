import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { StyledSection, StyledButton } from "./../style";
import { UserContext } from "./../App.js";
import ProcessPayment from "../components/HomeComponents/ProcessPayment";

function Booking(props) {
  const { user } = useContext(UserContext);
  const { id } = useParams();
  const history = useHistory();
  //   console.log(id);
  const [data, setData] = useState({
    data: [
      { email: user.email, name: user.displayName, time: "" },
      {},
      { paymentId: "" },
      { status: "pending" },
    ],
  });
  const [isPayed, setIsPayed] = useState(false);
  const [up, setUp] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/service/${id}`)
      .then((res) => res.json())
      .then((tempData) => {
        // const temp = { ...data };
        // console.log(tempData);
        // temp.data[1] = tempData[0];

        setUp(tempData[0]);
      });
  }, [id]);

  const handleClick = () => {
    const test = { ...data };
    const time = new Date().toISOString();

    test.data[1] = up;
    test.data[0].time = time;
    setData(test);
    console.log(data);
    console.log(up);
    console.log(time);
    fetch("https://peaceful-stream-74378.herokuapp.com/addOrder", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/dashboard");
        }
      });
  };

  return (
    <StyledBooking style={{ background: "white" }}>
      <h2>Booking Details</h2>
      <hr></hr>
      <h3>Title : {up.Title}</h3>
      <h4>Price : {up.Price} Taka</h4>
      {isPayed ? (
        <h3 className="text-success">Payment Completed</h3>
      ) : (
        <h3>Payment</h3>
      )}
      {isPayed ? (
        ""
      ) : (
        <ProcessPayment
          setData={setData}
          data={data}
          setIsPayed={setIsPayed}
        ></ProcessPayment>
      )}
      {isPayed ? (
        <BookStyledButton onClick={handleClick}>
          Confirm Booking
        </BookStyledButton>
      ) : (
        ""
      )}
    </StyledBooking>
  );
}

const StyledBooking = styled(StyledSection)`
  min-height: 91vh;
  color: var(--secondary);
  h2 {
    color: var(--secondary);
  }
  h3 {
    color: var(--secondary);
    padding: 3rem 0rem 1rem 0rem;
  }
  h4 {
    color: var(--secondary);
  }
`;
const BookStyledButton = styled(StyledButton)`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  margin-top: 2rem;
`;

export default Booking;
