import React from 'react';

const cardStyle = {
  height: '300px',
  width: '250px',
  border: 'none', // Remove the border
  transition: 'box-shadow 0.3s', // Add a transition for the hover effect
};

const cardHoverStyle = {
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Box-shadow on hover
};

const Projects = () => {
  return (
    <div>
      <div className="projects" id="p">
        <h1 style={{ textDecoration: 'underline' }}>PROJECTS</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card mb-4" style={{ ...cardStyle, ...cardHoverStyle }}>
                <img src="https://verified-badge.vedb.me/wp-content/uploads/2020/10/tinder-768x472.jpg" className="card-img-top" alt="" style={{ height: '150px' }} />
                <div className="card-body">
                  <h6 className="card-title">Tinder Application</h6>
                  <p className="card-text">Developed a cloned version of Tinder.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card mb-4" style={{ ...cardStyle, ...cardHoverStyle }}>
                <img src="https://cdn.dribbble.com/users/1145170/screenshots/6339823/ecommerce_animations_iii_4x.png" className="card-img-top" alt="" style={{ height: '150px' }} />
                <div className="card-body">
                  <h6 className="card-title">Ecommerce Website</h6>
                  <p className="card-text">Developed a fully functional Ecommerce website.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-center">
              <div className="card mb-4" style={{ ...cardStyle, ...cardHoverStyle }}>
                <img src="https://static.techspot.com/images2/news/header/2014/05/flappy-bird-title.jpg" className="card-img-top" alt="" style={{ height: '150px' }} />
                <div className="card-body">
                  <h6 className="card-title">Python Application</h6>
                  <p className="card-text">Developed a Flappy Bird game using Pygame Module in Python.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
