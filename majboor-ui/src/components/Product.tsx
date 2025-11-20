import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
    const appStoreUrl = "https://play.google.com/store/apps/details?id=com.majboormajdoor.locationtracker";

    return (
        <div className="container-fluid p-0">
            {/* Hero Section */}
            <div className="bg-dark text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="display-4 fw-bold">Location Tracker</h1>
                            <p className="lead">
                                A powerful and reliable real-time location tracking application designed for safety, 
                                convenience, and peace of mind.
                            </p>
                            <a 
                                href={appStoreUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-success btn-lg"
                            >
                                <i className="fab fa-google-play me-2"></i>
                                Download on Google Play
                            </a>
                        </div>
                        <div className="col-md-6 text-center">
                            <i className="fas fa-location-dot fa-5x mb-3"></i>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features Section */}
            <div className="container my-5">
                <h2 className="text-center mb-5">Key Features</h2>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <i className="fas fa-map-marker-alt fa-3x mb-3 text-success"></i>
                                <h4 className="card-title">Real-time Tracking</h4>
                                <p className="card-text">Track your loved ones in real-time with accurate GPS coordinates and live updates.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <i className="fas fa-shield-alt fa-3x mb-3 text-primary"></i>
                                <h4 className="card-title">Secure & Private</h4>
                                <p className="card-text">Your location data is encrypted and secure. Control who can see your location.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <i className="fas fa-bell fa-3x mb-3 text-warning"></i>
                                <h4 className="card-title">Instant Alerts</h4>
                                <p className="card-text">Get notified when loved ones arrive or leave specific locations with geofencing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <i className="fas fa-battery-three-quarters fa-3x mb-3 text-info"></i>
                                <h4 className="card-title">Battery Efficient</h4>
                                <p className="card-text">Optimized to use minimal battery power while providing accurate tracking.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <i className="fas fa-history fa-3x mb-3 text-secondary"></i>
                                <h4 className="card-title">Location History</h4>
                                <p className="card-text">Access detailed location history and movement patterns with visual maps.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm border-0">
                            <div className="card-body">
                                <i className="fas fa-users fa-3x mb-3 text-danger"></i>
                                <h4 className="card-title">Family Groups</h4>
                                <p className="card-text">Create groups and track multiple family members all in one app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="bg-light py-5">
                <div className="container">
                    <h2 className="text-center mb-5">How It Works</h2>
                    <div className="row g-4">
                        <div className="col-md-3 text-center">
                            <div className="bg-primary text-white rounded-circle mb-3 mx-auto" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                1
                            </div>
                            <h4>Download</h4>
                            <p>Install the app from Google Play Store</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="bg-primary text-white rounded-circle mb-3 mx-auto" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                2
                            </div>
                            <h4>Create Account</h4>
                            <p>Sign up with your credentials</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="bg-primary text-white rounded-circle mb-3 mx-auto" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                3
                            </div>
                            <h4>Add Contacts</h4>
                            <p>Invite family and friends to track</p>
                        </div>
                        <div className="col-md-3 text-center">
                            <div className="bg-primary text-white rounded-circle mb-3 mx-auto" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
                                4
                            </div>
                            <h4>Start Tracking</h4>
                            <p>Monitor locations in real-time</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Use Cases */}
            <div className="container my-5">
                <h2 className="text-center mb-5">Perfect For</h2>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h4><i className="fas fa-family me-2 text-primary"></i>Family Safety</h4>
                                <p>Keep track of your children, elderly parents, and family members for their safety and your peace of mind.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h4><i className="fas fa-briefcase me-2 text-primary"></i>Fleet Management</h4>
                                <p>Monitor employee vehicles and ensure safe commutes for your delivery and service teams.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h4><i className="fas fa-heart me-2 text-primary"></i>Emergency Response</h4>
                                <p>Quickly locate and help someone in case of an emergency with real-time location sharing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h4><i className="fas fa-globe me-2 text-primary"></i>Travel Buddy</h4>
                                <p>Share your location with friends when traveling to ensure everyone's safety.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary text-white py-5">
                <div className="container text-center">
                    <h2 className="mb-3">Ready to Get Started?</h2>
                    <p className="lead mb-4">Download Location Tracker today and stay connected with your loved ones!</p>
                    <a 
                        href={appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light btn-lg px-5"
                    >
                        <i className="fab fa-google-play me-2"></i>
                        Download Now
                    </a>
                </div>
            </div>

            {/* App Info */}
            <div className="container my-5">
                <h2 className="text-center mb-5">App Information</h2>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card shadow-sm border-0">
                            <div className="card-body">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">App Name:</td>
                                            <td>Location Tracker</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Package ID:</td>
                                            <td>com.majboormajdoor.locationtracker</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Platform:</td>
                                            <td>Android</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Minimum Requirements:</td>
                                            <td>Android 5.0+</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">License:</td>
                                            <td>Commercial License</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Store Link:</td>
                                            <td>
                                                <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                                                    View on Google Play Store
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;