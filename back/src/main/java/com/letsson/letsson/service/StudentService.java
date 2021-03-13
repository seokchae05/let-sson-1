package com.letsson.letsson.service;

import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.StudentJoinDto;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class StudentService {
    private final StudentRepository studentRepository;
    private final CustomUserDetailsService customUserDetailsService;
    private final PasswordEncoder passwordEncoder;

    public String signUp(StudentJoinDto studentJoinDto) {
      if(customUserDetailsService.idChk(studentJoinDto.getTel())){
          return "사용불가한 아이디";
      }
       else {
            Student student = Student.builder()
                    .name(studentJoinDto.getName())
                    .is_stu(studentJoinDto.getIs_stu())
                    .age(studentJoinDto.getAge())
                    .gender(studentJoinDto.getGender())
                    .proper_gender(studentJoinDto.getProper_gender())
                    .region(studentJoinDto.getRegion())
                    .subject(studentJoinDto.getSubject())
                    .pay(studentJoinDto.getPay())
                    .contact(studentJoinDto.getContact())
                    .tel(studentJoinDto.getTel())
                    .email(studentJoinDto.getEmail())
                    .password(passwordEncoder.encode(studentJoinDto.getPassword()))
                    .role("ROLE_STUDENT")
                    .build();
            studentRepository.save(student);
            return student.getTel();
        }

    }

}
