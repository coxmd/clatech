import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p className="success-message">Thanks for applying. We will contact you soon.</p>
    )
}

function RegisterForm() {
    const [result, setResult] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_eu2crfq', 
            'template_9zuks05', 
            form.current, 
            {
                publicKey: 'yPawXT1HVf2jLGFot',
        })
        .then((result) => {
            console.log(result.text);
            setResult(true);
        }, 
        (error) => {
            console.log(error.text);
        }
        );
        e.target.reset();
    };

    setTimeout(() => {
        setResult(false);
    }, 5000);

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

                select.form-control option:first-child {
                    color: #999;
                }

                select.form-control option {
                    color: #333;
                }

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
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="login login-register-form">
                                <div className="form-row">
                                    <label>Name &nbsp;<span className="required">*</span></label>
                                    <input type="text" name="name" className="form-control" placeholder="Name" required/>
                                </div>
                                <div className="form-row">
                                    <label>Email address&nbsp;<span className="required">*</span></label>
                                    <input type="email" name="email" className="form-control" placeholder="Email" required/>
                                </div>
                                <div className="form-row">
                                    <label>Highest qualification&nbsp;<span className="required">*</span></label>
                                    <div className="select-wrapper">
                                        <select name="qualification" className="form-control" required>
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
                                        <select name="experience" className="form-control" required>
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
                                        <select name="gender" className="form-control" required>
                                            <option value="" disabled selected>Select gender</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <div className="select-arrow"></div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <button type="submit">Complete your Application</button>
                                </div>

                                {result ? <Result /> : null}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterForm;