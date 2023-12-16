import React from "react";
import styled from "styled-components";

import { Link, useNavigate } from "react-router-dom";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase";

import logo from "../assets/logo.png";

const Navbar = ({ isScrolled }) => {
  const links = [
    { name: "Home", link: "/" },
    { name: "TVShows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (user) => {
    if (!user) navigate("/login");
  });
  return (
    <Container>
      <nav className={`${isScrolled ? "scrolled" : ""} flex`}>
        <div className="left flex a-center">
          <div
            className="brand flex a-center j-center"
            onClick={() => navigate("/")}
          >
            <img alt="logo" src={logo} />
          </div>
          <ul className="links flex">
            {links.map((link, name) => {
              return (
                <li key={name}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="right flex a-center">
          <button onClick={() => signOut(firebaseAuth)}>Logout</button>
        </div>
      </nav>
    </Container>
  );
};

const Container = styled.div`
  .scrolled {
    background-color: black;
  }
  nav {
    /* position: sticky; */
    top: 0;
    height: 5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 2;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        cursor: pointer;
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      button {
        background-color: red;
        color: #fff;
        border-radius: 0.5rem;
        padding: 0.8rem 2rem;
        border: none;
        outline: none;
        cursor: pointer;
      }
    }
  }
`;

export default Navbar;
