import React, { useState, useEffect } from "react";
import {Table,Progress,Input } from 'antd'
//import profiledata from "./profiledata"
import ViewProfile from './ViewProfile'
const StudentProfile=({id})=>{
  const [studentProfile, setStudentProfile ] = useState(null)  
id=2;
  useEffect(() => {
    console.log("Fetching data from heroku");

    fetch(
      `https://ontrack-team3.herokuapp.com/profile/student/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setStudentProfile([data]);
      });
  }, []);
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
      }} percent={(element*10).toFixed(2)} width={80} />
              
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
  return <Table columns={columns} dataSource={studentProfile} />;
};
 
//return <TextArea rows={4} />;

  

 // };


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