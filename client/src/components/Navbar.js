import React from "react";
import styled from "styled-components";
import Nxtwavelogo from "../images/Nxtwavelogo.png";
import profilelogo from "../images/profile.png";

const Container = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 92.97%;
  background: #ffffff;
`;

const Img = styled.img`
  position: absolute;
  left: 3.33%;
  right: 90.97%;
  top: 20.56%;
  bottom: 94.53%;
`;

const Photo = styled.img`
  position: absolute;
  right: 5%;
  top: 20.56%;
  bottom: -50%;
  border-radius: 100%;
`;

const Navbar = () => {
  return (
    <Container>
      <Img src={Nxtwavelogo} alt="" />
      <Photo src={profilelogo} alt="" />
    </Container>
  );
};

export default Navbar;
