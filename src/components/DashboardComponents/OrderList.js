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

          {bookingList.length > 0 ? (
            bookingList.map((booking, serial) => (
              <OrderCard
                booking={booking}
                setBookingList={setBookingList}
                serial={serial}
                key={booking._id}
              ></OrderCard>
            ))
          ) : (
            <div className="tarCon">
              <div className="spiTar"></div>
            </div>
          )}
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
  .tarCon {
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .spiTar {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      background-color: var(--secondary);
      animation: sp 1s infinite;
    }
  }
  @keyframes sp {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 9;
    }
    50% {
      transform: scale(1) rotate(0deg);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(0) rotate(0deg);
    }
  }
`;

export default OrderList;
