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
@Table(name = "TtoSMatching")
public class TtoSMatching {
    @Id
    @Column(name="ttosmatching_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(targetEntity = Teacher.class, fetch = FetchType.LAZY)
    @JoinColumn(name="sender",referencedColumnName = "id")
    private Teacher sender;

    @ManyToOne(targetEntity = Student.class, fetch = FetchType.LAZY)
    @JoinColumn(name="receiver",referencedColumnName = "id")
    private Student receiver;

    @Column(name="state")
    private String state;


    @CreationTimestamp
    @Column(name="create_date",columnDefinition = "TIMESTAMP")
    private LocalDateTime create_date;
}
