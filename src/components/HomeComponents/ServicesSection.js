import React, { useEffect, useState } from "react";
import { StyledSection } from "../../style";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

function ServicesSection(props) {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://peaceful-stream-74378.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <StyledServices>
      <h2>Our Services</h2>
      <div className="service-card-container">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </StyledServices>
  );
}

const StyledServices = styled(StyledSection)`
  min-height: 50vh;
  /* background: #555; */
  h2 {
    font-size: 5rem;
    margin-bottom: 8rem;
    text-align: center;
  }
  .service-card-container {
    display: grid;
    grid-gap: 70px;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));

    .service-card {
      background: var(--nav);
      border: 3px solid var(--primary);
      padding: 10px;
      h3 {
        text-align: center;
        margin: 2rem 0rem;
      }
      h4 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .card-img-container {
        width: 100%;

        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
      p {
        padding: 2rem 0rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 2rem;
        margin: 2rem auto 3rem auto;

        display: block;
        border: none;
        background: var(--secondary);
        color: var(--text-white);
        border: 1px solid var(--primary);
        /* text-transform: uppercase; */
        transition: all 0.5s ease-out;
        &:hover {
          background: var(--primary);
        }
      }
    }
  }
`;

export default ServicesSection;
