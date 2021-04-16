import React from "react";
import { StyledSection } from "../../style";
import styled from "styled-components";
import Toggle from "../Toggle";
import { AnimateSharedLayout } from "framer-motion";

function FaqSection(props) {
  return (
    <StyledFaq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Can I trust you?">
          <div className="answer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. and more recently when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages,
            </p>
          </div>
        </Toggle>
        <Toggle title="Can I get some offer?">
          <div className="answer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. and more recently when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages,
            </p>
          </div>
        </Toggle>
        <Toggle title="What If you have done anything to my properties?">
          <div className="answer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. and more recently when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages,
            </p>
          </div>
        </Toggle>
        <Toggle title="Do you have licence?">
          <div className="answer">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. and more recently when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,but also the leap into electronic typesetting, remaining
              essentially unchanged. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages,
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </StyledFaq>
  );
}
const StyledFaq = styled(StyledSection)`
  min-height: 50vh;
  h2 {
    font-size: 6rem;
    font-weight: lighter;
    padding-bottom: 3rem;
    span {
      display: block;
      color: var(--primary);
      font-weight: bold;
    }
  }
  .faq-line {
    background: #ccc;
    height: 0.3rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
    h4 {
      font-size: 3rem;
    }
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
  @media (max-width: 1200px) {
    h2 {
      font-size: 5rem;

      padding-bottom: 2.5rem;
    }
    .faq-line {
      height: 0.3rem;
      margin: 2rem 0rem;
    }
    .question {
      padding: 2.5rem 0rem;

      h4 {
        font-size: 2.5rem;
      }
    }
    .answer {
      padding: 1.6rem 0rem;
      p {
        padding: 0.8rem 0rem;
      }
    }
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 4rem;

      padding-bottom: 2rem;
    }
    .faq-line {
      height: 0.3rem;
      margin: 1.5rem 0rem;
    }
    .question {
      padding: 2rem 0rem;

      h4 {
        font-size: 2rem;
      }
    }
    .answer {
      padding: 1.5rem 0rem;
      p {
        padding: 0.7rem 0rem;
      }
    }
  }
  @media (max-width: 600px) {
    h2 {
      font-size: 3rem;

      padding-bottom: 1.5rem;
    }
    .faq-line {
      height: 0.3rem;
      margin: 1.2rem 0rem;
    }
    .question {
      padding: 1.5rem 0rem;

      h4 {
        font-size: 1.7rem;
      }
    }
    .answer {
      padding: 1.2rem 0rem;
      p {
        font-size: 1.5rem;
        padding: 0.6rem 0rem;
      }
    }
  }
`;

export default FaqSection;
