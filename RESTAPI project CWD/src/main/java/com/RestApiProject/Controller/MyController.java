package com.RestApiProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.RestApiProject.Entities.Course;
import com.RestApiProject.ServiceLayer.CourseService;

@RestController     // handle json data 


@CrossOrigin (origins = "http://localhost:3004")
public class MyController {

    @Autowired  // auto object injection
	private CourseService  courseService; // create parent variable
	
	
	
	// get the courses 
	@GetMapping(value = "/courses")
	public List<Course>  getallcourses()
	{
		return this.courseService.getCourses();
	}
	
	
	// get course by id 
	@GetMapping(value = "/courses/{id}")
	public Course getCourseById( @PathVariable String id )
	{
		return this.courseService.getCourseById(Long.parseLong(id));
		
	}
	
	// create course  insert method 
	
	@PostMapping("/courses")
	public Course  createCourse(@RequestBody Course c1)  // binding data
	{
		return this.courseService.createCourse(c1);
	}
	
     @PutMapping("/courses")	
	public Course updateCourse(@RequestBody Course c1)
	{
	
		return this.courseService.update(c1);
	}
     
     @DeleteMapping(value = "/courses/{courseid}")
     public void deleteCourseById(@PathVariable("courseid") long id )
     {
    	 this.courseService.deleteByID(id);
    	 
    	 System.out.println("data deleted");
     }
	
}
