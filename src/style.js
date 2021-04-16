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
