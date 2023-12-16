import React from "react";
import styled from "styled-components";

export default function BackgroundImage() {
  return <Container />;
}

const Container = styled.div`
  background-color: #000;
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
