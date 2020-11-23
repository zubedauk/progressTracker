//import React, { useState, useEffect } from "react";
import React from 'react'
//import ReactDOM from 'react-dom';
import {Table,Progress,message, Button } from 'antd'
//import profiledata from "./profiledata"
import ViewProfile from './ViewProfile'
const StudentProfile=()=>{
    
  //    const [newProfile, setNewProfile] = useState({
	// "student_id": 1,
	// "name": "student 1",
	// "assignment": [ 3,8,9,7,7,8,5,7,9,7,0,8,6,5,8,6 ],
	// "attendance": ["Late",	"Yes", "No", "Yes",	"Yes", "Yes", "Yes", "Yes",	"Yes", "Yes", "Yes", "Yes",	"Yes", "Yes", "Yes"],
	// "email": "Student1@gmail.com"
  // });

//      useEffect(() => {
//     fetch(`url/${profile}`)
//       .then(res => res.json())
//       .then(data => {
//         setNewProfile(data);
//         console.log(data);
//       });
//   }, [profile]);
// console.log(newProfile.assignment.reduce((acc,curr) => acc+curr,0)/newProfile.assignment.reduce((acc,curr) => {if(curr>0) { return acc++}; console.log(acc);},0))
// console.log(newProfile.assignment.reduce((acc,curr) =>{if(curr>0) { return acc++}})
// console.log(newProfile.assignment.reduce((acc,curr) => acc+curr,0))
//const reducer = (acc,curr)=>acc + curr;
//const studentprofile = () => {
  const data = [
  {
    "student_id": 2,
    "name": "Berhane",
    "assignment": [8],
    "attendance": [90],
    "assignments_missing": [0],
    "class_late": [14.81],
    "email": "mail2berhane@gmail.com"
}
  // {
	// "student_id": 2,
	// "name": "Student 2",
	// "assignment": [8], 
	// "attendance": [99],
	// "email": "Student2@gmail.com"
  // },
  // {
	// "student_id": 3,
	// "name": "Student 3",
	// "assignment": [7],
	// "attendance": [89],
	// "email": "Student3@gmail.com"
  // },
  // {
	// "student_id": 4,
	// "name": "student 4",
	// "assignment": [10],
	// "attendance": [99],
	// "email": "Student4@gmail.com"
  // }
]
  
  const columns = [
    {
      title: "Student_id",
      dataIndex: "student_id",
      key: "student_id",
     // render: (text) => <a href="http://google.co.uk">{text}</a>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: "assignment",
    //   dataIndex: "assignment",
    //   key: "assignment",
    // },
    {
      title: "Attendance",
      key: "attendance",
      dataIndex: "attendance",
      render: (attendance) => (
        <>
          {attendance.map((element) => {
            return (          
              
                <Progress type="circle" strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }} percent={element} width={80} />
              
            );
          })}
        </>
      ),
    },
    {
      title: "Assignment",
      dataIndex: "assignment",
      key: "assignment",

      render: (assignment) => (
        <>
          {assignment.map((element) => {
            
            
            return (          
              
                <Progress type="circle" strokeColor={{
        '0%': '#108ee9',
        '50%': 'amber',
        '100%': '#87d068',
      }} percent={element * 10} width={80} />
              
            );
          })}
        </>
      ),
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    
  ];
  return  <Table columns={columns} dataSource={data} />;

  

  };


//     if (newProfile) {
//     return (
//       <div>
//         Student Profile{" "}
//         <ul>
//           <li>Id {newProfile.student_id}</li><br />
//           <li>Name {newProfile.name}</li><br />
//           <li>Assignment {newProfile.assignment.reduce((acc,curr) => acc+curr,0)/newProfile.assignment.reduce((acc,curr) =>acc+!!curr,0)}</li><br />
//           <li>Attendance {newProfile.attendance.reduce((acc,curr) => acc+(curr!=='No'?1:0),0)/newProfile.attendance.length*100}%</li><br />
//           <li>Email {newProfile.email}</li><br />
//         </ul>{" "}
//       </div>
//     );

// }
//  return null;
 //};
export default StudentProfile;