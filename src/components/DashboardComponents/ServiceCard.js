import React from "react";
import styled from "styled-components";

function ServiceCard({ setTrack, track, service, num }) {
  //   console.log(service);
  const { _id, Price, Title } = service;
  return (
    <StyledTr>
      <th scope="row">{num + 1}</th>
      <td>{Title}</td>
      <td>{Price}</td>
      {/* <td>{paymentId}</td> */}
      <td className="text-primary target">Update</td>
      <td className="text-danger target">Delete</td>
    </StyledTr>
  );
}

const StyledTr = styled.tr`
  .target {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default ServiceCard;
