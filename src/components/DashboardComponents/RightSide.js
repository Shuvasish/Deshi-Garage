import React from "react";
import styled from "styled-components";
import AddAdmin from "./AddAdmin";
import AddReview from "./AddReview";
import BookingList from "./BookingList";
import OrderList from "./OrderList";
import AddService from "./AddService";
import ManageServices from "./ManageServices";
import AdminRight from "./AdminRight";
import UserRight from "./UserRight";

const RightSide = ({
  bookingList,
  setBookingList,
  isAdmin,
  setTrack,
  track,
  services,
  setAdminClick,
  adminClick,
  setUserClick,
  userClick,
}) => {
  return (
    <StyledRightSidebar className="col-md-8 offset-md-1">
      {/* SHOW ORDERS  */}
      {isAdmin ? (
        <AdminRight
          bookingList={bookingList}
          setBookingList={setBookingList}
          isAdmin={isAdmin}
          setTrack={setTrack}
          track={track}
          services={services}
          setAdminClick={setAdminClick}
          adminClick={adminClick}
        ></AdminRight>
      ) : (
        <UserRight
          bookingList={bookingList}
          isAdmin={isAdmin}
          setUserClick={setUserClick}
          userClick={userClick}
        ></UserRight>
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
