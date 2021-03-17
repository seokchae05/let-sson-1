package com.letsson.letsson.controller;

import com.letsson.letsson.service.CustomUserDetailsService;
import com.letsson.letsson.service.StudentService;
import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.StudentJoinDto;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.security.JwtTokenProvider;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.*;

@Api(value="학생 API")
@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
    private final JwtTokenProvider jwtTokenProvider;
    private final StudentRepository studentRepository;
    private final CustomUserDetailsService customUserDetailsService;
    private final StudentService studentService;
    private final PasswordEncoder passwordEncoder;

    // 회원가입
    @PostMapping("/join")
    @ApiOperation(value="join",tags = "학생 회원 가입")
    public String join(@ApiParam(name="Student",value = "수정 학생 정보",required = true) @Valid @RequestBody StudentJoinDto studentJoinDto, BindingResult bindingResult) {
       if(bindingResult.hasErrors()) {
            bindingResult.getAllErrors()
                    .forEach(objectError->{ System.err.println("code : " + objectError.getCode());
                                            System.err.println("defaultMessage : " + objectError.getDefaultMessage());
                                            System.err.println("objectName : " + objectError.getObjectName());
                    });
            return "valid error";
        }
       String message = studentService.signUp(studentJoinDto);
       return message;

    }

    //id(tel) 중복 검증
    @GetMapping("/idCheck")
    @ApiOperation(value="confirmTel",tags="아이디 중복 체크")
    @ApiImplicitParams(
            @ApiImplicitParam(name="tel",value="학생 입력 전화번호",dataType = "String",required = true, paramType = "query")
    )
    public Map<String, Object> confirmTel(@RequestParam("tel") String tel) throws Exception{
        boolean result = customUserDetailsService.idChk(tel);

        Map<String,Object> data = new HashMap<>();
        if(result == true){
            System.out.println("핸드폰 번호 사용 불가!");
            data.put("confirm","아이디 중복");
        }
        else{
            System.out.println("핸드폰 번호 사용 가능!");
            data.put("confirm","사용가능한 아이디입니다.");
        }
        return data;
    }

    // 로그인
    @PostMapping("/login")
    @ApiOperation(value="login",tags="학생 로그인")
    public String login(@ApiParam(name="Student",value = "로그인 학생 정보",required = true) @RequestBody Map<String, String> student) {
        Student member = studentRepository.findByTel(student.get("tel"));
        if(member == null) throw new IllegalArgumentException("가입되지 않은 tel 입니다");
        if (!passwordEncoder.matches(student.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRole());
    }

    // get all students
    // get student by id
    // create new student
    // @PostMapping("")
    // public StudentDao createStudent(@RequestBody StudentDao studentDao){
    // return this.studentRepository.save(studentDao);
    // }
    // update student by id..mail,name,location update..

    @GetMapping("")
    @ApiOperation(value="getALLStudents",tags="모든 학생 정보")
    @ApiImplicitParams({
            @ApiImplicitParam(name="X-AUTH-TOKEN",value="authorization header",required = true,dataType = "string",paramType = "header")
    })
    public List<Student> getALLStudents() {
        return this.studentRepository.findAll();
    }

    @GetMapping("/studentInfo")
    @ApiOperation(value="getStudentById",tags="등록 id에 해당하는 학생 정보")
    @ApiImplicitParams(
            {
            @ApiImplicitParam(name="X-AUTH-TOKEN",value="authorization header",required = true,dataType = "string",paramType = "header")}
    )
    public Student getStudentById(HttpServletRequest request) {
        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        return this.studentRepository.findByTel(tel);

    }

    @PutMapping("/modify")
    @ApiOperation(value="updateStudent",tags="등록 id에 해당하는 학생 정보 수정")
    @ApiImplicitParams(
            {
             @ApiImplicitParam(name="X-AUTH-TOKEN",value="authorization header",required = true,dataType = "string",paramType = "header")}
    )
    public Student updateStudent(@ApiParam(name="Student",value = "등록 학생 정보",required = true) @RequestBody Student student, HttpServletRequest request) {
        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        Student existingStudent = this.studentRepository.findByTel(tel);
        existingStudent.setName(student.getName());
        existingStudent.setSubject(student.getSubject());
        existingStudent.setRegion(student.getRegion());
        existingStudent.setIntro(student.getIntro());
        existingStudent.setGoal(student.getGoal());
        existingStudent.setReview(student.getReview());

        return this.studentRepository.save(existingStudent);

    }

    // delete student by id
    @DeleteMapping("/delete")
    @ApiOperation(value="deleteStudent",tags="등록 id에 해당하는 학생 정보 삭제")
    @ApiImplicitParams(
            {
            @ApiImplicitParam(name="X-AUTH-TOKEN",value="authorization header",required = true,dataType = "string",paramType = "header")}
    )
    public ResponseEntity<Student> deleteStudent(HttpServletRequest request) {
        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        Student existingStudent = this.studentRepository.findByTel(tel);
        this.studentRepository.delete(existingStudent);
        return ResponseEntity.ok().build();
    }

}
