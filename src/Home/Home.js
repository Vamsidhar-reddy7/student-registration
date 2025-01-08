import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css';
import AxiosInteraction from "../ServiceRequest/AxiosInteraction";
import { useDispatch, useSelector } from "react-redux";
import {setStudents } from "../Redux/StudentSlice";
function Home() {
  // Sample student data with additional fields: location, gender, technology
  //const [students, setStudents] = useState([]);
  const students = useSelector((state)=>state.students.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    // Navigate to the register page or open a registration form
    navigate("/Register"); 
  };
  useEffect(()=>{
    AxiosInteraction.getAllStudent()
    .then((response)=>{
      dispatch(setStudents(response.data));
    })
  },[])

  return (
    <div>
      <h1>Registered Students</h1>

      {/* Table format */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Location</th>
            <th>Gender</th>
            <th>Technology</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.location}</td>
              <td>{student.gender}</td>
              <td>{student.technology}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to register a new student */}
      <button onClick={handleRegister}>Register New Student</button>
    </div>
  );
}

export default Home;
