import React from "react";
import { useTranslation } from 'react-i18next';
import "./ExperianceStyle.css";

function Experiance() {
  const { t } = useTranslation();

  return (
    <div id="experiance" className="experiance">
      <h1>{t('experience.title')}</h1>
      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-container">
          {t('experience.jobs', { returnObjects: true }).map((job, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h2 className="company-name">{job.company}</h2>
                <h3 className="job-title">{job.title}</h3>
                <p className="date">{job.date}</p>
                <p className="description">{job.description}</p>
                <div className="technologies">
                  {job.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance; 
