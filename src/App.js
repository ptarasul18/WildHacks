import React from 'react';

const ctecs = require('./ctecs.json');

const ranker = {
  title: "CTEC Course Ranker .... SeeCATS, not CTECs ;)"
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

const ProfOption = (prof) => {
  console.log(prof)
  return (
  <option value ={prof}>{prof}</option>
  );
};

const ProfDropdown = ({ courses }) => {
  let uniqueProfs = [...new Set(courses.map(ctec => ctec.professor))];
  return (
  <select name="profs" id="profs">
    { uniqueProfs.map(ProfOption) }
  </select>);
};

const DeptOption = (dept) => {
  console.log(dept)
  return (
  <option value ={dept}>{dept}</option>
  );
};

const DeptDropdown = ({ courses }) => {
  let uniqueDepts = [...new Set(courses.map(ctec => ctec.department))];
  return (
  <select name="depts" id="depts">
    { uniqueDepts.map(DeptOption) }
  </select>);
};

const CourseNumOption = (course) => {
  console.log(course)
  return (
  <option value ={course}>{course}</option>
  );
};

const CourseNumDropdown = ({ courses }) => {
  let uniqueCourses = [...new Set(courses.map(ctec => ctec.course_number))];
  return (
  <select name="course" id="course">
    { uniqueCourses.map(CourseNumOption) }
  </select>);
};

const QtrOption = (qtr) => {
  console.log(qtr)
  return (
  <option value ={qtr}>{qtr}</option>
  );
};

const QtrDropdown = ({ courses }) => {
  let uniqueCourses = [...new Set(courses.map(ctec => ctec.quarter))];
  return (
  <select name="qtrs" id="qtrs">
    { uniqueCourses.map(QtrOption) }
  </select>);
};

const YearOption = (year) => {
  console.log(year)
  return (
  <option value ={year}>{year}</option>
  );
};

const YearDropdown = ({ courses }) => {
  let uniqueCourses = [...new Set(courses.map(ctec => ctec.year))];
  return (
  <select name="years" id="years">
    { uniqueCourses.map(YearOption) }
  </select>);
};

// console.log(ctecs.filter(ctec => ctec.professor.includes("Aravindan")))
// console.log(ctecs.filter(ctec => ctec.course_number == 110))


const App = () =>  (
  <div>
    <h1>{ ranker.title }</h1>
    <CourseList courses={ ctecs } />

    <div id="dropdowns">
    <form action="/action_page.php">
      <DeptDropdown courses = {ctecs} />
      <CourseNumDropdown courses = {ctecs} />
      <ProfDropdown courses = {ctecs} />
      <QtrDropdown courses = {ctecs} />
      <YearDropdown courses = {ctecs} />


      <br></br>
      <input type="submit" value="Submit" />
    </form>
    </div>

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
