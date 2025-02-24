import React, { Component } from 'react';
import CountUp from 'react-countup';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: [
                // {
                //     id: 1,
                //     icon: 'flaticon-man',
                //     title: '200',
                //     suffix: 'k',
                //     text: 'Students',
                //     extraClassName: 'bg-1',
                // },
                {
                    id: 2,
                    icon: 'flaticon-infographic',
                    title: '7',
                    suffix: '+',
                    text: 'Online Courses',
                    extraClassName: 'bg-5',
                },
                {
                    id: 3,
                    icon: 'flaticon-satisfaction',
                    title: '100',
                    suffix: '%',
                    text: 'Satisfaction',
                    extraClassName: 'bg-5',
                },
            ]
        }
    }

    render() {
        return (

            <section className="counter-section-2" style={{ marginTop: '100px' }}>
                <div className="container">
                    <div className="row align-items-center justify-content-center" >
                        <div className="col-xl-5 pr-xl-5 col-lg-8">
                            <div className="section-heading mb-5 mb-xl-0 text-center text-xl-start">
                                <span className="subheading">Join Thousands of Learners Worldwide</span>
                                <h2 className="font-lg">Why Choose IVY TECH ACADEMY?</h2>
                            </div>
                        </div>

                        <div className="col-xl-7">
                            <div className="row">

                            {
                            this.state.counter.map((data,i) => (

                                <div className="col-lg-4 col-md-6" key={data.id}>
                                    <div className={`counter-box mb-4 mb-lg-0 ${data.extraClassName}`}>
                                        <i className={data.icon}></i>
                                        <div className="count">
                                            <span className="counter h2"> 
                                                <CountUp end={data.title} enableScrollSpy /></span>
                                                <span> {data.suffix}</span>
                                        </div>
                                        <p>{data.text}</p>
                                    </div>
                                </div>

                                        
                                ))
                            }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           

        );
    }
}

export default Counter;