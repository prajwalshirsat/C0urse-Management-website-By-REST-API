
import React, { useEffect } from "react"
import ScrollReveal from 'scrollreveal';
import axios from "axios";
import baseurl from './../API/bootapi';
import { toast } from 'react-toastify';

import{
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
} from "reactstrap";


 // course is array
export default function Course({course ,update }) {

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.card', {
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      origin: 'bottom',
      distance: '50px',
    });
  }, []);





const deletecourse = (id)=>{

   axios.delete(`${baseurl}/courses/${id}`).then(
    (Response)=>{
      console.log(Response);
      toast.success("course deleted  "+id);

      update(id); // frontend list has to be updated 


    },
    (error)=>{
      console.log(error);
      toast.error("course not deleted server problem");

    }
   );
};

  return (
    <div>
       <Card className='text-center'>
      <CardBody>
         
          <CardSubtitle className="font-weight-bold " >{course.title}</CardSubtitle>
          <CardText>{course.description} </CardText>
          <Container className='text-center'>
          <Button className='btn-danger' onClick={()=>{ deletecourse(course.id); }}>Delete</Button>
          <Button className='btn-warning ml-3'>UPdate</Button>
          
          </Container>
          
        </CardBody>
      </Card>
    </div>
  )
}
