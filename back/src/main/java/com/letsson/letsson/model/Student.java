package com.letsson.letsson.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
@Table(name="student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Long id;
    @Column(name="name")
    private String name;
    @Column(name="nickname")
    private String nickname;
    @Column(name="phone")
    private String phone;
    @Column(name="psw")
    private String psw;
    @Column(name="mail")
    private String mail;
    @Column(name="location")
    private String location;
    @Column(name="age")
    private Integer age;
    @Column(name="gender")
    private String gender;
    @Column(name="type")
    private String type;
    @Column(name="money")
    private Integer money;
    @Column(name="contact")
    private String contact;
    @Column(name="gender_like")
    private String gender_like;
    @Column(name="intro")
    private String intro;
    @Column(name="goal")
    private String goal;
    @Column(name="sub_no")
    private Integer sub_no;

    public Student(Long id, String name, String nickname, String phone, String psw, String mail, String location, Integer age, String gender, String type, Integer money, String contact, String gender_like, String intro, String goal, Integer sub_no) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.phone = phone;
        this.psw = psw;
        this.mail = mail;
        this.location = location;
        this.age = age;
        this.gender = gender;
        this.type = type;
        this.money = money;
        this.contact = contact;
        this.gender_like = gender_like;
        this.intro = intro;
        this.goal = goal;
        this.sub_no = sub_no;
    }

    public Student() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPsw() {
        return psw;
    }

    public void setPsw(String psw) {
        this.psw = psw;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getMoney() {
        return money;
    }

    public void setMoney(Integer money) {
        this.money = money;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getGender_like() {
        return gender_like;
    }

    public void setGender_like(String gender_like) {
        this.gender_like = gender_like;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public Integer getSub_no() {
        return sub_no;
    }

    public void setSub_no(Integer sub_no) {
        this.sub_no = sub_no;
    }


}
