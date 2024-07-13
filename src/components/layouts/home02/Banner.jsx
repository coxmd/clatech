import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
    
    render() {
        return (
            <section className="banner banner-style-1">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-content">
                                <h1>Your Affordable Gateway to a Tech Career in Kenya</h1>
                                <p>Fuel your passion for technology and launch a fulfilling career with CLA TECH ACADEMY, your one-stop platform for mastering in-demand skills – virtually and affordably!</p>
                            </div>
                        </div>
            
                        <div className="col-md-12 col-xl-6 col-lg-6">
                            <div className="banner-img-round mt-5 mt-lg-0">
                                <img src="assets/images/banner/banner_img.png" alt="" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div> 
            </section>
            

        );
    }
}

export default Banner;

