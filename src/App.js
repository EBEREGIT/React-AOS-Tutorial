// external imports
import React from "react";
import AOS from "aos";
import { AiFillTwitterCircle } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import { FaCodepen } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { IconContext } from "react-icons";
import styled from "styled-components";
import { BsFillAlarmFill, BsFillArchiveFill } from "react-icons/bs";

// internal imports
import "./App.css";
import "aos/dist/aos.css";

// initialization
AOS.init();

function App() {
  return (
    <div className="container text-center">
      {/* <!-- nav --> */}
      <nav
        className="navbar navbar-default"
        data-aos="flip-left"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="navbar-header">
          {/* styling multiple icons */}
          <IconContext.Provider value={{ className: "top-react-icons" }}>
            <AiFillTwitterCircle />
            <FaCodepen />
          </IconContext.Provider>
          <h1>Navigation</h1>

          {/* styling individual icons */}
          <IconContext.Provider value={{ color: "blue" }}>
            <IoLogoLinkedin />
          </IconContext.Provider>

          <IconContext.Provider value={{ color: "green" }}>
            <DiGithubBadge />
          </IconContext.Provider>
        </div>
      </nav>

      <section>
        <a href="tel:2348101234567" className="btn btn-success">
          Call
        </a>

        <a href="sms:2348101234567" className="btn btn-warning">
          Text
        </a>
      </section>

      {/* <!-- header --> */}
      <header
        data-aos="zoom-out-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="jumbotron">
          <Alarm />
          <h1>Header</h1>
          <Archive />
        </div>
      </header>

      {/* <!-- main --> */}
      <main>
        {/* <!-- services --> */}
        <section id="services">
          <h1>Services</h1>
          <div className="row">
            <div
              className="col-xs-12 col-sm-4"
              data-aos="zoom-out-down"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-cubic"
            >
              <div className="well well-lg">
                <h1>1</h1>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-4"
              data-aos="zoom-out-left"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-cubic"
            >
              <div className="well well-lg">
                <h1>2</h1>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-4"
              data-aos="zoom-out-right"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out-cubic"
            >
              <div className="well well-lg">
                <h1>3</h1>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- about --> */}
        <section id="about">
          <h1>About</h1>
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 col-md-8"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="50"
            >
              <div className="well well-lg">
                <h1>4</h1>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-4"
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              data-aos-delay="50"
            >
              <div className="well well-lg">
                <h1>5</h1>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- contact --> */}
        <section id="contact">
          <h1>Contact</h1>
          <div className="row">
            <div
              className="col-xs-12 col-sm-6 col-md-6"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
            >
              <div className="well well-lg">
                <h1>6</h1>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-6 col-md-6"
              data-aos="fade-zoom-out"
              data-aos-easing="ease-in-back"
              data-aos-delay="1000"
              data-aos-offset="0"
            >
              <div className="well well-lg">
                <h1>7</h1>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <!-- footer --> */}
      <footer>
        <div
          className="jumbotron"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-easing="ease-in-back"
          data-aos-delay="1000"
        >
          <h1>Footer</h1>
        </div>
      </footer>

      {/* WhatsApp icon */}
      <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
}

export default App;

// archive styled component
const Archive = styled(BsFillArchiveFill)`
  color: purple;
  transform: scale(2);
  margin: 5%;
`;

// alarm styled component
const Alarm = styled(BsFillAlarmFill)`
  color: red;
  transform: scale(2);
  margin: 5%;
`;
