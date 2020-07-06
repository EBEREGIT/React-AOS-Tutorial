import React from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
          <h1>Navigation</h1>
        </div>
      </nav>

      {/* <!-- header --> */}
      <header
        data-aos="zoom-out-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
      >
        <div className="jumbotron">
          <h1>Header</h1>
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
    </div>
  );
}

export default App;
