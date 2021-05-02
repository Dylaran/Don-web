import React, { Component } from "react";

class Blogs extends Component {
  render() {
    return (
      <section id="blogs">
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1>Blogs</h1>
            </div>

            <div className="ten columns flex-container">
              <ul className="slides">
                <li>
                  <blockquote>
                    <p>
                      <a href="https://spin.atomicobject.com/2020/11/28/website-cra-github-netlify/">
                        Create &amp; Auto-deploy a Website with Create React
                        App, Github, and Netlify
                      </a>
                    </p>
                    <cite>
                      A post designed for people who want to easily setup an
                      automated CI/CD pipeline for deploying changes to their
                      website
                    </cite>
                  </blockquote>
                </li>
                <li>
                  <blockquote>
                    <p>
                      <a href="https://spin.atomicobject.com/2021/02/05/atomic-thanks-feedback/">
                        Thanks for the Feedback – An Atomic Take
                      </a>
                    </p>
                    <cite>
                      A blog post created to better understand how to give
                      proper feedback in different situations
                    </cite>
                  </blockquote>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blogs;
