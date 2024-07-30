import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p className="success-message">Thanks for registering. We will contact you soon.</p>
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
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-xl-6">
                        <div className="login-form">
                            <div className="form-header">
                                <h2 className="font-weight-bold mb-3">Register as a student</h2>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="login login-register-form">
                                <div className="form-row">
                                    <label>Name&nbsp;<span className="required">*</span></label>
                                    <input type="text" name="name" className="form-control" placeholder="Name"/>
                                </div>

                                <div className="form-row">
                                    <label>Email address&nbsp;<span className="required">*</span></label>
                                    <input type="email" name="email" className="form-control" placeholder="Email"/>
                                </div>

                                <div className="form-row">
                                    <label>Phone Number&nbsp;<span className="required">*</span></label>
                                    <input className="form-control" type="tel" name="phone" placeholder="Phone Number"/>
                                </div>
                                
                                <div className="form-row">
                                    <button type="submit">Register</button>
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