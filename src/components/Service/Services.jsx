import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4 style={{marginLeft: "40px"}}>
          Our <span style={{color: "#ECE8E8"}}>services</span>
        </h4>
        <h1 style={{marginLeft: "40px"}}>What we Provide</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"UI/UX Designing"}
            disc={`We provides exceptional UI/UX design services, bringing together the perfect blend of aesthetics and functionality to create engaging and user-centric digital experiences. Our talented team ensures that every interaction is seamless and captivating, leaving a lasting impression on your audience.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Graphic Designing"}
            disc={`We offers top-notch graphic design services that bring your brand to life through visually stunning and impactful designs. From logos and branding materials to marketing collaterals, our talented designers craft captivating visuals that leave a lasting impression and elevate your brand's presence.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Website & Web Application creation"}
            disc={`We specializes in website creation, transforming your vision into a captivating online presence. Our expert team combines design expertise and technical know-how to deliver customized websites that are visually stunning, user-friendly, and optimized for success.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Mobile App Development"}
            disc={`We specialize in crafting bespoke mobile app
            solutions, addressing diverse business needs, from
            intuitive consumer apps to robust enterprise
            solutions. Our dedicated team collaborates closely
            with clients to ensure timely delivery.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Mobile App Development"}
            disc={`We specialize in crafting bespoke mobile app
            solutions, addressing diverse business needs, from
            intuitive consumer apps to robust enterprise
            solutions. Our dedicated team collaborates closely
            with clients to ensure timely delivery.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  background-color: black;
  
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
margin-left: 40px;
margin-right: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
