import React from "react";
import styled from "styled-components";
import BookingCard from "./BookingCard";

const BookingList = ({ bookingList }) => {
  //   console.log(bookingList);

  return (
    <StyledBookingList>
      {bookingList.map((booking) => (
        <BookingCard booking={booking}></BookingCard>
      ))}
    </StyledBookingList>
  );
};

const StyledBookingList = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 2rem;
  .booking-card {
    background: var(--nav);
    padding: 2rem;
    border-radius: 5px;
    .booking-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* background: gray; */
      padding-bottom: 1rem;
      border-bottom: 1px dotted gray;
      .booking-img-container {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }
      }
      .status {
        h4 {
          text-transform: capitalize;
        }
        .pending {
          color: #c93838;
        }
        .done {
          color: green;
        }
        .ongoing {
          color: orange;
        }
      }
    }
    .booking-description {
      margin-top: 2rem;
      h3 {
      }
      h4 {
        padding: 0.5rem 0rem;
      }
      p {
      }
    }
  }
`;

export default BookingList;
