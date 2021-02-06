package com.letsson.letsson.model;

import javax.persistence.*;

@Entity
@Table(name="teacher")
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "t_id")
    private Long t_id;
    @Column(name = "t_name")
    private String t_name;
    @Column(name = "t_nickname")
    private String t_nickname;
    @Column(name = "t_phone")
    private String t_phone;
    @Column(name = "t_psw")
    private String t_psw;
    @Column(name = "t_email")
    private String t_email;
    @Column(name = "t_location")
    private String t_location;
    @Column(name = "t_age")
    private Integer t_age;
    @Column(name = "t_gender")
    private String t_gender;
    @Column(name = "t_money")
    private Integer t_money;
    @Column(name = "t_contact")
    private String t_contact;
    @Column(name = "t_gender_like")
    private String t_gender_like;
    //null
    @Column(name = "t_photo")
    private String t_photo;
    @Column(name = "t_university")
    private String t_university;
    @Column(name = "t_enroll")
    private String t_enroll;
    //null
    @Column(name = "t_enroll_photo")
    private String t_enroll_photo;
    @Column(name = "sub_no")
    private Integer sub_no;
    @Column(name = "t_intro")
    private String t_intro;
    @Column(name = "t_plan")
    private String t_plan;
    @Column(name = "t_appeal")
    private String t_appeal;
    @Column(name = "t_rate")
    private Float t_rate;
    @Column(name = "t_stnum")
    private Integer t_stnum;

    public Teacher(Long t_id, String t_name, String t_nickname, String t_phone, String t_psw, String t_email, String t_location, Integer t_age, String t_gender, Integer t_money, String t_contact, String t_gender_like, String t_photo, String t_university, String t_enroll, String t_enroll_photo, Integer sub_no, String t_intro, String t_plan, String t_appeal, Float t_rate, Integer t_stnum) {
        this.t_id = t_id;
        this.t_name = t_name;
        this.t_nickname = t_nickname;
        this.t_phone = t_phone;
        this.t_psw = t_psw;
        this.t_email = t_email;
        this.t_location = t_location;
        this.t_age = t_age;
        this.t_gender = t_gender;
        this.t_money = t_money;
        this.t_contact = t_contact;
        this.t_gender_like = t_gender_like;
        this.t_photo = t_photo;
        this.t_university = t_university;
        this.t_enroll = t_enroll;
        this.t_enroll_photo = t_enroll_photo;
        this.sub_no = sub_no;
        this.t_intro = t_intro;
        this.t_plan = t_plan;
        this.t_appeal = t_appeal;
        this.t_rate = t_rate;
        this.t_stnum = t_stnum;
    }

    public Teacher() {

    }

    public Long getT_id() {
        return t_id;
    }

    public void setT_id(Long t_id) {
        this.t_id = t_id;
    }

    public String getT_name() {
        return t_name;
    }

    public void setT_name(String t_name) {
        this.t_name = t_name;
    }

    public String getT_nickname() {
        return t_nickname;
    }

    public void setT_nickname(String t_nickname) {
        this.t_nickname = t_nickname;
    }

    public String getT_phone() {
        return t_phone;
    }

    public void setT_phone(String t_phone) {
        this.t_phone = t_phone;
    }

    public String getT_psw() {
        return t_psw;
    }

    public void setT_psw(String t_psw) {
        this.t_psw = t_psw;
    }

    public String getT_email() {
        return t_email;
    }

    public void setT_email(String t_email) {
        this.t_email = t_email;
    }

    public String getT_location() {
        return t_location;
    }

    public void setT_location(String t_location) {
        this.t_location = t_location;
    }

    public Integer getT_age() {
        return t_age;
    }

    public void setT_age(Integer t_age) {
        this.t_age = t_age;
    }

    public String getT_gender() {
        return t_gender;
    }

    public void setT_gender(String t_gender) {
        this.t_gender = t_gender;
    }

    public Integer getT_money() {
        return t_money;
    }

    public void setT_money(Integer t_money) {
        this.t_money = t_money;
    }

    public String getT_contact() {
        return t_contact;
    }

    public void setT_contact(String t_contact) {
        this.t_contact = t_contact;
    }

    public String getT_gender_like() {
        return t_gender_like;
    }

    public void setT_gender_like(String t_gender_like) {
        this.t_gender_like = t_gender_like;
    }

    public String getT_photo() {
        return t_photo;
    }

    public void setT_photo(String t_photo) {
        this.t_photo = t_photo;
    }

    public String getT_university() {
        return t_university;
    }

    public void setT_university(String t_university) {
        this.t_university = t_university;
    }

    public String getT_enroll() {
        return t_enroll;
    }

    public void setT_enroll(String t_enroll) {
        this.t_enroll = t_enroll;
    }

    public String getT_enroll_photo() {
        return t_enroll_photo;
    }

    public void setT_enroll_photo(String t_enroll_photo) {
        this.t_enroll_photo = t_enroll_photo;
    }

    public Integer getSub_no() {
        return sub_no;
    }

    public void setSub_no(Integer sub_no) {
        this.sub_no = sub_no;
    }

    public String getT_intro() {
        return t_intro;
    }

    public void setT_intro(String t_intro) {
        this.t_intro = t_intro;
    }

    public String getT_plan() {
        return t_plan;
    }

    public void setT_plan(String t_plan) {
        this.t_plan = t_plan;
    }

    public String getT_appeal() {
        return t_appeal;
    }

    public void setT_appeal(String t_appeal) {
        this.t_appeal = t_appeal;
    }

    public Float getT_rate() {
        return t_rate;
    }

    public void setT_rate(Float t_rate) {
        this.t_rate = t_rate;
    }

    public Integer getT_stnum() {
        return t_stnum;
    }

    public void setT_stnum(Integer t_stnum) {
        this.t_stnum = t_stnum;
    }

    @Override
    public String toString() {
        return "Teacher{" +
                "t_id=" + t_id +
                ", t_name='" + t_name + '\'' +
                ", t_nickname='" + t_nickname + '\'' +
                ", t_phone='" + t_phone + '\'' +
                ", t_psw='" + t_psw + '\'' +
                ", t_email='" + t_email + '\'' +
                ", t_location='" + t_location + '\'' +
                ", t_age=" + t_age +
                ", t_gender='" + t_gender + '\'' +
                ", t_money=" + t_money +
                ", t_contact='" + t_contact + '\'' +
                ", t_gender_like='" + t_gender_like + '\'' +
                ", t_photo='" + t_photo + '\'' +
                ", t_university='" + t_university + '\'' +
                ", t_enroll='" + t_enroll + '\'' +
                ", t_enroll_photo='" + t_enroll_photo + '\'' +
                ", sub_no=" + sub_no +
                ", t_intro='" + t_intro + '\'' +
                ", t_plan='" + t_plan + '\'' +
                ", t_appeal='" + t_appeal + '\'' +
                ", t_rate=" + t_rate +
                ", t_stnum=" + t_stnum +
                '}';
    }
}

