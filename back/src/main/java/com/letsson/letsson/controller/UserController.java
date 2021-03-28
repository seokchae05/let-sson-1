package com.letsson.letsson.controller;

import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.security.JwtTokenProvider;
import com.letsson.letsson.service.CustomUserDetailsService;
import com.letsson.letsson.service.StudentService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Api(value = "사용자 공통 API")
@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;


    @GetMapping("/findID")
    @ApiOperation(value = "findID",tags = "사용자 아이디 찾기")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name="email",value="사용자 입력 이메일 주소",dataType = "String",required = true, paramType = "query"),
                    @ApiImplicitParam(name="name",value="사용자 입력 이름",dataType = "String",required = true, paramType = "query")
            }
    )
    public String findId(@RequestParam("name") String name,@RequestParam("email") String email){

        if(studentRepository.findByEmailAndName(email,name) != null){
            Student existingStudent = studentRepository.findByEmailAndName(email,name);
            return existingStudent.getTel();
        }
        else if(teacherRepository.findByEmailAndName(email,name) != null){
            Teacher existingTeacher = teacherRepository.findByEmailAndName(email,name);
            return existingTeacher.getTel();
        }
        else return "존재하지 않는 사용자 입니다.";

    }

    @GetMapping("/findPassword")
    @ApiOperation(value = "findPassword",tags = "사용자 비밀번호 찾기")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name="tel",value="사용자 입력 핸드폰 번호",dataType = "String",required = true, paramType = "query"),
                    @ApiImplicitParam(name="name",value="사용자 입력 이름",dataType = "String",required = true, paramType = "query")
            }
    )
    public boolean findPassword(@RequestParam("name") String name,@RequestParam("tel") String tel){

        if(studentRepository.findByTelAndName(tel,name) != null){
            return true;
        }
        else if(teacherRepository.findByTelAndName(tel,name) != null){
          return true;
        }
        else return false;

    }


}
