import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import modern_building from '../assets/modern_building.jpg'

function AboutDeveloper(){
  const stats = [
    { label: 'YEARS', value: '8+' },
    { label: 'SQ. FT. DELIVERED', value: '1.82 LAC+' },
    { label: 'PROJECTS', value: '44+' },
    { label: 'UNDER CONSTRUCTION', value: '9.75 LAC+' },
    { label: 'HAPPY FAMILIES', value: '2.4 LAC+' },
  ];

  const projects = [
    { title: 'Current Project One', status: 'New Alipore', img: 'https://via.placeholder.com/300x400' },
    { title: 'Upcoming Project', status: 'Project Two', img: 'https://via.placeholder.com/300x400' },
    { title: 'Completed Project', status: 'New Alipore', img: 'https://via.placeholder.com/300x400' },
  ];

  const faqs = [
    "What is the status of ongoing construction?",
    "How long does it typically take to complete a project?",
    "What materials are used in your buildings?",
    "Can I customize my interior layout?",
    "What are the payment options available?"
  ];

  return (
    <>
         <div className="dev-container position-relative">
      <section className="text-center py-5">
        <h2 className="fw-bold mb-3">About Developer</h2>
        <p className="mx-auto text-muted mb-4" style={{ maxWidth: '800px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        <div className="container">
          <div className="stats-bar d-flex justify-content-around align-items-center flex-wrap">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item px-3 py-2">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="hero-image-wrap">
        <img src={modern_building} alt="Modern Building" className="img-fluid hero-image" />
      </div>

      <section className="updates-section py-5 position-absolute" style={{bottom:'-18%'}}>
        <h2 className="text-center fw-bold mb-4">Construction Updates</h2>
        <div className="container">
          <div className="row g-4">
            {projects.map((proj, i) => (
              <div key={i} className="col-md-4">
                <div className="project-card">
                  <img src={modern_building} alt={proj.title} className="img-fluid" />
                  <div className="project-overlay">
                    <h5>{proj.title}</h5>
                    <p>{proj.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
        <section className="faq-section pt-5">
        <h2 className="text-center fw-bold mb-4 pt-5 mt-5">Frequently Asked Questions</h2>
        <div className="container" style={{ maxWidth: '800px' }}>
          {faqs.map((q, i) => (
            <div key={i} className="faq-item d-flex justify-content-between align-items-center mb-3">
              <span>{q}</span>
              <span className="plus-icon">+</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutDeveloper;