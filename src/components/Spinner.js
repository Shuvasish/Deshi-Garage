import React from "react";
import styled from "styled-components";

function Spinner(props) {
  return (
    <StyledSpinner>
      <div className="spinTarget"></div>
    </StyledSpinner>
  );
}

const StyledSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  .spinTarget {
    height: 40px;
    width: 40px;
    /* background: var(--primary); */
    border: 1px solid;
    border-color: var(--primary);
    border-radius: 50%;
    animation: spin 1s infinite;
  }

  @keyframes spin {
    0% {
      transform: scale(0.5) rotate(0deg);
      opacity: 9;
    }
    50% {
      transform: scale(5) rotate(0deg);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(0.5) rotate(0deg);
    }
  }
`;

export default Spinner;
