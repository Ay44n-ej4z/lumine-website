import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";

const ProfComponent = () => {
  const scrollDown = () => {
    window.scroll({
      top: 1000,
      behavior: "smooth",
    });
  }
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h1 className="blue" style={{margin: 40, color:"black"}}>
            Hello 
          </h1>
          <h2 style={{margin: 40, color:"black"}}>Enhance your online presence with us</h2>
          {/* <h3>UX/UI Designer and graphic designer</h3> */}
          <p style={{margin: 40, color:"black"}}>
          Lumine is an innovative company specializing in digital design and branding. With their passion for creativity 
          and excellence, they bring ideas to life and design visually stunning websites and cohesive brand identities. 
          Step into the spotlight and let Lumine shine your digital dreams with their expertise and attention to detail.
          </p>
          <button style={{margin: 40}} onClick={scrollDown}>Let's talk</button>
          <Social style={{margin: 40, color:"black"}}>
            <p>Check out my</p>
            <div className="social-icons" >
              <span>
                <a href="/">
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>
              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color:black;
    border: none;
    color: #fff;
    font-weight: 500;
    :hover {
        color: orange;
      filter: drop-shadow(0px 3px 6px #404040);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: black;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
      
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      :hover{
        color: orange;
      }
      transform: translate(-50%, -50%);
    }
  }
`;
// const Profile = styled.div`
//   img {
//     width: 25rem;
//     filter: drop-shadow(0px 10px 10px #01be9570);
//     transition: transform 400ms ease-in-out;
//     @media (max-width: 790px) {
//       width: 20rem;
//     }

//     @media (max-width: 660px) {
//       width: 18rem;
//     }

//     @media (max-width: 640px) {
//       width: 100%;
//     }
//   }

//   :hover img {
//     transform: translateY(-10px);
//   }
// `;
