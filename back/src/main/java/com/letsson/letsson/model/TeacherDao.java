package com.letsson.letsson.model;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="teacher")
public class TeacherDao implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "tel")
    private String tel;
    @Column(name = "password")
    private String password;
    @Column(name = "email")
    private String email;
    @Column(name = "region")
    private String region;
    @Column(name = "gender")
    private String gender;
    @Column(name = "pay")
    private String pay;
    @Column(name = "contact")
    private String contact;
    //null
    @Column(name = "photo")
    private String photo;
    @Column(name = "university")
    private String university;
    @Column(name="major")
    private String major;
    @Column(name = "is_attend")
    private String isAttend;
    @Column(name = "prove_image")
    private String prove_image;
    @Column(name = "subject")
    private String subject;
    @Column(name = "intro")
    private String intro;
    @Column(name = "plan")
    private String plan;
    @Column(name = "appeal")
    private String appeal;
    @Column(name = "rate")
    private Float rate;
    @Column(name = "stnum")
    private Integer stnum;


    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }

    @Override
    public String getUsername() {
        return tel;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}

