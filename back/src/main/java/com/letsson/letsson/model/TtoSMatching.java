package com.letsson.letsson.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.*;
import org.apache.commons.lang.builder.ToStringStyle;
import org.hibernate.annotations.CreationTimestamp;
import org.junit.platform.commons.util.ToStringBuilder;

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
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
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



}
