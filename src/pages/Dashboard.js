import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../App";
import styled from "styled-components";
//animation
import { motion } from "framer-motion";
import { pageAnimation, slider, fade, sliderContainer } from "../animation";

//scroll top
import ScrollTop from "../components/ScrollTop";
import LeftSidebar from "../components/DashboardComponents/LeftSidebar";
import RightSide from "../components/DashboardComponents/RightSide";

import { StyledSection } from "../style";

function Dashboard(props) {
  const { user } = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const [services, setServices] = useState([]);
  const [track, setTrack] = useState(false);
  const [trackStatus, setTrackStatus] = useState(false);

  const [adminClick, setAdminClick] = useState({
    order: true,
    service: false,
    addAdmin: false,
    manage: false,
  });
  const [activeIndicator, setActiveIndicator] = useState({
    order: "active",
    service: "",
    addAdmin: "",
    manage: "",
  });

  const [activeIndicatorUser, setActiveIndicatorUser] = useState({
    booking: "active",
    review: "",
  });
  const [userClick, setUserClick] = useState({
    booking: true,
    review: false,
  });
  const email = user.email;
  // console.log(email);
  useEffect(() => {
    fetch(`https://peaceful-stream-74378.herokuapp.com/isAdmin?email=${email}`)
      .then((res) => res.json())
      .then((data) => setIsAdmin(data))
      .catch((err) => console.error(err));
  }, [email]);

  useEffect(() => {
    fetch("https://peaceful-stream-74378.herokuapp.com/orders", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => setBookingList(data));
  }, [email, trackStatus]);

  useEffect(() => {
    fetch("https://peaceful-stream-74378.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [track]);
  // console.log(services);

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

      <ScrollTop />

      <StyledPageContainer variants={fade}>
        <div className="row">
          <LeftSidebar
            isAdmin={isAdmin}
            setAdminClick={setAdminClick}
            adminClick={adminClick}
            setUserClick={setUserClick}
            userClick={userClick}
            activeIndicator={activeIndicator}
            setActiveIndicator={setActiveIndicator}
            activeIndicatorUser={activeIndicatorUser}
            setActiveIndicatorUser={setActiveIndicatorUser}
          ></LeftSidebar>
          <RightSide
            bookingList={bookingList}
            setBookingList={setBookingList}
            isAdmin={isAdmin}
            setTrack={setTrack}
            track={track}
            services={services}
            setAdminClick={setAdminClick}
            adminClick={adminClick}
            setUserClick={setUserClick}
            userClick={userClick}
            setTrackStatus={setTrackStatus}
            trackStatus={trackStatus}
          ></RightSide>
        </div>
      </StyledPageContainer>
    </StyledDashboard>
  );
}

const StyledDashboard = styled(StyledSection)`
  /* padding: 0rem 0rem; */
  padding-top: 5rem;
  padding-bottom: 0rem;
  min-height: 91vh;

  color: var(--text-primary);
  h1 {
    color: var(--text-primary);
  }
  @media (max-width: 500px) {
    padding-top: 0rem;
  }
`;

const StyledPageContainer = styled(motion.div)``;

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
