package com.letsson.letsson.controller;

import com.letsson.letsson.model.*;
import com.letsson.letsson.repository.StoTRepository;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import com.letsson.letsson.repository.TtoSRepository;
import com.letsson.letsson.security.JwtTokenProvider;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Api(value="학생 포스트 박스 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/students")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentPostboxController {


   private final StudentRepository studentRepository;
   private final TeacherRepository teacherRepository;
   private final JwtTokenProvider jwtTokenProvider;

   private final StoTRepository stoTRepository;
   private final TtoSRepository ttoSRepository;

   //학생 to 선생님 신청서 보내기
    @PostMapping("/sendProfile")
    @ApiOperation(value = "sendProfile", tags = "학생->선생님 신청")
    @ApiImplicitParams(
            {
                    //@ApiImplicitParam(name = "receiverTel", value = "신청 대상 선생님 전화번호", dataType = "String", required = true, paramType = "query"),
                    @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "authorization header", required = true, dataType = "string", paramType = "header")
            }
    )
    public String sendProfile(HttpServletRequest request, @RequestParam(value="teacher_tel") String receiverTel){

       String senderTel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        Student senderStudent = studentRepository.findByTel(senderTel);
        Teacher receiverTeacher = teacherRepository.findByTel(receiverTel);

        if(checkDouble(senderStudent,receiverTeacher)){
            StoTMatching stuSendProfile = StoTMatching.builder()
                    .sender(senderStudent)
                    .receiver(receiverTeacher)
                    .state("신청서 제출")
                    .build();
            stoTRepository.save(stuSendProfile);
            String message = "신청자: " + senderTel + " 신청대상: " + receiverTel;
            return message;
        }
        else  return "이미 신청서를 보냈습니다.";
    }

    public boolean checkDouble(Student sender, Teacher receiver){
        boolean result = (stoTRepository.findBySenderAndReceiver(sender,receiver) == null) ;
        return result;
    }

    //학생 -> 선생님 신청서 삭제
    @DeleteMapping("/deleteSending")
    @ApiOperation(value = "deleteSending", tags = "학생->선생님 신청 삭제")
    @ApiImplicitParams(
            {
                   // @ApiImplicitParam(name = "receiverTel", value = "신청 대상 선생님 전화번호", dataType = "String", required = true, paramType = "query"),
                    @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "authorization header", required = true, dataType = "string", paramType = "header")
            }
    )
    public Long deleteSending(@RequestParam(value="teacher_tel") String teacher_tel,HttpServletRequest request)
    {

        Teacher teacher = teacherRepository.findByTel(teacher_tel);
        System.out.println("receiver: " + teacher.getId());

        Student student = studentRepository.findByTel(jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request)));
        System.out.println("sender: " + student.getId());

        StoTMatching stoTMatching = stoTRepository.findBySenderAndReceiver(student,teacher);

        System.out.println(stoTMatching.getId());
        this.stoTRepository.delete(stoTMatching);
        return stoTMatching.getId();

    }

    //학생 -> 선생님 신청서 전체 조회
    @GetMapping("/getAllSending")
    @ApiOperation(value = "getAllSending", tags = "학생 -> 선생님 신청서 전체 조회")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "authorization header", required = true, dataType = "string", paramType = "header")
            }
    )
    public List<StoTMatching> getAllSending (HttpServletRequest request){

        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));

        Student sender = studentRepository.findByTel(tel);

        List<StoTMatching> matchings = stoTRepository.findBySender(sender);

        return matchings;

    }
   //선생님 -> 학생 신청서 전체 조회
    @GetMapping("/getAllReceiving")
    @ApiOperation(value = "getAllReceiving", tags = "선생님 -> 학생 신청서 전체 조회")
    @ApiImplicitParams(
            {
                    @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "authorization header", required = true, dataType = "string", paramType = "header")
            }
    )
    public  List<TtoSMatching> getAllReceiving (HttpServletRequest request){
        String tel = jwtTokenProvider.getTel(jwtTokenProvider.resolveToken(request));
        Student receiver = studentRepository.findByTel(tel);
        List<TtoSMatching> matchings = ttoSRepository.findByReceiver(receiver);

        return matchings;

    }
}
