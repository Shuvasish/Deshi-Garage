import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

function Navbar(props) {
  const { user, setUser } = useContext(UserContext);
  const { email } = user;
  const logout = () => {
    setUser({
      displayName: "",
      email: "",
      photoURL: "",
    });
  };
  return (
    <StyledDiv>
      <h2 id="logo">
        <Link to="/"> Deshi Garage</Link>
      </h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        {email ? (
          <li className="logout" onClick={logout}>
            Logout
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </StyledDiv>
  );
}

const StyledDiv = styled(motion.div)`
  background: var(--nav);
  padding: 2rem 12rem;
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: white;
    font-family: "Lobster", cursive;
  }
  ul {
    font-size: 2rem;

    list-style: none;
    display: flex;
    margin-bottom: 0rem;

    li {
      margin-left: 5rem;
    }
    .logout {
      cursor: pointer;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 1200px) {
    padding: 2rem 10rem;
    h2 {
      font-size: 2.5rem;
    }
    ul {
      font-size: 1.8rem;

      li {
        margin-left: 4rem;
      }
    }
  }
  @media (max-width: 800px) {
    padding: 2rem 8rem;
    h2 {
      font-size: 2rem;
    }
    ul {
      font-size: 1.6rem;

      li {
        margin-left: 3rem;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 1.5rem 6rem;
    h2 {
      font-size: 1.8rem;
    }
    ul {
      font-size: 1.4rem;

      li {
        margin-left: 2rem;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 1.5rem 2rem;
    h2 {
      font-size: 1.5rem;
    }
    ul {
      font-size: 1.2rem;

      li {
        margin-left: 1rem;
      }
    }
  }
`;
export default Navbar;
