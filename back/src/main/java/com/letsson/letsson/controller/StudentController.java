package com.letsson.letsson.controller;

import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.StudentDao;
import com.letsson.letsson.model.TeacherDao;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.security.config.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/students")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;

    // 회원가입
    @PostMapping("/join")
    public Long join(@RequestBody Map<String, String> student) {
        return studentRepository.save(StudentDao.builder()
                .name(student.get("name"))
                .is_stu(student.get("is_stu"))
                .age(student.get("age"))
                .gender(student.get("gender"))
                .proper_gender(student.get("proper_gender"))
                .region(student.get("region"))
                .subject(student.get("subject"))
                .pay(student.get("pay"))
                .contact(student.get("contact"))
                .tel(student.get("tel"))
                .email(student.get("email"))
                .password(passwordEncoder.encode(student.get("password")))
                .roles(Collections.singletonList("ROLE_STUDENT"))
                .build()).getId();
    }
    //id(tel) 중복 검증
    @GetMapping("/idCheck")
    public Map<String, Object> confirmTel(@RequestParam("tel") String tel) throws Exception{
        System.out.println("중복확인 요청된 핸드폰: "+tel);
        Map<String,Object> data = new HashMap<>();
        Optional<StudentDao> student = studentRepository.findByTel(tel);
        Optional<TeacherDao> teacher = teacherRepository.findByTel(tel);
        if(student.isPresent()){
            System.out.println(studentRepository.findByTel(tel));
            System.out.println("아이디 중복!사용 불가!:학생");
            data.put("confirm","NO");
        }
        else if(teacher.isPresent()){
            System.out.println("아이디 중복!사용 불가!:선생님");
            data.put("confirm","NO");
        }
        else{
            System.out.println("핸드폰 번호 사용 가능!");
            data.put("confirm","Ok");
        }
        return data;
    }

    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String, String> student) {
        StudentDao member = studentRepository.findByTel(student.get("tel"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 tel 입니다"));
        if (!passwordEncoder.matches(student.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }
    // get all students
    @GetMapping("")
    public List<StudentDao> getALLStudents() {
        return this.studentRepository.findAll();
    }

    // get student by id
    @GetMapping("/{id}")
    public StudentDao getStudentById(@PathVariable(value = "id") Long id) {
        return this.studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + id));
    }

    // create new student
    // @PostMapping("")
    // public StudentDao createStudent(@RequestBody StudentDao studentDao){
    // return this.studentRepository.save(studentDao);
    // }
    // update student by id..mail,name,location update..
    @PutMapping("/{id}")
    public StudentDao updateStudent(@RequestBody StudentDao studentDao, @PathVariable("id") Long id) {
        StudentDao existingStudentDao = this.studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + id));
        existingStudentDao.setName(studentDao.getName());
        existingStudentDao.setEmail(studentDao.getEmail());
        existingStudentDao.setRegion(studentDao.getRegion());
        return this.studentRepository.save(existingStudentDao);

    }

    // delete student by id
    @DeleteMapping("/{id}")
    public ResponseEntity<StudentDao> deleteStudent(@PathVariable("id") Long id) {
        StudentDao existingStudentDao = this.studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("student not found with id :" + id));
        this.studentRepository.delete(existingStudentDao);
        return ResponseEntity.ok().build();

    }
}
