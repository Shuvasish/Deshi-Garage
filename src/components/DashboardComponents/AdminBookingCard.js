import React from "react";
import styled from "styled-components";

function AdminBookingCard({
  booking,
  setBookingList,
  serial,
  setTrackStatus,
  trackStatus,
}) {
  const { _id, data } = booking;
  const name = data[0].name;
  const service = data[1].Title;
  const status = data[3].status;
  //   console.log(name, service, status);

  const handleChange = (e) => {
    // console.log(e.target.value);
    const temp = [...booking.data];
    temp[3].status = e.target.value;
    // console.log({ data: temp });
    fetch(`https://peaceful-stream-74378.herokuapp.com/updateOrder/${_id}`, {
      method: "PATCH",
      body: JSON.stringify({ data: temp }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("status updated");
        }
      });
    // console.log(booking.data);
  };
  return (
    <StyledTr>
      <td>{serial + 1}</td>
      <td>{name}</td>
      <td>{service}</td>
      <td>{status}</td>
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
const StyledTr = styled.tr``;
export default AdminBookingCard;
