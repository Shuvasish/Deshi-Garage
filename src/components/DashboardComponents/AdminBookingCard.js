import React from "react";
import styled from "styled-components";

function AdminBookingCard({ booking, setBookingList, serial }) {
  const { _id, data } = booking;
  const name = data[0].name;
  const service = data[1].Title;
  const status = data[3].status;
  console.log(name, service, status);
  return (
    <StyledTr>
      <td>{serial + 1}</td>
      <td>{name}</td>
      <td>{service}</td>
      <td>{status}</td>
      <td>change</td>
    </StyledTr>
  );
}
const StyledTr = styled.tr``;
export default AdminBookingCard;
