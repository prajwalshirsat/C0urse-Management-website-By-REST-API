package com.RestApiProject.ServiceLayer;

// Step 3
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RestApiProject.DAOLayer.CourseDao;
import com.RestApiProject.Entities.Course;

@Service                      // implementation  class for methods
public class CourseServiceIMPL implements CourseService {
	
	
	@Autowired  // auto bean crreation 
	private CourseDao courseDao;
	
	
	
	@Override
	public List<Course> getCourses() {

	  List<Course>  getall = this.courseDao.findAll();
	  return getall;

	}

	@Override
	public Course getCourseById(long id) {
		
      Optional<Course>  opt =this.courseDao.findById(id);  //method of crudrepository return optional
		
      Course c1 = opt.get(); // give course object 

		return c1;
	}

	public Course createCourse(Course c1) {
		
		return	this.courseDao.save(c1);
				  
	}

	public Course update(Course c1) {
	
		return	this.courseDao.save(c1);
		
	}



	@Override
	public void deleteByID(long id) {
     
		// fetch object first then delete entire object
		
	  Optional<Course> opt= 	this.courseDao.findById(id);

	        Course c1 = opt.get();
	       
	      this.courseDao.delete(c1);  // delete object directly 
	
	}
	

}
/* 
 * package com.RestApiProject.ServiceLayer;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.stereotype.Service;

import com.RestApiProject.Entities.Course;

@Service                      // implementation  class for methods
public class CourseServiceIMPL implements CourseService {

	List<Course>  list;
	
	public CourseServiceIMPL()  // constructor  
	{
		 list=new ArrayList<>();
		 
		 list.add(new Course(1,"java","core java"));
		 list.add(new Course(2,"java-spring","core java123"));
		 list.add(new Course(3,"java-jbdc","core java123"));
		 list.add(new Course(4,"java-hibernate","core java12345"));
		 
	}
	
	
	
	@Override
	public List<Course> getCourses() {

		return list ;
	}



	@Override
	public Course getCourseById(long id) {
		
		Course  c1 =null;
		
		for( Course course : list)
		{
			if(course.getId()==id)
			{
				c1 = course;
				break;
			}
		}
		
		return c1;
	}



	public Course createCourse(Course c1) {
		
		list.add(c1); // pass direct object
		
		return  c1;
	}



	public Course update(Course c1) {
		
		list.forEach(e->{
			if(e.getId()==c1.getId())
			{
				e.setTitle(c1.getTitle());
				e.setDescription(c1.getDescription());
				
			}
		});
		return c1;
	}
	

	
	
	

}
 */
 