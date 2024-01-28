import React from 'react'
import { Link } from 'react-router-dom';
import { ListGroup,ListGroupItem } from 'reactstrap';
export default function Leftoptions() {
  return (
    <div>
      
      <ListGroup>
        <Link   className  = 'list-group-item list-group-item-action bg-success my-1 '  tag="a"   to="/"            color="success">Home</Link>
        <Link   className = 'list-group-item list-group-item-action  bg-info    my-1 ' tag="a"     to="/addcourses"  color="info">ADD COURSES</Link>
        <Link   className  = 'list-group-item list-group-item-action bg-warning my-1 '  tag="a"   to="/viewcourses" color="warning">VIEW COURSES</Link>
        <Link   className  = 'list-group-item list-group-item-action bg-danger my-1 '  tag="a"   to="#"            color="danger">About Us</Link>
        <Link   className = 'list-group-item list-group-item-action  bg-info   my-1 ' tag="a"     to="#"            color="info">contact</Link>
       
      </ListGroup>
   
    </div>
  )
}
