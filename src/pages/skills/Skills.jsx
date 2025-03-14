import React from "react";
import { useTranslation } from 'react-i18next';
import "./SkillsStyle.css";
import { 
  faJs, 
  faPython, 
  faJava, 
  faReact, 
  faNodeJs, 
  faGit, 
  faDocker, 
  faLinux,
  faBootstrap
} from '@fortawesome/free-brands-svg-icons';
import { 
  faDatabase, 
  faCode,
  faTerminal
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
  const { t } = useTranslation();

  const getSkillIcon = (skill) => {
    const icons = {
      // Programlama Dilleri
      'JavaScript': <FontAwesomeIcon icon={faJs} />,
      'Python': <FontAwesomeIcon icon={faPython} />,
      'C#': <FontAwesomeIcon icon={faCode} />,
      'C++': <FontAwesomeIcon icon={faCode} />,
      'Java': <FontAwesomeIcon icon={faJava} />,
      
      // Frameworks & Libraries
      'React': <FontAwesomeIcon icon={faReact} />,
      'Node.js': <FontAwesomeIcon icon={faNodeJs} />,
      '.NET Core': <FontAwesomeIcon icon={faCode} />,
      'Express.js': <FontAwesomeIcon icon={faNodeJs} />,
      'Bootstrap': <FontAwesomeIcon icon={faBootstrap} />,
      
      // Veritabanları
      'PostgreSQL': <FontAwesomeIcon icon={faDatabase} />,
      'MySQL': <FontAwesomeIcon icon={faDatabase} />,
      'SQL Server': <FontAwesomeIcon icon={faDatabase} />,
      
      // Araçlar
      'Git': <FontAwesomeIcon icon={faGit} />,
      'Docker': <FontAwesomeIcon icon={faDocker} />,
      'VS Code': <FontAwesomeIcon icon={faCode} />,
      'Postman': <FontAwesomeIcon icon={faCode} />,
      'Linux': <FontAwesomeIcon icon={faLinux} />
    };
    return icons[skill] || <FontAwesomeIcon icon={faCode} />;
  };

  const categories = [
    { key: 'languages', icon: '💻' },
    { key: 'frameworks', icon: '🛠' },
    { key: 'databases', icon: '🗄' },
    { key: 'tools', icon: '🔧' }
  ];

  return (
    <div id="skills" className="skills">
      <div className="skills-container">
        <h1>{t('skills.title')}</h1>
        <div className="skills-grid">
          {categories.map((category) => (
            <div key={category.key} className="skill-category">
              <h2>
                <span className="category-icon">{category.icon}</span>
                {t(`skills.categories.${category.key}`)}
              </h2>
              <div className="skill-items">
                {t(`skills.items.${category.key}`, { returnObjects: true }).map((skill, index) => (
                  <div key={index} className="skill-item">
                    <span className="skill-icon">{getSkillIcon(skill)}</span>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills; 