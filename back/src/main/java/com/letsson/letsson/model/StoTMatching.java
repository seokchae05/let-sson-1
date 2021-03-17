package com.letsson.letsson.model;


import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "StoTMatching")
public class StoTMatching {
    @Id
    @Column(name="stotmatching_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(targetEntity = Student.class, fetch = FetchType.LAZY)
    @JoinColumn(name="sender",referencedColumnName = "id")
    private Student sender;

    @ManyToOne(targetEntity = Teacher.class, fetch = FetchType.LAZY)
    @JoinColumn(name="receiver",referencedColumnName = "id")
    private Teacher receiver;

    @Column(name="state")
    private String state;


    @CreationTimestamp
    @Column(name="create_date")
    private LocalDateTime create_date;
}
