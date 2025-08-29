// src/components/Projects.jsx
import React from 'react';
import PropTypes from 'prop-types';

export default function Projects({ heading = 'Projects', projects = [], moreProjectsUrl }) {
  return (
    <section id="projects" className="projects">
      <h2 className="page-header">{heading}</h2>
      <div className="project-container">
        {projects.map((p, idx) => {
          const isRight = idx % 2 === 0; // 0,2,4... on right
          const numberClass = isRight ? 'project-number-right' : 'project-number-left';
          const contentClass = isRight ? 'project-content-right' : 'project-content-left';

          // If you want to auto-generate numbers when missing:
          const displayNumber = p.number ?? String(idx + 1).padStart(2, '0');

          return (
            <div className="project-card" id={p.id} key={p.id ?? idx}>
              <div className={`project-number ${numberClass}`}>
                {displayNumber}
              </div>

              <div className={`project-content ${contentClass}`}>
                <div className="project-skill-container">
                  {p.skills?.map((src, i) => (
                    <img className="project-skill" src={src} alt="" key={i} />
                  ))}
                </div>

                <h2 className="project-heading">{p.title}</h2>

                <p className="project-sub-heading">{p.description}</p>

                <div className="btn-group">
                  {p.links?.github && (
                    <a href={p.links.github} target="_blank" rel="noreferrer">
                      <i title="GitHubLink" className="fa-brands fa-github icon"></i>
                    </a>
                  )}
                  {p.links?.live && (
                    <a href={p.links.live} target="_blank" rel="noreferrer">
                      <i title="Live Link" className="fa-solid fa-link icon"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {moreProjectsUrl && (
          <div className="more-projects-container">
            <a href={moreProjectsUrl} className="effects" target="_blank" rel="noreferrer">
              <h2>More Projects</h2>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

// Correct PropTypes
Projects.propTypes = {
  heading: PropTypes.string,
  moreProjectsUrl: PropTypes.string,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      skills: PropTypes.arrayOf(PropTypes.string).isRequired,
      links: PropTypes.shape({
        github: PropTypes.string,
        live: PropTypes.string,
      }),
    })
  ).isRequired,
};
