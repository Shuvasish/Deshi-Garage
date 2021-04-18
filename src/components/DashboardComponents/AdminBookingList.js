import React from "react";
import styled from "styled-components";
import AdminBookingCard from "./AdminBookingCard";

function AdminBookingList({
  bookingList,
  setBookingList,
  setTrackStatus,
  trackStatus,
}) {
  //   console.log("from new", bookingList);
  return (
    <StyledAdminBookingList>
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
        </thead>

        <tbody>
          {bookingList?.map((booking, i) => (
            <AdminBookingCard
              booking={booking}
              setBookingList={setBookingList}
              key={booking._id}
              setTrackStatus={setTrackStatus}
              trackStatus={trackStatus}
              serial={i}
            ></AdminBookingCard>
          ))}
        </tbody>
      </table>
    </StyledAdminBookingList>
  );
}

const StyledAdminBookingList = styled.div`
  table {
    font-size: 1.5rem;
  }
`;

export default AdminBookingList;
