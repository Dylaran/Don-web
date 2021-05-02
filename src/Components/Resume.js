import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <div>
                  <h3>{"Michigan State University"}</h3>
                  <p className="info">
                    {"Bachelor of Science in Computer Science"}{" "}
                    <span>&bull;</span>
                    <em className="date">{"Class of 2020"}</em>
                  </p>
                </div>
                <div>
                  <h3>{"Make School Summer Academy"}</h3>
                  <p className="info">
                    {"VR Development Track"} <span>&bull;</span>
                    <em className="date">{"June 2017-Aug 2017"}</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div>
              <h3>{"Software Developer & Consultant"}</h3>
              <p className="info">
                {"Atomic Object"}
                <span>&bull;</span>{" "}
                <em className="date">{"Aug 2020 - Apr 2021"}</em>
              </p>
              <ul>
                <li>
                  - Part of Atomic's{" "}
                  <a href="https://atomicobject.com/careers/accelerator">
                    Accelerator
                  </a>{" "}
                  program, Cell Gamma, to develop career skills as a junior
                  developer
                </li>
                <li>
                  - Work on self-managed teams of 2-10 designers, developers,
                  and testers
                </li>
                <li>
                  - Collaborate with clients to build products from scratch
                </li>
                <li>- Variety of tech stacks utilized</li>
              </ul>
            </div>
            <div>
              <h3>{"Principal Investment Portfolio Construction Developer"}</h3>
              <p className="info">
                {"Principal Financial Services, Inc."}
                <span>&bull;</span>{" "}
                <em className="date">{"Jan 2020 - May 2020"}</em>
              </p>
              <ul>
                <li>- Team of 4: Senior Capstone Project</li>
                <li>
                  - Developed a web application that provides a user interface
                  for investment analysts to generate portfolio constructions
                </li>
                <li>
                  - Using the serverless application model in AWS, built with
                  Angular framework, AWS S3, AWS API, AWS Lambda, and AWS
                  DynamoDB
                </li>
              </ul>
            </div>
            <div>
              <h3>{"JSTOR Labs Intern"}</h3>
              <p className="info">
                {"Ithaka"}
                <span>&bull;</span>{" "}
                <em className="date">{"May 2019 - Dec 2019"}</em>
              </p>
              <ul>
                <li>
                  - Worked with the Labs staff to develop the{" "}
                  <a href="https://www.jstor.org/understand)">
                    JSTOR Understanding Series site
                  </a>
                </li>
                <li>
                  - Reformat HTML/CSS text for compatibility with an automated
                  processing pipeline to perform text matching, indexing, and
                  linking
                </li>
                <li>- Machine learning process for text annotations</li>
              </ul>
            </div>
            <div>
              <h3>{"Mobile AR Developer"}</h3>
              <p className="info">
                {"Michigan State University IT"}
                <span>&bull;</span>{" "}
                <em className="date">{"May 2018 - Aug 2018"}</em>
              </p>
              <ul>
                <li>
                  - Developed spARtan, a location-based augmented reality iOS
                  application that takes the current position and identifies
                  nearby points of interests in an AR space
                </li>
                <li>
                  - Assisted with design and features for the official MSU
                  mobile application
                </li>
                <li>- Developed in Unity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="row skill">

        <div className="three columns header-col">
        <h1><span>Skills</span></h1>
        </div>

        <div className="nine columns main-col">

        <p>The following is a self-assessment of my abilities in these fields:
        </p>

            <div className="bars">
                <ul className="skills">
                    {skills}
                </ul>
            </div>
        </div>
    </div> */}
      </section>
    );
  }
}

export default Resume;
