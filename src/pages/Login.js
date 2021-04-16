import React, { useContext, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { UserContext } from "../App";
import { useHistory, useLocation } from "react-router-dom";

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import FirebaseConfig from "../components/Firebase/Firebase.Config";

// Initialize Firebase
firebase.initializeApp(FirebaseConfig);

function Login(props) {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  //this.state
  const [loginInfo, setLoginInfo] = useState({
    successMessage: "",
    failureMessage: "",
  });

  //firebase provider
  const provider = new firebase.auth.GoogleAuthProvider();

  //login event
  // const login = () => {
  //   setUser({ ...user, email: "shuvasish@gmail.com" });
  //   history.replace(from);
  // };
  const login = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const { displayName, photoURL, email } = user;
        setLoginInfo({
          successMessage: "Successfully Logged In.",
          failureMessage: "",
        });
        setUser({
          displayName,
          photoURL,
          email,
        });
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setLoginInfo({ failureMessage: errorMessage });
      });
  };

  return (
    <StyledLogin>
      <button onClick={login}>Sign In With Google</button>
      <p className="fail">{loginInfo.failureMessage}</p>
    </StyledLogin>
  );
}

const StyledLogin = styled(motion.div)`
  min-height: 90vh;
  padding: 6rem 12rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  .fail {
    color: #ff3333;
  }
  @media (max-width: 500px) {
    padding: 2rem 2rem;
    button {
      font-size: 1.4rem;
    }
  }
`;

export default Login;
