import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
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

            <ul className="copyright">
              <li>2021 @ Don Nakashima</li>
              <li>
                Design by{" "}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
