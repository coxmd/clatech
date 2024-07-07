import React, { Component } from 'react';

class Process extends Component {
    constructor(props){
        super(props);
        this.state = {
            process: [
                {
                    id: 1,
                    step: '01',
                    title: 'Sign Up with Your Details',
                    text: 'Join our coding community by signing up with your details.',
                    extraName: 'bg-1',
                },
                {
                    id: 2,
                    step: '02',
                    title: 'Enroll in a Course',
                    text: 'Choose a coding course that excites you and start learning.',
                    extraName: 'bg-2',
                },
                {
                    id: 3,
                    step: '03',
                    title: 'Start Learning Online',
                    text: 'Access our fun and interactive online lessons to begin coding.',
                    extraName: 'bg-3',
                },
                {
                    id: 4,
                    step: '04',
                    title: 'Earn Your Certificate',
                    text: 'Complete the course and earn a certificate to show your skills.',
                    extraName: 'bg-1',
                }
            ]
        }
    }
    render() {
        return (
            <section className="work-process-section">
                <div className="container">
                    <div className="row mb-70 justify-content-between">
                        <div className="col-xl-5">
                            <div className="section-heading text-center text-lg-start mb-4 mb-xl-0">
                                <span className="subheading">How to Begin</span>
                                <h2 className="font-lg">4 Steps to Start Your Coding Journey</h2>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <p className="text-center text-lg-start">Join us on an exciting journey to learn coding. Our courses are designed to be fun and engaging for kids. Start today and become a coding wizard!</p>
                        </div>
                    </div>
            
                    <div className="row">
                        {
                        this.state.process.map((data,i) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={data.id}>
                                <div className="step-item ">
                                    <div className={`step-number ${data.extraName}`}>{data.step}</div>
                                    <div className="step-text">
                                        <h5>{data.title}</h5>
                                        <p>{data.text}</p>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                        
                    </div>
                </div>
            </section>
            
       
     
        );
    }
}

export default Process;