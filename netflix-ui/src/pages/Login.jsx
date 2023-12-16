import React, { useState } from "react";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import { firebaseAuth } from "../utils/firebase";

import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      navigate("/");
    }
  });
  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title flex column">
              <h1>Access your account to find TV shows and more all in one place</h1>
              <h4>Watch anywhere. Cancel anytime.</h4>
              <h6>
                Ready to watch? Enter your email to into your account.
              </h6>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        width: 40vw;
        gap: 2rem;
        color: white;
        .title{
          text-align: center;
          h1{
            margin-bottom: 20px;
          }
        }
        .container {
          gap: .5rem;
          input {
            padding: 1rem 1rem;
            width: 25rem;
            outline: none;
            border: none;
            border-radius: 6px;
          }
          button {
            margin-top: 1rem;
            padding: 1rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            border-radius: 0.5rem;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`;
export default Login;
