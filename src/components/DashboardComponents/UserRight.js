import React from "react";
import AddReview from "./AddReview";
import BookingList from "./BookingList";

function UserRight({ bookingList, setUserClick, userClick }) {
  //   console.log(userClick);
  const { booking, review } = userClick;
  return (
    <div>
      {booking ? <BookingList bookingList={bookingList} /> : ""}

      {/* ADD REVIEW */}
      {review ? <AddReview></AddReview> : ""}
    </div>
  );
}

export default UserRight;
