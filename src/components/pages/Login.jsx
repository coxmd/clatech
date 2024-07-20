import React from 'react';
import { PageBanner,RegisterForm}  from '../layouts/login/index';
import Layout from '../../common/Layout';

const Login = () =>{
    return (
        <div className="">       
            <Layout>       
                    <PageBanner
                        title="Register"
                        rootUrl="/"
                        parentUrl="Home"
                        currentUrl="Registration Form"
                        />
                    <RegisterForm />
            </Layout>
        </div>
    );
}

export default Login;