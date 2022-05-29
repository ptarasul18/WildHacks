import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';
import Stack from 'react-bootstrap/Stack'


const ctecs = require('./ctecs.json');

const ranker = {
  title: "Cats' SeeTECs"
};

const Course = ({ course }) => (
  <div>
    <p>{course.department} {course.course_number} by {course.professor} in {course.quarter} {course.year}</p>
  </div>
);

const CourseCTECs = ({ course }) => (
  <Stack gap={3}>
  <div>
    <p>{course.department} {course.course_number} by {course.professor} in {course.quarter} {course.year}</p>
  </div>
  <div>
    <p>Responses: {course.received}/{course.audience}</p>
  </div>
  <div>
    <p>Instruction score: {course.Course_Questions.instruction.Mean}</p>
  </div>
  <div>
    <p>Overall course rating: {course.Course_Questions.course.Mean}</p>
  </div>
  <div>
    <Stack gap={1}>
      <h4>Average hours outside class and lab time</h4>
      <p>3 or fewer: {course.Time_Question.hours["3 or fewer"]} responses</p>
      <p>4-7: {course.Time_Question.hours["4-7 "]} responses</p>
      <p>8-11: {course.Time_Question.hours["8 - 11"]} responses</p>
      <p>12-15: {course.Time_Question.hours["12 - 15"]} responses</p>
      <p>16-19: {course.Time_Question.hours["16 - 19"]} responses</p>
      <p>20 or more: {course.Time_Question.hours["20 or more"]} responses</p>
    </Stack>
  </div>
  <div>
    <p>Amount learned rating: {course.Course_Questions.learned.Mean}</p>
  </div>
  </Stack>
);

const CourseList = ({ courses }) => (
  <div>
  { Object.values(courses).map(course => <Course course={ course } />) }
  </div>
);

console.log(ctecs.filter(ctec => ctec.professor.includes("Aravindan")))
console.log(ctecs.filter(ctec => ctec.course_number == 110))

const App = () =>  {

  const [dept1, setDept1] = useState("CS");
  const [courseNum1, setCourseNum1] = useState("212");
  const [prof1, setProf1] = useState("Aravindan Vijayaraghavan");
  const [qtr1, setQtr1] = useState("W");
  const [year1, setYear1] = useState("21"); 

  const [dept2, setDept2] = useState(false);
  const [courseNum2, setCourseNum2] = useState(false);
  const [prof2, setProf2] = useState(false);
  const [qtr2, setQtr2] = useState(false);
  const [year2, setYear2] = useState(false);

  let uniqueDepts1 = [...new Set(ctecs.map(ctec => ctec.department))].map(dept => ({'value':dept, 'label':dept}));
  let uniqueCourseNums1 = [...new Set(ctecs.map(ctec => ctec.course_number))].map(num => ({'value':num, 'label':num}));
  let uniqueProfs1 = [...new Set(ctecs.map(ctec => ctec.professor))].map(prof => ({'value':prof, 'label':prof}));
  let uniqueQtrs1 = [...new Set(ctecs.map(ctec => ctec.quarter))].map(qtr => ({'value':qtr, 'label':qtr}));
  let uniqueYears1 = [...new Set(ctecs.map(ctec => ctec.year))].map(year => ({'value':year, 'label':year}));

  let uniqueDepts = [...new Set(ctecs.map(ctec => ctec.department))].map(dept => ({'value':dept, 'label':dept}));
  let uniqueCourseNums = [...new Set(ctecs.map(ctec => ctec.course_number))].map(num => ({'value':num, 'label':num}));
  let uniqueProfs = [...new Set(ctecs.map(ctec => ctec.professor))].map(prof => ({'value':prof, 'label':prof}));
  let uniqueQtrs = [...new Set(ctecs.map(ctec => ctec.quarter))].map(qtr => ({'value':qtr, 'label':qtr}));
  let uniqueYears = [...new Set(ctecs.map(ctec => ctec.year))].map(year => ({'value':year, 'label':year}));
  // let uniqueDepts = [...new Set(ctecs.map(ctec => ctec.department))].map(dept => ({'value':dept, 'label':dept}));
  // let uniqueCourseNums = [...new Set(ctecs.map(ctec => ctec.course_number))].map(num => ({'value':num, 'label':num}));
  // let uniqueProfs = [...new Set(ctecs.map(ctec => ctec.professor))].map(prof => ({'value':prof, 'label':prof}));
  // let uniqueQtrs = [...new Set(ctecs.map(ctec => ctec.quarter))].map(qtr => ({'value':qtr, 'label':qtr}));
  // let uniqueYears = [...new Set(ctecs.map(ctec => ctec.year))].map(year => ({'value':year, 'label':year}));

  return(
  <div>
    <h1>{ ranker.title }</h1>
    {/* <CourseList courses={ ctecs } /> */}

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
            onChange={(e) => setDept1(e.value)}
        />
        <Select
            value={uniqueCourseNums.value}
            options={uniqueCourseNums}
            placeholder="Course #"
            isClearable = {true}
            onChange={(e) => setCourseNum1(e)}
        />
        <Select
            value={uniqueProfs.value}
            options={uniqueProfs}
            placeholder="Professor"
            isClearable = {true}
            onChange={(e) => setQtr1(e.value)}
        />
        <Select
            value={uniqueQtrs.value}
            options={uniqueQtrs}
            placeholder="Quarter"
            isClearable = {true}
            onChange={(e) => setYear1(e.value)}
        />
        <Select
            value={uniqueYears.value}
            options={uniqueYears}
            placeholder="Year"
            isClearable = {true}
        />
      </div>
      <div><CourseCTECs course={ ctecs[0] } /></div>
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
      <div><CourseCTECs course={ ctecs[1] } /></div>
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
