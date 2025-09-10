import "bootstrap/dist/css/bootstrap.min.css";
import {
  AWS_DEVELOPER_CERTIFICATE,
  CLOUD_INSTA_PLAYLIST,
  DSA_INSTA_PLAYLIST,
  INSTAGRAM_PROFILE,
  PYTHON_YT_PLAYLIST,
  WEB_DEV_YT_PLAYLIST,
  YOUTUBE_CHANNEL,
} from "../utils/Constants";

const HomePage = () => {
  return (
    <div className="container-fluid p-0">
      {/* Hero Section */}
      <div className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold">
                Master Coding & Cloud Computing
              </h1>
              <p className="lead">
                Learn programming and AWS from an experienced instructor.
                Transform your career with hands-on projects and real-world
                applications.
              </p>
            </div>

            <div className="col-md-6">
            <img
                src="/logo.jpeg"
                alt="Majboor Courses Logo"
                className="img-fluid mb-3 rounded"
                style={{ maxHeight: "180px", display: "block", margin: "0 auto" }}
            />
              <div className="text-center">
                <i className="fas fa-laptop-code fa-5x mb-3"></i>
              </div>
            </div>
          </div>
          <div className="d-flex gap-3">
            <a
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary d-flex align-items-center gap-2"
            >
              <i className="fab fa-instagram"></i>
              Follow on Instagram
            </a>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-danger d-flex align-items-center gap-2"
            >
              <i className="fab fa-youtube"></i>
              Subscribe on YouTube
            </a>

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
                <h3 className="card-title">Courses</h3>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    ✨ Python Programming
                    <br />
                    <a
                      href={PYTHON_YT_PLAYLIST}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                    >
                      Watch Playlist
                    </a>
                  </li>
                  <li className="mb-2">
                    ✨ AWS Cloud computing
                    <br />
                    <a
                      href={CLOUD_INSTA_PLAYLIST}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                    >
                      Watch Playlist
                    </a>
                  </li>
                  <li className="mb-2">
                    ✨ Web Development
                    <br />
                    <a
                      href={WEB_DEV_YT_PLAYLIST}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                    >
                      Watch Playlist
                    </a>
                  </li>
                  <li className="mb-2">
                    ✨ Data Structures & Algorithms
                    <br />
                    <a
                      href={DSA_INSTA_PLAYLIST}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-underline"
                    >
                      Watch Playlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div className="container my-5">
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h3 className="mb-3">AWS Certified Developer - Associate</h3>
                <p className="lead">Learn AWS from a certified professional! Click to verify my AWS Developer certification.</p>
              </div>
              <div className="col-md-4 text-center">
                <a 
                  href={AWS_DEVELOPER_CERTIFICATE} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning btn-lg"
                >
                  <i className="fab fa-aws me-2"></i>
                  Verify Certification
                </a>
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
    </div>
  );
};

export default HomePage;
