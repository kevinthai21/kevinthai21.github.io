import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Skill from './Skills';
import Project from './tsx/Project';
// import Project from './Project';
import Experience from './tsx/Experience';
import Navigation  from './tsx/Navigation';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <Navigation></Navigation> */}
    {/* <Project 
      title='Title' 
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae. Odio eu feugiat pretium nibh ipsum. Posuere urna nec tincidunt praesent semper feugiat nibh sed.'
      skills={["CSS", "Javascript", "Python"]} 
      link='https://www.google.com'
    /> */}
    <Experience
      title='Software Engineer'
      company='PiKNiK & Company'
      timeFrame='2023-2024'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae. Odio eu feugiat pretium nibh ipsum. Posuere urna nec tincidunt praesent semper feugiat nibh sed.'
      skills={['Grafana', 'PostgreSQL', 'HTML']}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
