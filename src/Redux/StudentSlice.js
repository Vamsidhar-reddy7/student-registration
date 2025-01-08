import { createSlice } from "@reduxjs/toolkit";

const initialState={
    students : [],
};

const studentSlice = createSlice({
    name : 'students',
    initialState,
    reducers : {
        setStudents : (state,action)=>{
            state.students = action.payload
        },
        addStudent : (state,action)=>{
            state.students.push(action.payload)
        },
    },
})
export const {setStudents,addStudent} = studentSlice.actions;
export default studentSlice.reducer;