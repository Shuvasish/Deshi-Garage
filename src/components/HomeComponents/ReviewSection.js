import React, { useEffect, useState } from "react";
import { StyledSection } from "../../style";
import styled from "styled-components";
import ReviewCard from "../ReviewCard";

function ReviewSection(props) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-stream-74378.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
  }, []);
  return (
    <StyledReview>
      <h2>User's Reviews</h2>
      <div className="review-card-container">
        {reviews?.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </StyledReview>
  );
}
const StyledReview = styled(StyledSection)`
  min-height: 20vh;
  /* background: #444; */
  h2 {
    font-size: 5rem;
    text-align: center;
  }
  .review-card-container {
    padding: 2rem 0rem;
    /* background: #445566; */
    .review-card {
      min-height: 100px;
      margin: 1rem 0rem;
      /* background: green; */
      background: var(--nav);
      padding: 1rem;
      display: flex;
      .review-img-container {
        height: 100%;
        margin-right: 2rem;
        img {
          height: 100px;
          border-radius: 50px;
        }
      }
      .details {
        display: flex;
        flex-direction: column;
        justify-content: center;
        h5 {
          text-transform: capitalize;
          margin-bottom: 1rem;
        }
        .ratting {
          img {
            height: 20px;
          }
        }
        p {
          margin-top: 0.4rem;
        }
      }
    }
  }
`;

export default ReviewSection;
