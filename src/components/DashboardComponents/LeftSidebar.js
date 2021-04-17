import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LeftSidebar({ isAdmin }) {
  return (
    <StyledLeftSidebar className="col-md-3">
      <ul>
        {isAdmin ? (
          <>
            <li>Order List</li>
            <li>Add Service</li>
            <li>Add Admin</li>
            <li>Manage Services</li>
          </>
        ) : (
          <>
            <li>Booking List</li>
            <li>Add Review</li>
          </>
        )}
      </ul>
    </StyledLeftSidebar>
  );
}

const StyledLeftSidebar = styled.div`
  background: #444;
  color: var(--text-white);
  padding: 2rem 0rem;
  ul {
    /* background: red; */
    list-style: none;
    li {
      font-size: 2rem;
      transition: all 0.3s;
      &:hover {
        color: #888888;
        cursor: pointer;
      }
    }
  }
`;

export default LeftSidebar;
