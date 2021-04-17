import React from "react";
import styled from "styled-components";
import ServiceCard from "./ServiceCard";

function ManageServices({ setTrack, track, services }) {
  console.log(services);
  return (
    <StyledManageServices>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            {/* <th scope="col">Pay Id</th> */}
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
          {services.map((service, i) => (
            <ServiceCard
              key={service._id}
              service={service}
              setTrack={setTrack}
              track={track}
              num={i}
            ></ServiceCard>
          ))}
        </thead>
        <tbody></tbody>
      </table>
    </StyledManageServices>
  );
}

const StyledManageServices = styled.div`
  table {
    font-size: 1.5rem;
  }
`;
export default ManageServices;
