import React from "react";

import styled from "styled-components";
import AdminLeft from "./AdminLeft";
import UserLeft from "./UserLeft";

function LeftSidebar({
  isAdmin,
  setAdminClick,
  adminClick,
  setUserClick,
  userClick,
  activeIndicator,
  setActiveIndicator,
  activeIndicatorUser,
  setActiveIndicatorUser,
}) {
  return (
    <StyledLeftSidebar className="col-md-3">
      <ul>
        {isAdmin ? (
          <AdminLeft
            setAdminClick={setAdminClick}
            adminClick={adminClick}
            activeIndicator={activeIndicator}
            setActiveIndicator={setActiveIndicator}
          ></AdminLeft>
        ) : (
          <UserLeft
            setUserClick={setUserClick}
            userClick={userClick}
            activeIndicatorUser={activeIndicatorUser}
            setActiveIndicatorUser={setActiveIndicatorUser}
          ></UserLeft>
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
        color: var(--primary);
        cursor: pointer;
      }
    }
    .active {
      color: var(--primary);
    }
  }
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

export default LeftSidebar;
