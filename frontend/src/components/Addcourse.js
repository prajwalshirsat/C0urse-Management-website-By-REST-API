import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap';
import ScrollReveal from 'scrollreveal';
import baseurl from './../API/bootapi';

import axios from 'axios';

export default function Addcourse() {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.animate', {
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '50px',
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  useEffect(() =>{
    document.title="add courses";

  },[]);


const [course ,setCourse] =useState({}); // step 1 ; create course empty array

// form handler function // step 3

const  handleform =(e) =>{  // receive object of course

  transferDatatoserver(course); // when u submit form then pass data to server step 5 // pass course array object
  console.log(course);
                                  
                                   //STEP 4
   e.preventDefault();   // avoid default form submission  functionality,
                         // prevent default action of event 
}

// creating fun to post data to server //step 5

const  transferDatatoserver =(course) => {       // catch course arrya object 
                         //    pass course array object 
  axios.post(`${baseurl}/courses`,course).then(
    (response)  =>   {
      console.log(response);
      console.log("success");
  

    },
    (error)=> {
      console.log("error");
           console.log(error);

    }
  );

  
   };


  return (       // STEP 4
    <div>
      <h1 className="text-center animate">Fill this form</h1>
      <Form onSubmit={handleform} className="text-center pt-5 font-weight-bold">
        <FormGroup className="animate">
          
          <Label htmlFor="userid">Course Id</Label>
          <Input type="text" placeholder="enter id here"
           id="id" 
           onChange={(e)=>{
            setCourse({...course, id:e.target.value})
           }}    //  this setCourse fun takes intial state first then set id =e.target.value means - value entered in input field
                // if course array  dont have id then it add id to it ; otherwise change state of id (value) 
           />
        
        </FormGroup>
        <FormGroup className="animate">
        
          <Label htmlFor="title">Course title</Label>
          <Input type="text" placeholder="enter title here "
           id="title"  
           
           onChange={(e)=>{
            setCourse({...course, title:e.target.value})
           }}
           
           />
        
        </FormGroup>
        <FormGroup className="animate">
        
          <Label htmlFor="discription">Course Discription</Label>
          <Input
            type="textarea"
            placeholder="enter discription here !!!"
            id="description"
            
            style={{ height: 100 }}

           onChange={(e)=>{
            setCourse({...course,description:e.target.value})
           }}

          />
        
        </FormGroup>
        <Container className="animate">
          <Button
               
            type='submit'                         //step 2
            onClick ={()=>{toast.success("button clicked!!!")}} // pass array fun direct
            color="success"
            size="lg"
            style={{ marginBottom: '10px', marginTop: '10px', marginLeft: '10px' }}
          >
            ADD COURSE
          </Button>
          <Button type='reset'
          onClick={()=>{
            setCourse({}) // pass empty object so no data pass to database
          }}
            color="danger"
            size="lg"
            style={{ marginBottom: '10px', marginTop: '10px', marginLeft: '30px' }}
          >
            CLEAR SCREEN
          </Button>
        </Container>
      </Form>
    </div>
  );
}
