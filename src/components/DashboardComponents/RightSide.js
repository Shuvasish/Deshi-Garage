import React from "react";
import styled from "styled-components";
import AddAdmin from "./AddAdmin";
import AddReview from "./AddReview";
import BookingList from "./BookingList";
import OrderList from "./OrderList";
import AddService from "./AddService";
import ManageServices from "./ManageServices";

const RightSide = ({
  bookingList,
  setBookingList,
  isAdmin,
  setTrack,
  track,
  services,
}) => {
  return (
    <StyledRightSidebar className="col-md-8 offset-md-1">
      {/* SHOW ORDERS  */}
      {/* {isAdmin ? (
        <OrderList
          bookingList={bookingList}
          setBookingList={setBookingList}
        ></OrderList>
      ) : (
        <BookingList bookingList={bookingList} />
      )} */}

      {/* ADD REVIEW */}
      {/* <AddReview></AddReview> */}

      {/* ADD ADMIN */}
      {/* <AddAdmin></AddAdmin> */}

      {/* ADD SERVICES */}
      {/* <AddService></AddService> */}

      <ManageServices
        setTrack={setTrack}
        track={track}
        services={services}
      ></ManageServices>
    </StyledRightSidebar>
  );
};

const StyledRightSidebar = styled.div`
  background: #c7ced9;
  min-height: 80vh;
  color: white;
`;
export default RightSide;
