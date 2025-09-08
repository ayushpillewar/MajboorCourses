import { EMAIL, INSTAGRAM_PROFILE, YOUTUBE_CHANNEL } from '../utils/Constants';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="text-center mb-5">Get in Touch</h1>
                    
                    {/* Social Media Cards */}
                    <div className="row mb-5 g-4">
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="fab fa-instagram fa-3x mb-3" style={{ color: '#E1306C' }}></i>
                                    <h3 className="card-title">Instagram</h3>
                                    <p className="card-text">Follow me on Instagram for daily coding tips and updates!</p>
                                    <a href={INSTAGRAM_PROFILE} 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       className="btn btn-outline-primary">
                                        <i className="fab fa-instagram me-2"></i>
                                        @majboor_majdoor
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="card-body text-center">
                                    <i className="fab fa-youtube fa-3x mb-3" style={{ color: '#FF0000' }}></i>
                                    <h3 className="card-title">YouTube</h3>
                                    <p className="card-text">Subscribe to my channel for in-depth programming tutorials!</p>
                                    <a href={YOUTUBE_CHANNEL} 
                                       target="_blank" 
                                       rel="noopener noreferrer" 
                                       className="btn btn-outline-danger">
                                        <i className="fab fa-youtube me-2"></i>
                                        MajboorMajdoor
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="card border-0 shadow-sm">
                        <div className="card-body p-5">
                            <h2 className="text-center mb-4">Send me a Message</h2>
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name" 
                                                placeholder="Your Name"
                                            />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input 
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                placeholder="name@example.com"
                                            />
                                            <label htmlFor="email">Email Address</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="subject" 
                                                placeholder="Subject"
                                            />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea 
                                                className="form-control" 
                                                id="message" 
                                                placeholder="Your Message" 
                                                style={{ height: '150px' }}
                                            ></textarea>
                                            <label htmlFor="message">Your Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <button type="submit" className="btn btn-primary btn-lg px-5">
                                            <i className="fas fa-paper-plane me-2"></i>
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="row mt-5 g-4">
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-envelope fa-2x mb-3 text-primary"></i>
                                <h4>Email</h4>
                                <p className="text-muted">{EMAIL}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-map-marker-alt fa-2x mb-3 text-primary"></i>
                                <h4>Location</h4>
                                <p className="text-muted">Pume, India</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="text-center">
                                <i className="fas fa-clock fa-2x mb-3 text-primary"></i>
                                <h4>Response Time</h4>
                                <p className="text-muted">Within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
