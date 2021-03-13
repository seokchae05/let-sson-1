package com.letsson.letsson.service;

import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;

    public boolean idChk(String tel) {
        boolean result = (studentRepository.findByTel(tel) != null || teacherRepository.findByTel(tel) != null);
        return result;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // first try loading from User table
        Student student = studentRepository.findByTel(username);
        if (student != null) {
            return (UserDetails) student;
        } else {
            // Not found in user table, so check admin
            Teacher teacher = teacherRepository.findByTel(username);
            if (teacher != null) {
                return (UserDetails) teacher;
            }
        }
        throw new UsernameNotFoundException("User '" + username + "' not found");
    }

}
