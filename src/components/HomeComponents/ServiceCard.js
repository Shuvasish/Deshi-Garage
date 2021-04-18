import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  const { Title, Price, image, Description, _id } = service;
  return (
    <div className="service-card">
      <h3>{Title}</h3>
      <h4>{Price} Taka</h4>
      <div className="card-img-container">
        <Hide>
          <img src={image} alt={Title} />
        </Hide>
      </div>
      <p>{Description}</p>
      <Link style={{ textDecoration: "none" }} to={`/booking/${_id}`}>
        <button>Book Now</button>
      </Link>
    </div>
  );
}

const Hide = styled.div`
  overflow: hidden;
`;

export default ServiceCard;
