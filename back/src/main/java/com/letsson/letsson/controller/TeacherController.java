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
    @GetMapping("/{t_id}")
    public Teacher getTeacherById(@PathVariable(value = "t_id") Long t_id){
        return this.teacherRepository.findById(t_id)
                .orElseThrow(()->new ResourceNotFoundException("teacher not found with id :" + t_id));
    }

    //create new teacher
    @PostMapping("")
    public Teacher createTeacher(@RequestBody Teacher teacher){
        return this.teacherRepository.save(teacher);
    }


    //update teacher by id..mail,name,location update..
    @PutMapping("/{t_id}")
    public Teacher updateTeacher(@RequestBody Teacher teacher,@PathVariable("t_id") Long t_id){
        Teacher existingTeacher = this.teacherRepository.findById(t_id)
                .orElseThrow(() ->  new ResourceNotFoundException("teacher not found with id :" + t_id));
        existingTeacher.setT_name(teacher.getT_name());
        existingTeacher.setT_email(teacher.getT_email());
        existingTeacher.setT_location(teacher.getT_location());
        return this.teacherRepository.save(existingTeacher);

    }

    //delete teacher by id
    @DeleteMapping("/{t_id}")
    public ResponseEntity<Teacher> deleteTeacher(@PathVariable("t_id") Long t_id)
    {
        Teacher existingTeacher = this.teacherRepository.findById(t_id)
                .orElseThrow(() -> new ResourceNotFoundException("teacher not found with id :" + t_id));
        this.teacherRepository.delete(existingTeacher);
        return ResponseEntity.ok().build();

    }
}