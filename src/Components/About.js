import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
             <a href="https://atomicobject.com/team/don-nakashima">
                 <img className="ao-logo"  src="images/ao-logo.png" alt="AO-Logo" />
             </a>
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>My love of software stemmed from my love of gaming growing up. 
                After diving into game development, I transitioned towards general software development.
            </p> 

            <h2>Before Software</h2>
            <p>
                Before I was at Atomic Object, I played Division 1 soccer on a full ride scholarship at University of Detroit Mercy.
                At Michigan State University, with all the extra free time, I competed in numerous hackathons, enrolled in a VR bootcamp in San Francisco, and played collegiate
                League of Legends at MSU for the Big Ten Network.
            </p>
            <div className="row">
               <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>Don Nakashima</span><br />
                        <span>+1(248)-924-7419</span><br />
                        <span>donnakashima@gmail.com</span>
                    </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href="https://drive.google.com/uc?export=download&id=1kekAby6jBz_Iof4E2mnimA7WzPmxmNY7" className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
