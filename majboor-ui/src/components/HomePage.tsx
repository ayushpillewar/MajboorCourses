import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <div className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold">Master Coding & Cloud Computing</h1>
                            <p className="lead">Learn programming and AWS from an experienced instructor. Transform your career with hands-on projects and real-world applications.</p>
                            <button className="btn btn-primary btn-lg">Explore Courses</button>
                        </div>
                        <div className="col-md-6">
                            {/* You can add an illustration or image here */}
                            <div className="text-center">
                                <i className="fas fa-laptop-code fa-5x mb-3"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Course Categories */}
            <div className="container my-5">
                <h2 className="text-center mb-5">What You'll Learn</h2>
                <div className="row g-4">
                    {/* Programming Section */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title">Programming Courses</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2">✨ Python Programming</li>
                                    <li className="mb-2">✨ Java Development</li>
                                    <li className="mb-2">✨ Web Development</li>
                                    <li className="mb-2">✨ Data Structures & Algorithms</li>
                                </ul>
                                <button className="btn btn-outline-primary">View Programming Courses</button>
                            </div>
                        </div>
                    </div>

                    {/* AWS Section */}
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h3 className="card-title">AWS Cloud Courses</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2">☁️ AWS Solutions Architect</li>
                                    <li className="mb-2">☁️ AWS Developer Associate</li>
                                    <li className="mb-2">☁️ Cloud Architecture</li>
                                    <li className="mb-2">☁️ DevOps with AWS</li>
                                </ul>
                                <button className="btn btn-outline-primary">View AWS Courses</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Why Choose Our Courses?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-laptop fa-3x mb-3 text-primary"></i>
                                <h4>Hands-on Learning</h4>
                                <p>Practice with real projects and gain practical experience</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-user-graduate fa-3x mb-3 text-primary"></i>
                                <h4>Expert Instruction</h4>
                                <p>Learn from experienced professionals in the field</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-clock fa-3x mb-3 text-primary"></i>
                                <h4>Flexible Learning</h4>
                                <p>Learn at your own pace with lifetime access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="container my-5 text-center">
                <h2>Ready to Start Your Learning Journey?</h2>
                <p className="lead mb-4">Join thousands of students who have transformed their careers with our courses.</p>
                <button className="btn btn-primary btn-lg">Get Started Today</button>
            </div>
        </div>
    );
};

export default HomePage;
