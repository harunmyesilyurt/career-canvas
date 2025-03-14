import React, { useState, useEffect } from "react";
import "./SwitchbarStyle.css";
import { useTranslation } from 'react-i18next';
import '../../../styles/switchbar.css';

function Switchbar() {
  const { t } = useTranslation();
  const [activePage, setActivePage] = useState('information');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // En yüksek kesişim oranına sahip bölümü bul
      const visibleSection = entries.reduce((max, entry) => {
        return (entry.intersectionRatio > (max?.intersectionRatio || 0))
          ? entry
          : max;
      }, null);

      if (visibleSection && visibleSection.intersectionRatio > 0.2) {
        setActivePage(visibleSection.target.id);
      }
    }, {
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      rootMargin: '-20% 0px -20% 0px'
    });

    const sections = ['information', 'experiance', 'education', 'skills', 'projects'];
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActivePage(section);
    }
  };

  return (
    <nav className="switchbar">
      <ul className="switchBar">
        {[
          { id: 'information', label: t('sections.information') },
          { id: 'experiance', label: t('sections.experience') },
          { id: 'education', label: t('sections.education') },
          { id: 'skills', label: t('sections.skills') },
          { id: 'projects', label: t('sections.projects') }
        ].map((section) => (
          <li 
            key={section.id} 
            className={`switch-item ${activePage === section.id ? 'active' : ''}`}
            onClick={() => handleClick(section.id)}
          >
            <div className={`switch-dot ${activePage === section.id ? 'active' : ''}`} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Switchbar;
