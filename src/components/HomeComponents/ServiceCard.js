import React from "react";

function ServiceCard({ service }) {
  const { Title, Price, image, Description, _id } = service;
  return (
    <div className="service-card">
      <h3>{Title}</h3>
      <h4>{Price} Taka</h4>
      <div className="card-img-container">
        <img src={image} alt={Title} />
      </div>
      <p>{Description}</p>
      <button>Book Now</button>
    </div>
  );
}

export default ServiceCard;
