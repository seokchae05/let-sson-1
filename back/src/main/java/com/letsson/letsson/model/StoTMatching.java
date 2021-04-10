package com.letsson.letsson.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "StoTMatching")
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
public class StoTMatching {
    @Id
    @Column(name="stotmatching_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    @ManyToOne(targetEntity = Student.class, fetch = FetchType.EAGER)
    @JoinColumn(name="sender",referencedColumnName = "id")
    private Student sender;
    @ManyToOne(targetEntity = Teacher.class, fetch = FetchType.EAGER)
    @JoinColumn(name="receiver",referencedColumnName = "id")
    private Teacher receiver;

    @Column(name="state")
    private String state;

    @Column(name="create_date")
    private String create_date;



}
