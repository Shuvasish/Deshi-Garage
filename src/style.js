import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled(motion.section)`
  min-height: 90vh;
  padding: 6rem 12rem;
  background: var(--secondary);
  @media (max-width: 800px) {
    padding: 4rem 4rem;
  }
  @media (max-width: 600px) {
    padding: 4rem 2rem;
  }
`;
export const StyledButton = styled.button`
  padding: 1.5rem 3rem;
  font-size: 2rem;
  display: block;
  border: none;
  background: var(--secondary);
  color: var(--text-white);
  border: 3px solid var(--primary);
  /* text-transform: uppercase; */
  transition: all 0.5s ease-out;
  &:hover {
    background: var(--primary);
  }
`;
