import React, { useContext } from "react";
import { UserContext } from "../App";
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { pageAnimation, slider, fade, sliderContainer } from "../animation";

//scroll top
import ScrollTop from "../components/ScrollTop";

function Dashboard(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <StyledDashboard
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <motion.h1 variants={fade}> This is a dash board</motion.h1>
      <ScrollTop />
    </StyledDashboard>
  );
}

const StyledDashboard = styled(motion.div)`
  padding: 6rem 12rem;
  min-height: 91vh;
  background: var(--secondary);
  color: var(--text-primary);
  h1 {
    color: var(--text-primary);
  }
`;

//FRAME ANIMATION
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default Dashboard;
