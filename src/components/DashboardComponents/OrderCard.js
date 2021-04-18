import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import styled from "styled-components";

function OrderCard({ booking, serial, setBookingList }) {
  //   console.log(booking);
  const { _id } = booking;
  //   console.log(_id);
  const { name } = booking.data[0];
  const { Title } = booking.data[1];
  //   const { paymentId } = booking.data[2];
  const { status } = booking.data[3];
  const [statusClass, setStatusClass] = useState(status);
  const [updateBooking, setUpdateBooking] = useState({
    data: [...booking.data],
  });
  //   useEffect(() => {}, [isChanged]);
  //   console.log(updateBooking);
  //   console.log(booking.data);
  const handleChange = (e) => {
    const updatedStatus = e.target.value;
    const updatedData = { ...updateBooking };
    updatedData.data[3]["status"] = updatedStatus;
    fetch(`https://peaceful-stream-74378.herokuapp.com/updateOrder/${_id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStatusClass(e.target.value);
      });
    // console.log(temp);
    // console.log(temp);
    // setUpdateBooking([...updateBooking,]);
    // console.log(e.target.value);
  };

  return (
    <StyledTr>
      <th scope="row">{serial + 1}</th>
      <td>{name}</td>
      <td>{Title}</td>
      {/* <td>{paymentId}</td> */}
      <td className={statusClass}>{status}</td>
      <td>
        <select id="cars" onChange={handleChange}>
          <option value="none">Change</option>
          <option value="pending">Pending</option>
          <option value="ongoing">Ongoing</option>
          <option value="done">Done</option>
        </select>
      </td>
    </StyledTr>
  );
}
const StyledTr = styled.tr`
  td {
    select {
      /* background: red; */
      /* width: 50%;
      height: 100%; */
    }
    .pending {
      background: #c93838;
    }
    .done {
      background: green;
    }
    .ongoing {
      background: orange;
    }
  }
  .pending {
    background: #c93838;
  }
  .done {
    background: green;
  }
  .ongoing {
    background: orange;
  }
`;
export default OrderCard;
