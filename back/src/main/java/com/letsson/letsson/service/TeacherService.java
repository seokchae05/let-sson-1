package com.letsson.letsson.service;

import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.model.TeacherJoinDto;
import com.letsson.letsson.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class TeacherService {
    private final CustomUserDetailsService customUserDetailsService;
    private final PasswordEncoder passwordEncoder;
    private final TeacherRepository teacherRepository;

    public String signUp(TeacherJoinDto teacherJoinDto) {
        if(customUserDetailsService.idChk(teacherJoinDto.getTel())){
            return "사용불가한 아이디";
        }
        else {
            Teacher teacher = Teacher.builder()
                    .name(teacherJoinDto.getName())
                    .subject(teacherJoinDto.getSubject())
                    .gender(teacherJoinDto.getGender())
                    .pay(teacherJoinDto.getPay())
                    .region(teacherJoinDto.getRegion())
                    .contact(teacherJoinDto.getContact())
                    .is_attend(teacherJoinDto.getIs_attend())
                    .university(teacherJoinDto.getUniversity())
                    .major(teacherJoinDto.getMajor())
                    .prove_image(teacherJoinDto.getProve_image())
                    .intro(teacherJoinDto.getIntro())
                    .email(teacherJoinDto.getEmail())
                    .tel(teacherJoinDto.getTel())
                    .password(passwordEncoder.encode(teacherJoinDto.getPassword()))
                    .role("TEACHER")
                    .build();
            teacherRepository.save(teacher);
            return teacher.getTel();
        }

    }

}
