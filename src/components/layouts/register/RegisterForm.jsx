import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterForm extends Component {

    render() {

        return (
            <section className="page-wrapper single ">
                <style>{`
                    .select-wrapper {
                        position: relative;
                    }

                    .select-arrow {
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        width: 0;
                        height: 0;
                        border-left: 5px solid transparent;
                        border-right: 5px solid transparent;
                        border-top: 5px solid #333;
                        pointer-events: none;
                    }

                    select.form-control {
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        appearance: none;
                        padding-right: 30px;
                    }

                    /* New styles for placeholder */
                    select.form-control option:first-child {
                        color: #999;
                    }

                    select.form-control option {
                        color: #333;
                    }

                    /* For modern browsers */
                    select.form-control:invalid {
                        color: #999;
                    }
                `}</style>
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-6 col-xl-6">
                            <div className="login-form">
                                <div className="form-header">
                                    <h2 className="font-weight-bold mb-3">Become a Teacher</h2>

                                    {/*
                                    <div className="info">
                                        <span>Already have an account?  </span>
                                        <Link to="/login" className="text-decoration-underline">Sign In</Link>
                                    </div>
                                    */}
                                </div>

                                <form className="login login-register-form " method="post">
                                    <div className="form-row">
                                        <label>Name &nbsp;<span className="required">*</span></label>

                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="form-row">
                                        <label>Email address&nbsp;<span className="required">*</span></label>

                                        <input type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-row">
                                        <label>Highest qualification&nbsp;<span className="required">*</span></label>
                                        <div className="select-wrapper">
                                            <select className="form-control" required>
                                                <option value="" disabled selected>Select qualification</option>
                                                <option value="Graduate">Graduate</option>
                                                <option value="Post Graduate">Post Graduate</option>
                                                <option value="Higher Secondary">Higher Secondary</option>
                                            </select>
                                            <div className="select-arrow"></div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label>Past Coding Experience&nbsp;<span className="required">*</span></label>
                                        <div className="select-wrapper">
                                            <select className="form-control" required>
                                                <option value="" disabled selected>Select experience level</option>
                                                <option value="Beginner">Beginner</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Professional">Professional</option>
                                            </select>
                                            <div className="select-arrow"></div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <label>Gender&nbsp;<span className="required">*</span></label>
                                        <div className="select-wrapper">
                                            <select className="form-control" required>
                                                <option value="" disabled selected>Select gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                            </select>
                                            <div className="select-arrow"></div>
                                        </div>
                                    </div>
                                    {/*
                                    <div className="form-row py-2">
                                        <input type="checkbox" /> <span>Accept the Terms and Privacy Policy</span>
                                    </div>
                                    */}
                
                                    <div className="form-row">
                                        <button type="submit">Complete your Application</button>
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