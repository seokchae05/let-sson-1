package com.letsson.letsson.controller;

import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.Student;
import com.letsson.letsson.repository.StudentRepository;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/students")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;

    //get all students
    @GetMapping("")
    public List<Student> getALLStudents()
    { return this.studentRepository.findAll();}

    //get student by id
    @GetMapping("/{s_id}")
    public Student getStudentById(@PathVariable(value = "s_id") Long s_id){
        return this.studentRepository.findById(s_id)
                .orElseThrow(()->new ResourceNotFoundException("student not found with id :" + s_id));
    }

    //create new student
    @PostMapping("")
    public Student createStudent(@RequestBody Student student){
        return this.studentRepository.save(student);
    }
    //update student by id..mail,name,location update..
    @PutMapping("/{s_id}")
    public Student updateStudent(@RequestBody Student student,@PathVariable("s_id") Long s_id){
        Student existingStudent = this.studentRepository.findById(s_id)
                .orElseThrow(() ->  new ResourceNotFoundException("student not found with id :" + s_id));
            existingStudent.setS_name(student.getS_name());
            existingStudent.setS_mail(student.getS_mail());
            existingStudent.setS_location(student.getS_location());
            return this.studentRepository.save(existingStudent);

    }

    //delete student by id
    @DeleteMapping("/{s_id}")
    public ResponseEntity<Student> deleteStudent(@PathVariable("s_id") Long s_id)
    {
        Student existingStudent = this.studentRepository.findById(s_id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + s_id));
        this.studentRepository.delete(existingStudent);
        return ResponseEntity.ok().build();

    }
}
