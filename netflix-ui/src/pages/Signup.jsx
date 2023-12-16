import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";

import styled from "styled-components";

import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {}
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
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>

          <div className="form">
            <input
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              type="email"
              placeholder="Email Address"
              name="email"
            />
            <input
              value={formValues.password}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              type="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <button onClick={handleSignUp}>Create Account</button>
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
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
    .body {
      gap: 1rem;
      .text {
        text-align: center;
        font-size: 1rem;
        h1 {
          padding: 0 25rem;
        }
        h4 {
          font-size: 0.8rem;
          margin-top: 1rem;
        }
        h6 {
          font-size: 0.8rem;
        }
      }
      .form {
        display: flex;
        flex-direction: column;
        width: 30%;
        input {
          color: black;
          margin-bottom: 0.5rem;
          border-radius: 8px;
          border: none;
          padding: 1rem;
          font-size: 1rem;
          border: 1px solid #eee;
          &:focus {
            outline: none;
          }
        }
      }
      button {
        width: 30%;
        border-radius: 8px;
        padding: 1rem;
        background-color: #e50914;
        border: none;
        cursor: pointer;
        color: white;
        font-weight: bolder;
        font-size: 1.05rem;
      }
    }
  }
`;

export default Signup;
