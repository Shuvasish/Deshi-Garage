import React from "react";
import styled from "styled-components";
import BookingList from "./BookingList";
import OrderList from "./OrderList";

const RightSide = ({ bookingList, setBookingList, isAdmin }) => {
  return (
    <StyledRightSidebar className="col-md-8 offset-md-1">
      {/* SHOW ORDERS  */}
      {isAdmin ? (
        <OrderList
          bookingList={bookingList}
          setBookingList={setBookingList}
        ></OrderList>
      ) : (
        <BookingList bookingList={bookingList} />
      )}
    </StyledRightSidebar>
  );
};

const StyledRightSidebar = styled.div`
  background: #c7ced9;
  min-height: 80vh;
  color: white;
`;
export default RightSide;
