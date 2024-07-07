import React, { Component } from 'react';

class Features extends Component {
    constructor(props){
        super(props);
        this.state = {
           features: [
                {
                    id: 1,
                    icon: 'fad fa-users',
                    title: 'Earn Certificates',
                    text: 'Complete courses and earn certificates to show your coding skills!',
                    extraClassName: 'icon-bg-1',
                },
                {
                    id: 2,
                    icon: 'far fa-file-certificate',
                    title: 'Expert Instructors',
                    text: 'Learn from experienced instructors who make coding fun and easy.',
                    extraClassName: 'icon-bg-2',
                },
                {
                    id: 3,
                    icon: 'fa fa-video',
                    title: 'Interactive Classes',
                    text: 'Join live classes and interactive sessions to enhance your learning.',
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