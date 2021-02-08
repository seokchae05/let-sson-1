package com.letsson.letsson.controller;

import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/teachers")
public class TeacherController {

    @Autowired
    private TeacherRepository teacherRepository;

    //get all teachers
    @GetMapping("")
    public List<Teacher> getALLTeachers()
    { return this.teacherRepository.findAll();}

    //get teacher by id
    @GetMapping("/{id}")
    public Teacher getTeacherById(@PathVariable(value = "id") Long id){
        return this.teacherRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("teacher not found with id :" + id));
    }

    //create new teacher
    @PostMapping("")
    public Teacher createTeacher(@RequestBody Teacher teacher){
        return this.teacherRepository.save(teacher);
    }


    //update teacher by id..mail,name,location update..
    @PutMapping("/{id}")
    public Teacher updateTeacher(@RequestBody Teacher teacher,@PathVariable("id") Long id){
        Teacher existingTeacher = this.teacherRepository.findById(id)
                .orElseThrow(() ->  new ResourceNotFoundException("teacher not found with id :" + id));
        existingTeacher.setName(teacher.getName());
        existingTeacher.setEmail(teacher.getEmail());
        existingTeacher.setLocation(teacher.getLocation());
        return this.teacherRepository.save(existingTeacher);

    }

    //delete teacher by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Teacher> deleteTeacher(@PathVariable("id") Long id)
    {
        Teacher existingTeacher = this.teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("teacher not found with id :" + id));
        this.teacherRepository.delete(existingTeacher);
        return ResponseEntity.ok().build();

    }
}