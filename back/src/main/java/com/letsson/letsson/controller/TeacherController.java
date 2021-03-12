package com.letsson.letsson.controller;

import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.model.TeacherJoinDto;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.security.config.JwtTokenProvider;
import com.letsson.letsson.service.CustomUserDetailsService;
import com.letsson.letsson.service.TeacherService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.*;

@RestController
@RequestMapping("/teachers")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class TeacherController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final TeacherRepository teacherRepository;
    private final TeacherService teacherService;
    private final CustomUserDetailsService customUserDetailsService;


    @PostMapping("/join")
    public String join(@RequestBody @Valid TeacherJoinDto teacherJoinDto, BindingResult bindingResult){
        if(bindingResult.hasErrors()) {
            bindingResult.getAllErrors()
                    .forEach(objectError->{ System.err.println("code : " + objectError.getCode());
                        System.err.println("defaultMessage : " + objectError.getDefaultMessage());
                        System.err.println("objectName : " + objectError.getObjectName());
                    });
            return "valid error";
        }
        String message = teacherService.signUp(teacherJoinDto);
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
    //로그인
    @PostMapping("/login")
    public String login(@RequestBody Map<String,String> teacher){
        Teacher member = teacherRepository.findByTel(teacher.get("tel"));
        if(member == null) throw new IllegalArgumentException("가입되지 않은 tel 입니다");
                //.orElseThrow(() -> new IllegalArgumentException("가입되지 않은 tel 입니다"));
        if(!passwordEncoder.matches(teacher.get("password"),member.getPassword())){
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }

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
    @PutMapping("/modify/{id}")
    public Teacher updateTeacher(@RequestBody Teacher teacher, @PathVariable("id") Long id){
        Teacher existingTeacher = this.teacherRepository.findById(id)
                .orElseThrow(() ->  new ResourceNotFoundException("teacher not found with id :" + id));
        existingTeacher.setName(teacher.getName());
        existingTeacher.setUniversity(teacher.getUniversity());
        existingTeacher.setMajor(teacher.getMajor());
        existingTeacher.setSubject(teacher.getSubject());
        existingTeacher.setRegion(teacher.getRegion());
        existingTeacher.setCareer(teacher.getCareer());
        existingTeacher.setIntro(teacher.getIntro());
        existingTeacher.setPlan(teacher.getPlan());
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