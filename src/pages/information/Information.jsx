import InformationCard from "../../components/InfoCard/InformationCard";
import "./InformationStyle.css";
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import InteractiveBackground from '../../components/background/InteractiveBackground';
// import React from "react";

function Information() {
  const { t } = useTranslation();

  const personalInfo = [
    { key: t('info.email'), value: t('info.emailValue') },
    { key: t('info.location'), value: t('info.locationValue') },
    { 
      key: t('info.education'), 
      value: t('info.educationStatus') 
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      url: "https://github.com/celalkilnc",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin size={24} />,
      url: "https://www.linkedin.com/in/celal-kılınç00/",
      label: "LinkedIn"
    }
  ];

  return (
    <div className="information" id="information">
      <InteractiveBackground />
      <div className="info-container">
        <div className="profile-section">
          <h1>Celal Kılınç</h1>
          <h2>{t('info.description')}</h2>
        </div>
        
        <div className="about-me">
          <p>{t('info.aboutMe')}</p>
        </div>

        <div className="info-cards">
          {personalInfo.map((info, index) => (
            <InformationCard key={index} data={info} />
          ))}
        </div>

        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Information;
