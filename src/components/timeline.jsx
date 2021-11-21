import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Wipro (Software Developer) <span>2019-2021</span></h2>
                        <p>I recently have joined the Wipro as a Software Developer in the Eforms team. 
                          	Managed Multiple clients in Consumer Business Unit including Retail and Supply Chain Verticals.
                            My major part of the work has been Building Stable and Maintainable codebase using React and Creating new features, functionality, and capabilities on the eCommerce sites using Javascript, React, Ajax, and JSON.
                            {/* I am also exploring the role of container technology like Docker and container-orchrastation technologies like K8s, Swarm to create industry standard production environments. */}
                            </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduation at TCE <span>2015-2019</span></h2>
                        <p>I completed my undergrad studies with a degree in CS (Computer Science). Over the years, I've completed courses in DSA, OOPs, Computer Networks, IOT, and Web-Data Management, and I now have a deeper grasp of these topics. I've also been a member of S.B.G. (Student Body Govenance) since my time as a student.</p>
                        {/* <p>I have pursued my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.</p> */}
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Primary and Higher Education <span>2003-2015</span></h2>
                        <p>I have completed my higher secondary education with major subjects as Physics, Chemistry, Maths & Computers with 86%. During my time at school, I have developed interest in solving complex problems of the fundamental physics which helped me to improve my understanding of any problem and also my mathematical skills to actually solve the problems.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
