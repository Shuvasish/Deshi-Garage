import React, { useState, useContext } from "react";
import styled from "styled-components";
import { StyledButton } from "../../style";
import { UserContext } from "../../App";
import { useHistory } from "react-router";

function AddReview(props) {
  const { user } = useContext(UserContext);
  const { displayName, email, photoURL } = user;
  const history = useHistory();
  //   console.log(user);
  const [formData, setFormData] = useState({
    name: displayName,
    email,
    img: photoURL,
    ratting: 1,
    details: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("sub");
    fetch("https://peaceful-stream-74378.herokuapp.com/addReview", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          history.push("/");
        }
      });
  };
  const handleChange = (e) => {
    const updatedFormData = { ...formData };
    updatedFormData.ratting = e.target.value;
    setFormData(updatedFormData);
    // console.log(updatedFormData);
    // updatedFormData.ratting: e.target.value;
  };
  const handleBlur = (e) => {
    const updatedFormData = { ...formData };
    updatedFormData.details = e.target.value;
    setFormData(updatedFormData);
    // console.log(updatedFormData);
  };
  return (
    <StyledAddReview>
      <form
        onSubmit={handleSubmit}
        method="POST"
        action="https://peaceful-stream-74378.herokuapp.com/addReview"
      >
        <div className="form-group">
          <label htmlFor="Rating">Rating</label>
          <select
            className="form-control"
            id="exampleFormControlSelect1"
            onChange={handleChange}
          >
            <option value="1">1 STAR</option>
            <option value="2">2 STAR</option>
            <option value="3">3 STAR</option>
            <option value="4">4 STAR</option>
            <option value="5">5 STAR</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="details">Details</label>
          <textarea
            rows="4"
            cols="10"
            name="comment"
            id="details"
            onBlur={handleBlur}
            required
          />
        </div>
        <StyledReviewButton>Submit Review</StyledReviewButton>
      </form>
    </StyledAddReview>
  );
}

const StyledAddReview = styled.div`
  padding: 1rem 2rem;
  form {
    div {
      label {
        font-size: 1.6rem;
        color: var(--secondary);
        margin: 1rem 0rem;
      }

      select {
        /* height: 40px; */
        font-size: 2rem;
      }
    }
    textarea {
      width: 100%;
      outline: none;
      border: none;
      color: var(--secondary);
      padding: 1rem;
      font-size: 1.6rem;
      &:focus {
        background: #ffffda;
      }
    }
  }
`;
const StyledReviewButton = styled(StyledButton)`
  margin: 1rem 0rem;
  padding: 0.8rem 1.6rem;
  font-size: 1.6rem;
`;

export default AddReview;
