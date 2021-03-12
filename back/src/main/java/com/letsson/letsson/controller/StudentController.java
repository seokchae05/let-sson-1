package com.letsson.letsson.controller;

import com.letsson.letsson.service.CustomUserDetailsService;
import com.letsson.letsson.service.StudentService;
import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.StudentJoinDto;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.security.config.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

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
    public String join(@Valid @RequestBody StudentJoinDto studentJoinDto, BindingResult bindingResult) {
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
    public String login(@RequestBody Map<String, String> student) {
        Student member = studentRepository.findByTel(student.get("tel"));
        if(member == null) throw new IllegalArgumentException("가입되지 않은 tel 입니다");
        if (!passwordEncoder.matches(student.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }
    // get all students
    @GetMapping("")
    public List<Student> getALLStudents() {
        return this.studentRepository.findAll();
    }

    // get student by id
    @GetMapping("/{id}")
    public Student getStudentById(@PathVariable(value = "id") Long id) {
        return this.studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + id));
    }

    // create new student
    // @PostMapping("")
    // public StudentDao createStudent(@RequestBody StudentDao studentDao){
    // return this.studentRepository.save(studentDao);
    // }
    // update student by id..mail,name,location update..
    @PutMapping("/modify/{id}")
    public Student updateStudent(@RequestBody Student student, @PathVariable("id") Long id) {
        Student existingStudent = this.studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + id));
        existingStudent.setName(student.getName());
        existingStudent.setSubject(student.getSubject());
        existingStudent.setRegion(student.getRegion());
        existingStudent.setIntro(student.getIntro());
        existingStudent.setGoal(student.getGoal());
        existingStudent.setReview((Float)student.getReview());

        return this.studentRepository.save(existingStudent);

    }

    // delete student by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Student> deleteStudent(@PathVariable("id") Long id) {
        Student existingStudent = this.studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + id));
        this.studentRepository.delete(existingStudent);
        return ResponseEntity.ok().build();

    }

}
