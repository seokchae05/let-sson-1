package com.letsson.letsson.controller;

import com.letsson.letsson.model.StoTMatching;
import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.model.TtoSMatching;
import com.letsson.letsson.repository.StoTRepository;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.repository.TtoSRepository;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@Api(value="학생 포스트 박스 API")
@RestController
@RequestMapping("/students/")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class StudentPostboxController {


   private final StudentRepository studentRepository;
   private final TeacherRepository teacherRepository;
   private final StoTRepository stoTRepository;
   private final TtoSRepository ttoSRepository;

   /*//학생 to 선생님 신청서 보내기
    @PostMapping("/sendProfile/{teacher_id}")
    public String sendProfile(@RequestBody Student student,@PathVariable(value="teacher_id") Long teacher_id){
        Optional<Student> senderStudent = studentRepository.findById(student.getId());
        Optional<Teacher> teacher = teacherRepository.findById(teacher_id);
*//*
        StoTMatching stuSendProfile = StoTMatching.builder()
                .sender(senderStudent.getId())*//*


    }*/



}
