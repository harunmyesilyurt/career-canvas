import React from "react";
import "./EducationStyle.css";
import { useTranslation } from 'react-i18next';

function Education() {
  const { t } = useTranslation();

  const educations = [
    {
      school: t('education.university.name'),
      degree: t('education.university.department'),
      period: t('education.university.date'),
      gpa: "3.08",
      description: t('education.university.description'),
      achievements: t('education.university.courses', { returnObjects: true })
    },
    {
      school: t('education.university2.name'),
      degree: t('education.university2.department'),
      period: t('education.university2.date'),
      description: t('education.university2.description'),
      achievements: t('education.university2.courses', { returnObjects: true })
    }
  ];

  return (
    <div id="education" className="education">
      <div className="education-container">
        <h1>{t('education.title')}</h1>
        <div className="education-grid">
          {educations.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-header">
                <h2>{edu.school}</h2>
                <span className="period">{edu.period}</span>
              </div>
              <h3>{edu.degree}</h3>
              {edu.gpa && (
                <div className="gpa">
                  <span>GPA: {edu.gpa}</span>
                </div>
              )}
          {/*     <div className="achievements">
                <h4>{t('education.achievements')}:</h4>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
