import React from "react";
import { StyledSection } from "../style";
import styled from "styled-components";
import fb from "../icon/fb.svg";
import youtube from "../icon/youtube.svg";
import twitter from "../icon/twitter.svg";

function Footer(props) {
  return (
    <StyledFooter>
      <div className="left">
        <h2>Deshi Garage</h2>
        <p>
          This is not just a garage, It's more than a garage. This is the Trust
          of thousands of people.
        </p>
      </div>
      <div className="center">
        <div>
          <ul>
            <li>About</li>
            <li>Refund Policy</li>
            <li>Privacy</li>
            <li>Help</li>
            <li>Terms</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <h3>Follow Us</h3>
        <div>
          <img src={fb} alt="fb" />
          <img src={youtube} alt="fb" />
          <img src={twitter} alt="fb" />
        </div>
      </div>
    </StyledFooter>
  );
}
const StyledFooter = styled(StyledSection)`
  background: var(--nav);
  min-height: 30vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  .left {
    width: 40%;
    h2 {
      font-family: "Lobster", cursive;
    }
  }
  .center {
    width: 30%;
    div {
      ul {
        margin: 0 auto;
        list-style: none;
        font-size: 1rem;
        width: 50%;
        /* display: flex; */
        margin-bottom: 0rem;
        flex-direction: row;
        /* align-items: center; */
        li {
          font-size: 1.4rem;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
  .right {
    width: 30%;

    h3 {
      text-align: center;
    }
    div {
      padding: 1rem 0rem;
      display: flex;
      justify-content: space-around;
      img {
        /* background: red; */
        height: 40px;
        width: 40px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1000px) {
    min-height: 30vh;

    .left {
      width: 40%;
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.4rem;
      }
    }
    .center {
      width: 30%;
      div {
        ul {
          width: 50%;

          li {
            font-size: 1.2rem;
          }
        }
      }
    }
    .right {
      width: 30%;

      h3 {
        text-align: center;
        font-size: 2.2rem;
      }
      div {
        padding: 1rem 0rem;

        img {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
  @media (max-width: 800px) {
    min-height: 30vh;

    .left {
      width: 40%;
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .center {
      width: 30%;
      div {
        ul {
          width: 50%;

          li {
            font-size: 1.1rem;
          }
        }
      }
    }
    .right {
      width: 30%;

      h3 {
        text-align: center;
        font-size: 2rem;
      }
      div {
        padding: 1rem 0rem;

        img {
          height: 30px;
          width: 30px;
        }
      }
    }
  }

  @media (max-width: 800px) {
    min-height: 30vh;

    .left {
      width: 40%;
      h2 {
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
    .center {
      width: 30%;
      div {
        ul {
          width: 50%;

          li {
            font-size: 1.1rem;
          }
        }
      }
    }
    .right {
      width: 30%;

      h3 {
        text-align: center;
        font-size: 2rem;
      }
      div {
        padding: 1rem 0rem;

        img {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
  @media (max-width: 600px) {
    min-height: 30vh;
    display: block;
    .left {
      width: 100%;
      margin: 2rem auto;
      h2 {
        text-align: center;
        font-size: 2rem;
      }
      p {
        font-size: 1.2rem;
        text-align: center;
      }
    }
    .center {
      width: 100%;
      margin: 2rem auto;
      div {
        ul {
          width: 100%;
          display: flex;
          justify-content: space-around;

          li {
            font-size: 1.2rem;
          }
        }
      }
    }
    .right {
      width: 100%;
      margin: 2rem auto;
      h3 {
        text-align: center;
        font-size: 2rem;
      }
      div {
        padding: 1rem 0rem;

        img {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
`;

export default Footer;
