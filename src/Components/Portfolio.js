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
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
