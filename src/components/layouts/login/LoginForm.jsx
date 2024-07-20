import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {

    render() {

        return (
            <section className="page-wrapper single ">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-xl-6">
                            <div className="login-form">
                                <div className="form-header">
                                    <h2 className="font-weight-bold mb-3">Register as a student</h2>

                                    {/*
                                    <div className="info">
                                        <span>Don't have an account yet?  </span>
                                        <Link to="/register" className="text-decoration-underline">Sign Up for Free</Link>
                                    </div>
                                    */}
                                </div>

                                <form className="login login-register-form " method="post">
                                    <div className="form-row">
                                        <label>Name&nbsp;<span className="required">*</span></label>

                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>

                                    <div className="form-row">
                                        <label>Email address&nbsp;<span className="required">*</span></label>

                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>

                                    <div className="form-row">
                                        <label>Phone Number&nbsp;<span className="required">*</span></label>

                                        <input className="form-control" type="password" placeholder="Phone Number"/>
                                    </div>
                                    
                                    {/*
                                    <div className="d-flex align-items-center justify-content-between py-2">
                                        <div className="form-row">
                                            <input type="checkbox" /> <span>Remember me</span>
                                        </div>
                
                                        <p className="lost_password">
                                            <Link to="#">Forgot password?</Link>
                                        </p>
                                    </div>
                                    */}
                                    <div className="form-row">
                                        <button type="submit">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default RegisterForm;