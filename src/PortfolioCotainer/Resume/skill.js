import React from 'react';
import './skill.css'

const languages = [
  { name: 'JavaScript'},
  { name: 'Java'},
  { name: 'React.js'},
  { name: 'Node.js'},
  { name: 'MySQL' },
  { name: 'MongoDB'},
  { name: 'Bootstrap'},
  { name: 'Tailwind'},
  { name: 'jQuery'},
  // Add more languages as needed
];

const Skill = () => {
  return (
    <div className="container" id="skill">
    <div className="containerLanguage">
      <h1 className="heading">Programming Skills</h1>
      <div className="language-list">
        {languages.map((language, index) => (
          <div className="language-card" key={index}>
            <h2 className="language-name">{language.name}</h2>
          </div>
        ))}
      </div>
    </div> 
    </div> 
  );
};

export default Skill;
