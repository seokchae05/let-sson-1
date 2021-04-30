package com.letsson.letsson.repository;

import com.letsson.letsson.model.StoTMatching;
import com.letsson.letsson.model.Student;
import com.letsson.letsson.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StoTRepository extends JpaRepository<StoTMatching,Long> {

    List<StoTMatching> findBySender(Student student);

    List<StoTMatching> findByReceiver(Teacher teacher);

    StoTMatching findBySenderAndReceiver(Student student,Teacher teacher);

}
