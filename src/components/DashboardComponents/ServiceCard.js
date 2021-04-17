import React from "react";
import styled from "styled-components";

function ServiceCard({ setTrack, track, service, num }) {
  const { _id, Price, Title } = service;
  const handleDelele = () => {
    fetch(`https://peaceful-stream-74378.herokuapp.com/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setTrack(!track));
  };
  return (
    <StyledTr>
      <th scope="row">{num + 1}</th>
      <td>{Title}</td>
      <td>{Price}</td>
      {/* <td>{paymentId}</td> */}
      <td className="text-primary target">Update</td>
      <td className="text-danger target" onClick={handleDelele}>
        Delete
      </td>
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
