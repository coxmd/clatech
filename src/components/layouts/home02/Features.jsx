import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'fad fa-users',
                    title: 'Learn from Anywhere',
                    text: ' Our courses are entirely virtual, allowing you to gain valuable tech skills from the comfort of your home or anywhere with an internet connection.',
                    extraClassName: 'icon-bg-1',
                },
                {
                    id: 2,
                    icon: 'far fa-file-certificate',
                    title: 'Unbeatable Value',
                    text: 'IVY TECH ACADEMY offers some of the most affordable courses in Kenya, starting at just Ksh 10,000 – significantly lower than competitors like ALX.  We also understand that financial barriers exist, so we offer scholarships to deserving students.',
                    extraClassName: 'icon-bg-2',
                },
                {
                    id: 3,
                    icon: 'fa fa-video',
                    title: 'Master Industry-Relevant Skills:',
                    text: 'Our curriculum is meticulously crafted by industry veterans, ensuring you learn the most in-demand and up-to-date skills.  Choose from comprehensive programs (12-20 weeks) or fast-track your learning with intensive bootcamps (6-8 weeks)',
                    extraClassName: 'icon-bg-3',
                },
                {
                    id: 4,
                    icon: 'fa fa-video',
                    title: 'Become Certified:',
                    text: 'Validate your skills and impress potential employers with industry-recognized certifications offered upon program completion (available on select programs)',
                    extraClassName: 'icon-bg-3',
                },
                {
                    id: 5,
                    icon: 'fa fa-video',
                    title: 'Build Your Portfolio & Network:',
                    text: 'Gain invaluable hands-on experience by working on real-world projects throughout your courses. Showcase your accomplishments in a polished professional portfolio to stand out from the crowd.  Connect and learn from fellow learners, instructors, and industry professionals through our vibrant online community',
                    extraClassName: 'icon-bg-3',
                },
            ]
        }
    }

    render() {
        return (

            <section className="features-intro">
                <div className="container">
                    <div className="feature-inner">
                        <div className="row">

                        {
                            this.state.features.map((data,i) =>(
                            
                            <div className="col-xl-4 col-lg-4 " key={data.id}>
                                <div className="feature-item feature-style-left">
                                    <div className={`feature-icon ${data.extraClassName}`}>
                                        <i className={data.icon}></i>
                                    </div>
                                    <div className="feature-text">
                                        <h4>{data.title}</h4>
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </section>

            
                    
        );
    }
}

export default Features;