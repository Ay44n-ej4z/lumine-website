import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import Modal from "../Modal/Modal"

const Footer = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [sendMailToUser, setSendMailToUser] = useState({
    from_name: "",
    to_name: "MD Ayaan Ejaz",
    from_email: "",
    message: ""
  })
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const sendMail = (e) => {
    e.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = !emailRegex.test(sendMailToUser.from_email);

    if (!sendMailToUser.from_name || !sendMailToUser.from_email || !sendMailToUser.message) {
      alert("Please fill all the fields.");
    } else if (isValid) {
      alert("Please use valid email");
    } else {
      emailjs.send("service_fjmnkq5", "template_shsoyfa", sendMailToUser, "_PmcdHjDZW8Py9jWA")
        .then((result) => {
          setIsOpen(true)
          setSendMailToUser({
            from_name: "",
            to_name: "MD Ayaan Ejaz",
            from_email: "",
            message: ""
          });
          window.scroll({
            top: 0,
            behavior: "smooth",
          });
        }, (error) => {
          console.log(error);
        });
    }
  }
  const onhandleChange = (e) => {
    const { name, value } = e.target;
    setSendMailToUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  }
  return (
    <>
      {isOpen ? <Modal set={setIsOpen} open={isOpen} /> : null}
      <Container id="footer">
        <Profile>
          <Slide direction="left" delay={1}>
            <h1 style={{color: "black"}}>Contact Details</h1>
          </Slide>
          {/* <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>1030 Southwood Dr San Luis Obispo, California(CA), 93401</p>
          </Slide>
        </div> */}
          <div className="links">
            <Slide direction="left">
              {/* <h1>Contact me directly:</h1> */}
            </Slide>
            <div>
              <span>
                <FiPhoneCall style={{color: "black"}} />
              </span>
              <Slide direction="left">
                <a href="tel:+91-7061460536">+91-7061460536</a>
              </Slide>
            </div>
            <div>
              <Slide direction="left">
                <span>
                  <HiOutlineMailOpen style={{color: "black"}} />
                </span>
              </Slide>
              <Slide>
                <a href="mailto:ayaan.ejaz185@gmail.com">ayaan.ejaz185@gmail.com</a>
              </Slide>
            </div>
          </div>
          <div className="profiles">
            <Slide direction="left">
              <h1 style={{color: "black"}}>Check our profiles</h1>
            </Slide>
            <div className="icons">
              <Zoom>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <AiFillLinkedin />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <BsFacebook />
                  </a>
                </span>
              </Zoom>
              <Zoom>
                <span>
                  <a href="/">
                    <BsInstagram />
                  </a>
                </span>
              </Zoom>
            </div>
          </div>
          <Fade >
            <ArrowUp style={{ backgroundColor: "black" }} onClick={scrollUp} >
              <AiOutlineArrowUp />
            </ArrowUp>
          </Fade>
        </Profile>
        <Form>
          <Slide direction="right">
            <form>
              <div className="name">
                <span>
                  <CgProfile />
                </span>
                <input
                  type="text"
                  name="from_name"
                  onChange={e => onhandleChange(e)}
                  value={sendMailToUser.from_name}
                  placeholder="Fullname..." />
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail />
                </span>
                <input
                  type="email"
                  name="from_email"
                  onChange={e => onhandleChange(e)}
                  value={sendMailToUser.from_email}
                  placeholder="Email..." />
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea cols="30" name="message" rows="10" onChange={e => onhandleChange(e)} value={sendMailToUser.message} placeholder="Message..."></textarea>
              </div>
              <button style={{ backgroundColor: "black", color: "white" }} onClick={sendMail}>Submit</button>
            </form>
          </Slide>
        </Form>
      </Container>
    </>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
      color: black;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: black;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    :hover {
      color: orange;
    }
    .icons {
      display: flex;
      align-items: center;
      
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        a {
          margin-top: 0.2rem;
          color: #fff;
          :hover {
            color: orange
          }
        }
        :hover {
          filter: drop-shadow(0px 3px 6px #404040);
        }
      }
      
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  :hover {
    filter: drop-shadow(0px 3px 6px #404040);
    color: orange
  }
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
 
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #ECE8E8;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: black;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: black;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: black;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 3px 6px #404040);
      }
      a{
        :hover{
          color: orange;
        }
      }
    }
  }
`;
