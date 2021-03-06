package com.letsson.letsson.security.config;

import com.letsson.letsson.model.StudentDao;
import com.letsson.letsson.model.TeacherDao;
import com.letsson.letsson.repository.StudentRepository;
import com.letsson.letsson.repository.TeacherRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;


    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // first try loading from User table
        StudentDao studentDao = studentRepository.findByTel(username);
        if (studentDao != null) {
            return (UserDetails) studentDao;
        } else {
            // Not found in user table, so check admin
            TeacherDao teacherDao = teacherRepository.findByTel(username);
            if (teacherDao != null) {
                return (UserDetails) teacherDao;
            }
        }
        throw new UsernameNotFoundException("User '" + username + "' not found");
    }

}
