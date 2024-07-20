import React from 'react';
import {PageBanner,CourseGrid}  from '../layouts/courses/index';

import Layout from '../../common/Layout';

const CourseOne = () =>  {
    return (
        <div className="page">       
            <Layout>    
                <PageBanner
                    title="Courses"
                    rootUrl="/"
                    parentUrl="Home"
                    currentUrl="Courses"
                    />
                <CourseGrid />
            </Layout>  
        </div>
    );
}

export default CourseOne;