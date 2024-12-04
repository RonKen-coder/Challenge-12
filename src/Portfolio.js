
import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', image: 'path-to-image.jpg', live: '#', repo: '#' },
    { title: 'Project 2', image: 'path-to-image.jpg', live: '#', repo: '#' },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
            <p>
              <a href={project.live}>Live App</a> | <a href={project.repo}>GitHub Repo</a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;