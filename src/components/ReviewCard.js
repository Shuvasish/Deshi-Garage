import React from "react";
import star from "../icon/star.svg";
import star2 from "../icon/star2.svg";

function ReviewCard({ review }) {
  const { details, email, img, name, ratting } = review;
  //   console.log(typeof ratting);
  const numRatting = Number(ratting);
  const rate = new Array(numRatting);
  rate.fill(1);

  const minus = 5 - numRatting;
  //   console.log(minus);
  const minusRate = new Array(minus);
  minusRate.fill(1);
  //   console.log(minusRate);
  //   console.log("rate", typeof rate);
  return (
    <div className="review-card">
      <div className="review-img-container">
        <img src={img} alt="shuvo" />
      </div>
      <div className="details">
        <h5>{name}</h5>
        <div className="ratting">
          {rate?.map((_, i) => (
            <img src={star} key={i} alt="svg" />
          ))}
          {minusRate?.map((_, i) => (
            <img src={star2} key={i} alt="svg" />
          ))}
        </div>
        <p>{details}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
