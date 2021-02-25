package com.letsson.letsson.security.config;


import com.letsson.letsson.repository.StudentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StudentUserDetailService implements UserDetailsService {

    private final StudentRepository studentRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        return (UserDetails) studentRepository.findByTel(username)
                .orElseThrow(()-> new UsernameNotFoundException("학생을 찾을 수 없습니다 : " + username));

    }

}
