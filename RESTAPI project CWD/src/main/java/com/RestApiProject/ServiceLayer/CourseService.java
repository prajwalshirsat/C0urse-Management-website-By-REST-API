package com.RestApiProject.ServiceLayer;


// step 2
import java.util.List;

import com.RestApiProject.Entities.Course;

public interface CourseService {

	
	public List<Course> getCourses();

	
	public Course getCourseById(long id);

	public Course createCourse(Course c1);


	public Course update(Course c1);
	
	public void deleteByID(long id);
	
}
