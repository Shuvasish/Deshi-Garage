import React from "react";
import { format } from "date-fns";

function BookingCard({ booking }) {
  //   console.log(booking);
  const { time } = booking.data[0];
  const { Title, Price, image, Description } = booking.data[1];
  const { status } = booking.data[3];
  //   console.log(time, Title, status);
  return (
    <div className="booking-card">
      <div className="booking-top">
        <div className="booking-img-container">
          <img src={image} alt={Title} />
        </div>
        <div className="status">
          <h4 className={status}>{status}</h4>
          <p>{format(new Date("2021-04-15T08:18:15.990Z"), "yyyy-MM-dd")}</p>
        </div>
      </div>
      <div className="booking-description">
        <h3>{Title}</h3>
        <h4>{Price} Taka</h4>
        <p>{Description}</p>
      </div>
    </div>
  );
}

export default BookingCard;
