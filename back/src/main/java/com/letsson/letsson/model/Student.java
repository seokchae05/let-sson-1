package com.letsson.letsson.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="s_id")
    private Long s_id;
    @Column(name="s_name")
    private String s_name;
    @Column(name="s_nickname")
    private String s_nickname;
    @Column(name="s_phone")
    private String s_phone;
    @Column(name="s_psw")
    private String s_psw;
    @Column(name="s_mail")
    private String s_mail;
    @Column(name="s_location")
    private String s_location;
    @Column(name="s_age")
    private Integer s_age;
    @Column(name="s_gender")
    private String s_gender;
    @Column(name="s_type")
    private String s_type;
    @Column(name="s_money")
    private Integer s_money;
    @Column(name="s_contact")
    private String s_contact;
    @Column(name="s_gender_like")
    private String s_gender_like;
    @Column(name="s_intro")
    private String s_intro;
    @Column(name="s_goal")
    private String s_goal;
    @Column(name="sub_no")
    private Integer sub_no;

    public Student() {

    }


    public Long getS_id() {
        return s_id;
    }

    public void setS_id(Long s_id) {
        this.s_id = s_id;
    }

    public String getS_name() {
        return s_name;
    }

    public void setS_name(String s_name) {
        this.s_name = s_name;
    }

    public String getS_nickname() {
        return s_nickname;
    }

    public void setS_nickname(String s_nickname) {
        this.s_nickname = s_nickname;
    }

    public String getS_phone() {
        return s_phone;
    }

    public void setS_phone(String s_phone) {
        this.s_phone = s_phone;
    }

    public String getS_psw() {
        return s_psw;
    }

    public void setS_psw(String s_psw) {
        this.s_psw = s_psw;
    }

    public String getS_mail() {
        return s_mail;
    }

    public void setS_mail(String s_email) {
        this.s_mail = s_email;
    }

    public String getS_location() {
        return s_location;
    }

    public void setS_location(String s_location) {
        this.s_location = s_location;
    }

    public Integer getS_age() {
        return s_age;
    }

    public void setS_age(int s_age) {
        this.s_age = s_age;
    }

    public String getS_gender() {
        return s_gender;
    }

    public void setS_gender(String s_gender) {
        this.s_gender = s_gender;
    }

    public String getS_type() {
        return s_type;
    }

    public void setS_type(String s_type) {
        this.s_type = s_type;
    }

    public int getS_money() {
        return s_money;
    }

    public void setS_money(int s_money) {
        this.s_money = s_money;
    }

    public String getS_contact() {
        return s_contact;
    }

    public void setS_contact(String s_contact) {
        this.s_contact = s_contact;
    }

    public String getS_genderLike() {
        return s_gender_like;
    }

    public void setS_genderLike(String s_genderLike) {
        this.s_gender_like = s_genderLike;
    }

    public String getS_intro() {
        return s_intro;
    }

    public void setS_intro(String s_intro) {
        this.s_intro = s_intro;
    }

    public String getS_goal() {
        return s_goal;
    }

    public void setS_goal(String s_goal) {
        this.s_goal = s_goal;
    }

    public Integer getSub_no() {
        return sub_no;
    }

    public void setSub_no(Integer sub_no) {
        this.sub_no = sub_no;
    }

    public Student(Long s_id, String s_name, String s_nickname, String s_phone, String s_psw, String s_email, String s_location, Integer s_age, String s_gender, String s_type, Integer s_money, String s_contact, String s_genderLike, String s_intro, String s_goal, Integer sub_no) {
        this.s_id = s_id;
        this.s_name = s_name;
        this.s_nickname = s_nickname;
        this.s_phone = s_phone;
        this.s_psw = s_psw;
        this.s_mail = s_email;
        this.s_location = s_location;
        this.s_age = s_age;
        this.s_gender = s_gender;
        this.s_type = s_type;
        this.s_money = s_money;
        this.s_contact = s_contact;
        this.s_gender_like = s_genderLike;
        this.s_intro = s_intro;
        this.s_goal = s_goal;
        this.sub_no = sub_no;
    }
}
