import React from "react";
import styled from "styled-components";

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
      <button>Book Now</button>
    </div>
  );
}

const Hide = styled.div`
  overflow: hidden;
`;

export default ServiceCard;
