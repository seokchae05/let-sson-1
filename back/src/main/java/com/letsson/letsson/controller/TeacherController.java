package com.letsson.letsson.controller;

import com.letsson.letsson.exception.ResourceNotFoundException;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.model.TeacherJoinDto;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.security.JwtTokenProvider;
import com.letsson.letsson.service.CustomUserDetailsService;
import com.letsson.letsson.service.TeacherService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import java.util.*;

@Api(value="선생님 API")
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
    @ApiOperation(value="join",tags = "선생님 회원 가입")
    public String join(@ApiParam(name="TeacherJoinDto",value = "등록 선생님 정보",required = true) @RequestBody @Valid TeacherJoinDto teacherJoinDto, BindingResult bindingResult){
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
   @ApiOperation(value="confirmTel",tags="아이디 중복 체크")
   @ApiImplicitParams(
           @ApiImplicitParam(name="tel",value="선생님 입력 전화번호",dataType = "String",required = true,paramType="query")
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
    //로그인
    @PostMapping("/login")
    @ApiOperation(value="login",tags="선생님 로그인")
    public String login(@ApiParam(name="Teacher",value = "로그인 선생님 정보",required = true) @RequestBody Map<String,String> teacher){
        Teacher member = teacherRepository.findByTel(teacher.get("tel"));
        if(member == null) throw new IllegalArgumentException("가입되지 않은 tel 입니다");
                //.orElseThrow(() -> new IllegalArgumentException("가입되지 않은 tel 입니다"));
        if(!passwordEncoder.matches(teacher.get("password"),member.getPassword())){
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getUsername(), member.getRole());
    }

    //get all teachers
    @GetMapping("")
    @ApiOperation(value="getALLTeachers",tags="모든 선생님 정보")
    public List<Teacher> getALLTeachers()
    { return this.teacherRepository.findAll();}

    //get teacher by id
    @GetMapping("/teacherInfo")
    @ApiOperation(value="getTeacherById",tags="등록 id에 해당하는 선생님 정보")
    @ApiImplicitParams(
            {
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "authorization header", required = true, dataType = "string", paramType = "header")
            }
    )
    public Teacher getTeacherById(HttpServletRequest request){
        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        return this.teacherRepository.findByTel(tel);
    }

   /* //create new teacher
    @PostMapping("")
    public Teacher createTeacher(@RequestBody Teacher teacher){
        return this.teacherRepository.save(teacher);
    }
*/
   @PutMapping("/basicModify")
   @ApiOperation(value="updateBasicTeacher",tags="등록 id에 해당하는 선생님 기본 정보 수정")
   @ApiImplicitParams(
           {
                   @ApiImplicitParam(name="X-AUTH-TOKEN",value="authorization header",required = true,dataType = "string",paramType = "header")}
   )
   public Teacher updateBasicTeacher(@ApiParam(name="Teacher",value = "수정 선생님 정보",required = true) @RequestBody Teacher teacher, HttpServletRequest request){
       String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
       Teacher existingTeacher = this.teacherRepository.findByTel(tel);
       existingTeacher.setName(teacher.getName());
       existingTeacher.setFemale(teacher.isFemale());
       existingTeacher.setMale(teacher.isMale());
       existingTeacher.setPay(teacher.getPay());
       existingTeacher.setRegion(teacher.getRegion());
       existingTeacher.setContact(teacher.isContact());
       existingTeacher.setNonContact(teacher.isNonContact());
       existingTeacher.setIs_attend(teacher.getIs_attend());
       existingTeacher.setUniversity(teacher.getUniversity());
       existingTeacher.setMajor(teacher.getMajor());
       existingTeacher.setProve_image(teacher.getProve_image());
       existingTeacher.setIntro(teacher.getIntro());
       existingTeacher.setEmail(teacher.getEmail());
       existingTeacher.setTel(teacher.getTel());
       existingTeacher.setPassword(passwordEncoder.encode(teacher.getPassword()));

       return this.teacherRepository.save(existingTeacher);

   }

    //update teacher by id..mail,name,location update..
    @PutMapping("/modify")
    @ApiOperation(value="updateTeacher",tags="등록 id에 해당하는 선생님 정보 수정")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name="X-AUTH-TOKEN",value="authorization header",required = true,dataType = "string",paramType = "header")}
    )
    public Teacher updateTeacher(@ApiParam(name="Teacher",value = "수정 선생님 정보",required = true) @RequestBody Teacher teacher, HttpServletRequest request){
        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        Teacher existingTeacher = this.teacherRepository.findByTel(tel);
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
    @DeleteMapping("/delete")
    @ApiOperation(value="deleteTeacher",tags="등록 id에 해당하는 선생님 정보 삭제")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name="X-AUTH-TOKEN",value="authorization header",required = true,dataType = "string",paramType = "header")}
    )
    public ResponseEntity<Teacher> deleteTeacher(HttpServletRequest request)
    {
        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        Teacher existingTeacher = this.teacherRepository.findByTel(tel);
        this.teacherRepository.delete(existingTeacher);
        return ResponseEntity.ok().build();

    }
}