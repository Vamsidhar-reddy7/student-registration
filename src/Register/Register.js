import React, { useEffect, useState } from "react";
import './Register.css';
import { useNavigate } from "react-router-dom";
import AxiosInteraction from "../ServiceRequest/AxiosInteraction";
import { useDispatch } from "react-redux";
import { addStudent } from "../Redux/StudentSlice";
function Register() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    location: "",
    gender: "",
    technology: "",
  });
  const dispatch = useDispatch();
 const navigate= useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name ",name,value);
    setStudent({
      ...student,
      [name]: value,
    });
  };
useEffect(()=>{
    console.log("student data",student);
},[student])

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit student data (you can call an API here or handle it as needed)
    console.log("Student Data Submitted:", student);
    AxiosInteraction.register(student).then((response)=>{
      dispatch(addStudent(student));
    })
    navigate('/Home');
    
  };

  return (
    <div>
      <h1>Register New Student</h1>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Location Field */}
        <div>
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={student.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* Gender Field */}
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={student.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Technology Field */}
        <div>
          <label htmlFor="technology">Technology:</label>
          <select
            id="technology"
            name="technology"
            value={student.technology}
            onChange={handleChange}
            required
          >
            <option value="">Select Technology</option>
            <option value="Java">Java</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="C++">C++</option>
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Register Student</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
