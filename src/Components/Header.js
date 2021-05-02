import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#blogs">
                Blogs
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <img
              className="profile-pic"
              src="images/don.png"
              alt="Don Nakashima Profile Pic"
            />
            <h1 className="responsive-headline">Don Nakashima</h1>
            <h3>
              Michigan State Alumnus. Software Engineer. React Developer. Gamer.
              <br />
            </h3>
            <hr />

            <ul className="social">
              <li>
                <a href={"https://www.facebook.com/DonNakashima/"}>
                  <i className={"fa fa-facebook"}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.twitter.com/DonNakashima"}>
                  <i className={"fa fa-twitter"}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.instagram.com/DonNakashima/"}>
                  <i className={"fa fa-instagram"}></i>
                </a>
              </li>
              <li>
                <a href={"https://twitch.tv/riceballs"}>
                  <i className={"fa fa-twitch"}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.linkedin.com/in/donnaka/"}>
                  <i className={"fa fa-linkedin"}></i>
                </a>
              </li>
              <li>
                <a href={"https://www.github.com/dylaran"}>
                  <i className={"fa fa-github"}></i>
                </a>
              </li>
              <li>
                <a href={"https://riceballs.itch.io"}>
                  <i className="fab fa-itch-io"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
