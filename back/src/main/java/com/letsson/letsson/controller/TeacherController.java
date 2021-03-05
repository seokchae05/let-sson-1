package com.letsson.letsson.controller;

import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.StudentDao;
import com.letsson.letsson.model.TeacherDao;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.security.config.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/teachers")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class TeacherController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final TeacherRepository teacherRepository;
    private final StudentRepository studentRepository;


    @PostMapping("/join")
    public Long join(@RequestBody Map<String,String> teacher){
        return teacherRepository.save(TeacherDao.builder()
                .name(teacher.get("name"))
                .subject(teacher.get("subject"))
                .gender(teacher.get("gender"))
                .pay(teacher.get("pay"))
                .region(teacher.get("region"))
                .contact(teacher.get("contact"))
                .isAttend(teacher.get("is_attend"))
                .university(teacher.get("university"))
                .major(teacher.get("major"))
                .prove_image(teacher.get("prove_image"))
                .intro(teacher.get("intro"))
                .email(teacher.get("email"))
                .tel(teacher.get("tel"))
                .password(passwordEncoder.encode(teacher.get("password")))
                .roles(Collections.singletonList("ROLE_TEACHER"))
                .build()).getId();
    }
    //id(tel) 중복 검증
   @GetMapping("/idCheck")
   public Map<String, Object> confirmTel(@RequestParam("tel") String tel) throws Exception{
        System.out.println("중복확인 요청된 핸드폰: "+tel);
        Map<String,Object> data = new HashMap<>();
        Optional<StudentDao>  student = studentRepository.findByTel(tel);
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
    //로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String,String> teacher){
        TeacherDao member = teacherRepository.findByTel(teacher.get("tel"))
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 tel 입니다"));
        if(!passwordEncoder.matches(teacher.get("password"),member.getPassword())){
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }

    //get all teachers
    @GetMapping("")
    public List<TeacherDao> getALLTeachers()
    { return this.teacherRepository.findAll();}

    //get teacher by id
    @GetMapping("/{id}")
    public TeacherDao getTeacherById(@PathVariable(value = "id") Long id){
        return this.teacherRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("teacher not found with id :" + id));
    }

    //create new teacher
    @PostMapping("")
    public TeacherDao createTeacher(@RequestBody TeacherDao teacherDao){
        return this.teacherRepository.save(teacherDao);
    }


    //update teacher by id..mail,name,location update..
    @PutMapping("/{id}")
    public TeacherDao updateTeacher(@RequestBody TeacherDao teacherDao, @PathVariable("id") Long id){
        TeacherDao existingTeacherDao = this.teacherRepository.findById(id)
                .orElseThrow(() ->  new ResourceNotFoundException("teacher not found with id :" + id));
        existingTeacherDao.setName(teacherDao.getName());
        existingTeacherDao.setEmail(teacherDao.getEmail());
        existingTeacherDao.setRegion(teacherDao.getRegion());
        return this.teacherRepository.save(existingTeacherDao);

    }

    //delete teacher by id
    @DeleteMapping("/{id}")
    public ResponseEntity<TeacherDao> deleteTeacher(@PathVariable("id") Long id)
    {
        TeacherDao existingTeacherDao = this.teacherRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("teacher not found with id :" + id));
        this.teacherRepository.delete(existingTeacherDao);
        return ResponseEntity.ok().build();

    }
}