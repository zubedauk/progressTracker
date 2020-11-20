import React, { useState, useEffect } from "react";

const StudentProfile=({profile})=>{
    
     const [newProfile, setNewProfile] = useState({
	"student_id": 1,
	"name": "student 1",
	"assignment": [ 3,8,9,7,7,8,5,7,9,7,0,8,6,5,8,6 ],
	"attendance": ["Late",	"Yes", "No", "Yes",	"Yes", "Yes", "Yes", "Yes",	"Yes", "Yes", "Yes", "Yes",	"Yes", "Yes", "Yes"],
	"email": "Student1@gmail.com"
  });

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

    if (newProfile) {
    return (
      <div>
        Student Profile{" "}
        <ul>
          <li>Id {newProfile.student_id}</li><br />
          <li>Name {newProfile.name}</li><br />
          <li>Assignment {newProfile.assignment.reduce((acc,curr) => acc+curr,0)/newProfile.assignment.reduce((acc,curr) =>acc+!!curr,0)}</li><br />
          <li>Attendance {newProfile.attendance.reduce((acc,curr) => acc+(curr!=='No'?1:0),0)/newProfile.attendance.length*100}%</li><br />
          <li>Email {newProfile.email}</li><br />
        </ul>{" "}
      </div>
    );

}
 return null;
 };
export default StudentProfile;