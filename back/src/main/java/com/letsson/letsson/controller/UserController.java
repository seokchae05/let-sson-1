package com.letsson.letsson.controller;

import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.response.BasicResponse;
import com.letsson.letsson.response.CommonResponse;
import com.letsson.letsson.response.ErrorResponse;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<? extends BasicResponse> findId(@RequestParam("name") String name, @RequestParam("email") String email){
        if(studentRepository.findByEmailAndName(email,name) != null){
            Student existingStudent = studentRepository.findByEmailAndName(email,name);
            return ResponseEntity.ok().body( new CommonResponse<String>(existingStudent.getTel()));
        }
        else if(teacherRepository.findByEmailAndName(email,name) != null) {
            Teacher existingTeacher = teacherRepository.findByEmailAndName(email, name);
            return ResponseEntity.ok().body(new CommonResponse<String>(existingTeacher.getTel()));
        }
        else
        {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ErrorResponse("존재하지 않는 사용자입니다."));
        }


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

