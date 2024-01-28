package com.RestApiProject.DAOLayer;
// step 4          interface 
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.RestApiProject.Entities.Course;
                                 // interface  < table creation class , thier id type >
public interface CourseDao extends JpaRepository<Course, Long> {

	
	
}
