import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>My Portfolio</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://riceballs.itch.io/epochalyptic" title="Epochalyptic">
                        <img alt="Epochalyptic" src="images/portfolio/epochalyptic.jpg" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Epochalyptic</h5>
                                <p>Awarding winning 2-player asymmetric VR hide-and-seek game built during a 36-hour Hackathon</p>
                            </div>
                            </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://dorfdude8.itch.io/goblin-mcgoblinface" title="Goblin McGoblinFace VR">
                        <img alt="Goblin" src="images/portfolio/goblin.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Goblin McGoblinFace VR</h5>
                                <p>A survival tower defense VR experience using fireballs to fend off hordes of goblins</p>
                            </div>
                            </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://riceballs.itch.io/absence-of-light" title="Absence of Light">
                        <img alt="Absence" src="images/portfolio/absence.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Absence of Light</h5>
                                <p>A maze VR experience that contrasts light and dark</p>
                            </div>
                            </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://github.com/mdlandis/game-jam-project" title="Seconds">
                        <img alt="Seconds" src="images/portfolio/seconds.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Seconds</h5>
                                <p>A speed run game developed during Make School game jam</p>
                            </div>
                            </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://github.com/Dylaran/NoSQL" title="NoSQL">
                        <img alt="NoSQL" src="images/portfolio/github.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>NoSQL</h5>
                                <p>Implementation of a Document Store, a type of database with no schema</p>
                            </div>
                            </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://github.com/Dylaran/Sqlite3Emulator" title="Sqlite3Emulator">
                        <img alt="Sqlite3Emulator" src="images/portfolio/github.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Sqlite 3 Emulator</h5>
                                <p>Python module that emulates the behaviour of the built-in module sqlite3 that executes SQL statements</p>
                            </div>
                            </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://github.com/Dylaran/FileFormatConversions" title="FileFormatConversions">
                        <img alt="FileFormatConversions" src="images/portfolio/github.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>File Format Conversions</h5>
                                <p>Converts between 3 plain text data representations: CSV, JSON, and XML</p>
                            </div>
                            </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
                <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="https://github.com/Dylaran/UnityRayTracing" title="UnityRayTracing">
                        <img alt="UnityRayTracing" src="images/portfolio/github.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>Unity Ray Tracing</h5>
                                <p>CSE term project to explore ray tracing in Unity for a computer graphics course</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="fa fa-link"></i></div>
                        </a>
                    </div>
                </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
