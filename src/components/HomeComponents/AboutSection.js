import React from "react";
import { StyledSection } from "../../style";
import styled from "styled-components";

function AboutSection(props) {
  return (
    <StyledAbout>
      <h2>About Us</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        It has survived not only five.
      </p>
      <p>
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </StyledAbout>
  );
}

const StyledAbout = styled(StyledSection)`
  /* padding: 10rem 12rem; */
  min-height: 40vh;
  /* background: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-size: 4rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  p {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
  }
  .para-1 {
    display: none;
  }
  .para-3 {
    display: none;
  }
`;

export default AboutSection;
