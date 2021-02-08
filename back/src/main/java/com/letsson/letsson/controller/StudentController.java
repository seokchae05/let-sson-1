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
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable(value = "id") Long id){
        return this.studentRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("student not found with id :" + id));
    }

    //create new student
    @PostMapping("")
    public Student createStudent(@RequestBody Student student){
        return this.studentRepository.save(student);
    }
    //update student by id..mail,name,location update..
    @PutMapping("/{id}")
    public Student updateStudent(@RequestBody Student student,@PathVariable("id") Long id){
        Student existingStudent = this.studentRepository.findById(id)
                .orElseThrow(() ->  new ResourceNotFoundException("student not found with id :" + id));
            existingStudent.setName(student.getName());
            existingStudent.setMail(student.getMail());
            existingStudent.setLocation(student.getLocation());
            return this.studentRepository.save(existingStudent);

    }

    //delete student by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Student> deleteStudent(@PathVariable("id") Long id)
    {
        Student existingStudent = this.studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + id));
        this.studentRepository.delete(existingStudent);
        return ResponseEntity.ok().build();

    }
}
