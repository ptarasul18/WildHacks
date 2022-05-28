import React from 'react';

const ctecs = require('./ctecs.json');

const ranker = {
  title: "CTEC Course Ranker"
};

const Course = ({ course }) => (
  <div>
    <p>{course.department} {course.course_number} by {course.professor} in {course.quarter} {course.year}</p>
  </div>
);

const CourseList = ({ courses }) => (
  <div>
  { Object.values(courses).map(course => <Course course={ course } />) }
  </div>
);


const App = () =>  (
  <div>
    <h1>{ ranker.title }</h1>
    <CourseList courses={ ctecs } />
  </div>
);

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
