import "./ProjectsStyle.css"
import React from 'react'
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  const ProjectCard = ({ project }) => (
    <div className="project-card">
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          {(project.links?.github || project.links?.live) && (
            <div className="project-links">
              {project.links?.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {project.links?.live && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                  {t('projects.viewProject')}
                </a>
              )}
            </div>
          )}
        </div>
      )}
      <div className={`project-info ${!project.image ? 'no-image' : ''}`}>
        <h3>{project.title}</h3>
        <div className="project-info-tags">
          {project.company && (
            <span className="project-company">{project.company}</span>
          )}
          {project.development_type && (
            <span className="project-type">
              <span data-type={project.development_type}>
                {t(`projects.development_types.${project.development_type}`)}
              </span>
            </span>
          )}
        </div>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects" className="projects">
      <div className="projects-container">
        <h1 className="projects-title">{t('projects.title')}</h1>
        
        <section className="projects-section">
          <h2>{t('projects.myProjects')}</h2>
          <div className="projects-grid">
            {t('projects.items.personal', { returnObjects: true }).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section className="projects-section">
          <h2>{t('projects.contributedProjects')}</h2>
          <div className="projects-grid">
            {t('projects.items.contributed', { returnObjects: true }).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;