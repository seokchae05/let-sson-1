package com.letsson.letsson.model;

import javax.persistence.*;

@Entity
@Table(name="teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "nickname")
    private String nickname;
    @Column(name = "phone")
    private String phone;
    @Column(name = "psw")
    private String psw;
    @Column(name = "email")
    private String email;
    @Column(name = "location")
    private String location;
    @Column(name = "age")
    private Integer age;
    @Column(name = "gender")
    private String gender;
    @Column(name = "money")
    private Integer money;
    @Column(name = "contact")
    private String contact;
    @Column(name = "gender_like")
    private String gender_like;
    //null
    @Column(name = "photo")
    private String photo;
    @Column(name = "university")
    private String university;
    @Column(name = "enroll")
    private String enroll;
    //null
    @Column(name = "enroll_photo")
    private String enroll_photo;
    @Column(name = "sub_no")
    private Integer sub_no;
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

    public Teacher() {
    }

    public Teacher(Long id, String name, String nickname, String phone, String psw, String email, String location, Integer age, String gender, Integer money, String contact, String gender_like, String photo, String university, String enroll, String enroll_photo, Integer sub_no, String intro, String plan, String appeal, Float rate, Integer stnum) {
        this.id = id;
        this.name = name;
        this.nickname = nickname;
        this.phone = phone;
        this.psw = psw;
        this.email = email;
        this.location = location;
        this.age = age;
        this.gender = gender;
        this.money = money;
        this.contact = contact;
        this.gender_like = gender_like;
        this.photo = photo;
        this.university = university;
        this.enroll = enroll;
        this.enroll_photo = enroll_photo;
        this.sub_no = sub_no;
        this.intro = intro;
        this.plan = plan;
        this.appeal = appeal;
        this.rate = rate;
        this.stnum = stnum;
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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getUniversity() {
        return university;
    }

    public void setUniversity(String university) {
        this.university = university;
    }

    public String getEnroll() {
        return enroll;
    }

    public void setEnroll(String enroll) {
        this.enroll = enroll;
    }

    public String getEnroll_photo() {
        return enroll_photo;
    }

    public void setEnroll_photo(String enroll_photo) {
        this.enroll_photo = enroll_photo;
    }

    public Integer getSub_no() {
        return sub_no;
    }

    public void setSub_no(Integer sub_no) {
        this.sub_no = sub_no;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getPlan() {
        return plan;
    }

    public void setPlan(String plan) {
        this.plan = plan;
    }

    public String getAppeal() {
        return appeal;
    }

    public void setAppeal(String appeal) {
        this.appeal = appeal;
    }

    public Float getRate() {
        return rate;
    }

    public void setRate(Float rate) {
        this.rate = rate;
    }

    public Integer getStnum() {
        return stnum;
    }

    public void setStnum(Integer stnum) {
        this.stnum = stnum;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", nickname='" + nickname + '\'' +
                ", phone='" + phone + '\'' +
                ", psw='" + psw + '\'' +
                ", email='" + email + '\'' +
                ", location='" + location + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", money=" + money +
                ", contact='" + contact + '\'' +
                ", gender_like='" + gender_like + '\'' +
                ", photo='" + photo + '\'' +
                ", university='" + university + '\'' +
                ", enroll='" + enroll + '\'' +
                ", enroll_photo='" + enroll_photo + '\'' +
                ", sub_no=" + sub_no +
                ", intro='" + intro + '\'' +
                ", plan='" + plan + '\'' +
                ", appeal='" + appeal + '\'' +
                ", rate=" + rate +
                ", stnum=" + stnum +
                '}';
    }
}

