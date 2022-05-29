import React from 'react';
import Select from 'react-select';
import './App.css';
import Stack from 'react-bootstrap/Stack'

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

console.log(ctecs.filter(ctec => ctec.professor.includes("Aravindan")))
console.log(ctecs.filter(ctec => ctec.course_number == 110))

const App = () =>  {

  let uniqueDepts = [...new Set(ctecs.map(ctec => ctec.department))].map(dept => ({'value':dept, 'label':dept}));
  let uniqueCourseNums = [...new Set(ctecs.map(ctec => ctec.course_number))].map(num => ({'value':num, 'label':num}));
  let uniqueProfs = [...new Set(ctecs.map(ctec => ctec.professor))].map(prof => ({'value':prof, 'label':prof}));
  let uniqueQtrs = [...new Set(ctecs.map(ctec => ctec.quarter))].map(qtr => ({'value':qtr, 'label':qtr}));
  let uniqueYears = [...new Set(ctecs.map(ctec => ctec.year))].map(year => ({'value':year, 'label':year}));

  return(
  <div>
    <h1>{ ranker.title }</h1>
    <CourseList courses={ ctecs } />

    <div className="dropdowns">
    <Stack direction="horizontal" gap={3}>
    <div className="container">
      <Stack gap={3}>
      <div className="dropdown" id="course1">
        <Select
            value={uniqueDepts.value}
            options={uniqueDepts}
            placeholder="Department"
            isClearable = {true}
        />
        <Select
            value={uniqueCourseNums.value}
            options={uniqueCourseNums}
            placeholder="Course #"
            isClearable = {true}
        />
        <Select
            value={uniqueProfs.value}
            options={uniqueProfs}
            placeholder="Professor"
            isClearable = {true}
        />
        <Select
            value={uniqueQtrs.value}
            options={uniqueQtrs}
            placeholder="Quarter"
            isClearable = {true}
        />
        <Select
            value={uniqueYears.value}
            options={uniqueYears}
            placeholder="Year"
            isClearable = {true}
        />
      </div>
      <div><p>{"hello"}</p></div>
      </Stack>
      </div>

      <div className="container">
      <Stack gap={3}>
      <div className="dropdown" id="course2">
        <Select
            value={uniqueDepts.value}
            options={uniqueDepts}
            placeholder="Department"
            isClearable = {true}
        />
        <Select
            value={uniqueCourseNums.value}
            options={uniqueCourseNums}
            placeholder="Course #"
            isClearable = {true}
        />
        <Select
            value={uniqueProfs.value}
            options={uniqueProfs}
            placeholder="Professor"
            isClearable = {true}
        />
        <Select
            value={uniqueQtrs.value}
            options={uniqueQtrs}
            placeholder="Quarter"
            isClearable = {true}
        />
        <Select
            value={uniqueYears.value}
            options={uniqueYears}
            placeholder="Year"
            isClearable = {true}
        />
      </div>
      <div><p>{"hello"}</p></div>
      </Stack>
      </div>
      </Stack>
    </div>

  </div>
  )
};

export default App;

// const ProfOption = (prof) => {
//   return (
//   <option value ={prof}>{prof}</option>
//   );
// };

// const ProfDropdown = ({ courses }) => {
//   let uniqueProfs = [...new Set(courses.map(ctec => ctec.professor))];
//   return (
//   <select name="profs" id="profs">
//     { uniqueProfs.map(ProfOption) }
//   </select>);
// };

// const DeptOption = (dept) => {
//   return (
//   <option value ={dept}>{dept}</option>
//   );
// };

// const DeptDropdown = ({ courses }) => {
//   let uniqueDepts = [...new Set(courses.map(ctec => ctec.department))];
//   return (
//   <select name="depts" id="depts">
//     { uniqueDepts.map(DeptOption) }
//   </select>);
// };

// const CourseNumOption = (course) => {
//   return (
//   <option value ={course}>{course}</option>
//   );
// };

// const CourseNumDropdown = ({ courses }) => {
//   let uniqueCourses = [...new Set(courses.map(ctec => ctec.course_number))];
//   return (
//   <select name="course" id="course">
//     { uniqueCourses.map(CourseNumOption) }
//   </select>);
// };

// const QtrOption = (qtr) => {
//   return (
//   <option value ={qtr}>{qtr}</option>
//   );
// };

// const QtrDropdown = ({ courses }) => {
//   let uniqueCourses = [...new Set(courses.map(ctec => ctec.quarter))];
//   return (
//   <select name="qtrs" id="qtrs">
//     { uniqueCourses.map(QtrOption) }
//   </select>);
// };

// const YearOption = (year) => {
//   const dummy = `<option value="none">Select an Option</option>`;
//   return dummy + (
//     <option value ={year}>{year}</option>
//   );
// };

// const YearDropdown = ({ courses }) => {
//   let uniqueYears = [...new Set(courses.map(ctec => ctec.year))];
//   return (
//   <select name="years" id="years">
//     { uniqueYears.map(YearOption) }
//   </select>);
// };
// <DeptDropdown courses = {ctecs} />
// <CourseNumDropdown courses = {ctecs} />
// <ProfDropdown courses = {ctecs} />
// <QtrDropdown courses = {ctecs} />
// <YearDropdown courses = {ctecs} />



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
