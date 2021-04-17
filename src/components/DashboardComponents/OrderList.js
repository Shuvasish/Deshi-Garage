import React from "react";
import styled from "styled-components";
import OrderCard from "./OrderCard";

function OrderList({ bookingList, setBookingList }) {
  return (
    <StyledOrderList>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Service</th>
            {/* <th scope="col">Pay Id</th> */}
            <th scope="col">Status</th>
            <th scope="col">Update Status</th>
          </tr>
          {bookingList.map((booking, serial) => (
            <OrderCard
              booking={booking}
              setBookingList={setBookingList}
              serial={serial}
              key={booking._id}
            ></OrderCard>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </StyledOrderList>
  );
}

const StyledOrderList = styled.div`
  table {
    font-size: 1.5rem;
  }
`;

export default OrderList;
