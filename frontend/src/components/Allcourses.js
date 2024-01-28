import React, { useState,useEffect } from 'react';

import Course from './Course';
import { Button } from 'reactstrap';
import { toast } from 'react-toastify';
import baseurl from './../API/bootapi';
import axios from 'axios';


export default function Allcourses() {
  
  useEffect(() =>{
   // alert("testing");
    document.title= "all courses";
    toast.success("display info");


  }, []); // pass empty array to call AllCourses component once at starting
  
  // fun to call server // @ backend 
  const  getallcoursesfromserver=() =>{
    axios.get(`${baseurl}/courses`).then(
      (response) =>{

        // success 
        console.log(response);
        console.log(response.data);
        toast.success("data fetched");
        setCourses(response.data); // store in course array

      },
      (error) =>{
        // for failure
        console.log(error);
        toast.error("something went wrong");

      }

    );
  };

  // calling loading course function 
useEffect(() =>{

  getallcoursesfromserver();  // call that function when page load

} ,[]);



    const [courses ,setCourses] =useState([]);

    // remove course by id 
  const updatedcourseList =(id)=>{
          setCourses(courses.filter((c)=>c.id !=id));
                      // store only course whoose id not equal to pass id in fun


  }   
  
    return (
    <div>
      <h1>All Courses</h1>
      <p>List of Course are as follows</p>

       {
          courses.length>0 ? courses.map((item)=>(
            <Course key ={item.id}  course={item}   update={updatedcourseList}       />
          )) : "no courses available"
 
 /*     line no: 23 ;  if courses array length greater than 0 then we apply
                      map fun on courses array so this map fun returns
                      one entire element as " {title:"core java " ,discription:"3 months course"},"
                      so thne we will pass this 1 course to our <Course/> component as a Prop array 
                      then in Course.js - we will access this    
                            
 */
} 
</div>
  )
}




