import React , { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <p className="success-message">Thanks for your query. We will contact with you soon.</p>
    )
}

function ContactUsForm( { formStyle } ) {
    const [result, setResult] = useState( false );
    const form = useRef();

    const sendEmail = ( e ) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'service_eu2crfq', 
            'template_ajidrx4', 
            form.current, 
            {
                publicKey: 'yPawXT1HVf2jLGFot',
        })
        .then( ( result ) => {
            console.log( result.text );
            }, 
            ( error ) => {
                console.log( error.text );
            }
        );
        e.target.reset();
        setResult( true );
    };

    setTimeout(() => {
        setResult( false );
    }, 5000);

    return (
        <form className={`${ formStyle }`} ref={form} action="" onSubmit={ sendEmail }>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" id="name" name="fullname" className="form-control" placeholder="Your Name"/>
                    </div>
                </div>
                
                <div className="col-lg-6">
                    <div className="form-group">
                        <input type="text" name="email" id="email" className="form-control" placeholder="Email Address"/>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject"/>
                    </div>
                </div>
                
                <div className="col-lg-12">
                    <div className="form-group">
                        <textarea id="message" name="message" cols="30" rows="6" className="form-control" placeholder="Your Message"></textarea>    
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="text-center">
                        <button className="btn btn-main w-100 rounded" type="submit">Send Message</button>
                    </div>
                </div>

                { result ? <div className="form-group"><Result /></div>  : null }
            </div>

        </form>
    )
}
export default ContactUsForm;