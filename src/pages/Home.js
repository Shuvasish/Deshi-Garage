import React from "react";
import Footer from "../components/Footer";
import AboutSection from "../components/HomeComponents/AboutSection";
import FaqSection from "../components/HomeComponents/FaqSection";
import HeroSection from "../components/HomeComponents/HeroSection";
import ReviewSection from "../components/HomeComponents/ReviewSection";
import ServicesSection from "../components/HomeComponents/ServicesSection";

//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//scroll top
import ScrollTop from "../components/ScrollTop";

function Home(props) {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
      <ServicesSection></ServicesSection>
      <ReviewSection></ReviewSection>
      <FaqSection></FaqSection>
      <ScrollTop />
      <Footer></Footer>
    </motion.div>
  );
}

export default Home;
