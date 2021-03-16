package com.letsson.letsson.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "matching")
public class Matching {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;


    @JoinTable(name = "student"
    ,joinColumns = @JoinColumn(name="id"))
    private Long student_id;

    @JoinTable(name="teacher"
    ,joinColumns = @JoinColumn(name="id"))
    private Long teacher_id;

    @Column(name = "sender")
    private String sender;

    @Column(name = "receiver")
    private String receiver;

    @Column(name="state")
    private String state;

    @Column(name = "createDate")
    private LocalDateTime createDate;





}
