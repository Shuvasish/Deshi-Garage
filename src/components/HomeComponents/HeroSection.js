import React from "react";
import { StyledSection } from "../../style";
import styled from "styled-components";
import car from "../../img/garage.jpg";
import Wave from "../Wave";
import { motion } from "framer-motion";

import { titleAnim, fade, photoAnim } from "../../animation";

function HeroSection(props) {
  return (
    <StyledHero>
      <motion.div className="hero-left">
        <Hide>
          <motion.h2 variants={titleAnim}>
            We work to <span>safe</span> <br />
          </motion.h2>
        </Hide>
        <Hide>
          <motion.h2 variants={titleAnim}> your dreams</motion.h2>
        </Hide>
        <motion.p variants={fade}>
          Contact us for booking places for you dreams. We have professionals to
          care your dreams.
        </motion.p>
        <motion.button variants={fade}>Our Services</motion.button>
      </motion.div>
      <div className="hero-right">
        <div className="img">
          <motion.img variants={photoAnim} src={car} alt="car" />
        </div>
      </div>
      <Wave></Wave>
    </StyledHero>
  );
}
const StyledHero = styled(StyledSection)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .hero-left {
    z-index: 2;
    padding-right: 2rem;
    h2 {
      font-size: 6rem;
      span {
        color: var(--primary);
        font-weight: bold;
      }
    }
    p {
      padding: 3rem 0rem;
      font-size: 2rem;
    }
    button {
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
    }
  }
  .hero-right {
    z-index: 2;
    .img {
      overflow: hidden;
      img {
        height: 80vh;
        width: 40vw;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 1200px) {
    padding: 2rem 10rem;

    .hero-left {
      h2 {
        font-size: 5rem;
      }
      p {
        padding: 2.5rem 0rem;
        font-size: 1.8rem;
      }
      button {
        padding: 1.2rem 2.4rem;
        font-size: 1.8rem;
      }
    }
  }
  @media (max-width: 1000px) {
    .hero-left {
      padding-right: 1rem;
      h2 {
        font-size: 4rem;
      }
      p {
        padding: 2rem 0rem;
        font-size: 1.6rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.6rem;
      }
    }
  }
  @media (max-width: 800px) {
    padding: 2rem 4rem;

    .hero-left {
      h2 {
        font-size: 3.5rem;
      }
      p {
        padding: 2rem 0rem;
        font-size: 1.5rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 2rem 2rem;
    .hero-left {
      z-index: 2;
      padding-right: 0rem;
      h2 {
        font-size: 3.5rem;
      }
      p {
        padding: 2rem 0rem;
        font-size: 1.5rem;
      }
      button {
        padding: 1rem 2rem;
        font-size: 1.5rem;
        margin-bottom: 4rem;
      }
    }
    .hero-right {
      .img {
        overflow: hidden;
        img {
          height: 60vh;
          width: 95vw;
          object-fit: cover;
        }
      }
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default HeroSection;
