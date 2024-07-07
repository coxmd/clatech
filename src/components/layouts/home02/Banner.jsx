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
                                <h1>Empowering Kids with Coding Skills </h1>
                                <p>Join our fun and interactive coding classes designed specifically for children. Learn, create, and innovate with us!</p>
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

