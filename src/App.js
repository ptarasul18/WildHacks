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

const ProfOption = ({ course }) => (
  <option value ={course.professor}>{course.professor}</option>
);

const ProfDropdown = ({ courses }) => (
  <select name="profs" id="profs">
    { Object.values(courses).map(course => <ProfOption course={ course } />) }
  </select>
);

console.log(ctecs.filter(ctec => ctec.professor.includes("Aravindan")))
console.log(ctecs.filter(ctec => ctec.course_number == 110))


const App = () =>  (
  <div>
    <h1>{ ranker.title }</h1>
    <CourseList courses={ ctecs } />

    <form action="/action_page.php">
      <ProfDropdown courses = {ctecs} />
      <br></br>
      <input type="submit" value="Submit" />
    </form>

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
